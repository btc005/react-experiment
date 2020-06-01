#!/usr/bin/env node

var fs = require('fs')

var main = fs.readFileSync(require.resolve('@toggles/react-experiment/dist/main.js'), 'utf8')
var mainMin = fs.readFileSync(require.resolve('@toggles/react-experiment/dist/main.min.js'), 'utf8')
var module = fs.readFileSync(require.resolve('@toggles/react-experiment/dist/module.js'), 'utf8')

fs.writeFileSync('main.js', main)
fs.writeFileSync('main.min.js', mainMin)
fs.writeFileSync('module.js', module)