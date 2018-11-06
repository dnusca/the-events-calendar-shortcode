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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./block/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block/components/blockContainer.js":
/*!********************************************!*\
  !*** ./block/components/blockContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockContainer; });
/* harmony import */ var _blockPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockPreview */ "./block/components/blockPreview.js");
/* harmony import */ var _blockEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockEdit */ "./block/components/blockEdit.js");


const {
  Component,
  Fragment
} = wp.element;
const {
  BlockControls
} = wp.editor;
const {
  Toolbar
} = wp.components;
const {
  __
} = wp.i18n;
/**
 * The block Edit container component
 */

class BlockContainer extends Component {
  /**
   * Constructor.
   *
   * @param {object} props All props from the edit handler in registerBlockType
   *
   */
  constructor(props) {
    super(props);
  }

  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      edit_mode
    } = attributes;
    const editButton = [{
      icon: 'edit',
      title: __('Edit'),
      onClick: () => setAttributes({
        edit_mode: !edit_mode
      }),
      isActive: edit_mode
    }];
    return React.createElement(Fragment, null, React.createElement(BlockControls, null, React.createElement(Toolbar, {
      controls: editButton
    })), edit_mode ? React.createElement(_blockEdit__WEBPACK_IMPORTED_MODULE_1__["default"], this.props) : React.createElement(_blockPreview__WEBPACK_IMPORTED_MODULE_0__["default"], this.props));
  }

}

/***/ }),

/***/ "./block/components/blockEdit.js":
/*!***************************************!*\
  !*** ./block/components/blockEdit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component,
  Fragment
} = wp.element;
const {
  SelectControl
} = wp.components;
const {
  __
} = wp.i18n;
/**
* Outputs the edit settings mode of the block
*/

class BlockEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      label: 'Design Option',
      options: [{
        label: __('Standard'),
        value: 'standard'
      }, {
        label: __('Pro'),
        value: 'pro'
      }],
      value: attributes.design,
      onChange: value => setAttributes({
        design: value
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/'
    }, 'Upgrade'), ' to Pro for more designs!'));
  }

}

/***/ }),

/***/ "./block/components/blockPreview.js":
/*!******************************************!*\
  !*** ./block/components/blockPreview.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component,
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;
/**
 * Outputs the preview mode of the block
 */

class BlockPreview extends Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Preview Mode");
  }

}

/***/ }),

/***/ "./block/index.js":
/*!************************!*\
  !*** ./block/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_blockContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/blockContainer */ "./block/components/blockContainer.js");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('events-calendar-shortcode/block', {
  title: __('Events Calendar Shortcode', 'events-calendar-shortcode'),
  icon: 'calendar',
  category: 'common',
  attributes: {
    design: {
      type: 'string',
      default: 'standard'
    }
  },
  edit: props => {
    return React.createElement(_components_blockContainer__WEBPACK_IMPORTED_MODULE_0__["default"], props);
  },
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=block.js.map