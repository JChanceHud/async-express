# async-express

Simple middleware wrapper to make Express handlers async compatible.

## Usage

`npm install --save async-express`

In a route

```js
const express = require('express');
const asyncExpress = require('async-express');

const app = express();

// As a route
app.get('/', asyncExpress(async (req, res, next) => {
  // Wait 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  // Send a response
  res.send('Waited 5 seconds successfully');
}));
```

The sample above can be refactored as the following

```js
const express = require('express');
const asyncExpress = require('async-express');

const app = express();

const waitForABit = asyncExpress(async (req, res, next) => {
  // Wait 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  // Send a response
  res.send('Waited 5 seconds successfully');
});

app.get('/', waitForABit);
```
