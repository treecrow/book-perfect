## fetch
```js
var options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'admin', password: 'root' }),
    credentials: 'include'
  };

fetch('/api', options).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Oops, error: ', error));
```
