# async-express

Simple middleware wrapper to make Express handlers async compatible.

## Usage

`npm install --save async-express`

In a route

```js
const express = require('express');
const _async = require('async-express');

const app = express();

// As a route
app.get('/', _async((req, res, next) => {
  // Wait 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  // Send a response
  req.send('Waited 5 seconds successfully');
}));
```

The sample above can be refactored using decorator syntax as the following

```js
const express = require('express');
const _async = require('async-express');

const app = express();

app.get('/', waitForABit);

@_async
function waitForABit(req, res, next) {
  // Wait 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  // Send a response
  req.send('Waited 5 seconds successfully');
}
```
