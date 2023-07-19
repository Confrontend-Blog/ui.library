## TODO

- Use hygen for component generation
- Use theme instead of hard-coded css values where possible
- Remove unwanted files and folders from lib, such as `data/fake-data.ts`
- Pipeline for publish on main push

## Introduction

A UI component library for React, custom-tailored for Confrontend Blog. Built atop the white-label Material-UI, it effortlessly blends the power of MUI with the distinctive style of our blog.

## Why having a Pattern/Component/UI Library:

- Design and Dev create and maintain a Pattern Lib
- The Pattern Lib is the main point of transfer
- UI-Code is also developed and tested here
- Components can be shown to all stakeholders
- They form a shared language for the entire team

#### GCP Artifact

https://medium.com/rockedscience/host-private-node-js-packages-on-the-google-cloud-with-artifact-registry-5426538f1afd

#### Publish on Github registry

- `package.json` should look like:

```json
"main": "lib/index.es.js",
// this must point to index.d.ts inside the lib
"types": "lib/src/index.d.ts",
// running build command is enough as it includes both build:types and build:lib
"build": "rm -rf lib/* && concurrently \"yarn:build:*\"",
"build:types": "tsc --emitDeclarationOnly",
"build:lib": "vite --config ./vite.config.ts build",
// do not forget these 2
"publishConfig": {
"registry": "https://npm.pkg.github.com"
},
"files": [
"lib/**/*"
]
```

- Have .npmrc

```
@confrontend:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:\_authToken=token
```

- Finally run `yarn publish`
