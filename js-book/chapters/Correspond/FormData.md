# FormData

```javascript
let xhr=new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            alert(xhr.responseText);
        } else{
            alert(xhr.status);
        }
    }
};
xhr.open("post","example.php",true);
xhr.send(new FormData(document.getElementById("user-info")));
```
