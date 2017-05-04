'use strict';
// =============================== >>模块引入
var loopback = require('loopback');
var logger = require('../../server/log').logger;
var extend = require('util')._extend;
var fs = require('fs');
var uuid = require('uuid');
var path = require('path');
var htmlparser = require("htmlparser2");
//var config = require('loopback:boot:config-loader');
module.exports = function(Sceneshowservice) {
  // =============================== >>变量声明
  var CjFollow = loopback.getModelByType('CjFollow');
  var CjScene = loopback.getModelByType('CjScene');
  var CjScenepage = loopback.getModelByType('CjScenepage');
  var CjStat = loopback.getModelByType('CjStat');

  var scenesLimit = 10;
  var scenesOffset = 0;
  var sceneLastId = 99999999999 + scenesLimit;
  var configService = {PREFIX_FILE_HOST: '/Uploads/'};

  // =============================== >>通用方法
  //深复制
  function clone(myObj) {
    if (typeof(myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
      myNewObj[i] = clone(myObj[i]);
    return myNewObj;
  }
  function getShowVal(val, isXY) {
    if (!val) return 0;
    var scaleX = 1; // configService.scaleX;
    var scaleY = 1; // configService.scaleY;
    if (isXY == 'x')
      var scale = scaleX;
    else
      var scale = scaleY;
    var newVal;
    if (!isNaN(val)) {
      newVal = val * scale;
    } else {
      var str = val.replace('px', '');
      newVal = parseFloat(str) * scale;
    }
    return newVal;
  }
  function isArray(arr) {
    return typeof arr == 'object' && arr.constructor == Array;
  }
  //包装场景（支持场景列表的包装）
  function checkAndChangeSceneList(sceneData) {
    if (!sceneData)  return sceneData;
    var scenesList = sceneData;
    if (!isArray(sceneData)) {
      scenesList.cover = configService.PREFIX_FILE_HOST + sceneData.thumbnailVarchar;
      scenesList.musicsrc = configService.PREFIX_FILE_HOST + sceneData.musicurlVarchar;
      scenesList.imgsrc = configService.PREFIX_FILE_HOST + sceneData.thumbnailVarchar;
      scenesList.name = sceneData.scenenameVarchar;
      scenesList.sceneid = sceneData.sceneidBigint;
      return scenesList;
    }
    for (var index = 0; index < sceneData.length; index++) {
      scenesList[index].cover = configService.PREFIX_FILE_HOST + sceneData[index].thumbnailVarchar;
      scenesList[index].musicsrc = configService.PREFIX_FILE_HOST + sceneData[index].musicurlVarchar;
      scenesList[index].imgsrc = configService.PREFIX_FILE_HOST + sceneData[index].thumbnailVarchar;
      scenesList[index].name = sceneData[index].scenenameVarchar;
      scenesList[index].sceneid = sceneData[index].sceneidBigint;
      //下面的代码什么意思？
      //scenesList[index].stat = JSON.stringify(sceneData[index].scene_hasone_stat);
      if (sceneData[index].stat)
        console.log('replaceOrCreate stat==', sceneData[index].stat.toString());
      if (!sceneData[index].stat) {
        var newStat = {
          id: sceneData[index].sceneidBigint,
          sceneId: sceneData[index].sceneidBigint,
          shows: 0,
          lovecount: 0,
          commentcount: 0,
          showcount: 0,
          transfercount: 0,
        };
        CjStat.replaceOrCreate(newStat, function(err, data) {
          console.log('replaceOrCreate err==', err);
          console.log('replaceOrCreate data==', data);
          //// scenesList[ index ].stat=data;
        });
        //// scenesList[ index ].stat={};
        /* scenesList[ index ].stat.sceneId = sceneData[ index ].sceneidBigint;
         scenesList[ index ].stat.shows = 0;
         scenesList[ index ].stat.lovecount = 0;
         scenesList[ index ].stat.commentcount = 0;
         scenesList[ index ].stat.showcount = 0;
         scenesList[ index ].stat.transfercount = 0;*/
      }
      ///scenesList[index].stat = loopback.createModel({'name':'stat'});
      ///scenesList[index].stat.mixin(sceneData[index].scene_hasone_stat);
      ///console.log('sceneData[index].scene_hasone_stat=====',sceneData[index].scene_hasone_stat);
      ///console.log(' =333333=====',scenesList[index].stat);
      /// scenesList.push(sceneData[index]);
    }
    return scenesList;
  }
  //包装场景对应pages，生成的内容存放到page对应的elements属性中
  function preparePageData(pageDataJson, scaleX, scaleY) {
    configService.scaleX = scaleX;
    configService.scaleY = scaleY;
    var pagePrepared = pageDataJson; //生成后的数据
    pagePrepared.elements = [];
    var pageData = JSON.parse(pageDataJson.contentText);
    //console.error('pageDataJson.contentText=',pageData );
    for (var index = 0; index < pageData.length; index++) {
      var ele = pageData[index];
      ///console.error('ele in pageData=',ele );
      if (!ele.properties)
        break;
      ///console.log('MainPageCtrl===pageList  id=',ele.id);
      //console.log('MainPageCtrl===pageList  css=',ele.css);
      // console.log('MainPageCtrl===pageList type=',ele.type);
      // console.log('MainPageCtrl===pageList properties=',ele.properties);
      ele.type = ele.type + '';
      //$log.info('test isNumber',angular.isNumber(ele.type));
      //$log.warn('test isString',angular.isString(ele.type));
      if (!(ele.type in [2, 3, 4, '4', 'p', 'h', 'x', '2', '3']))
        console.warn('not supported type!!!', 'not supported type:' + ele.type);
      if (ele.type == 'h') {
        console.info('test type ==h 是图形　area shape 类型', (ele.type));
        console.info('test type ==h 是图形　area shape width', ele.properties.width);
        console.info('test type ==h 是图形　area shape height', ele.properties);
        ele.properties.width = getShowVal(ele.properties.width, 'x');
        ele.properties.height = getShowVal(ele.properties.height, 'y');
      }
      if (ele.type == 'p') {
        console.warn('test type ==p 是图集　　ｃｈｉｌｄｒｅｎ 带有多个图片', ele);
        for (var childOne in  ele.properties.children) {
          if (!childOne) continue;
          console.warn('test type ==p 是图集　　ｃｈｉｌｄｒｅｎ 带有多个图片', childOne.toString());
          /// childOne.src = configService.PREFIX_FILE_HOST + childOne.src;
          /// childOne.width = getShowVal ( childOne.width , 'x' );
          /// childOne.height = getShowVal ( childOne.height , 'y' );
        }
      }
      if (ele.type == '2' || ele.type == 'x') {
        console.log(' ===pageList text =', ele.content);
        //////////////////// ele.properties.width = ele.properties.width * scaleX;
        //////////////////// ele.properties.height = ele.properties.height * scaleY;
        if (ele.properties.dataUrl && ele.properties.dataUrl.indexOf('http') < 0) {
          /////ele.properties.dataUrl=configService.PREFIX_FILE_HOST + ele.properties.dataUrl;
        }
      }
      if (ele.type == 4 && ele.properties.src && ele.properties.src.indexOf('http') < 0) {
        ele.properties.src = configService.PREFIX_FILE_HOST + ele.properties.src;
      }
      if (ele.type == 4 && ele.properties.src) {
        if (!isNaN(ele.properties.width)) {
          ele.properties.width = ele.properties.width * scaleX;
        } else {
          var str = ele.properties.width.replace('px', '');
          ele.properties.width = parseFloat(str) * scaleX;
        }
        if (!isNaN(ele.properties.height)) {
          ele.properties.height = ele.properties.height * scaleY;
        } else {
          var str = ele.properties.height.replace('px', '');
          ele.properties.height = parseFloat(str) * scaleY;
        }
        if (!isNaN(ele.properties.imgStyle)) {
          if (!isNaN(ele.properties.imgStyle.width)) {
            ele.properties.imgStyle.width = ele.properties.imgStyle.width * scaleX;
          }
          if (!isNaN(ele.properties.imgStyle.height)) {
            ele.properties.imgStyle.height = ele.properties.imgStyle.height * scaleY;
          }
          if (!isNaN(ele.properties.imgStyle.marginLeft)) {
            ele.properties.imgStyle.marginLeft = ele.properties.imgStyle.marginLeft * scaleX;
          } else {
            var str = ele.properties.imgStyle.marginLeft.replace('px', '');
            ele.properties.imgStyle.marginLeft = parseFloat(str) * scaleX;
          }
          if (!isNaN(ele.properties.imgStyle.marginTop)) {
            ele.properties.imgStyle.marginTop = ele.properties.imgStyle.marginTop * scaleY;
          } else {
            var str = ele.properties.imgStyle.marginTop.replace('px', '');
            ele.properties.imgStyle.marginTop = parseFloat(str) * scaleY;
          }
        }
      }
      if (ele.type == '3' && ele.properties.imgSrc && ele.properties.imgSrc.indexOf('http') < 0)
        ele.properties.imgSrc = configService.PREFIX_FILE_HOST + ele.properties.imgSrc;
      if (ele.type == '3' && ele.properties.imgSrc) {
        if (!isNaN(ele.properties.width)) {
          ele.properties.width = 320 * scaleX;
        } else {
          var str = ele.properties.width ? ele.properties.width.replace('px', '') : 320;
          ele.properties.width = parseFloat(str) * scaleX;
        }
        if (!isNaN(ele.properties.height)) {
          ele.properties.height = 480 * scaleY;
        } else {
          var str = ele.properties.height ? ele.properties.height.replace('px', '') : 480;
          ele.properties.height = parseFloat(str) * scaleY;
        }
      }
      ele.properties.anim = ele.properties.anim || {};
      if (!ele.cssStype || !ele.myattribute) {
        var cssStyle = '';
        var anim = '';
        for (var key in  ele.css) {
          var val = ele.css[key];
          switch (key) {
            case 'zIndex':
              key = 'z-index';
              break;
            case 'backgroundColor':
              key = 'background';
              break;
            case 'borderWidth':
              key = 'border-width';
              break;
            case 'borderStyle':
              key = 'border-style';
              break;
            case 'borderColor':
              key = 'border-color';
              break;
            case 'paddingBottom':
              key = 'padding-bottom';
              val = val * scaleX + 'px';
              break;
            case 'paddingTop':
              key = 'padding-top';
              val = val * scaleX + 'px';
              break;
            case 'lineHeight':
              key = 'line-height';
              break;
            case 'top':
              if (val > 0) {
                ele.css.top = val * scaleY;
                val = val * scaleY + 'px';
              }
              break;
            case 'left':
              if (val > 0) {
                ele.css.left = val * scaleX;
                val = val * scaleX + 'px';
              }
              break;
            case 'boxShadow':
              key = 'box-shadow';
              break;
            case 'width':
              ele.css.width = val * scaleX;
              val = val * scaleX + 'px';
              break;
            case 'height':
              ele.css.height = val * scaleY;
              val = val * scaleY + 'px';
              break;
            case 'content':
              val = '';
              break;
          }
          //console.log('css=',val +'---'+key );
          cssStyle = cssStyle + key + ':' + val + ';';
        }
        var myanimarr = [
          'fadeIn',
          [
            'fadeInUp',
            'fadeInRight',
            'fadeInDown',
            'fadeInLeft',
          ],
          [
            'bounceOutUp',
            'bounceOutRight',
            'bounceOutDown',
            'bounceOutLeft',
          ],
          [
            'bounceInUp',
            'bounceInRight',
            'bounceInDown',
            'bounceInLeft',
          ],
          [
            'fadeOutUp',
            'fadeOutRight',
            'fadeOutDown',
            'fadeOutLeft',
          ],
          'flipInY',
          'bounceIn',
          'zoomOut',
          'rollIn',
          'lightSpeedIn',
          'wobble',
          'rubberBand',
          'rotateIn',
          'flip',
          'swing',
          'tada',
          'jello',
          'fadeOut',
          'flipOutY',
          'bounceOut',
          'zoomIn',
          'rollOut',
          'lightSpeedOut',
        ];
        ele.animtype = 'fadeIn';
        ele.animduration = '0.01s';
        ele.animdelay = '0.001s';
        ele.animnum = 1;
        //console.log('ele['properties']['anim']',ele['properties']['anim']);
        for (var key in ele['properties']['anim']) {
          var val = ele['properties']['anim'][key];
          var value = ele['properties']['anim'];
          //console.log('key==','key='+key+' val='+value );
          //console.log('value',value['type']);

          if (isArray(myanimarr[value['type']])) {
            ele.animtype = myanimarr[value['type']][value['direction']];
          } else if (myanimarr[value['type']]) {
            ele.animtype = myanimarr[value['type']];
            // console.log('ele.animtype',ele.animtype,value['type'])
          } else {
            ele.animtype = 'fadeIn';
          }
          ele.animduration = '0.01s';
          if (value['duration']) {
            ele.animduration = value['duration'] + 's';
          };
          ele.animdelay = '0.01s';
          if (value['delay']) {
            ele.animdelay = value['delay'] + 's';
          } else {
            ele.animdelay = '0.2s';
          }
          ele.animnum = 1;
          if (value['countNum']) {
            ele.animnum = value['countNum'];
          }
          //console.log(value)
          //console.log(animdelay);
          //console.log(animtype);
          //console.log(attribute)
        }
        var animation = ' ';
        animation = animation + ' ' + ele.animtype + ' ' + ele.animduration + ' ' + 'ease ' + ele.animdelay + ' ' + ele.animnum + ' both';
        //ele.myattribute=attribute;
        ele.cssStype = cssStyle + 'position:absolute;';   //animation-play-state:paused;
        ele.animation = animation;
        ele.cssStyle = cssStyle + 'position:absolute;';
      }
      //TODO: 每一个元素需要一个name， 用来做一对一定位修改使用， 主要是模板加载过程中
      if (!ele.name)
        ele.name = 'TESTNAME';
      console.log('ele===', ele);
      pagePrepared.elements.push(ele);
    }
    return pagePrepared;
  }
  // 根据相应的字体对应相应的文字生成 相应数组
  var familyAyy=[];
  var myFontFamily=null;
  var isFamily=null;
  function makeFamilyArr(content){
    var parser = new htmlparser.Parser({
      onopentag: function(name, attribs){
        if(name === "span"){
          // console.log(name)
          // console.log("JS! Hooray!",attribs['style']);
          if(attribs['style'].split(':')[0]=='font-family'){
            myFontFamily=attribs['style'].split(':')[1].split(';')[0];
            isFamily=true;
          }

          console.log(myFontFamily)
        }
      },
      ontext: function(text){
        console.log(myFontFamily,"-->", text);
        if(isFamily==true){
          familyAyy[myFontFamily]=text;
          isFamily=false;
        }

      },
      onclosetag: function(tagname){
        if(tagname === "span"){
          console.log("That's it?!");
        }
      }
    }, {decodeEntities: true});
    parser.write(content);
    parser.end();
  }

  // =============================== >>方法接口
  //将传入的字符压缩为css字体文件，并返回给前端相应链接
  Sceneshowservice.getFontCssByTextAndFontName = function(text, fontName, cb) {
    var fontPath = path.join(__dirname + '/../../', 'public/ChinaFont');
    var fontNamePath = fontPath + '/font/' + fontName + '.ttf';
    var tmpPath = uuid.v1();
    var dstPath = path.join(__dirname + '/../../', 'public/tmpFont/' + tmpPath);
    var cssPath = 'tmpFont/' + tmpPath + '/' + fontName + '.css';
    console.log(fontNamePath);
    fs.exists(fontNamePath, function(isExist) {
      if (!isExist) {
        cb(null, '');
        return;
      }
    });
    var Fontmin = require('fontmin');
    /// var svgo = require('imagemin-svgo');
    var fontmin = new Fontmin()
      .src(fontNamePath)
      .use(Fontmin.glyph({
        text: text,
        hinting: false,
      }))
      .use(Fontmin.ttf2eot())
      // deflate woff. default = false
      .use(Fontmin.ttf2woff({deflate: true}))
      .use(Fontmin.css({
        fontPath: './',         // location of font file
        base64: false,           // inject base64 data:application/x-font-ttf; (gzip font with css).
        // default = false
        glyph: true,            // generate class for each glyph. default = false
        iconPrefix: fontName + '-icon',  // class prefix, only work when glyph is `true`. default to 'icon'
        fontFamily: fontName,   // custom fontFamily, default to filename or get from analysed ttf file
        asFileName: false,      // rewrite fontFamily as filename force. default = false
        local: true,             // boolean to add local font. default = false
      }))
      .use(Fontmin.ttf2svg())
      .dest(dstPath);
    fontmin.run(function(err, files, stream) {
      if (err) {
        console.error('err', err);
        throw err;
      }
      console.log(files);
      ///console.log(files[0]);
      // => { contents: <Buffer 00 01 00 ...> }
    });
    cb(null, cssPath);
  };
  Sceneshowservice.setDefaultFileUrlHead = function(url, cb) {
    Sceneshowservice.defaultFileUrlHead = url;
    configService.PREFIX_FILE_HOST = url;
    cb(null, Sceneshowservice.defaultFileUrlHead);
  };
  //根据场景类型 获取模板列表
  Sceneshowservice.getTplScenesBySceneType = function(sceneTypeId, cb) {
    // console.log('getTplScenesBySceneType   sceneTypeId==', sceneTypeId);
    var scenes = CjScene.find({
      where: {
        scenetypeInt: sceneTypeId,
        isTpl: 1,
      },
      limit: 10,
      offset: 0,
      order: 'sceneidBigint desc',
    }, function(err, data) {
      // 可以使用checkAndChangeSceneList包装data再返回
      var respData = [];
      for (var idx = 0; idx < data.length; idx++) {
        var newScene = data[idx];
        // console.log('getTplScenesBySceneType scene', newScene);
        newScene.cover = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.musicsrc = configService.PREFIX_FILE_HOST + newScene.musicurlVarchar;
        newScene.imgsrc = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.scenename = newScene.scenenameVarchar;
        newScene.sceneid = newScene.sceneidBigint;
        respData.push(newScene);
      }
      cb(null, respData);
    });
  };
  //与getTplScenesBySceneType方法类似，感觉像是测试用例
  Sceneshowservice.getScenesBySceneType = function(sceneType, isMore, cb) {
    if (!isMore) {
      scenesOffset = 0;
      sceneLastId = 99999999999 + scenesLimit;
    }
    // sceneType   999999 最新  888888: 最热 777777：推荐
    if (sceneType == 999999) {
      var whereParam = {sceneidBigint: {lt: sceneLastId}};
      var orderParam = 'sceneidBigint desc';
    } else if (sceneType == 888888) {
      var whereParam = {sceneidBigint: {lt: sceneLastId}};
      var orderParam = 'hitcountInt  desc';
    } else if (sceneType == 777777) {
      var whereParam = {sceneidBigint: {lt: sceneLastId}};
      var orderParam = 'usecountInt  desc';
    } else {
      var whereParam = {sceneidBigint: {lt: sceneLastId}, scenetypeInt: sceneType};
      var orderParam = 'sceneidBigint desc';
    }
    console.log('getScenesBySceneType scenesOffset', scenesOffset);
    console.log('getScenesBySceneType sceneLastId', sceneLastId);
    var scenes = CjScene.find({
      include: ['author', 'stat'],
      where: whereParam,
      limit: scenesLimit,
      offset: scenesOffset,
      order: orderParam,
    }, function(err, data) {
      if (!data || data.length == 0) {
        cb(null, []);
        return;
      }
      console.info('getScenesBySceneType  success=', data);
      var sceneData = extend(data);
      sceneLastId = sceneData[sceneData.length - 1].sceneidBigint;
      console.log('getScenesBySceneType sceneLastId', sceneLastId);
      console.log('getScenesBySceneType data', sceneData);
      var respSceneList = checkAndChangeSceneList(sceneData);
      cb(null, respSceneList);
    });
  };
  //根据ID获取一个场景
  Sceneshowservice.getSceneInfo = function(sceneId, cb) {
    console.log('getSceneInfo   sceneId==', sceneId);
    CjScene.findById(
      sceneId, function(err, data) {
        console.error('getSceneInfo   err=', err + '----------' + data);
        var sceneData = checkAndChangeSceneList(data);
        cb(null, sceneData);
        console.info('getSceneInfo-----------');
      });
  };
  // 根据scenecodeVarchar获取一个场景
  Sceneshowservice.getSceneInfoByCode = function(sceneCode) {
    console.log('getSceneInfoByCode.    sceneCode==', sceneCode);
    var sceneInfo = CjScene.findOne({
      filter: {where: {scenecodeVarchar: sceneCode}},
    }, function(err, data) {
      console.info('getSceneInfoByCode  success=', data);
      var sceneData = checkAndChangeSceneList(data);
      cb(null, sceneData);
    });
  };
  //更新或创建cjstat
  Sceneshowservice.updateStat = function(stat, cb) {
    ///var dataJson =  JSON.parse(stat);
    if (!stat.id) stat.id = 0;
    console.log('updateStat=========', stat);
    CjStat.replaceOrCreate(stat, function(err, data) {
      console.log('newData=========', data);
      cb(null, data);
    });
  };
  //更新或创建cjfollow
  Sceneshowservice.followScene = function(userId, sceneId, cb) {
    var followData = {
      id: 0,
      userid: userId,
      sceneid: sceneId,
      followtime: new Date().getTime(),
    };
    var res = CjFollow.replaceOrCreate(followData);
    cb(null, 'isFollowed');
  };
  //根据userId获取相应的CjFollow
  Sceneshowservice.getFollowScenes = function(userId, cb) {
    var scenes = CjFollow.find({
      include: ['followUser', 'followScene'],
      where: {userid: userId},
      limit: 10,
      offset: 0,
      order: 'followtime desc',
    }, function(err, data) {
      // 可以使用checkAndChangeSceneList包装data再返回
      var respData = [];
      for (var idx = 0; idx < data.length; idx++) {
        var scene = data[idx];
        console.log('followScene scene', scene);
        var newScene = scene; //.__data.followScene.__data ;
        newScene.cover = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.musicsrc = configService.PREFIX_FILE_HOST + newScene.musicurlVarchar;
        newScene.imgsrc = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.scenename = newScene.scenenameVarchar;
        newScene.sceneid = newScene.sceneidBigint;
        respData.push(newScene);
      }
      cb(null, respData);
    });
  };
  //根据userId获取相应的CjScene
  Sceneshowservice.getUserScenes = function(userId, cb) {
    console.log('getUserScenes===========', userId);
    var scenes = CjScene.find({
      where: {useridInt: userId},
      limit: 10,
      offset: 0,
      order: 'sceneidBigint desc',
    }, function(err, data) {
      var respData = [];
      for (var idx = 0; idx < data.length; idx++) {
        var newScene = data[idx];
        console.log('getUserScenes scene', newScene);
        newScene.cover = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.musicsrc = configService.PREFIX_FILE_HOST + newScene.musicurlVarchar;
        newScene.imgsrc = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        newScene.scenename = newScene.scenenameVarchar;
        newScene.sceneid = newScene.sceneidBigint;
        respData.push(newScene);
      }
      cb(null, respData);
    });
  };
  //根据sceneId获取所有相应的scene（包含了page信息）
  Sceneshowservice.getSceneAll = function(sceneId, cb) {
    var scenes = CjScene.findById(sceneId, {include: ['pages']}, function(err, data) {
      logger.info('getSceneAll data==', data);
      var pagesMap = [];
      var sceneData = checkAndChangeSceneList(data);
      for (var idx = 0; idx < sceneData.__data.pages; idx++) {
        var page = sceneData.__data.pages[idx];
        logger.info('getSceneAll one page ==', idx);
        var pageData = preparePageData(page, 1, 1);
        pageData.contentText = [];
        //增加一个 elements 存放整理后数据
        ///pagesMap.push ( pageData );
        sceneData.pages[idx] = pageData;
        ///var newScene = scene.__data.followScene.__data ;
        ///newScene.cover = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        ///newScene.musicsrc = configService.PREFIX_FILE_HOST + newScene.musicurlVarchar;
        ///newScene.imgsrc = configService.PREFIX_FILE_HOST + newScene.thumbnailVarchar;
        ///newScene.scenename =  newScene.scenenameVarchar;
        ///newScene.sceneid = newScene.sceneidBigint;
        ///respData.push(newScene);
      }
      cb(null, sceneData);
      ///  console.log ( data );
    });
  };
  //这个是获取哪个场景，返回的是场景列表（非单个场景）
  Sceneshowservice.getBestScenes = function(cb) {
    var sceneLastId = 99999999999;
    var scenes = CjScene.find({
      include: ['author', 'stat'],
      where: {sceneidBigint: {lt: sceneLastId}},
      limit: 5,
      offset: 0,
      order: 'sceneidBigint desc',
      //TODO:  order by
    }, function(err, data) {
      cb(null, data);
      console.log(data);
    });
  };
  //与getNewScenes方法类似，返回的场景进行了包装
  Sceneshowservice.getNewScenes = function(cb) {
    var sceneLastId = 99999999999;
    var scenes = CjScene.find({
      include: ['author', 'stat'],
      where: {sceneidBigint: {lt: sceneLastId}},
      limit: 5,
      offset: 0,
      order: 'sceneidBigint desc',
    }, function(err, data) {
      console.error('err=====', err);
      var respSceneList = checkAndChangeSceneList(data);
      cb(null, respSceneList);
    });
  };
  //根据sceneidBigint返回对应的page（包装过的）
  Sceneshowservice.getScenePages = function(sceneId, scaleX, scaleY, cb) {
    console.log('sceneId==', sceneId);
    console.log('scaleX==', scaleX);
    console.log('scaleY==', scaleY);
    var pagesMap = [];
    var scenePages = CjScenepage.find({
      where: {sceneidBigint: sceneId},
      order: 'pagecurrentnumInt ASC',
    }, function(err, data) {
      // console.log(data);
      for (var index = 0; index < data.length; index++) {
        var onePage = data[index];
        //   console.log('onePage======',onePage);
        var pageData = preparePageData(onePage, scaleX, scaleY);
        pageData.contentText = [];
        //增加一个 elements 存放整理后数据
        pagesMap.push(pageData);
        // console.log('pagesMap======',pagesMap);
      }
      cb(null, pagesMap);
      console.log(pagesMap);
    });
  };

  // =============================== >>REST接口声明
  Sceneshowservice.remoteMethod('followScene', {
    accepts: [{arg: 'userId', type: 'number'}, {arg: 'sceneId', type: 'number'}],
    returns: {arg: 'authorInfo', type: 'object'},
  });
  Sceneshowservice.remoteMethod('getBestScenes', {returns: {arg: 'scenes', type: 'object'}});
  Sceneshowservice.remoteMethod('getNewScenes', {returns: {arg: 'scenes', type: 'object'}});
};
