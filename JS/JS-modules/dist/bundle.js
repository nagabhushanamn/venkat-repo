/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pack1_product__ = __webpack_require__(4);




var vgreet=__webpack_require__(1);

vgreet.greet('en');
vgreet.greet('es');


// import {id} from './pack1/product';
// import {id as customerId} from './pack1/customer';
// console.log(id)

// import {id,name} from './pack1/product';

// import * as product from './pack1/product';


// import {product} from './pack1/product';

// // product=null; // Error
// product.name="Nee Laptop..."






/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


// var app = app || {};

// (function () {

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };

//     var i = 1000; // private

//     app.mod1 = o;

// })();


//--------------------------------------

// console.log('mod1.js');

var message="Hello..";

var en=__webpack_require__(2);
var es=__webpack_require__(3);

function greet(lang){
    if(lang==="en")en()
    if(lang==="es")es()
}


module.exports={
    greet
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {


// var app=app||{};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };

//     var i=1000; // private

//     app.mod2=o;

// })();


function greet(){
    console.log('Hello...');
}

module.exports=greet;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


// var app=app||{};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };

//     var i=1000; // private

//     app.mod3=o;

// })();


function greet(){
    console.log('Ola...');
}

module.exports=greet;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Comp1 */
/* unused harmony export Comp2 */



// export let id=123;
// export let name="laptop";

// let id=123;
// let name="Laptop"

// export {id,name}


// let product={
//     id:123,
//     name:'Laptop'
// }

// export {product}

//------------------------------------------


class MainComponent{

}

class Comp1{}
class Comp2{}



/* unused harmony default export */ var _unused_webpack_default_export = (MainComponent);


/***/ })
/******/ ]);