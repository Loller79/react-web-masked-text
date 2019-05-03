Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='./lib/text-input-mask.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _baseTextComponent=require('./base-text-component');var _baseTextComponent2=_interopRequireDefault(_baseTextComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TextInputMask=function(_BaseTextComponent){_inherits(TextInputMask,_BaseTextComponent);function TextInputMask(){_classCallCheck(this,TextInputMask);return _possibleConstructorReturn(this,(TextInputMask.__proto__||Object.getPrototypeOf(TextInputMask)).apply(this,arguments));}_createClass(TextInputMask,[{key:'getElement',value:function getElement(){return this._inputElement;}},{key:'_onChangeText',value:function _onChangeText(text){if(!this._checkText(text)){return;}var _updateValue=this.updateValue(text),maskedText=_updateValue.maskedText,rawText=_updateValue.rawText;if(this.props.onChangeText){this._trySetNativeProps(maskedText);this.props.onChangeText(maskedText,rawText);}}},{key:'_checkText',value:function _checkText(text){if(this.props.checkText){return this.props.checkText(this.props.value,text);}return true;}},{key:'_getKeyboardType',value:function _getKeyboardType(){return this.props.keyboardType||this._maskHandler.getKeyboardType();}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('input',_extends({ref:function ref(_ref){if(_ref){_this2._inputElement=_ref;if(typeof _this2.props.refInput==='function'){_this2.props.refInput(_ref);}}}},this.props,customTextInputProps,{onChange:function onChange(event){return _this2._onChangeText(event.currentTarget.value);},value:this.props.value,__source:{fileName:_jsxFileName,lineNumber:36}}));}}]);return TextInputMask;}(_baseTextComponent2.default);exports.default=TextInputMask;