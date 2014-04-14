// if you want to use a module like angular on a per-module basis (var angular), you must use the export
//  value within browserify-shim; since angular attaches itself to the window, the export lets your module
//  know to check window object for angular
var angular = require('angular');
var angularRoute = require('angular-route');

console.log(angular);
console.log(angularRoute);