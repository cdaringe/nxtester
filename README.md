# demo/no-debugging

Problem: unable to debug my build

# Reproduction

- clone
- `yarn`
- `node --inspect-brk ./node_modules/.bin/nx build best-app`
  - a `debugger` statement is placed in `apps/best-app/next.config.js`

Observe failure:

```
Debugger listening on ws://127.0.0.1:9229/10537d99-1102-40aa-8820-a5993dce9841
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.

> nx run best-app:build
Starting inspector on 127.0.0.1:9229 failed: address already in use
Waiting for the debugger to disconnect...
```

I speculate that nx is firing up a child process and using the same node vm args
in the child.

**Is there a recipe for no-child processes, or exposing an alt debug port**?
