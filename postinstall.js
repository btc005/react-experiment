#!/usr/bin/env node

var fs = require('fs')

var dist = fs.readFileSync(require.resolve('@toggles/react-experiment/dist/index.js'), 'utf8')

fs.writeFileSync('index.js', dist)