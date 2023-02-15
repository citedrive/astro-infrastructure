import { g as getDefaultExportFromCjs, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as defineScriptVars, _ as __astro_tag_component__, e as renderComponent, f as renderHead, h as renderSlot, F as Fragment } from '../astro.421b1de6.mjs';
/* empty css                                                                                                                                                    *//* empty css                              *//* empty css                                                                                                                                                    */
var reactExports = {};
var react = {
  get exports(){ return reactExports; },
  set exports(v){ reactExports = v; },
};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

var react_developmentExports = {};
var react_development = {
  get exports(){ return react_developmentExports; },
  set exports(v){ react_developmentExports = v; },
};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_developmentExports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_developmentExports));
	return react_developmentExports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

const React__default = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const $$Astro$k = createAstro();
const $$InternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$InternalLink;
  const { label, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(link, "href")} class="internal-link astro-6QTTI4ED">${label}</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/InternalLink.astro");

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(raw || cooked.slice()) }));
var _a$7;
const $$Astro$j = createAstro();
const $$Fathom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Fathom;
  const { site, src = "https://cdn.usefathom.com/script.js" } = Astro2.props;
  return renderTemplate(_a$7 || (_a$7 = __template$7(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(site, "data-site"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Fathom.astro");

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$6;
const $$Astro$i = createAstro();
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id } = Astro2.props;
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  return renderTemplate(_a$6 || (_a$6 = __template$6(["<!-- Global site tag (gtag.js) - Google Analytics --><script async", "><\/script>\n<script>(function(){", "\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', id);\n})();<\/script>"])), addAttribute(gtagUrl, "src"), defineScriptVars({ id }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/GoogleAnalytics.astro");

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$h = createAstro();
const $$Metrical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Metrical;
  const { app } = Astro2.props;
  return renderTemplate(_a$5 || (_a$5 = __template$5(['<script async src="https://cdn.metrical.xyz/script.js" type="text/javascript"><\/script>\n<script>(function(){', "\nwindow.metrical = {\n  app,\n};\n})();<\/script>"])), defineScriptVars({ app }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Metrical.astro");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$g = createAstro();
const $$Plausible = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Plausible;
  const { domain, src = "https://plausible.io/js/script.js" } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(domain, "data-domain"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Plausible.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$f = createAstro();
const $$SimpleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SimpleAnalytics;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script>\n', '<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade"></noscript>'])), maybeRenderHead($$result));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/SimpleAnalytics.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro();
const $$Umami = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Umami;
  const { dataId, site, host = "/umami.js" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script defer", "", "", "><\/script>"])), addAttribute(site, "src"), addAttribute(host, "host"), addAttribute(dataId, "data-website-id"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Umami.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$d = createAstro();
const $$Amplitude = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Amplitude;
  Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="text/javascript">\n!function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:[]};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{r.invoked=!0;var n=t.createElement("script");n.type="text/javascript",n.integrity="sha384-KhsNZzlMl/yE+u/MowsLKm9jvghmBxiXW8aKvciqaaMaeHrm5uGeQluaVkpD9C7I",n.crossOrigin="anonymous",n.async=!0,n.src="https://cdn.amplitude.com/libs/analytics-browser-1.5.1-min.js.gz",n.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var s=t.getElementsByTagName("script")[0];function v(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}}s.parentNode.insertBefore(n,s);for(var o=function(){return this._q=[],this},i=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],a=0;a<i.length;a++)v(o,i[a]);r.Identify=o;for(var u=function(){return this._q=[],this},c=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],l=0;l<c.length;l++)v(u,c[l]);r.Revenue=u;var p=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset"],d=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];function f(e){function t(t,r){e[t]=function(){var n={promise:new Promise((r=>{e._q.push({name:t,args:Array.prototype.slice.call(arguments,0),resolve:r})}))};if(r)return n}}for(var r=0;r<p.length;r++)t(p[r],!1);for(var n=0;n<d.length;n++)t(d[n],!0)}f(r),r.createInstance=function(){var e=r._iq.push({_q:[]})-1;return f(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();\n\namplitude.init(apiKey);\n<\/script>'])));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Amplitude.astro");

/**
 * @public
 */
const MotionConfigContext = reactExports.createContext({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});

const MotionContext = reactExports.createContext({});
function useVisualElementContext() {
    return reactExports.useContext(MotionContext).visualElement;
}

/**
 * @public
 */
const PresenceContext = reactExports.createContext(null);

const isBrowser = typeof document !== "undefined";

const useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;

const LazyContext = reactExports.createContext({ strict: false });

function useVisualElement(Component, visualState, props, createVisualElement) {
    const parent = useVisualElementContext();
    const lazyContext = reactExports.useContext(LazyContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const reducedMotionConfig = reactExports.useContext(MotionConfigContext).reducedMotion;
    const visualElementRef = reactExports.useRef(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceId: presenceContext ? presenceContext.id : undefined,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    useIsomorphicLayoutEffect(() => {
        visualElement && visualElement.syncRender();
    });
    reactExports.useEffect(() => {
        if (visualElement && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    useIsomorphicLayoutEffect(() => () => visualElement && visualElement.notifyUnmount(), []);
    return visualElement;
}

function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}

/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return reactExports.useCallback((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}

/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}

const variantProps$1 = [
    "initial",
    "animate",
    "exit",
    "whileHover",
    "whileDrag",
    "whileTap",
    "whileFocus",
    "whileInView",
];
function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps$1.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
    return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

const createDefinition = (propNames) => ({
    isEnabled: (props) => propNames.some((name) => !!props[name]),
});
const featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    inView: createDefinition([
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
    ]),
};

function loadFeatures(features) {
    for (const key in features) {
        if (key === "projectionNodeConstructor") {
            featureDefinitions.projectionNodeConstructor = features[key];
        }
        else {
            featureDefinitions[key].Component = features[key];
        }
    }
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = reactExports.useRef(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};

let id = 1;
function useProjectionId() {
    return useConstant(() => {
        if (globalProjectionState.hasEverUpdated) {
            return id++;
        }
    });
}

const LayoutGroupContext = reactExports.createContext({});

class VisualElementHandler extends React__default.Component {
    /**
     * Update visual element props as soon as we know this update is going to be commited.
     */
    getSnapshotBeforeUpdate() {
        const { visualElement, props } = this.props;
        if (visualElement)
            visualElement.setProps(props);
        return null;
    }
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}

/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = reactExports.createContext({});

const motionComponentSymbol = Symbol.for("motionComponentSymbol");

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent({ preloadedFeatures, createVisualElement, projectionNodeConstructor, useRender, useVisualState, Component, }) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        const configAndProps = {
            ...reactExports.useContext(MotionConfigContext),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        let features = null;
        const context = useCreateMotionContext(props);
        /**
         * Create a unique projection ID for this component. If a new component is added
         * during a layout animation we'll use this to query the DOM and hydrate its ref early, allowing
         * us to measure it as soon as any layout effect flushes pending layout animations.
         *
         * Performance note: It'd be better not to have to search the DOM for these elements.
         * For newly-entering components it could be enough to only correct treeScale, in which
         * case we could mount in a scale-correction mode. This wouldn't be enough for
         * shared element transitions however. Perhaps for those we could revert to a root node
         * that gets forceRendered and layout animations are triggered on its layout effect.
         */
        const projectionId = isStatic ? undefined : useProjectionId();
        /**
         *
         */
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            const lazyStrictMode = reactExports.useContext(LazyContext).strict;
            const initialLayoutGroupConfig = reactExports.useContext(SwitchLayoutGroupContext);
            if (context.visualElement) {
                features = context.visualElement.loadFeatures(
                // Note: Pass the full new combined props to correctly re-render dynamic feature components.
                configAndProps, lazyStrictMode, preloadedFeatures, projectionId, projectionNodeConstructor ||
                    featureDefinitions.projectionNodeConstructor, initialLayoutGroupConfig);
            }
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (reactExports.createElement(VisualElementHandler, { visualElement: context.visualElement, props: configAndProps },
            features,
            reactExports.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement))));
    }
    const ForwardRefComponent = reactExports.forwardRef(MotionComponent);
    ForwardRefComponent[motionComponentSymbol] = Component;
    return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig = {}) {
        return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}

/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];

function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}

const scaleCorrectors = {};

/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);

function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}

const isMotionValue = (value) => !!(value === null || value === void 0 ? void 0 : value.getVelocity);

const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const sortTransformProps = (a, b) => transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b);
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform({ transform, transformKeys }, { enableHardwareAcceleration = true, allowTransformNone = true, }, transformIsDefault, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(sortTransformProps);
    // Loop over each transform and build them into transformString
    for (const key of transformKeys) {
        transformString += `${translateAlias[key] || key}(${transform[key]}) `;
    }
    if (enableHardwareAcceleration && !transform.z) {
        transformString += "translateZ(0)";
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}

/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable$1(key) {
    return key.startsWith("--");
}

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

const clamp$1 = (min, max) => (v) => Math.max(Math.min(v, max), min);
const sanitize = (v) => (v % 1 ? Number(v.toFixed(5)) : v);
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}

const number = {
    test: (v) => typeof v === 'number',
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = Object.assign(Object.assign({}, number), { transform: clamp$1(0, 1) });
const scale = Object.assign(Object.assign({}, number), { default: 1 });

const createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(' ').length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType('deg');
const percent = createUnitType('%');
const px = createUnitType('px');
const vh = createUnitType('vh');
const vw = createUnitType('vw');
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

const isColorString = (type, testProp) => (v) => {
    return Boolean((isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};

const hsla = {
    test: isColorString('hsl', 'hue'),
    parse: splitColor('hue', 'saturation', 'lightness'),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            percent.transform(sanitize(saturation)) +
            ', ' +
            percent.transform(sanitize(lightness)) +
            ', ' +
            sanitize(alpha.transform(alpha$1)) +
            ')');
    },
};

const clampRgbUnit = clamp$1(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
const rgba = {
    test: isColorString('rgb', 'red'),
    parse: splitColor('red', 'green', 'blue'),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => 'rgba(' +
        rgbUnit.transform(red) +
        ', ' +
        rgbUnit.transform(green) +
        ', ' +
        rgbUnit.transform(blue) +
        ', ' +
        sanitize(alpha.transform(alpha$1)) +
        ')',
};

function parseHex(v) {
    let r = '';
    let g = '';
    let b = '';
    let a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: isColorString('#'),
    parse: parseHex,
    transform: rgba.transform,
};

const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return isString(v)
            ? v
            : v.hasOwnProperty('red')
                ? rgba.transform(v)
                : hsla.transform(v);
    },
};

const colorToken = '${c}';
const numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        isString(v) &&
        ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse$1(v) {
    if (typeof v === 'number')
        v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match(colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(colorRegex, colorToken);
        values.push(...colors.map(color.parse));
    }
    const numbers = v.match(floatRegex);
    if (numbers) {
        v = v.replace(floatRegex, numberToken);
        values.push(...numbers.map(number.parse));
    }
    return { values, numColors, tokenised: v };
}
function parse(v) {
    return analyse$1(v).values;
}
function createTransformer(v) {
    const { values, numColors, tokenised } = analyse$1(v);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === 'number' ? 0 : v;
function getAnimatableNone$1(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone: getAnimatableNone$1 };

const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
    let [name, value] = v.slice(0, -1).split('(');
    if (name === 'drop-shadow')
        return v;
    const [number] = value.match(floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, '');
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + '(' + defaultValue + unit + ')';
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
    } });

const int = {
    ...number,
    transform: Math.round,
};

const numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Transform props
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int,
};

function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    const { style, vars, transform, transformKeys, transformOrigin } = state;
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    let transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (isCSSVariable$1(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        const valueType = numberValueTypes[key];
        const valueAsType = getValueAsType(value, valueType);
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== (valueType.default || 0))
                transformIsNone = false;
        }
        else if (key.startsWith("origin")) {
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
            transformOrigin[key] = valueAsType;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (hasTransform || transformTemplate) {
        style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    }
    else if (!latestValues.transform && style.transform) {
        /**
         * If we have previously created a transform but currently don't have any,
         * reset transform style to none.
         */
        style.transform = "none";
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
});

function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
    return reactExports.useMemo(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState, isStatic);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    htmlProps.style = style;
    return htmlProps;
}

const animationProps = [
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView",
];
const tapProps = ["whileTap", "onTap", "onTapStart", "onTapCancel"];
const panProps = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"];
const inViewProps = [
    "whileInView",
    "onViewportEnter",
    "onViewportLeave",
    "viewport",
];
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "initial",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "onHoverStart",
    "onHoverEnd",
    "layoutScroll",
    ...inViewProps,
    ...tapProps,
    ...animationProps,
    ...panProps,
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}

function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}

const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = px.transform(-offset);
    // Build the dash array
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, options, transformTemplate) {
    buildHTMLStyles(state, latest, options, transformTemplate);
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}

const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});

function useSVGProps(props, visualState) {
    const visualProps = reactExports.useMemo(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}

function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, projectionId, ref, { latestValues }, isStatic) => {
        const useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic);
        const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
        const elementProps = {
            ...filteredProps,
            ...visualProps,
            ref,
        };
        if (projectionId) {
            elementProps["data-projection-id"] = projectionId;
        }
        return reactExports.createElement(Component, elementProps);
    };
    return useRender;
}

/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
]);

function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}

function scrapeMotionValuesFromProps$1(props) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}

function scrapeMotionValuesFromProps(props) {
    const newValues = scrapeMotionValuesFromProps$1(props);
    for (const key in props) {
        if (isMotionValue(props[key])) {
            const targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}

function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}

const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};

const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = reactExports.useContext(MotionContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props);
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach((definition) => {
            const resolved = resolveVariantFromProps(props, definition);
            if (!resolved)
                return;
            const { transitionEnd, transition, ...target } = resolved;
            for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    const index = isInitialAnimationBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (const key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}

const svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
            renderSVG(instance, renderState);
        },
    }),
};

const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
        createRenderState: createHtmlRenderState,
    }),
};

function createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
    const baseConfig = isSVGComponent(Component)
        ? svgMotionConfig
        : htmlMotionConfig;
    return {
        ...baseConfig,
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        projectionNodeConstructor,
        Component,
    };
}

var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["InView"] = "whileInView";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    reactExports.useEffect(() => {
        const element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture({ whileFocus, visualElement }) {
    const { animationState } = visualElement;
    const onFocus = () => {
        animationState && animationState.setActive(AnimationType.Focus, true);
    };
    const onBlur = () => {
        animationState && animationState.setActive(AnimationType.Focus, false);
    };
    useDomEvent(visualElement, "focus", whileFocus ? onFocus : undefined);
    useDomEvent(visualElement, "blur", whileFocus ? onBlur : undefined);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    const hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return (event) => {
        const isMouseEvent = event instanceof MouseEvent;
        const isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
const defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType = "page") {
    const primaryTouch = e.touches[0] || e.changedTouches[0];
    const point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType = "page") {
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType = "page") {
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
const wrapHandler = (handler, shouldFilterPrimaryPointer = false) => {
    const listener = (event) => handler(event, extractEventInfo(event));
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

// We check for event support via functions in case they've been mocked by a testing suite.
const supportsPointerEvents = () => isBrowser && window.onpointerdown === null;
const supportsTouchEvents = () => isBrowser && window.ontouchstart === null;
const supportsMouseEvents = () => isBrowser && window.onmousedown === null;

const mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
const touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}

function createHoverEvent(visualElement, isActive, callback) {
    return (event, info) => {
        if (!isMouseEvent(event) || isDragActive())
            return;
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (visualElement.animationState) {
            visualElement.animationState.setActive(AnimationType.Hover, isActive);
        }
        callback && callback(event, info);
    };
}
function useHoverGesture({ onHoverStart, onHoverEnd, whileHover, visualElement, }) {
    usePointerEvent(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined, { passive: !onHoverStart });
    usePointerEvent(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined, { passive: !onHoverEnd });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

function useUnmountEffect(callback) {
    return reactExports.useEffect(() => () => callback(), []);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var warning = function () { };
var invariant = function () { };
if (process.env.NODE_ENV !== 'production') {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    warning(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = Object.assign({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = findSpring(options);
        springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var { from = 0.0, to = 1.0, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
    const state = { done: false, value: from };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        const initialDelta = to - from;
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        if (restDelta === undefined) {
            restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
        }
        if (dampingRatio < 1) {
            const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq) *
                            Math.sin(angularFreq * t) +
                            initialDelta * Math.cos(angularFreq * t)));
            };
            resolveVelocity = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq +
                        initialDelta * Math.cos(angularFreq * t)) -
                    envelope *
                        (Math.cos(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq *
                                initialDelta *
                                Math.sin(angularFreq * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = (t) => to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                            t);
        }
        else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const freqForT = Math.min(dampedAngularFreq * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq);
            };
        }
    }
    createSpring();
    return {
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000;
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: () => {
            velocity = -velocity;
            [from, to] = [to, from];
            createSpring();
        },
    };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
const zero = (_t) => 0;

const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

const mix = (from, to, progress) => -progress * from + progress * to + from;

function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}

const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
const notAnimatable = (color) => `'${color}' is not an animatable color. Use the equivalent color code instead.`;
const mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    invariant(!!fromColorType, notAnimatable(from));
    invariant(!!toColorType, notAnimatable(to));
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === hsla) {
        fromColor = hslaToRgba(fromColor);
        fromColorType = rgba;
    }
    if (toColorType === hsla) {
        toColor = hslaToRgba(toColor);
        toColorType = rgba;
    }
    const blended = Object.assign({}, fromColor);
    return (v) => {
        for (const key in blended) {
            if (key !== "alpha") {
                blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

const isNum = (v) => typeof v === 'number';

const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

function getMixer(origin, target) {
    if (isNum(origin)) {
        return (v) => mix(origin, target, v);
    }
    else if (color.test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    const parsed = complex.parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for (let i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyse(origin);
    const targetStats = analyse(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
    }
    else {
        warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (p) => `${p > 0 ? target : origin}`;
    }
};

const mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (color.test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate([from, to], [mixer]) {
    return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v) => {
        let mixerIndex = 0;
        let foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            let i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, 'Both input and output ranges must be the same length');
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
        : interpolator;
}

const reverseEasing = easing => p => 1 - easing(1 - p);
const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const createExpoIn = (power) => p => Math.pow(p, power);
const createBackIn = (power) => p => p * p * ((power + 1) * p - power);
const createAnticipate = (power) => {
    const backEasing = createBackIn(power);
    return p => (p *= 2) < 1
        ? 0.5 * backEasing(p)
        : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
const linear = p => p;
const easeIn = createExpoIn(2);
const easeOut = reverseEasing(easeIn);
const easeInOut = mirrorEasing(easeIn);
const circIn = p => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);
const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = reverseEasing(backIn);
const backInOut = mirrorEasing(backIn);
const anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;
const bounceOut = (p) => {
    if (p === 1 || p === 0)
        return p;
    const p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
            ? 9.075 * p2 - 9.9 * p + 3.4
            : p < BOUNCE_THIRD_THRESHOLD
                ? ca * p2 - cb * p + cc
                : 10.8 * p * p - 20.52 * p + 10.72;
};
const bounceIn = reverseEasing(bounceOut);
const bounceInOut = (p) => p < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
    : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;

function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}
function keyframes$1({ from = 0, to = 1, ease, offset, duration = 300, }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    let interpolator = createInterpolator();
    return {
        next: (t) => {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: () => {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}

function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget, }) {
    const state = { done: false, value: from };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: () => { },
    };
}

const types = { keyframes: keyframes$1, spring, decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return keyframes$1;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return keyframes$1;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return spring;
    }
    return keyframes$1;
}

const defaultTimestep = (1 / 60) * 1000;
const getCurrentTime = typeof performance !== "undefined"
    ? () => performance.now()
    : () => Date.now();
const onNextFrame = typeof window !== "undefined"
    ? (callback) => window.requestAnimationFrame(callback)
    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

function createRenderStep(runNextFrame) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = new WeakSet();
    const step = {
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: (frameData) => {
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}

const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
    delta: 0,
    timestamp: 0,
};
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => (runNextFrame = true));
    return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
            startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
stepsOrder.reduce((acc, key) => {
    acc[key] = () => steps[key].process(frame);
    return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
    runNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultTimestep
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
const startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
const getFrameData = () => frame;

function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

const framesync = (update) => {
    const passTimestamp = ({ delta }) => update(delta);
    return {
        start: () => sync.update(passTimestamp, true),
        stop: () => cancelSync.update(passTimestamp),
    };
};
function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: () => {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}

function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop, }) {
    let currentAnimation;
    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }
    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(Object.assign(Object.assign({}, options), { driver, onUpdate: (v) => {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete,
            onStop }));
    }
    function startSpring(options) {
        startAnimation(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from, velocity, to: boundaryNearest(from) });
    }
    else {
        let target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        const boundary = boundaryNearest(target);
        const heading = boundary === min ? -1 : 1;
        let prev;
        let current;
        const checkBoundary = (v) => {
            prev = current;
            current = v;
            velocity = velocityPerSecond(v - prev, getFrameData().delta);
            if ((heading === 1 && v > boundary) ||
                (heading === -1 && v < boundary)) {
                startSpring({ from: v, to: boundary, velocity });
            }
        };
        startAnimation({
            type: "decay",
            from,
            velocity,
            timeConstant,
            power,
            restDelta,
            modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop(),
    };
}

const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;
const c = (a1) => 3.0 * a1;
const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < newtonIterations; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return linear;
    const sampleValues = new Float32Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        const dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

/**
 * @param handlers -
 * @internal
 */
function useTapGesture({ onTap, onTapStart, onTapCancel, whileTap, visualElement, }) {
    const hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    const isPressing = reactExports.useRef(false);
    const cancelPointerEndListeners = reactExports.useRef(null);
    /**
     * Only set listener to passive if there are no external listeners.
     */
    const eventOptions = {
        passive: !(onTapStart || onTap || onTapCancel || onPointerDown),
    };
    function removePointerEndListener() {
        cancelPointerEndListeners.current && cancelPointerEndListeners.current();
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        removePointerEndListener();
        isPressing.current = false;
        visualElement.animationState &&
            visualElement.animationState.setActive(AnimationType.Tap, false);
        return !isDragActive();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !isNodeOrChild(visualElement.getInstance(), event.target)
            ? onTapCancel && onTapCancel(event, info)
            : onTap && onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel && onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
        /**
         * Ensure we trigger animations before firing event callback
         */
        visualElement.animationState &&
            visualElement.animationState.setActive(AnimationType.Tap, true);
        onTapStart && onTapStart(event, info);
    }
    usePointerEvent(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined, eventOptions);
    useUnmountEffect(removePointerEndListener);
}

/**
 * Browser-safe usage of process
 */
const defaultEnvironment = "production";
const env = typeof process === "undefined" || process.env === undefined
    ? defaultEnvironment
    : process.env.NODE_ENV || defaultEnvironment;

const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

function useViewport({ visualElement, whileInView, onViewportEnter, onViewportLeave, viewport = {}, }) {
    const state = reactExports.useRef({
        hasEnteredView: false,
        isInView: false,
    });
    let shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
    if (viewport.once && state.current.hasEnteredView)
        shouldObserve = false;
    const useObserver = typeof IntersectionObserver === "undefined"
        ? useMissingIntersectionObserver
        : useIntersectionObserver;
    useObserver(shouldObserve, state.current, visualElement, viewport);
}
const thresholdNames = {
    some: 0,
    all: 1,
};
function useIntersectionObserver(shouldObserve, state, visualElement, { root, margin: rootMargin, amount = "some", once }) {
    reactExports.useEffect(() => {
        if (!shouldObserve)
            return;
        const options = {
            root: root === null || root === void 0 ? void 0 : root.current,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const intersectionCallback = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (state.isInView === isIntersecting)
                return;
            state.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && state.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                state.hasEnteredView = true;
            }
            if (visualElement.animationState) {
                visualElement.animationState.setActive(AnimationType.InView, isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const props = visualElement.getProps();
            const callback = isIntersecting
                ? props.onViewportEnter
                : props.onViewportLeave;
            callback && callback(entry);
        };
        return observeIntersection(visualElement.getInstance(), options, intersectionCallback);
    }, [shouldObserve, root, rootMargin, amount]);
}
/**
 * If IntersectionObserver is missing, we activate inView and fire onViewportEnter
 * on mount. This way, the page will be in the state the author expects users
 * to see it in for everyone.
 */
function useMissingIntersectionObserver(shouldObserve, state, visualElement, { fallback = true }) {
    reactExports.useEffect(() => {
        if (!shouldObserve || !fallback)
            return;
        if (env !== "production") {
            warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
        }
        /**
         * Fire this in an rAF because, at this point, the animation state
         * won't have flushed for the first time and there's certain logic in
         * there that behaves differently on the initial animation.
         *
         * This hook should be quite rarely called so setting this in an rAF
         * is preferred to changing the behaviour of the animation state.
         */
        requestAnimationFrame(() => {
            state.hasEnteredView = true;
            const { onViewportEnter } = visualElement.getProps();
            onViewportEnter && onViewportEnter(null);
            if (visualElement.animationState) {
                visualElement.animationState.setActive(AnimationType.InView, true);
            }
        });
    }, [shouldObserve]);
}

const makeRenderlessComponent = (hook) => (props) => {
    hook(props);
    return null;
};

const gestureAnimations = {
    inView: makeRenderlessComponent(useViewport),
    tap: makeRenderlessComponent(useTapGesture),
    focus: makeRenderlessComponent(useFocusGesture),
    hover: makeRenderlessComponent(useHoverGesture),
};

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    const context = reactExports.useContext(PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useId when released in React
    const id = reactExports.useId();
    reactExports.useEffect(() => register(id), []);
    const safeToRemove = () => onExitComplete && onExitComplete(id);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;

const easingLookup = {
    linear,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
    bounceIn,
    bounceInOut,
    bounceOut,
};
const easingDefinitionToFunction = (definition) => {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        invariant(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (key, value) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

const underDampedSpring = () => ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
});
const criticallyDampedSpring = (to) => ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const linearTween = () => ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
});
const keyframes = (values) => ({
    type: "keyframes",
    duration: 0.8,
    values,
});
const defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
const getDefaultTransition = (valueKey, to) => {
    let transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return { to, ...transitionFactory(to) };
};

/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];

function getAnimatableNone(key, value) {
    var _a;
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

const instantAnimationState = {
    current: false,
};

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, ...transition }) {
    return !!Object.keys(transition).length;
}
let legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions({ ease, times, yoyo, flip, loop, ...transition }) {
    const options = { ...transition };
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = isEasingArray(ease)
            ? ease.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b;
    const valueTransition = getValueTransition(transition, key) || {};
    return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = [...options.to];
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    if (Array.isArray(options.to) && transition.duration === undefined) {
        transition.duration = 0.8;
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = {
            ...transition,
            ...getDefaultTransition(key, options.to),
        };
    }
    return {
        ...options,
        ...convertTransitionToAnimationOptions(transition),
    };
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    const valueTransition = getValueTransition(transition, key) || {};
    let origin = valueTransition.from !== undefined ? valueTransition.from : value.get();
    const isTargetAnimatable = isAnimatable(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = getAnimatableNone(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    const isOriginAnimatable = isAnimatable(key, origin);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${key} from "${origin}" to "${target}". ${origin} is not an animatable value - to enable this animation set ${origin} to a value animatable to ${target} via the \`style\` property.`);
    function start() {
        const options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete,
            onUpdate: (v) => value.set(v),
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? inertia({ ...options, ...valueTransition })
            : animate({
                ...getPopmotionAnimationOptions(valueTransition, options, key),
                onUpdate: (v) => {
                    options.onUpdate(v);
                    valueTransition.onUpdate && valueTransition.onUpdate(v);
                },
                onComplete: () => {
                    options.onComplete();
                    valueTransition.onComplete && valueTransition.onComplete();
                },
            });
    }
    function set() {
        const finalTarget = resolveFinalValueInKeyframes(target);
        value.set(finalTarget);
        onComplete();
        valueTransition.onUpdate && valueTransition.onUpdate(finalTarget);
        valueTransition.onComplete && valueTransition.onComplete();
        return { stop: () => { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 */
function startAnimation(key, value, target, transition = {}) {
    if (instantAnimationState.current) {
        transition = { type: false };
    }
    return value.start((onComplete) => {
        let delayTimer;
        let controls;
        const animation = getAnimation(key, value, target, transition, onComplete);
        const delay = getDelayFromTransition(transition, key);
        const start = () => (controls = animation());
        if (delay) {
            delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
        }
        else {
            start();
        }
        return () => {
            clearTimeout(delayTimer);
            controls && controls.stop();
        };
    });
}

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}

class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        addUniqueItem(this.subscriptions, handler);
        return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "7.3.6";
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = (v, render = true) => {
            this.prev = this.current;
            this.current = v;
            // Update timestamp
            const { delta, timestamp } = getFrameData();
            if (this.lastUpdated !== timestamp) {
                this.timeDelta = delta;
                this.lastUpdated = timestamp;
                sync.postRender(this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (this.prev !== this.current) {
                this.updateSubscribers.notify(this.current);
            }
            // Update velocity subscribers
            if (this.velocityUpdateSubscribers.getSize()) {
                this.velocityUpdateSubscribers.notify(this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                this.renderSubscribers.notify(this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = () => sync.postRender(this.velocityCheck);
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = ({ timestamp }) => {
            if (timestamp !== this.lastUpdated) {
                this.prev = this.current;
                this.velocityUpdateSubscribers.notify(this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @privateRemarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    onChange(subscription) {
        return this.updateSubscribers.add(subscription);
    }
    clearListeners() {
        this.updateSubscribers.clear();
    }
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    onRenderRequest(subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect) {
        this.passiveEffect = passiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                velocityPerSecond(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(animation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.stopAnimation = animation(resolve);
        }).then(() => this.clearAnimation());
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.stopAnimation;
    }
    clearAnimation() {
        this.stopAnimation = null;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    }
}
function motionValue(init) {
    return new MotionValue(init);
}

/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);

/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};

/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));

/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    const current = {};
    visualElement.forEachValue((value, key) => (current[key] = value.get()));
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    const velocity = {};
    visualElement.forEachValue((value, key) => (velocity[key] = value.getVelocity()));
    return velocity;
}
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
    const numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (let i = 0; i < numNewValues; i++) {
        const key = newValueKeys[i];
        const targetValue = target[key];
        let value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            (isNumericalString(value) || isZeroValueString(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!findValueType(value) && complex.test(targetValue)) {
            value = getAnimatableNone(key, targetValue);
        }
        visualElement.addValue(key, motionValue(value));
        if (origin[key] === undefined) {
            origin[key] = value;
        }
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    const valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a;
    const origin = {};
    for (const key in target) {
        const transitionOrigin = getOriginFromTransition(key, transition);
        origin[key] =
            transitionOrigin !== undefined
                ? transitionOrigin
                : (_a = visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.get();
    }
    return origin;
}

function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}

function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notifyAnimationStart(definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(() => visualElement.notifyAnimationComplete(definition));
}
function animateVariant(visualElement, variant, options = {}) {
    var _a;
    const resolved = resolveVariant(visualElement, variant, options.custom);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => animateTarget(visualElement, resolved, options)
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
    const willChange = visualElement.getValue("willChange");
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && ((_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.getState()[type]);
    for (const key in target) {
        const value = visualElement.getValue(key);
        const valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        let valueTransition = { delay, ...transition };
        /**
         * Make animation instant if this is a transform prop and we should reduce motion.
         */
        if (visualElement.shouldReduceMotion && transformProps.has(key)) {
            valueTransition = {
                ...valueTransition,
                type: false,
                delay: 0,
            };
        }
        let animation = startAnimation(key, value, valueTarget, valueTransition);
        if (isWillChangeMotionValue(willChange)) {
            willChange.add(key);
            animation = animation.then(() => willChange.remove(key));
        }
        animations.push(animation);
    }
    return Promise.all(animations).then(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notifyAnimationComplete(variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}

const variantPriorityOrder = [
    AnimationType.Animate,
    AnimationType.InView,
    AnimationType.Focus,
    AnimationType.Hover,
    AnimationType.Tap,
    AnimationType.Drag,
    AnimationType.Exit,
];
const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    const state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        const props = visualElement.getProps();
        const context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                        if (!shallowCompare(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type, ...options },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(options, type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        [AnimationType.Animate]: createTypeState(true),
        [AnimationType.InView]: createTypeState(),
        [AnimationType.Hover]: createTypeState(),
        [AnimationType.Tap]: createTypeState(),
        [AnimationType.Drag]: createTypeState(),
        [AnimationType.Focus]: createTypeState(),
        [AnimationType.Exit]: createTypeState(),
    };
}

const animations = {
    animation: makeRenderlessComponent(({ visualElement, animate }) => {
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = createAnimationState(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if (isAnimationControls(animate)) {
            reactExports.useEffect(() => animate.subscribe(visualElement), [animate]);
        }
    }),
    exit: makeRenderlessComponent((props) => {
        const { custom, visualElement } = props;
        const [isPresent, safeToRemove] = usePresence();
        const presenceContext = reactExports.useContext(PresenceContext);
        reactExports.useEffect(() => {
            visualElement.isPresent = isPresent;
            const animation = visualElement.animationState &&
                visualElement.animationState.setActive(AnimationType.Exit, !isPresent, {
                    custom: (presenceContext && presenceContext.custom) ||
                        custom,
                });
            if (animation && !isPresent) {
                animation.then(safeToRemove);
            }
        }, [isPresent]);
    }),
};

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}

function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}

// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };

function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}

const names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    const managers = names.map(() => new SubscriptionManager());
    const propSubscriptions = {};
    const lifecycles = {
        clearAllListeners: () => managers.forEach((manager) => manager.clear()),
        updatePropListeners: (props) => {
            names.forEach((name) => {
                var _a;
                const on = "on" + name;
                const propListener = props[on];
                // Unsubscribe existing subscription
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                // Add new subscription
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach((manager, i) => {
        lifecycles["on" + names[i]] = (handler) => manager.add(handler);
        lifecycles["notify" + names[i]] = (...args) => manager.notify(...args);
    });
    return lifecycles;
}

function updateMotionValuesFromProps(element, next, prev) {
    const { willChange } = next;
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            if (isWillChangeMotionValue(willChange)) {
                willChange.add(key);
            }
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (process.env.NODE_ENV === "development") {
                warnOnce(nextValue.version === "7.3.6", `Attempting to mix Framer Motion versions ${nextValue.version} with 7.3.6 may not work as expected.`);
            }
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, motionValue(nextValue));
            if (isWillChangeMotionValue(willChange)) {
                willChange.remove(key);
            }
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}

const featureNames = Object.keys(featureDefinitions);
const numFeatures = featureNames.length;
const visualElement = ({ treeType = "", build, getBaseTarget, makeTargetAnimatable, measureViewportBox, render: renderInstance, readValueFromInstance, removeValueFromRenderState, sortNodePosition, scrapeMotionValuesFromProps, }) => ({ parent, props, presenceId, blockInitialAnimation, visualState, reducedMotionConfig, }, options = {}) => {
    let isMounted = false;
    const { latestValues, renderState } = visualState;
    /**
     * The instance of the render-specific node that will be hydrated by the
     * exposed React ref. So for example, this visual element can host a
     * HTMLElement, plain object, or Three.js object. The functions provided
     * in VisualElementConfig allow us to interface with this instance.
     */
    let instance;
    /**
     * Manages the subscriptions for a visual element's lifecycle, for instance
     * onRender
     */
    const lifecycles = createLifecycles();
    /**
     * A map of all motion values attached to this visual element. Motion
     * values are source of truth for any given animated value. A motion
     * value might be provided externally by the component via props.
     */
    const values = new Map();
    /**
     * A map of every subscription that binds the provided or generated
     * motion values onChange listeners to this visual element.
     */
    const valueSubscriptions = new Map();
    /**
     * A reference to the previously-provided motion values as returned
     * from scrapeMotionValuesFromProps. We use the keys in here to determine
     * if any motion values need to be removed after props are updated.
     */
    let prevMotionValues = {};
    /**
     * When values are removed from all animation props we need to search
     * for a fallback value to animate to. These values are tracked in baseTarget.
     */
    const baseTarget = {
        ...latestValues,
    };
    // Internal methods ========================
    /**
     * On mount, this will be hydrated with a callback to disconnect
     * this visual element from its parent on unmount.
     */
    let removeFromVariantTree;
    /**
     * Render the element with the latest styles outside of the React
     * render lifecycle
     */
    function render() {
        if (!instance || !isMounted)
            return;
        triggerBuild();
        renderInstance(instance, renderState, props.style, element.projection);
    }
    function triggerBuild() {
        build(element, renderState, latestValues, options, props);
    }
    function update() {
        lifecycles.notifyUpdate(latestValues);
    }
    /**
     *
     */
    function bindToMotionValue(key, value) {
        const removeOnChange = value.onChange((latestValue) => {
            latestValues[key] = latestValue;
            props.onUpdate && sync.update(update, false, true);
        });
        const removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
        valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
        });
    }
    /**
     * Any motion values that are provided to the element when created
     * aren't yet bound to the element, as this would technically be impure.
     * However, we iterate through the motion values and set them to the
     * initial values for this component.
     *
     * TODO: This is impure and we should look at changing this to run on mount.
     * Doing so will break some tests but this isn't neccessarily a breaking change,
     * more a reflection of the test.
     */
    const { willChange, ...initialMotionValues } = scrapeMotionValuesFromProps(props);
    for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== undefined && isMotionValue(value)) {
            value.set(latestValues[key], false);
            if (isWillChangeMotionValue(willChange)) {
                willChange.add(key);
            }
        }
    }
    /**
     * Determine what role this visual element should take in the variant tree.
     */
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    const element = {
        treeType,
        /**
         * This is a mirror of the internal instance prop, which keeps
         * VisualElement type-compatible with React's RefObject.
         */
        current: null,
        /**
         * The depth of this visual element within the visual element tree.
         */
        depth: parent ? parent.depth + 1 : 0,
        parent,
        children: new Set(),
        /**
         *
         */
        presenceId,
        shouldReduceMotion: null,
        /**
         * If this component is part of the variant tree, it should track
         * any children that are also part of the tree. This is essentially
         * a shadow tree to simplify logic around how to stagger over children.
         */
        variantChildren: isVariantNode$1 ? new Set() : undefined,
        /**
         * Whether this instance is visible. This can be changed imperatively
         * by the projection tree, is analogous to CSS's visibility in that
         * hidden elements should take up layout, and needs enacting by the configured
         * render function.
         */
        isVisible: undefined,
        /**
         * Normally, if a component is controlled by a parent's variants, it can
         * rely on that ancestor to trigger animations further down the tree.
         * However, if a component is created after its parent is mounted, the parent
         * won't trigger that mount animation so the child needs to.
         *
         * TODO: This might be better replaced with a method isParentMounted
         */
        manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
        /**
         * This can be set by AnimatePresence to force components that mount
         * at the same time as it to mount as if they have initial={false} set.
         */
        blockInitialAnimation,
        /**
         * Determine whether this component has mounted yet. This is mostly used
         * by variant children to determine whether they need to trigger their
         * own animations on mount.
         */
        isMounted: () => Boolean(instance),
        mount(newInstance) {
            isMounted = true;
            instance = element.current = newInstance;
            if (element.projection) {
                element.projection.mount(newInstance);
            }
            if (isVariantNode$1 && parent && !isControllingVariants$1) {
                removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
            }
            values.forEach((value, key) => bindToMotionValue(key, value));
            if (!hasReducedMotionListener.current) {
                initPrefersReducedMotion();
            }
            element.shouldReduceMotion =
                reducedMotionConfig === "never"
                    ? false
                    : reducedMotionConfig === "always"
                        ? true
                        : prefersReducedMotion.current;
            parent === null || parent === void 0 ? void 0 : parent.children.add(element);
            element.setProps(props);
        },
        /**
         *
         */
        unmount() {
            var _a;
            (_a = element.projection) === null || _a === void 0 ? void 0 : _a.unmount();
            cancelSync.update(update);
            cancelSync.render(render);
            valueSubscriptions.forEach((remove) => remove());
            removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
            parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
            lifecycles.clearAllListeners();
            instance = undefined;
            isMounted = false;
        },
        loadFeatures(renderedProps, isStrict, preloadedFeatures, projectionId, ProjectionNodeConstructor, initialLayoutGroupConfig) {
            const features = [];
            /**
             * If we're in development mode, check to make sure we're not rendering a motion component
             * as a child of LazyMotion, as this will break the file-size benefits of using it.
             */
            if (env !== "production" && preloadedFeatures && isStrict) {
                invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
            }
            for (let i = 0; i < numFeatures; i++) {
                const name = featureNames[i];
                const { isEnabled, Component } = featureDefinitions[name];
                /**
                 * It might be possible in the future to use this moment to
                 * dynamically request functionality. In initial tests this
                 * was producing a lot of duplication amongst bundles.
                 */
                if (isEnabled(renderedProps) && Component) {
                    features.push(reactExports.createElement(Component, {
                        key: name,
                        ...renderedProps,
                        visualElement: element,
                    }));
                }
            }
            if (!element.projection && ProjectionNodeConstructor) {
                element.projection = new ProjectionNodeConstructor(projectionId, element.getLatestValues(), parent && parent.projection);
                const { layoutId, layout, drag, dragConstraints, layoutScroll, } = renderedProps;
                element.projection.setOptions({
                    layoutId,
                    layout,
                    alwaysMeasureLayout: Boolean(drag) ||
                        (dragConstraints && isRefObject(dragConstraints)),
                    visualElement: element,
                    scheduleRender: () => element.scheduleRender(),
                    /**
                     * TODO: Update options in an effect. This could be tricky as it'll be too late
                     * to update by the time layout animations run.
                     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                     * ensuring it gets called if there's no potential layout animations.
                     *
                     */
                    animationType: typeof layout === "string" ? layout : "both",
                    initialPromotionConfig: initialLayoutGroupConfig,
                    layoutScroll,
                });
            }
            return features;
        },
        /**
         * Add a child visual element to our set of children.
         */
        addVariantChild(child) {
            var _a;
            const closestVariantNode = element.getClosestVariantNode();
            if (closestVariantNode) {
                (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                return () => closestVariantNode.variantChildren.delete(child);
            }
        },
        sortNodePosition(other) {
            /**
             * If these nodes aren't even of the same type we can't compare their depth.
             */
            if (!sortNodePosition || treeType !== other.treeType)
                return 0;
            return sortNodePosition(element.getInstance(), other.getInstance());
        },
        /**
         * Returns the closest variant node in the tree starting from
         * this visual element.
         */
        getClosestVariantNode: () => isVariantNode$1 ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode(),
        /**
         * Expose the latest layoutId prop.
         */
        getLayoutId: () => props.layoutId,
        /**
         * Returns the current instance.
         */
        getInstance: () => instance,
        /**
         * Get/set the latest static values.
         */
        getStaticValue: (key) => latestValues[key],
        setStaticValue: (key, value) => (latestValues[key] = value),
        /**
         * Returns the latest motion value state. Currently only used to take
         * a snapshot of the visual element - perhaps this can return the whole
         * visual state
         */
        getLatestValues: () => latestValues,
        /**
         * Set the visiblity of the visual element. If it's changed, schedule
         * a render to reflect these changes.
         */
        setVisibility(visibility) {
            if (element.isVisible === visibility)
                return;
            element.isVisible = visibility;
            element.scheduleRender();
        },
        /**
         * Make a target animatable by Popmotion. For instance, if we're
         * trying to animate width from 100px to 100vw we need to measure 100vw
         * in pixels to determine what we really need to animate to. This is also
         * pluggable to support Framer's custom value types like Color,
         * and CSS variables.
         */
        makeTargetAnimatable(target, canMutate = true) {
            return makeTargetAnimatable(element, target, props, canMutate);
        },
        /**
         * Measure the current viewport box with or without transforms.
         * Only measures axis-aligned boxes, rotate and skew must be manually
         * removed with a re-render to work.
         */
        measureViewportBox() {
            return measureViewportBox(instance, props);
        },
        // Motion values ========================
        /**
         * Add a motion value and bind it to this visual element.
         */
        addValue(key, value) {
            // Remove existing value if it exists
            if (element.hasValue(key))
                element.removeValue(key);
            values.set(key, value);
            latestValues[key] = value.get();
            bindToMotionValue(key, value);
        },
        /**
         * Remove a motion value and unbind any active subscriptions.
         */
        removeValue(key) {
            var _a;
            values.delete(key);
            (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
            valueSubscriptions.delete(key);
            delete latestValues[key];
            removeValueFromRenderState(key, renderState);
        },
        /**
         * Check whether we have a motion value for this key
         */
        hasValue: (key) => values.has(key),
        /**
         * Get a motion value for this key. If called with a default
         * value, we'll create one if none exists.
         */
        getValue(key, defaultValue) {
            let value = values.get(key);
            if (value === undefined && defaultValue !== undefined) {
                value = motionValue(defaultValue);
                element.addValue(key, value);
            }
            return value;
        },
        /**
         * Iterate over our motion values.
         */
        forEachValue: (callback) => values.forEach(callback),
        /**
         * If we're trying to animate to a previously unencountered value,
         * we need to check for it in our state and as a last resort read it
         * directly from the instance (which might have performance implications).
         */
        readValue: (key) => latestValues[key] !== undefined
            ? latestValues[key]
            : readValueFromInstance(instance, key, options),
        /**
         * Set the base target to later animate back to. This is currently
         * only hydrated on creation and when we first read a value.
         */
        setBaseTarget(key, value) {
            baseTarget[key] = value;
        },
        /**
         * Find the base target for a value thats been removed from all animation
         * props.
         */
        getBaseTarget(key) {
            if (getBaseTarget) {
                const target = getBaseTarget(props, key);
                if (target !== undefined && !isMotionValue(target))
                    return target;
            }
            return baseTarget[key];
        },
        // Lifecyles ========================
        ...lifecycles,
        /**
         * Build the renderer state based on the latest visual state.
         */
        build() {
            triggerBuild();
            return renderState;
        },
        /**
         * Schedule a render on the next animation frame.
         */
        scheduleRender() {
            sync.render(render, false, true);
        },
        /**
         * Synchronously fire render. It's prefered that we batch renders but
         * in many circumstances, like layout measurement, we need to run this
         * synchronously. However in those instances other measures should be taken
         * to batch reads/writes.
         */
        syncRender: render,
        /**
         * Update the provided props. Ensure any newly-added motion values are
         * added to our map, old ones removed, and listeners updated.
         */
        setProps(newProps) {
            if (newProps.transformTemplate || props.transformTemplate) {
                element.scheduleRender();
            }
            props = newProps;
            lifecycles.updatePropListeners(newProps);
            prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps(props), prevMotionValues);
        },
        getProps: () => props,
        // Variants ==============================
        /**
         * Returns the variant definition with a given name.
         */
        getVariant: (name) => { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; },
        /**
         * Returns the defined default transition on this component.
         */
        getDefaultTransition: () => props.transition,
        getTransformPagePoint: () => {
            return props.transformPagePoint;
        },
        /**
         * Used by child variant nodes to get the closest ancestor variant props.
         */
        getVariantContext(startAtParent = false) {
            if (startAtParent)
                return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
            if (!isControllingVariants$1) {
                const context = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                if (props.initial !== undefined) {
                    context.initial = props.initial;
                }
                return context;
            }
            const context = {};
            for (let i = 0; i < numVariantProps; i++) {
                const name = variantProps[i];
                const prop = props[name];
                if (isVariantLabel(prop) || prop === false) {
                    context[name] = prop;
                }
            }
            return context;
        },
    };
    return element;
};
const variantProps = ["initial", ...variantPriorityOrder];
const numVariantProps = variantProps.length;

function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    const match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token, fallback] = match;
    return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
    const element = visualElement.getInstance();
    if (!(element instanceof Element))
        return { target, transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = { ...transitionEnd };
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue((value) => {
        const current = value.get();
        if (!isCSSVariable(current))
            return;
        const resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (const key in target) {
        const current = target[key];
        if (!isCSSVariable(current))
            continue;
        const resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd && transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target, transitionEnd };
}

const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
const isPositionalKey = (key) => positionalKeys.has(key);
const hasPositionalKey = (target) => {
    return Object.keys(target).some(isPositionalKey);
};
const setAndResetVelocity = (value, to) => {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
const isNumOrPxType = (v) => v === number || v === px;
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
    const originBbox = visualElement.measureViewportBox();
    const element = visualElement.getInstance();
    const elementComputedStyle = getComputedStyle(element);
    const { display } = elementComputedStyle;
    const origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach((key) => {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    const targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach((key) => {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        const value = visualElement.getValue(key);
        setAndResetVelocity(value, origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
    target = { ...target };
    transitionEnd = { ...transitionEnd };
    const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    let removedTransformValues = [];
    let hasAttemptedToRemoveTransformValues = false;
    const changedValueTypeKeys = [];
    targetPositionalKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        let from = origin[key];
        let fromType = findDimensionValueType(from);
        const to = target[key];
        let toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            const numKeyframes = to.length;
            const fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = findDimensionValueType(from);
            for (let i = fromIndex; i < numKeyframes; i++) {
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    invariant(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                const current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        const scrollY = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(([key, value]) => {
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        // Restore scroll position
        if (isBrowser && scrollY !== null) {
            window.scrollTo({ top: scrollY });
        }
        return { target: convertedTarget, transitionEnd };
    }
    else {
        return { target, transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target, transitionEnd };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
    const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};

function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
}
const htmlConfig = {
    treeType: "dom",
    readValueFromInstance(domElement, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle$1(domElement);
            const value = (isCSSVariable$1(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    },
    sortNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget(props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox(element, { transformPagePoint }) {
        return measureViewportBox(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform(element, domElement, props) {
        const { transformTemplate } = props;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform(instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable(element, { transition, transitionEnd, ...target }, { transformValues }, isMounted = true) {
        let origin = getOrigin(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            checkTargetForNewValues(element, target, origin);
            const parsed = parseDomVariant(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return {
            transition,
            transitionEnd,
            ...target,
        };
    },
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    build(element, renderState, latestValues, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    },
    render: renderHTML,
};
const htmlVisualElement = visualElement(htmlConfig);

const svgVisualElement = visualElement({
    ...htmlConfig,
    getBaseTarget(props, key) {
        return props[key];
    },
    readValueFromInstance(domElement, key) {
        var _a;
        if (transformProps.has(key)) {
            return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps,
    build(_element, renderState, latestValues, options, props) {
        buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
    },
    render: renderSVG,
});

const createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? svgVisualElement(options, { enableHardwareAcceleration: false })
        : htmlVisualElement(options, { enableHardwareAcceleration: true });
};

/**
 * @public
 */
const m = createMotionProxy(createDomMotionConfig);

function useIsMounted() {
    const isMounted = reactExports.useRef(false);
    useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}

function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = reactExports.useState(0);
    const forceRender = reactExports.useCallback(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = reactExports.useCallback(() => sync.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}

/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends reactExports.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = reactExports.useId();
    const ref = reactExports.useRef(null);
    const size = reactExports.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    reactExports.useInsertionEffect(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (reactExports.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, reactExports.cloneElement(children, { ref })));
}

const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = reactExports.useId();
    const context = reactExports.useMemo(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    reactExports.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    reactExports.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = reactExports.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (reactExports.createElement(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}

const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    reactExports.Children.forEach(children, (child) => {
        if (reactExports.isValidElement(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    // Support deprecated exitBeforeEnter prop
    if (exitBeforeEnter) {
        mode = "wait";
        warnOnce(false, "Replace exitBeforeEnter with mode='wait'");
    }
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    let [forceRender] = useForceUpdate();
    const forceRenderLayoutGroup = reactExports.useContext(LayoutGroupContext).forceRender;
    if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exiting = new Set();
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = reactExports.useRef(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = reactExports.useRef(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = reactExports.useRef(true);
    useIsomorphicLayoutEffect(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
    });
    if (isInitialRender.current) {
        return (reactExports.createElement(reactExports.Fragment, null, childrenToRender.map((child) => (reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach((key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        const onExit = () => {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                    return;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? (child) : (reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (env !== "production" &&
        mode === "wait" &&
        childrenToRender.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    return (reactExports.createElement(reactExports.Fragment, null, exiting.size
        ? childrenToRender
        : childrenToRender.map((child) => reactExports.cloneElement(child))));
};

/**
 * Used in conjunction with the `m` component to reduce bundle size.
 *
 * `m` is a version of the `motion` component that only loads functionality
 * critical for the initial render.
 *
 * `LazyMotion` can then be used to either synchronously or asynchronously
 * load animation and gesture support.
 *
 * ```jsx
 * // Synchronous loading
 * import { LazyMotion, m, domAnimations } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={domAnimations}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 *
 * // Asynchronous loading
 * import { LazyMotion, m } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={() => import('./path/to/domAnimations')}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 * ```
 *
 * @public
 */
function LazyMotion({ children, features, strict = false }) {
    const [, setIsLoaded] = reactExports.useState(!isLazyBundle(features));
    const loadedRenderer = reactExports.useRef(undefined);
    /**
     * If this is a synchronous load, load features immediately
     */
    if (!isLazyBundle(features)) {
        const { renderer, ...loadedFeatures } = features;
        loadedRenderer.current = renderer;
        loadFeatures(loadedFeatures);
    }
    reactExports.useEffect(() => {
        if (isLazyBundle(features)) {
            features().then(({ renderer, ...loadedFeatures }) => {
                loadFeatures(loadedFeatures);
                loadedRenderer.current = renderer;
                setIsLoaded(true);
            });
        }
    }, []);
    return (reactExports.createElement(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict } }, children));
}
function isLazyBundle(features) {
    return typeof features === "function";
}

/**
 * @public
 */
const domAnimation = {
    renderer: createDomVisualElement,
    ...animations,
    ...gestureAnimations,
};

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = reactExports;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};
const item = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45
    }
  },
  hidden: {
    y: 10,
    opacity: 0
  }
};
const MobileMenuInner = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex",
    style: {
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(m.ul, {
      variants: container,
      initial: "hidden",
      animate: "visible",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "/overleaf/",
          children: "Overleaf Integration"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "/docs/quick-start/",
          children: "Documentation"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "/blog/",
          children: "Blog"
        })
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
      className: "flex pill",
      style: {
        gap: 0
      },
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("li", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "",
          children: "Sign-in"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "",
          children: "Log-in"
        })
      })]
    })]
  });
};
const DocsMenuInner = ({
  children
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "mm-container",
    children
  });
};
const BlogMenuInner = ({
  children
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
    className: "mm-container",
    children
  });
};
const MobileMenu = ({
  children,
  site,
  blog,
  doc
}) => {
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
      className: "absolute-button",
      onClick: handleOpen,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: open ? "line rotate-left" : "line"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: open ? "line rotate-right" : "line"
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, {
      features: domAnimation,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
        children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, {
          variants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          className: "mobile-menu",
          children: [site && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenuInner, {}), doc && /* @__PURE__ */ jsxRuntimeExports.jsx(DocsMenuInner, {
            children
          }), blog && /* @__PURE__ */ jsxRuntimeExports.jsx(BlogMenuInner, {
            children
          })]
        })
      })
    })]
  });
};
__astro_tag_component__(MobileMenu, "@astrojs/react");

const $$Astro$c = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="flex astro-S7ZBVXMX" style="align-items: center; --gap: 0; font-size: 18px;">
   <svg id="b" xmlns="http://www.w3.org/2000/svg" width="36px" viewBox="0 0 32 32" class="astro-S7ZBVXMX"><path d="M19.38,32H4.76v-3.15c0-1.54,1.15-2.83,2.67-3,2.88-.32,7.71-1.41,7.71-5.18h1.88c0,3.82-3.42,6.39-9.39,7.05-.57,.06-1,.55-1,1.13v1.27h12.74c4.02,0,7.28-3.27,7.28-7.28l-.03-13.58c0-4.06-3.31-7.37-7.37-7.37h-2.26V18.51h-3.72c-4.92,0-9.12-3.67-9.56-8.35-.25-2.64,.59-5.18,2.36-7.13C7.83,1.11,10.32,0,12.92,0V1.89c-2.07,0-4.06,.88-5.45,2.41-1.41,1.55-2.08,3.57-1.88,5.68,.36,3.72,3.73,6.64,7.69,6.64h1.84V0h4.15C24.37,0,28.52,4.15,28.52,9.25l.03,13.58c0,5.05-4.11,9.17-9.16,9.17Z" class="astro-S7ZBVXMX"></path></svg>
   <span class="logotype astro-S7ZBVXMX" style="color: black; margin-left: .25rem">CiteDrive</span>
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Logo.astro");

const $$Astro$b = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="flex hidden astro-LOASJEQZ" style="list-style: none; --gap: 2rem; margin-right: 2rem; align-items: center;">
        <!-- <ReactDropdown label="Features" client:load></ReactDropdown> -->
        <!-- <ReactDropdown label="Integrations" client:load>
            <ul class="grid" style="list-style: none; padding: 0">
                <li><a href="/">Overleaf</a></li>
                <li><a href="/">RStudio</a></li>
            </ul>
        </ReactDropdown> -->
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/overleaf/">Overleaf Integration</a></li>
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/docs/quick-start/">Documentation</a></li>
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/blog/">Blog</a></li>

        <!-- <ReactDropdown label="Resources" client:load>
            <ul class="grid" style="list-style: none; padding: 0">
                <li><a href="/docs/quick-start/">Documentaion</a></li>
                <li><a href="/blog/">Blog</a></li>
            </ul>
        </ReactDropdown> -->

        <!-- <li><a class="header-link" href="#">Pricing</a></li> -->
    </ul>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Navigation.astro");

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, lang, dir, site, doc, blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-PWMMW5BA">

   <nav class="header flex astro-PWMMW5BA" style="justify-content: space-between; align-items: center;">

   <div class="flex astro-PWMMW5BA" style="align-items: center;">


   ${renderComponent($$result, "Logo", $$Logo, { "class": "logo astro-PWMMW5BA" })}


   ${blog && renderTemplate`<span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-PWMMW5BA">Blog</span>`}

   </div>

   <div class="flex astro-PWMMW5BA" style="--gap: 0">

   ${renderComponent($$result, "Navigation", $$Navigation, { "class": "astro-PWMMW5BA" })}

   <ul class="flex pill hidden astro-PWMMW5BA" style="--gap: 0">
      <li class="astro-PWMMW5BA"><a href="https://app.citedrive.com/" class="astro-PWMMW5BA">Log In</a></li>
      <li class="astro-PWMMW5BA"><a href="https://app.citedrive.com/sign-up/" class="astro-PWMMW5BA">Sign Up</a></li>
   </ul>

   </div>

   ${renderComponent($$result, "MobileMenu", MobileMenu, { "site": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-PWMMW5BA" })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Header.astro");

function ReactAccordion({
  children,
  label,
  isOpen
}) {
  const [open, setOpen] = reactExports.useState(isOpen);
  const handleClick = () => setOpen(!open);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
    className: "react-accordion",
    "aria-expanded": "true",
    style: {
      marginBottom: ".75rem"
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
      className: "flex",
      style: {
        "gap": ".25rem"
      },
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
        className: open ? "arrow" : "arrow accordion-closed",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 26 12",
        width: "16px",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: "M12.26,11.74L.4,1.93C-.08,1.53-.13,.84,.27,.38h0C.68-.08,1.4-.13,1.88,.26L13,9.46,24.12,.26c.48-.39,1.19-.34,1.6,.12h0c.41,.46,.35,1.15-.12,1.55L13.74,11.74c-.43,.35-1.05,.35-1.48,0Z"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
        style: {
          marginBottom: 0
        },
        className: "react-accordion-label",
        onClick: handleClick,
        role: "button",
        children: label
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: open ? "react-accordion-content expanded" : "react-accordion-content",
      children
    })]
  });
}
__astro_tag_component__(ReactAccordion, "@astrojs/react");

const $$Astro$9 = createAstro();
const $$DocHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DocHeader;
  Astro2.props;
  const docs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/docs/adding-references-from-bibtex.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.G),"../../pages/docs/adding-references-from-google-scholar.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.E),"../../pages/docs/adding-references-from-pubmed.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.H),"../../pages/docs/adding-references-to-journals.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.I),"../../pages/docs/adding-references-to-websites.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.J),"../../pages/docs/adding-to-books.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.P),"../../pages/docs/creating-a-new-project-in-citedrive.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.F),"../../pages/docs/enabling-biblatex-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.K),"../../pages/docs/enabling-bibtex-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.L),"../../pages/docs/enabling-natbib-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.M),"../../pages/docs/quick-start.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.Q),"../../pages/docs/sharing-a-project.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.O),"../../pages/docs/synchronize-database.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.N)}), () => "../../pages/docs/*.{md,mdx}");
  const QUICKSTART = docs.filter(function(item) {
    return item.frontmatter.cat == "quick-start";
  });
  const ADDREFERENCES = docs.filter(function(item) {
    return item.frontmatter.cat == "add-references";
  });
  const OVERLEAFSETUP = docs.filter(function(item) {
    return item.frontmatter.cat == "overleaf-setup";
  });
  const HOWTOS = docs.filter(function(item) {
    return item.frontmatter.cat == "how-tos";
  });
  const BIBLATEX = docs.filter(function(item) {
    return item.frontmatter.cat == "biblatex";
  });
  const BIBTEX = docs.filter(function(item) {
    return item.frontmatter.cat == "bibtex";
  });
  const NATBIB = docs.filter(function(item) {
    return item.frontmatter.cat == "natbib";
  });
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-63RGYD2U">

   <nav class="alternative-header flex astro-63RGYD2U" style="justify-content: space-between; align-items: center;">

   <div class="flex astro-63RGYD2U" style="align-items: center; justify-content: space-between; width: 100%;">

   <div class="flex astro-63RGYD2U" style="align-items: center;">
      ${renderComponent($$result, "Logo", $$Logo, { "class": "astro-63RGYD2U" })}
      <span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-63RGYD2U">Documentation</span>
   </div>   

   <ul class="flex pill hidden astro-63RGYD2U" style="--gap: 0;">
      <li class="astro-63RGYD2U"><a href="https://app.citedrive.com/" class="astro-63RGYD2U">Log In</a></li>
      <li class="astro-63RGYD2U"><a href="https://app.citedrive.com/sign-up/" class="astro-63RGYD2U">Sign Up</a></li>
   </ul>
   
   </div>


   ${renderComponent($$result, "MobileMenu", MobileMenu, { "doc": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result2) => renderTemplate`<h3 style="margin-bottom: 2rem" class="astro-63RGYD2U">In this Doc</h3>${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Quick Start", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${QUICKSTART.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Add References", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${ADDREFERENCES.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Overleaf Setup", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${OVERLEAFSETUP.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Howtos", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${HOWTOS.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "BibTex Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${BIBTEX.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "BibLaTeX Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${BIBLATEX.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Natbib Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${NATBIB.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}` })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/DocHeader.astro");

const $$Astro$8 = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  Astro2.props;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.m),"../../pages/blog/citation-keys-in-bibtex.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.D),"../../pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.s),"../../pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.w),"../../pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.n),"../../pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.u),"../../pages/blog/citedrive-january-2022-release.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.B),"../../pages/blog/citedrive-november-2021-release.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.z),"../../pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.v),"../../pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.r),"../../pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.q),"../../pages/blog/how-to-cite-a-website-in-bibtex.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.A),"../../pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.o),"../../pages/blog/literature-management-with-overleaf.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.y),"../../pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.p),"../../pages/blog/overleaf-source-editor-upgrade.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.C),"../../pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.t),"../../pages/blog/using-natbib-with-bibtex-and-overleaf.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.x)}), () => "../../pages/blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-FWQZDMCU">

   <nav class="alternative-header flex astro-FWQZDMCU" style="justify-content: space-between; align-items: center;">
    
    <div class="flex astro-FWQZDMCU" style="align-items: center; justify-content: space-between; width: 100%;">

        <div class="flex astro-FWQZDMCU" style="align-items: center;">
            ${renderComponent($$result, "Logo", $$Logo, { "class": "astro-FWQZDMCU" })}
            <span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-FWQZDMCU">Blog</span>
        </div>   

        <ul class="flex pill hidden astro-FWQZDMCU" style="--gap: 0;">
            <li class="astro-FWQZDMCU"><a href="https://app.citedrive.com/" class="astro-FWQZDMCU">Log In</a></li>
            <li class="astro-FWQZDMCU"><a href="https://app.citedrive.com/sign-up/" class="astro-FWQZDMCU">Sign Up</a></li>
        </ul>
        
   </div>


   ${renderComponent($$result, "MobileMenu", MobileMenu, { "blog": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-FWQZDMCU" }, { "default": ($$result2) => renderTemplate`<h3 style="margin-bottom: 2rem" class="astro-FWQZDMCU">All posts</h3><ul class="list astro-FWQZDMCU">
        ${posts.map((post) => renderTemplate`<li style="list-style: none" class="astro-FWQZDMCU">
                
                    <a class="link astro-FWQZDMCU"${addAttribute(post.url, "href")}>${post.frontmatter.title}</a>
                </li>`)}
        </ul>` })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/BlogHeader.astro");

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer style="background-color: white;" class="astro-DWL4ONJJ">

  <div class="container grid footer-grid astro-DWL4ONJJ">

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">CiteDrive Companion</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik", "label": "CiteDrive Companion for Chrome", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/", "label": "CiteDrive Companion for Firefox", "label": "CiteDrive Companion for Firefox", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo", "label": "CiteDrive Companion for Edge", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Resources</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/docs/quick-start/", "label": "Documentation", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/blog/", "label": "Blog", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://github.com/orgs/citedrive/discussions", "label": "GitHub Discussions", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>


    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Featured</h4>
    <ul class="footer-list astro-DWL4ONJJ">
       <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/citedrive-recommends/", "label": "CiteDrive Recomends", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

  </div>

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Follow us</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://twitter.com/CiteDrive", "label": "Twitter", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag", "label": "Youtube", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>


    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Feedback</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ"><a class="email-link astro-DWL4ONJJ" href="mailto:hello@citedrive.com">hello@citedrive.com</a></li>
    </ul>
    </div>

  </div>

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Legal</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/terms-and-conditions/", "label": "Terms and Conditions", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/privacy-policy/", "label": "Privacy Policy", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

  </div>
  </div>      
    <span style="display: inline-block; margin-bottom: 1rem; width: 100%; text-align: center;" class="astro-DWL4ONJJ">© 2022 CiteDrive. All rights reserved.</span>
  </footer>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/footer/Footer.astro");

const SITE = {
  title: "CiteDrive",
  description: "Your website description.",
  defaultLanguage: "en",
  url: "https://www.citedrive.com"
};
const KNOWN_LANGUAGES = {
  English: "en",
  French: "fr",
  Deutsch: "de"
};
Object.values(KNOWN_LANGUAGES);

const $$Astro$6 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, lang, dir, description, type, frontmatter, headings, site, doc, blog } = Astro2.props;
  const TITLE_TAG = typeof title !== "undefined" ? title + " | CiteDrive - Citation and Bibliographic management for Overleaf and RStudio" : "UNTITLED | CiteDrive - Citation and Bibliographic management for Overleaf and RStudio";
  const DESCRIPTION_TAG = typeof description !== "undefined" ? description : "Read more about '" + title + "' | CiteDrive - BibTeX-supported citation and reference management for your bibliographies on Overleaf and RStudio";
  return renderTemplate`<html${addAttribute(lang, "lang")} dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${TITLE_TAG}</title>
    <meta name="description"${addAttribute(DESCRIPTION_TAG, "content")}>

    <meta property="og:locale"${addAttribute(lang, "content")}>
    <meta property="og:title"${addAttribute(TITLE_TAG, "content")}>
    <meta property="og:description"${addAttribute(DESCRIPTION_TAG, "content")}>
    <meta property="og:type"${addAttribute(type, "content")}>
    <meta property="og:url" content="https://citedrive.com/">
    <meta property="og:site_name" content="CiteDrive">

    <meta property="og:image" content="https://www.citedrive.com/assets/theapp.png">
    <meta property="og:image:width" content="1260">
    <meta property="og:image:height" content="628">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@CiteDrive">
    <meta name="twitter:site" content="@CiteDrive">

    <link rel="canonical"${addAttribute(SITE.url + Astro2.url.pathname, "href")}>
    <!-- import fonts here -->

    ${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": "G-B4P7HQL1R8" })}

${renderHead($$result)}</head>

<body>
${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${site && renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}`}${doc && renderTemplate`${renderComponent($$result2, "DocHeader", $$DocHeader, {})}`}${blog && renderTemplate`${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})}`}<main style="margin-top: 6.5rem">
            ${renderSlot($$result2, $$slots["default"])}
            <!-- <CookieConsent /> -->
</main>${site && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}${blog && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}` })}
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BaseLayout.astro");

const $$Astro$5 = createAstro();
const $$RightSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RightSidebar;
  const { headings, githubEditUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-OOVZGW7M">
	<div class="astro-OOVZGW7M">
	${typeof headings !== "undefined" && headings.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-OOVZGW7M" }, { "default": ($$result2) => renderTemplate`<ul class="astro-OOVZGW7M">
				${headings.filter(({ depth }) => depth > 1 && depth < 4).map((heading) => renderTemplate`<li style="list-style: none;" class="astro-OOVZGW7M">
							<a class="anchor astro-OOVZGW7M"${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a>
						</li>`)}
			</ul>` })}`}
	</div>
</nav>

<a class="banner astro-OOVZGW7M" href="/">
<img src="/assets/Banner/banner.svg" alt="Try CiteDrive!" class="astro-OOVZGW7M">
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/RightSidebar.astro");

const $$Astro$4 = createAstro();
const $$LeftSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LeftSidebar;
  Astro2.props;
  const docs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/docs/adding-references-from-bibtex.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.G),"../../pages/docs/adding-references-from-google-scholar.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.E),"../../pages/docs/adding-references-from-pubmed.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.H),"../../pages/docs/adding-references-to-journals.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.I),"../../pages/docs/adding-references-to-websites.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.J),"../../pages/docs/adding-to-books.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.P),"../../pages/docs/creating-a-new-project-in-citedrive.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.F),"../../pages/docs/enabling-biblatex-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.K),"../../pages/docs/enabling-bibtex-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.L),"../../pages/docs/enabling-natbib-support.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.M),"../../pages/docs/quick-start.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.Q),"../../pages/docs/sharing-a-project.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.O),"../../pages/docs/synchronize-database.mdx": () => import('../prerender.4f3c6400.mjs').then(n => n.N)}), () => "../../pages/docs/*.{md,mdx}");
  const QUICKSTART = docs.filter(function(item) {
    return item.frontmatter.cat == "quick-start";
  });
  const ADDREFERENCES = docs.filter(function(item) {
    return item.frontmatter.cat == "add-references";
  });
  const OVERLEAFSETUP = docs.filter(function(item) {
    return item.frontmatter.cat == "overleaf-setup";
  });
  const HOWTOS = docs.filter(function(item) {
    return item.frontmatter.cat == "how-tos";
  });
  const BIBLATEX = docs.filter(function(item) {
    return item.frontmatter.cat == "biblatex";
  });
  const BIBTEX = docs.filter(function(item) {
    return item.frontmatter.cat == "bibtex";
  });
  const NATBIB = docs.filter(function(item) {
    return item.frontmatter.cat == "natbib";
  });
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-W24XUMAT">

   <div style="padding-bottom: 8rem" class="astro-W24XUMAT">
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Quick Start", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${QUICKSTART.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

       ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Add References", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${ADDREFERENCES.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}
      
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Overleaf Setup", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${OVERLEAFSETUP.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}
      
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Howtos", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${HOWTOS.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "BibTex Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${BIBTEX.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "BibLaTeX Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${BIBLATEX.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Natbib Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${NATBIB.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

   </div>

</nav>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebar.astro");

const $$Astro$3 = createAstro();
const $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { title, lang, dir, frontmatter, description, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title ?? frontmatter.title, "description": description, "lang": lang ?? frontmatter.lang, "doc": true, "class": "astro-MW7AASHJ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="astro-MW7AASHJ">

   <section class="grid astro-MW7AASHJ">

      <aside class="left astro-MW7AASHJ" style="position: fixed;">
         <h4 style="margin-bottom: 1rem; font-weight: 500; color: hsl(var(--clr-secondary));;" class="astro-MW7AASHJ">In this doc</h4>
         <div class="leftSideBar astro-MW7AASHJ">
         ${renderComponent($$result2, "LeftSidebar", $$LeftSidebar, { "lang": lang ?? frontmatter.lang, "class": "astro-MW7AASHJ" })}
         </div>
      </aside>

      <article class="article astro-MW7AASHJ">
         <div class="mobileAnchor astro-MW7AASHJ">
               ${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "On this page", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-MW7AASHJ" }, { "default": ($$result3) => renderTemplate`<div style="margin-top: .75rem;" class="astro-MW7AASHJ">
                     ${renderComponent($$result3, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-MW7AASHJ" })}
                  </div>` })}
            </div>

         <div class="astro-MW7AASHJ">
            ${renderSlot($$result2, $$slots["default"])}
         </div>
      </article>

      <aside class="rightSidebar astro-MW7AASHJ">
         <h4 class="astro-MW7AASHJ">On this page</h4>
         ${renderComponent($$result2, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-MW7AASHJ" })}
      </aside>

      </section>

   </div>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DocsLayout.astro");

const $$file$3 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DocsLayout.astro";
const $$url$3 = undefined;

const DocsLayout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DocsLayout,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { doi } = Astro2.params;
  let url = "https://api.crossref.org/works/" + doi;
  const response = await fetch(url);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "slug", "descpription": doi, "lang": "en" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${data.message.title[0]} </h1><p>${data.message.abstract}</p><p>${data.message.author[0].given}</p><p>${data.message["container-title"]}</p>${typeof data.message.reference !== "undefined" && data.message.reference.map((x) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${typeof x.DOI !== "undefined" && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`<div>
                          ${x.DOI}
                        </div>` })}`}` })}`)}` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro");

const $$file$2 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro";
const $$url$2 = "/discovery/[...doi]/";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const pages = [
    {
      slug: void 0,
      title: "Astro Store",
      text: "Welcome to the Astro store!"
    },
    {
      slug: "products",
      title: "Astro products",
      text: "We have lots of products for you"
    },
    {
      slug: "products/astro-handbook",
      title: "The ultimate Astro handbook",
      text: "If you want to learn Astro, you must read this book."
    }
  ];
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { title, text } = page;
  return renderTemplate`<html>
<head>
  <title>${title}</title>
${renderHead($$result)}</head>
<body>
  <h1>${title}</h1>
  <p>${text}</p>
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro");

const $$file$1 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro";
const $$url$1 = "/test-slug/[...slug]/";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = `docs/quick-start/`;\n<\/script>"], ["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = \\`docs/quick-start/\\`;\n<\/script>"])));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro");

const $$file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro";
const $$url = "/docs/";

const _page33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$InternalLink as $, DocsLayout as D, React__default as R, _page7 as _, $$BaseLayout as a, $$DocsLayout as b, _page8 as c, _page33 as d, ReactAccordion as e, $$RightSidebar as f, reactExports as r };
