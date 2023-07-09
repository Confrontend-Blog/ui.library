## TODO

- Use hygen for component generation
- Use theme instead of hard-coded css values where possible
- Remove unwanted files and folders from lib, such as `data/fake-data.ts`

# Getting Started

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
