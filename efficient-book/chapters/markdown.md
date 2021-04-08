# mardowm 学习

> 好好学习天天向上

## 列表

- xxx
- xxx
- xxx

1. xxx
2. xxx
3. xxx

## 表格

| a   | b   | c   |
| --- | --- | --- |
| d   | e   | f   |
| ^   | f   |

## 链接

- [百度](https://www.baidu.com/)

## 图片

- ![小狗狗](https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF)

## 代码块

```css
/*不能忍必须个人重置的reset*/
* {
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

/*列表*/
.unstyle-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```js
export default function container(Navigator) {
  let urlRegionId;
  const mapStateToProps = (state: globalStateDef) => {
    if (window.location.href.indexOf("regionId") != -1) {
      let matchReg = /regionId=.*(?<!&)$/;
      urlRegionId = window.location.href.match(matchReg)[0].split("=")[1];
    }
    return {
      regionId: state.global.regionId || urlRegionId,
      moduleName: window.location.pathname.split("/")[3] || "instance",
      openedService: state.global.openedService || [],
    };
  };
  const mapDispatchToProps = (dispatch: any) => {
    return {};
  };

  const wrapper = class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    componentDidMount() {}
    render() {
      return (
        <Navigator
          {...this.state}
          {...this.props}
          regionId={this.props.regionId}
        ></Navigator>
      );
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(wrapper);
}
```

```html
<section class="content">
  <article class="markdown-section" id="main">
    <h1 id="reset个人">
      <a
        href="#/chapters/reset?id=reset%e4%b8%aa%e4%ba%ba"
        data-id="reset个人"
        class="anchor"
        ><span>reset(个人)</span></a
      >
    </h1>
  </article>
</section>
```

```json
{
  "code": 200,
  "message": "操作成功",
  "result": {
    "pageNum": 1,
    "pageSize": 10,
    "total": 5,
    "list": [
      {
        "cloudRegionId": "7975919571338715136",
        "regionShortName": null,
        "securityGroupRuleUuid": "a56d7f76-02bb-461e-a84e-e95be7e698ec",
        "regionName": "廊坊三区对接四大平台",
        "siteName": "中国",
        "portRangeMax": "22",
        "bigRegionName": "华北地区",
        "remoteIpPrefix": "0.0.0.0",
        "securityGroupRuleId": "8068327045974683648",
        "productName": null,
        "cloudBrand": "wocloud-industry",
        "securityGroupId": "8065140109243744257",
        "protocol": "tcp",
        "cloudFlag": "wocloud",
        "regionCode": "cn-langfang-3",
        "secrityGroupRuleNo": null,
        "cloudType": "industry",
        "ruleName": "f826b17a3097430c",
        "azId": null,
        "zoneName": "通用专区1",
        "serviceId": null,
        "productNo": "300-1010",
        "direction": "ingress",
        "cloudRegionName": "廊坊三区",
        "securityGroupName": "aqz_03",
        "ethertype": "ipv4",
        "regionVersion": "r",
        "updateTime": null,
        "requestNo": "4b7e2496e65add89c8703c09b81c1d69",
        "cloudRegionCode": "cn-langfang-3",
        "cloudRegionNature": "沃云.行业云.R版",
        "portRangeMin": "22",
        "regionId": "7975918924153446400",
        "createTime": "2021-04-08 10:34:43"
      },
      {
        "cloudRegionId": "7975919571338715136",
        "regionShortName": null,
        "securityGroupRuleUuid": "b7ba58ce-ff48-4384-9257-266cc477a7db",
        "regionName": "廊坊三区对接四大平台",
        "siteName": "中国",
        "portRangeMax": "3389",
        "bigRegionName": "华北地区",
        "remoteIpPrefix": "0.0.0.0/0",
        "securityGroupRuleId": "8065140154294763520",
        "productName": null,
        "cloudBrand": "wocloud-industry",
        "securityGroupId": "8065140109243744257",
        "protocol": "tcp",
        "cloudFlag": "wocloud",
        "regionCode": "cn-langfang-3",
        "secrityGroupRuleNo": null,
        "cloudType": "industry",
        "ruleName": "bdab517f56b74985",
        "azId": null,
        "zoneName": "通用专区1",
        "serviceId": null,
        "productNo": "300-1010",
        "direction": "ingress",
        "cloudRegionName": "廊坊三区",
        "securityGroupName": "aqz_03",
        "ethertype": "ipv4",
        "regionVersion": "r",
        "updateTime": null,
        "requestNo": "7e9b7a23d5f9210e2edcbd51eb53fa02",
        "cloudRegionCode": "cn-langfang-3",
        "cloudRegionNature": "沃云.行业云.R版",
        "portRangeMin": "3389",
        "regionId": "7975918924153446400",
        "createTime": "2021-03-30 15:31:09"
      },
      {
        "cloudRegionId": "7975919571338715136",
        "regionShortName": null,
        "securityGroupRuleUuid": "4e0dd042-bd6a-4e2e-b7ff-51883dcf7860",
        "regionName": "廊坊三区对接四大平台",
        "siteName": "中国",
        "portRangeMax": "80",
        "bigRegionName": "华北地区",
        "remoteIpPrefix": "0.0.0.0/0",
        "securityGroupRuleId": "8065140154298957824",
        "productName": null,
        "cloudBrand": "wocloud-industry",
        "securityGroupId": "8065140109243744257",
        "protocol": "tcp",
        "cloudFlag": "wocloud",
        "regionCode": "cn-langfang-3",
        "secrityGroupRuleNo": null,
        "cloudType": "industry",
        "ruleName": "b681bce013644abc",
        "azId": null,
        "zoneName": "通用专区1",
        "serviceId": null,
        "productNo": "300-1010",
        "direction": "ingress",
        "cloudRegionName": "廊坊三区",
        "securityGroupName": "aqz_03",
        "ethertype": "ipv4",
        "regionVersion": "r",
        "updateTime": null,
        "requestNo": "e82523b2a632e4f2749b339b13afe9cf",
        "cloudRegionCode": "cn-langfang-3",
        "cloudRegionNature": "沃云.行业云.R版",
        "portRangeMin": "80",
        "regionId": "7975918924153446400",
        "createTime": "2021-03-30 15:31:09"
      },
      {
        "cloudRegionId": "7975919571338715136",
        "regionShortName": null,
        "securityGroupRuleUuid": "773b5372-52ea-4ce2-ad30-9421a77058e5",
        "regionName": "廊坊三区对接四大平台",
        "siteName": "中国",
        "portRangeMax": "443",
        "bigRegionName": "华北地区",
        "remoteIpPrefix": "0.0.0.0/0",
        "securityGroupRuleId": "8065140154298957826",
        "productName": null,
        "cloudBrand": "wocloud-industry",
        "securityGroupId": "8065140109243744257",
        "protocol": "tcp",
        "cloudFlag": "wocloud",
        "regionCode": "cn-langfang-3",
        "secrityGroupRuleNo": null,
        "cloudType": "industry",
        "ruleName": "8b3176684efc4adc",
        "azId": null,
        "zoneName": "通用专区1",
        "serviceId": null,
        "productNo": "300-1010",
        "direction": "ingress",
        "cloudRegionName": "廊坊三区",
        "securityGroupName": "aqz_03",
        "ethertype": "ipv4",
        "regionVersion": "r",
        "updateTime": null,
        "requestNo": "ca80a301858ef50d6c60eb484cf03455",
        "cloudRegionCode": "cn-langfang-3",
        "cloudRegionNature": "沃云.行业云.R版",
        "portRangeMin": "443",
        "regionId": "7975918924153446400",
        "createTime": "2021-03-30 15:31:09"
      },
      {
        "cloudRegionId": "7975919571338715136",
        "regionShortName": null,
        "securityGroupRuleUuid": "487d47fc-5d5e-4835-b167-89abb7c0a80c",
        "regionName": "廊坊三区对接四大平台",
        "siteName": "中国",
        "portRangeMax": "",
        "bigRegionName": "华北地区",
        "remoteIpPrefix": "0.0.0.0/0",
        "securityGroupRuleId": "8065140154298957828",
        "productName": null,
        "cloudBrand": "wocloud-industry",
        "securityGroupId": "8065140109243744257",
        "protocol": "icmp",
        "cloudFlag": "wocloud",
        "regionCode": "cn-langfang-3",
        "secrityGroupRuleNo": null,
        "cloudType": "industry",
        "ruleName": "84eb871beb4543c4",
        "azId": null,
        "zoneName": "通用专区1",
        "serviceId": null,
        "productNo": "300-1010",
        "direction": "ingress",
        "cloudRegionName": "廊坊三区",
        "securityGroupName": "aqz_03",
        "ethertype": "ipv4",
        "regionVersion": "r",
        "updateTime": null,
        "requestNo": "63dd63cd9ed13e28b9ccf4535bd147c9",
        "cloudRegionCode": "cn-langfang-3",
        "cloudRegionNature": "沃云.行业云.R版",
        "portRangeMin": "",
        "regionId": "7975918924153446400",
        "createTime": "2021-03-30 15:31:09"
      }
    ],
    "currentSystemTime": 1617849742863
  }
}
```
