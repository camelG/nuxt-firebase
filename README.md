# fire-auth

> nuxtjs + firebase auth

- [x] login
- [x] register

## Download

```bash
git clone https://github.com/camelg/nuxt-firebase
```

## Config

```bash
# plugins/firebase.js
import firebase from 'firebase'

if(!firebase.apps.length){
var config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  };
  firebase.initializeApp(config);
}

export default firebase
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
