webpack-config-library v1.0.0
===================
my library config with webpack 3

Install:
-------------------
```sh
git clone https://github.com/rizerok/webpack-3-config-library.git .
npm i
```

Usage:
-------------------
```npm run build:lib``` - build **lib source**

```npm run build:prod``` - prepare lib for production and build README.md and .gitignore

```npm run build:dev``` - build **lib source** and dev

```npm run build:demo``` - build dynamic demo with **lib dist**

```npm run watch:dev``` - develop lib with devServer

```npm run watch:demo``` - develop dynamic demo with **lib dist** and devServer

Dynamic demo:
-------------------
Just add new directory, like demo1 or demo2, to **demo/handled/**