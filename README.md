# reproduction-next-jest-esm
Test repo for reproducing Next/Jest testing with swiper (ESM) modules. 
Packages that are distributed as ESM modules (.mjs files) is not possible to import in components that should be tested.

1. Run `yarn install`
2. Run `yarn test`

Notice the error

```
    Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/per.daleskog/varner_web/reproduction-next-jest-esm/node_modules/swiper/swiper.css:14
    @font-face {
    ^

    SyntaxError: Invalid or unexpected token

      11 | import {
      12 |   Autoplay,
    > 13 |   EffectFade,
         | ^
      14 |   Zoom,
      15 |   Scrollbar,
      16 |   Pagination,

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)
      at Object.<anonymous> (components/Swiper/Swiper.tsx:13:1)
      at Object.<anonymous> (components/Swiper/index.ts:11:17)
      at Object.<anonymous> (components/Swiper/__tests__/Swiper.test.tsx:7:50)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.238 s

```


