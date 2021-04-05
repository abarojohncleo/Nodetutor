// npm -global command, comes with node
// npm --version

//local dependency -- npm i <package manager>
// global dependency -- npm install -g <package manager>

// package.json manifest file (stores important info about project/program)

// npm init
// npm init -y 

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);