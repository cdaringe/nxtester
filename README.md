# Nxtester

## demo/nx-build-with-deps-ignored

Desired outcome: `nx build --with-deps` to _build_ deps
Actual: deps are not built

## Reproduction

- clone
- install: `yarn`
- try to build: `yarn build --with-deps`
  - observe failure
- manually build a dependency: `yarn build lib-with-custom-build --skip-nx-cache`
- build again: `yarn build`
  - observe success
