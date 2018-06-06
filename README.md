# Learn Fetch

Official `fetch` docs
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters

### Getting started

- set up client
  - Fork and clone repo
  - Install dependencies: `npm install` (`node-fetch` is the only dependency)
  - `cd learn-fetch`

- start server
  - [Skip if you've alr done this] `git clone https://github.com/thoughtworks-jumpstart/express_passport_mongoose_example.git`
  - `cd express_passport_mongoose_example`
  - `npm install`
  - `mongod`
  - `npm start` (this will run on port 3000)

### Writing our HTTP requests using fetch

#### GET requests

`GET /api/public`

```js
fetch(`${BASE_URL}/api/public`)
  .then(data => data.json())
  .then(data => console.log(data));
```


#### POST requests with options (HTTP method)

`POST /api/users`

```js
fetch(`${BASE_URL}/api/users",`{
  method: "POST"
})
  .then(data => data.json())
  .then(data => console.log(data));
```

#### POST requests with options (HTTP method + headers + body)

`POST /api/users` (create new user)

```js
fetch(`${BASE_URL}/api/users",`{
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    user: {
      username: "someuser",
      email: "someuser@email.com",
      password: "12345678"
    }
  })
})
  .then(data => data.json())
  .then(data => console.log(data));
```

#### Any request with authorization token

`GET /api/users` (protected route)

```js
fetch(`${BASE_URL}/api/user",`{
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Token <YOUR_TOKEN_HERE>"
  }
})
  .then(data => data.json())
  .then(data => console.log(data));

```

