# useShiftKey [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20to%20Shift%20key%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-shift-key&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-shift-key.svg)](https://www.npmjs.com/package/use-shift-key) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-shift-key.svg)](https://www.npmjs.com/package/use-shift-key) [![downloads](https://img.shields.io/npm/dt/use-shift-key.svg)](https://www.npmjs.com/package/use-shift-key) [![build](https://api.travis-ci.com/CharlesStover/use-shift-key.svg)](https://travis-ci.com/CharlesStover/use-shift-key/)

Listen to Shift key events with a React hook.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-shift-key` or
- `yarn add use-shift-key`

## Use

```javascript
import useShiftKey from 'use-shift-key';

function App() {
  const shiftKey = useShiftKey();
  return <p>The Shift key is {shiftKey ? 'pressed' : 'not pressed'}.</p>;
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
