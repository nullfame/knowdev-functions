# KnowDev Functions 🧰

## 📋 Usage

``` bash
npm install --save @knowdev/functions
```

## 📖 Reference

### envBoolean

Look up a key in `process.env` and coerce it into a boolean.
Returns `true` for `true` (case-insensitive) and `1` for string, boolean, and numeric types.
Returns `false` for `false` (case-insensitive) and `0` for string, boolean, and numeric types.
Returns `undefined` otherwise.

``` javascript
const { envBoolean } = require("@knowdev/functions");

process.env.AWESOME = true;

if (envBoolean("AWESOME")) {
  console.log("Awesome!");
}
```

#### envBoolean: defaultValue

``` javascript
const { envBoolean } = require("@knowdev/functions");

if (envBoolean("AWESOME", { defaultValue: true })) {
  console.log("Awesome!");
}
```

### getObjectKeyCaseInsensitive

``` javascript
const { getObjectKeyCaseInsensitive } = require("@knowdev/functions");

const object = { one: 1 };
getObjectKeyCaseInsensitive(object, "ONE"); // 1
```

## 🚀 Deployment

`npm publish --access=public`

## 📝 Changelog

* 0.2.0: getObjectKeyCaseInsensitive
* 0.1.0: envBoolean

## 📜 License

All rights reserved. Safe for use around pets.
