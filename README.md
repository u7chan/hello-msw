# hello-msw

msw example
https://mswjs.io/

```
yarn test
yarn run v1.22.19
$ jest
  console.log
    MSW intercepted: GET http://localhost:3000/example

      at _Emitter.<anonymous> (index.test.ts:15:11)
          at Array.forEach (<anonymous>)

  console.log
    ### msw stub called !!

      at index.test.ts:7:13

 PASS  ./index.test.ts
  example
    ✓ case 1 (47 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.032 s, estimated 3 s
```
