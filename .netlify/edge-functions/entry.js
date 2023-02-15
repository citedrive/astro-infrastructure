import { A as App, s as server_default, j as deserializeManifest } from './chunks/astro.421b1de6.mjs';
import { r as reactExports, R as React__default, _ as _page7, c as _page8, d as _page33 } from './chunks/pages/all.4e5f39c2.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6, g as _page9, h as _page10, i as _page11, j as _page12, k as _page13, l as _page14, m as _page15, n as _page16, o as _page17, p as _page18, q as _page19, r as _page20, s as _page21, t as _page22, u as _page23, v as _page24, w as _page25, x as _page26, y as _page27, z as _page28, A as _page29, B as _page30, C as _page31, D as _page32, E as _page34, F as _page35, G as _page36, H as _page37, I as _page38, J as _page39, K as _page40, L as _page41, M as _page42, N as _page43, O as _page44, P as _page45, Q as _page46 } from './chunks/prerender.4f3c6400.mjs';
/* empty css                                                                                                                                                          *//* empty css                                    *//* empty css                                                                                                                                                          *//* empty css                                 *//* empty css                                         *//* empty css                                         *//* empty css                                       */
const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createExports(manifest) {
  const app = new App(manifest);
  const handler = async (request) => {
    const url = new URL(request.url);
    if (manifest.assets.has(url.pathname)) {
      return;
    }
    if (app.match(request)) {
      const ip = request.headers.get("x-nf-client-connection-ip");
      Reflect.set(request, clientAddressSymbol, ip);
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { default: handler };
}

const adapter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: 'Module' }));

var server_browser = {};

var reactDomServerLegacy_browser_production_min = {};

/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServerLegacy_browser_production_min;

function requireReactDomServerLegacy_browser_production_min () {
	if (hasRequiredReactDomServerLegacy_browser_production_min) return reactDomServerLegacy_browser_production_min;
	hasRequiredReactDomServerLegacy_browser_production_min = 1;
var aa=reactExports;function l(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var p=Object.prototype.hasOwnProperty,fa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ia={};
	function ja(a){if(p.call(ia,a))return !0;if(p.call(ha,a))return !1;if(fa.test(a))return ia[a]=!0;ha[a]=!0;return !1}function r(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g;}var t={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){t[a]=new r(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];t[b]=new r(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){t[a]=new r(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){t[a]=new r(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){t[a]=new r(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){t[a]=new r(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){t[a]=new r(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){t[a]=new r(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){t[a]=new r(a,5,!1,a.toLowerCase(),null,!1,!1);});var ka=/[\-:]([a-z])/g;function la(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ka,
	la);t[b]=new r(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ka,la);t[b]=new r(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ka,la);t[b]=new r(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){t[a]=new r(a,1,!1,a.toLowerCase(),null,!1,!1);});
	t.xlinkHref=new r("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){t[a]=new r(a,1,!1,a.toLowerCase(),null,!0,!0);});
	var u={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
	fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ma=["Webkit","ms","Moz","O"];Object.keys(u).forEach(function(a){ma.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);u[b]=u[a];});});var na=/["'&<>]/;
	function v(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=na.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}var oa=/([A-Z])/g,pa=/^ms-/,qa=Array.isArray;function w(a,b){return {insertionMode:a,selectedValue:b}}
	function ra(a,b,c){switch(b){case "select":return w(1,null!=c.value?c.value:c.defaultValue);case "svg":return w(2,null);case "math":return w(3,null);case "foreignObject":return w(1,null);case "table":return w(4,null);case "thead":case "tbody":case "tfoot":return w(5,null);case "colgroup":return w(7,null);case "tr":return w(6,null)}return 4<=a.insertionMode||0===a.insertionMode?w(1,null):a}var sa=new Map;
	function ta(a,b,c){if("object"!==typeof c)throw Error(l(62));b=!0;for(var d in c)if(p.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=v(d);f=v((""+f).trim());}else {e=d;var g=sa.get(e);void 0!==g?e=g:(g=v(e.replace(oa,"-$1").toLowerCase().replace(pa,"-ms-")),sa.set(e,g),e=g);f="number"===typeof f?0===f||p.call(u,d)?""+f:f+"px":v((""+f).trim());}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f);}}b||a.push('"');}
	function x(a,b,c,d){switch(c){case "style":ta(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=t.hasOwnProperty(c)?t[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
	!1!==d&&a.push(" ",c,'="',v(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',v(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',v(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',v(d),'"');}}else if(ja(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',v(d),'"');}}
	function y(a,b,c){if(null!=b){if(null!=c)throw Error(l(60));if("object"!==typeof b||!("__html"in b))throw Error(l(61));b=b.__html;null!==b&&void 0!==b&&a.push(""+b);}}function ua(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
	function va(a,b,c,d){a.push(A(c));var f=c=null,e;for(e in b)if(p.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:x(a,d,e,g);}}a.push(">");y(a,f,c);return "string"===typeof c?(a.push(v(c)),null):c}var wa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xa=new Map;function A(a){var b=xa.get(a);if(void 0===b){if(!wa.test(a))throw Error(l(65,a));b="<"+a;xa.set(a,b);}return b}
	function ya(a,b,c,d,f){switch(b){case "select":a.push(A("select"));var e=null,g=null;for(n in c)if(p.call(c,n)){var h=c[n];if(null!=h)switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:x(a,d,n,h);}}a.push(">");y(a,g,e);return e;case "option":g=f.selectedValue;a.push(A("option"));var k=h=null,m=null;var n=null;for(e in c)if(p.call(c,e)){var q=c[e];if(null!=q)switch(e){case "children":h=q;break;case "selected":m=q;break;case "dangerouslySetInnerHTML":n=
	q;break;case "value":k=q;default:x(a,d,e,q);}}if(null!=g)if(c=null!==k?""+k:ua(h),qa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else ""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");y(a,n,h);return h;case "textarea":a.push(A("textarea"));n=g=e=null;for(h in c)if(p.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":n=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error(l(91));default:x(a,d,
	h,k);}null===e&&null!==g&&(e=g);a.push(">");if(null!=n){if(null!=e)throw Error(l(92));if(qa(n)&&1<n.length)throw Error(l(93));e=""+n;}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(v(""+e));return null;case "input":a.push(A("input"));k=n=h=e=null;for(g in c)if(p.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,"input"));case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":n=m;break;case "value":e=m;break;
	default:x(a,d,g,m);}null!==n?x(a,d,"checked",n):null!==k&&x(a,d,"checked",k);null!==e?x(a,d,"value",e):null!==h&&x(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(A("menuitem"));for(var C in c)if(p.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(l(400));default:x(a,d,C,e);}a.push(">");return null;case "title":a.push(A("title"));e=null;for(q in c)if(p.call(c,q)&&(g=c[q],null!=g))switch(q){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(l(434));
	default:x(a,d,q,g);}a.push(">");return e;case "listing":case "pre":a.push(A(b));g=e=null;for(k in c)if(p.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:x(a,d,k,h);}a.push(">");if(null!=g){if(null!=e)throw Error(l(60));if("object"!==typeof g||!("__html"in g))throw Error(l(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c));}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;
	case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(A(b));for(var D in c)if(p.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,b));default:x(a,d,D,e);}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return va(a,
	c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),va(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return va(a,c,b,d);a.push(A(b));g=e=null;for(m in c)if(p.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ta(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ja(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',v(h),'"');}a.push(">");
	y(a,g,e);return e}}function za(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error(l(395));a.push(c);return a.push('"></template>')}
	function Aa(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),
	b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');default:throw Error(l(397));}}
	function Ba(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error(l(397));}}var Ca=/[<\u2028\u2029]/g;
	function Da(a){return JSON.stringify(a).replace(Ca,function(a){switch(a){case "<":return "\\u003c";case "\u2028":return "\\u2028";case "\u2029":return "\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
	function Ea(a,b){b=void 0===b?"":b;return {bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}function Fa(a,b,c,d){if(c.generateStaticMarkup)return a.push(v(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(v(b)),a=!0);return a}
	var B=Object.assign,Ga=Symbol.for("react.element"),Ha=Symbol.for("react.portal"),Ia=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),La=Symbol.for("react.provider"),Ma=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Ra=Symbol.for("react.lazy"),Sa=Symbol.for("react.scope"),Ta=Symbol.for("react.debug_trace_mode"),Ua=Symbol.for("react.legacy_hidden"),
	Va=Symbol.for("react.default_value"),Wa=Symbol.iterator;
	function Xa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return "Fragment";case Ha:return "Portal";case Ka:return "Profiler";case Ja:return "StrictMode";case Oa:return "Suspense";case Pa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return (a.displayName||"Context")+".Consumer";case La:return (a._context.displayName||"Context")+".Provider";case Na:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Qa:return b=a.displayName||null,null!==b?b:Xa(a.type)||"Memo";case Ra:b=a._payload;a=a._init;try{return Xa(a(b))}catch(c){}}return null}var Ya={};function Za(a,b){a=a.contextTypes;if(!a)return Ya;var c={},d;for(d in a)c[d]=b[d];return c}var E=null;
	function F(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(l(401));}else {if(null===c)throw Error(l(401));F(a,c);}b.context._currentValue2=b.value;}}function $a(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&$a(a);}function ab(a){var b=a.parent;null!==b&&ab(b);a.context._currentValue2=a.value;}
	function bb(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error(l(402));a.depth===b.depth?F(a,b):bb(a,b);}function cb(a,b){var c=b.parent;if(null===c)throw Error(l(402));a.depth===c.depth?F(a,c):cb(a,c);b.context._currentValue2=b.value;}function G(a){var b=E;b!==a&&(null===b?ab(a):null===a?$a(b):b.depth===a.depth?F(b,a):b.depth>a.depth?bb(b,a):cb(b,a),E=a);}
	var db={isMounted:function(){return !1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b);},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b];},enqueueForceUpdate:function(){}};
	function eb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=db;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:B({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
	a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&db.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else {e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=B({},e,h)):B(e,h));}a.state=e;}else e.queue=null;}
	var fb={id:1,overflow:""};function gb(a,b,c){var d=a.id;a=a.overflow;var f=32-H(d)-1;d&=~(1<<f);c+=1;var e=32-H(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return {id:1<<32-H(b)+f|c<<f|d,overflow:e+a}}return {id:1<<e|c<<f|d,overflow:a}}var H=Math.clz32?Math.clz32:hb,ib=Math.log,jb=Math.LN2;function hb(a){a>>>=0;return 0===a?32:31-(ib(a)/jb|0)|0}function kb(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
	var lb="function"===typeof Object.is?Object.is:kb,I=null,ob=null,J=null,K=null,L=!1,M=!1,N=0,O=null,P=0;function Q(){if(null===I)throw Error(l(321));return I}function pb(){if(0<P)throw Error(l(312));return {memoizedState:null,queue:null,next:null}}function qb(){null===K?null===J?(L=!1,J=K=pb()):(L=!0,K=J):null===K.next?(L=!1,K=K.next=pb()):(L=!0,K=K.next);return K}function rb(){ob=I=null;M=!1;J=null;P=0;K=O=null;}function sb(a,b){return "function"===typeof b?b(a):b}
	function tb(a,b,c){I=Q();K=qb();if(L){var d=K.queue;b=d.dispatch;if(null!==O&&(c=O.get(d),void 0!==c)){O.delete(d);d=K.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);K.memoizedState=d;return [d,b]}return [K.memoizedState,b]}a=a===sb?"function"===typeof b?b():b:void 0!==c?c(b):b;K.memoizedState=a;a=K.queue={last:null,dispatch:null};a=a.dispatch=ub.bind(null,I,a);return [K.memoizedState,a]}
	function vb(a,b){I=Q();K=qb();b=void 0===b?null:b;if(null!==K){var c=K.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!lb(b[f],d[f])){d=!1;break a}d=!0;}if(d)return c[0]}}a=a();K.memoizedState=[a,b];return a}function ub(a,b,c){if(25<=P)throw Error(l(301));if(a===I)if(M=!0,a={action:c,next:null},null===O&&(O=new Map),c=O.get(b),void 0===c)O.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function wb(){throw Error(l(394));}
	function R(){}
	var xb={readContext:function(a){return a._currentValue2},useContext:function(a){Q();return a._currentValue2},useMemo:vb,useReducer:tb,useRef:function(a){I=Q();K=qb();var b=K.memoizedState;return null===b?(a={current:a},K.memoizedState=a):b},useState:function(a){return tb(sb,a)},useInsertionEffect:R,useLayoutEffect:function(){},useCallback:function(a,b){return vb(function(){return a},b)},useImperativeHandle:R,useEffect:R,useDebugValue:R,useDeferredValue:function(a){Q();return a},useTransition:function(){Q();return [!1,
	wb]},useId:function(){var a=ob.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-H(a)-1)).toString(32)+b;var c=S;if(null===c)throw Error(l(404));b=N++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){Q();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(l(407));return c()}},S=null,yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function zb(a){console.error(a);return null}
	function T(){}
	function Ab(a,b,c,d,f,e,g,h,k){var m=[],n=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:n,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?zb:f,onAllReady:void 0===e?T:e,onShellReady:void 0===g?T:g,onShellError:void 0===h?T:h,onFatalError:void 0===k?T:k};c=U(b,0,null,c,!1,!1);c.parentFlushed=
	!0;a=Bb(b,a,null,c,n,Ya,null,fb);m.push(a);return b}function Bb(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Cb(a);},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function U(a,b,c,d,f,e){return {status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
	function V(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function W(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b);}
	function Db(a,b,c,d,f){I={};ob=b;N=0;for(a=c(d,f);M;)M=!1,N=0,P+=1,K=null,a=c(d,f);rb();return a}function Eb(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else {c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(l(108,Xa(d)||"Unknown",h));d=B({},g,c);}b.legacyContext=d;X(a,b,f);b.legacyContext=g;}else X(a,b,f);}
	function Fb(a,b){if(a&&a.defaultProps){b=B({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
	function Gb(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Za(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);eb(e,c,d,f);Eb(a,b,e,c);}else {e=Za(c,b.legacyContext);f=Db(a,b,c,d,e);var g=0!==N;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)eb(f,c,d,e),Eb(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=gb(d,1,0);try{X(a,b,f);}finally{b.treeContext=d;}}else X(a,b,f);}else if("string"===
	typeof c){f=b.blockedSegment;e=ya(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=ra(g,c,d);Hb(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">");}f.lastPushedText=!1;}else {switch(c){case Ua:case Ta:case Ja:case Ka:case Ia:X(a,b,d.children);return;
	case Pa:X(a,b,d.children);return;case Sa:throw Error(l(343));case Oa:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=U(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(k);f.lastPushedText=!1;var m=U(a,0,null,f.formatContext,!1,!1);m.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=m;try{if(Hb(a,
	b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,Y(h,m),0===h.pendingTasks)break a}catch(n){m.status=4,h.forceClientRender=!0,h.errorDigest=V(a,n);}finally{b.blockedBoundary=c,b.blockedSegment=f;}b=Bb(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b);}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Na:d=Db(a,b,c.render,d,f);if(0!==N){c=b.treeContext;b.treeContext=gb(c,1,0);try{X(a,b,d);}finally{b.treeContext=
	c;}}else X(a,b,d);return;case Qa:c=c.type;d=Fb(c,d);Gb(a,b,c,d,f);return;case La:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=E;E=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;X(a,b,f);a=E;if(null===a)throw Error(l(403));d=a.parentValue;a.context._currentValue2=d===Va?a.context._defaultValue:d;a=E=a.parent;b.context=a;return;case Ma:d=d.children;d=d(c._currentValue2);X(a,b,d);return;case Ra:f=c._init;c=f(c._payload);d=Fb(c,d);Gb(a,
	b,c,d,void 0);return}throw Error(l(130,null==c?c:typeof c,""));}}
	function X(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:Gb(a,b,c.type,c.props,c.ref);return;case Ha:throw Error(l(257));case Ra:var d=c._init;c=d(c._payload);X(a,b,c);return}if(qa(c)){Ib(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Wa&&c[Wa]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);Ib(a,b,f);}return}a=Object.prototype.toString.call(c);throw Error(l(31,"[object Object]"===
	a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Fa(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Fa(b.blockedSegment.chunks,""+c,a.responseState,d.lastPushedText));}function Ib(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=gb(e,d,f);try{Hb(a,b,c[f]);}finally{b.treeContext=e;}}}
	function Hb(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return X(a,b,c)}catch(k){if(rb(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=U(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Bb(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;G(e);}else throw b.blockedSegment.formatContext=
	d,b.legacyContext=f,b.context=e,G(e),k;}}function Jb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Kb(this,b,a);}
	function Lb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,a=void 0===c?Error(l(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Lb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,
	d()));}function Y(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Y(a,c);}else a.completedSegments.push(b);}
	function Kb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(l(389));a.completedRootSegment=c;}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=T,b=a.onShellReady,b());}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Y(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Jb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(Y(b,c),1===b.completedSegments.length&&
	b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a());}
	function Cb(a){if(2!==a.status){var b=E,c=yb.current;yb.current=xb;var d=S;S=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){G(g.context);try{X(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Kb(h,g.blockedBoundary,k);}catch(z){if(rb(),"object"===typeof z&&null!==z&&"function"===typeof z.then){var m=g.ping;z.then(m,m);}else {g.abortSet.delete(g);
	k.status=4;var n=g.blockedBoundary,q=z,C=V(h,q);null===n?W(h,q):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,n.errorDigest=C,n.parentFlushed&&h.clientRenderedBoundaries.push(n)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D();}}}finally{}}}f.splice(0,e);null!==a.destination&&Mb(a,a.destination);}catch(z){V(a,z),W(a,z);}finally{S=d,yb.current=c,c===xb&&G(b);}}}
	function Z(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Nb(a,b,f);}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error(l(390));}}
	function Nb(a,b,c){var d=c.boundary;if(null===d)return Z(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=v(d),b.push(d),b.push('"')),b.push("></template>")),Z(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;
	var e=f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;za(b,a.responseState,d);Z(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),za(b,a.responseState,d.id),Z(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error(l(391));Nb(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");
	return a}function Ob(a,b,c){Aa(b,a.responseState,c.formatContext,c.id);Nb(a,b,c);return Ba(b,c.formatContext)}
	function Pb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Qb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
	d)throw Error(l(395));c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
	function Qb(a,b,c,d){if(2===d.status)return !0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(l(392));return Ob(a,b,d)}Ob(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));b.push(a.segmentPrefix);
	f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
	function Mb(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Nb(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c]);}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,n=g.errorMessage,q=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
	if(null===k)throw Error(l(395));d.push(k);d.push('"');if(m||n||q){d.push(",");var C=Da(m||"");d.push(C);}if(n||q){d.push(",");var D=Da(n||"");d.push(D);}if(q){d.push(",");var z=Da(q);d.push(z);}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var ba=a.completedBoundaries;for(e=0;e<ba.length;e++)if(!Pb(a,b,ba[e])){a.destination=null;e++;ba.splice(0,e);return}ba.splice(0,e);var ca=a.partialBoundaries;for(e=0;e<ca.length;e++){var mb=ca[e];a:{f=a;g=b;var da=mb.completedSegments;
	for(h=0;h<da.length;h++)if(!Qb(f,g,mb,da[h])){h++;da.splice(0,h);var nb=!1;break a}da.splice(0,h);nb=!0;}if(!nb){a.destination=null;e++;ca.splice(0,e);return}}ca.splice(0,e);var ea=a.completedBoundaries;for(e=0;e<ea.length;e++)if(!Pb(a,b,ea[e])){a.destination=null;e++;ea.splice(0,e);return}ea.splice(0,e);}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.push(null);}}
	function Rb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Lb(c,a,b)});c.clear();null!==a.destination&&Mb(a,a.destination);}catch(d){V(a,d),W(a,d);}}function Sb(){}
	function Tb(a,b,c,d){var f=!1,e=null,g="",h={push:function(a){null!==a&&(g+=a);return !0},destroy:function(a){f=!0;e=a;}},k=!1;a=Ab(a,Ea(c,b?b.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},Infinity,Sb,void 0,function(){k=!0;},void 0,void 0);Cb(a);Rb(a,d);if(1===a.status)a.status=2,h.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=h;try{Mb(a,h);}catch(m){V(a,m),W(a,m);}}if(f)throw e;if(!k)throw Error(l(426));return g}
	reactDomServerLegacy_browser_production_min.renderToNodeStream=function(){throw Error(l(207));};reactDomServerLegacy_browser_production_min.renderToStaticMarkup=function(a,b){return Tb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};reactDomServerLegacy_browser_production_min.renderToStaticNodeStream=function(){throw Error(l(208));};reactDomServerLegacy_browser_production_min.renderToString=function(a,b){return Tb(a,b,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};
	reactDomServerLegacy_browser_production_min.version="18.2.0";
	return reactDomServerLegacy_browser_production_min;
}

var reactDomServer_browser_production_min = {};

/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServer_browser_production_min;

function requireReactDomServer_browser_production_min () {
	if (hasRequiredReactDomServer_browser_production_min) return reactDomServer_browser_production_min;
	hasRequiredReactDomServer_browser_production_min = 1;
var aa=reactExports;function k(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=null,n=0;
	function p(a,b){if(0!==b.length)if(512<b.length)0<n&&(a.enqueue(new Uint8Array(l.buffer,0,n)),l=new Uint8Array(512),n=0),a.enqueue(b);else {var c=l.length-n;c<b.length&&(0===c?a.enqueue(l):(l.set(b.subarray(0,c),n),a.enqueue(l),b=b.subarray(c)),l=new Uint8Array(512),n=0);l.set(b,n);n+=b.length;}}function t(a,b){p(a,b);return !0}function ba(a){l&&0<n&&(a.enqueue(new Uint8Array(l.buffer,0,n)),l=null,n=0);}var ca=new TextEncoder;function u(a){return ca.encode(a)}function w(a){return ca.encode(a)}
	function da(a,b){"function"===typeof a.error?a.error(b):a.close();}var x=Object.prototype.hasOwnProperty,ea=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};
	function ia(a){if(x.call(ha,a))return !0;if(x.call(fa,a))return !1;if(ea.test(a))return ha[a]=!0;fa[a]=!0;return !1}function y(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g;}var z={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new y(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new y(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new y(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new y(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new y(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){z[a]=new y(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new y(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new y(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new y(a,5,!1,a.toLowerCase(),null,!1,!1);});var ja=/[\-:]([a-z])/g;function ka(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ja,
	ka);z[b]=new y(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ja,ka);z[b]=new y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ja,ka);z[b]=new y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCase(),null,!1,!1);});
	z.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCase(),null,!0,!0);});
	var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
	fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},la=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){la.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a];});});var oa=/["'&<>]/;
	function C(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=oa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
	var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray,sa=w("<script>"),ta=w("\x3c/script>"),ua=w('<script src="'),va=w('<script type="module" src="'),wa=w('" async="">\x3c/script>'),xa=/(<\/|<)(s)(cript)/gi;function ya(a,b,c,d){return ""+b+("s"===c?"\\u0073":"\\u0053")+d}
	function za(a,b,c,d,f){a=void 0===a?"":a;b=void 0===b?sa:w('<script nonce="'+C(b)+'">');var e=[];void 0!==c&&e.push(b,u((""+c).replace(xa,ya)),ta);if(void 0!==d)for(c=0;c<d.length;c++)e.push(ua,u(C(d[c])),wa);if(void 0!==f)for(d=0;d<f.length;d++)e.push(va,u(C(f[d])),wa);return {bootstrapChunks:e,startInlineScript:b,placeholderPrefix:w(a+"P:"),segmentPrefix:w(a+"S:"),boundaryPrefix:a+"B:",idPrefix:a,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}
	function D(a,b){return {insertionMode:a,selectedValue:b}}function Aa(a){return D("http://www.w3.org/2000/svg"===a?2:"http://www.w3.org/1998/Math/MathML"===a?3:0,null)}
	function Ba(a,b,c){switch(b){case "select":return D(1,null!=c.value?c.value:c.defaultValue);case "svg":return D(2,null);case "math":return D(3,null);case "foreignObject":return D(1,null);case "table":return D(4,null);case "thead":case "tbody":case "tfoot":return D(5,null);case "colgroup":return D(7,null);case "tr":return D(6,null)}return 4<=a.insertionMode||0===a.insertionMode?D(1,null):a}var Ca=w("\x3c!-- --\x3e");function Da(a,b,c,d){if(""===b)return d;d&&a.push(Ca);a.push(u(C(b)));return !0}
	var Ea=new Map,Fa=w(' style="'),Ga=w(":"),Ha=w(";");
	function Ia(a,b,c){if("object"!==typeof c)throw Error(k(62));b=!0;for(var d in c)if(x.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(C(d));f=u(C((""+f).trim()));}else {e=d;var g=Ea.get(e);void 0!==g?e=g:(g=w(C(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-"))),Ea.set(e,g),e=g);f="number"===typeof f?0===f||x.call(B,d)?u(""+f):u(f+"px"):u(C((""+f).trim()));}b?(b=!1,a.push(Fa,e,Ga,f)):a.push(Ha,e,Ga,f);}}b||a.push(E);}
	var H=w(" "),I=w('="'),E=w('"'),Ja=w('=""');
	function J(a,b,c,d){switch(c){case "style":Ia(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=z.hasOwnProperty(c)?z[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=u(b.attributeName);switch(b.type){case 3:d&&a.push(H,c,Ja);break;case 4:!0===d?a.push(H,c,Ja):!1!==
	d&&a.push(H,c,I,u(C(d)),E);break;case 5:isNaN(d)||a.push(H,c,I,u(C(d)),E);break;case 6:!isNaN(d)&&1<=d&&a.push(H,c,I,u(C(d)),E);break;default:b.sanitizeURL&&(d=""+d),a.push(H,c,I,u(C(d)),E);}}else if(ia(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(H,u(c),I,u(C(d)),E);}}var K=w(">"),Ka=w("/>");
	function L(a,b,c){if(null!=b){if(null!=c)throw Error(k(60));if("object"!==typeof b||!("__html"in b))throw Error(k(61));b=b.__html;null!==b&&void 0!==b&&a.push(u(""+b));}}function La(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Ma=w(' selected=""');
	function Na(a,b,c,d){a.push(M(c));var f=c=null,e;for(e in b)if(x.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:J(a,d,e,g);}}a.push(K);L(a,f,c);return "string"===typeof c?(a.push(u(C(c))),null):c}var Oa=w("\n"),Pa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Qa=new Map;function M(a){var b=Qa.get(a);if(void 0===b){if(!Pa.test(a))throw Error(k(65,a));b=w("<"+a);Qa.set(a,b);}return b}var Ra=w("<!DOCTYPE html>");
	function Sa(a,b,c,d,f){switch(b){case "select":a.push(M("select"));var e=null,g=null;for(r in c)if(x.call(c,r)){var h=c[r];if(null!=h)switch(r){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:J(a,d,r,h);}}a.push(K);L(a,g,e);return e;case "option":g=f.selectedValue;a.push(M("option"));var m=h=null,q=null;var r=null;for(e in c)if(x.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":q=v;break;case "dangerouslySetInnerHTML":r=
	v;break;case "value":m=v;default:J(a,d,e,v);}}if(null!=g)if(c=null!==m?""+m:La(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ma);break}}else ""+g===c&&a.push(Ma);else q&&a.push(Ma);a.push(K);L(a,r,h);return h;case "textarea":a.push(M("textarea"));r=g=e=null;for(h in c)if(x.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":r=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error(k(91));default:J(a,d,h,m);}null===e&&null!==g&&(e=g);a.push(K);
	if(null!=r){if(null!=e)throw Error(k(92));if(ra(r)&&1<r.length)throw Error(k(93));e=""+r;}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);null!==e&&a.push(u(C(""+e)));return null;case "input":a.push(M("input"));m=r=h=e=null;for(g in c)if(x.call(c,g)&&(q=c[g],null!=q))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,"input"));case "defaultChecked":m=q;break;case "defaultValue":h=q;break;case "checked":r=q;break;case "value":e=q;break;default:J(a,d,g,q);}null!==r?J(a,d,"checked",
	r):null!==m&&J(a,d,"checked",m);null!==e?J(a,d,"value",e):null!==h&&J(a,d,"value",h);a.push(Ka);return null;case "menuitem":a.push(M("menuitem"));for(var A in c)if(x.call(c,A)&&(e=c[A],null!=e))switch(A){case "children":case "dangerouslySetInnerHTML":throw Error(k(400));default:J(a,d,A,e);}a.push(K);return null;case "title":a.push(M("title"));e=null;for(v in c)if(x.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(k(434));default:J(a,d,v,g);}a.push(K);
	return e;case "listing":case "pre":a.push(M(b));g=e=null;for(m in c)if(x.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:J(a,d,m,h);}a.push(K);if(null!=g){if(null!=e)throw Error(k(60));if("object"!==typeof g||!("__html"in g))throw Error(k(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(Oa,u(c)):a.push(u(""+c)));}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(M(b));
	for(var F in c)if(x.call(c,F)&&(e=c[F],null!=e))switch(F){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,b));default:J(a,d,F,e);}a.push(Ka);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Na(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Ra),Na(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Na(a,c,b,d);a.push(M(b));
	g=e=null;for(q in c)if(x.call(c,q)&&(h=c[q],null!=h))switch(q){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Ia(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ia(q)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(H,u(q),I,u(C(h)),E);}a.push(K);L(a,g,e);return e}}
	var Ta=w("</"),Ua=w(">"),Va=w('<template id="'),Wa=w('"></template>'),Xa=w("\x3c!--$--\x3e"),Ya=w('\x3c!--$?--\x3e<template id="'),Za=w('"></template>'),$a=w("\x3c!--$!--\x3e"),ab=w("\x3c!--/$--\x3e"),bb=w("<template"),cb=w('"'),db=w(' data-dgst="');w(' data-msg="');w(' data-stck="');var eb=w("></template>");function fb(a,b,c){p(a,Ya);if(null===c)throw Error(k(395));p(a,c);return t(a,Za)}
	var gb=w('<div hidden id="'),hb=w('">'),ib=w("</div>"),jb=w('<svg aria-hidden="true" style="display:none" id="'),kb=w('">'),lb=w("</svg>"),mb=w('<math aria-hidden="true" style="display:none" id="'),nb=w('">'),ob=w("</math>"),pb=w('<table hidden id="'),qb=w('">'),rb=w("</table>"),sb=w('<table hidden><tbody id="'),tb=w('">'),ub=w("</tbody></table>"),vb=w('<table hidden><tr id="'),wb=w('">'),xb=w("</tr></table>"),yb=w('<table hidden><colgroup id="'),zb=w('">'),Ab=w("</colgroup></table>");
	function Bb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return p(a,gb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,hb);case 2:return p(a,jb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,kb);case 3:return p(a,mb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,nb);case 4:return p(a,pb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,qb);case 5:return p(a,sb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,tb);case 6:return p(a,vb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,wb);case 7:return p(a,
	yb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,zb);default:throw Error(k(397));}}function Cb(a,b){switch(b.insertionMode){case 0:case 1:return t(a,ib);case 2:return t(a,lb);case 3:return t(a,ob);case 4:return t(a,rb);case 5:return t(a,ub);case 6:return t(a,xb);case 7:return t(a,Ab);default:throw Error(k(397));}}
	var Db=w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Eb=w('$RS("'),Gb=w('","'),Hb=w('")\x3c/script>'),Ib=w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
	Jb=w('$RC("'),Kb=w('","'),Lb=w('")\x3c/script>'),Mb=w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Nb=w('$RX("'),Ob=w('"'),Pb=w(")\x3c/script>"),Qb=w(","),Rb=/[<\u2028\u2029]/g;
	function Sb(a){return JSON.stringify(a).replace(Rb,function(a){switch(a){case "<":return "\\u003c";case "\u2028":return "\\u2028";case "\u2029":return "\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
	var N=Object.assign,Tb=Symbol.for("react.element"),Ub=Symbol.for("react.portal"),Vb=Symbol.for("react.fragment"),Wb=Symbol.for("react.strict_mode"),Xb=Symbol.for("react.profiler"),Yb=Symbol.for("react.provider"),Zb=Symbol.for("react.context"),$b=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),ec=Symbol.for("react.scope"),fc=Symbol.for("react.debug_trace_mode"),gc=Symbol.for("react.legacy_hidden"),
	hc=Symbol.for("react.default_value"),ic=Symbol.iterator;
	function jc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Vb:return "Fragment";case Ub:return "Portal";case Xb:return "Profiler";case Wb:return "StrictMode";case ac:return "Suspense";case bc:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Zb:return (a.displayName||"Context")+".Consumer";case Yb:return (a._context.displayName||"Context")+".Provider";case $b:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case cc:return b=a.displayName||null,null!==b?b:jc(a.type)||"Memo";case dc:b=a._payload;a=a._init;try{return jc(a(b))}catch(c){}}return null}var kc={};function lc(a,b){a=a.contextTypes;if(!a)return kc;var c={},d;for(d in a)c[d]=b[d];return c}var O=null;
	function P(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(k(401));}else {if(null===c)throw Error(k(401));P(a,c);}b.context._currentValue=b.value;}}function mc(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&mc(a);}function nc(a){var b=a.parent;null!==b&&nc(b);a.context._currentValue=a.value;}
	function oc(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error(k(402));a.depth===b.depth?P(a,b):oc(a,b);}function pc(a,b){var c=b.parent;if(null===c)throw Error(k(402));a.depth===c.depth?P(a,c):pc(a,c);b.context._currentValue=b.value;}function Q(a){var b=O;b!==a&&(null===b?nc(a):null===a?mc(b):b.depth===a.depth?P(b,a):b.depth>a.depth?oc(b,a):pc(b,a),O=a);}
	var qc={isMounted:function(){return !1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b);},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b];},enqueueForceUpdate:function(){}};
	function rc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=qc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:N({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
	a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&qc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else {e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=N({},e,h)):N(e,h));}a.state=e;}else e.queue=null;}
	var sc={id:1,overflow:""};function tc(a,b,c){var d=a.id;a=a.overflow;var f=32-uc(d)-1;d&=~(1<<f);c+=1;var e=32-uc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return {id:1<<32-uc(b)+f|c<<f|d,overflow:e+a}}return {id:1<<e|c<<f|d,overflow:a}}var uc=Math.clz32?Math.clz32:vc,wc=Math.log,xc=Math.LN2;function vc(a){a>>>=0;return 0===a?32:31-(wc(a)/xc|0)|0}function yc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
	var zc="function"===typeof Object.is?Object.is:yc,R=null,Ac=null,Bc=null,S=null,T=!1,Cc=!1,U=0,V=null,Dc=0;function W(){if(null===R)throw Error(k(321));return R}function Ec(){if(0<Dc)throw Error(k(312));return {memoizedState:null,queue:null,next:null}}function Fc(){null===S?null===Bc?(T=!1,Bc=S=Ec()):(T=!0,S=Bc):null===S.next?(T=!1,S=S.next=Ec()):(T=!0,S=S.next);return S}function Gc(){Ac=R=null;Cc=!1;Bc=null;Dc=0;S=V=null;}function Hc(a,b){return "function"===typeof b?b(a):b}
	function Ic(a,b,c){R=W();S=Fc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return [d,b]}return [S.memoizedState,b]}a=a===Hc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=Jc.bind(null,R,a);return [S.memoizedState,a]}
	function Kc(a,b){R=W();S=Fc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!zc(b[f],d[f])){d=!1;break a}d=!0;}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}function Jc(a,b,c){if(25<=Dc)throw Error(k(301));if(a===R)if(Cc=!0,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}
	function Lc(){throw Error(k(394));}function Mc(){}
	var Oc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:Kc,useReducer:Ic,useRef:function(a){R=W();S=Fc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return Ic(Hc,a)},useInsertionEffect:Mc,useLayoutEffect:function(){},useCallback:function(a,b){return Kc(function(){return a},b)},useImperativeHandle:Mc,useEffect:Mc,useDebugValue:Mc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
	return [!1,Lc]},useId:function(){var a=Ac.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-uc(a)-1)).toString(32)+b;var c=Nc;if(null===c)throw Error(k(404));b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(k(407));return c()}},Nc=null,Pc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Qc(a){console.error(a);return null}
	function X(){}
	function Rc(a,b,c,d,f,e,g,h,m){var q=[],r=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:r,pingedTasks:q,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Qc:f,onAllReady:void 0===e?X:e,onShellReady:void 0===g?X:g,onShellError:void 0===h?X:h,onFatalError:void 0===m?X:m};c=Sc(b,0,null,c,!1,!1);c.parentFlushed=
	!0;a=Tc(b,a,null,c,r,kc,null,sc);q.push(a);return b}function Tc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){var b=a.pingedTasks;b.push(m);1===b.length&&Uc(a);},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function Sc(a,b,c,d,f,e){return {status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
	function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Vc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,da(a.destination,b)):(a.status=1,a.fatalError=b);}
	function Wc(a,b,c,d,f){R={};Ac=b;U=0;for(a=c(d,f);Cc;)Cc=!1,U=0,Dc+=1,S=null,a=c(d,f);Gc();return a}function Xc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else {c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(k(108,jc(d)||"Unknown",h));d=N({},g,c);}b.legacyContext=d;Z(a,b,f);b.legacyContext=g;}else Z(a,b,f);}
	function Yc(a,b){if(a&&a.defaultProps){b=N({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
	function Zc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=lc(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);rc(e,c,d,f);Xc(a,b,e,c);}else {e=lc(c,b.legacyContext);f=Wc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)rc(f,c,d,e),Xc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=tc(d,1,0);try{Z(a,b,f);}finally{b.treeContext=d;}}else Z(a,b,f);}else if("string"===
	typeof c){f=b.blockedSegment;e=Sa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=Ba(g,c,d);$c(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Ta,u(c),Ua);}f.lastPushedText=!1;}else {switch(c){case gc:case fc:case Wb:case Xb:case Vb:Z(a,b,d.children);return;
	case bc:Z(a,b,d.children);return;case ec:throw Error(k(343));case ac:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);f.lastPushedText=!1;var q=Sc(a,0,null,f.formatContext,!1,!1);q.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=q;try{if($c(a,
	b,d),q.lastPushedText&&q.textEmbedded&&q.chunks.push(Ca),q.status=1,ad(h,q),0===h.pendingTasks)break a}catch(r){q.status=4,h.forceClientRender=!0,h.errorDigest=Y(a,r);}finally{b.blockedBoundary=c,b.blockedSegment=f;}b=Tc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b);}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case $b:d=Wc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=tc(c,1,0);try{Z(a,b,d);}finally{b.treeContext=c;}}else Z(a,b,d);return;case cc:c=
	c.type;d=Yc(c,d);Zc(a,b,c,d,f);return;case Yb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=O;O=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=O;if(null===a)throw Error(k(403));d=a.parentValue;a.context._currentValue=d===hc?a.context._defaultValue:d;a=O=a.parent;b.context=a;return;case Zb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;case dc:f=c._init;c=f(c._payload);d=Yc(c,d);Zc(a,b,c,d,void 0);return}throw Error(k(130,
	null==c?c:typeof c,""));}}
	function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Tb:Zc(a,b,c.type,c.props,c.ref);return;case Ub:throw Error(k(257));case dc:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(ra(c)){bd(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=ic&&c[ic]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);bd(a,b,f);}return}a=Object.prototype.toString.call(c);throw Error(k(31,"[object Object]"===
	a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Da(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Da(b.blockedSegment.chunks,""+c,a.responseState,d.lastPushedText));}function bd(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=tc(e,d,f);try{$c(a,b,c[f]);}finally{b.treeContext=e;}}}
	function $c(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Gc(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Tc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;Q(e);}else throw b.blockedSegment.formatContext=
	d,b.legacyContext=f,b.context=e,Q(e),m;}}function cd(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;dd(this,b,a);}
	function ed(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.close())):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,a=void 0===c?Error(k(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return ed(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,d()));}
	function ad(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&ad(a,c);}else a.completedSegments.push(b);}
	function dd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(k(389));a.completedRootSegment=c;}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b());}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&ad(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(cd,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(ad(b,c),1===b.completedSegments.length&&
	b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a());}
	function Uc(a){if(2!==a.status){var b=O,c=Pc.current;Pc.current=Oc;var d=Nc;Nc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){Q(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(Ca),g.abortSet.delete(g),m.status=1,dd(h,g.blockedBoundary,m);}catch(G){if(Gc(),"object"===typeof G&&null!==G&&"function"===typeof G.then){var q=g.ping;G.then(q,q);}else {g.abortSet.delete(g);m.status=4;var r=g.blockedBoundary,
	v=G,A=Y(h,v);null===r?Vc(h,v):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,r.errorDigest=A,r.parentFlushed&&h.clientRenderedBoundaries.push(r)));h.allPendingTasks--;if(0===h.allPendingTasks){var F=h.onAllReady;F();}}}finally{}}}f.splice(0,e);null!==a.destination&&fd(a,a.destination);}catch(G){Y(a,G),Vc(a,G);}finally{Nc=d,Pc.current=c,c===Oc&&Q(b);}}}
	function gd(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;p(b,Va);p(b,a.placeholderPrefix);a=u(d.toString(16));p(b,a);return t(b,Wa);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)p(b,d[e]);f=hd(a,b,f);}for(;e<d.length-1;e++)p(b,d[e]);e<d.length&&(f=t(b,d[e]));return f;default:throw Error(k(390));}}
	function hd(a,b,c){var d=c.boundary;if(null===d)return gd(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)d=d.errorDigest,t(b,$a),p(b,bb),d&&(p(b,db),p(b,u(C(d))),p(b,cb)),t(b,eb),gd(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=w(f.boundaryPrefix+e.toString(16));d=d.id=f;fb(b,a.responseState,d);gd(a,b,c);}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,
	a.completedBoundaries.push(d),fb(b,a.responseState,d.id),gd(a,b,c);else {t(b,Xa);c=d.completedSegments;if(1!==c.length)throw Error(k(391));hd(a,b,c[0]);}return t(b,ab)}function id(a,b,c){Bb(b,a.responseState,c.formatContext,c.id);hd(a,b,c);return Cb(b,c.formatContext)}
	function jd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)kd(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;p(b,a.startInlineScript);a.sentCompleteBoundaryFunction?p(b,Jb):(a.sentCompleteBoundaryFunction=!0,p(b,Ib));if(null===d)throw Error(k(395));c=u(c.toString(16));p(b,d);p(b,Kb);p(b,a.segmentPrefix);p(b,c);return t(b,Lb)}
	function kd(a,b,c,d){if(2===d.status)return !0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(k(392));return id(a,b,d)}id(a,b,d);a=a.responseState;p(b,a.startInlineScript);a.sentCompleteSegmentFunction?p(b,Eb):(a.sentCompleteSegmentFunction=!0,p(b,Db));p(b,a.segmentPrefix);f=u(f.toString(16));p(b,f);p(b,Gb);p(b,a.placeholderPrefix);p(b,f);return t(b,Hb)}
	function fd(a,b){l=new Uint8Array(512);n=0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){hd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)p(b,d[c]);c<d.length&&t(b,d[c]);}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,q=g.errorDigest,r=g.errorMessage,v=g.errorComponentStack;p(d,h.startInlineScript);h.sentClientRenderFunction?p(d,Nb):(h.sentClientRenderFunction=!0,p(d,
	Mb));if(null===m)throw Error(k(395));p(d,m);p(d,Ob);if(q||r||v)p(d,Qb),p(d,u(Sb(q||"")));if(r||v)p(d,Qb),p(d,u(Sb(r||"")));v&&(p(d,Qb),p(d,u(Sb(v))));if(!t(d,Pb));}f.splice(0,e);var A=a.completedBoundaries;for(e=0;e<A.length;e++)if(!jd(a,b,A[e]));A.splice(0,e);ba(b);l=new Uint8Array(512);n=0;var F=a.partialBoundaries;for(e=0;e<F.length;e++){var G=F[e];a:{f=a;g=b;var ma=G.completedSegments;for(h=0;h<ma.length;h++)if(!kd(f,
	g,G,ma[h])){h++;ma.splice(0,h);var Fb=!1;break a}ma.splice(0,h);Fb=!0;}if(!Fb){a.destination=null;e++;F.splice(0,e);return}}F.splice(0,e);var na=a.completedBoundaries;for(e=0;e<na.length;e++)if(!jd(a,b,na[e]));na.splice(0,e);}finally{ba(b),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.close();}}
	function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return ed(c,a,b)});c.clear();null!==a.destination&&fd(a,a.destination);}catch(d){Y(a,d),Vc(a,d);}}
	reactDomServer_browser_production_min.renderToReadableStream=function(a,b){return new Promise(function(c,d){var f,e,g=new Promise(function(a,b){e=a;f=b;}),h=Rc(a,za(b?b.identifierPrefix:void 0,b?b.nonce:void 0,b?b.bootstrapScriptContent:void 0,b?b.bootstrapScripts:void 0,b?b.bootstrapModules:void 0),Aa(b?b.namespaceURI:void 0),b?b.progressiveChunkSize:void 0,b?b.onError:void 0,e,function(){var a=new ReadableStream({type:"bytes",pull:function(a){if(1===h.status)h.status=2,da(a,h.fatalError);else if(2!==h.status&&null===h.destination){h.destination=
	a;try{fd(h,a);}catch(A){Y(h,A),Vc(h,A);}}},cancel:function(){ld(h);}},{highWaterMark:0});a.allReady=g;c(a);},function(a){g.catch(function(){});d(a);},f);if(b&&b.signal){var m=b.signal,q=function(){ld(h,m.reason);m.removeEventListener("abort",q);};m.addEventListener("abort",q);}Uc(h);})};reactDomServer_browser_production_min.version="18.2.0";
	return reactDomServer_browser_production_min;
}

var reactDomServerLegacy_browser_development = {};

/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServerLegacy_browser_development;

function requireReactDomServerLegacy_browser_development () {
	if (hasRequiredReactDomServerLegacy_browser_development) return reactDomServerLegacy_browser_development;
	hasRequiredReactDomServerLegacy_browser_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = reactExports;

	var ReactVersion = '18.2.0';

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

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

	function scheduleWork(callback) {
	  callback();
	}
	function beginWriting(destination) {}
	function writeChunk(destination, chunk) {
	  writeChunkAndReturn(destination, chunk);
	}
	function writeChunkAndReturn(destination, chunk) {
	  return destination.push(chunk);
	}
	function completeWriting(destination) {}
	function close(destination) {
	  destination.push(null);
	}
	function stringToChunk(content) {
	  return content;
	}
	function stringToPrecomputedChunk(content) {
	  return content;
	}
	function closeWithError(destination, error) {
	  // $FlowFixMe: This is an Error object or the destination accepts other types.
	  destination.destroy(error);
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

	function checkAttributeStringCoercion(value, attributeName) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}
	function checkCSSPropertyStringCoercion(value, propName) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}
	function checkHtmlStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// A reserved attribute.
	// It is handled by React separately and shouldn't be written to the DOM.
	var RESERVED = 0; // A simple string attribute.
	// Attributes that aren't in the filter are presumed to have this type.

	var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	// "enumerated" attributes with "true" and "false" as possible values.
	// When true, it should be set to a "true" string.
	// When false, it should be set to a "false" string.

	var BOOLEANISH_STRING = 2; // A real boolean attribute.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.

	var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.
	// For any other value, should be present with that value.

	var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	// When falsy, it should be removed.

	var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	// When falsy, it should be removed.

	var POSITIVE_NUMERIC = 6;

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	/* eslint-enable max-len */

	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
	    return true;
	  }

	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
	    return false;
	  }

	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }

	  illegalAttributeNameCache[attributeName] = true;

	  {
	    error('Invalid attribute name: `%s`', attributeName);
	  }

	  return false;
	}
	function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
	  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
	    return false;
	  }

	  switch (typeof value) {
	    case 'function': // $FlowIssue symbol is perfectly valid here

	    case 'symbol':
	      // eslint-disable-line
	      return true;

	    case 'boolean':
	      {
	        if (isCustomComponentTag) {
	          return false;
	        }

	        if (propertyInfo !== null) {
	          return !propertyInfo.acceptsBooleans;
	        } else {
	          var prefix = name.toLowerCase().slice(0, 5);
	          return prefix !== 'data-' && prefix !== 'aria-';
	        }
	      }

	    default:
	      return false;
	  }
	}
	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
	  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	  this.attributeName = attributeName;
	  this.attributeNamespace = attributeNamespace;
	  this.mustUseProperty = mustUseProperty;
	  this.propertyName = name;
	  this.type = type;
	  this.sanitizeURL = sanitizeURL;
	  this.removeEmptyString = removeEmptyString;
	} // When adding attributes to this list, be sure to also add them to
	// the `possibleStandardNames` module to ensure casing and incorrect
	// name warnings.


	var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	// elements (not just inputs). Now that ReactDOMInput assigns to the
	// defaultValue property -- do we need this?
	'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

	reservedProps.forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // A few React string attributes have a different name.
	// This is a mapping from React prop names to the attribute names.

	[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	  var name = _ref[0],
	      attributeName = _ref[1];
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" HTML attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).

	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" SVG attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).
	// Since these are SVG attributes, their attribute names are case-sensitive.

	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML boolean attributes.

	['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	// on the client side because the browsers are inconsistent. Instead we call focus().
	'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	'itemScope'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are the few React props that we set as DOM properties
	// rather than attributes. These are all booleans.

	['checked', // Note: `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`. We have special logic for handling this.
	'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that are "overloaded booleans": they behave like
	// booleans, but can also accept a string value.

	['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be positive numbers.

	['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be numbers.

	['rowSpan', 'start'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	});
	var CAMELIZE = /[\-\:]([a-z])/g;

	var capitalize = function (token) {
	  return token[1].toUpperCase();
	}; // This is a list of all SVG attributes that need special casing, namespacing,
	// or boolean value assignment. Regular attributes that just accept strings
	// and have the same names are omitted, just like in the HTML attribute filter.
	// Some of these attributes can be hard to find. This list was created by
	// scraping the MDN documentation.


	['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xlink namespace.

	['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xml namespace.

	['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
	  false);
	}); // These attribute exists both in HTML and SVG.
	// The attribute name is case-sensitive in SVG so we can't just use
	// the React name like we do for attributes that exist only in HTML.

	['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These attributes accept URLs. These must not allow javascript: URLS.
	// These will also need to accept Trusted Types object in the future.

	var xlinkHref = 'xlinkHref';
	properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
	false);
	['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  true, // sanitizeURL
	  true);
	});

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  aspectRatio: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridArea: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */

	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */


	var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.

	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	var hasReadOnlyValue = {
	  button: true,
	  checkbox: true,
	  image: true,
	  hidden: true,
	  radio: true,
	  reset: true,
	  submit: true
	};
	function checkControlledValueProps(tagName, props) {
	  {
	    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
	      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }

	    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
	      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }
	  }
	}

	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return typeof props.is === 'string';
	  }

	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this list too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;

	    default:
	      return true;
	  }
	}

	var ariaProperties = {
	  'aria-current': 0,
	  // state
	  'aria-description': 0,
	  'aria-details': 0,
	  'aria-disabled': 0,
	  // state
	  'aria-hidden': 0,
	  // state
	  'aria-invalid': 0,
	  // state
	  'aria-keyshortcuts': 0,
	  'aria-label': 0,
	  'aria-roledescription': 0,
	  // Widget Attributes
	  'aria-autocomplete': 0,
	  'aria-checked': 0,
	  'aria-expanded': 0,
	  'aria-haspopup': 0,
	  'aria-level': 0,
	  'aria-modal': 0,
	  'aria-multiline': 0,
	  'aria-multiselectable': 0,
	  'aria-orientation': 0,
	  'aria-placeholder': 0,
	  'aria-pressed': 0,
	  'aria-readonly': 0,
	  'aria-required': 0,
	  'aria-selected': 0,
	  'aria-sort': 0,
	  'aria-valuemax': 0,
	  'aria-valuemin': 0,
	  'aria-valuenow': 0,
	  'aria-valuetext': 0,
	  // Live Region Attributes
	  'aria-atomic': 0,
	  'aria-busy': 0,
	  'aria-live': 0,
	  'aria-relevant': 0,
	  // Drag-and-Drop Attributes
	  'aria-dropeffect': 0,
	  'aria-grabbed': 0,
	  // Relationship Attributes
	  'aria-activedescendant': 0,
	  'aria-colcount': 0,
	  'aria-colindex': 0,
	  'aria-colspan': 0,
	  'aria-controls': 0,
	  'aria-describedby': 0,
	  'aria-errormessage': 0,
	  'aria-flowto': 0,
	  'aria-labelledby': 0,
	  'aria-owns': 0,
	  'aria-posinset': 0,
	  'aria-rowcount': 0,
	  'aria-rowindex': 0,
	  'aria-rowspan': 0,
	  'aria-setsize': 0
	};

	var warnedProperties = {};
	var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	function validateProperty(tagName, name) {
	  {
	    if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
	      return true;
	    }

	    if (rARIACamel.test(name)) {
	      var ariaName = 'aria-' + name.slice(4).toLowerCase();
	      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (correctName == null) {
	        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

	        warnedProperties[name] = true;
	        return true;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== correctName) {
	        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }

	    if (rARIA.test(name)) {
	      var lowerCasedName = name.toLowerCase();
	      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (standardName == null) {
	        warnedProperties[name] = true;
	        return false;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== standardName) {
	        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }
	  }

	  return true;
	}

	function warnInvalidARIAProps(type, props) {
	  {
	    var invalidProps = [];

	    for (var key in props) {
	      var isValid = validateProperty(type, key);

	      if (!isValid) {
	        invalidProps.push(key);
	      }
	    }

	    var unknownPropString = invalidProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (invalidProps.length === 1) {
	      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
	    } else if (invalidProps.length > 1) {
	      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
	    }
	  }
	}

	function validateProperties(type, props) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnInvalidARIAProps(type, props);
	}

	var didWarnValueNull = false;
	function validateProperties$1(type, props) {
	  {
	    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	      return;
	    }

	    if (props != null && props.value === null && !didWarnValueNull) {
	      didWarnValueNull = true;

	      if (type === 'select' && props.multiple) {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
	      } else {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
	      }
	    }
	  }
	}

	// When adding attributes to the HTML or SVG allowed attribute list, be sure to
	// also add them to this module to ensure casing and incorrect name
	// warnings.
	var possibleStandardNames = {
	  // HTML
	  accept: 'accept',
	  acceptcharset: 'acceptCharset',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  alt: 'alt',
	  as: 'as',
	  async: 'async',
	  autocapitalize: 'autoCapitalize',
	  autocomplete: 'autoComplete',
	  autocorrect: 'autoCorrect',
	  autofocus: 'autoFocus',
	  autoplay: 'autoPlay',
	  autosave: 'autoSave',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  challenge: 'challenge',
	  charset: 'charSet',
	  checked: 'checked',
	  children: 'children',
	  cite: 'cite',
	  class: 'className',
	  classid: 'classID',
	  classname: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  controlslist: 'controlsList',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	  data: 'data',
	  datetime: 'dateTime',
	  default: 'default',
	  defaultchecked: 'defaultChecked',
	  defaultvalue: 'defaultValue',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  disablepictureinpicture: 'disablePictureInPicture',
	  disableremoteplayback: 'disableRemotePlayback',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  enterkeyhint: 'enterKeyHint',
	  for: 'htmlFor',
	  form: 'form',
	  formmethod: 'formMethod',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  htmlfor: 'htmlFor',
	  httpequiv: 'httpEquiv',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  imagesizes: 'imageSizes',
	  imagesrcset: 'imageSrcSet',
	  innerhtml: 'innerHTML',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  itemid: 'itemID',
	  itemprop: 'itemProp',
	  itemref: 'itemRef',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginwidth: 'marginWidth',
	  marginheight: 'marginHeight',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nomodule: 'noModule',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  playsinline: 'playsInline',
	  poster: 'poster',
	  preload: 'preload',
	  profile: 'profile',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  referrerpolicy: 'referrerPolicy',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',
	  // SVG
	  about: 'about',
	  accentheight: 'accentHeight',
	  'accent-height': 'accentHeight',
	  accumulate: 'accumulate',
	  additive: 'additive',
	  alignmentbaseline: 'alignmentBaseline',
	  'alignment-baseline': 'alignmentBaseline',
	  allowreorder: 'allowReorder',
	  alphabetic: 'alphabetic',
	  amplitude: 'amplitude',
	  arabicform: 'arabicForm',
	  'arabic-form': 'arabicForm',
	  ascent: 'ascent',
	  attributename: 'attributeName',
	  attributetype: 'attributeType',
	  autoreverse: 'autoReverse',
	  azimuth: 'azimuth',
	  basefrequency: 'baseFrequency',
	  baselineshift: 'baselineShift',
	  'baseline-shift': 'baselineShift',
	  baseprofile: 'baseProfile',
	  bbox: 'bbox',
	  begin: 'begin',
	  bias: 'bias',
	  by: 'by',
	  calcmode: 'calcMode',
	  capheight: 'capHeight',
	  'cap-height': 'capHeight',
	  clip: 'clip',
	  clippath: 'clipPath',
	  'clip-path': 'clipPath',
	  clippathunits: 'clipPathUnits',
	  cliprule: 'clipRule',
	  'clip-rule': 'clipRule',
	  color: 'color',
	  colorinterpolation: 'colorInterpolation',
	  'color-interpolation': 'colorInterpolation',
	  colorinterpolationfilters: 'colorInterpolationFilters',
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorprofile: 'colorProfile',
	  'color-profile': 'colorProfile',
	  colorrendering: 'colorRendering',
	  'color-rendering': 'colorRendering',
	  contentscripttype: 'contentScriptType',
	  contentstyletype: 'contentStyleType',
	  cursor: 'cursor',
	  cx: 'cx',
	  cy: 'cy',
	  d: 'd',
	  datatype: 'datatype',
	  decelerate: 'decelerate',
	  descent: 'descent',
	  diffuseconstant: 'diffuseConstant',
	  direction: 'direction',
	  display: 'display',
	  divisor: 'divisor',
	  dominantbaseline: 'dominantBaseline',
	  'dominant-baseline': 'dominantBaseline',
	  dur: 'dur',
	  dx: 'dx',
	  dy: 'dy',
	  edgemode: 'edgeMode',
	  elevation: 'elevation',
	  enablebackground: 'enableBackground',
	  'enable-background': 'enableBackground',
	  end: 'end',
	  exponent: 'exponent',
	  externalresourcesrequired: 'externalResourcesRequired',
	  fill: 'fill',
	  fillopacity: 'fillOpacity',
	  'fill-opacity': 'fillOpacity',
	  fillrule: 'fillRule',
	  'fill-rule': 'fillRule',
	  filter: 'filter',
	  filterres: 'filterRes',
	  filterunits: 'filterUnits',
	  floodopacity: 'floodOpacity',
	  'flood-opacity': 'floodOpacity',
	  floodcolor: 'floodColor',
	  'flood-color': 'floodColor',
	  focusable: 'focusable',
	  fontfamily: 'fontFamily',
	  'font-family': 'fontFamily',
	  fontsize: 'fontSize',
	  'font-size': 'fontSize',
	  fontsizeadjust: 'fontSizeAdjust',
	  'font-size-adjust': 'fontSizeAdjust',
	  fontstretch: 'fontStretch',
	  'font-stretch': 'fontStretch',
	  fontstyle: 'fontStyle',
	  'font-style': 'fontStyle',
	  fontvariant: 'fontVariant',
	  'font-variant': 'fontVariant',
	  fontweight: 'fontWeight',
	  'font-weight': 'fontWeight',
	  format: 'format',
	  from: 'from',
	  fx: 'fx',
	  fy: 'fy',
	  g1: 'g1',
	  g2: 'g2',
	  glyphname: 'glyphName',
	  'glyph-name': 'glyphName',
	  glyphorientationhorizontal: 'glyphOrientationHorizontal',
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphorientationvertical: 'glyphOrientationVertical',
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphref: 'glyphRef',
	  gradienttransform: 'gradientTransform',
	  gradientunits: 'gradientUnits',
	  hanging: 'hanging',
	  horizadvx: 'horizAdvX',
	  'horiz-adv-x': 'horizAdvX',
	  horizoriginx: 'horizOriginX',
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 'ideographic',
	  imagerendering: 'imageRendering',
	  'image-rendering': 'imageRendering',
	  in2: 'in2',
	  in: 'in',
	  inlist: 'inlist',
	  intercept: 'intercept',
	  k1: 'k1',
	  k2: 'k2',
	  k3: 'k3',
	  k4: 'k4',
	  k: 'k',
	  kernelmatrix: 'kernelMatrix',
	  kernelunitlength: 'kernelUnitLength',
	  kerning: 'kerning',
	  keypoints: 'keyPoints',
	  keysplines: 'keySplines',
	  keytimes: 'keyTimes',
	  lengthadjust: 'lengthAdjust',
	  letterspacing: 'letterSpacing',
	  'letter-spacing': 'letterSpacing',
	  lightingcolor: 'lightingColor',
	  'lighting-color': 'lightingColor',
	  limitingconeangle: 'limitingConeAngle',
	  local: 'local',
	  markerend: 'markerEnd',
	  'marker-end': 'markerEnd',
	  markerheight: 'markerHeight',
	  markermid: 'markerMid',
	  'marker-mid': 'markerMid',
	  markerstart: 'markerStart',
	  'marker-start': 'markerStart',
	  markerunits: 'markerUnits',
	  markerwidth: 'markerWidth',
	  mask: 'mask',
	  maskcontentunits: 'maskContentUnits',
	  maskunits: 'maskUnits',
	  mathematical: 'mathematical',
	  mode: 'mode',
	  numoctaves: 'numOctaves',
	  offset: 'offset',
	  opacity: 'opacity',
	  operator: 'operator',
	  order: 'order',
	  orient: 'orient',
	  orientation: 'orientation',
	  origin: 'origin',
	  overflow: 'overflow',
	  overlineposition: 'overlinePosition',
	  'overline-position': 'overlinePosition',
	  overlinethickness: 'overlineThickness',
	  'overline-thickness': 'overlineThickness',
	  paintorder: 'paintOrder',
	  'paint-order': 'paintOrder',
	  panose1: 'panose1',
	  'panose-1': 'panose1',
	  pathlength: 'pathLength',
	  patterncontentunits: 'patternContentUnits',
	  patterntransform: 'patternTransform',
	  patternunits: 'patternUnits',
	  pointerevents: 'pointerEvents',
	  'pointer-events': 'pointerEvents',
	  points: 'points',
	  pointsatx: 'pointsAtX',
	  pointsaty: 'pointsAtY',
	  pointsatz: 'pointsAtZ',
	  prefix: 'prefix',
	  preservealpha: 'preserveAlpha',
	  preserveaspectratio: 'preserveAspectRatio',
	  primitiveunits: 'primitiveUnits',
	  property: 'property',
	  r: 'r',
	  radius: 'radius',
	  refx: 'refX',
	  refy: 'refY',
	  renderingintent: 'renderingIntent',
	  'rendering-intent': 'renderingIntent',
	  repeatcount: 'repeatCount',
	  repeatdur: 'repeatDur',
	  requiredextensions: 'requiredExtensions',
	  requiredfeatures: 'requiredFeatures',
	  resource: 'resource',
	  restart: 'restart',
	  result: 'result',
	  results: 'results',
	  rotate: 'rotate',
	  rx: 'rx',
	  ry: 'ry',
	  scale: 'scale',
	  security: 'security',
	  seed: 'seed',
	  shaperendering: 'shapeRendering',
	  'shape-rendering': 'shapeRendering',
	  slope: 'slope',
	  spacing: 'spacing',
	  specularconstant: 'specularConstant',
	  specularexponent: 'specularExponent',
	  speed: 'speed',
	  spreadmethod: 'spreadMethod',
	  startoffset: 'startOffset',
	  stddeviation: 'stdDeviation',
	  stemh: 'stemh',
	  stemv: 'stemv',
	  stitchtiles: 'stitchTiles',
	  stopcolor: 'stopColor',
	  'stop-color': 'stopColor',
	  stopopacity: 'stopOpacity',
	  'stop-opacity': 'stopOpacity',
	  strikethroughposition: 'strikethroughPosition',
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughthickness: 'strikethroughThickness',
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 'string',
	  stroke: 'stroke',
	  strokedasharray: 'strokeDasharray',
	  'stroke-dasharray': 'strokeDasharray',
	  strokedashoffset: 'strokeDashoffset',
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokelinecap: 'strokeLinecap',
	  'stroke-linecap': 'strokeLinecap',
	  strokelinejoin: 'strokeLinejoin',
	  'stroke-linejoin': 'strokeLinejoin',
	  strokemiterlimit: 'strokeMiterlimit',
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokewidth: 'strokeWidth',
	  'stroke-width': 'strokeWidth',
	  strokeopacity: 'strokeOpacity',
	  'stroke-opacity': 'strokeOpacity',
	  suppresscontenteditablewarning: 'suppressContentEditableWarning',
	  suppresshydrationwarning: 'suppressHydrationWarning',
	  surfacescale: 'surfaceScale',
	  systemlanguage: 'systemLanguage',
	  tablevalues: 'tableValues',
	  targetx: 'targetX',
	  targety: 'targetY',
	  textanchor: 'textAnchor',
	  'text-anchor': 'textAnchor',
	  textdecoration: 'textDecoration',
	  'text-decoration': 'textDecoration',
	  textlength: 'textLength',
	  textrendering: 'textRendering',
	  'text-rendering': 'textRendering',
	  to: 'to',
	  transform: 'transform',
	  typeof: 'typeof',
	  u1: 'u1',
	  u2: 'u2',
	  underlineposition: 'underlinePosition',
	  'underline-position': 'underlinePosition',
	  underlinethickness: 'underlineThickness',
	  'underline-thickness': 'underlineThickness',
	  unicode: 'unicode',
	  unicodebidi: 'unicodeBidi',
	  'unicode-bidi': 'unicodeBidi',
	  unicoderange: 'unicodeRange',
	  'unicode-range': 'unicodeRange',
	  unitsperem: 'unitsPerEm',
	  'units-per-em': 'unitsPerEm',
	  unselectable: 'unselectable',
	  valphabetic: 'vAlphabetic',
	  'v-alphabetic': 'vAlphabetic',
	  values: 'values',
	  vectoreffect: 'vectorEffect',
	  'vector-effect': 'vectorEffect',
	  version: 'version',
	  vertadvy: 'vertAdvY',
	  'vert-adv-y': 'vertAdvY',
	  vertoriginx: 'vertOriginX',
	  'vert-origin-x': 'vertOriginX',
	  vertoriginy: 'vertOriginY',
	  'vert-origin-y': 'vertOriginY',
	  vhanging: 'vHanging',
	  'v-hanging': 'vHanging',
	  videographic: 'vIdeographic',
	  'v-ideographic': 'vIdeographic',
	  viewbox: 'viewBox',
	  viewtarget: 'viewTarget',
	  visibility: 'visibility',
	  vmathematical: 'vMathematical',
	  'v-mathematical': 'vMathematical',
	  vocab: 'vocab',
	  widths: 'widths',
	  wordspacing: 'wordSpacing',
	  'word-spacing': 'wordSpacing',
	  writingmode: 'writingMode',
	  'writing-mode': 'writingMode',
	  x1: 'x1',
	  x2: 'x2',
	  x: 'x',
	  xchannelselector: 'xChannelSelector',
	  xheight: 'xHeight',
	  'x-height': 'xHeight',
	  xlinkactuate: 'xlinkActuate',
	  'xlink:actuate': 'xlinkActuate',
	  xlinkarcrole: 'xlinkArcrole',
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkhref: 'xlinkHref',
	  'xlink:href': 'xlinkHref',
	  xlinkrole: 'xlinkRole',
	  'xlink:role': 'xlinkRole',
	  xlinkshow: 'xlinkShow',
	  'xlink:show': 'xlinkShow',
	  xlinktitle: 'xlinkTitle',
	  'xlink:title': 'xlinkTitle',
	  xlinktype: 'xlinkType',
	  'xlink:type': 'xlinkType',
	  xmlbase: 'xmlBase',
	  'xml:base': 'xmlBase',
	  xmllang: 'xmlLang',
	  'xml:lang': 'xmlLang',
	  xmlns: 'xmlns',
	  'xml:space': 'xmlSpace',
	  xmlnsxlink: 'xmlnsXlink',
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlspace: 'xmlSpace',
	  y1: 'y1',
	  y2: 'y2',
	  y: 'y',
	  ychannelselector: 'yChannelSelector',
	  z: 'z',
	  zoomandpan: 'zoomAndPan'
	};

	var validateProperty$1 = function () {};

	{
	  var warnedProperties$1 = {};
	  var EVENT_NAME_REGEX = /^on./;
	  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	  validateProperty$1 = function (tagName, name, value, eventRegistry) {
	    if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	      return true;
	    }

	    var lowerCasedName = name.toLowerCase();

	    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

	      warnedProperties$1[name] = true;
	      return true;
	    } // We can't rely on the event system being injected on the server.


	    if (eventRegistry != null) {
	      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
	          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

	      if (registrationNameDependencies.hasOwnProperty(name)) {
	        return true;
	      }

	      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

	      if (registrationName != null) {
	        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

	        warnedProperties$1[name] = true;
	        return true;
	      }

	      if (EVENT_NAME_REGEX.test(name)) {
	        error('Unknown event handler property `%s`. It will be ignored.', name);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (EVENT_NAME_REGEX.test(name)) {
	      // If no event plugins have been injected, we are in a server environment.
	      // So we can't tell if the event name is correct for sure, but we can filter
	      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	      if (INVALID_EVENT_NAME_REGEX.test(name)) {
	        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Let the ARIA attribute hook validate ARIA attributes


	    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	      return true;
	    }

	    if (lowerCasedName === 'innerhtml') {
	      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'aria') {
	      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    var propertyInfo = getPropertyInfo(name);
	    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

	    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	      var standardName = possibleStandardNames[lowerCasedName];

	      if (standardName !== name) {
	        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (!isReserved && name !== lowerCasedName) {
	      // Unknown attributes should have lowercase casing since that's how they
	      // will be cased anyway with server rendering.
	      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      if (value) {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
	      } else {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Now that we've validated casing, do not validate
	    // data types for reserved props


	    if (isReserved) {
	      return true;
	    } // Warn when a known attribute is a bad type


	    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      warnedProperties$1[name] = true;
	      return false;
	    } // Warn when passing the strings 'false' or 'true' into a boolean prop


	    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
	      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    return true;
	  };
	}

	var warnUnknownProperties = function (type, props, eventRegistry) {
	  {
	    var unknownProps = [];

	    for (var key in props) {
	      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

	      if (!isValid) {
	        unknownProps.push(key);
	      }
	    }

	    var unknownPropString = unknownProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (unknownProps.length === 1) {
	      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
	    } else if (unknownProps.length > 1) {
	      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
	    }
	  }
	};

	function validateProperties$2(type, props, eventRegistry) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnUnknownProperties(type, props, eventRegistry);
	}

	var warnValidStyle = function () {};

	{
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	  var msPattern = /^-ms-/;
	  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	  var warnedForInfinityValue = false;

	  var camelize = function (string) {
	    return string.replace(hyphenPattern, function (_, character) {
	      return character.toUpperCase();
	    });
	  };

	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
	    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	    // is converted to lowercase `ms`.
	    camelize(name.replace(msPattern, 'ms-')));
	  };

	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
	  };

	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;

	    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
	  };

	  var warnStyleValueIsNaN = function (name, value) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;

	    error('`NaN` is an invalid value for the `%s` css style property.', name);
	  };

	  var warnStyleValueIsInfinity = function (name, value) {
	    if (warnedForInfinityValue) {
	      return;
	    }

	    warnedForInfinityValue = true;

	    error('`Infinity` is an invalid value for the `%s` css style property.', name);
	  };

	  warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }

	    if (typeof value === 'number') {
	      if (isNaN(value)) {
	        warnStyleValueIsNaN(name, value);
	      } else if (!isFinite(value)) {
	        warnStyleValueIsInfinity(name, value);
	      }
	    }
	  };
	}

	var warnValidStyle$1 = warnValidStyle;

	// code copied and modified from escape-html
	var matchHtmlRegExp = /["'&<>]/;
	/**
	 * Escapes special characters and HTML entities in a given html string.
	 *
	 * @param  {string} string HTML string to escape for later insertion
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  {
	    checkHtmlStringCoercion(string);
	  }

	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        // "
	        escape = '&quot;';
	        break;

	      case 38:
	        // &
	        escape = '&amp;';
	        break;

	      case 39:
	        // '
	        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

	        break;

	      case 60:
	        // <
	        escape = '&lt;';
	        break;

	      case 62:
	        // >
	        escape = '&gt;';
	        break;

	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	} // end code copied and modified from escape-html

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */


	function escapeTextForBrowser(text) {
	  if (typeof text === 'boolean' || typeof text === 'number') {
	    // this shortcircuit helps perf for types that we know will never have
	    // special characters, especially given that this function is used often
	    // for numeric dom ids.
	    return '' + text;
	  }

	  return escapeHtml(text);
	}

	var uppercasePattern = /([A-Z])/g;
	var msPattern$1 = /^ms-/;
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 */

	function hyphenateStyleName(name) {
	  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
	}

	// and any newline or tab are filtered out as if they're not part of the URL.
	// https://url.spec.whatwg.org/#url-parsing
	// Tab or newline are defined as \r\n\t:
	// https://infra.spec.whatwg.org/#ascii-tab-or-newline
	// A C0 control is a code point in the range \u0000 NULL to \u001F
	// INFORMATION SEPARATOR ONE, inclusive:
	// https://infra.spec.whatwg.org/#c0-control-or-space

	/* eslint-disable max-len */

	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
	var didWarn = false;

	function sanitizeURL(url) {
	  {
	    if (!didWarn && isJavaScriptProtocol.test(url)) {
	      didWarn = true;

	      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	var startInlineScript = stringToPrecomputedChunk('<script>');
	var endInlineScript = stringToPrecomputedChunk('</script>');
	var startScriptSrc = stringToPrecomputedChunk('<script src="');
	var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
	var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
	/**
	 * This escaping function is designed to work with bootstrapScriptContent only.
	 * because we know we are escaping the entire script. We can avoid for instance
	 * escaping html comment string sequences that are valid javascript as well because
	 * if there are no sebsequent <script sequences the html parser will never enter
	 * script data double escaped state (see: https://www.w3.org/TR/html53/syntax.html#script-data-double-escaped-state)
	 *
	 * While untrusted script content should be made safe before using this api it will
	 * ensure that the script cannot be early terminated or never terminated state
	 */

	function escapeBootstrapScriptContent(scriptText) {
	  {
	    checkHtmlStringCoercion(scriptText);
	  }

	  return ('' + scriptText).replace(scriptRegex, scriptReplacer);
	}

	var scriptRegex = /(<\/|<)(s)(cript)/gi;

	var scriptReplacer = function (match, prefix, s, suffix) {
	  return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
	}; // Allows us to keep track of what we've already written so we can refer back to it.


	function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
	  var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
	  var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
	  var bootstrapChunks = [];

	  if (bootstrapScriptContent !== undefined) {
	    bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
	  }

	  if (bootstrapScripts !== undefined) {
	    for (var i = 0; i < bootstrapScripts.length; i++) {
	      bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
	    }
	  }

	  if (bootstrapModules !== undefined) {
	    for (var _i = 0; _i < bootstrapModules.length; _i++) {
	      bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
	    }
	  }

	  return {
	    bootstrapChunks: bootstrapChunks,
	    startInlineScript: inlineScriptWithNonce,
	    placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
	    segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
	    boundaryPrefix: idPrefix + 'B:',
	    idPrefix: idPrefix,
	    nextSuspenseID: 0,
	    sentCompleteSegmentFunction: false,
	    sentCompleteBoundaryFunction: false,
	    sentClientRenderFunction: false
	  };
	} // Constants for the insertion mode we're currently writing in. We don't encode all HTML5 insertion
	// modes. We only include the variants as they matter for the sake of our purposes.
	// We don't actually provide the namespace therefore we use constants instead of the string.

	var ROOT_HTML_MODE = 0; // Used for the root most element tag.

	var HTML_MODE = 1;
	var SVG_MODE = 2;
	var MATHML_MODE = 3;
	var HTML_TABLE_MODE = 4;
	var HTML_TABLE_BODY_MODE = 5;
	var HTML_TABLE_ROW_MODE = 6;
	var HTML_COLGROUP_MODE = 7; // We have a greater than HTML_TABLE_MODE check elsewhere. If you add more cases here, make sure it
	// still makes sense

	function createFormatContext(insertionMode, selectedValue) {
	  return {
	    insertionMode: insertionMode,
	    selectedValue: selectedValue
	  };
	}
	function getChildFormatContext(parentContext, type, props) {
	  switch (type) {
	    case 'select':
	      return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);

	    case 'svg':
	      return createFormatContext(SVG_MODE, null);

	    case 'math':
	      return createFormatContext(MATHML_MODE, null);

	    case 'foreignObject':
	      return createFormatContext(HTML_MODE, null);
	    // Table parents are special in that their children can only be created at all if they're
	    // wrapped in a table parent. So we need to encode that we're entering this mode.

	    case 'table':
	      return createFormatContext(HTML_TABLE_MODE, null);

	    case 'thead':
	    case 'tbody':
	    case 'tfoot':
	      return createFormatContext(HTML_TABLE_BODY_MODE, null);

	    case 'colgroup':
	      return createFormatContext(HTML_COLGROUP_MODE, null);

	    case 'tr':
	      return createFormatContext(HTML_TABLE_ROW_MODE, null);
	  }

	  if (parentContext.insertionMode >= HTML_TABLE_MODE) {
	    // Whatever tag this was, it wasn't a table parent or other special parent, so we must have
	    // entered plain HTML again.
	    return createFormatContext(HTML_MODE, null);
	  }

	  if (parentContext.insertionMode === ROOT_HTML_MODE) {
	    // We've emitted the root and is now in plain HTML mode.
	    return createFormatContext(HTML_MODE, null);
	  }

	  return parentContext;
	}
	var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
	function assignSuspenseBoundaryID(responseState) {
	  var generatedID = responseState.nextSuspenseID++;
	  return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
	}
	function makeId(responseState, treeId, localId) {
	  var idPrefix = responseState.idPrefix;
	  var id = ':' + idPrefix + 'R' + treeId; // Unless this is the first id at this level, append a number at the end
	  // that represents the position of this useId hook among all the useId
	  // hooks for this fiber.

	  if (localId > 0) {
	    id += 'H' + localId.toString(32);
	  }

	  return id + ':';
	}

	function encodeHTMLTextNode(text) {
	  return escapeTextForBrowser(text);
	}

	var textSeparator = stringToPrecomputedChunk('<!-- -->');
	function pushTextInstance(target, text, responseState, textEmbedded) {
	  if (text === '') {
	    // Empty text doesn't have a DOM node representation and the hydration is aware of this.
	    return textEmbedded;
	  }

	  if (textEmbedded) {
	    target.push(textSeparator);
	  }

	  target.push(stringToChunk(encodeHTMLTextNode(text)));
	  return true;
	} // Called when Fizz is done with a Segment. Currently the only purpose is to conditionally
	// emit a text separator when we don't know for sure it is safe to omit

	function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
	  if (lastPushedText && textEmbedded) {
	    target.push(textSeparator);
	  }
	}
	var styleNameCache = new Map();

	function processStyleName(styleName) {
	  var chunk = styleNameCache.get(styleName);

	  if (chunk !== undefined) {
	    return chunk;
	  }

	  var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
	  styleNameCache.set(styleName, result);
	  return result;
	}

	var styleAttributeStart = stringToPrecomputedChunk(' style="');
	var styleAssign = stringToPrecomputedChunk(':');
	var styleSeparator = stringToPrecomputedChunk(';');

	function pushStyle(target, responseState, style) {
	  if (typeof style !== 'object') {
	    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
	  }

	  var isFirst = true;

	  for (var styleName in style) {
	    if (!hasOwnProperty.call(style, styleName)) {
	      continue;
	    } // If you provide unsafe user data here they can inject arbitrary CSS
	    // which may be problematic (I couldn't repro this):
	    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	    // This is not an XSS hole but instead a potential CSS injection issue
	    // which has lead to a greater discussion about how we're going to
	    // trust URLs moving forward. See #2115901


	    var styleValue = style[styleName];

	    if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
	      // TODO: We used to set empty string as a style with an empty value. Does that ever make sense?
	      continue;
	    }

	    var nameChunk = void 0;
	    var valueChunk = void 0;
	    var isCustomProperty = styleName.indexOf('--') === 0;

	    if (isCustomProperty) {
	      nameChunk = stringToChunk(escapeTextForBrowser(styleName));

	      {
	        checkCSSPropertyStringCoercion(styleValue, styleName);
	      }

	      valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
	    } else {
	      {
	        warnValidStyle$1(styleName, styleValue);
	      }

	      nameChunk = processStyleName(styleName);

	      if (typeof styleValue === 'number') {
	        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
	          valueChunk = stringToChunk(styleValue + 'px'); // Presumes implicit 'px' suffix for unitless numbers
	        } else {
	          valueChunk = stringToChunk('' + styleValue);
	        }
	      } else {
	        {
	          checkCSSPropertyStringCoercion(styleValue, styleName);
	        }

	        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
	      }
	    }

	    if (isFirst) {
	      isFirst = false; // If it's first, we don't need any separators prefixed.

	      target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
	    } else {
	      target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
	    }
	  }

	  if (!isFirst) {
	    target.push(attributeEnd);
	  }
	}

	var attributeSeparator = stringToPrecomputedChunk(' ');
	var attributeAssign = stringToPrecomputedChunk('="');
	var attributeEnd = stringToPrecomputedChunk('"');
	var attributeEmptyString = stringToPrecomputedChunk('=""');

	function pushAttribute(target, responseState, name, value) {
	  switch (name) {
	    case 'style':
	      {
	        pushStyle(target, responseState, value);
	        return;
	      }

	    case 'defaultValue':
	    case 'defaultChecked': // These shouldn't be set as attributes on generic HTML elements.

	    case 'innerHTML': // Must use dangerouslySetInnerHTML instead.

	    case 'suppressContentEditableWarning':
	    case 'suppressHydrationWarning':
	      // Ignored. These are built-in to React on the client.
	      return;
	  }

	  if ( // shouldIgnoreAttribute
	  // We have already filtered out null/undefined and reserved words.
	  name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	    return;
	  }

	  var propertyInfo = getPropertyInfo(name);

	  if (propertyInfo !== null) {
	    // shouldRemoveAttribute
	    switch (typeof value) {
	      case 'function': // $FlowIssue symbol is perfectly valid here

	      case 'symbol':
	        // eslint-disable-line
	        return;

	      case 'boolean':
	        {
	          if (!propertyInfo.acceptsBooleans) {
	            return;
	          }
	        }
	    }

	    var attributeName = propertyInfo.attributeName;
	    var attributeNameChunk = stringToChunk(attributeName); // TODO: If it's known we can cache the chunk.

	    switch (propertyInfo.type) {
	      case BOOLEAN:
	        if (value) {
	          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
	        }

	        return;

	      case OVERLOADED_BOOLEAN:
	        if (value === true) {
	          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
	        } else if (value === false) ; else {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        return;

	      case NUMERIC:
	        if (!isNaN(value)) {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        break;

	      case POSITIVE_NUMERIC:
	        if (!isNaN(value) && value >= 1) {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        break;

	      default:
	        if (propertyInfo.sanitizeURL) {
	          {
	            checkAttributeStringCoercion(value, attributeName);
	          }

	          value = '' + value;
	          sanitizeURL(value);
	        }

	        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	    }
	  } else if (isAttributeNameSafe(name)) {
	    // shouldRemoveAttribute
	    switch (typeof value) {
	      case 'function': // $FlowIssue symbol is perfectly valid here

	      case 'symbol':
	        // eslint-disable-line
	        return;

	      case 'boolean':
	        {
	          var prefix = name.toLowerCase().slice(0, 5);

	          if (prefix !== 'data-' && prefix !== 'aria-') {
	            return;
	          }
	        }
	    }

	    target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	  }
	}

	var endOfStartTag = stringToPrecomputedChunk('>');
	var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');

	function pushInnerHTML(target, innerHTML, children) {
	  if (innerHTML != null) {
	    if (children != null) {
	      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
	    }

	    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
	      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
	    }

	    var html = innerHTML.__html;

	    if (html !== null && html !== undefined) {
	      {
	        checkHtmlStringCoercion(html);
	      }

	      target.push(stringToChunk('' + html));
	    }
	  }
	} // TODO: Move these to ResponseState so that we warn for every request.
	// It would help debugging in stateful servers (e.g. service worker).


	var didWarnDefaultInputValue = false;
	var didWarnDefaultChecked = false;
	var didWarnDefaultSelectValue = false;
	var didWarnDefaultTextareaValue = false;
	var didWarnInvalidOptionChildren = false;
	var didWarnInvalidOptionInnerHTML = false;
	var didWarnSelectedSetOnOption = false;

	function checkSelectProp(props, propName) {
	  {
	    var value = props[propName];

	    if (value != null) {
	      var array = isArray(value);

	      if (props.multiple && !array) {
	        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
	      } else if (!props.multiple && array) {
	        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
	      }
	    }
	  }
	}

	function pushStartSelect(target, props, responseState) {
	  {
	    checkControlledValueProps('select', props);
	    checkSelectProp(props, 'value');
	    checkSelectProp(props, 'defaultValue');

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
	      error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

	      didWarnDefaultSelectValue = true;
	    }
	  }

	  target.push(startChunkForTag('select'));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          // TODO: This doesn't really make sense for select since it can't use the controlled
	          // value in the innerHTML.
	          innerHTML = propValue;
	          break;

	        case 'defaultValue':
	        case 'value':
	          // These are set on the Context instead and applied to the nested options.
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	function flattenOptionChildren(children) {
	  var content = ''; // Flatten children and warn if they aren't strings or numbers;
	  // invalid types are ignored.

	  React.Children.forEach(children, function (child) {
	    if (child == null) {
	      return;
	    }

	    content += child;

	    {
	      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
	        didWarnInvalidOptionChildren = true;

	        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
	      }
	    }
	  });
	  return content;
	}

	var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');

	function pushStartOption(target, props, responseState, formatContext) {
	  var selectedValue = formatContext.selectedValue;
	  target.push(startChunkForTag('option'));
	  var children = null;
	  var value = null;
	  var selected = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'selected':
	          // ignore
	          selected = propValue;

	          {
	            // TODO: Remove support for `selected` in <option>.
	            if (!didWarnSelectedSetOnOption) {
	              error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

	              didWarnSelectedSetOnOption = true;
	            }
	          }

	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;
	        // eslint-disable-next-line-no-fallthrough

	        case 'value':
	          value = propValue;
	        // We intentionally fallthrough to also set the attribute on the node.
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (selectedValue != null) {
	    var stringValue;

	    if (value !== null) {
	      {
	        checkAttributeStringCoercion(value, 'value');
	      }

	      stringValue = '' + value;
	    } else {
	      {
	        if (innerHTML !== null) {
	          if (!didWarnInvalidOptionInnerHTML) {
	            didWarnInvalidOptionInnerHTML = true;

	            error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
	          }
	        }
	      }

	      stringValue = flattenOptionChildren(children);
	    }

	    if (isArray(selectedValue)) {
	      // multiple
	      for (var i = 0; i < selectedValue.length; i++) {
	        {
	          checkAttributeStringCoercion(selectedValue[i], 'value');
	        }

	        var v = '' + selectedValue[i];

	        if (v === stringValue) {
	          target.push(selectedMarkerAttribute);
	          break;
	        }
	      }
	    } else {
	      {
	        checkAttributeStringCoercion(selectedValue, 'select.value');
	      }

	      if ('' + selectedValue === stringValue) {
	        target.push(selectedMarkerAttribute);
	      }
	    }
	  } else if (selected) {
	    target.push(selectedMarkerAttribute);
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	function pushInput(target, props, responseState) {
	  {
	    checkControlledValueProps('input', props);

	    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
	      error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

	      didWarnDefaultChecked = true;
	    }

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
	      error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

	      didWarnDefaultInputValue = true;
	    }
	  }

	  target.push(startChunkForTag('input'));
	  var value = null;
	  var defaultValue = null;
	  var checked = null;
	  var defaultChecked = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        case 'defaultChecked':
	          defaultChecked = propValue;
	          break;

	        case 'defaultValue':
	          defaultValue = propValue;
	          break;

	        case 'checked':
	          checked = propValue;
	          break;

	        case 'value':
	          value = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (checked !== null) {
	    pushAttribute(target, responseState, 'checked', checked);
	  } else if (defaultChecked !== null) {
	    pushAttribute(target, responseState, 'checked', defaultChecked);
	  }

	  if (value !== null) {
	    pushAttribute(target, responseState, 'value', value);
	  } else if (defaultValue !== null) {
	    pushAttribute(target, responseState, 'value', defaultValue);
	  }

	  target.push(endOfStartTagSelfClosing);
	  return null;
	}

	function pushStartTextArea(target, props, responseState) {
	  {
	    checkControlledValueProps('textarea', props);

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
	      error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

	      didWarnDefaultTextareaValue = true;
	    }
	  }

	  target.push(startChunkForTag('textarea'));
	  var value = null;
	  var defaultValue = null;
	  var children = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'value':
	          value = propValue;
	          break;

	        case 'defaultValue':
	          defaultValue = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (value === null && defaultValue !== null) {
	    value = defaultValue;
	  }

	  target.push(endOfStartTag); // TODO (yungsters): Remove support for children content in <textarea>.

	  if (children != null) {
	    {
	      error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	    }

	    if (value != null) {
	      throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
	    }

	    if (isArray(children)) {
	      if (children.length > 1) {
	        throw new Error('<textarea> can only have at most one child.');
	      } // TODO: remove the coercion and the DEV check below because it will
	      // always be overwritten by the coercion several lines below it. #22309


	      {
	        checkHtmlStringCoercion(children[0]);
	      }

	      value = '' + children[0];
	    }

	    {
	      checkHtmlStringCoercion(children);
	    }

	    value = '' + children;
	  }

	  if (typeof value === 'string' && value[0] === '\n') {
	    // text/html ignores the first character in these tags if it's a newline
	    // Prefer to break application/xml over text/html (for now) by adding
	    // a newline specifically to get eaten by the parser. (Alternately for
	    // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	    // \r is normalized out by HTMLTextAreaElement#value.)
	    // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	    // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	    // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	    // See: Parsing of "textarea" "listing" and "pre" elements
	    //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	    target.push(leadingNewline);
	  } // ToString and push directly instead of recurse over children.
	  // We don't really support complex children in the value anyway.
	  // This also currently avoids a trailing comment node which breaks textarea.


	  if (value !== null) {
	    {
	      checkAttributeStringCoercion(value, 'value');
	    }

	    target.push(stringToChunk(encodeHTMLTextNode('' + value)));
	  }

	  return null;
	}

	function pushSelfClosing(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTagSelfClosing);
	  return null;
	}

	function pushStartMenuItem(target, props, responseState) {
	  target.push(startChunkForTag('menuitem'));

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  return null;
	}

	function pushStartTitle(target, props, responseState) {
	  target.push(startChunkForTag('title'));
	  var children = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);

	  {
	    var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;

	    if (Array.isArray(children) && children.length > 1) {
	      error('A title element received an array with more than 1 element as children. ' + 'In browsers title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    } else if (child != null && child.$$typeof != null) {
	      error('A title element received a React element for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    } else if (child != null && typeof child !== 'string' && typeof child !== 'number') {
	      error('A title element received a value that was not a string or number for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    }
	  }

	  return children;
	}

	function pushStartGenericElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);

	  if (typeof children === 'string') {
	    // Special case children as a string to avoid the unnecessary comment.
	    // TODO: Remove this special case after the general optimization is in place.
	    target.push(stringToChunk(encodeHTMLTextNode(children)));
	    return null;
	  }

	  return children;
	}

	function pushStartCustomElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        case 'style':
	          pushStyle(target, responseState, propValue);
	          break;

	        case 'suppressContentEditableWarning':
	        case 'suppressHydrationWarning':
	          // Ignored. These are built-in to React on the client.
	          break;

	        default:
	          if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
	            target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
	          }

	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	var leadingNewline = stringToPrecomputedChunk('\n');

	function pushStartPreformattedElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag); // text/html ignores the first character in these tags if it's a newline
	  // Prefer to break application/xml over text/html (for now) by adding
	  // a newline specifically to get eaten by the parser. (Alternately for
	  // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	  // \r is normalized out by HTMLTextAreaElement#value.)
	  // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	  // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	  // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	  // See: Parsing of "textarea" "listing" and "pre" elements
	  //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	  // TODO: This doesn't deal with the case where the child is an array
	  // or component that returns a string.

	  if (innerHTML != null) {
	    if (children != null) {
	      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
	    }

	    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
	      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
	    }

	    var html = innerHTML.__html;

	    if (html !== null && html !== undefined) {
	      if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
	        target.push(leadingNewline, stringToChunk(html));
	      } else {
	        {
	          checkHtmlStringCoercion(html);
	        }

	        target.push(stringToChunk('' + html));
	      }
	    }
	  }

	  if (typeof children === 'string' && children[0] === '\n') {
	    target.push(leadingNewline);
	  }

	  return children;
	} // We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name


	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

	var validatedTagCache = new Map();

	function startChunkForTag(tag) {
	  var tagStartChunk = validatedTagCache.get(tag);

	  if (tagStartChunk === undefined) {
	    if (!VALID_TAG_REGEX.test(tag)) {
	      throw new Error("Invalid tag: " + tag);
	    }

	    tagStartChunk = stringToPrecomputedChunk('<' + tag);
	    validatedTagCache.set(tag, tagStartChunk);
	  }

	  return tagStartChunk;
	}

	var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
	function pushStartInstance(target, type, props, responseState, formatContext) {
	  {
	    validateProperties(type, props);
	    validateProperties$1(type, props);
	    validateProperties$2(type, props, null);

	    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
	      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
	    }

	    if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
	      if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
	        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
	      }
	    }
	  }

	  switch (type) {
	    // Special tags
	    case 'select':
	      return pushStartSelect(target, props, responseState);

	    case 'option':
	      return pushStartOption(target, props, responseState, formatContext);

	    case 'textarea':
	      return pushStartTextArea(target, props, responseState);

	    case 'input':
	      return pushInput(target, props, responseState);

	    case 'menuitem':
	      return pushStartMenuItem(target, props, responseState);

	    case 'title':
	      return pushStartTitle(target, props, responseState);
	    // Newline eating tags

	    case 'listing':
	    case 'pre':
	      {
	        return pushStartPreformattedElement(target, props, type, responseState);
	      }
	    // Omitted close tags

	    case 'area':
	    case 'base':
	    case 'br':
	    case 'col':
	    case 'embed':
	    case 'hr':
	    case 'img':
	    case 'keygen':
	    case 'link':
	    case 'meta':
	    case 'param':
	    case 'source':
	    case 'track':
	    case 'wbr':
	      {
	        return pushSelfClosing(target, props, type, responseState);
	      }
	    // These are reserved SVG and MathML elements, that are never custom elements.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts

	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      {
	        return pushStartGenericElement(target, props, type, responseState);
	      }

	    case 'html':
	      {
	        if (formatContext.insertionMode === ROOT_HTML_MODE) {
	          // If we're rendering the html tag and we're at the root (i.e. not in foreignObject)
	          // then we also emit the DOCTYPE as part of the root content as a convenience for
	          // rendering the whole document.
	          target.push(DOCTYPE);
	        }

	        return pushStartGenericElement(target, props, type, responseState);
	      }

	    default:
	      {
	        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
	          // Generic element
	          return pushStartGenericElement(target, props, type, responseState);
	        } else {
	          // Custom element
	          return pushStartCustomElement(target, props, type, responseState);
	        }
	      }
	  }
	}
	var endTag1 = stringToPrecomputedChunk('</');
	var endTag2 = stringToPrecomputedChunk('>');
	function pushEndInstance(target, type, props) {
	  switch (type) {
	    // Omitted close tags
	    // TODO: Instead of repeating this switch we could try to pass a flag from above.
	    // That would require returning a tuple. Which might be ok if it gets inlined.
	    case 'area':
	    case 'base':
	    case 'br':
	    case 'col':
	    case 'embed':
	    case 'hr':
	    case 'img':
	    case 'input':
	    case 'keygen':
	    case 'link':
	    case 'meta':
	    case 'param':
	    case 'source':
	    case 'track':
	    case 'wbr':
	      {
	        // No close tag needed.
	        break;
	      }

	    default:
	      {
	        target.push(endTag1, stringToChunk(type), endTag2);
	      }
	  }
	}
	function writeCompletedRoot(destination, responseState) {
	  var bootstrapChunks = responseState.bootstrapChunks;
	  var i = 0;

	  for (; i < bootstrapChunks.length - 1; i++) {
	    writeChunk(destination, bootstrapChunks[i]);
	  }

	  if (i < bootstrapChunks.length) {
	    return writeChunkAndReturn(destination, bootstrapChunks[i]);
	  }

	  return true;
	} // Structural Nodes
	// A placeholder is a node inside a hidden partial tree that can be filled in later, but before
	// display. It's never visible to users. We use the template tag because it can be used in every
	// type of parent. <script> tags also work in every other tag except <colgroup>.

	var placeholder1 = stringToPrecomputedChunk('<template id="');
	var placeholder2 = stringToPrecomputedChunk('"></template>');
	function writePlaceholder(destination, responseState, id) {
	  writeChunk(destination, placeholder1);
	  writeChunk(destination, responseState.placeholderPrefix);
	  var formattedID = stringToChunk(id.toString(16));
	  writeChunk(destination, formattedID);
	  return writeChunkAndReturn(destination, placeholder2);
	} // Suspense boundaries are encoded as comments.

	var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
	var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
	var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
	var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
	var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
	var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
	var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
	var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
	var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
	var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
	var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
	function writeStartCompletedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
	}
	function writeStartPendingSuspenseBoundary(destination, responseState, id) {
	  writeChunk(destination, startPendingSuspenseBoundary1);

	  if (id === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  writeChunk(destination, id);
	  return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
	}
	function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
	  var result;
	  result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
	  writeChunk(destination, clientRenderedSuspenseBoundaryError1);

	  if (errorDigest) {
	    writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
	    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
	    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	  }

	  {
	    if (errorMesssage) {
	      writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
	      writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
	      writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	    }

	    if (errorComponentStack) {
	      writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
	      writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
	      writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	    }
	  }

	  result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
	  return result;
	}
	function writeEndCompletedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function writeEndPendingSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
	var startSegmentHTML2 = stringToPrecomputedChunk('">');
	var endSegmentHTML = stringToPrecomputedChunk('</div>');
	var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
	var startSegmentSVG2 = stringToPrecomputedChunk('">');
	var endSegmentSVG = stringToPrecomputedChunk('</svg>');
	var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
	var startSegmentMathML2 = stringToPrecomputedChunk('">');
	var endSegmentMathML = stringToPrecomputedChunk('</math>');
	var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
	var startSegmentTable2 = stringToPrecomputedChunk('">');
	var endSegmentTable = stringToPrecomputedChunk('</table>');
	var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
	var startSegmentTableBody2 = stringToPrecomputedChunk('">');
	var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
	var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
	var startSegmentTableRow2 = stringToPrecomputedChunk('">');
	var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
	var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
	var startSegmentColGroup2 = stringToPrecomputedChunk('">');
	var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
	function writeStartSegment(destination, responseState, formatContext, id) {
	  switch (formatContext.insertionMode) {
	    case ROOT_HTML_MODE:
	    case HTML_MODE:
	      {
	        writeChunk(destination, startSegmentHTML);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentHTML2);
	      }

	    case SVG_MODE:
	      {
	        writeChunk(destination, startSegmentSVG);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentSVG2);
	      }

	    case MATHML_MODE:
	      {
	        writeChunk(destination, startSegmentMathML);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentMathML2);
	      }

	    case HTML_TABLE_MODE:
	      {
	        writeChunk(destination, startSegmentTable);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTable2);
	      }
	    // TODO: For the rest of these, there will be extra wrapper nodes that never
	    // get deleted from the document. We need to delete the table too as part
	    // of the injected scripts. They are invisible though so it's not too terrible
	    // and it's kind of an edge case to suspend in a table. Totally supported though.

	    case HTML_TABLE_BODY_MODE:
	      {
	        writeChunk(destination, startSegmentTableBody);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTableBody2);
	      }

	    case HTML_TABLE_ROW_MODE:
	      {
	        writeChunk(destination, startSegmentTableRow);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTableRow2);
	      }

	    case HTML_COLGROUP_MODE:
	      {
	        writeChunk(destination, startSegmentColGroup);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentColGroup2);
	      }

	    default:
	      {
	        throw new Error('Unknown insertion mode. This is a bug in React.');
	      }
	  }
	}
	function writeEndSegment(destination, formatContext) {
	  switch (formatContext.insertionMode) {
	    case ROOT_HTML_MODE:
	    case HTML_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentHTML);
	      }

	    case SVG_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentSVG);
	      }

	    case MATHML_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentMathML);
	      }

	    case HTML_TABLE_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTable);
	      }

	    case HTML_TABLE_BODY_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTableBody);
	      }

	    case HTML_TABLE_ROW_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTableRow);
	      }

	    case HTML_COLGROUP_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentColGroup);
	      }

	    default:
	      {
	        throw new Error('Unknown insertion mode. This is a bug in React.');
	      }
	  }
	} // Instruction Set
	// The following code is the source scripts that we then minify and inline below,
	// with renamed function names that we hope don't collide:
	// const COMMENT_NODE = 8;
	// const SUSPENSE_START_DATA = '$';
	// const SUSPENSE_END_DATA = '/$';
	// const SUSPENSE_PENDING_START_DATA = '$?';
	// const SUSPENSE_FALLBACK_START_DATA = '$!';
	//
	// function clientRenderBoundary(suspenseBoundaryID, errorDigest, errorMsg, errorComponentStack) {
	//   // Find the fallback's first element.
	//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
	//   if (!suspenseIdNode) {
	//     // The user must have already navigated away from this tree.
	//     // E.g. because the parent was hydrated.
	//     return;
	//   }
	//   // Find the boundary around the fallback. This is always the previous node.
	//   const suspenseNode = suspenseIdNode.previousSibling;
	//   // Tag it to be client rendered.
	//   suspenseNode.data = SUSPENSE_FALLBACK_START_DATA;
	//   // assign error metadata to first sibling
	//   let dataset = suspenseIdNode.dataset;
	//   if (errorDigest) dataset.dgst = errorDigest;
	//   if (errorMsg) dataset.msg = errorMsg;
	//   if (errorComponentStack) dataset.stck = errorComponentStack;
	//   // Tell React to retry it if the parent already hydrated.
	//   if (suspenseNode._reactRetry) {
	//     suspenseNode._reactRetry();
	//   }
	// }
	//
	// function completeBoundary(suspenseBoundaryID, contentID) {
	//   // Find the fallback's first element.
	//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
	//   const contentNode = document.getElementById(contentID);
	//   // We'll detach the content node so that regardless of what happens next we don't leave in the tree.
	//   // This might also help by not causing recalcing each time we move a child from here to the target.
	//   contentNode.parentNode.removeChild(contentNode);
	//   if (!suspenseIdNode) {
	//     // The user must have already navigated away from this tree.
	//     // E.g. because the parent was hydrated. That's fine there's nothing to do
	//     // but we have to make sure that we already deleted the container node.
	//     return;
	//   }
	//   // Find the boundary around the fallback. This is always the previous node.
	//   const suspenseNode = suspenseIdNode.previousSibling;
	//
	//   // Clear all the existing children. This is complicated because
	//   // there can be embedded Suspense boundaries in the fallback.
	//   // This is similar to clearSuspenseBoundary in ReactDOMHostConfig.
	//   // TODO: We could avoid this if we never emitted suspense boundaries in fallback trees.
	//   // They never hydrate anyway. However, currently we support incrementally loading the fallback.
	//   const parentInstance = suspenseNode.parentNode;
	//   let node = suspenseNode.nextSibling;
	//   let depth = 0;
	//   do {
	//     if (node && node.nodeType === COMMENT_NODE) {
	//       const data = node.data;
	//       if (data === SUSPENSE_END_DATA) {
	//         if (depth === 0) {
	//           break;
	//         } else {
	//           depth--;
	//         }
	//       } else if (
	//         data === SUSPENSE_START_DATA ||
	//         data === SUSPENSE_PENDING_START_DATA ||
	//         data === SUSPENSE_FALLBACK_START_DATA
	//       ) {
	//         depth++;
	//       }
	//     }
	//
	//     const nextNode = node.nextSibling;
	//     parentInstance.removeChild(node);
	//     node = nextNode;
	//   } while (node);
	//
	//   const endOfBoundary = node;
	//
	//   // Insert all the children from the contentNode between the start and end of suspense boundary.
	//   while (contentNode.firstChild) {
	//     parentInstance.insertBefore(contentNode.firstChild, endOfBoundary);
	//   }
	//   suspenseNode.data = SUSPENSE_START_DATA;
	//   if (suspenseNode._reactRetry) {
	//     suspenseNode._reactRetry();
	//   }
	// }
	//
	// function completeSegment(containerID, placeholderID) {
	//   const segmentContainer = document.getElementById(containerID);
	//   const placeholderNode = document.getElementById(placeholderID);
	//   // We always expect both nodes to exist here because, while we might
	//   // have navigated away from the main tree, we still expect the detached
	//   // tree to exist.
	//   segmentContainer.parentNode.removeChild(segmentContainer);
	//   while (segmentContainer.firstChild) {
	//     placeholderNode.parentNode.insertBefore(
	//       segmentContainer.firstChild,
	//       placeholderNode,
	//     );
	//   }
	//   placeholderNode.parentNode.removeChild(placeholderNode);
	// }

	var completeSegmentFunction = 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
	var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
	var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
	var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
	var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
	var completeSegmentScript2 = stringToPrecomputedChunk('","');
	var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
	function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentCompleteSegmentFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentCompleteSegmentFunction = true;
	    writeChunk(destination, completeSegmentScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, completeSegmentScript1Partial);
	  }

	  writeChunk(destination, responseState.segmentPrefix);
	  var formattedID = stringToChunk(contentSegmentID.toString(16));
	  writeChunk(destination, formattedID);
	  writeChunk(destination, completeSegmentScript2);
	  writeChunk(destination, responseState.placeholderPrefix);
	  writeChunk(destination, formattedID);
	  return writeChunkAndReturn(destination, completeSegmentScript3);
	}
	var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
	var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
	var completeBoundaryScript2 = stringToPrecomputedChunk('","');
	var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
	function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentCompleteBoundaryFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentCompleteBoundaryFunction = true;
	    writeChunk(destination, completeBoundaryScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, completeBoundaryScript1Partial);
	  }

	  if (boundaryID === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  var formattedContentID = stringToChunk(contentSegmentID.toString(16));
	  writeChunk(destination, boundaryID);
	  writeChunk(destination, completeBoundaryScript2);
	  writeChunk(destination, responseState.segmentPrefix);
	  writeChunk(destination, formattedContentID);
	  return writeChunkAndReturn(destination, completeBoundaryScript3);
	}
	var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
	var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
	var clientRenderScript1A = stringToPrecomputedChunk('"');
	var clientRenderScript2 = stringToPrecomputedChunk(')</script>');
	var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
	function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentClientRenderFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentClientRenderFunction = true;
	    writeChunk(destination, clientRenderScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, clientRenderScript1Partial);
	  }

	  if (boundaryID === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  writeChunk(destination, boundaryID);
	  writeChunk(destination, clientRenderScript1A);

	  if (errorDigest || errorMessage || errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
	  }

	  if (errorMessage || errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || '')));
	  }

	  if (errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
	  }

	  return writeChunkAndReturn(destination, clientRenderScript2);
	}
	var regexForJSStringsInScripts = /[<\u2028\u2029]/g;

	function escapeJSStringsForInstructionScripts(input) {
	  var escaped = JSON.stringify(input);
	  return escaped.replace(regexForJSStringsInScripts, function (match) {
	    switch (match) {
	      // santizing breaking out of strings and script tags
	      case '<':
	        return "\\u003c";

	      case "\u2028":
	        return "\\u2028";

	      case "\u2029":
	        return "\\u2029";

	      default:
	        {
	          // eslint-disable-next-line react-internal/prod-error-codes
	          throw new Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
	        }
	    }
	  });
	}

	function createResponseState$1(generateStaticMarkup, identifierPrefix) {
	  var responseState = createResponseState(identifierPrefix, undefined);
	  return {
	    // Keep this in sync with ReactDOMServerFormatConfig
	    bootstrapChunks: responseState.bootstrapChunks,
	    startInlineScript: responseState.startInlineScript,
	    placeholderPrefix: responseState.placeholderPrefix,
	    segmentPrefix: responseState.segmentPrefix,
	    boundaryPrefix: responseState.boundaryPrefix,
	    idPrefix: responseState.idPrefix,
	    nextSuspenseID: responseState.nextSuspenseID,
	    sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
	    sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
	    sentClientRenderFunction: responseState.sentClientRenderFunction,
	    // This is an extra field for the legacy renderer
	    generateStaticMarkup: generateStaticMarkup
	  };
	}
	function createRootFormatContext() {
	  return {
	    insertionMode: HTML_MODE,
	    // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
	    selectedValue: null
	  };
	}
	function pushTextInstance$1(target, text, responseState, textEmbedded) {
	  if (responseState.generateStaticMarkup) {
	    target.push(stringToChunk(escapeTextForBrowser(text)));
	    return false;
	  } else {
	    return pushTextInstance(target, text, responseState, textEmbedded);
	  }
	}
	function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
	  if (responseState.generateStaticMarkup) {
	    return;
	  } else {
	    return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
	  }
	}
	function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
	  if (responseState.generateStaticMarkup) {
	    // A completed boundary is done and doesn't need a representation in the HTML
	    // if we're not going to be hydrating it.
	    return true;
	  }

	  return writeStartCompletedSuspenseBoundary(destination);
	}
	function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, // flushing these error arguments are not currently supported in this legacy streaming format.
	errorDigest, errorMessage, errorComponentStack) {
	  if (responseState.generateStaticMarkup) {
	    // A client rendered boundary is done and doesn't need a representation in the HTML
	    // since we'll never hydrate it. This is arguably an error in static generation.
	    return true;
	  }

	  return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
	}
	function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
	  if (responseState.generateStaticMarkup) {
	    return true;
	  }

	  return writeEndCompletedSuspenseBoundary(destination);
	}
	function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
	  if (responseState.generateStaticMarkup) {
	    return true;
	  }

	  return writeEndClientRenderedSuspenseBoundary(destination);
	}

	var assign = Object.assign;

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
	var REACT_SCOPE_TYPE = Symbol.for('react.scope');
	var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
	var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
	var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
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

	function describeClassComponentFrame(ctor, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(ctor, true);
	  }
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

	var warnedAboutMissingGetChildContext;

	{
	  warnedAboutMissingGetChildContext = {};
	}

	var emptyContextObject = {};

	{
	  Object.freeze(emptyContextObject);
	}

	function getMaskedContext(type, unmaskedContext) {
	  {
	    var contextTypes = type.contextTypes;

	    if (!contextTypes) {
	      return emptyContextObject;
	    }

	    var context = {};

	    for (var key in contextTypes) {
	      context[key] = unmaskedContext[key];
	    }

	    {
	      var name = getComponentNameFromType(type) || 'Unknown';
	      checkPropTypes(contextTypes, context, 'context', name);
	    }

	    return context;
	  }
	}
	function processChildContext(instance, type, parentContext, childContextTypes) {
	  {
	    // TODO (bvaughn) Replace this behavior with an invariant() in the future.
	    // It has only been added in Fiber to match the (unintentional) behavior in Stack.
	    if (typeof instance.getChildContext !== 'function') {
	      {
	        var componentName = getComponentNameFromType(type) || 'Unknown';

	        if (!warnedAboutMissingGetChildContext[componentName]) {
	          warnedAboutMissingGetChildContext[componentName] = true;

	          error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
	        }
	      }

	      return parentContext;
	    }

	    var childContext = instance.getChildContext();

	    for (var contextKey in childContext) {
	      if (!(contextKey in childContextTypes)) {
	        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
	      }
	    }

	    {
	      var name = getComponentNameFromType(type) || 'Unknown';
	      checkPropTypes(childContextTypes, childContext, 'child context', name);
	    }

	    return assign({}, parentContext, childContext);
	  }
	}

	var rendererSigil;

	{
	  // Use this to detect multiple renderers using the same context
	  rendererSigil = {};
	} // Used to store the parent path of all context overrides in a shared linked list.
	// Forming a reverse tree.


	var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
	// This global (actually thread local) state represents what state all those "current",
	// fields are currently in.

	var currentActiveSnapshot = null;

	function popNode(prev) {
	  {
	    prev.context._currentValue2 = prev.parentValue;
	  }
	}

	function pushNode(next) {
	  {
	    next.context._currentValue2 = next.value;
	  }
	}

	function popToNearestCommonAncestor(prev, next) {
	  if (prev === next) ; else {
	    popNode(prev);
	    var parentPrev = prev.parent;
	    var parentNext = next.parent;

	    if (parentPrev === null) {
	      if (parentNext !== null) {
	        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
	      }
	    } else {
	      if (parentNext === null) {
	        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
	      }

	      popToNearestCommonAncestor(parentPrev, parentNext);
	    } // On the way back, we push the new ones that weren't common.


	    pushNode(next);
	  }
	}

	function popAllPrevious(prev) {
	  popNode(prev);
	  var parentPrev = prev.parent;

	  if (parentPrev !== null) {
	    popAllPrevious(parentPrev);
	  }
	}

	function pushAllNext(next) {
	  var parentNext = next.parent;

	  if (parentNext !== null) {
	    pushAllNext(parentNext);
	  }

	  pushNode(next);
	}

	function popPreviousToCommonLevel(prev, next) {
	  popNode(prev);
	  var parentPrev = prev.parent;

	  if (parentPrev === null) {
	    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
	  }

	  if (parentPrev.depth === next.depth) {
	    // We found the same level. Now we just need to find a shared ancestor.
	    popToNearestCommonAncestor(parentPrev, next);
	  } else {
	    // We must still be deeper.
	    popPreviousToCommonLevel(parentPrev, next);
	  }
	}

	function popNextToCommonLevel(prev, next) {
	  var parentNext = next.parent;

	  if (parentNext === null) {
	    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
	  }

	  if (prev.depth === parentNext.depth) {
	    // We found the same level. Now we just need to find a shared ancestor.
	    popToNearestCommonAncestor(prev, parentNext);
	  } else {
	    // We must still be deeper.
	    popNextToCommonLevel(prev, parentNext);
	  }

	  pushNode(next);
	} // Perform context switching to the new snapshot.
	// To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
	// updating all the context's current values. That way reads, always just read the current value.
	// At the cost of updating contexts even if they're never read by this subtree.


	function switchContext(newSnapshot) {
	  // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
	  // We also need to update any new contexts that are now on the stack with the deepest value.
	  // The easiest way to update new contexts is to just reapply them in reverse order from the
	  // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
	  // for that. Therefore this algorithm is recursive.
	  // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
	  // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
	  // 3) Then we reapply new contexts on the way back up the stack.
	  var prev = currentActiveSnapshot;
	  var next = newSnapshot;

	  if (prev !== next) {
	    if (prev === null) {
	      // $FlowFixMe: This has to be non-null since it's not equal to prev.
	      pushAllNext(next);
	    } else if (next === null) {
	      popAllPrevious(prev);
	    } else if (prev.depth === next.depth) {
	      popToNearestCommonAncestor(prev, next);
	    } else if (prev.depth > next.depth) {
	      popPreviousToCommonLevel(prev, next);
	    } else {
	      popNextToCommonLevel(prev, next);
	    }

	    currentActiveSnapshot = next;
	  }
	}
	function pushProvider(context, nextValue) {
	  var prevValue;

	  {
	    prevValue = context._currentValue2;
	    context._currentValue2 = nextValue;

	    {
	      if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
	        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
	      }

	      context._currentRenderer2 = rendererSigil;
	    }
	  }

	  var prevNode = currentActiveSnapshot;
	  var newNode = {
	    parent: prevNode,
	    depth: prevNode === null ? 0 : prevNode.depth + 1,
	    context: context,
	    parentValue: prevValue,
	    value: nextValue
	  };
	  currentActiveSnapshot = newNode;
	  return newNode;
	}
	function popProvider(context) {
	  var prevSnapshot = currentActiveSnapshot;

	  if (prevSnapshot === null) {
	    throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
	  }

	  {
	    if (prevSnapshot.context !== context) {
	      error('The parent context is not the expected context. This is probably a bug in React.');
	    }
	  }

	  {
	    var _value = prevSnapshot.parentValue;

	    if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
	      prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
	    } else {
	      prevSnapshot.context._currentValue2 = _value;
	    }

	    {
	      if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
	        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
	      }

	      context._currentRenderer2 = rendererSigil;
	    }
	  }

	  return currentActiveSnapshot = prevSnapshot.parent;
	}
	function getActiveContext() {
	  return currentActiveSnapshot;
	}
	function readContext(context) {
	  var value =  context._currentValue2;
	  return value;
	}

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 *
	 * Note that this module is currently shared and assumed to be stateless.
	 * If this becomes an actual Map, that will break.
	 */
	function get(key) {
	  return key._reactInternals;
	}
	function set(key, value) {
	  key._reactInternals = value;
	}

	var didWarnAboutNoopUpdateForComponent = {};
	var didWarnAboutDeprecatedWillMount = {};
	var didWarnAboutUninitializedState;
	var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
	var didWarnAboutLegacyLifecyclesAndDerivedState;
	var didWarnAboutUndefinedDerivedState;
	var warnOnUndefinedDerivedState;
	var warnOnInvalidCallback;
	var didWarnAboutDirectlyAssigningPropsToState;
	var didWarnAboutContextTypeAndContextTypes;
	var didWarnAboutInvalidateContextType;

	{
	  didWarnAboutUninitializedState = new Set();
	  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
	  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
	  didWarnAboutDirectlyAssigningPropsToState = new Set();
	  didWarnAboutUndefinedDerivedState = new Set();
	  didWarnAboutContextTypeAndContextTypes = new Set();
	  didWarnAboutInvalidateContextType = new Set();
	  var didWarnOnInvalidCallback = new Set();

	  warnOnInvalidCallback = function (callback, callerName) {
	    if (callback === null || typeof callback === 'function') {
	      return;
	    }

	    var key = callerName + '_' + callback;

	    if (!didWarnOnInvalidCallback.has(key)) {
	      didWarnOnInvalidCallback.add(key);

	      error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
	    }
	  };

	  warnOnUndefinedDerivedState = function (type, partialState) {
	    if (partialState === undefined) {
	      var componentName = getComponentNameFromType(type) || 'Component';

	      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
	        didWarnAboutUndefinedDerivedState.add(componentName);

	        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
	      }
	    }
	  };
	}

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;

	    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
	      return;
	    }

	    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

	    didWarnAboutNoopUpdateForComponent[warningKey] = true;
	  }
	}

	var classComponentUpdater = {
	  isMounted: function (inst) {
	    return false;
	  },
	  enqueueSetState: function (inst, payload, callback) {
	    var internals = get(inst);

	    if (internals.queue === null) {
	      warnNoop(inst, 'setState');
	    } else {
	      internals.queue.push(payload);

	      {
	        if (callback !== undefined && callback !== null) {
	          warnOnInvalidCallback(callback, 'setState');
	        }
	      }
	    }
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    var internals = get(inst);
	    internals.replace = true;
	    internals.queue = [payload];

	    {
	      if (callback !== undefined && callback !== null) {
	        warnOnInvalidCallback(callback, 'setState');
	      }
	    }
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    var internals = get(inst);

	    if (internals.queue === null) {
	      warnNoop(inst, 'forceUpdate');
	    } else {
	      {
	        if (callback !== undefined && callback !== null) {
	          warnOnInvalidCallback(callback, 'setState');
	        }
	      }
	    }
	  }
	};

	function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
	  var partialState = getDerivedStateFromProps(nextProps, prevState);

	  {
	    warnOnUndefinedDerivedState(ctor, partialState);
	  } // Merge the partial state and the previous state.


	  var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
	  return newState;
	}

	function constructClassInstance(ctor, props, maskedLegacyContext) {
	  var context = emptyContextObject;
	  var contextType = ctor.contextType;

	  {
	    if ('contextType' in ctor) {
	      var isValid = // Allow null for conditional declaration
	      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

	      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
	        didWarnAboutInvalidateContextType.add(ctor);
	        var addendum = '';

	        if (contextType === undefined) {
	          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
	        } else if (typeof contextType !== 'object') {
	          addendum = ' However, it is set to a ' + typeof contextType + '.';
	        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
	          addendum = ' Did you accidentally pass the Context.Provider instead?';
	        } else if (contextType._context !== undefined) {
	          // <Context.Consumer>
	          addendum = ' Did you accidentally pass the Context.Consumer instead?';
	        } else {
	          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
	        }

	        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
	      }
	    }
	  }

	  if (typeof contextType === 'object' && contextType !== null) {
	    context = readContext(contextType);
	  } else {
	    context = maskedLegacyContext;
	  }

	  var instance = new ctor(props, context);

	  {
	    if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
	      var componentName = getComponentNameFromType(ctor) || 'Component';

	      if (!didWarnAboutUninitializedState.has(componentName)) {
	        didWarnAboutUninitializedState.add(componentName);

	        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
	      }
	    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
	    // Warn about these lifecycles if they are present.
	    // Don't warn about react-lifecycles-compat polyfilled methods though.


	    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
	      var foundWillMountName = null;
	      var foundWillReceivePropsName = null;
	      var foundWillUpdateName = null;

	      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
	        foundWillMountName = 'componentWillMount';
	      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
	        foundWillMountName = 'UNSAFE_componentWillMount';
	      }

	      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
	        foundWillReceivePropsName = 'componentWillReceiveProps';
	      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
	        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	      }

	      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
	        foundWillUpdateName = 'componentWillUpdate';
	      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
	        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	      }

	      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
	        var _componentName = getComponentNameFromType(ctor) || 'Component';

	        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

	        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
	          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

	          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
	        }
	      }
	    }
	  }

	  return instance;
	}

	function checkClassInstance(instance, ctor, newProps) {
	  {
	    var name = getComponentNameFromType(ctor) || 'Component';
	    var renderPresent = instance.render;

	    if (!renderPresent) {
	      if (ctor.prototype && typeof ctor.prototype.render === 'function') {
	        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
	      } else {
	        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
	      }
	    }

	    if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
	      error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
	    }

	    if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
	    }

	    if (instance.propTypes) {
	      error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
	    }

	    if (instance.contextType) {
	      error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
	    }

	    {
	      if (instance.contextTypes) {
	        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
	      }

	      if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
	        didWarnAboutContextTypeAndContextTypes.add(ctor);

	        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
	      }
	    }

	    if (typeof instance.componentShouldUpdate === 'function') {
	      error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
	    }

	    if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
	      error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
	    }

	    if (typeof instance.componentDidUnmount === 'function') {
	      error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
	    }

	    if (typeof instance.componentDidReceiveProps === 'function') {
	      error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
	    }

	    if (typeof instance.componentWillRecieveProps === 'function') {
	      error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
	    }

	    if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
	      error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
	    }

	    var hasMutatedProps = instance.props !== newProps;

	    if (instance.props !== undefined && hasMutatedProps) {
	      error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
	    }

	    if (instance.defaultProps) {
	      error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
	    }

	    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
	      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

	      error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
	    }

	    if (typeof instance.getDerivedStateFromProps === 'function') {
	      error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
	    }

	    if (typeof instance.getDerivedStateFromError === 'function') {
	      error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
	    }

	    if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
	      error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
	    }

	    var _state = instance.state;

	    if (_state && (typeof _state !== 'object' || isArray(_state))) {
	      error('%s.state: must be set to an object or null', name);
	    }

	    if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
	      error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
	    }
	  }
	}

	function callComponentWillMount(type, instance) {
	  var oldState = instance.state;

	  if (typeof instance.componentWillMount === 'function') {
	    {
	      if ( instance.componentWillMount.__suppressDeprecationWarning !== true) {
	        var componentName = getComponentNameFromType(type) || 'Unknown';

	        if (!didWarnAboutDeprecatedWillMount[componentName]) {
	          warn( // keep this warning in sync with ReactStrictModeWarning.js
	          'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);

	          didWarnAboutDeprecatedWillMount[componentName] = true;
	        }
	      }
	    }

	    instance.componentWillMount();
	  }

	  if (typeof instance.UNSAFE_componentWillMount === 'function') {
	    instance.UNSAFE_componentWillMount();
	  }

	  if (oldState !== instance.state) {
	    {
	      error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
	    }

	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	  }
	}

	function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
	  if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
	    var oldQueue = internalInstance.queue;
	    var oldReplace = internalInstance.replace;
	    internalInstance.queue = null;
	    internalInstance.replace = false;

	    if (oldReplace && oldQueue.length === 1) {
	      inst.state = oldQueue[0];
	    } else {
	      var nextState = oldReplace ? oldQueue[0] : inst.state;
	      var dontMutate = true;

	      for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
	        var partial = oldQueue[i];
	        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;

	        if (partialState != null) {
	          if (dontMutate) {
	            dontMutate = false;
	            nextState = assign({}, nextState, partialState);
	          } else {
	            assign(nextState, partialState);
	          }
	        }
	      }

	      inst.state = nextState;
	    }
	  } else {
	    internalInstance.queue = null;
	  }
	} // Invokes the mount life-cycles on a previously never rendered instance.


	function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
	  {
	    checkClassInstance(instance, ctor, newProps);
	  }

	  var initialState = instance.state !== undefined ? instance.state : null;
	  instance.updater = classComponentUpdater;
	  instance.props = newProps;
	  instance.state = initialState; // We don't bother initializing the refs object on the server, since we're not going to resolve them anyway.
	  // The internal instance will be used to manage updates that happen during this mount.

	  var internalInstance = {
	    queue: [],
	    replace: false
	  };
	  set(instance, internalInstance);
	  var contextType = ctor.contextType;

	  if (typeof contextType === 'object' && contextType !== null) {
	    instance.context = readContext(contextType);
	  } else {
	    instance.context = maskedLegacyContext;
	  }

	  {
	    if (instance.state === newProps) {
	      var componentName = getComponentNameFromType(ctor) || 'Component';

	      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
	        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

	        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
	      }
	    }
	  }

	  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

	  if (typeof getDerivedStateFromProps === 'function') {
	    instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
	  } // In order to support react-lifecycles-compat polyfilled components,
	  // Unsafe lifecycles should not be invoked for components using the new APIs.


	  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
	    callComponentWillMount(ctor, instance); // If we had additional state updates during this life-cycle, let's
	    // process them now.

	    processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
	  }
	}

	// Ids are base 32 strings whose binary representation corresponds to the
	// position of a node in a tree.
	// Every time the tree forks into multiple children, we add additional bits to
	// the left of the sequence that represent the position of the child within the
	// current level of children.
	//
	//      00101       00010001011010101
	//      ╰─┬─╯       ╰───────┬───────╯
	//   Fork 5 of 20       Parent id
	//
	// The leading 0s are important. In the above example, you only need 3 bits to
	// represent slot 5. However, you need 5 bits to represent all the forks at
	// the current level, so we must account for the empty bits at the end.
	//
	// For this same reason, slots are 1-indexed instead of 0-indexed. Otherwise,
	// the zeroth id at a level would be indistinguishable from its parent.
	//
	// If a node has only one child, and does not materialize an id (i.e. does not
	// contain a useId hook), then we don't need to allocate any space in the
	// sequence. It's treated as a transparent indirection. For example, these two
	// trees produce the same ids:
	//
	// <>                          <>
	//   <Indirection>               <A />
	//     <A />                     <B />
	//   </Indirection>            </>
	//   <B />
	// </>
	//
	// However, we cannot skip any node that materializes an id. Otherwise, a parent
	// id that does not fork would be indistinguishable from its child id. For
	// example, this tree does not fork, but the parent and child must have
	// different ids.
	//
	// <Parent>
	//   <Child />
	// </Parent>
	//
	// To handle this scenario, every time we materialize an id, we allocate a
	// new level with a single slot. You can think of this as a fork with only one
	// prong, or an array of children with length 1.
	//
	// It's possible for the size of the sequence to exceed 32 bits, the max
	// size for bitwise operations. When this happens, we make more room by
	// converting the right part of the id to a string and storing it in an overflow
	// variable. We use a base 32 string representation, because 32 is the largest
	// power of 2 that is supported by toString(). We want the base to be large so
	// that the resulting ids are compact, and we want the base to be a power of 2
	// because every log2(base) bits corresponds to a single character, i.e. every
	// log2(32) = 5 bits. That means we can lop bits off the end 5 at a time without
	// affecting the final result.
	var emptyTreeContext = {
	  id: 1,
	  overflow: ''
	};
	function getTreeId(context) {
	  var overflow = context.overflow;
	  var idWithLeadingBit = context.id;
	  var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
	  return id.toString(32) + overflow;
	}
	function pushTreeContext(baseContext, totalChildren, index) {
	  var baseIdWithLeadingBit = baseContext.id;
	  var baseOverflow = baseContext.overflow; // The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
	  // of the id; we use it to account for leading 0s.

	  var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
	  var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
	  var slot = index + 1;
	  var length = getBitLength(totalChildren) + baseLength; // 30 is the max length we can store without overflowing, taking into
	  // consideration the leading 1 we use to mark the end of the sequence.

	  if (length > 30) {
	    // We overflowed the bitwise-safe range. Fall back to slower algorithm.
	    // This branch assumes the length of the base id is greater than 5; it won't
	    // work for smaller ids, because you need 5 bits per character.
	    //
	    // We encode the id in multiple steps: first the base id, then the
	    // remaining digits.
	    //
	    // Each 5 bit sequence corresponds to a single base 32 character. So for
	    // example, if the current id is 23 bits long, we can convert 20 of those
	    // bits into a string of 4 characters, with 3 bits left over.
	    //
	    // First calculate how many bits in the base id represent a complete
	    // sequence of characters.
	    var numberOfOverflowBits = baseLength - baseLength % 5; // Then create a bitmask that selects only those bits.

	    var newOverflowBits = (1 << numberOfOverflowBits) - 1; // Select the bits, and convert them to a base 32 string.

	    var newOverflow = (baseId & newOverflowBits).toString(32); // Now we can remove those bits from the base id.

	    var restOfBaseId = baseId >> numberOfOverflowBits;
	    var restOfBaseLength = baseLength - numberOfOverflowBits; // Finally, encode the rest of the bits using the normal algorithm. Because
	    // we made more room, this time it won't overflow.

	    var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
	    var restOfNewBits = slot << restOfBaseLength;
	    var id = restOfNewBits | restOfBaseId;
	    var overflow = newOverflow + baseOverflow;
	    return {
	      id: 1 << restOfLength | id,
	      overflow: overflow
	    };
	  } else {
	    // Normal path
	    var newBits = slot << baseLength;

	    var _id = newBits | baseId;

	    var _overflow = baseOverflow;
	    return {
	      id: 1 << length | _id,
	      overflow: _overflow
	    };
	  }
	}

	function getBitLength(number) {
	  return 32 - clz32(number);
	}

	function getLeadingBit(id) {
	  return 1 << getBitLength(id) - 1;
	} // TODO: Math.clz32 is supported in Node 12+. Maybe we can drop the fallback.


	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros.
	// Based on:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

	var log = Math.log;
	var LN2 = Math.LN2;

	function clz32Fallback(x) {
	  var asUint = x >>> 0;

	  if (asUint === 0) {
	    return 32;
	  }

	  return 31 - (log(asUint) / LN2 | 0) | 0;
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var currentlyRenderingComponent = null;
	var currentlyRenderingTask = null;
	var firstWorkInProgressHook = null;
	var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

	var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

	var didScheduleRenderPhaseUpdate = false; // Counts the number of useId hooks in this component

	var localIdCounter = 0; // Lazily created map of render-phase updates

	var renderPhaseUpdates = null; // Counter to prevent infinite loops.

	var numberOfReRenders = 0;
	var RE_RENDER_LIMIT = 25;
	var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

	var currentHookNameInDev;

	function resolveCurrentlyRenderingComponent() {
	  if (currentlyRenderingComponent === null) {
	    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	  }

	  {
	    if (isInHookUserCodeInDev) {
	      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
	    }
	  }

	  return currentlyRenderingComponent;
	}

	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (prevDeps === null) {
	    {
	      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
	    }

	    return false;
	  }

	  {
	    // Don't bother comparing lengths in prod because these arrays should be
	    // passed inline.
	    if (nextDeps.length !== prevDeps.length) {
	      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
	    }
	  }

	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
	    if (objectIs(nextDeps[i], prevDeps[i])) {
	      continue;
	    }

	    return false;
	  }

	  return true;
	}

	function createHook() {
	  if (numberOfReRenders > 0) {
	    throw new Error('Rendered more hooks than during the previous render');
	  }

	  return {
	    memoizedState: null,
	    queue: null,
	    next: null
	  };
	}

	function createWorkInProgressHook() {
	  if (workInProgressHook === null) {
	    // This is the first hook in the list
	    if (firstWorkInProgressHook === null) {
	      isReRender = false;
	      firstWorkInProgressHook = workInProgressHook = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = firstWorkInProgressHook;
	    }
	  } else {
	    if (workInProgressHook.next === null) {
	      isReRender = false; // Append to the end of the list

	      workInProgressHook = workInProgressHook.next = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = workInProgressHook.next;
	    }
	  }

	  return workInProgressHook;
	}

	function prepareToUseHooks(task, componentIdentity) {
	  currentlyRenderingComponent = componentIdentity;
	  currentlyRenderingTask = task;

	  {
	    isInHookUserCodeInDev = false;
	  } // The following should have already been reset
	  // didScheduleRenderPhaseUpdate = false;
	  // localIdCounter = 0;
	  // firstWorkInProgressHook = null;
	  // numberOfReRenders = 0;
	  // renderPhaseUpdates = null;
	  // workInProgressHook = null;


	  localIdCounter = 0;
	}
	function finishHooks(Component, props, children, refOrContext) {
	  // This must be called after every function component to prevent hooks from
	  // being used in classes.
	  while (didScheduleRenderPhaseUpdate) {
	    // Updates were scheduled during the render phase. They are stored in
	    // the `renderPhaseUpdates` map. Call the component again, reusing the
	    // work-in-progress hooks and applying the additional updates on top. Keep
	    // restarting until no more updates are scheduled.
	    didScheduleRenderPhaseUpdate = false;
	    localIdCounter = 0;
	    numberOfReRenders += 1; // Start over from the beginning of the list

	    workInProgressHook = null;
	    children = Component(props, refOrContext);
	  }

	  resetHooksState();
	  return children;
	}
	function checkDidRenderIdHook() {
	  // This should be called immediately after every finishHooks call.
	  // Conceptually, it's part of the return value of finishHooks; it's only a
	  // separate function to avoid using an array tuple.
	  var didRenderIdHook = localIdCounter !== 0;
	  return didRenderIdHook;
	} // Reset the internal hooks state if an error occurs while rendering a component

	function resetHooksState() {
	  {
	    isInHookUserCodeInDev = false;
	  }

	  currentlyRenderingComponent = null;
	  currentlyRenderingTask = null;
	  didScheduleRenderPhaseUpdate = false;
	  firstWorkInProgressHook = null;
	  numberOfReRenders = 0;
	  renderPhaseUpdates = null;
	  workInProgressHook = null;
	}

	function readContext$1(context) {
	  {
	    if (isInHookUserCodeInDev) {
	      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
	    }
	  }

	  return readContext(context);
	}

	function useContext(context) {
	  {
	    currentHookNameInDev = 'useContext';
	  }

	  resolveCurrentlyRenderingComponent();
	  return readContext(context);
	}

	function basicStateReducer(state, action) {
	  // $FlowFixMe: Flow doesn't like mixed types
	  return typeof action === 'function' ? action(state) : action;
	}

	function useState(initialState) {
	  {
	    currentHookNameInDev = 'useState';
	  }

	  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
	  initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  {
	    if (reducer !== basicStateReducer) {
	      currentHookNameInDev = 'useReducer';
	    }
	  }

	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();

	  if (isReRender) {
	    // This is a re-render. Apply the new render phase updates to the previous
	    // current hook.
	    var queue = workInProgressHook.queue;
	    var dispatch = queue.dispatch;

	    if (renderPhaseUpdates !== null) {
	      // Render phase updates are stored in a map of queue -> linked list
	      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	      if (firstRenderPhaseUpdate !== undefined) {
	        renderPhaseUpdates.delete(queue);
	        var newState = workInProgressHook.memoizedState;
	        var update = firstRenderPhaseUpdate;

	        do {
	          // Process this render phase update. We don't have to check the
	          // priority because it will always be the same as the current
	          // render's.
	          var action = update.action;

	          {
	            isInHookUserCodeInDev = true;
	          }

	          newState = reducer(newState, action);

	          {
	            isInHookUserCodeInDev = false;
	          }

	          update = update.next;
	        } while (update !== null);

	        workInProgressHook.memoizedState = newState;
	        return [newState, dispatch];
	      }
	    }

	    return [workInProgressHook.memoizedState, dispatch];
	  } else {
	    {
	      isInHookUserCodeInDev = true;
	    }

	    var initialState;

	    if (reducer === basicStateReducer) {
	      // Special case for `useState`.
	      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
	    } else {
	      initialState = init !== undefined ? init(initialArg) : initialArg;
	    }

	    {
	      isInHookUserCodeInDev = false;
	    }

	    workInProgressHook.memoizedState = initialState;

	    var _queue = workInProgressHook.queue = {
	      last: null,
	      dispatch: null
	    };

	    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

	    return [workInProgressHook.memoizedState, _dispatch];
	  }
	}

	function useMemo(nextCreate, deps) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var nextDeps = deps === undefined ? null : deps;

	  if (workInProgressHook !== null) {
	    var prevState = workInProgressHook.memoizedState;

	    if (prevState !== null) {
	      if (nextDeps !== null) {
	        var prevDeps = prevState[1];

	        if (areHookInputsEqual(nextDeps, prevDeps)) {
	          return prevState[0];
	        }
	      }
	    }
	  }

	  {
	    isInHookUserCodeInDev = true;
	  }

	  var nextValue = nextCreate();

	  {
	    isInHookUserCodeInDev = false;
	  }

	  workInProgressHook.memoizedState = [nextValue, nextDeps];
	  return nextValue;
	}

	function useRef(initialValue) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var previousRef = workInProgressHook.memoizedState;

	  if (previousRef === null) {
	    var ref = {
	      current: initialValue
	    };

	    {
	      Object.seal(ref);
	    }

	    workInProgressHook.memoizedState = ref;
	    return ref;
	  } else {
	    return previousRef;
	  }
	}

	function useLayoutEffect(create, inputs) {
	  {
	    currentHookNameInDev = 'useLayoutEffect';

	    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
	  }
	}

	function dispatchAction(componentIdentity, queue, action) {
	  if (numberOfReRenders >= RE_RENDER_LIMIT) {
	    throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
	  }

	  if (componentIdentity === currentlyRenderingComponent) {
	    // This is a render phase update. Stash it in a lazily-created map of
	    // queue -> linked list of updates. After this render pass, we'll restart
	    // and apply the stashed updates on top of the work-in-progress hook.
	    didScheduleRenderPhaseUpdate = true;
	    var update = {
	      action: action,
	      next: null
	    };

	    if (renderPhaseUpdates === null) {
	      renderPhaseUpdates = new Map();
	    }

	    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	    if (firstRenderPhaseUpdate === undefined) {
	      renderPhaseUpdates.set(queue, update);
	    } else {
	      // Append the update to the end of the list.
	      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

	      while (lastRenderPhaseUpdate.next !== null) {
	        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
	      }

	      lastRenderPhaseUpdate.next = update;
	    }
	  }
	}

	function useCallback(callback, deps) {
	  return useMemo(function () {
	    return callback;
	  }, deps);
	} // TODO Decide on how to implement this hook for server rendering.
	// If a mutation occurs during render, consider triggering a Suspense boundary
	// and falling back to client rendering.

	function useMutableSource(source, getSnapshot, subscribe) {
	  resolveCurrentlyRenderingComponent();
	  return getSnapshot(source._source);
	}

	function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  if (getServerSnapshot === undefined) {
	    throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
	  }

	  return getServerSnapshot();
	}

	function useDeferredValue(value) {
	  resolveCurrentlyRenderingComponent();
	  return value;
	}

	function unsupportedStartTransition() {
	  throw new Error('startTransition cannot be called during server rendering.');
	}

	function useTransition() {
	  resolveCurrentlyRenderingComponent();
	  return [false, unsupportedStartTransition];
	}

	function useId() {
	  var task = currentlyRenderingTask;
	  var treeId = getTreeId(task.treeContext);
	  var responseState = currentResponseState;

	  if (responseState === null) {
	    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
	  }

	  var localId = localIdCounter++;
	  return makeId(responseState, treeId, localId);
	}

	function noop() {}

	var Dispatcher = {
	  readContext: readContext$1,
	  useContext: useContext,
	  useMemo: useMemo,
	  useReducer: useReducer,
	  useRef: useRef,
	  useState: useState,
	  useInsertionEffect: noop,
	  useLayoutEffect: useLayoutEffect,
	  useCallback: useCallback,
	  // useImperativeHandle is not run in the server environment
	  useImperativeHandle: noop,
	  // Effects are not run in the server environment.
	  useEffect: noop,
	  // Debugging effect
	  useDebugValue: noop,
	  useDeferredValue: useDeferredValue,
	  useTransition: useTransition,
	  useId: useId,
	  // Subscriptions are not setup in a server environment.
	  useMutableSource: useMutableSource,
	  useSyncExternalStore: useSyncExternalStore
	};

	var currentResponseState = null;
	function setCurrentResponseState(responseState) {
	  currentResponseState = responseState;
	}

	function getStackByComponentStackNode(componentStack) {
	  try {
	    var info = '';
	    var node = componentStack;

	    do {
	      switch (node.tag) {
	        case 0:
	          info += describeBuiltInComponentFrame(node.type, null, null);
	          break;

	        case 1:
	          info += describeFunctionComponentFrame(node.type, null, null);
	          break;

	        case 2:
	          info += describeClassComponentFrame(node.type, null, null);
	          break;
	      }

	      node = node.parent;
	    } while (node);

	    return info;
	  } catch (x) {
	    return '\nError generating stack: ' + x.message + '\n' + x.stack;
	  }
	}

	var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	var PENDING = 0;
	var COMPLETED = 1;
	var FLUSHED = 2;
	var ABORTED = 3;
	var ERRORED = 4;
	var OPEN = 0;
	var CLOSING = 1;
	var CLOSED = 2;
	// This is a default heuristic for how to split up the HTML content into progressive
	// loading. Our goal is to be able to display additional new content about every 500ms.
	// Faster than that is unnecessary and should be throttled on the client. It also
	// adds unnecessary overhead to do more splits. We don't know if it's a higher or lower
	// end device but higher end suffer less from the overhead than lower end does from
	// not getting small enough pieces. We error on the side of low end.
	// We base this on low end 3G speeds which is about 500kbits per second. We assume
	// that there can be a reasonable drop off from max bandwidth which leaves you with
	// as little as 80%. We can receive half of that each 500ms - at best. In practice,
	// a little bandwidth is lost to processing and contention - e.g. CSS and images that
	// are downloaded along with the main content. So we estimate about half of that to be
	// the lower end throughput. In other words, we expect that you can at least show
	// about 12.5kb of content per 500ms. Not counting starting latency for the first
	// paint.
	// 500 * 1024 / 8 * .8 * 0.5 / 2
	var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;

	function defaultErrorHandler(error) {
	  console['error'](error); // Don't transform to our wrapper

	  return null;
	}

	function noop$1() {}

	function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
	  var pingedTasks = [];
	  var abortSet = new Set();
	  var request = {
	    destination: null,
	    responseState: responseState,
	    progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
	    status: OPEN,
	    fatalError: null,
	    nextSegmentId: 0,
	    allPendingTasks: 0,
	    pendingRootTasks: 0,
	    completedRootSegment: null,
	    abortableTasks: abortSet,
	    pingedTasks: pingedTasks,
	    clientRenderedBoundaries: [],
	    completedBoundaries: [],
	    partialBoundaries: [],
	    onError: onError === undefined ? defaultErrorHandler : onError,
	    onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
	    onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
	    onShellError: onShellError === undefined ? noop$1 : onShellError,
	    onFatalError: onFatalError === undefined ? noop$1 : onFatalError
	  }; // This segment represents the root fallback.

	  var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, // Root segments are never embedded in Text on either edge
	  false, false); // There is no parent so conceptually, we're unblocked to flush this segment.

	  rootSegment.parentFlushed = true;
	  var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
	  pingedTasks.push(rootTask);
	  return request;
	}

	function pingTask(request, task) {
	  var pingedTasks = request.pingedTasks;
	  pingedTasks.push(task);

	  if (pingedTasks.length === 1) {
	    scheduleWork(function () {
	      return performWork(request);
	    });
	  }
	}

	function createSuspenseBoundary(request, fallbackAbortableTasks) {
	  return {
	    id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
	    rootSegmentID: -1,
	    parentFlushed: false,
	    pendingTasks: 0,
	    forceClientRender: false,
	    completedSegments: [],
	    byteSize: 0,
	    fallbackAbortableTasks: fallbackAbortableTasks,
	    errorDigest: null
	  };
	}

	function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
	  request.allPendingTasks++;

	  if (blockedBoundary === null) {
	    request.pendingRootTasks++;
	  } else {
	    blockedBoundary.pendingTasks++;
	  }

	  var task = {
	    node: node,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: blockedSegment,
	    abortSet: abortSet,
	    legacyContext: legacyContext,
	    context: context,
	    treeContext: treeContext
	  };

	  {
	    task.componentStack = null;
	  }

	  abortSet.add(task);
	  return task;
	}

	function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
	  return {
	    status: PENDING,
	    id: -1,
	    // lazily assigned later
	    index: index,
	    parentFlushed: false,
	    chunks: [],
	    children: [],
	    formatContext: formatContext,
	    boundary: boundary,
	    lastPushedText: lastPushedText,
	    textEmbedded: textEmbedded
	  };
	} // DEV-only global reference to the currently executing task


	var currentTaskInDEV = null;

	function getCurrentStackInDEV() {
	  {
	    if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
	      return '';
	    }

	    return getStackByComponentStackNode(currentTaskInDEV.componentStack);
	  }
	}

	function pushBuiltInComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 0,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function pushFunctionComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 1,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function pushClassComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 2,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function popComponentStackInDEV(task) {
	  {
	    if (task.componentStack === null) {
	      error('Unexpectedly popped too many stack frames. This is a bug in React.');
	    } else {
	      task.componentStack = task.componentStack.parent;
	    }
	  }
	} // stash the component stack of an unwinding error until it is processed


	var lastBoundaryErrorComponentStackDev = null;

	function captureBoundaryErrorDetailsDev(boundary, error) {
	  {
	    var errorMessage;

	    if (typeof error === 'string') {
	      errorMessage = error;
	    } else if (error && typeof error.message === 'string') {
	      errorMessage = error.message;
	    } else {
	      // eslint-disable-next-line react-internal/safe-string-coercion
	      errorMessage = String(error);
	    }

	    var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
	    lastBoundaryErrorComponentStackDev = null;
	    boundary.errorMessage = errorMessage;
	    boundary.errorComponentStack = errorComponentStack;
	  }
	}

	function logRecoverableError(request, error) {
	  // If this callback errors, we intentionally let that error bubble up to become a fatal error
	  // so that someone fixes the error reporting instead of hiding it.
	  var errorDigest = request.onError(error);

	  if (errorDigest != null && typeof errorDigest !== 'string') {
	    // eslint-disable-next-line react-internal/prod-error-codes
	    throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
	  }

	  return errorDigest;
	}

	function fatalError(request, error) {
	  // This is called outside error handling code such as if the root errors outside
	  // a suspense boundary or if the root suspense boundary's fallback errors.
	  // It's also called if React itself or its host configs errors.
	  var onShellError = request.onShellError;
	  onShellError(error);
	  var onFatalError = request.onFatalError;
	  onFatalError(error);

	  if (request.destination !== null) {
	    request.status = CLOSED;
	    closeWithError(request.destination, error);
	  } else {
	    request.status = CLOSING;
	    request.fatalError = error;
	  }
	}

	function renderSuspenseBoundary(request, task, props) {
	  pushBuiltInComponentStackInDEV(task, 'Suspense');
	  var parentBoundary = task.blockedBoundary;
	  var parentSegment = task.blockedSegment; // Each time we enter a suspense boundary, we split out into a new segment for
	  // the fallback so that we can later replace that segment with the content.
	  // This also lets us split out the main content even if it doesn't suspend,
	  // in case it ends up generating a large subtree of content.

	  var fallback = props.fallback;
	  var content = props.children;
	  var fallbackAbortSet = new Set();
	  var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
	  var insertionIndex = parentSegment.chunks.length; // The children of the boundary segment is actually the fallback.

	  var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext, // boundaries never require text embedding at their edges because comment nodes bound them
	  false, false);
	  parentSegment.children.push(boundarySegment); // The parentSegment has a child Segment at this index so we reset the lastPushedText marker on the parent

	  parentSegment.lastPushedText = false; // This segment is the actual child content. We can start rendering that immediately.

	  var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext, // boundaries never require text embedding at their edges because comment nodes bound them
	  false, false); // We mark the root segment as having its parent flushed. It's not really flushed but there is
	  // no parent segment so there's nothing to wait on.

	  contentRootSegment.parentFlushed = true; // Currently this is running synchronously. We could instead schedule this to pingedTasks.
	  // I suspect that there might be some efficiency benefits from not creating the suspended task
	  // and instead just using the stack if possible.
	  // TODO: Call this directly instead of messing with saving and restoring contexts.
	  // We can reuse the current context and task to render the content immediately without
	  // context switching. We just need to temporarily switch which boundary and which segment
	  // we're writing to. If something suspends, it'll spawn new suspended task with that context.

	  task.blockedBoundary = newBoundary;
	  task.blockedSegment = contentRootSegment;

	  try {
	    // We use the safe form because we don't handle suspending here. Only error handling.
	    renderNode(request, task, content);
	    pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
	    contentRootSegment.status = COMPLETED;
	    queueCompletedSegment(newBoundary, contentRootSegment);

	    if (newBoundary.pendingTasks === 0) {
	      // This must have been the last segment we were waiting on. This boundary is now complete.
	      // Therefore we won't need the fallback. We early return so that we don't have to create
	      // the fallback.
	      popComponentStackInDEV(task);
	      return;
	    }
	  } catch (error) {
	    contentRootSegment.status = ERRORED;
	    newBoundary.forceClientRender = true;
	    newBoundary.errorDigest = logRecoverableError(request, error);

	    {
	      captureBoundaryErrorDetailsDev(newBoundary, error);
	    } // We don't need to decrement any task numbers because we didn't spawn any new task.
	    // We don't need to schedule any task because we know the parent has written yet.
	    // We do need to fallthrough to create the fallback though.

	  } finally {
	    task.blockedBoundary = parentBoundary;
	    task.blockedSegment = parentSegment;
	  } // We create suspended task for the fallback because we don't want to actually work
	  // on it yet in case we finish the main content, so we queue for later.


	  var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);

	  {
	    suspendedFallbackTask.componentStack = task.componentStack;
	  } // TODO: This should be queued at a separate lower priority queue so that we only work
	  // on preparing fallbacks if we don't have any more main content to task on.


	  request.pingedTasks.push(suspendedFallbackTask);
	  popComponentStackInDEV(task);
	}

	function renderHostElement(request, task, type, props) {
	  pushBuiltInComponentStackInDEV(task, type);
	  var segment = task.blockedSegment;
	  var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
	  segment.lastPushedText = false;
	  var prevContext = segment.formatContext;
	  segment.formatContext = getChildFormatContext(prevContext, type, props); // We use the non-destructive form because if something suspends, we still
	  // need to pop back up and finish this subtree of HTML.

	  renderNode(request, task, children); // We expect that errors will fatal the whole task and that we don't need
	  // the correct context. Therefore this is not in a finally.

	  segment.formatContext = prevContext;
	  pushEndInstance(segment.chunks, type);
	  segment.lastPushedText = false;
	  popComponentStackInDEV(task);
	}

	function shouldConstruct$1(Component) {
	  return Component.prototype && Component.prototype.isReactComponent;
	}

	function renderWithHooks(request, task, Component, props, secondArg) {
	  var componentIdentity = {};
	  prepareToUseHooks(task, componentIdentity);
	  var result = Component(props, secondArg);
	  return finishHooks(Component, props, result, secondArg);
	}

	function finishClassComponent(request, task, instance, Component, props) {
	  var nextChildren = instance.render();

	  {
	    if (instance.props !== props) {
	      if (!didWarnAboutReassigningProps) {
	        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
	      }

	      didWarnAboutReassigningProps = true;
	    }
	  }

	  {
	    var childContextTypes = Component.childContextTypes;

	    if (childContextTypes !== null && childContextTypes !== undefined) {
	      var previousContext = task.legacyContext;
	      var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
	      task.legacyContext = mergedContext;
	      renderNodeDestructive(request, task, nextChildren);
	      task.legacyContext = previousContext;
	      return;
	    }
	  }

	  renderNodeDestructive(request, task, nextChildren);
	}

	function renderClassComponent(request, task, Component, props) {
	  pushClassComponentStackInDEV(task, Component);
	  var maskedContext =  getMaskedContext(Component, task.legacyContext) ;
	  var instance = constructClassInstance(Component, props, maskedContext);
	  mountClassInstance(instance, Component, props, maskedContext);
	  finishClassComponent(request, task, instance, Component, props);
	  popComponentStackInDEV(task);
	}

	var didWarnAboutBadClass = {};
	var didWarnAboutModulePatternComponent = {};
	var didWarnAboutContextTypeOnFunctionComponent = {};
	var didWarnAboutGetDerivedStateOnFunctionComponent = {};
	var didWarnAboutReassigningProps = false;
	var didWarnAboutGenerators = false;
	var didWarnAboutMaps = false;
	var hasWarnedAboutUsingContextAsConsumer = false; // This would typically be a function component but we still support module pattern
	// components for some reason.

	function renderIndeterminateComponent(request, task, Component, props) {
	  var legacyContext;

	  {
	    legacyContext = getMaskedContext(Component, task.legacyContext);
	  }

	  pushFunctionComponentStackInDEV(task, Component);

	  {
	    if (Component.prototype && typeof Component.prototype.render === 'function') {
	      var componentName = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutBadClass[componentName]) {
	        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

	        didWarnAboutBadClass[componentName] = true;
	      }
	    }
	  }

	  var value = renderWithHooks(request, task, Component, props, legacyContext);
	  var hasId = checkDidRenderIdHook();

	  {
	    // Support for module components is deprecated and is removed behind a flag.
	    // Whether or not it would crash later, we want to show a good message in DEV first.
	    if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
	      var _componentName = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutModulePatternComponent[_componentName]) {
	        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

	        didWarnAboutModulePatternComponent[_componentName] = true;
	      }
	    }
	  }

	  if ( // Run these checks in production only if the flag is off.
	  // Eventually we'll delete this branch altogether.
	   typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
	    {
	      var _componentName2 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutModulePatternComponent[_componentName2]) {
	        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

	        didWarnAboutModulePatternComponent[_componentName2] = true;
	      }
	    }

	    mountClassInstance(value, Component, props, legacyContext);
	    finishClassComponent(request, task, value, Component, props);
	  } else {

	    {
	      validateFunctionComponentInDev(Component);
	    } // We're now successfully past this task, and we don't have to pop back to
	    // the previous task every again, so we can use the destructive recursive form.


	    if (hasId) {
	      // This component materialized an id. We treat this as its own level, with
	      // a single "child" slot.
	      var prevTreeContext = task.treeContext;
	      var totalChildren = 1;
	      var index = 0;
	      task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

	      try {
	        renderNodeDestructive(request, task, value);
	      } finally {
	        task.treeContext = prevTreeContext;
	      }
	    } else {
	      renderNodeDestructive(request, task, value);
	    }
	  }

	  popComponentStackInDEV(task);
	}

	function validateFunctionComponentInDev(Component) {
	  {
	    if (Component) {
	      if (Component.childContextTypes) {
	        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
	      }
	    }

	    if (typeof Component.getDerivedStateFromProps === 'function') {
	      var _componentName3 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
	        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

	        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
	      }
	    }

	    if (typeof Component.contextType === 'object' && Component.contextType !== null) {
	      var _componentName4 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
	        error('%s: Function components do not support contextType.', _componentName4);

	        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
	      }
	    }
	  }
	}

	function resolveDefaultProps(Component, baseProps) {
	  if (Component && Component.defaultProps) {
	    // Resolve default props. Taken from ReactElement
	    var props = assign({}, baseProps);
	    var defaultProps = Component.defaultProps;

	    for (var propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }

	    return props;
	  }

	  return baseProps;
	}

	function renderForwardRef(request, task, type, props, ref) {
	  pushFunctionComponentStackInDEV(task, type.render);
	  var children = renderWithHooks(request, task, type.render, props, ref);
	  var hasId = checkDidRenderIdHook();

	  if (hasId) {
	    // This component materialized an id. We treat this as its own level, with
	    // a single "child" slot.
	    var prevTreeContext = task.treeContext;
	    var totalChildren = 1;
	    var index = 0;
	    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

	    try {
	      renderNodeDestructive(request, task, children);
	    } finally {
	      task.treeContext = prevTreeContext;
	    }
	  } else {
	    renderNodeDestructive(request, task, children);
	  }

	  popComponentStackInDEV(task);
	}

	function renderMemo(request, task, type, props, ref) {
	  var innerType = type.type;
	  var resolvedProps = resolveDefaultProps(innerType, props);
	  renderElement(request, task, innerType, resolvedProps, ref);
	}

	function renderContextConsumer(request, task, context, props) {
	  // The logic below for Context differs depending on PROD or DEV mode. In
	  // DEV mode, we create a separate object for Context.Consumer that acts
	  // like a proxy to Context. This proxy object adds unnecessary code in PROD
	  // so we use the old behaviour (Context.Consumer references Context) to
	  // reduce size and overhead. The separate object references context via
	  // a property called "_context", which also gives us the ability to check
	  // in DEV mode if this property exists or not and warn if it does not.
	  {
	    if (context._context === undefined) {
	      // This may be because it's a Context (rather than a Consumer).
	      // Or it may be because it's older React where they're the same thing.
	      // We only want to warn if we're sure it's a new React.
	      if (context !== context.Consumer) {
	        if (!hasWarnedAboutUsingContextAsConsumer) {
	          hasWarnedAboutUsingContextAsConsumer = true;

	          error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	        }
	      }
	    } else {
	      context = context._context;
	    }
	  }

	  var render = props.children;

	  {
	    if (typeof render !== 'function') {
	      error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
	    }
	  }

	  var newValue = readContext(context);
	  var newChildren = render(newValue);
	  renderNodeDestructive(request, task, newChildren);
	}

	function renderContextProvider(request, task, type, props) {
	  var context = type._context;
	  var value = props.value;
	  var children = props.children;
	  var prevSnapshot;

	  {
	    prevSnapshot = task.context;
	  }

	  task.context = pushProvider(context, value);
	  renderNodeDestructive(request, task, children);
	  task.context = popProvider(context);

	  {
	    if (prevSnapshot !== task.context) {
	      error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
	    }
	  }
	}

	function renderLazyComponent(request, task, lazyComponent, props, ref) {
	  pushBuiltInComponentStackInDEV(task, 'Lazy');
	  var payload = lazyComponent._payload;
	  var init = lazyComponent._init;
	  var Component = init(payload);
	  var resolvedProps = resolveDefaultProps(Component, props);
	  renderElement(request, task, Component, resolvedProps, ref);
	  popComponentStackInDEV(task);
	}

	function renderElement(request, task, type, props, ref) {
	  if (typeof type === 'function') {
	    if (shouldConstruct$1(type)) {
	      renderClassComponent(request, task, type, props);
	      return;
	    } else {
	      renderIndeterminateComponent(request, task, type, props);
	      return;
	    }
	  }

	  if (typeof type === 'string') {
	    renderHostElement(request, task, type, props);
	    return;
	  }

	  switch (type) {
	    // TODO: LegacyHidden acts the same as a fragment. This only works
	    // because we currently assume that every instance of LegacyHidden is
	    // accompanied by a host component wrapper. In the hidden mode, the host
	    // component is given a `hidden` attribute, which ensures that the
	    // initial HTML is not visible. To support the use of LegacyHidden as a
	    // true fragment, without an extra DOM node, we would have to hide the
	    // initial HTML in some other way.
	    // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
	    case REACT_LEGACY_HIDDEN_TYPE:
	    case REACT_DEBUG_TRACING_MODE_TYPE:
	    case REACT_STRICT_MODE_TYPE:
	    case REACT_PROFILER_TYPE:
	    case REACT_FRAGMENT_TYPE:
	      {
	        renderNodeDestructive(request, task, props.children);
	        return;
	      }

	    case REACT_SUSPENSE_LIST_TYPE:
	      {
	        pushBuiltInComponentStackInDEV(task, 'SuspenseList'); // TODO: SuspenseList should control the boundaries.

	        renderNodeDestructive(request, task, props.children);
	        popComponentStackInDEV(task);
	        return;
	      }

	    case REACT_SCOPE_TYPE:
	      {

	        throw new Error('ReactDOMServer does not yet support scope components.');
	      }
	    // eslint-disable-next-line-no-fallthrough

	    case REACT_SUSPENSE_TYPE:
	      {
	        {
	          renderSuspenseBoundary(request, task, props);
	        }

	        return;
	      }
	  }

	  if (typeof type === 'object' && type !== null) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        {
	          renderForwardRef(request, task, type, props, ref);
	          return;
	        }

	      case REACT_MEMO_TYPE:
	        {
	          renderMemo(request, task, type, props, ref);
	          return;
	        }

	      case REACT_PROVIDER_TYPE:
	        {
	          renderContextProvider(request, task, type, props);
	          return;
	        }

	      case REACT_CONTEXT_TYPE:
	        {
	          renderContextConsumer(request, task, type, props);
	          return;
	        }

	      case REACT_LAZY_TYPE:
	        {
	          renderLazyComponent(request, task, type, props);
	          return;
	        }
	    }
	  }

	  var info = '';

	  {
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
	    }
	  }

	  throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
	}

	function validateIterable(iterable, iteratorFn) {
	  {
	    // We don't support rendering Generators because it's a mutation.
	    // See https://github.com/facebook/react/issues/12995
	    if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
	    iterable[Symbol.toStringTag] === 'Generator') {
	      if (!didWarnAboutGenerators) {
	        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
	      }

	      didWarnAboutGenerators = true;
	    } // Warn about using Maps as children


	    if (iterable.entries === iteratorFn) {
	      if (!didWarnAboutMaps) {
	        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	      }

	      didWarnAboutMaps = true;
	    }
	  }
	}

	function renderNodeDestructive(request, task, node) {
	  {
	    // In Dev we wrap renderNodeDestructiveImpl in a try / catch so we can capture
	    // a component stack at the right place in the tree. We don't do this in renderNode
	    // becuase it is not called at every layer of the tree and we may lose frames
	    try {
	      return renderNodeDestructiveImpl(request, task, node);
	    } catch (x) {
	      if (typeof x === 'object' && x !== null && typeof x.then === 'function') ; else {
	        // This is an error, stash the component stack if it is null.
	        lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
	      } // rethrow so normal suspense logic can handle thrown value accordingly


	      throw x;
	    }
	  }
	} // This function by it self renders a node and consumes the task by mutating it
	// to update the current execution state.


	function renderNodeDestructiveImpl(request, task, node) {
	  // Stash the node we're working on. We'll pick up from this task in case
	  // something suspends.
	  task.node = node; // Handle object types

	  if (typeof node === 'object' && node !== null) {
	    switch (node.$$typeof) {
	      case REACT_ELEMENT_TYPE:
	        {
	          var element = node;
	          var type = element.type;
	          var props = element.props;
	          var ref = element.ref;
	          renderElement(request, task, type, props, ref);
	          return;
	        }

	      case REACT_PORTAL_TYPE:
	        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
	      // eslint-disable-next-line-no-fallthrough

	      case REACT_LAZY_TYPE:
	        {
	          var lazyNode = node;
	          var payload = lazyNode._payload;
	          var init = lazyNode._init;
	          var resolvedNode;

	          {
	            try {
	              resolvedNode = init(payload);
	            } catch (x) {
	              if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	                // this Lazy initializer is suspending. push a temporary frame onto the stack so it can be
	                // popped off in spawnNewSuspendedTask. This aligns stack behavior between Lazy in element position
	                // vs Component position. We do not want the frame for Errors so we exclusively do this in
	                // the wakeable branch
	                pushBuiltInComponentStackInDEV(task, 'Lazy');
	              }

	              throw x;
	            }
	          }

	          renderNodeDestructive(request, task, resolvedNode);
	          return;
	        }
	    }

	    if (isArray(node)) {
	      renderChildrenArray(request, task, node);
	      return;
	    }

	    var iteratorFn = getIteratorFn(node);

	    if (iteratorFn) {
	      {
	        validateIterable(node, iteratorFn);
	      }

	      var iterator = iteratorFn.call(node);

	      if (iterator) {
	        // We need to know how many total children are in this set, so that we
	        // can allocate enough id slots to acommodate them. So we must exhaust
	        // the iterator before we start recursively rendering the children.
	        // TODO: This is not great but I think it's inherent to the id
	        // generation algorithm.
	        var step = iterator.next(); // If there are not entries, we need to push an empty so we start by checking that.

	        if (!step.done) {
	          var children = [];

	          do {
	            children.push(step.value);
	            step = iterator.next();
	          } while (!step.done);

	          renderChildrenArray(request, task, children);
	          return;
	        }

	        return;
	      }
	    }

	    var childString = Object.prototype.toString.call(node);
	    throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	  }

	  if (typeof node === 'string') {
	    var segment = task.blockedSegment;
	    segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
	    return;
	  }

	  if (typeof node === 'number') {
	    var _segment = task.blockedSegment;
	    _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, '' + node, request.responseState, _segment.lastPushedText);
	    return;
	  }

	  {
	    if (typeof node === 'function') {
	      error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
	    }
	  }
	}

	function renderChildrenArray(request, task, children) {
	  var totalChildren = children.length;

	  for (var i = 0; i < totalChildren; i++) {
	    var prevTreeContext = task.treeContext;
	    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);

	    try {
	      // We need to use the non-destructive form so that we can safely pop back
	      // up and render the sibling if something suspends.
	      renderNode(request, task, children[i]);
	    } finally {
	      task.treeContext = prevTreeContext;
	    }
	  }
	}

	function spawnNewSuspendedTask(request, task, x) {
	  // Something suspended, we'll need to create a new segment and resolve it later.
	  var segment = task.blockedSegment;
	  var insertionIndex = segment.chunks.length;
	  var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext, // Adopt the parent segment's leading text embed
	  segment.lastPushedText, // Assume we are text embedded at the trailing edge
	  true);
	  segment.children.push(newSegment); // Reset lastPushedText for current Segment since the new Segment "consumed" it

	  segment.lastPushedText = false;
	  var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);

	  {
	    if (task.componentStack !== null) {
	      // We pop one task off the stack because the node that suspended will be tried again,
	      // which will add it back onto the stack.
	      newTask.componentStack = task.componentStack.parent;
	    }
	  }

	  var ping = newTask.ping;
	  x.then(ping, ping);
	} // This is a non-destructive form of rendering a node. If it suspends it spawns
	// a new task and restores the context of this task to what it was before.


	function renderNode(request, task, node) {
	  // TODO: Store segment.children.length here and reset it in case something
	  // suspended partially through writing something.
	  // Snapshot the current context in case something throws to interrupt the
	  // process.
	  var previousFormatContext = task.blockedSegment.formatContext;
	  var previousLegacyContext = task.legacyContext;
	  var previousContext = task.context;
	  var previousComponentStack = null;

	  {
	    previousComponentStack = task.componentStack;
	  }

	  try {
	    return renderNodeDestructive(request, task, node);
	  } catch (x) {
	    resetHooksState();

	    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	      spawnNewSuspendedTask(request, task, x); // Restore the context. We assume that this will be restored by the inner
	      // functions in case nothing throws so we don't use "finally" here.

	      task.blockedSegment.formatContext = previousFormatContext;
	      task.legacyContext = previousLegacyContext;
	      task.context = previousContext; // Restore all active ReactContexts to what they were before.

	      switchContext(previousContext);

	      {
	        task.componentStack = previousComponentStack;
	      }

	      return;
	    } else {
	      // Restore the context. We assume that this will be restored by the inner
	      // functions in case nothing throws so we don't use "finally" here.
	      task.blockedSegment.formatContext = previousFormatContext;
	      task.legacyContext = previousLegacyContext;
	      task.context = previousContext; // Restore all active ReactContexts to what they were before.

	      switchContext(previousContext);

	      {
	        task.componentStack = previousComponentStack;
	      } // We assume that we don't need the correct context.
	      // Let's terminate the rest of the tree and don't render any siblings.


	      throw x;
	    }
	  }
	}

	function erroredTask(request, boundary, segment, error) {
	  // Report the error to a global handler.
	  var errorDigest = logRecoverableError(request, error);

	  if (boundary === null) {
	    fatalError(request, error);
	  } else {
	    boundary.pendingTasks--;

	    if (!boundary.forceClientRender) {
	      boundary.forceClientRender = true;
	      boundary.errorDigest = errorDigest;

	      {
	        captureBoundaryErrorDetailsDev(boundary, error);
	      } // Regardless of what happens next, this boundary won't be displayed,
	      // so we can flush it, if the parent already flushed.


	      if (boundary.parentFlushed) {
	        // We don't have a preference where in the queue this goes since it's likely
	        // to error on the client anyway. However, intentionally client-rendered
	        // boundaries should be flushed earlier so that they can start on the client.
	        // We reuse the same queue for errors.
	        request.clientRenderedBoundaries.push(boundary);
	      }
	    }
	  }

	  request.allPendingTasks--;

	  if (request.allPendingTasks === 0) {
	    var onAllReady = request.onAllReady;
	    onAllReady();
	  }
	}

	function abortTaskSoft(task) {
	  // This aborts task without aborting the parent boundary that it blocks.
	  // It's used for when we didn't need this task to complete the tree.
	  // If task was needed, then it should use abortTask instead.
	  var request = this;
	  var boundary = task.blockedBoundary;
	  var segment = task.blockedSegment;
	  segment.status = ABORTED;
	  finishedTask(request, boundary, segment);
	}

	function abortTask(task, request, reason) {
	  // This aborts the task and aborts the parent that it blocks, putting it into
	  // client rendered mode.
	  var boundary = task.blockedBoundary;
	  var segment = task.blockedSegment;
	  segment.status = ABORTED;

	  if (boundary === null) {
	    request.allPendingTasks--; // We didn't complete the root so we have nothing to show. We can close
	    // the request;

	    if (request.status !== CLOSED) {
	      request.status = CLOSED;

	      if (request.destination !== null) {
	        close(request.destination);
	      }
	    }
	  } else {
	    boundary.pendingTasks--;

	    if (!boundary.forceClientRender) {
	      boundary.forceClientRender = true;

	      var _error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;

	      boundary.errorDigest = request.onError(_error);

	      {
	        var errorPrefix = 'The server did not finish this Suspense boundary: ';

	        if (_error && typeof _error.message === 'string') {
	          _error = errorPrefix + _error.message;
	        } else {
	          // eslint-disable-next-line react-internal/safe-string-coercion
	          _error = errorPrefix + String(_error);
	        }

	        var previousTaskInDev = currentTaskInDEV;
	        currentTaskInDEV = task;

	        try {
	          captureBoundaryErrorDetailsDev(boundary, _error);
	        } finally {
	          currentTaskInDEV = previousTaskInDev;
	        }
	      }

	      if (boundary.parentFlushed) {
	        request.clientRenderedBoundaries.push(boundary);
	      }
	    } // If this boundary was still pending then we haven't already cancelled its fallbacks.
	    // We'll need to abort the fallbacks, which will also error that parent boundary.


	    boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	      return abortTask(fallbackTask, request, reason);
	    });
	    boundary.fallbackAbortableTasks.clear();
	    request.allPendingTasks--;

	    if (request.allPendingTasks === 0) {
	      var onAllReady = request.onAllReady;
	      onAllReady();
	    }
	  }
	}

	function queueCompletedSegment(boundary, segment) {
	  if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
	    // This is an empty segment. There's nothing to write, so we can instead transfer the ID
	    // to the child. That way any existing references point to the child.
	    var childSegment = segment.children[0];
	    childSegment.id = segment.id;
	    childSegment.parentFlushed = true;

	    if (childSegment.status === COMPLETED) {
	      queueCompletedSegment(boundary, childSegment);
	    }
	  } else {
	    var completedSegments = boundary.completedSegments;
	    completedSegments.push(segment);
	  }
	}

	function finishedTask(request, boundary, segment) {
	  if (boundary === null) {
	    if (segment.parentFlushed) {
	      if (request.completedRootSegment !== null) {
	        throw new Error('There can only be one root segment. This is a bug in React.');
	      }

	      request.completedRootSegment = segment;
	    }

	    request.pendingRootTasks--;

	    if (request.pendingRootTasks === 0) {
	      // We have completed the shell so the shell can't error anymore.
	      request.onShellError = noop$1;
	      var onShellReady = request.onShellReady;
	      onShellReady();
	    }
	  } else {
	    boundary.pendingTasks--;

	    if (boundary.forceClientRender) ; else if (boundary.pendingTasks === 0) {
	      // This must have been the last segment we were waiting on. This boundary is now complete.
	      if (segment.parentFlushed) {
	        // Our parent segment already flushed, so we need to schedule this segment to be emitted.
	        // If it is a segment that was aborted, we'll write other content instead so we don't need
	        // to emit it.
	        if (segment.status === COMPLETED) {
	          queueCompletedSegment(boundary, segment);
	        }
	      }

	      if (boundary.parentFlushed) {
	        // The segment might be part of a segment that didn't flush yet, but if the boundary's
	        // parent flushed, we need to schedule the boundary to be emitted.
	        request.completedBoundaries.push(boundary);
	      } // We can now cancel any pending task on the fallback since we won't need to show it anymore.
	      // This needs to happen after we read the parentFlushed flags because aborting can finish
	      // work which can trigger user code, which can start flushing, which can change those flags.


	      boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
	      boundary.fallbackAbortableTasks.clear();
	    } else {
	      if (segment.parentFlushed) {
	        // Our parent already flushed, so we need to schedule this segment to be emitted.
	        // If it is a segment that was aborted, we'll write other content instead so we don't need
	        // to emit it.
	        if (segment.status === COMPLETED) {
	          queueCompletedSegment(boundary, segment);
	          var completedSegments = boundary.completedSegments;

	          if (completedSegments.length === 1) {
	            // This is the first time since we last flushed that we completed anything.
	            // We can schedule this boundary to emit its partially completed segments early
	            // in case the parent has already been flushed.
	            if (boundary.parentFlushed) {
	              request.partialBoundaries.push(boundary);
	            }
	          }
	        }
	      }
	    }
	  }

	  request.allPendingTasks--;

	  if (request.allPendingTasks === 0) {
	    // This needs to be called at the very end so that we can synchronously write the result
	    // in the callback if needed.
	    var onAllReady = request.onAllReady;
	    onAllReady();
	  }
	}

	function retryTask(request, task) {
	  var segment = task.blockedSegment;

	  if (segment.status !== PENDING) {
	    // We completed this by other means before we had a chance to retry it.
	    return;
	  } // We restore the context to what it was when we suspended.
	  // We don't restore it after we leave because it's likely that we'll end up
	  // needing a very similar context soon again.


	  switchContext(task.context);
	  var prevTaskInDEV = null;

	  {
	    prevTaskInDEV = currentTaskInDEV;
	    currentTaskInDEV = task;
	  }

	  try {
	    // We call the destructive form that mutates this task. That way if something
	    // suspends again, we can reuse the same task instead of spawning a new one.
	    renderNodeDestructive(request, task, task.node);
	    pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
	    task.abortSet.delete(task);
	    segment.status = COMPLETED;
	    finishedTask(request, task.blockedBoundary, segment);
	  } catch (x) {
	    resetHooksState();

	    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	      // Something suspended again, let's pick it back up later.
	      var ping = task.ping;
	      x.then(ping, ping);
	    } else {
	      task.abortSet.delete(task);
	      segment.status = ERRORED;
	      erroredTask(request, task.blockedBoundary, segment, x);
	    }
	  } finally {
	    {
	      currentTaskInDEV = prevTaskInDEV;
	    }
	  }
	}

	function performWork(request) {
	  if (request.status === CLOSED) {
	    return;
	  }

	  var prevContext = getActiveContext();
	  var prevDispatcher = ReactCurrentDispatcher$1.current;
	  ReactCurrentDispatcher$1.current = Dispatcher;
	  var prevGetCurrentStackImpl;

	  {
	    prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
	    ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
	  }

	  var prevResponseState = currentResponseState;
	  setCurrentResponseState(request.responseState);

	  try {
	    var pingedTasks = request.pingedTasks;
	    var i;

	    for (i = 0; i < pingedTasks.length; i++) {
	      var task = pingedTasks[i];
	      retryTask(request, task);
	    }

	    pingedTasks.splice(0, i);

	    if (request.destination !== null) {
	      flushCompletedQueues(request, request.destination);
	    }
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  } finally {
	    setCurrentResponseState(prevResponseState);
	    ReactCurrentDispatcher$1.current = prevDispatcher;

	    {
	      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
	    }

	    if (prevDispatcher === Dispatcher) {
	      // This means that we were in a reentrant work loop. This could happen
	      // in a renderer that supports synchronous work like renderToString,
	      // when it's called from within another renderer.
	      // Normally we don't bother switching the contexts to their root/default
	      // values when leaving because we'll likely need the same or similar
	      // context again. However, when we're inside a synchronous loop like this
	      // we'll to restore the context to what it was before returning.
	      switchContext(prevContext);
	    }
	  }
	}

	function flushSubtree(request, destination, segment) {
	  segment.parentFlushed = true;

	  switch (segment.status) {
	    case PENDING:
	      {
	        // We're emitting a placeholder for this segment to be filled in later.
	        // Therefore we'll need to assign it an ID - to refer to it by.
	        var segmentID = segment.id = request.nextSegmentId++; // When this segment finally completes it won't be embedded in text since it will flush separately

	        segment.lastPushedText = false;
	        segment.textEmbedded = false;
	        return writePlaceholder(destination, request.responseState, segmentID);
	      }

	    case COMPLETED:
	      {
	        segment.status = FLUSHED;
	        var r = true;
	        var chunks = segment.chunks;
	        var chunkIdx = 0;
	        var children = segment.children;

	        for (var childIdx = 0; childIdx < children.length; childIdx++) {
	          var nextChild = children[childIdx]; // Write all the chunks up until the next child.

	          for (; chunkIdx < nextChild.index; chunkIdx++) {
	            writeChunk(destination, chunks[chunkIdx]);
	          }

	          r = flushSegment(request, destination, nextChild);
	        } // Finally just write all the remaining chunks


	        for (; chunkIdx < chunks.length - 1; chunkIdx++) {
	          writeChunk(destination, chunks[chunkIdx]);
	        }

	        if (chunkIdx < chunks.length) {
	          r = writeChunkAndReturn(destination, chunks[chunkIdx]);
	        }

	        return r;
	      }

	    default:
	      {
	        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
	      }
	  }
	}

	function flushSegment(request, destination, segment) {
	  var boundary = segment.boundary;

	  if (boundary === null) {
	    // Not a suspense boundary.
	    return flushSubtree(request, destination, segment);
	  }

	  boundary.parentFlushed = true; // This segment is a Suspense boundary. We need to decide whether to
	  // emit the content or the fallback now.

	  if (boundary.forceClientRender) {
	    // Emit a client rendered suspense boundary wrapper.
	    // We never queue the inner boundary so we'll never emit its content or partial segments.
	    writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
	  } else if (boundary.pendingTasks > 0) {
	    // This boundary is still loading. Emit a pending suspense boundary wrapper.
	    // Assign an ID to refer to the future content by.
	    boundary.rootSegmentID = request.nextSegmentId++;

	    if (boundary.completedSegments.length > 0) {
	      // If this is at least partially complete, we can queue it to be partially emitted early.
	      request.partialBoundaries.push(boundary);
	    } /// This is the first time we should have referenced this ID.


	    var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
	    writeStartPendingSuspenseBoundary(destination, request.responseState, id); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndPendingSuspenseBoundary(destination, request.responseState);
	  } else if (boundary.byteSize > request.progressiveChunkSize) {
	    // This boundary is large and will be emitted separately so that we can progressively show
	    // other content. We add it to the queue during the flush because we have to ensure that
	    // the parent flushes first so that there's something to inject it into.
	    // We also have to make sure that it's emitted into the queue in a deterministic slot.
	    // I.e. we can't insert it here when it completes.
	    // Assign an ID to refer to the future content by.
	    boundary.rootSegmentID = request.nextSegmentId++;
	    request.completedBoundaries.push(boundary); // Emit a pending rendered suspense boundary wrapper.

	    writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndPendingSuspenseBoundary(destination, request.responseState);
	  } else {
	    // We can inline this boundary's content as a complete boundary.
	    writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
	    var completedSegments = boundary.completedSegments;

	    if (completedSegments.length !== 1) {
	      throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
	    }

	    var contentSegment = completedSegments[0];
	    flushSegment(request, destination, contentSegment);
	    return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
	  }
	}

	function flushClientRenderedBoundary(request, destination, boundary) {
	  return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
	}

	function flushSegmentContainer(request, destination, segment) {
	  writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
	  flushSegment(request, destination, segment);
	  return writeEndSegment(destination, segment.formatContext);
	}

	function flushCompletedBoundary(request, destination, boundary) {
	  var completedSegments = boundary.completedSegments;
	  var i = 0;

	  for (; i < completedSegments.length; i++) {
	    var segment = completedSegments[i];
	    flushPartiallyCompletedSegment(request, destination, boundary, segment);
	  }

	  completedSegments.length = 0;
	  return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
	}

	function flushPartialBoundary(request, destination, boundary) {
	  var completedSegments = boundary.completedSegments;
	  var i = 0;

	  for (; i < completedSegments.length; i++) {
	    var segment = completedSegments[i];

	    if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
	      i++;
	      completedSegments.splice(0, i); // Only write as much as the buffer wants. Something higher priority
	      // might want to write later.

	      return false;
	    }
	  }

	  completedSegments.splice(0, i);
	  return true;
	}

	function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
	  if (segment.status === FLUSHED) {
	    // We've already flushed this inline.
	    return true;
	  }

	  var segmentID = segment.id;

	  if (segmentID === -1) {
	    // This segment wasn't previously referred to. This happens at the root of
	    // a boundary. We make kind of a leap here and assume this is the root.
	    var rootSegmentID = segment.id = boundary.rootSegmentID;

	    if (rootSegmentID === -1) {
	      throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
	    }

	    return flushSegmentContainer(request, destination, segment);
	  } else {
	    flushSegmentContainer(request, destination, segment);
	    return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
	  }
	}

	function flushCompletedQueues(request, destination) {

	  try {
	    // The structure of this is to go through each queue one by one and write
	    // until the sink tells us to stop. When we should stop, we still finish writing
	    // that item fully and then yield. At that point we remove the already completed
	    // items up until the point we completed them.
	    // TODO: Emit preloading.
	    // TODO: It's kind of unfortunate to keep checking this array after we've already
	    // emitted the root.
	    var completedRootSegment = request.completedRootSegment;

	    if (completedRootSegment !== null && request.pendingRootTasks === 0) {
	      flushSegment(request, destination, completedRootSegment);
	      request.completedRootSegment = null;
	      writeCompletedRoot(destination, request.responseState);
	    } // We emit client rendering instructions for already emitted boundaries first.
	    // This is so that we can signal to the client to start client rendering them as
	    // soon as possible.


	    var clientRenderedBoundaries = request.clientRenderedBoundaries;
	    var i;

	    for (i = 0; i < clientRenderedBoundaries.length; i++) {
	      var boundary = clientRenderedBoundaries[i];

	      if (!flushClientRenderedBoundary(request, destination, boundary)) {
	        request.destination = null;
	        i++;
	        clientRenderedBoundaries.splice(0, i);
	        return;
	      }
	    }

	    clientRenderedBoundaries.splice(0, i); // Next we emit any complete boundaries. It's better to favor boundaries
	    // that are completely done since we can actually show them, than it is to emit
	    // any individual segments from a partially complete boundary.

	    var completedBoundaries = request.completedBoundaries;

	    for (i = 0; i < completedBoundaries.length; i++) {
	      var _boundary = completedBoundaries[i];

	      if (!flushCompletedBoundary(request, destination, _boundary)) {
	        request.destination = null;
	        i++;
	        completedBoundaries.splice(0, i);
	        return;
	      }
	    }

	    completedBoundaries.splice(0, i); // Allow anything written so far to flush to the underlying sink before
	    // we continue with lower priorities.

	    completeWriting(destination);
	    beginWriting(destination); // TODO: Here we'll emit data used by hydration.
	    // Next we emit any segments of any boundaries that are partially complete
	    // but not deeply complete.

	    var partialBoundaries = request.partialBoundaries;

	    for (i = 0; i < partialBoundaries.length; i++) {
	      var _boundary2 = partialBoundaries[i];

	      if (!flushPartialBoundary(request, destination, _boundary2)) {
	        request.destination = null;
	        i++;
	        partialBoundaries.splice(0, i);
	        return;
	      }
	    }

	    partialBoundaries.splice(0, i); // Next we check the completed boundaries again. This may have had
	    // boundaries added to it in case they were too larged to be inlined.
	    // New ones might be added in this loop.

	    var largeBoundaries = request.completedBoundaries;

	    for (i = 0; i < largeBoundaries.length; i++) {
	      var _boundary3 = largeBoundaries[i];

	      if (!flushCompletedBoundary(request, destination, _boundary3)) {
	        request.destination = null;
	        i++;
	        largeBoundaries.splice(0, i);
	        return;
	      }
	    }

	    largeBoundaries.splice(0, i);
	  } finally {

	    if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 // We don't need to check any partially completed segments because
	    // either they have pending task or they're complete.
	    ) {
	        {
	          if (request.abortableTasks.size !== 0) {
	            error('There was still abortable task at the root when we closed. This is a bug in React.');
	          }
	        } // We're done.


	        close(destination);
	      }
	  }
	}

	function startWork(request) {
	  scheduleWork(function () {
	    return performWork(request);
	  });
	}
	function startFlowing(request, destination) {
	  if (request.status === CLOSING) {
	    request.status = CLOSED;
	    closeWithError(destination, request.fatalError);
	    return;
	  }

	  if (request.status === CLOSED) {
	    return;
	  }

	  if (request.destination !== null) {
	    // We're already flowing.
	    return;
	  }

	  request.destination = destination;

	  try {
	    flushCompletedQueues(request, destination);
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  }
	} // This is called to early terminate a request. It puts all pending boundaries in client rendered state.

	function abort(request, reason) {
	  try {
	    var abortableTasks = request.abortableTasks;
	    abortableTasks.forEach(function (task) {
	      return abortTask(task, request, reason);
	    });
	    abortableTasks.clear();

	    if (request.destination !== null) {
	      flushCompletedQueues(request, request.destination);
	    }
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  }
	}

	function onError() {// Non-fatal errors are ignored.
	}

	function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
	  var didFatal = false;
	  var fatalError = null;
	  var result = '';
	  var destination = {
	    push: function (chunk) {
	      if (chunk !== null) {
	        result += chunk;
	      }

	      return true;
	    },
	    destroy: function (error) {
	      didFatal = true;
	      fatalError = error;
	    }
	  };
	  var readyToStream = false;

	  function onShellReady() {
	    readyToStream = true;
	  }

	  var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : undefined), createRootFormatContext(), Infinity, onError, undefined, onShellReady, undefined, undefined);
	  startWork(request); // If anything suspended and is still pending, we'll abort it before writing.
	  // That way we write only client-rendered boundaries from the start.

	  abort(request, abortReason);
	  startFlowing(request, destination);

	  if (didFatal) {
	    throw fatalError;
	  }

	  if (!readyToStream) {
	    // Note: This error message is the one we use on the client. It doesn't
	    // really make sense here. But this is the legacy server renderer, anyway.
	    // We're going to delete it soon.
	    throw new Error('A component suspended while responding to synchronous input. This ' + 'will cause the UI to be replaced with a loading indicator. To fix, ' + 'updates that suspend should be wrapped with startTransition.');
	  }

	  return result;
	}

	function renderToString(children, options) {
	  return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
	}

	function renderToStaticMarkup(children, options) {
	  return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
	}

	function renderToNodeStream() {
	  throw new Error('ReactDOMServer.renderToNodeStream(): The streaming API is not available ' + 'in the browser. Use ReactDOMServer.renderToString() instead.');
	}

	function renderToStaticNodeStream() {
	  throw new Error('ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available ' + 'in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
	}

	reactDomServerLegacy_browser_development.renderToNodeStream = renderToNodeStream;
	reactDomServerLegacy_browser_development.renderToStaticMarkup = renderToStaticMarkup;
	reactDomServerLegacy_browser_development.renderToStaticNodeStream = renderToStaticNodeStream;
	reactDomServerLegacy_browser_development.renderToString = renderToString;
	reactDomServerLegacy_browser_development.version = ReactVersion;
	  })();
	}
	return reactDomServerLegacy_browser_development;
}

var reactDomServer_browser_development = {};

/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServer_browser_development;

function requireReactDomServer_browser_development () {
	if (hasRequiredReactDomServer_browser_development) return reactDomServer_browser_development;
	hasRequiredReactDomServer_browser_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = reactExports;

	var ReactVersion = '18.2.0';

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

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

	function scheduleWork(callback) {
	  callback();
	}
	var VIEW_SIZE = 512;
	var currentView = null;
	var writtenBytes = 0;
	function beginWriting(destination) {
	  currentView = new Uint8Array(VIEW_SIZE);
	  writtenBytes = 0;
	}
	function writeChunk(destination, chunk) {
	  if (chunk.length === 0) {
	    return;
	  }

	  if (chunk.length > VIEW_SIZE) {
	    // this chunk may overflow a single view which implies it was not
	    // one that is cached by the streaming renderer. We will enqueu
	    // it directly and expect it is not re-used
	    if (writtenBytes > 0) {
	      destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
	      currentView = new Uint8Array(VIEW_SIZE);
	      writtenBytes = 0;
	    }

	    destination.enqueue(chunk);
	    return;
	  }

	  var bytesToWrite = chunk;
	  var allowableBytes = currentView.length - writtenBytes;

	  if (allowableBytes < bytesToWrite.length) {
	    // this chunk would overflow the current view. We enqueue a full view
	    // and start a new view with the remaining chunk
	    if (allowableBytes === 0) {
	      // the current view is already full, send it
	      destination.enqueue(currentView);
	    } else {
	      // fill up the current view and apply the remaining chunk bytes
	      // to a new view.
	      currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes); // writtenBytes += allowableBytes; // this can be skipped because we are going to immediately reset the view

	      destination.enqueue(currentView);
	      bytesToWrite = bytesToWrite.subarray(allowableBytes);
	    }

	    currentView = new Uint8Array(VIEW_SIZE);
	    writtenBytes = 0;
	  }

	  currentView.set(bytesToWrite, writtenBytes);
	  writtenBytes += bytesToWrite.length;
	}
	function writeChunkAndReturn(destination, chunk) {
	  writeChunk(destination, chunk); // in web streams there is no backpressure so we can alwas write more

	  return true;
	}
	function completeWriting(destination) {
	  if (currentView && writtenBytes > 0) {
	    destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
	    currentView = null;
	    writtenBytes = 0;
	  }
	}
	function close(destination) {
	  destination.close();
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
	  return textEncoder.encode(content);
	}
	function stringToPrecomputedChunk(content) {
	  return textEncoder.encode(content);
	}
	function closeWithError(destination, error) {
	  if (typeof destination.error === 'function') {
	    // $FlowFixMe: This is an Error object or the destination accepts other types.
	    destination.error(error);
	  } else {
	    // Earlier implementations doesn't support this method. In that environment you're
	    // supposed to throw from a promise returned but we don't return a promise in our
	    // approach. We could fork this implementation but this is environment is an edge
	    // case to begin with. It's even less common to run this in an older environment.
	    // Even then, this is not where errors are supposed to happen and they get reported
	    // to a global callback in addition to this anyway. So it's fine just to close this.
	    destination.close();
	  }
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

	function checkAttributeStringCoercion(value, attributeName) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}
	function checkCSSPropertyStringCoercion(value, propName) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}
	function checkHtmlStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// A reserved attribute.
	// It is handled by React separately and shouldn't be written to the DOM.
	var RESERVED = 0; // A simple string attribute.
	// Attributes that aren't in the filter are presumed to have this type.

	var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	// "enumerated" attributes with "true" and "false" as possible values.
	// When true, it should be set to a "true" string.
	// When false, it should be set to a "false" string.

	var BOOLEANISH_STRING = 2; // A real boolean attribute.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.

	var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.
	// For any other value, should be present with that value.

	var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	// When falsy, it should be removed.

	var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	// When falsy, it should be removed.

	var POSITIVE_NUMERIC = 6;

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	/* eslint-enable max-len */

	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
	    return true;
	  }

	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
	    return false;
	  }

	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }

	  illegalAttributeNameCache[attributeName] = true;

	  {
	    error('Invalid attribute name: `%s`', attributeName);
	  }

	  return false;
	}
	function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
	  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
	    return false;
	  }

	  switch (typeof value) {
	    case 'function': // $FlowIssue symbol is perfectly valid here

	    case 'symbol':
	      // eslint-disable-line
	      return true;

	    case 'boolean':
	      {
	        if (isCustomComponentTag) {
	          return false;
	        }

	        if (propertyInfo !== null) {
	          return !propertyInfo.acceptsBooleans;
	        } else {
	          var prefix = name.toLowerCase().slice(0, 5);
	          return prefix !== 'data-' && prefix !== 'aria-';
	        }
	      }

	    default:
	      return false;
	  }
	}
	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
	  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	  this.attributeName = attributeName;
	  this.attributeNamespace = attributeNamespace;
	  this.mustUseProperty = mustUseProperty;
	  this.propertyName = name;
	  this.type = type;
	  this.sanitizeURL = sanitizeURL;
	  this.removeEmptyString = removeEmptyString;
	} // When adding attributes to this list, be sure to also add them to
	// the `possibleStandardNames` module to ensure casing and incorrect
	// name warnings.


	var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	// elements (not just inputs). Now that ReactDOMInput assigns to the
	// defaultValue property -- do we need this?
	'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

	reservedProps.forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // A few React string attributes have a different name.
	// This is a mapping from React prop names to the attribute names.

	[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	  var name = _ref[0],
	      attributeName = _ref[1];
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" HTML attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).

	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" SVG attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).
	// Since these are SVG attributes, their attribute names are case-sensitive.

	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML boolean attributes.

	['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	// on the client side because the browsers are inconsistent. Instead we call focus().
	'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	'itemScope'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are the few React props that we set as DOM properties
	// rather than attributes. These are all booleans.

	['checked', // Note: `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`. We have special logic for handling this.
	'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that are "overloaded booleans": they behave like
	// booleans, but can also accept a string value.

	['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be positive numbers.

	['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be numbers.

	['rowSpan', 'start'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	});
	var CAMELIZE = /[\-\:]([a-z])/g;

	var capitalize = function (token) {
	  return token[1].toUpperCase();
	}; // This is a list of all SVG attributes that need special casing, namespacing,
	// or boolean value assignment. Regular attributes that just accept strings
	// and have the same names are omitted, just like in the HTML attribute filter.
	// Some of these attributes can be hard to find. This list was created by
	// scraping the MDN documentation.


	['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xlink namespace.

	['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xml namespace.

	['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
	  false);
	}); // These attribute exists both in HTML and SVG.
	// The attribute name is case-sensitive in SVG so we can't just use
	// the React name like we do for attributes that exist only in HTML.

	['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These attributes accept URLs. These must not allow javascript: URLS.
	// These will also need to accept Trusted Types object in the future.

	var xlinkHref = 'xlinkHref';
	properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
	false);
	['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  true, // sanitizeURL
	  true);
	});

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  aspectRatio: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridArea: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */

	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */


	var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.

	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	var hasReadOnlyValue = {
	  button: true,
	  checkbox: true,
	  image: true,
	  hidden: true,
	  radio: true,
	  reset: true,
	  submit: true
	};
	function checkControlledValueProps(tagName, props) {
	  {
	    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
	      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }

	    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
	      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }
	  }
	}

	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return typeof props.is === 'string';
	  }

	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this list too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;

	    default:
	      return true;
	  }
	}

	var ariaProperties = {
	  'aria-current': 0,
	  // state
	  'aria-description': 0,
	  'aria-details': 0,
	  'aria-disabled': 0,
	  // state
	  'aria-hidden': 0,
	  // state
	  'aria-invalid': 0,
	  // state
	  'aria-keyshortcuts': 0,
	  'aria-label': 0,
	  'aria-roledescription': 0,
	  // Widget Attributes
	  'aria-autocomplete': 0,
	  'aria-checked': 0,
	  'aria-expanded': 0,
	  'aria-haspopup': 0,
	  'aria-level': 0,
	  'aria-modal': 0,
	  'aria-multiline': 0,
	  'aria-multiselectable': 0,
	  'aria-orientation': 0,
	  'aria-placeholder': 0,
	  'aria-pressed': 0,
	  'aria-readonly': 0,
	  'aria-required': 0,
	  'aria-selected': 0,
	  'aria-sort': 0,
	  'aria-valuemax': 0,
	  'aria-valuemin': 0,
	  'aria-valuenow': 0,
	  'aria-valuetext': 0,
	  // Live Region Attributes
	  'aria-atomic': 0,
	  'aria-busy': 0,
	  'aria-live': 0,
	  'aria-relevant': 0,
	  // Drag-and-Drop Attributes
	  'aria-dropeffect': 0,
	  'aria-grabbed': 0,
	  // Relationship Attributes
	  'aria-activedescendant': 0,
	  'aria-colcount': 0,
	  'aria-colindex': 0,
	  'aria-colspan': 0,
	  'aria-controls': 0,
	  'aria-describedby': 0,
	  'aria-errormessage': 0,
	  'aria-flowto': 0,
	  'aria-labelledby': 0,
	  'aria-owns': 0,
	  'aria-posinset': 0,
	  'aria-rowcount': 0,
	  'aria-rowindex': 0,
	  'aria-rowspan': 0,
	  'aria-setsize': 0
	};

	var warnedProperties = {};
	var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	function validateProperty(tagName, name) {
	  {
	    if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
	      return true;
	    }

	    if (rARIACamel.test(name)) {
	      var ariaName = 'aria-' + name.slice(4).toLowerCase();
	      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (correctName == null) {
	        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

	        warnedProperties[name] = true;
	        return true;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== correctName) {
	        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }

	    if (rARIA.test(name)) {
	      var lowerCasedName = name.toLowerCase();
	      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (standardName == null) {
	        warnedProperties[name] = true;
	        return false;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== standardName) {
	        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }
	  }

	  return true;
	}

	function warnInvalidARIAProps(type, props) {
	  {
	    var invalidProps = [];

	    for (var key in props) {
	      var isValid = validateProperty(type, key);

	      if (!isValid) {
	        invalidProps.push(key);
	      }
	    }

	    var unknownPropString = invalidProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (invalidProps.length === 1) {
	      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
	    } else if (invalidProps.length > 1) {
	      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
	    }
	  }
	}

	function validateProperties(type, props) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnInvalidARIAProps(type, props);
	}

	var didWarnValueNull = false;
	function validateProperties$1(type, props) {
	  {
	    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	      return;
	    }

	    if (props != null && props.value === null && !didWarnValueNull) {
	      didWarnValueNull = true;

	      if (type === 'select' && props.multiple) {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
	      } else {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
	      }
	    }
	  }
	}

	// When adding attributes to the HTML or SVG allowed attribute list, be sure to
	// also add them to this module to ensure casing and incorrect name
	// warnings.
	var possibleStandardNames = {
	  // HTML
	  accept: 'accept',
	  acceptcharset: 'acceptCharset',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  alt: 'alt',
	  as: 'as',
	  async: 'async',
	  autocapitalize: 'autoCapitalize',
	  autocomplete: 'autoComplete',
	  autocorrect: 'autoCorrect',
	  autofocus: 'autoFocus',
	  autoplay: 'autoPlay',
	  autosave: 'autoSave',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  challenge: 'challenge',
	  charset: 'charSet',
	  checked: 'checked',
	  children: 'children',
	  cite: 'cite',
	  class: 'className',
	  classid: 'classID',
	  classname: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  controlslist: 'controlsList',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	  data: 'data',
	  datetime: 'dateTime',
	  default: 'default',
	  defaultchecked: 'defaultChecked',
	  defaultvalue: 'defaultValue',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  disablepictureinpicture: 'disablePictureInPicture',
	  disableremoteplayback: 'disableRemotePlayback',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  enterkeyhint: 'enterKeyHint',
	  for: 'htmlFor',
	  form: 'form',
	  formmethod: 'formMethod',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  htmlfor: 'htmlFor',
	  httpequiv: 'httpEquiv',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  imagesizes: 'imageSizes',
	  imagesrcset: 'imageSrcSet',
	  innerhtml: 'innerHTML',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  itemid: 'itemID',
	  itemprop: 'itemProp',
	  itemref: 'itemRef',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginwidth: 'marginWidth',
	  marginheight: 'marginHeight',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nomodule: 'noModule',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  playsinline: 'playsInline',
	  poster: 'poster',
	  preload: 'preload',
	  profile: 'profile',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  referrerpolicy: 'referrerPolicy',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',
	  // SVG
	  about: 'about',
	  accentheight: 'accentHeight',
	  'accent-height': 'accentHeight',
	  accumulate: 'accumulate',
	  additive: 'additive',
	  alignmentbaseline: 'alignmentBaseline',
	  'alignment-baseline': 'alignmentBaseline',
	  allowreorder: 'allowReorder',
	  alphabetic: 'alphabetic',
	  amplitude: 'amplitude',
	  arabicform: 'arabicForm',
	  'arabic-form': 'arabicForm',
	  ascent: 'ascent',
	  attributename: 'attributeName',
	  attributetype: 'attributeType',
	  autoreverse: 'autoReverse',
	  azimuth: 'azimuth',
	  basefrequency: 'baseFrequency',
	  baselineshift: 'baselineShift',
	  'baseline-shift': 'baselineShift',
	  baseprofile: 'baseProfile',
	  bbox: 'bbox',
	  begin: 'begin',
	  bias: 'bias',
	  by: 'by',
	  calcmode: 'calcMode',
	  capheight: 'capHeight',
	  'cap-height': 'capHeight',
	  clip: 'clip',
	  clippath: 'clipPath',
	  'clip-path': 'clipPath',
	  clippathunits: 'clipPathUnits',
	  cliprule: 'clipRule',
	  'clip-rule': 'clipRule',
	  color: 'color',
	  colorinterpolation: 'colorInterpolation',
	  'color-interpolation': 'colorInterpolation',
	  colorinterpolationfilters: 'colorInterpolationFilters',
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorprofile: 'colorProfile',
	  'color-profile': 'colorProfile',
	  colorrendering: 'colorRendering',
	  'color-rendering': 'colorRendering',
	  contentscripttype: 'contentScriptType',
	  contentstyletype: 'contentStyleType',
	  cursor: 'cursor',
	  cx: 'cx',
	  cy: 'cy',
	  d: 'd',
	  datatype: 'datatype',
	  decelerate: 'decelerate',
	  descent: 'descent',
	  diffuseconstant: 'diffuseConstant',
	  direction: 'direction',
	  display: 'display',
	  divisor: 'divisor',
	  dominantbaseline: 'dominantBaseline',
	  'dominant-baseline': 'dominantBaseline',
	  dur: 'dur',
	  dx: 'dx',
	  dy: 'dy',
	  edgemode: 'edgeMode',
	  elevation: 'elevation',
	  enablebackground: 'enableBackground',
	  'enable-background': 'enableBackground',
	  end: 'end',
	  exponent: 'exponent',
	  externalresourcesrequired: 'externalResourcesRequired',
	  fill: 'fill',
	  fillopacity: 'fillOpacity',
	  'fill-opacity': 'fillOpacity',
	  fillrule: 'fillRule',
	  'fill-rule': 'fillRule',
	  filter: 'filter',
	  filterres: 'filterRes',
	  filterunits: 'filterUnits',
	  floodopacity: 'floodOpacity',
	  'flood-opacity': 'floodOpacity',
	  floodcolor: 'floodColor',
	  'flood-color': 'floodColor',
	  focusable: 'focusable',
	  fontfamily: 'fontFamily',
	  'font-family': 'fontFamily',
	  fontsize: 'fontSize',
	  'font-size': 'fontSize',
	  fontsizeadjust: 'fontSizeAdjust',
	  'font-size-adjust': 'fontSizeAdjust',
	  fontstretch: 'fontStretch',
	  'font-stretch': 'fontStretch',
	  fontstyle: 'fontStyle',
	  'font-style': 'fontStyle',
	  fontvariant: 'fontVariant',
	  'font-variant': 'fontVariant',
	  fontweight: 'fontWeight',
	  'font-weight': 'fontWeight',
	  format: 'format',
	  from: 'from',
	  fx: 'fx',
	  fy: 'fy',
	  g1: 'g1',
	  g2: 'g2',
	  glyphname: 'glyphName',
	  'glyph-name': 'glyphName',
	  glyphorientationhorizontal: 'glyphOrientationHorizontal',
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphorientationvertical: 'glyphOrientationVertical',
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphref: 'glyphRef',
	  gradienttransform: 'gradientTransform',
	  gradientunits: 'gradientUnits',
	  hanging: 'hanging',
	  horizadvx: 'horizAdvX',
	  'horiz-adv-x': 'horizAdvX',
	  horizoriginx: 'horizOriginX',
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 'ideographic',
	  imagerendering: 'imageRendering',
	  'image-rendering': 'imageRendering',
	  in2: 'in2',
	  in: 'in',
	  inlist: 'inlist',
	  intercept: 'intercept',
	  k1: 'k1',
	  k2: 'k2',
	  k3: 'k3',
	  k4: 'k4',
	  k: 'k',
	  kernelmatrix: 'kernelMatrix',
	  kernelunitlength: 'kernelUnitLength',
	  kerning: 'kerning',
	  keypoints: 'keyPoints',
	  keysplines: 'keySplines',
	  keytimes: 'keyTimes',
	  lengthadjust: 'lengthAdjust',
	  letterspacing: 'letterSpacing',
	  'letter-spacing': 'letterSpacing',
	  lightingcolor: 'lightingColor',
	  'lighting-color': 'lightingColor',
	  limitingconeangle: 'limitingConeAngle',
	  local: 'local',
	  markerend: 'markerEnd',
	  'marker-end': 'markerEnd',
	  markerheight: 'markerHeight',
	  markermid: 'markerMid',
	  'marker-mid': 'markerMid',
	  markerstart: 'markerStart',
	  'marker-start': 'markerStart',
	  markerunits: 'markerUnits',
	  markerwidth: 'markerWidth',
	  mask: 'mask',
	  maskcontentunits: 'maskContentUnits',
	  maskunits: 'maskUnits',
	  mathematical: 'mathematical',
	  mode: 'mode',
	  numoctaves: 'numOctaves',
	  offset: 'offset',
	  opacity: 'opacity',
	  operator: 'operator',
	  order: 'order',
	  orient: 'orient',
	  orientation: 'orientation',
	  origin: 'origin',
	  overflow: 'overflow',
	  overlineposition: 'overlinePosition',
	  'overline-position': 'overlinePosition',
	  overlinethickness: 'overlineThickness',
	  'overline-thickness': 'overlineThickness',
	  paintorder: 'paintOrder',
	  'paint-order': 'paintOrder',
	  panose1: 'panose1',
	  'panose-1': 'panose1',
	  pathlength: 'pathLength',
	  patterncontentunits: 'patternContentUnits',
	  patterntransform: 'patternTransform',
	  patternunits: 'patternUnits',
	  pointerevents: 'pointerEvents',
	  'pointer-events': 'pointerEvents',
	  points: 'points',
	  pointsatx: 'pointsAtX',
	  pointsaty: 'pointsAtY',
	  pointsatz: 'pointsAtZ',
	  prefix: 'prefix',
	  preservealpha: 'preserveAlpha',
	  preserveaspectratio: 'preserveAspectRatio',
	  primitiveunits: 'primitiveUnits',
	  property: 'property',
	  r: 'r',
	  radius: 'radius',
	  refx: 'refX',
	  refy: 'refY',
	  renderingintent: 'renderingIntent',
	  'rendering-intent': 'renderingIntent',
	  repeatcount: 'repeatCount',
	  repeatdur: 'repeatDur',
	  requiredextensions: 'requiredExtensions',
	  requiredfeatures: 'requiredFeatures',
	  resource: 'resource',
	  restart: 'restart',
	  result: 'result',
	  results: 'results',
	  rotate: 'rotate',
	  rx: 'rx',
	  ry: 'ry',
	  scale: 'scale',
	  security: 'security',
	  seed: 'seed',
	  shaperendering: 'shapeRendering',
	  'shape-rendering': 'shapeRendering',
	  slope: 'slope',
	  spacing: 'spacing',
	  specularconstant: 'specularConstant',
	  specularexponent: 'specularExponent',
	  speed: 'speed',
	  spreadmethod: 'spreadMethod',
	  startoffset: 'startOffset',
	  stddeviation: 'stdDeviation',
	  stemh: 'stemh',
	  stemv: 'stemv',
	  stitchtiles: 'stitchTiles',
	  stopcolor: 'stopColor',
	  'stop-color': 'stopColor',
	  stopopacity: 'stopOpacity',
	  'stop-opacity': 'stopOpacity',
	  strikethroughposition: 'strikethroughPosition',
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughthickness: 'strikethroughThickness',
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 'string',
	  stroke: 'stroke',
	  strokedasharray: 'strokeDasharray',
	  'stroke-dasharray': 'strokeDasharray',
	  strokedashoffset: 'strokeDashoffset',
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokelinecap: 'strokeLinecap',
	  'stroke-linecap': 'strokeLinecap',
	  strokelinejoin: 'strokeLinejoin',
	  'stroke-linejoin': 'strokeLinejoin',
	  strokemiterlimit: 'strokeMiterlimit',
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokewidth: 'strokeWidth',
	  'stroke-width': 'strokeWidth',
	  strokeopacity: 'strokeOpacity',
	  'stroke-opacity': 'strokeOpacity',
	  suppresscontenteditablewarning: 'suppressContentEditableWarning',
	  suppresshydrationwarning: 'suppressHydrationWarning',
	  surfacescale: 'surfaceScale',
	  systemlanguage: 'systemLanguage',
	  tablevalues: 'tableValues',
	  targetx: 'targetX',
	  targety: 'targetY',
	  textanchor: 'textAnchor',
	  'text-anchor': 'textAnchor',
	  textdecoration: 'textDecoration',
	  'text-decoration': 'textDecoration',
	  textlength: 'textLength',
	  textrendering: 'textRendering',
	  'text-rendering': 'textRendering',
	  to: 'to',
	  transform: 'transform',
	  typeof: 'typeof',
	  u1: 'u1',
	  u2: 'u2',
	  underlineposition: 'underlinePosition',
	  'underline-position': 'underlinePosition',
	  underlinethickness: 'underlineThickness',
	  'underline-thickness': 'underlineThickness',
	  unicode: 'unicode',
	  unicodebidi: 'unicodeBidi',
	  'unicode-bidi': 'unicodeBidi',
	  unicoderange: 'unicodeRange',
	  'unicode-range': 'unicodeRange',
	  unitsperem: 'unitsPerEm',
	  'units-per-em': 'unitsPerEm',
	  unselectable: 'unselectable',
	  valphabetic: 'vAlphabetic',
	  'v-alphabetic': 'vAlphabetic',
	  values: 'values',
	  vectoreffect: 'vectorEffect',
	  'vector-effect': 'vectorEffect',
	  version: 'version',
	  vertadvy: 'vertAdvY',
	  'vert-adv-y': 'vertAdvY',
	  vertoriginx: 'vertOriginX',
	  'vert-origin-x': 'vertOriginX',
	  vertoriginy: 'vertOriginY',
	  'vert-origin-y': 'vertOriginY',
	  vhanging: 'vHanging',
	  'v-hanging': 'vHanging',
	  videographic: 'vIdeographic',
	  'v-ideographic': 'vIdeographic',
	  viewbox: 'viewBox',
	  viewtarget: 'viewTarget',
	  visibility: 'visibility',
	  vmathematical: 'vMathematical',
	  'v-mathematical': 'vMathematical',
	  vocab: 'vocab',
	  widths: 'widths',
	  wordspacing: 'wordSpacing',
	  'word-spacing': 'wordSpacing',
	  writingmode: 'writingMode',
	  'writing-mode': 'writingMode',
	  x1: 'x1',
	  x2: 'x2',
	  x: 'x',
	  xchannelselector: 'xChannelSelector',
	  xheight: 'xHeight',
	  'x-height': 'xHeight',
	  xlinkactuate: 'xlinkActuate',
	  'xlink:actuate': 'xlinkActuate',
	  xlinkarcrole: 'xlinkArcrole',
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkhref: 'xlinkHref',
	  'xlink:href': 'xlinkHref',
	  xlinkrole: 'xlinkRole',
	  'xlink:role': 'xlinkRole',
	  xlinkshow: 'xlinkShow',
	  'xlink:show': 'xlinkShow',
	  xlinktitle: 'xlinkTitle',
	  'xlink:title': 'xlinkTitle',
	  xlinktype: 'xlinkType',
	  'xlink:type': 'xlinkType',
	  xmlbase: 'xmlBase',
	  'xml:base': 'xmlBase',
	  xmllang: 'xmlLang',
	  'xml:lang': 'xmlLang',
	  xmlns: 'xmlns',
	  'xml:space': 'xmlSpace',
	  xmlnsxlink: 'xmlnsXlink',
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlspace: 'xmlSpace',
	  y1: 'y1',
	  y2: 'y2',
	  y: 'y',
	  ychannelselector: 'yChannelSelector',
	  z: 'z',
	  zoomandpan: 'zoomAndPan'
	};

	var validateProperty$1 = function () {};

	{
	  var warnedProperties$1 = {};
	  var EVENT_NAME_REGEX = /^on./;
	  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	  validateProperty$1 = function (tagName, name, value, eventRegistry) {
	    if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	      return true;
	    }

	    var lowerCasedName = name.toLowerCase();

	    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

	      warnedProperties$1[name] = true;
	      return true;
	    } // We can't rely on the event system being injected on the server.


	    if (eventRegistry != null) {
	      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
	          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

	      if (registrationNameDependencies.hasOwnProperty(name)) {
	        return true;
	      }

	      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

	      if (registrationName != null) {
	        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

	        warnedProperties$1[name] = true;
	        return true;
	      }

	      if (EVENT_NAME_REGEX.test(name)) {
	        error('Unknown event handler property `%s`. It will be ignored.', name);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (EVENT_NAME_REGEX.test(name)) {
	      // If no event plugins have been injected, we are in a server environment.
	      // So we can't tell if the event name is correct for sure, but we can filter
	      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	      if (INVALID_EVENT_NAME_REGEX.test(name)) {
	        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Let the ARIA attribute hook validate ARIA attributes


	    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	      return true;
	    }

	    if (lowerCasedName === 'innerhtml') {
	      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'aria') {
	      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    var propertyInfo = getPropertyInfo(name);
	    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

	    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	      var standardName = possibleStandardNames[lowerCasedName];

	      if (standardName !== name) {
	        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (!isReserved && name !== lowerCasedName) {
	      // Unknown attributes should have lowercase casing since that's how they
	      // will be cased anyway with server rendering.
	      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      if (value) {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
	      } else {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Now that we've validated casing, do not validate
	    // data types for reserved props


	    if (isReserved) {
	      return true;
	    } // Warn when a known attribute is a bad type


	    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      warnedProperties$1[name] = true;
	      return false;
	    } // Warn when passing the strings 'false' or 'true' into a boolean prop


	    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
	      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    return true;
	  };
	}

	var warnUnknownProperties = function (type, props, eventRegistry) {
	  {
	    var unknownProps = [];

	    for (var key in props) {
	      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

	      if (!isValid) {
	        unknownProps.push(key);
	      }
	    }

	    var unknownPropString = unknownProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (unknownProps.length === 1) {
	      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
	    } else if (unknownProps.length > 1) {
	      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
	    }
	  }
	};

	function validateProperties$2(type, props, eventRegistry) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnUnknownProperties(type, props, eventRegistry);
	}

	var warnValidStyle = function () {};

	{
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	  var msPattern = /^-ms-/;
	  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	  var warnedForInfinityValue = false;

	  var camelize = function (string) {
	    return string.replace(hyphenPattern, function (_, character) {
	      return character.toUpperCase();
	    });
	  };

	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
	    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	    // is converted to lowercase `ms`.
	    camelize(name.replace(msPattern, 'ms-')));
	  };

	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
	  };

	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;

	    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
	  };

	  var warnStyleValueIsNaN = function (name, value) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;

	    error('`NaN` is an invalid value for the `%s` css style property.', name);
	  };

	  var warnStyleValueIsInfinity = function (name, value) {
	    if (warnedForInfinityValue) {
	      return;
	    }

	    warnedForInfinityValue = true;

	    error('`Infinity` is an invalid value for the `%s` css style property.', name);
	  };

	  warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }

	    if (typeof value === 'number') {
	      if (isNaN(value)) {
	        warnStyleValueIsNaN(name, value);
	      } else if (!isFinite(value)) {
	        warnStyleValueIsInfinity(name, value);
	      }
	    }
	  };
	}

	var warnValidStyle$1 = warnValidStyle;

	// code copied and modified from escape-html
	var matchHtmlRegExp = /["'&<>]/;
	/**
	 * Escapes special characters and HTML entities in a given html string.
	 *
	 * @param  {string} string HTML string to escape for later insertion
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  {
	    checkHtmlStringCoercion(string);
	  }

	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        // "
	        escape = '&quot;';
	        break;

	      case 38:
	        // &
	        escape = '&amp;';
	        break;

	      case 39:
	        // '
	        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

	        break;

	      case 60:
	        // <
	        escape = '&lt;';
	        break;

	      case 62:
	        // >
	        escape = '&gt;';
	        break;

	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	} // end code copied and modified from escape-html

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */


	function escapeTextForBrowser(text) {
	  if (typeof text === 'boolean' || typeof text === 'number') {
	    // this shortcircuit helps perf for types that we know will never have
	    // special characters, especially given that this function is used often
	    // for numeric dom ids.
	    return '' + text;
	  }

	  return escapeHtml(text);
	}

	var uppercasePattern = /([A-Z])/g;
	var msPattern$1 = /^ms-/;
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 */

	function hyphenateStyleName(name) {
	  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
	}

	// and any newline or tab are filtered out as if they're not part of the URL.
	// https://url.spec.whatwg.org/#url-parsing
	// Tab or newline are defined as \r\n\t:
	// https://infra.spec.whatwg.org/#ascii-tab-or-newline
	// A C0 control is a code point in the range \u0000 NULL to \u001F
	// INFORMATION SEPARATOR ONE, inclusive:
	// https://infra.spec.whatwg.org/#c0-control-or-space

	/* eslint-disable max-len */

	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
	var didWarn = false;

	function sanitizeURL(url) {
	  {
	    if (!didWarn && isJavaScriptProtocol.test(url)) {
	      didWarn = true;

	      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	var startInlineScript = stringToPrecomputedChunk('<script>');
	var endInlineScript = stringToPrecomputedChunk('</script>');
	var startScriptSrc = stringToPrecomputedChunk('<script src="');
	var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
	var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
	/**
	 * This escaping function is designed to work with bootstrapScriptContent only.
	 * because we know we are escaping the entire script. We can avoid for instance
	 * escaping html comment string sequences that are valid javascript as well because
	 * if there are no sebsequent <script sequences the html parser will never enter
	 * script data double escaped state (see: https://www.w3.org/TR/html53/syntax.html#script-data-double-escaped-state)
	 *
	 * While untrusted script content should be made safe before using this api it will
	 * ensure that the script cannot be early terminated or never terminated state
	 */

	function escapeBootstrapScriptContent(scriptText) {
	  {
	    checkHtmlStringCoercion(scriptText);
	  }

	  return ('' + scriptText).replace(scriptRegex, scriptReplacer);
	}

	var scriptRegex = /(<\/|<)(s)(cript)/gi;

	var scriptReplacer = function (match, prefix, s, suffix) {
	  return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
	}; // Allows us to keep track of what we've already written so we can refer back to it.


	function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
	  var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
	  var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
	  var bootstrapChunks = [];

	  if (bootstrapScriptContent !== undefined) {
	    bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
	  }

	  if (bootstrapScripts !== undefined) {
	    for (var i = 0; i < bootstrapScripts.length; i++) {
	      bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
	    }
	  }

	  if (bootstrapModules !== undefined) {
	    for (var _i = 0; _i < bootstrapModules.length; _i++) {
	      bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
	    }
	  }

	  return {
	    bootstrapChunks: bootstrapChunks,
	    startInlineScript: inlineScriptWithNonce,
	    placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
	    segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
	    boundaryPrefix: idPrefix + 'B:',
	    idPrefix: idPrefix,
	    nextSuspenseID: 0,
	    sentCompleteSegmentFunction: false,
	    sentCompleteBoundaryFunction: false,
	    sentClientRenderFunction: false
	  };
	} // Constants for the insertion mode we're currently writing in. We don't encode all HTML5 insertion
	// modes. We only include the variants as they matter for the sake of our purposes.
	// We don't actually provide the namespace therefore we use constants instead of the string.

	var ROOT_HTML_MODE = 0; // Used for the root most element tag.

	var HTML_MODE = 1;
	var SVG_MODE = 2;
	var MATHML_MODE = 3;
	var HTML_TABLE_MODE = 4;
	var HTML_TABLE_BODY_MODE = 5;
	var HTML_TABLE_ROW_MODE = 6;
	var HTML_COLGROUP_MODE = 7; // We have a greater than HTML_TABLE_MODE check elsewhere. If you add more cases here, make sure it
	// still makes sense

	function createFormatContext(insertionMode, selectedValue) {
	  return {
	    insertionMode: insertionMode,
	    selectedValue: selectedValue
	  };
	}

	function createRootFormatContext(namespaceURI) {
	  var insertionMode = namespaceURI === 'http://www.w3.org/2000/svg' ? SVG_MODE : namespaceURI === 'http://www.w3.org/1998/Math/MathML' ? MATHML_MODE : ROOT_HTML_MODE;
	  return createFormatContext(insertionMode, null);
	}
	function getChildFormatContext(parentContext, type, props) {
	  switch (type) {
	    case 'select':
	      return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);

	    case 'svg':
	      return createFormatContext(SVG_MODE, null);

	    case 'math':
	      return createFormatContext(MATHML_MODE, null);

	    case 'foreignObject':
	      return createFormatContext(HTML_MODE, null);
	    // Table parents are special in that their children can only be created at all if they're
	    // wrapped in a table parent. So we need to encode that we're entering this mode.

	    case 'table':
	      return createFormatContext(HTML_TABLE_MODE, null);

	    case 'thead':
	    case 'tbody':
	    case 'tfoot':
	      return createFormatContext(HTML_TABLE_BODY_MODE, null);

	    case 'colgroup':
	      return createFormatContext(HTML_COLGROUP_MODE, null);

	    case 'tr':
	      return createFormatContext(HTML_TABLE_ROW_MODE, null);
	  }

	  if (parentContext.insertionMode >= HTML_TABLE_MODE) {
	    // Whatever tag this was, it wasn't a table parent or other special parent, so we must have
	    // entered plain HTML again.
	    return createFormatContext(HTML_MODE, null);
	  }

	  if (parentContext.insertionMode === ROOT_HTML_MODE) {
	    // We've emitted the root and is now in plain HTML mode.
	    return createFormatContext(HTML_MODE, null);
	  }

	  return parentContext;
	}
	var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
	function assignSuspenseBoundaryID(responseState) {
	  var generatedID = responseState.nextSuspenseID++;
	  return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
	}
	function makeId(responseState, treeId, localId) {
	  var idPrefix = responseState.idPrefix;
	  var id = ':' + idPrefix + 'R' + treeId; // Unless this is the first id at this level, append a number at the end
	  // that represents the position of this useId hook among all the useId
	  // hooks for this fiber.

	  if (localId > 0) {
	    id += 'H' + localId.toString(32);
	  }

	  return id + ':';
	}

	function encodeHTMLTextNode(text) {
	  return escapeTextForBrowser(text);
	}

	var textSeparator = stringToPrecomputedChunk('<!-- -->');
	function pushTextInstance(target, text, responseState, textEmbedded) {
	  if (text === '') {
	    // Empty text doesn't have a DOM node representation and the hydration is aware of this.
	    return textEmbedded;
	  }

	  if (textEmbedded) {
	    target.push(textSeparator);
	  }

	  target.push(stringToChunk(encodeHTMLTextNode(text)));
	  return true;
	} // Called when Fizz is done with a Segment. Currently the only purpose is to conditionally
	// emit a text separator when we don't know for sure it is safe to omit

	function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
	  if (lastPushedText && textEmbedded) {
	    target.push(textSeparator);
	  }
	}
	var styleNameCache = new Map();

	function processStyleName(styleName) {
	  var chunk = styleNameCache.get(styleName);

	  if (chunk !== undefined) {
	    return chunk;
	  }

	  var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
	  styleNameCache.set(styleName, result);
	  return result;
	}

	var styleAttributeStart = stringToPrecomputedChunk(' style="');
	var styleAssign = stringToPrecomputedChunk(':');
	var styleSeparator = stringToPrecomputedChunk(';');

	function pushStyle(target, responseState, style) {
	  if (typeof style !== 'object') {
	    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
	  }

	  var isFirst = true;

	  for (var styleName in style) {
	    if (!hasOwnProperty.call(style, styleName)) {
	      continue;
	    } // If you provide unsafe user data here they can inject arbitrary CSS
	    // which may be problematic (I couldn't repro this):
	    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	    // This is not an XSS hole but instead a potential CSS injection issue
	    // which has lead to a greater discussion about how we're going to
	    // trust URLs moving forward. See #2115901


	    var styleValue = style[styleName];

	    if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
	      // TODO: We used to set empty string as a style with an empty value. Does that ever make sense?
	      continue;
	    }

	    var nameChunk = void 0;
	    var valueChunk = void 0;
	    var isCustomProperty = styleName.indexOf('--') === 0;

	    if (isCustomProperty) {
	      nameChunk = stringToChunk(escapeTextForBrowser(styleName));

	      {
	        checkCSSPropertyStringCoercion(styleValue, styleName);
	      }

	      valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
	    } else {
	      {
	        warnValidStyle$1(styleName, styleValue);
	      }

	      nameChunk = processStyleName(styleName);

	      if (typeof styleValue === 'number') {
	        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
	          valueChunk = stringToChunk(styleValue + 'px'); // Presumes implicit 'px' suffix for unitless numbers
	        } else {
	          valueChunk = stringToChunk('' + styleValue);
	        }
	      } else {
	        {
	          checkCSSPropertyStringCoercion(styleValue, styleName);
	        }

	        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
	      }
	    }

	    if (isFirst) {
	      isFirst = false; // If it's first, we don't need any separators prefixed.

	      target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
	    } else {
	      target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
	    }
	  }

	  if (!isFirst) {
	    target.push(attributeEnd);
	  }
	}

	var attributeSeparator = stringToPrecomputedChunk(' ');
	var attributeAssign = stringToPrecomputedChunk('="');
	var attributeEnd = stringToPrecomputedChunk('"');
	var attributeEmptyString = stringToPrecomputedChunk('=""');

	function pushAttribute(target, responseState, name, value) {
	  switch (name) {
	    case 'style':
	      {
	        pushStyle(target, responseState, value);
	        return;
	      }

	    case 'defaultValue':
	    case 'defaultChecked': // These shouldn't be set as attributes on generic HTML elements.

	    case 'innerHTML': // Must use dangerouslySetInnerHTML instead.

	    case 'suppressContentEditableWarning':
	    case 'suppressHydrationWarning':
	      // Ignored. These are built-in to React on the client.
	      return;
	  }

	  if ( // shouldIgnoreAttribute
	  // We have already filtered out null/undefined and reserved words.
	  name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	    return;
	  }

	  var propertyInfo = getPropertyInfo(name);

	  if (propertyInfo !== null) {
	    // shouldRemoveAttribute
	    switch (typeof value) {
	      case 'function': // $FlowIssue symbol is perfectly valid here

	      case 'symbol':
	        // eslint-disable-line
	        return;

	      case 'boolean':
	        {
	          if (!propertyInfo.acceptsBooleans) {
	            return;
	          }
	        }
	    }

	    var attributeName = propertyInfo.attributeName;
	    var attributeNameChunk = stringToChunk(attributeName); // TODO: If it's known we can cache the chunk.

	    switch (propertyInfo.type) {
	      case BOOLEAN:
	        if (value) {
	          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
	        }

	        return;

	      case OVERLOADED_BOOLEAN:
	        if (value === true) {
	          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
	        } else if (value === false) ; else {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        return;

	      case NUMERIC:
	        if (!isNaN(value)) {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        break;

	      case POSITIVE_NUMERIC:
	        if (!isNaN(value) && value >= 1) {
	          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	        }

	        break;

	      default:
	        if (propertyInfo.sanitizeURL) {
	          {
	            checkAttributeStringCoercion(value, attributeName);
	          }

	          value = '' + value;
	          sanitizeURL(value);
	        }

	        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	    }
	  } else if (isAttributeNameSafe(name)) {
	    // shouldRemoveAttribute
	    switch (typeof value) {
	      case 'function': // $FlowIssue symbol is perfectly valid here

	      case 'symbol':
	        // eslint-disable-line
	        return;

	      case 'boolean':
	        {
	          var prefix = name.toLowerCase().slice(0, 5);

	          if (prefix !== 'data-' && prefix !== 'aria-') {
	            return;
	          }
	        }
	    }

	    target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	  }
	}

	var endOfStartTag = stringToPrecomputedChunk('>');
	var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');

	function pushInnerHTML(target, innerHTML, children) {
	  if (innerHTML != null) {
	    if (children != null) {
	      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
	    }

	    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
	      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
	    }

	    var html = innerHTML.__html;

	    if (html !== null && html !== undefined) {
	      {
	        checkHtmlStringCoercion(html);
	      }

	      target.push(stringToChunk('' + html));
	    }
	  }
	} // TODO: Move these to ResponseState so that we warn for every request.
	// It would help debugging in stateful servers (e.g. service worker).


	var didWarnDefaultInputValue = false;
	var didWarnDefaultChecked = false;
	var didWarnDefaultSelectValue = false;
	var didWarnDefaultTextareaValue = false;
	var didWarnInvalidOptionChildren = false;
	var didWarnInvalidOptionInnerHTML = false;
	var didWarnSelectedSetOnOption = false;

	function checkSelectProp(props, propName) {
	  {
	    var value = props[propName];

	    if (value != null) {
	      var array = isArray(value);

	      if (props.multiple && !array) {
	        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
	      } else if (!props.multiple && array) {
	        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
	      }
	    }
	  }
	}

	function pushStartSelect(target, props, responseState) {
	  {
	    checkControlledValueProps('select', props);
	    checkSelectProp(props, 'value');
	    checkSelectProp(props, 'defaultValue');

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
	      error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

	      didWarnDefaultSelectValue = true;
	    }
	  }

	  target.push(startChunkForTag('select'));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          // TODO: This doesn't really make sense for select since it can't use the controlled
	          // value in the innerHTML.
	          innerHTML = propValue;
	          break;

	        case 'defaultValue':
	        case 'value':
	          // These are set on the Context instead and applied to the nested options.
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	function flattenOptionChildren(children) {
	  var content = ''; // Flatten children and warn if they aren't strings or numbers;
	  // invalid types are ignored.

	  React.Children.forEach(children, function (child) {
	    if (child == null) {
	      return;
	    }

	    content += child;

	    {
	      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
	        didWarnInvalidOptionChildren = true;

	        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
	      }
	    }
	  });
	  return content;
	}

	var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');

	function pushStartOption(target, props, responseState, formatContext) {
	  var selectedValue = formatContext.selectedValue;
	  target.push(startChunkForTag('option'));
	  var children = null;
	  var value = null;
	  var selected = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'selected':
	          // ignore
	          selected = propValue;

	          {
	            // TODO: Remove support for `selected` in <option>.
	            if (!didWarnSelectedSetOnOption) {
	              error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

	              didWarnSelectedSetOnOption = true;
	            }
	          }

	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;
	        // eslint-disable-next-line-no-fallthrough

	        case 'value':
	          value = propValue;
	        // We intentionally fallthrough to also set the attribute on the node.
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (selectedValue != null) {
	    var stringValue;

	    if (value !== null) {
	      {
	        checkAttributeStringCoercion(value, 'value');
	      }

	      stringValue = '' + value;
	    } else {
	      {
	        if (innerHTML !== null) {
	          if (!didWarnInvalidOptionInnerHTML) {
	            didWarnInvalidOptionInnerHTML = true;

	            error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
	          }
	        }
	      }

	      stringValue = flattenOptionChildren(children);
	    }

	    if (isArray(selectedValue)) {
	      // multiple
	      for (var i = 0; i < selectedValue.length; i++) {
	        {
	          checkAttributeStringCoercion(selectedValue[i], 'value');
	        }

	        var v = '' + selectedValue[i];

	        if (v === stringValue) {
	          target.push(selectedMarkerAttribute);
	          break;
	        }
	      }
	    } else {
	      {
	        checkAttributeStringCoercion(selectedValue, 'select.value');
	      }

	      if ('' + selectedValue === stringValue) {
	        target.push(selectedMarkerAttribute);
	      }
	    }
	  } else if (selected) {
	    target.push(selectedMarkerAttribute);
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	function pushInput(target, props, responseState) {
	  {
	    checkControlledValueProps('input', props);

	    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
	      error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

	      didWarnDefaultChecked = true;
	    }

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
	      error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

	      didWarnDefaultInputValue = true;
	    }
	  }

	  target.push(startChunkForTag('input'));
	  var value = null;
	  var defaultValue = null;
	  var checked = null;
	  var defaultChecked = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        case 'defaultChecked':
	          defaultChecked = propValue;
	          break;

	        case 'defaultValue':
	          defaultValue = propValue;
	          break;

	        case 'checked':
	          checked = propValue;
	          break;

	        case 'value':
	          value = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (checked !== null) {
	    pushAttribute(target, responseState, 'checked', checked);
	  } else if (defaultChecked !== null) {
	    pushAttribute(target, responseState, 'checked', defaultChecked);
	  }

	  if (value !== null) {
	    pushAttribute(target, responseState, 'value', value);
	  } else if (defaultValue !== null) {
	    pushAttribute(target, responseState, 'value', defaultValue);
	  }

	  target.push(endOfStartTagSelfClosing);
	  return null;
	}

	function pushStartTextArea(target, props, responseState) {
	  {
	    checkControlledValueProps('textarea', props);

	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
	      error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

	      didWarnDefaultTextareaValue = true;
	    }
	  }

	  target.push(startChunkForTag('textarea'));
	  var value = null;
	  var defaultValue = null;
	  var children = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'value':
	          value = propValue;
	          break;

	        case 'defaultValue':
	          defaultValue = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  if (value === null && defaultValue !== null) {
	    value = defaultValue;
	  }

	  target.push(endOfStartTag); // TODO (yungsters): Remove support for children content in <textarea>.

	  if (children != null) {
	    {
	      error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	    }

	    if (value != null) {
	      throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
	    }

	    if (isArray(children)) {
	      if (children.length > 1) {
	        throw new Error('<textarea> can only have at most one child.');
	      } // TODO: remove the coercion and the DEV check below because it will
	      // always be overwritten by the coercion several lines below it. #22309


	      {
	        checkHtmlStringCoercion(children[0]);
	      }

	      value = '' + children[0];
	    }

	    {
	      checkHtmlStringCoercion(children);
	    }

	    value = '' + children;
	  }

	  if (typeof value === 'string' && value[0] === '\n') {
	    // text/html ignores the first character in these tags if it's a newline
	    // Prefer to break application/xml over text/html (for now) by adding
	    // a newline specifically to get eaten by the parser. (Alternately for
	    // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	    // \r is normalized out by HTMLTextAreaElement#value.)
	    // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	    // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	    // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	    // See: Parsing of "textarea" "listing" and "pre" elements
	    //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	    target.push(leadingNewline);
	  } // ToString and push directly instead of recurse over children.
	  // We don't really support complex children in the value anyway.
	  // This also currently avoids a trailing comment node which breaks textarea.


	  if (value !== null) {
	    {
	      checkAttributeStringCoercion(value, 'value');
	    }

	    target.push(stringToChunk(encodeHTMLTextNode('' + value)));
	  }

	  return null;
	}

	function pushSelfClosing(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTagSelfClosing);
	  return null;
	}

	function pushStartMenuItem(target, props, responseState) {
	  target.push(startChunkForTag('menuitem'));

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	        case 'dangerouslySetInnerHTML':
	          throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  return null;
	}

	function pushStartTitle(target, props, responseState) {
	  target.push(startChunkForTag('title'));
	  var children = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
	        // eslint-disable-next-line-no-fallthrough

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);

	  {
	    var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;

	    if (Array.isArray(children) && children.length > 1) {
	      error('A title element received an array with more than 1 element as children. ' + 'In browsers title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    } else if (child != null && child.$$typeof != null) {
	      error('A title element received a React element for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    } else if (child != null && typeof child !== 'string' && typeof child !== 'number') {
	      error('A title element received a value that was not a string or number for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
	    }
	  }

	  return children;
	}

	function pushStartGenericElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);

	  if (typeof children === 'string') {
	    // Special case children as a string to avoid the unnecessary comment.
	    // TODO: Remove this special case after the general optimization is in place.
	    target.push(stringToChunk(encodeHTMLTextNode(children)));
	    return null;
	  }

	  return children;
	}

	function pushStartCustomElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        case 'style':
	          pushStyle(target, responseState, propValue);
	          break;

	        case 'suppressContentEditableWarning':
	        case 'suppressHydrationWarning':
	          // Ignored. These are built-in to React on the client.
	          break;

	        default:
	          if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
	            target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
	          }

	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  return children;
	}

	var leadingNewline = stringToPrecomputedChunk('\n');

	function pushStartPreformattedElement(target, props, tag, responseState) {
	  target.push(startChunkForTag(tag));
	  var children = null;
	  var innerHTML = null;

	  for (var propKey in props) {
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];

	      if (propValue == null) {
	        continue;
	      }

	      switch (propKey) {
	        case 'children':
	          children = propValue;
	          break;

	        case 'dangerouslySetInnerHTML':
	          innerHTML = propValue;
	          break;

	        default:
	          pushAttribute(target, responseState, propKey, propValue);
	          break;
	      }
	    }
	  }

	  target.push(endOfStartTag); // text/html ignores the first character in these tags if it's a newline
	  // Prefer to break application/xml over text/html (for now) by adding
	  // a newline specifically to get eaten by the parser. (Alternately for
	  // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	  // \r is normalized out by HTMLTextAreaElement#value.)
	  // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	  // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	  // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	  // See: Parsing of "textarea" "listing" and "pre" elements
	  //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	  // TODO: This doesn't deal with the case where the child is an array
	  // or component that returns a string.

	  if (innerHTML != null) {
	    if (children != null) {
	      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
	    }

	    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
	      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
	    }

	    var html = innerHTML.__html;

	    if (html !== null && html !== undefined) {
	      if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
	        target.push(leadingNewline, stringToChunk(html));
	      } else {
	        {
	          checkHtmlStringCoercion(html);
	        }

	        target.push(stringToChunk('' + html));
	      }
	    }
	  }

	  if (typeof children === 'string' && children[0] === '\n') {
	    target.push(leadingNewline);
	  }

	  return children;
	} // We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name


	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

	var validatedTagCache = new Map();

	function startChunkForTag(tag) {
	  var tagStartChunk = validatedTagCache.get(tag);

	  if (tagStartChunk === undefined) {
	    if (!VALID_TAG_REGEX.test(tag)) {
	      throw new Error("Invalid tag: " + tag);
	    }

	    tagStartChunk = stringToPrecomputedChunk('<' + tag);
	    validatedTagCache.set(tag, tagStartChunk);
	  }

	  return tagStartChunk;
	}

	var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
	function pushStartInstance(target, type, props, responseState, formatContext) {
	  {
	    validateProperties(type, props);
	    validateProperties$1(type, props);
	    validateProperties$2(type, props, null);

	    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
	      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
	    }

	    if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
	      if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
	        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
	      }
	    }
	  }

	  switch (type) {
	    // Special tags
	    case 'select':
	      return pushStartSelect(target, props, responseState);

	    case 'option':
	      return pushStartOption(target, props, responseState, formatContext);

	    case 'textarea':
	      return pushStartTextArea(target, props, responseState);

	    case 'input':
	      return pushInput(target, props, responseState);

	    case 'menuitem':
	      return pushStartMenuItem(target, props, responseState);

	    case 'title':
	      return pushStartTitle(target, props, responseState);
	    // Newline eating tags

	    case 'listing':
	    case 'pre':
	      {
	        return pushStartPreformattedElement(target, props, type, responseState);
	      }
	    // Omitted close tags

	    case 'area':
	    case 'base':
	    case 'br':
	    case 'col':
	    case 'embed':
	    case 'hr':
	    case 'img':
	    case 'keygen':
	    case 'link':
	    case 'meta':
	    case 'param':
	    case 'source':
	    case 'track':
	    case 'wbr':
	      {
	        return pushSelfClosing(target, props, type, responseState);
	      }
	    // These are reserved SVG and MathML elements, that are never custom elements.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts

	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      {
	        return pushStartGenericElement(target, props, type, responseState);
	      }

	    case 'html':
	      {
	        if (formatContext.insertionMode === ROOT_HTML_MODE) {
	          // If we're rendering the html tag and we're at the root (i.e. not in foreignObject)
	          // then we also emit the DOCTYPE as part of the root content as a convenience for
	          // rendering the whole document.
	          target.push(DOCTYPE);
	        }

	        return pushStartGenericElement(target, props, type, responseState);
	      }

	    default:
	      {
	        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
	          // Generic element
	          return pushStartGenericElement(target, props, type, responseState);
	        } else {
	          // Custom element
	          return pushStartCustomElement(target, props, type, responseState);
	        }
	      }
	  }
	}
	var endTag1 = stringToPrecomputedChunk('</');
	var endTag2 = stringToPrecomputedChunk('>');
	function pushEndInstance(target, type, props) {
	  switch (type) {
	    // Omitted close tags
	    // TODO: Instead of repeating this switch we could try to pass a flag from above.
	    // That would require returning a tuple. Which might be ok if it gets inlined.
	    case 'area':
	    case 'base':
	    case 'br':
	    case 'col':
	    case 'embed':
	    case 'hr':
	    case 'img':
	    case 'input':
	    case 'keygen':
	    case 'link':
	    case 'meta':
	    case 'param':
	    case 'source':
	    case 'track':
	    case 'wbr':
	      {
	        // No close tag needed.
	        break;
	      }

	    default:
	      {
	        target.push(endTag1, stringToChunk(type), endTag2);
	      }
	  }
	}
	function writeCompletedRoot(destination, responseState) {
	  var bootstrapChunks = responseState.bootstrapChunks;
	  var i = 0;

	  for (; i < bootstrapChunks.length - 1; i++) {
	    writeChunk(destination, bootstrapChunks[i]);
	  }

	  if (i < bootstrapChunks.length) {
	    return writeChunkAndReturn(destination, bootstrapChunks[i]);
	  }

	  return true;
	} // Structural Nodes
	// A placeholder is a node inside a hidden partial tree that can be filled in later, but before
	// display. It's never visible to users. We use the template tag because it can be used in every
	// type of parent. <script> tags also work in every other tag except <colgroup>.

	var placeholder1 = stringToPrecomputedChunk('<template id="');
	var placeholder2 = stringToPrecomputedChunk('"></template>');
	function writePlaceholder(destination, responseState, id) {
	  writeChunk(destination, placeholder1);
	  writeChunk(destination, responseState.placeholderPrefix);
	  var formattedID = stringToChunk(id.toString(16));
	  writeChunk(destination, formattedID);
	  return writeChunkAndReturn(destination, placeholder2);
	} // Suspense boundaries are encoded as comments.

	var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
	var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
	var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
	var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
	var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
	var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
	var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
	var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
	var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
	var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
	var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
	function writeStartCompletedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
	}
	function writeStartPendingSuspenseBoundary(destination, responseState, id) {
	  writeChunk(destination, startPendingSuspenseBoundary1);

	  if (id === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  writeChunk(destination, id);
	  return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
	}
	function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
	  var result;
	  result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
	  writeChunk(destination, clientRenderedSuspenseBoundaryError1);

	  if (errorDigest) {
	    writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
	    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
	    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	  }

	  {
	    if (errorMesssage) {
	      writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
	      writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
	      writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	    }

	    if (errorComponentStack) {
	      writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
	      writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
	      writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
	    }
	  }

	  result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
	  return result;
	}
	function writeEndCompletedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function writeEndPendingSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
	var startSegmentHTML2 = stringToPrecomputedChunk('">');
	var endSegmentHTML = stringToPrecomputedChunk('</div>');
	var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
	var startSegmentSVG2 = stringToPrecomputedChunk('">');
	var endSegmentSVG = stringToPrecomputedChunk('</svg>');
	var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
	var startSegmentMathML2 = stringToPrecomputedChunk('">');
	var endSegmentMathML = stringToPrecomputedChunk('</math>');
	var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
	var startSegmentTable2 = stringToPrecomputedChunk('">');
	var endSegmentTable = stringToPrecomputedChunk('</table>');
	var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
	var startSegmentTableBody2 = stringToPrecomputedChunk('">');
	var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
	var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
	var startSegmentTableRow2 = stringToPrecomputedChunk('">');
	var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
	var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
	var startSegmentColGroup2 = stringToPrecomputedChunk('">');
	var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
	function writeStartSegment(destination, responseState, formatContext, id) {
	  switch (formatContext.insertionMode) {
	    case ROOT_HTML_MODE:
	    case HTML_MODE:
	      {
	        writeChunk(destination, startSegmentHTML);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentHTML2);
	      }

	    case SVG_MODE:
	      {
	        writeChunk(destination, startSegmentSVG);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentSVG2);
	      }

	    case MATHML_MODE:
	      {
	        writeChunk(destination, startSegmentMathML);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentMathML2);
	      }

	    case HTML_TABLE_MODE:
	      {
	        writeChunk(destination, startSegmentTable);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTable2);
	      }
	    // TODO: For the rest of these, there will be extra wrapper nodes that never
	    // get deleted from the document. We need to delete the table too as part
	    // of the injected scripts. They are invisible though so it's not too terrible
	    // and it's kind of an edge case to suspend in a table. Totally supported though.

	    case HTML_TABLE_BODY_MODE:
	      {
	        writeChunk(destination, startSegmentTableBody);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTableBody2);
	      }

	    case HTML_TABLE_ROW_MODE:
	      {
	        writeChunk(destination, startSegmentTableRow);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentTableRow2);
	      }

	    case HTML_COLGROUP_MODE:
	      {
	        writeChunk(destination, startSegmentColGroup);
	        writeChunk(destination, responseState.segmentPrefix);
	        writeChunk(destination, stringToChunk(id.toString(16)));
	        return writeChunkAndReturn(destination, startSegmentColGroup2);
	      }

	    default:
	      {
	        throw new Error('Unknown insertion mode. This is a bug in React.');
	      }
	  }
	}
	function writeEndSegment(destination, formatContext) {
	  switch (formatContext.insertionMode) {
	    case ROOT_HTML_MODE:
	    case HTML_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentHTML);
	      }

	    case SVG_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentSVG);
	      }

	    case MATHML_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentMathML);
	      }

	    case HTML_TABLE_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTable);
	      }

	    case HTML_TABLE_BODY_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTableBody);
	      }

	    case HTML_TABLE_ROW_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentTableRow);
	      }

	    case HTML_COLGROUP_MODE:
	      {
	        return writeChunkAndReturn(destination, endSegmentColGroup);
	      }

	    default:
	      {
	        throw new Error('Unknown insertion mode. This is a bug in React.');
	      }
	  }
	} // Instruction Set
	// The following code is the source scripts that we then minify and inline below,
	// with renamed function names that we hope don't collide:
	// const COMMENT_NODE = 8;
	// const SUSPENSE_START_DATA = '$';
	// const SUSPENSE_END_DATA = '/$';
	// const SUSPENSE_PENDING_START_DATA = '$?';
	// const SUSPENSE_FALLBACK_START_DATA = '$!';
	//
	// function clientRenderBoundary(suspenseBoundaryID, errorDigest, errorMsg, errorComponentStack) {
	//   // Find the fallback's first element.
	//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
	//   if (!suspenseIdNode) {
	//     // The user must have already navigated away from this tree.
	//     // E.g. because the parent was hydrated.
	//     return;
	//   }
	//   // Find the boundary around the fallback. This is always the previous node.
	//   const suspenseNode = suspenseIdNode.previousSibling;
	//   // Tag it to be client rendered.
	//   suspenseNode.data = SUSPENSE_FALLBACK_START_DATA;
	//   // assign error metadata to first sibling
	//   let dataset = suspenseIdNode.dataset;
	//   if (errorDigest) dataset.dgst = errorDigest;
	//   if (errorMsg) dataset.msg = errorMsg;
	//   if (errorComponentStack) dataset.stck = errorComponentStack;
	//   // Tell React to retry it if the parent already hydrated.
	//   if (suspenseNode._reactRetry) {
	//     suspenseNode._reactRetry();
	//   }
	// }
	//
	// function completeBoundary(suspenseBoundaryID, contentID) {
	//   // Find the fallback's first element.
	//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
	//   const contentNode = document.getElementById(contentID);
	//   // We'll detach the content node so that regardless of what happens next we don't leave in the tree.
	//   // This might also help by not causing recalcing each time we move a child from here to the target.
	//   contentNode.parentNode.removeChild(contentNode);
	//   if (!suspenseIdNode) {
	//     // The user must have already navigated away from this tree.
	//     // E.g. because the parent was hydrated. That's fine there's nothing to do
	//     // but we have to make sure that we already deleted the container node.
	//     return;
	//   }
	//   // Find the boundary around the fallback. This is always the previous node.
	//   const suspenseNode = suspenseIdNode.previousSibling;
	//
	//   // Clear all the existing children. This is complicated because
	//   // there can be embedded Suspense boundaries in the fallback.
	//   // This is similar to clearSuspenseBoundary in ReactDOMHostConfig.
	//   // TODO: We could avoid this if we never emitted suspense boundaries in fallback trees.
	//   // They never hydrate anyway. However, currently we support incrementally loading the fallback.
	//   const parentInstance = suspenseNode.parentNode;
	//   let node = suspenseNode.nextSibling;
	//   let depth = 0;
	//   do {
	//     if (node && node.nodeType === COMMENT_NODE) {
	//       const data = node.data;
	//       if (data === SUSPENSE_END_DATA) {
	//         if (depth === 0) {
	//           break;
	//         } else {
	//           depth--;
	//         }
	//       } else if (
	//         data === SUSPENSE_START_DATA ||
	//         data === SUSPENSE_PENDING_START_DATA ||
	//         data === SUSPENSE_FALLBACK_START_DATA
	//       ) {
	//         depth++;
	//       }
	//     }
	//
	//     const nextNode = node.nextSibling;
	//     parentInstance.removeChild(node);
	//     node = nextNode;
	//   } while (node);
	//
	//   const endOfBoundary = node;
	//
	//   // Insert all the children from the contentNode between the start and end of suspense boundary.
	//   while (contentNode.firstChild) {
	//     parentInstance.insertBefore(contentNode.firstChild, endOfBoundary);
	//   }
	//   suspenseNode.data = SUSPENSE_START_DATA;
	//   if (suspenseNode._reactRetry) {
	//     suspenseNode._reactRetry();
	//   }
	// }
	//
	// function completeSegment(containerID, placeholderID) {
	//   const segmentContainer = document.getElementById(containerID);
	//   const placeholderNode = document.getElementById(placeholderID);
	//   // We always expect both nodes to exist here because, while we might
	//   // have navigated away from the main tree, we still expect the detached
	//   // tree to exist.
	//   segmentContainer.parentNode.removeChild(segmentContainer);
	//   while (segmentContainer.firstChild) {
	//     placeholderNode.parentNode.insertBefore(
	//       segmentContainer.firstChild,
	//       placeholderNode,
	//     );
	//   }
	//   placeholderNode.parentNode.removeChild(placeholderNode);
	// }

	var completeSegmentFunction = 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
	var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
	var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
	var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
	var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
	var completeSegmentScript2 = stringToPrecomputedChunk('","');
	var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
	function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentCompleteSegmentFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentCompleteSegmentFunction = true;
	    writeChunk(destination, completeSegmentScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, completeSegmentScript1Partial);
	  }

	  writeChunk(destination, responseState.segmentPrefix);
	  var formattedID = stringToChunk(contentSegmentID.toString(16));
	  writeChunk(destination, formattedID);
	  writeChunk(destination, completeSegmentScript2);
	  writeChunk(destination, responseState.placeholderPrefix);
	  writeChunk(destination, formattedID);
	  return writeChunkAndReturn(destination, completeSegmentScript3);
	}
	var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
	var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
	var completeBoundaryScript2 = stringToPrecomputedChunk('","');
	var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
	function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentCompleteBoundaryFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentCompleteBoundaryFunction = true;
	    writeChunk(destination, completeBoundaryScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, completeBoundaryScript1Partial);
	  }

	  if (boundaryID === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  var formattedContentID = stringToChunk(contentSegmentID.toString(16));
	  writeChunk(destination, boundaryID);
	  writeChunk(destination, completeBoundaryScript2);
	  writeChunk(destination, responseState.segmentPrefix);
	  writeChunk(destination, formattedContentID);
	  return writeChunkAndReturn(destination, completeBoundaryScript3);
	}
	var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
	var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
	var clientRenderScript1A = stringToPrecomputedChunk('"');
	var clientRenderScript2 = stringToPrecomputedChunk(')</script>');
	var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
	function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
	  writeChunk(destination, responseState.startInlineScript);

	  if (!responseState.sentClientRenderFunction) {
	    // The first time we write this, we'll need to include the full implementation.
	    responseState.sentClientRenderFunction = true;
	    writeChunk(destination, clientRenderScript1Full);
	  } else {
	    // Future calls can just reuse the same function.
	    writeChunk(destination, clientRenderScript1Partial);
	  }

	  if (boundaryID === null) {
	    throw new Error('An ID must have been assigned before we can complete the boundary.');
	  }

	  writeChunk(destination, boundaryID);
	  writeChunk(destination, clientRenderScript1A);

	  if (errorDigest || errorMessage || errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
	  }

	  if (errorMessage || errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || '')));
	  }

	  if (errorComponentStack) {
	    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
	    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
	  }

	  return writeChunkAndReturn(destination, clientRenderScript2);
	}
	var regexForJSStringsInScripts = /[<\u2028\u2029]/g;

	function escapeJSStringsForInstructionScripts(input) {
	  var escaped = JSON.stringify(input);
	  return escaped.replace(regexForJSStringsInScripts, function (match) {
	    switch (match) {
	      // santizing breaking out of strings and script tags
	      case '<':
	        return "\\u003c";

	      case "\u2028":
	        return "\\u2028";

	      case "\u2029":
	        return "\\u2029";

	      default:
	        {
	          // eslint-disable-next-line react-internal/prod-error-codes
	          throw new Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
	        }
	    }
	  });
	}

	var assign = Object.assign;

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
	var REACT_SCOPE_TYPE = Symbol.for('react.scope');
	var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
	var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
	var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
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

	function describeClassComponentFrame(ctor, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(ctor, true);
	  }
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

	var warnedAboutMissingGetChildContext;

	{
	  warnedAboutMissingGetChildContext = {};
	}

	var emptyContextObject = {};

	{
	  Object.freeze(emptyContextObject);
	}

	function getMaskedContext(type, unmaskedContext) {
	  {
	    var contextTypes = type.contextTypes;

	    if (!contextTypes) {
	      return emptyContextObject;
	    }

	    var context = {};

	    for (var key in contextTypes) {
	      context[key] = unmaskedContext[key];
	    }

	    {
	      var name = getComponentNameFromType(type) || 'Unknown';
	      checkPropTypes(contextTypes, context, 'context', name);
	    }

	    return context;
	  }
	}
	function processChildContext(instance, type, parentContext, childContextTypes) {
	  {
	    // TODO (bvaughn) Replace this behavior with an invariant() in the future.
	    // It has only been added in Fiber to match the (unintentional) behavior in Stack.
	    if (typeof instance.getChildContext !== 'function') {
	      {
	        var componentName = getComponentNameFromType(type) || 'Unknown';

	        if (!warnedAboutMissingGetChildContext[componentName]) {
	          warnedAboutMissingGetChildContext[componentName] = true;

	          error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
	        }
	      }

	      return parentContext;
	    }

	    var childContext = instance.getChildContext();

	    for (var contextKey in childContext) {
	      if (!(contextKey in childContextTypes)) {
	        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
	      }
	    }

	    {
	      var name = getComponentNameFromType(type) || 'Unknown';
	      checkPropTypes(childContextTypes, childContext, 'child context', name);
	    }

	    return assign({}, parentContext, childContext);
	  }
	}

	var rendererSigil;

	{
	  // Use this to detect multiple renderers using the same context
	  rendererSigil = {};
	} // Used to store the parent path of all context overrides in a shared linked list.
	// Forming a reverse tree.


	var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
	// This global (actually thread local) state represents what state all those "current",
	// fields are currently in.

	var currentActiveSnapshot = null;

	function popNode(prev) {
	  {
	    prev.context._currentValue = prev.parentValue;
	  }
	}

	function pushNode(next) {
	  {
	    next.context._currentValue = next.value;
	  }
	}

	function popToNearestCommonAncestor(prev, next) {
	  if (prev === next) ; else {
	    popNode(prev);
	    var parentPrev = prev.parent;
	    var parentNext = next.parent;

	    if (parentPrev === null) {
	      if (parentNext !== null) {
	        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
	      }
	    } else {
	      if (parentNext === null) {
	        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
	      }

	      popToNearestCommonAncestor(parentPrev, parentNext);
	    } // On the way back, we push the new ones that weren't common.


	    pushNode(next);
	  }
	}

	function popAllPrevious(prev) {
	  popNode(prev);
	  var parentPrev = prev.parent;

	  if (parentPrev !== null) {
	    popAllPrevious(parentPrev);
	  }
	}

	function pushAllNext(next) {
	  var parentNext = next.parent;

	  if (parentNext !== null) {
	    pushAllNext(parentNext);
	  }

	  pushNode(next);
	}

	function popPreviousToCommonLevel(prev, next) {
	  popNode(prev);
	  var parentPrev = prev.parent;

	  if (parentPrev === null) {
	    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
	  }

	  if (parentPrev.depth === next.depth) {
	    // We found the same level. Now we just need to find a shared ancestor.
	    popToNearestCommonAncestor(parentPrev, next);
	  } else {
	    // We must still be deeper.
	    popPreviousToCommonLevel(parentPrev, next);
	  }
	}

	function popNextToCommonLevel(prev, next) {
	  var parentNext = next.parent;

	  if (parentNext === null) {
	    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
	  }

	  if (prev.depth === parentNext.depth) {
	    // We found the same level. Now we just need to find a shared ancestor.
	    popToNearestCommonAncestor(prev, parentNext);
	  } else {
	    // We must still be deeper.
	    popNextToCommonLevel(prev, parentNext);
	  }

	  pushNode(next);
	} // Perform context switching to the new snapshot.
	// To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
	// updating all the context's current values. That way reads, always just read the current value.
	// At the cost of updating contexts even if they're never read by this subtree.


	function switchContext(newSnapshot) {
	  // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
	  // We also need to update any new contexts that are now on the stack with the deepest value.
	  // The easiest way to update new contexts is to just reapply them in reverse order from the
	  // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
	  // for that. Therefore this algorithm is recursive.
	  // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
	  // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
	  // 3) Then we reapply new contexts on the way back up the stack.
	  var prev = currentActiveSnapshot;
	  var next = newSnapshot;

	  if (prev !== next) {
	    if (prev === null) {
	      // $FlowFixMe: This has to be non-null since it's not equal to prev.
	      pushAllNext(next);
	    } else if (next === null) {
	      popAllPrevious(prev);
	    } else if (prev.depth === next.depth) {
	      popToNearestCommonAncestor(prev, next);
	    } else if (prev.depth > next.depth) {
	      popPreviousToCommonLevel(prev, next);
	    } else {
	      popNextToCommonLevel(prev, next);
	    }

	    currentActiveSnapshot = next;
	  }
	}
	function pushProvider(context, nextValue) {
	  var prevValue;

	  {
	    prevValue = context._currentValue;
	    context._currentValue = nextValue;

	    {
	      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
	        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
	      }

	      context._currentRenderer = rendererSigil;
	    }
	  }

	  var prevNode = currentActiveSnapshot;
	  var newNode = {
	    parent: prevNode,
	    depth: prevNode === null ? 0 : prevNode.depth + 1,
	    context: context,
	    parentValue: prevValue,
	    value: nextValue
	  };
	  currentActiveSnapshot = newNode;
	  return newNode;
	}
	function popProvider(context) {
	  var prevSnapshot = currentActiveSnapshot;

	  if (prevSnapshot === null) {
	    throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
	  }

	  {
	    if (prevSnapshot.context !== context) {
	      error('The parent context is not the expected context. This is probably a bug in React.');
	    }
	  }

	  {
	    var value = prevSnapshot.parentValue;

	    if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
	      prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
	    } else {
	      prevSnapshot.context._currentValue = value;
	    }

	    {
	      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
	        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
	      }

	      context._currentRenderer = rendererSigil;
	    }
	  }

	  return currentActiveSnapshot = prevSnapshot.parent;
	}
	function getActiveContext() {
	  return currentActiveSnapshot;
	}
	function readContext(context) {
	  var value =  context._currentValue ;
	  return value;
	}

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 *
	 * Note that this module is currently shared and assumed to be stateless.
	 * If this becomes an actual Map, that will break.
	 */
	function get(key) {
	  return key._reactInternals;
	}
	function set(key, value) {
	  key._reactInternals = value;
	}

	var didWarnAboutNoopUpdateForComponent = {};
	var didWarnAboutDeprecatedWillMount = {};
	var didWarnAboutUninitializedState;
	var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
	var didWarnAboutLegacyLifecyclesAndDerivedState;
	var didWarnAboutUndefinedDerivedState;
	var warnOnUndefinedDerivedState;
	var warnOnInvalidCallback;
	var didWarnAboutDirectlyAssigningPropsToState;
	var didWarnAboutContextTypeAndContextTypes;
	var didWarnAboutInvalidateContextType;

	{
	  didWarnAboutUninitializedState = new Set();
	  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
	  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
	  didWarnAboutDirectlyAssigningPropsToState = new Set();
	  didWarnAboutUndefinedDerivedState = new Set();
	  didWarnAboutContextTypeAndContextTypes = new Set();
	  didWarnAboutInvalidateContextType = new Set();
	  var didWarnOnInvalidCallback = new Set();

	  warnOnInvalidCallback = function (callback, callerName) {
	    if (callback === null || typeof callback === 'function') {
	      return;
	    }

	    var key = callerName + '_' + callback;

	    if (!didWarnOnInvalidCallback.has(key)) {
	      didWarnOnInvalidCallback.add(key);

	      error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
	    }
	  };

	  warnOnUndefinedDerivedState = function (type, partialState) {
	    if (partialState === undefined) {
	      var componentName = getComponentNameFromType(type) || 'Component';

	      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
	        didWarnAboutUndefinedDerivedState.add(componentName);

	        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
	      }
	    }
	  };
	}

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;

	    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
	      return;
	    }

	    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

	    didWarnAboutNoopUpdateForComponent[warningKey] = true;
	  }
	}

	var classComponentUpdater = {
	  isMounted: function (inst) {
	    return false;
	  },
	  enqueueSetState: function (inst, payload, callback) {
	    var internals = get(inst);

	    if (internals.queue === null) {
	      warnNoop(inst, 'setState');
	    } else {
	      internals.queue.push(payload);

	      {
	        if (callback !== undefined && callback !== null) {
	          warnOnInvalidCallback(callback, 'setState');
	        }
	      }
	    }
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    var internals = get(inst);
	    internals.replace = true;
	    internals.queue = [payload];

	    {
	      if (callback !== undefined && callback !== null) {
	        warnOnInvalidCallback(callback, 'setState');
	      }
	    }
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    var internals = get(inst);

	    if (internals.queue === null) {
	      warnNoop(inst, 'forceUpdate');
	    } else {
	      {
	        if (callback !== undefined && callback !== null) {
	          warnOnInvalidCallback(callback, 'setState');
	        }
	      }
	    }
	  }
	};

	function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
	  var partialState = getDerivedStateFromProps(nextProps, prevState);

	  {
	    warnOnUndefinedDerivedState(ctor, partialState);
	  } // Merge the partial state and the previous state.


	  var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
	  return newState;
	}

	function constructClassInstance(ctor, props, maskedLegacyContext) {
	  var context = emptyContextObject;
	  var contextType = ctor.contextType;

	  {
	    if ('contextType' in ctor) {
	      var isValid = // Allow null for conditional declaration
	      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

	      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
	        didWarnAboutInvalidateContextType.add(ctor);
	        var addendum = '';

	        if (contextType === undefined) {
	          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
	        } else if (typeof contextType !== 'object') {
	          addendum = ' However, it is set to a ' + typeof contextType + '.';
	        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
	          addendum = ' Did you accidentally pass the Context.Provider instead?';
	        } else if (contextType._context !== undefined) {
	          // <Context.Consumer>
	          addendum = ' Did you accidentally pass the Context.Consumer instead?';
	        } else {
	          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
	        }

	        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
	      }
	    }
	  }

	  if (typeof contextType === 'object' && contextType !== null) {
	    context = readContext(contextType);
	  } else {
	    context = maskedLegacyContext;
	  }

	  var instance = new ctor(props, context);

	  {
	    if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
	      var componentName = getComponentNameFromType(ctor) || 'Component';

	      if (!didWarnAboutUninitializedState.has(componentName)) {
	        didWarnAboutUninitializedState.add(componentName);

	        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
	      }
	    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
	    // Warn about these lifecycles if they are present.
	    // Don't warn about react-lifecycles-compat polyfilled methods though.


	    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
	      var foundWillMountName = null;
	      var foundWillReceivePropsName = null;
	      var foundWillUpdateName = null;

	      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
	        foundWillMountName = 'componentWillMount';
	      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
	        foundWillMountName = 'UNSAFE_componentWillMount';
	      }

	      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
	        foundWillReceivePropsName = 'componentWillReceiveProps';
	      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
	        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	      }

	      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
	        foundWillUpdateName = 'componentWillUpdate';
	      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
	        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	      }

	      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
	        var _componentName = getComponentNameFromType(ctor) || 'Component';

	        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

	        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
	          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

	          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
	        }
	      }
	    }
	  }

	  return instance;
	}

	function checkClassInstance(instance, ctor, newProps) {
	  {
	    var name = getComponentNameFromType(ctor) || 'Component';
	    var renderPresent = instance.render;

	    if (!renderPresent) {
	      if (ctor.prototype && typeof ctor.prototype.render === 'function') {
	        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
	      } else {
	        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
	      }
	    }

	    if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
	      error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
	    }

	    if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
	    }

	    if (instance.propTypes) {
	      error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
	    }

	    if (instance.contextType) {
	      error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
	    }

	    {
	      if (instance.contextTypes) {
	        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
	      }

	      if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
	        didWarnAboutContextTypeAndContextTypes.add(ctor);

	        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
	      }
	    }

	    if (typeof instance.componentShouldUpdate === 'function') {
	      error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
	    }

	    if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
	      error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
	    }

	    if (typeof instance.componentDidUnmount === 'function') {
	      error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
	    }

	    if (typeof instance.componentDidReceiveProps === 'function') {
	      error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
	    }

	    if (typeof instance.componentWillRecieveProps === 'function') {
	      error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
	    }

	    if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
	      error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
	    }

	    var hasMutatedProps = instance.props !== newProps;

	    if (instance.props !== undefined && hasMutatedProps) {
	      error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
	    }

	    if (instance.defaultProps) {
	      error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
	    }

	    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
	      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

	      error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
	    }

	    if (typeof instance.getDerivedStateFromProps === 'function') {
	      error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
	    }

	    if (typeof instance.getDerivedStateFromError === 'function') {
	      error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
	    }

	    if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
	      error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
	    }

	    var _state = instance.state;

	    if (_state && (typeof _state !== 'object' || isArray(_state))) {
	      error('%s.state: must be set to an object or null', name);
	    }

	    if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
	      error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
	    }
	  }
	}

	function callComponentWillMount(type, instance) {
	  var oldState = instance.state;

	  if (typeof instance.componentWillMount === 'function') {
	    {
	      if ( instance.componentWillMount.__suppressDeprecationWarning !== true) {
	        var componentName = getComponentNameFromType(type) || 'Unknown';

	        if (!didWarnAboutDeprecatedWillMount[componentName]) {
	          warn( // keep this warning in sync with ReactStrictModeWarning.js
	          'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);

	          didWarnAboutDeprecatedWillMount[componentName] = true;
	        }
	      }
	    }

	    instance.componentWillMount();
	  }

	  if (typeof instance.UNSAFE_componentWillMount === 'function') {
	    instance.UNSAFE_componentWillMount();
	  }

	  if (oldState !== instance.state) {
	    {
	      error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
	    }

	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	  }
	}

	function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
	  if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
	    var oldQueue = internalInstance.queue;
	    var oldReplace = internalInstance.replace;
	    internalInstance.queue = null;
	    internalInstance.replace = false;

	    if (oldReplace && oldQueue.length === 1) {
	      inst.state = oldQueue[0];
	    } else {
	      var nextState = oldReplace ? oldQueue[0] : inst.state;
	      var dontMutate = true;

	      for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
	        var partial = oldQueue[i];
	        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;

	        if (partialState != null) {
	          if (dontMutate) {
	            dontMutate = false;
	            nextState = assign({}, nextState, partialState);
	          } else {
	            assign(nextState, partialState);
	          }
	        }
	      }

	      inst.state = nextState;
	    }
	  } else {
	    internalInstance.queue = null;
	  }
	} // Invokes the mount life-cycles on a previously never rendered instance.


	function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
	  {
	    checkClassInstance(instance, ctor, newProps);
	  }

	  var initialState = instance.state !== undefined ? instance.state : null;
	  instance.updater = classComponentUpdater;
	  instance.props = newProps;
	  instance.state = initialState; // We don't bother initializing the refs object on the server, since we're not going to resolve them anyway.
	  // The internal instance will be used to manage updates that happen during this mount.

	  var internalInstance = {
	    queue: [],
	    replace: false
	  };
	  set(instance, internalInstance);
	  var contextType = ctor.contextType;

	  if (typeof contextType === 'object' && contextType !== null) {
	    instance.context = readContext(contextType);
	  } else {
	    instance.context = maskedLegacyContext;
	  }

	  {
	    if (instance.state === newProps) {
	      var componentName = getComponentNameFromType(ctor) || 'Component';

	      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
	        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

	        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
	      }
	    }
	  }

	  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

	  if (typeof getDerivedStateFromProps === 'function') {
	    instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
	  } // In order to support react-lifecycles-compat polyfilled components,
	  // Unsafe lifecycles should not be invoked for components using the new APIs.


	  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
	    callComponentWillMount(ctor, instance); // If we had additional state updates during this life-cycle, let's
	    // process them now.

	    processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
	  }
	}

	// Ids are base 32 strings whose binary representation corresponds to the
	// position of a node in a tree.
	// Every time the tree forks into multiple children, we add additional bits to
	// the left of the sequence that represent the position of the child within the
	// current level of children.
	//
	//      00101       00010001011010101
	//      ╰─┬─╯       ╰───────┬───────╯
	//   Fork 5 of 20       Parent id
	//
	// The leading 0s are important. In the above example, you only need 3 bits to
	// represent slot 5. However, you need 5 bits to represent all the forks at
	// the current level, so we must account for the empty bits at the end.
	//
	// For this same reason, slots are 1-indexed instead of 0-indexed. Otherwise,
	// the zeroth id at a level would be indistinguishable from its parent.
	//
	// If a node has only one child, and does not materialize an id (i.e. does not
	// contain a useId hook), then we don't need to allocate any space in the
	// sequence. It's treated as a transparent indirection. For example, these two
	// trees produce the same ids:
	//
	// <>                          <>
	//   <Indirection>               <A />
	//     <A />                     <B />
	//   </Indirection>            </>
	//   <B />
	// </>
	//
	// However, we cannot skip any node that materializes an id. Otherwise, a parent
	// id that does not fork would be indistinguishable from its child id. For
	// example, this tree does not fork, but the parent and child must have
	// different ids.
	//
	// <Parent>
	//   <Child />
	// </Parent>
	//
	// To handle this scenario, every time we materialize an id, we allocate a
	// new level with a single slot. You can think of this as a fork with only one
	// prong, or an array of children with length 1.
	//
	// It's possible for the size of the sequence to exceed 32 bits, the max
	// size for bitwise operations. When this happens, we make more room by
	// converting the right part of the id to a string and storing it in an overflow
	// variable. We use a base 32 string representation, because 32 is the largest
	// power of 2 that is supported by toString(). We want the base to be large so
	// that the resulting ids are compact, and we want the base to be a power of 2
	// because every log2(base) bits corresponds to a single character, i.e. every
	// log2(32) = 5 bits. That means we can lop bits off the end 5 at a time without
	// affecting the final result.
	var emptyTreeContext = {
	  id: 1,
	  overflow: ''
	};
	function getTreeId(context) {
	  var overflow = context.overflow;
	  var idWithLeadingBit = context.id;
	  var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
	  return id.toString(32) + overflow;
	}
	function pushTreeContext(baseContext, totalChildren, index) {
	  var baseIdWithLeadingBit = baseContext.id;
	  var baseOverflow = baseContext.overflow; // The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
	  // of the id; we use it to account for leading 0s.

	  var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
	  var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
	  var slot = index + 1;
	  var length = getBitLength(totalChildren) + baseLength; // 30 is the max length we can store without overflowing, taking into
	  // consideration the leading 1 we use to mark the end of the sequence.

	  if (length > 30) {
	    // We overflowed the bitwise-safe range. Fall back to slower algorithm.
	    // This branch assumes the length of the base id is greater than 5; it won't
	    // work for smaller ids, because you need 5 bits per character.
	    //
	    // We encode the id in multiple steps: first the base id, then the
	    // remaining digits.
	    //
	    // Each 5 bit sequence corresponds to a single base 32 character. So for
	    // example, if the current id is 23 bits long, we can convert 20 of those
	    // bits into a string of 4 characters, with 3 bits left over.
	    //
	    // First calculate how many bits in the base id represent a complete
	    // sequence of characters.
	    var numberOfOverflowBits = baseLength - baseLength % 5; // Then create a bitmask that selects only those bits.

	    var newOverflowBits = (1 << numberOfOverflowBits) - 1; // Select the bits, and convert them to a base 32 string.

	    var newOverflow = (baseId & newOverflowBits).toString(32); // Now we can remove those bits from the base id.

	    var restOfBaseId = baseId >> numberOfOverflowBits;
	    var restOfBaseLength = baseLength - numberOfOverflowBits; // Finally, encode the rest of the bits using the normal algorithm. Because
	    // we made more room, this time it won't overflow.

	    var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
	    var restOfNewBits = slot << restOfBaseLength;
	    var id = restOfNewBits | restOfBaseId;
	    var overflow = newOverflow + baseOverflow;
	    return {
	      id: 1 << restOfLength | id,
	      overflow: overflow
	    };
	  } else {
	    // Normal path
	    var newBits = slot << baseLength;

	    var _id = newBits | baseId;

	    var _overflow = baseOverflow;
	    return {
	      id: 1 << length | _id,
	      overflow: _overflow
	    };
	  }
	}

	function getBitLength(number) {
	  return 32 - clz32(number);
	}

	function getLeadingBit(id) {
	  return 1 << getBitLength(id) - 1;
	} // TODO: Math.clz32 is supported in Node 12+. Maybe we can drop the fallback.


	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros.
	// Based on:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

	var log = Math.log;
	var LN2 = Math.LN2;

	function clz32Fallback(x) {
	  var asUint = x >>> 0;

	  if (asUint === 0) {
	    return 32;
	  }

	  return 31 - (log(asUint) / LN2 | 0) | 0;
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var currentlyRenderingComponent = null;
	var currentlyRenderingTask = null;
	var firstWorkInProgressHook = null;
	var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

	var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

	var didScheduleRenderPhaseUpdate = false; // Counts the number of useId hooks in this component

	var localIdCounter = 0; // Lazily created map of render-phase updates

	var renderPhaseUpdates = null; // Counter to prevent infinite loops.

	var numberOfReRenders = 0;
	var RE_RENDER_LIMIT = 25;
	var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

	var currentHookNameInDev;

	function resolveCurrentlyRenderingComponent() {
	  if (currentlyRenderingComponent === null) {
	    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	  }

	  {
	    if (isInHookUserCodeInDev) {
	      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
	    }
	  }

	  return currentlyRenderingComponent;
	}

	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (prevDeps === null) {
	    {
	      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
	    }

	    return false;
	  }

	  {
	    // Don't bother comparing lengths in prod because these arrays should be
	    // passed inline.
	    if (nextDeps.length !== prevDeps.length) {
	      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
	    }
	  }

	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
	    if (objectIs(nextDeps[i], prevDeps[i])) {
	      continue;
	    }

	    return false;
	  }

	  return true;
	}

	function createHook() {
	  if (numberOfReRenders > 0) {
	    throw new Error('Rendered more hooks than during the previous render');
	  }

	  return {
	    memoizedState: null,
	    queue: null,
	    next: null
	  };
	}

	function createWorkInProgressHook() {
	  if (workInProgressHook === null) {
	    // This is the first hook in the list
	    if (firstWorkInProgressHook === null) {
	      isReRender = false;
	      firstWorkInProgressHook = workInProgressHook = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = firstWorkInProgressHook;
	    }
	  } else {
	    if (workInProgressHook.next === null) {
	      isReRender = false; // Append to the end of the list

	      workInProgressHook = workInProgressHook.next = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = workInProgressHook.next;
	    }
	  }

	  return workInProgressHook;
	}

	function prepareToUseHooks(task, componentIdentity) {
	  currentlyRenderingComponent = componentIdentity;
	  currentlyRenderingTask = task;

	  {
	    isInHookUserCodeInDev = false;
	  } // The following should have already been reset
	  // didScheduleRenderPhaseUpdate = false;
	  // localIdCounter = 0;
	  // firstWorkInProgressHook = null;
	  // numberOfReRenders = 0;
	  // renderPhaseUpdates = null;
	  // workInProgressHook = null;


	  localIdCounter = 0;
	}
	function finishHooks(Component, props, children, refOrContext) {
	  // This must be called after every function component to prevent hooks from
	  // being used in classes.
	  while (didScheduleRenderPhaseUpdate) {
	    // Updates were scheduled during the render phase. They are stored in
	    // the `renderPhaseUpdates` map. Call the component again, reusing the
	    // work-in-progress hooks and applying the additional updates on top. Keep
	    // restarting until no more updates are scheduled.
	    didScheduleRenderPhaseUpdate = false;
	    localIdCounter = 0;
	    numberOfReRenders += 1; // Start over from the beginning of the list

	    workInProgressHook = null;
	    children = Component(props, refOrContext);
	  }

	  resetHooksState();
	  return children;
	}
	function checkDidRenderIdHook() {
	  // This should be called immediately after every finishHooks call.
	  // Conceptually, it's part of the return value of finishHooks; it's only a
	  // separate function to avoid using an array tuple.
	  var didRenderIdHook = localIdCounter !== 0;
	  return didRenderIdHook;
	} // Reset the internal hooks state if an error occurs while rendering a component

	function resetHooksState() {
	  {
	    isInHookUserCodeInDev = false;
	  }

	  currentlyRenderingComponent = null;
	  currentlyRenderingTask = null;
	  didScheduleRenderPhaseUpdate = false;
	  firstWorkInProgressHook = null;
	  numberOfReRenders = 0;
	  renderPhaseUpdates = null;
	  workInProgressHook = null;
	}

	function readContext$1(context) {
	  {
	    if (isInHookUserCodeInDev) {
	      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
	    }
	  }

	  return readContext(context);
	}

	function useContext(context) {
	  {
	    currentHookNameInDev = 'useContext';
	  }

	  resolveCurrentlyRenderingComponent();
	  return readContext(context);
	}

	function basicStateReducer(state, action) {
	  // $FlowFixMe: Flow doesn't like mixed types
	  return typeof action === 'function' ? action(state) : action;
	}

	function useState(initialState) {
	  {
	    currentHookNameInDev = 'useState';
	  }

	  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
	  initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  {
	    if (reducer !== basicStateReducer) {
	      currentHookNameInDev = 'useReducer';
	    }
	  }

	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();

	  if (isReRender) {
	    // This is a re-render. Apply the new render phase updates to the previous
	    // current hook.
	    var queue = workInProgressHook.queue;
	    var dispatch = queue.dispatch;

	    if (renderPhaseUpdates !== null) {
	      // Render phase updates are stored in a map of queue -> linked list
	      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	      if (firstRenderPhaseUpdate !== undefined) {
	        renderPhaseUpdates.delete(queue);
	        var newState = workInProgressHook.memoizedState;
	        var update = firstRenderPhaseUpdate;

	        do {
	          // Process this render phase update. We don't have to check the
	          // priority because it will always be the same as the current
	          // render's.
	          var action = update.action;

	          {
	            isInHookUserCodeInDev = true;
	          }

	          newState = reducer(newState, action);

	          {
	            isInHookUserCodeInDev = false;
	          }

	          update = update.next;
	        } while (update !== null);

	        workInProgressHook.memoizedState = newState;
	        return [newState, dispatch];
	      }
	    }

	    return [workInProgressHook.memoizedState, dispatch];
	  } else {
	    {
	      isInHookUserCodeInDev = true;
	    }

	    var initialState;

	    if (reducer === basicStateReducer) {
	      // Special case for `useState`.
	      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
	    } else {
	      initialState = init !== undefined ? init(initialArg) : initialArg;
	    }

	    {
	      isInHookUserCodeInDev = false;
	    }

	    workInProgressHook.memoizedState = initialState;

	    var _queue = workInProgressHook.queue = {
	      last: null,
	      dispatch: null
	    };

	    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

	    return [workInProgressHook.memoizedState, _dispatch];
	  }
	}

	function useMemo(nextCreate, deps) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var nextDeps = deps === undefined ? null : deps;

	  if (workInProgressHook !== null) {
	    var prevState = workInProgressHook.memoizedState;

	    if (prevState !== null) {
	      if (nextDeps !== null) {
	        var prevDeps = prevState[1];

	        if (areHookInputsEqual(nextDeps, prevDeps)) {
	          return prevState[0];
	        }
	      }
	    }
	  }

	  {
	    isInHookUserCodeInDev = true;
	  }

	  var nextValue = nextCreate();

	  {
	    isInHookUserCodeInDev = false;
	  }

	  workInProgressHook.memoizedState = [nextValue, nextDeps];
	  return nextValue;
	}

	function useRef(initialValue) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var previousRef = workInProgressHook.memoizedState;

	  if (previousRef === null) {
	    var ref = {
	      current: initialValue
	    };

	    {
	      Object.seal(ref);
	    }

	    workInProgressHook.memoizedState = ref;
	    return ref;
	  } else {
	    return previousRef;
	  }
	}

	function useLayoutEffect(create, inputs) {
	  {
	    currentHookNameInDev = 'useLayoutEffect';

	    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
	  }
	}

	function dispatchAction(componentIdentity, queue, action) {
	  if (numberOfReRenders >= RE_RENDER_LIMIT) {
	    throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
	  }

	  if (componentIdentity === currentlyRenderingComponent) {
	    // This is a render phase update. Stash it in a lazily-created map of
	    // queue -> linked list of updates. After this render pass, we'll restart
	    // and apply the stashed updates on top of the work-in-progress hook.
	    didScheduleRenderPhaseUpdate = true;
	    var update = {
	      action: action,
	      next: null
	    };

	    if (renderPhaseUpdates === null) {
	      renderPhaseUpdates = new Map();
	    }

	    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	    if (firstRenderPhaseUpdate === undefined) {
	      renderPhaseUpdates.set(queue, update);
	    } else {
	      // Append the update to the end of the list.
	      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

	      while (lastRenderPhaseUpdate.next !== null) {
	        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
	      }

	      lastRenderPhaseUpdate.next = update;
	    }
	  }
	}

	function useCallback(callback, deps) {
	  return useMemo(function () {
	    return callback;
	  }, deps);
	} // TODO Decide on how to implement this hook for server rendering.
	// If a mutation occurs during render, consider triggering a Suspense boundary
	// and falling back to client rendering.

	function useMutableSource(source, getSnapshot, subscribe) {
	  resolveCurrentlyRenderingComponent();
	  return getSnapshot(source._source);
	}

	function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  if (getServerSnapshot === undefined) {
	    throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
	  }

	  return getServerSnapshot();
	}

	function useDeferredValue(value) {
	  resolveCurrentlyRenderingComponent();
	  return value;
	}

	function unsupportedStartTransition() {
	  throw new Error('startTransition cannot be called during server rendering.');
	}

	function useTransition() {
	  resolveCurrentlyRenderingComponent();
	  return [false, unsupportedStartTransition];
	}

	function useId() {
	  var task = currentlyRenderingTask;
	  var treeId = getTreeId(task.treeContext);
	  var responseState = currentResponseState;

	  if (responseState === null) {
	    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
	  }

	  var localId = localIdCounter++;
	  return makeId(responseState, treeId, localId);
	}

	function noop() {}

	var Dispatcher = {
	  readContext: readContext$1,
	  useContext: useContext,
	  useMemo: useMemo,
	  useReducer: useReducer,
	  useRef: useRef,
	  useState: useState,
	  useInsertionEffect: noop,
	  useLayoutEffect: useLayoutEffect,
	  useCallback: useCallback,
	  // useImperativeHandle is not run in the server environment
	  useImperativeHandle: noop,
	  // Effects are not run in the server environment.
	  useEffect: noop,
	  // Debugging effect
	  useDebugValue: noop,
	  useDeferredValue: useDeferredValue,
	  useTransition: useTransition,
	  useId: useId,
	  // Subscriptions are not setup in a server environment.
	  useMutableSource: useMutableSource,
	  useSyncExternalStore: useSyncExternalStore
	};

	var currentResponseState = null;
	function setCurrentResponseState(responseState) {
	  currentResponseState = responseState;
	}

	function getStackByComponentStackNode(componentStack) {
	  try {
	    var info = '';
	    var node = componentStack;

	    do {
	      switch (node.tag) {
	        case 0:
	          info += describeBuiltInComponentFrame(node.type, null, null);
	          break;

	        case 1:
	          info += describeFunctionComponentFrame(node.type, null, null);
	          break;

	        case 2:
	          info += describeClassComponentFrame(node.type, null, null);
	          break;
	      }

	      node = node.parent;
	    } while (node);

	    return info;
	  } catch (x) {
	    return '\nError generating stack: ' + x.message + '\n' + x.stack;
	  }
	}

	var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	var PENDING = 0;
	var COMPLETED = 1;
	var FLUSHED = 2;
	var ABORTED = 3;
	var ERRORED = 4;
	var OPEN = 0;
	var CLOSING = 1;
	var CLOSED = 2;
	// This is a default heuristic for how to split up the HTML content into progressive
	// loading. Our goal is to be able to display additional new content about every 500ms.
	// Faster than that is unnecessary and should be throttled on the client. It also
	// adds unnecessary overhead to do more splits. We don't know if it's a higher or lower
	// end device but higher end suffer less from the overhead than lower end does from
	// not getting small enough pieces. We error on the side of low end.
	// We base this on low end 3G speeds which is about 500kbits per second. We assume
	// that there can be a reasonable drop off from max bandwidth which leaves you with
	// as little as 80%. We can receive half of that each 500ms - at best. In practice,
	// a little bandwidth is lost to processing and contention - e.g. CSS and images that
	// are downloaded along with the main content. So we estimate about half of that to be
	// the lower end throughput. In other words, we expect that you can at least show
	// about 12.5kb of content per 500ms. Not counting starting latency for the first
	// paint.
	// 500 * 1024 / 8 * .8 * 0.5 / 2
	var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;

	function defaultErrorHandler(error) {
	  console['error'](error); // Don't transform to our wrapper

	  return null;
	}

	function noop$1() {}

	function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
	  var pingedTasks = [];
	  var abortSet = new Set();
	  var request = {
	    destination: null,
	    responseState: responseState,
	    progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
	    status: OPEN,
	    fatalError: null,
	    nextSegmentId: 0,
	    allPendingTasks: 0,
	    pendingRootTasks: 0,
	    completedRootSegment: null,
	    abortableTasks: abortSet,
	    pingedTasks: pingedTasks,
	    clientRenderedBoundaries: [],
	    completedBoundaries: [],
	    partialBoundaries: [],
	    onError: onError === undefined ? defaultErrorHandler : onError,
	    onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
	    onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
	    onShellError: onShellError === undefined ? noop$1 : onShellError,
	    onFatalError: onFatalError === undefined ? noop$1 : onFatalError
	  }; // This segment represents the root fallback.

	  var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, // Root segments are never embedded in Text on either edge
	  false, false); // There is no parent so conceptually, we're unblocked to flush this segment.

	  rootSegment.parentFlushed = true;
	  var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
	  pingedTasks.push(rootTask);
	  return request;
	}

	function pingTask(request, task) {
	  var pingedTasks = request.pingedTasks;
	  pingedTasks.push(task);

	  if (pingedTasks.length === 1) {
	    scheduleWork(function () {
	      return performWork(request);
	    });
	  }
	}

	function createSuspenseBoundary(request, fallbackAbortableTasks) {
	  return {
	    id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
	    rootSegmentID: -1,
	    parentFlushed: false,
	    pendingTasks: 0,
	    forceClientRender: false,
	    completedSegments: [],
	    byteSize: 0,
	    fallbackAbortableTasks: fallbackAbortableTasks,
	    errorDigest: null
	  };
	}

	function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
	  request.allPendingTasks++;

	  if (blockedBoundary === null) {
	    request.pendingRootTasks++;
	  } else {
	    blockedBoundary.pendingTasks++;
	  }

	  var task = {
	    node: node,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: blockedSegment,
	    abortSet: abortSet,
	    legacyContext: legacyContext,
	    context: context,
	    treeContext: treeContext
	  };

	  {
	    task.componentStack = null;
	  }

	  abortSet.add(task);
	  return task;
	}

	function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
	  return {
	    status: PENDING,
	    id: -1,
	    // lazily assigned later
	    index: index,
	    parentFlushed: false,
	    chunks: [],
	    children: [],
	    formatContext: formatContext,
	    boundary: boundary,
	    lastPushedText: lastPushedText,
	    textEmbedded: textEmbedded
	  };
	} // DEV-only global reference to the currently executing task


	var currentTaskInDEV = null;

	function getCurrentStackInDEV() {
	  {
	    if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
	      return '';
	    }

	    return getStackByComponentStackNode(currentTaskInDEV.componentStack);
	  }
	}

	function pushBuiltInComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 0,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function pushFunctionComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 1,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function pushClassComponentStackInDEV(task, type) {
	  {
	    task.componentStack = {
	      tag: 2,
	      parent: task.componentStack,
	      type: type
	    };
	  }
	}

	function popComponentStackInDEV(task) {
	  {
	    if (task.componentStack === null) {
	      error('Unexpectedly popped too many stack frames. This is a bug in React.');
	    } else {
	      task.componentStack = task.componentStack.parent;
	    }
	  }
	} // stash the component stack of an unwinding error until it is processed


	var lastBoundaryErrorComponentStackDev = null;

	function captureBoundaryErrorDetailsDev(boundary, error) {
	  {
	    var errorMessage;

	    if (typeof error === 'string') {
	      errorMessage = error;
	    } else if (error && typeof error.message === 'string') {
	      errorMessage = error.message;
	    } else {
	      // eslint-disable-next-line react-internal/safe-string-coercion
	      errorMessage = String(error);
	    }

	    var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
	    lastBoundaryErrorComponentStackDev = null;
	    boundary.errorMessage = errorMessage;
	    boundary.errorComponentStack = errorComponentStack;
	  }
	}

	function logRecoverableError(request, error) {
	  // If this callback errors, we intentionally let that error bubble up to become a fatal error
	  // so that someone fixes the error reporting instead of hiding it.
	  var errorDigest = request.onError(error);

	  if (errorDigest != null && typeof errorDigest !== 'string') {
	    // eslint-disable-next-line react-internal/prod-error-codes
	    throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
	  }

	  return errorDigest;
	}

	function fatalError(request, error) {
	  // This is called outside error handling code such as if the root errors outside
	  // a suspense boundary or if the root suspense boundary's fallback errors.
	  // It's also called if React itself or its host configs errors.
	  var onShellError = request.onShellError;
	  onShellError(error);
	  var onFatalError = request.onFatalError;
	  onFatalError(error);

	  if (request.destination !== null) {
	    request.status = CLOSED;
	    closeWithError(request.destination, error);
	  } else {
	    request.status = CLOSING;
	    request.fatalError = error;
	  }
	}

	function renderSuspenseBoundary(request, task, props) {
	  pushBuiltInComponentStackInDEV(task, 'Suspense');
	  var parentBoundary = task.blockedBoundary;
	  var parentSegment = task.blockedSegment; // Each time we enter a suspense boundary, we split out into a new segment for
	  // the fallback so that we can later replace that segment with the content.
	  // This also lets us split out the main content even if it doesn't suspend,
	  // in case it ends up generating a large subtree of content.

	  var fallback = props.fallback;
	  var content = props.children;
	  var fallbackAbortSet = new Set();
	  var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
	  var insertionIndex = parentSegment.chunks.length; // The children of the boundary segment is actually the fallback.

	  var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext, // boundaries never require text embedding at their edges because comment nodes bound them
	  false, false);
	  parentSegment.children.push(boundarySegment); // The parentSegment has a child Segment at this index so we reset the lastPushedText marker on the parent

	  parentSegment.lastPushedText = false; // This segment is the actual child content. We can start rendering that immediately.

	  var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext, // boundaries never require text embedding at their edges because comment nodes bound them
	  false, false); // We mark the root segment as having its parent flushed. It's not really flushed but there is
	  // no parent segment so there's nothing to wait on.

	  contentRootSegment.parentFlushed = true; // Currently this is running synchronously. We could instead schedule this to pingedTasks.
	  // I suspect that there might be some efficiency benefits from not creating the suspended task
	  // and instead just using the stack if possible.
	  // TODO: Call this directly instead of messing with saving and restoring contexts.
	  // We can reuse the current context and task to render the content immediately without
	  // context switching. We just need to temporarily switch which boundary and which segment
	  // we're writing to. If something suspends, it'll spawn new suspended task with that context.

	  task.blockedBoundary = newBoundary;
	  task.blockedSegment = contentRootSegment;

	  try {
	    // We use the safe form because we don't handle suspending here. Only error handling.
	    renderNode(request, task, content);
	    pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
	    contentRootSegment.status = COMPLETED;
	    queueCompletedSegment(newBoundary, contentRootSegment);

	    if (newBoundary.pendingTasks === 0) {
	      // This must have been the last segment we were waiting on. This boundary is now complete.
	      // Therefore we won't need the fallback. We early return so that we don't have to create
	      // the fallback.
	      popComponentStackInDEV(task);
	      return;
	    }
	  } catch (error) {
	    contentRootSegment.status = ERRORED;
	    newBoundary.forceClientRender = true;
	    newBoundary.errorDigest = logRecoverableError(request, error);

	    {
	      captureBoundaryErrorDetailsDev(newBoundary, error);
	    } // We don't need to decrement any task numbers because we didn't spawn any new task.
	    // We don't need to schedule any task because we know the parent has written yet.
	    // We do need to fallthrough to create the fallback though.

	  } finally {
	    task.blockedBoundary = parentBoundary;
	    task.blockedSegment = parentSegment;
	  } // We create suspended task for the fallback because we don't want to actually work
	  // on it yet in case we finish the main content, so we queue for later.


	  var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);

	  {
	    suspendedFallbackTask.componentStack = task.componentStack;
	  } // TODO: This should be queued at a separate lower priority queue so that we only work
	  // on preparing fallbacks if we don't have any more main content to task on.


	  request.pingedTasks.push(suspendedFallbackTask);
	  popComponentStackInDEV(task);
	}

	function renderHostElement(request, task, type, props) {
	  pushBuiltInComponentStackInDEV(task, type);
	  var segment = task.blockedSegment;
	  var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
	  segment.lastPushedText = false;
	  var prevContext = segment.formatContext;
	  segment.formatContext = getChildFormatContext(prevContext, type, props); // We use the non-destructive form because if something suspends, we still
	  // need to pop back up and finish this subtree of HTML.

	  renderNode(request, task, children); // We expect that errors will fatal the whole task and that we don't need
	  // the correct context. Therefore this is not in a finally.

	  segment.formatContext = prevContext;
	  pushEndInstance(segment.chunks, type);
	  segment.lastPushedText = false;
	  popComponentStackInDEV(task);
	}

	function shouldConstruct$1(Component) {
	  return Component.prototype && Component.prototype.isReactComponent;
	}

	function renderWithHooks(request, task, Component, props, secondArg) {
	  var componentIdentity = {};
	  prepareToUseHooks(task, componentIdentity);
	  var result = Component(props, secondArg);
	  return finishHooks(Component, props, result, secondArg);
	}

	function finishClassComponent(request, task, instance, Component, props) {
	  var nextChildren = instance.render();

	  {
	    if (instance.props !== props) {
	      if (!didWarnAboutReassigningProps) {
	        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
	      }

	      didWarnAboutReassigningProps = true;
	    }
	  }

	  {
	    var childContextTypes = Component.childContextTypes;

	    if (childContextTypes !== null && childContextTypes !== undefined) {
	      var previousContext = task.legacyContext;
	      var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
	      task.legacyContext = mergedContext;
	      renderNodeDestructive(request, task, nextChildren);
	      task.legacyContext = previousContext;
	      return;
	    }
	  }

	  renderNodeDestructive(request, task, nextChildren);
	}

	function renderClassComponent(request, task, Component, props) {
	  pushClassComponentStackInDEV(task, Component);
	  var maskedContext =  getMaskedContext(Component, task.legacyContext) ;
	  var instance = constructClassInstance(Component, props, maskedContext);
	  mountClassInstance(instance, Component, props, maskedContext);
	  finishClassComponent(request, task, instance, Component, props);
	  popComponentStackInDEV(task);
	}

	var didWarnAboutBadClass = {};
	var didWarnAboutModulePatternComponent = {};
	var didWarnAboutContextTypeOnFunctionComponent = {};
	var didWarnAboutGetDerivedStateOnFunctionComponent = {};
	var didWarnAboutReassigningProps = false;
	var didWarnAboutGenerators = false;
	var didWarnAboutMaps = false;
	var hasWarnedAboutUsingContextAsConsumer = false; // This would typically be a function component but we still support module pattern
	// components for some reason.

	function renderIndeterminateComponent(request, task, Component, props) {
	  var legacyContext;

	  {
	    legacyContext = getMaskedContext(Component, task.legacyContext);
	  }

	  pushFunctionComponentStackInDEV(task, Component);

	  {
	    if (Component.prototype && typeof Component.prototype.render === 'function') {
	      var componentName = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutBadClass[componentName]) {
	        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

	        didWarnAboutBadClass[componentName] = true;
	      }
	    }
	  }

	  var value = renderWithHooks(request, task, Component, props, legacyContext);
	  var hasId = checkDidRenderIdHook();

	  {
	    // Support for module components is deprecated and is removed behind a flag.
	    // Whether or not it would crash later, we want to show a good message in DEV first.
	    if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
	      var _componentName = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutModulePatternComponent[_componentName]) {
	        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

	        didWarnAboutModulePatternComponent[_componentName] = true;
	      }
	    }
	  }

	  if ( // Run these checks in production only if the flag is off.
	  // Eventually we'll delete this branch altogether.
	   typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
	    {
	      var _componentName2 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutModulePatternComponent[_componentName2]) {
	        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

	        didWarnAboutModulePatternComponent[_componentName2] = true;
	      }
	    }

	    mountClassInstance(value, Component, props, legacyContext);
	    finishClassComponent(request, task, value, Component, props);
	  } else {

	    {
	      validateFunctionComponentInDev(Component);
	    } // We're now successfully past this task, and we don't have to pop back to
	    // the previous task every again, so we can use the destructive recursive form.


	    if (hasId) {
	      // This component materialized an id. We treat this as its own level, with
	      // a single "child" slot.
	      var prevTreeContext = task.treeContext;
	      var totalChildren = 1;
	      var index = 0;
	      task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

	      try {
	        renderNodeDestructive(request, task, value);
	      } finally {
	        task.treeContext = prevTreeContext;
	      }
	    } else {
	      renderNodeDestructive(request, task, value);
	    }
	  }

	  popComponentStackInDEV(task);
	}

	function validateFunctionComponentInDev(Component) {
	  {
	    if (Component) {
	      if (Component.childContextTypes) {
	        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
	      }
	    }

	    if (typeof Component.getDerivedStateFromProps === 'function') {
	      var _componentName3 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
	        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

	        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
	      }
	    }

	    if (typeof Component.contextType === 'object' && Component.contextType !== null) {
	      var _componentName4 = getComponentNameFromType(Component) || 'Unknown';

	      if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
	        error('%s: Function components do not support contextType.', _componentName4);

	        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
	      }
	    }
	  }
	}

	function resolveDefaultProps(Component, baseProps) {
	  if (Component && Component.defaultProps) {
	    // Resolve default props. Taken from ReactElement
	    var props = assign({}, baseProps);
	    var defaultProps = Component.defaultProps;

	    for (var propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }

	    return props;
	  }

	  return baseProps;
	}

	function renderForwardRef(request, task, type, props, ref) {
	  pushFunctionComponentStackInDEV(task, type.render);
	  var children = renderWithHooks(request, task, type.render, props, ref);
	  var hasId = checkDidRenderIdHook();

	  if (hasId) {
	    // This component materialized an id. We treat this as its own level, with
	    // a single "child" slot.
	    var prevTreeContext = task.treeContext;
	    var totalChildren = 1;
	    var index = 0;
	    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

	    try {
	      renderNodeDestructive(request, task, children);
	    } finally {
	      task.treeContext = prevTreeContext;
	    }
	  } else {
	    renderNodeDestructive(request, task, children);
	  }

	  popComponentStackInDEV(task);
	}

	function renderMemo(request, task, type, props, ref) {
	  var innerType = type.type;
	  var resolvedProps = resolveDefaultProps(innerType, props);
	  renderElement(request, task, innerType, resolvedProps, ref);
	}

	function renderContextConsumer(request, task, context, props) {
	  // The logic below for Context differs depending on PROD or DEV mode. In
	  // DEV mode, we create a separate object for Context.Consumer that acts
	  // like a proxy to Context. This proxy object adds unnecessary code in PROD
	  // so we use the old behaviour (Context.Consumer references Context) to
	  // reduce size and overhead. The separate object references context via
	  // a property called "_context", which also gives us the ability to check
	  // in DEV mode if this property exists or not and warn if it does not.
	  {
	    if (context._context === undefined) {
	      // This may be because it's a Context (rather than a Consumer).
	      // Or it may be because it's older React where they're the same thing.
	      // We only want to warn if we're sure it's a new React.
	      if (context !== context.Consumer) {
	        if (!hasWarnedAboutUsingContextAsConsumer) {
	          hasWarnedAboutUsingContextAsConsumer = true;

	          error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	        }
	      }
	    } else {
	      context = context._context;
	    }
	  }

	  var render = props.children;

	  {
	    if (typeof render !== 'function') {
	      error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
	    }
	  }

	  var newValue = readContext(context);
	  var newChildren = render(newValue);
	  renderNodeDestructive(request, task, newChildren);
	}

	function renderContextProvider(request, task, type, props) {
	  var context = type._context;
	  var value = props.value;
	  var children = props.children;
	  var prevSnapshot;

	  {
	    prevSnapshot = task.context;
	  }

	  task.context = pushProvider(context, value);
	  renderNodeDestructive(request, task, children);
	  task.context = popProvider(context);

	  {
	    if (prevSnapshot !== task.context) {
	      error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
	    }
	  }
	}

	function renderLazyComponent(request, task, lazyComponent, props, ref) {
	  pushBuiltInComponentStackInDEV(task, 'Lazy');
	  var payload = lazyComponent._payload;
	  var init = lazyComponent._init;
	  var Component = init(payload);
	  var resolvedProps = resolveDefaultProps(Component, props);
	  renderElement(request, task, Component, resolvedProps, ref);
	  popComponentStackInDEV(task);
	}

	function renderElement(request, task, type, props, ref) {
	  if (typeof type === 'function') {
	    if (shouldConstruct$1(type)) {
	      renderClassComponent(request, task, type, props);
	      return;
	    } else {
	      renderIndeterminateComponent(request, task, type, props);
	      return;
	    }
	  }

	  if (typeof type === 'string') {
	    renderHostElement(request, task, type, props);
	    return;
	  }

	  switch (type) {
	    // TODO: LegacyHidden acts the same as a fragment. This only works
	    // because we currently assume that every instance of LegacyHidden is
	    // accompanied by a host component wrapper. In the hidden mode, the host
	    // component is given a `hidden` attribute, which ensures that the
	    // initial HTML is not visible. To support the use of LegacyHidden as a
	    // true fragment, without an extra DOM node, we would have to hide the
	    // initial HTML in some other way.
	    // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
	    case REACT_LEGACY_HIDDEN_TYPE:
	    case REACT_DEBUG_TRACING_MODE_TYPE:
	    case REACT_STRICT_MODE_TYPE:
	    case REACT_PROFILER_TYPE:
	    case REACT_FRAGMENT_TYPE:
	      {
	        renderNodeDestructive(request, task, props.children);
	        return;
	      }

	    case REACT_SUSPENSE_LIST_TYPE:
	      {
	        pushBuiltInComponentStackInDEV(task, 'SuspenseList'); // TODO: SuspenseList should control the boundaries.

	        renderNodeDestructive(request, task, props.children);
	        popComponentStackInDEV(task);
	        return;
	      }

	    case REACT_SCOPE_TYPE:
	      {

	        throw new Error('ReactDOMServer does not yet support scope components.');
	      }
	    // eslint-disable-next-line-no-fallthrough

	    case REACT_SUSPENSE_TYPE:
	      {
	        {
	          renderSuspenseBoundary(request, task, props);
	        }

	        return;
	      }
	  }

	  if (typeof type === 'object' && type !== null) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        {
	          renderForwardRef(request, task, type, props, ref);
	          return;
	        }

	      case REACT_MEMO_TYPE:
	        {
	          renderMemo(request, task, type, props, ref);
	          return;
	        }

	      case REACT_PROVIDER_TYPE:
	        {
	          renderContextProvider(request, task, type, props);
	          return;
	        }

	      case REACT_CONTEXT_TYPE:
	        {
	          renderContextConsumer(request, task, type, props);
	          return;
	        }

	      case REACT_LAZY_TYPE:
	        {
	          renderLazyComponent(request, task, type, props);
	          return;
	        }
	    }
	  }

	  var info = '';

	  {
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
	    }
	  }

	  throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
	}

	function validateIterable(iterable, iteratorFn) {
	  {
	    // We don't support rendering Generators because it's a mutation.
	    // See https://github.com/facebook/react/issues/12995
	    if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
	    iterable[Symbol.toStringTag] === 'Generator') {
	      if (!didWarnAboutGenerators) {
	        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
	      }

	      didWarnAboutGenerators = true;
	    } // Warn about using Maps as children


	    if (iterable.entries === iteratorFn) {
	      if (!didWarnAboutMaps) {
	        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	      }

	      didWarnAboutMaps = true;
	    }
	  }
	}

	function renderNodeDestructive(request, task, node) {
	  {
	    // In Dev we wrap renderNodeDestructiveImpl in a try / catch so we can capture
	    // a component stack at the right place in the tree. We don't do this in renderNode
	    // becuase it is not called at every layer of the tree and we may lose frames
	    try {
	      return renderNodeDestructiveImpl(request, task, node);
	    } catch (x) {
	      if (typeof x === 'object' && x !== null && typeof x.then === 'function') ; else {
	        // This is an error, stash the component stack if it is null.
	        lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
	      } // rethrow so normal suspense logic can handle thrown value accordingly


	      throw x;
	    }
	  }
	} // This function by it self renders a node and consumes the task by mutating it
	// to update the current execution state.


	function renderNodeDestructiveImpl(request, task, node) {
	  // Stash the node we're working on. We'll pick up from this task in case
	  // something suspends.
	  task.node = node; // Handle object types

	  if (typeof node === 'object' && node !== null) {
	    switch (node.$$typeof) {
	      case REACT_ELEMENT_TYPE:
	        {
	          var element = node;
	          var type = element.type;
	          var props = element.props;
	          var ref = element.ref;
	          renderElement(request, task, type, props, ref);
	          return;
	        }

	      case REACT_PORTAL_TYPE:
	        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
	      // eslint-disable-next-line-no-fallthrough

	      case REACT_LAZY_TYPE:
	        {
	          var lazyNode = node;
	          var payload = lazyNode._payload;
	          var init = lazyNode._init;
	          var resolvedNode;

	          {
	            try {
	              resolvedNode = init(payload);
	            } catch (x) {
	              if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	                // this Lazy initializer is suspending. push a temporary frame onto the stack so it can be
	                // popped off in spawnNewSuspendedTask. This aligns stack behavior between Lazy in element position
	                // vs Component position. We do not want the frame for Errors so we exclusively do this in
	                // the wakeable branch
	                pushBuiltInComponentStackInDEV(task, 'Lazy');
	              }

	              throw x;
	            }
	          }

	          renderNodeDestructive(request, task, resolvedNode);
	          return;
	        }
	    }

	    if (isArray(node)) {
	      renderChildrenArray(request, task, node);
	      return;
	    }

	    var iteratorFn = getIteratorFn(node);

	    if (iteratorFn) {
	      {
	        validateIterable(node, iteratorFn);
	      }

	      var iterator = iteratorFn.call(node);

	      if (iterator) {
	        // We need to know how many total children are in this set, so that we
	        // can allocate enough id slots to acommodate them. So we must exhaust
	        // the iterator before we start recursively rendering the children.
	        // TODO: This is not great but I think it's inherent to the id
	        // generation algorithm.
	        var step = iterator.next(); // If there are not entries, we need to push an empty so we start by checking that.

	        if (!step.done) {
	          var children = [];

	          do {
	            children.push(step.value);
	            step = iterator.next();
	          } while (!step.done);

	          renderChildrenArray(request, task, children);
	          return;
	        }

	        return;
	      }
	    }

	    var childString = Object.prototype.toString.call(node);
	    throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	  }

	  if (typeof node === 'string') {
	    var segment = task.blockedSegment;
	    segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
	    return;
	  }

	  if (typeof node === 'number') {
	    var _segment = task.blockedSegment;
	    _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, '' + node, request.responseState, _segment.lastPushedText);
	    return;
	  }

	  {
	    if (typeof node === 'function') {
	      error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
	    }
	  }
	}

	function renderChildrenArray(request, task, children) {
	  var totalChildren = children.length;

	  for (var i = 0; i < totalChildren; i++) {
	    var prevTreeContext = task.treeContext;
	    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);

	    try {
	      // We need to use the non-destructive form so that we can safely pop back
	      // up and render the sibling if something suspends.
	      renderNode(request, task, children[i]);
	    } finally {
	      task.treeContext = prevTreeContext;
	    }
	  }
	}

	function spawnNewSuspendedTask(request, task, x) {
	  // Something suspended, we'll need to create a new segment and resolve it later.
	  var segment = task.blockedSegment;
	  var insertionIndex = segment.chunks.length;
	  var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext, // Adopt the parent segment's leading text embed
	  segment.lastPushedText, // Assume we are text embedded at the trailing edge
	  true);
	  segment.children.push(newSegment); // Reset lastPushedText for current Segment since the new Segment "consumed" it

	  segment.lastPushedText = false;
	  var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);

	  {
	    if (task.componentStack !== null) {
	      // We pop one task off the stack because the node that suspended will be tried again,
	      // which will add it back onto the stack.
	      newTask.componentStack = task.componentStack.parent;
	    }
	  }

	  var ping = newTask.ping;
	  x.then(ping, ping);
	} // This is a non-destructive form of rendering a node. If it suspends it spawns
	// a new task and restores the context of this task to what it was before.


	function renderNode(request, task, node) {
	  // TODO: Store segment.children.length here and reset it in case something
	  // suspended partially through writing something.
	  // Snapshot the current context in case something throws to interrupt the
	  // process.
	  var previousFormatContext = task.blockedSegment.formatContext;
	  var previousLegacyContext = task.legacyContext;
	  var previousContext = task.context;
	  var previousComponentStack = null;

	  {
	    previousComponentStack = task.componentStack;
	  }

	  try {
	    return renderNodeDestructive(request, task, node);
	  } catch (x) {
	    resetHooksState();

	    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	      spawnNewSuspendedTask(request, task, x); // Restore the context. We assume that this will be restored by the inner
	      // functions in case nothing throws so we don't use "finally" here.

	      task.blockedSegment.formatContext = previousFormatContext;
	      task.legacyContext = previousLegacyContext;
	      task.context = previousContext; // Restore all active ReactContexts to what they were before.

	      switchContext(previousContext);

	      {
	        task.componentStack = previousComponentStack;
	      }

	      return;
	    } else {
	      // Restore the context. We assume that this will be restored by the inner
	      // functions in case nothing throws so we don't use "finally" here.
	      task.blockedSegment.formatContext = previousFormatContext;
	      task.legacyContext = previousLegacyContext;
	      task.context = previousContext; // Restore all active ReactContexts to what they were before.

	      switchContext(previousContext);

	      {
	        task.componentStack = previousComponentStack;
	      } // We assume that we don't need the correct context.
	      // Let's terminate the rest of the tree and don't render any siblings.


	      throw x;
	    }
	  }
	}

	function erroredTask(request, boundary, segment, error) {
	  // Report the error to a global handler.
	  var errorDigest = logRecoverableError(request, error);

	  if (boundary === null) {
	    fatalError(request, error);
	  } else {
	    boundary.pendingTasks--;

	    if (!boundary.forceClientRender) {
	      boundary.forceClientRender = true;
	      boundary.errorDigest = errorDigest;

	      {
	        captureBoundaryErrorDetailsDev(boundary, error);
	      } // Regardless of what happens next, this boundary won't be displayed,
	      // so we can flush it, if the parent already flushed.


	      if (boundary.parentFlushed) {
	        // We don't have a preference where in the queue this goes since it's likely
	        // to error on the client anyway. However, intentionally client-rendered
	        // boundaries should be flushed earlier so that they can start on the client.
	        // We reuse the same queue for errors.
	        request.clientRenderedBoundaries.push(boundary);
	      }
	    }
	  }

	  request.allPendingTasks--;

	  if (request.allPendingTasks === 0) {
	    var onAllReady = request.onAllReady;
	    onAllReady();
	  }
	}

	function abortTaskSoft(task) {
	  // This aborts task without aborting the parent boundary that it blocks.
	  // It's used for when we didn't need this task to complete the tree.
	  // If task was needed, then it should use abortTask instead.
	  var request = this;
	  var boundary = task.blockedBoundary;
	  var segment = task.blockedSegment;
	  segment.status = ABORTED;
	  finishedTask(request, boundary, segment);
	}

	function abortTask(task, request, reason) {
	  // This aborts the task and aborts the parent that it blocks, putting it into
	  // client rendered mode.
	  var boundary = task.blockedBoundary;
	  var segment = task.blockedSegment;
	  segment.status = ABORTED;

	  if (boundary === null) {
	    request.allPendingTasks--; // We didn't complete the root so we have nothing to show. We can close
	    // the request;

	    if (request.status !== CLOSED) {
	      request.status = CLOSED;

	      if (request.destination !== null) {
	        close(request.destination);
	      }
	    }
	  } else {
	    boundary.pendingTasks--;

	    if (!boundary.forceClientRender) {
	      boundary.forceClientRender = true;

	      var _error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;

	      boundary.errorDigest = request.onError(_error);

	      {
	        var errorPrefix = 'The server did not finish this Suspense boundary: ';

	        if (_error && typeof _error.message === 'string') {
	          _error = errorPrefix + _error.message;
	        } else {
	          // eslint-disable-next-line react-internal/safe-string-coercion
	          _error = errorPrefix + String(_error);
	        }

	        var previousTaskInDev = currentTaskInDEV;
	        currentTaskInDEV = task;

	        try {
	          captureBoundaryErrorDetailsDev(boundary, _error);
	        } finally {
	          currentTaskInDEV = previousTaskInDev;
	        }
	      }

	      if (boundary.parentFlushed) {
	        request.clientRenderedBoundaries.push(boundary);
	      }
	    } // If this boundary was still pending then we haven't already cancelled its fallbacks.
	    // We'll need to abort the fallbacks, which will also error that parent boundary.


	    boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	      return abortTask(fallbackTask, request, reason);
	    });
	    boundary.fallbackAbortableTasks.clear();
	    request.allPendingTasks--;

	    if (request.allPendingTasks === 0) {
	      var onAllReady = request.onAllReady;
	      onAllReady();
	    }
	  }
	}

	function queueCompletedSegment(boundary, segment) {
	  if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
	    // This is an empty segment. There's nothing to write, so we can instead transfer the ID
	    // to the child. That way any existing references point to the child.
	    var childSegment = segment.children[0];
	    childSegment.id = segment.id;
	    childSegment.parentFlushed = true;

	    if (childSegment.status === COMPLETED) {
	      queueCompletedSegment(boundary, childSegment);
	    }
	  } else {
	    var completedSegments = boundary.completedSegments;
	    completedSegments.push(segment);
	  }
	}

	function finishedTask(request, boundary, segment) {
	  if (boundary === null) {
	    if (segment.parentFlushed) {
	      if (request.completedRootSegment !== null) {
	        throw new Error('There can only be one root segment. This is a bug in React.');
	      }

	      request.completedRootSegment = segment;
	    }

	    request.pendingRootTasks--;

	    if (request.pendingRootTasks === 0) {
	      // We have completed the shell so the shell can't error anymore.
	      request.onShellError = noop$1;
	      var onShellReady = request.onShellReady;
	      onShellReady();
	    }
	  } else {
	    boundary.pendingTasks--;

	    if (boundary.forceClientRender) ; else if (boundary.pendingTasks === 0) {
	      // This must have been the last segment we were waiting on. This boundary is now complete.
	      if (segment.parentFlushed) {
	        // Our parent segment already flushed, so we need to schedule this segment to be emitted.
	        // If it is a segment that was aborted, we'll write other content instead so we don't need
	        // to emit it.
	        if (segment.status === COMPLETED) {
	          queueCompletedSegment(boundary, segment);
	        }
	      }

	      if (boundary.parentFlushed) {
	        // The segment might be part of a segment that didn't flush yet, but if the boundary's
	        // parent flushed, we need to schedule the boundary to be emitted.
	        request.completedBoundaries.push(boundary);
	      } // We can now cancel any pending task on the fallback since we won't need to show it anymore.
	      // This needs to happen after we read the parentFlushed flags because aborting can finish
	      // work which can trigger user code, which can start flushing, which can change those flags.


	      boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
	      boundary.fallbackAbortableTasks.clear();
	    } else {
	      if (segment.parentFlushed) {
	        // Our parent already flushed, so we need to schedule this segment to be emitted.
	        // If it is a segment that was aborted, we'll write other content instead so we don't need
	        // to emit it.
	        if (segment.status === COMPLETED) {
	          queueCompletedSegment(boundary, segment);
	          var completedSegments = boundary.completedSegments;

	          if (completedSegments.length === 1) {
	            // This is the first time since we last flushed that we completed anything.
	            // We can schedule this boundary to emit its partially completed segments early
	            // in case the parent has already been flushed.
	            if (boundary.parentFlushed) {
	              request.partialBoundaries.push(boundary);
	            }
	          }
	        }
	      }
	    }
	  }

	  request.allPendingTasks--;

	  if (request.allPendingTasks === 0) {
	    // This needs to be called at the very end so that we can synchronously write the result
	    // in the callback if needed.
	    var onAllReady = request.onAllReady;
	    onAllReady();
	  }
	}

	function retryTask(request, task) {
	  var segment = task.blockedSegment;

	  if (segment.status !== PENDING) {
	    // We completed this by other means before we had a chance to retry it.
	    return;
	  } // We restore the context to what it was when we suspended.
	  // We don't restore it after we leave because it's likely that we'll end up
	  // needing a very similar context soon again.


	  switchContext(task.context);
	  var prevTaskInDEV = null;

	  {
	    prevTaskInDEV = currentTaskInDEV;
	    currentTaskInDEV = task;
	  }

	  try {
	    // We call the destructive form that mutates this task. That way if something
	    // suspends again, we can reuse the same task instead of spawning a new one.
	    renderNodeDestructive(request, task, task.node);
	    pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
	    task.abortSet.delete(task);
	    segment.status = COMPLETED;
	    finishedTask(request, task.blockedBoundary, segment);
	  } catch (x) {
	    resetHooksState();

	    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
	      // Something suspended again, let's pick it back up later.
	      var ping = task.ping;
	      x.then(ping, ping);
	    } else {
	      task.abortSet.delete(task);
	      segment.status = ERRORED;
	      erroredTask(request, task.blockedBoundary, segment, x);
	    }
	  } finally {
	    {
	      currentTaskInDEV = prevTaskInDEV;
	    }
	  }
	}

	function performWork(request) {
	  if (request.status === CLOSED) {
	    return;
	  }

	  var prevContext = getActiveContext();
	  var prevDispatcher = ReactCurrentDispatcher$1.current;
	  ReactCurrentDispatcher$1.current = Dispatcher;
	  var prevGetCurrentStackImpl;

	  {
	    prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
	    ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
	  }

	  var prevResponseState = currentResponseState;
	  setCurrentResponseState(request.responseState);

	  try {
	    var pingedTasks = request.pingedTasks;
	    var i;

	    for (i = 0; i < pingedTasks.length; i++) {
	      var task = pingedTasks[i];
	      retryTask(request, task);
	    }

	    pingedTasks.splice(0, i);

	    if (request.destination !== null) {
	      flushCompletedQueues(request, request.destination);
	    }
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  } finally {
	    setCurrentResponseState(prevResponseState);
	    ReactCurrentDispatcher$1.current = prevDispatcher;

	    {
	      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
	    }

	    if (prevDispatcher === Dispatcher) {
	      // This means that we were in a reentrant work loop. This could happen
	      // in a renderer that supports synchronous work like renderToString,
	      // when it's called from within another renderer.
	      // Normally we don't bother switching the contexts to their root/default
	      // values when leaving because we'll likely need the same or similar
	      // context again. However, when we're inside a synchronous loop like this
	      // we'll to restore the context to what it was before returning.
	      switchContext(prevContext);
	    }
	  }
	}

	function flushSubtree(request, destination, segment) {
	  segment.parentFlushed = true;

	  switch (segment.status) {
	    case PENDING:
	      {
	        // We're emitting a placeholder for this segment to be filled in later.
	        // Therefore we'll need to assign it an ID - to refer to it by.
	        var segmentID = segment.id = request.nextSegmentId++; // When this segment finally completes it won't be embedded in text since it will flush separately

	        segment.lastPushedText = false;
	        segment.textEmbedded = false;
	        return writePlaceholder(destination, request.responseState, segmentID);
	      }

	    case COMPLETED:
	      {
	        segment.status = FLUSHED;
	        var r = true;
	        var chunks = segment.chunks;
	        var chunkIdx = 0;
	        var children = segment.children;

	        for (var childIdx = 0; childIdx < children.length; childIdx++) {
	          var nextChild = children[childIdx]; // Write all the chunks up until the next child.

	          for (; chunkIdx < nextChild.index; chunkIdx++) {
	            writeChunk(destination, chunks[chunkIdx]);
	          }

	          r = flushSegment(request, destination, nextChild);
	        } // Finally just write all the remaining chunks


	        for (; chunkIdx < chunks.length - 1; chunkIdx++) {
	          writeChunk(destination, chunks[chunkIdx]);
	        }

	        if (chunkIdx < chunks.length) {
	          r = writeChunkAndReturn(destination, chunks[chunkIdx]);
	        }

	        return r;
	      }

	    default:
	      {
	        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
	      }
	  }
	}

	function flushSegment(request, destination, segment) {
	  var boundary = segment.boundary;

	  if (boundary === null) {
	    // Not a suspense boundary.
	    return flushSubtree(request, destination, segment);
	  }

	  boundary.parentFlushed = true; // This segment is a Suspense boundary. We need to decide whether to
	  // emit the content or the fallback now.

	  if (boundary.forceClientRender) {
	    // Emit a client rendered suspense boundary wrapper.
	    // We never queue the inner boundary so we'll never emit its content or partial segments.
	    writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
	  } else if (boundary.pendingTasks > 0) {
	    // This boundary is still loading. Emit a pending suspense boundary wrapper.
	    // Assign an ID to refer to the future content by.
	    boundary.rootSegmentID = request.nextSegmentId++;

	    if (boundary.completedSegments.length > 0) {
	      // If this is at least partially complete, we can queue it to be partially emitted early.
	      request.partialBoundaries.push(boundary);
	    } /// This is the first time we should have referenced this ID.


	    var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
	    writeStartPendingSuspenseBoundary(destination, request.responseState, id); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndPendingSuspenseBoundary(destination, request.responseState);
	  } else if (boundary.byteSize > request.progressiveChunkSize) {
	    // This boundary is large and will be emitted separately so that we can progressively show
	    // other content. We add it to the queue during the flush because we have to ensure that
	    // the parent flushes first so that there's something to inject it into.
	    // We also have to make sure that it's emitted into the queue in a deterministic slot.
	    // I.e. we can't insert it here when it completes.
	    // Assign an ID to refer to the future content by.
	    boundary.rootSegmentID = request.nextSegmentId++;
	    request.completedBoundaries.push(boundary); // Emit a pending rendered suspense boundary wrapper.

	    writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id); // Flush the fallback.

	    flushSubtree(request, destination, segment);
	    return writeEndPendingSuspenseBoundary(destination, request.responseState);
	  } else {
	    // We can inline this boundary's content as a complete boundary.
	    writeStartCompletedSuspenseBoundary(destination, request.responseState);
	    var completedSegments = boundary.completedSegments;

	    if (completedSegments.length !== 1) {
	      throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
	    }

	    var contentSegment = completedSegments[0];
	    flushSegment(request, destination, contentSegment);
	    return writeEndCompletedSuspenseBoundary(destination, request.responseState);
	  }
	}

	function flushClientRenderedBoundary(request, destination, boundary) {
	  return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
	}

	function flushSegmentContainer(request, destination, segment) {
	  writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
	  flushSegment(request, destination, segment);
	  return writeEndSegment(destination, segment.formatContext);
	}

	function flushCompletedBoundary(request, destination, boundary) {
	  var completedSegments = boundary.completedSegments;
	  var i = 0;

	  for (; i < completedSegments.length; i++) {
	    var segment = completedSegments[i];
	    flushPartiallyCompletedSegment(request, destination, boundary, segment);
	  }

	  completedSegments.length = 0;
	  return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
	}

	function flushPartialBoundary(request, destination, boundary) {
	  var completedSegments = boundary.completedSegments;
	  var i = 0;

	  for (; i < completedSegments.length; i++) {
	    var segment = completedSegments[i];

	    if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
	      i++;
	      completedSegments.splice(0, i); // Only write as much as the buffer wants. Something higher priority
	      // might want to write later.

	      return false;
	    }
	  }

	  completedSegments.splice(0, i);
	  return true;
	}

	function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
	  if (segment.status === FLUSHED) {
	    // We've already flushed this inline.
	    return true;
	  }

	  var segmentID = segment.id;

	  if (segmentID === -1) {
	    // This segment wasn't previously referred to. This happens at the root of
	    // a boundary. We make kind of a leap here and assume this is the root.
	    var rootSegmentID = segment.id = boundary.rootSegmentID;

	    if (rootSegmentID === -1) {
	      throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
	    }

	    return flushSegmentContainer(request, destination, segment);
	  } else {
	    flushSegmentContainer(request, destination, segment);
	    return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
	  }
	}

	function flushCompletedQueues(request, destination) {
	  beginWriting();

	  try {
	    // The structure of this is to go through each queue one by one and write
	    // until the sink tells us to stop. When we should stop, we still finish writing
	    // that item fully and then yield. At that point we remove the already completed
	    // items up until the point we completed them.
	    // TODO: Emit preloading.
	    // TODO: It's kind of unfortunate to keep checking this array after we've already
	    // emitted the root.
	    var completedRootSegment = request.completedRootSegment;

	    if (completedRootSegment !== null && request.pendingRootTasks === 0) {
	      flushSegment(request, destination, completedRootSegment);
	      request.completedRootSegment = null;
	      writeCompletedRoot(destination, request.responseState);
	    } // We emit client rendering instructions for already emitted boundaries first.
	    // This is so that we can signal to the client to start client rendering them as
	    // soon as possible.


	    var clientRenderedBoundaries = request.clientRenderedBoundaries;
	    var i;

	    for (i = 0; i < clientRenderedBoundaries.length; i++) {
	      var boundary = clientRenderedBoundaries[i];

	      if (!flushClientRenderedBoundary(request, destination, boundary)) ;
	    }

	    clientRenderedBoundaries.splice(0, i); // Next we emit any complete boundaries. It's better to favor boundaries
	    // that are completely done since we can actually show them, than it is to emit
	    // any individual segments from a partially complete boundary.

	    var completedBoundaries = request.completedBoundaries;

	    for (i = 0; i < completedBoundaries.length; i++) {
	      var _boundary = completedBoundaries[i];

	      if (!flushCompletedBoundary(request, destination, _boundary)) ;
	    }

	    completedBoundaries.splice(0, i); // Allow anything written so far to flush to the underlying sink before
	    // we continue with lower priorities.

	    completeWriting(destination);
	    beginWriting(destination); // TODO: Here we'll emit data used by hydration.
	    // Next we emit any segments of any boundaries that are partially complete
	    // but not deeply complete.

	    var partialBoundaries = request.partialBoundaries;

	    for (i = 0; i < partialBoundaries.length; i++) {
	      var _boundary2 = partialBoundaries[i];

	      if (!flushPartialBoundary(request, destination, _boundary2)) {
	        request.destination = null;
	        i++;
	        partialBoundaries.splice(0, i);
	        return;
	      }
	    }

	    partialBoundaries.splice(0, i); // Next we check the completed boundaries again. This may have had
	    // boundaries added to it in case they were too larged to be inlined.
	    // New ones might be added in this loop.

	    var largeBoundaries = request.completedBoundaries;

	    for (i = 0; i < largeBoundaries.length; i++) {
	      var _boundary3 = largeBoundaries[i];

	      if (!flushCompletedBoundary(request, destination, _boundary3)) ;
	    }

	    largeBoundaries.splice(0, i);
	  } finally {
	    completeWriting(destination);

	    if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 // We don't need to check any partially completed segments because
	    // either they have pending task or they're complete.
	    ) {
	        {
	          if (request.abortableTasks.size !== 0) {
	            error('There was still abortable task at the root when we closed. This is a bug in React.');
	          }
	        } // We're done.


	        close(destination);
	      }
	  }
	}

	function startWork(request) {
	  scheduleWork(function () {
	    return performWork(request);
	  });
	}
	function startFlowing(request, destination) {
	  if (request.status === CLOSING) {
	    request.status = CLOSED;
	    closeWithError(destination, request.fatalError);
	    return;
	  }

	  if (request.status === CLOSED) {
	    return;
	  }

	  if (request.destination !== null) {
	    // We're already flowing.
	    return;
	  }

	  request.destination = destination;

	  try {
	    flushCompletedQueues(request, destination);
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  }
	} // This is called to early terminate a request. It puts all pending boundaries in client rendered state.

	function abort(request, reason) {
	  try {
	    var abortableTasks = request.abortableTasks;
	    abortableTasks.forEach(function (task) {
	      return abortTask(task, request, reason);
	    });
	    abortableTasks.clear();

	    if (request.destination !== null) {
	      flushCompletedQueues(request, request.destination);
	    }
	  } catch (error) {
	    logRecoverableError(request, error);
	    fatalError(request, error);
	  }
	}

	function renderToReadableStream(children, options) {
	  return new Promise(function (resolve, reject) {
	    var onFatalError;
	    var onAllReady;
	    var allReady = new Promise(function (res, rej) {
	      onAllReady = res;
	      onFatalError = rej;
	    });

	    function onShellReady() {
	      var stream = new ReadableStream({
	        type: 'bytes',
	        pull: function (controller) {
	          startFlowing(request, controller);
	        },
	        cancel: function (reason) {
	          abort(request);
	        }
	      }, // $FlowFixMe size() methods are not allowed on byte streams.
	      {
	        highWaterMark: 0
	      }); // TODO: Move to sub-classing ReadableStream.

	      stream.allReady = allReady;
	      resolve(stream);
	    }

	    function onShellError(error) {
	      // If the shell errors the caller of `renderToReadableStream` won't have access to `allReady`.
	      // However, `allReady` will be rejected by `onFatalError` as well.
	      // So we need to catch the duplicate, uncatchable fatal error in `allReady` to prevent a `UnhandledPromiseRejection`.
	      allReady.catch(function () {});
	      reject(error);
	    }

	    var request = createRequest(children, createResponseState(options ? options.identifierPrefix : undefined, options ? options.nonce : undefined, options ? options.bootstrapScriptContent : undefined, options ? options.bootstrapScripts : undefined, options ? options.bootstrapModules : undefined), createRootFormatContext(options ? options.namespaceURI : undefined), options ? options.progressiveChunkSize : undefined, options ? options.onError : undefined, onAllReady, onShellReady, onShellError, onFatalError);

	    if (options && options.signal) {
	      var signal = options.signal;

	      var listener = function () {
	        abort(request, signal.reason);
	        signal.removeEventListener('abort', listener);
	      };

	      signal.addEventListener('abort', listener);
	    }

	    startWork(request);
	  });
	}

	reactDomServer_browser_development.renderToReadableStream = renderToReadableStream;
	reactDomServer_browser_development.version = ReactVersion;
	  })();
	}
	return reactDomServer_browser_development;
}

var l, s;
if (process.env.NODE_ENV === 'production') {
  l = requireReactDomServerLegacy_browser_production_min();
  s = requireReactDomServer_browser_production_min();
} else {
  l = requireReactDomServerLegacy_browser_development();
  s = requireReactDomServer_browser_development();
}

server_browser.version = l.version;
server_browser.renderToString = l.renderToString;
server_browser.renderToStaticMarkup = l.renderToStaticMarkup;
server_browser.renderToNodeStream = l.renderToNodeStream;
server_browser.renderToStaticNodeStream = l.renderToStaticNodeStream;
server_browser.renderToReadableStream = s.renderToReadableStream;

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return reactExports.createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React__default.Component.isPrototypeOf(Component) || React__default.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React__default.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React__default.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React__default.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React__default.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in server_browser) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in server_browser) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = server_browser.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = server_browser.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await server_browser.renderToReadableStream(vnode));
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/citedrive-recommends.mdx", _page1],["src/pages/terms-and-conditions.mdx", _page2],["src/pages/privacy-policy.mdx", _page3],["src/pages/design-system.astro", _page4],["src/pages/r-markdown.mdx", _page5],["src/pages/citations.mdx", _page6],["src/pages/discovery/[...doi].astro", _page7],["src/pages/test-slug/[...slug].astro", _page8],["src/pages/overleaf/index.mdx", _page9],["src/pages/overleaf/bibtex/bibliography-styles/index.astro", _page10],["src/pages/overleaf/bibtex/bibliography-styles/[...bibtex].astro", _page11],["src/pages/pricing.astro", _page12],["src/pages/quarto.mdx", _page13],["src/pages/blog/index.astro", _page14],["src/pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx", _page15],["src/pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx", _page16],["src/pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx", _page17],["src/pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx", _page18],["src/pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx", _page19],["src/pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx", _page20],["src/pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx", _page21],["src/pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx", _page22],["src/pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx", _page23],["src/pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx", _page24],["src/pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx", _page25],["src/pages/blog/using-natbib-with-bibtex-and-overleaf.mdx", _page26],["src/pages/blog/literature-management-with-overleaf.mdx", _page27],["src/pages/blog/citedrive-november-2021-release.mdx", _page28],["src/pages/blog/how-to-cite-a-website-in-bibtex.mdx", _page29],["src/pages/blog/citedrive-january-2022-release.mdx", _page30],["src/pages/blog/overleaf-source-editor-upgrade.mdx", _page31],["src/pages/blog/citation-keys-in-bibtex.mdx", _page32],["src/pages/docs/index.astro", _page33],["src/pages/docs/adding-references-from-google-scholar.mdx", _page34],["src/pages/docs/creating-a-new-project-in-citedrive.mdx", _page35],["src/pages/docs/adding-references-from-bibtex.mdx", _page36],["src/pages/docs/adding-references-from-pubmed.mdx", _page37],["src/pages/docs/adding-references-to-journals.mdx", _page38],["src/pages/docs/adding-references-to-websites.mdx", _page39],["src/pages/docs/enabling-biblatex-support.mdx", _page40],["src/pages/docs/enabling-bibtex-support.mdx", _page41],["src/pages/docs/enabling-natbib-support.mdx", _page42],["src/pages/docs/synchronize-database.mdx", _page43],["src/pages/docs/sharing-a-project.mdx", _page44],["src/pages/docs/adding-to-books.mdx", _page45],["src/pages/docs/quick-start.mdx", _page46],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/edge-functions","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"always"}}},{"file":"citedrive-recommends/index.html","links":[],"scripts":[],"routeData":{"route":"/citedrive-recommends","type":"page","pattern":"^\\/citedrive-recommends\\/$","segments":[[{"content":"citedrive-recommends","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/citedrive-recommends.mdx","pathname":"/citedrive-recommends","_meta":{"trailingSlash":"always"}}},{"file":"terms-and-conditions/index.html","links":[],"scripts":[],"routeData":{"route":"/terms-and-conditions","type":"page","pattern":"^\\/terms-and-conditions\\/$","segments":[[{"content":"terms-and-conditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-and-conditions.mdx","pathname":"/terms-and-conditions","_meta":{"trailingSlash":"always"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"routeData":{"route":"/privacy-policy","type":"page","pattern":"^\\/privacy-policy\\/$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.mdx","pathname":"/privacy-policy","_meta":{"trailingSlash":"always"}}},{"file":"design-system/index.html","links":[],"scripts":[],"routeData":{"route":"/design-system","type":"page","pattern":"^\\/design-system\\/$","segments":[[{"content":"design-system","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/design-system.astro","pathname":"/design-system","_meta":{"trailingSlash":"always"}}},{"file":"r-markdown/index.html","links":[],"scripts":[],"routeData":{"route":"/r-markdown","type":"page","pattern":"^\\/r-markdown\\/$","segments":[[{"content":"r-markdown","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/r-markdown.mdx","pathname":"/r-markdown","_meta":{"trailingSlash":"always"}}},{"file":"citations/index.html","links":[],"scripts":[],"routeData":{"route":"/citations","type":"page","pattern":"^\\/citations\\/$","segments":[[{"content":"citations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/citations.mdx","pathname":"/citations","_meta":{"trailingSlash":"always"}}},{"file":"overleaf/index.html","links":[],"scripts":[],"routeData":{"route":"/overleaf","type":"page","pattern":"^\\/overleaf\\/$","segments":[[{"content":"overleaf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/overleaf/index.mdx","pathname":"/overleaf","_meta":{"trailingSlash":"always"}}},{"file":"overleaf/bibtex/bibliography-styles/index.html","links":[],"scripts":[],"routeData":{"route":"/overleaf/bibtex/bibliography-styles","type":"page","pattern":"^\\/overleaf\\/bibtex\\/bibliography-styles\\/$","segments":[[{"content":"overleaf","dynamic":false,"spread":false}],[{"content":"bibtex","dynamic":false,"spread":false}],[{"content":"bibliography-styles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/overleaf/bibtex/bibliography-styles/index.astro","pathname":"/overleaf/bibtex/bibliography-styles","_meta":{"trailingSlash":"always"}}},{"file":"pricing/index.html","links":[],"scripts":[],"routeData":{"route":"/pricing","type":"page","pattern":"^\\/pricing\\/$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","_meta":{"trailingSlash":"always"}}},{"file":"quarto/index.html","links":[],"scripts":[],"routeData":{"route":"/quarto","type":"page","pattern":"^\\/quarto\\/$","segments":[[{"content":"quarto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quarto.mdx","pathname":"/quarto","_meta":{"trailingSlash":"always"}}},{"file":"blog/index.html","links":[],"scripts":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","_meta":{"trailingSlash":"always"}}},{"file":"blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio","type":"page","pattern":"^\\/blog\\/announcing-citedrive-3\\.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx","pathname":"/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents","type":"page","pattern":"^\\/blog\\/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx","pathname":"/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents","_meta":{"trailingSlash":"always"}}},{"file":"blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach","type":"page","pattern":"^\\/blog\\/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx","pathname":"/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach","_meta":{"trailingSlash":"always"}}},{"file":"blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022","type":"page","pattern":"^\\/blog\\/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx","pathname":"/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022","_meta":{"trailingSlash":"always"}}},{"file":"blog/grammarly-works-with-overleafs-latest-source-editor-upgrade/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade","type":"page","pattern":"^\\/blog\\/grammarly-works-with-overleafs-latest-source-editor-upgrade\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"grammarly-works-with-overleafs-latest-source-editor-upgrade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx","pathname":"/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade","_meta":{"trailingSlash":"always"}}},{"file":"blog/data-visualization-packages-for-r-you-should-check-out/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/data-visualization-packages-for-r-you-should-check-out","type":"page","pattern":"^\\/blog\\/data-visualization-packages-for-r-you-should-check-out\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"data-visualization-packages-for-r-you-should-check-out","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx","pathname":"/blog/data-visualization-packages-for-r-you-should-check-out","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-3.0-information-on-the-upcoming-version/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-3.0-information-on-the-upcoming-version","type":"page","pattern":"^\\/blog\\/citedrive-3\\.0-information-on-the-upcoming-version\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-3.0-information-on-the-upcoming-version","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx","pathname":"/blog/citedrive-3.0-information-on-the-upcoming-version","_meta":{"trailingSlash":"always"}}},{"file":"blog/parenthetical-vs-narrative-citations-in-citedrive/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/parenthetical-vs-narrative-citations-in-citedrive","type":"page","pattern":"^\\/blog\\/parenthetical-vs-narrative-citations-in-citedrive\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"parenthetical-vs-narrative-citations-in-citedrive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx","pathname":"/blog/parenthetical-vs-narrative-citations-in-citedrive","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-forum-has-moved-to-github-discussions/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-forum-has-moved-to-github-discussions","type":"page","pattern":"^\\/blog\\/citedrive-forum-has-moved-to-github-discussions\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-forum-has-moved-to-github-discussions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx","pathname":"/blog/citedrive-forum-has-moved-to-github-discussions","_meta":{"trailingSlash":"always"}}},{"file":"blog/codemirror-6-a-new-source-editor-for-overleaf/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/codemirror-6-a-new-source-editor-for-overleaf","type":"page","pattern":"^\\/blog\\/codemirror-6-a-new-source-editor-for-overleaf\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"codemirror-6-a-new-source-editor-for-overleaf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx","pathname":"/blog/codemirror-6-a-new-source-editor-for-overleaf","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-companion-for-overleaf-and-rstudio/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-companion-for-overleaf-and-rstudio","type":"page","pattern":"^\\/blog\\/citedrive-companion-for-overleaf-and-rstudio\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-companion-for-overleaf-and-rstudio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx","pathname":"/blog/citedrive-companion-for-overleaf-and-rstudio","_meta":{"trailingSlash":"always"}}},{"file":"blog/using-natbib-with-bibtex-and-overleaf/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/using-natbib-with-bibtex-and-overleaf","type":"page","pattern":"^\\/blog\\/using-natbib-with-bibtex-and-overleaf\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"using-natbib-with-bibtex-and-overleaf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/using-natbib-with-bibtex-and-overleaf.mdx","pathname":"/blog/using-natbib-with-bibtex-and-overleaf","_meta":{"trailingSlash":"always"}}},{"file":"blog/literature-management-with-overleaf/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/literature-management-with-overleaf","type":"page","pattern":"^\\/blog\\/literature-management-with-overleaf\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"literature-management-with-overleaf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/literature-management-with-overleaf.mdx","pathname":"/blog/literature-management-with-overleaf","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-november-2021-release/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-november-2021-release","type":"page","pattern":"^\\/blog\\/citedrive-november-2021-release\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-november-2021-release","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-november-2021-release.mdx","pathname":"/blog/citedrive-november-2021-release","_meta":{"trailingSlash":"always"}}},{"file":"blog/how-to-cite-a-website-in-bibtex/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/how-to-cite-a-website-in-bibtex","type":"page","pattern":"^\\/blog\\/how-to-cite-a-website-in-bibtex\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"how-to-cite-a-website-in-bibtex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/how-to-cite-a-website-in-bibtex.mdx","pathname":"/blog/how-to-cite-a-website-in-bibtex","_meta":{"trailingSlash":"always"}}},{"file":"blog/citedrive-january-2022-release/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citedrive-january-2022-release","type":"page","pattern":"^\\/blog\\/citedrive-january-2022-release\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citedrive-january-2022-release","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citedrive-january-2022-release.mdx","pathname":"/blog/citedrive-january-2022-release","_meta":{"trailingSlash":"always"}}},{"file":"blog/overleaf-source-editor-upgrade/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/overleaf-source-editor-upgrade","type":"page","pattern":"^\\/blog\\/overleaf-source-editor-upgrade\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"overleaf-source-editor-upgrade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/overleaf-source-editor-upgrade.mdx","pathname":"/blog/overleaf-source-editor-upgrade","_meta":{"trailingSlash":"always"}}},{"file":"blog/citation-keys-in-bibtex/index.html","links":[],"scripts":[],"routeData":{"route":"/blog/citation-keys-in-bibtex","type":"page","pattern":"^\\/blog\\/citation-keys-in-bibtex\\/$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"citation-keys-in-bibtex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/citation-keys-in-bibtex.mdx","pathname":"/blog/citation-keys-in-bibtex","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-references-from-google-scholar/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-references-from-google-scholar","type":"page","pattern":"^\\/docs\\/adding-references-from-google-scholar\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-references-from-google-scholar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-references-from-google-scholar.mdx","pathname":"/docs/adding-references-from-google-scholar","_meta":{"trailingSlash":"always"}}},{"file":"docs/creating-a-new-project-in-citedrive/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/creating-a-new-project-in-citedrive","type":"page","pattern":"^\\/docs\\/creating-a-new-project-in-citedrive\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"creating-a-new-project-in-citedrive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/creating-a-new-project-in-citedrive.mdx","pathname":"/docs/creating-a-new-project-in-citedrive","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-references-from-bibtex/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-references-from-bibtex","type":"page","pattern":"^\\/docs\\/adding-references-from-bibtex\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-references-from-bibtex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-references-from-bibtex.mdx","pathname":"/docs/adding-references-from-bibtex","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-references-from-pubmed/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-references-from-pubmed","type":"page","pattern":"^\\/docs\\/adding-references-from-pubmed\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-references-from-pubmed","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-references-from-pubmed.mdx","pathname":"/docs/adding-references-from-pubmed","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-references-to-journals/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-references-to-journals","type":"page","pattern":"^\\/docs\\/adding-references-to-journals\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-references-to-journals","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-references-to-journals.mdx","pathname":"/docs/adding-references-to-journals","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-references-to-websites/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-references-to-websites","type":"page","pattern":"^\\/docs\\/adding-references-to-websites\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-references-to-websites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-references-to-websites.mdx","pathname":"/docs/adding-references-to-websites","_meta":{"trailingSlash":"always"}}},{"file":"docs/enabling-biblatex-support/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/enabling-biblatex-support","type":"page","pattern":"^\\/docs\\/enabling-biblatex-support\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"enabling-biblatex-support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/enabling-biblatex-support.mdx","pathname":"/docs/enabling-biblatex-support","_meta":{"trailingSlash":"always"}}},{"file":"docs/enabling-bibtex-support/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/enabling-bibtex-support","type":"page","pattern":"^\\/docs\\/enabling-bibtex-support\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"enabling-bibtex-support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/enabling-bibtex-support.mdx","pathname":"/docs/enabling-bibtex-support","_meta":{"trailingSlash":"always"}}},{"file":"docs/enabling-natbib-support/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/enabling-natbib-support","type":"page","pattern":"^\\/docs\\/enabling-natbib-support\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"enabling-natbib-support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/enabling-natbib-support.mdx","pathname":"/docs/enabling-natbib-support","_meta":{"trailingSlash":"always"}}},{"file":"docs/synchronize-database/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/synchronize-database","type":"page","pattern":"^\\/docs\\/synchronize-database\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"synchronize-database","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/synchronize-database.mdx","pathname":"/docs/synchronize-database","_meta":{"trailingSlash":"always"}}},{"file":"docs/sharing-a-project/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/sharing-a-project","type":"page","pattern":"^\\/docs\\/sharing-a-project\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"sharing-a-project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/sharing-a-project.mdx","pathname":"/docs/sharing-a-project","_meta":{"trailingSlash":"always"}}},{"file":"docs/adding-to-books/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/adding-to-books","type":"page","pattern":"^\\/docs\\/adding-to-books\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"adding-to-books","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/adding-to-books.mdx","pathname":"/docs/adding-to-books","_meta":{"trailingSlash":"always"}}},{"file":"docs/quick-start/index.html","links":[],"scripts":[],"routeData":{"route":"/docs/quick-start","type":"page","pattern":"^\\/docs\\/quick-start\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"quick-start","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/quick-start.mdx","pathname":"/docs/quick-start","_meta":{"trailingSlash":"always"}}},{"file":"","links":["_astro/_...doi_.4d573175.css","_astro/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.c4c6db9e.css","_astro/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.6485e46d.css"],"scripts":[{"type":"external","value":"_astro/hoisted.d552d9c9.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.4.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.4.5\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/discovery/[...doi]","type":"page","pattern":"^\\/discovery(?:\\/(.*?))?\\/$","segments":[[{"content":"discovery","dynamic":false,"spread":false}],[{"content":"...doi","dynamic":true,"spread":true}]],"params":["...doi"],"component":"src/pages/discovery/[...doi].astro","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.4.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.4.5\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/test-slug/[...slug]","type":"page","pattern":"^\\/test-slug(?:\\/(.*?))?\\/$","segments":[[{"content":"test-slug","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/test-slug/[...slug].astro","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.4.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.4.5\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/docs","type":"page","pattern":"^\\/docs\\/$","segments":[[{"content":"docs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/index.astro","pathname":"/docs","_meta":{"trailingSlash":"always"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///Users/garethii/Documents/GitHub/astro-infrastructure/src/content/"},"pageMap":null,"propagation":[["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/InternalLink.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Fathom.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/GoogleAnalytics.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Metrical.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Plausible.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/SimpleAnalytics.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Umami.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Amplitude.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Logo.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Navigation.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Header.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/DocHeader.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/BlogHeader.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/footer/Footer.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BaseLayout.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/RightSidebar.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebar.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DocsLayout.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/CTA.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/FeatureList/FeatureListItem.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/index.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/citedrive-recommends.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/terms-and-conditions.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/privacy-policy.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/design-system.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/r-markdown.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/citations.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/index.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/index.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/[...bibtex].astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/pricing.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/quarto.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/index.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/using-natbib-with-bibtex-and-overleaf.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/literature-management-with-overleaf.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-november-2021-release.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/how-to-cite-a-website-in-bibtex.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-january-2022-release.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/overleaf-source-editor-upgrade.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citation-keys-in-bibtex.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-google-scholar.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/creating-a-new-project-in-citedrive.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-bibtex.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-pubmed.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-to-journals.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-to-websites.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-biblatex-support.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-bibtex-support.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-natbib-support.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/synchronize-database.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/sharing-a-project.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-to-books.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/quick-start.mdx","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebarBlog.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BlogPost.astro","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/[...bibtex].astro?astro&type=style&index=0&lang.css","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/design-system.astro?astro&type=style&index=0&lang.css","in-tree"],["/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/index.astro?astro&type=style&index=0&lang.css","in-tree"]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BlogPost.astro":"chunks/BlogPost.cd090bf0.mjs","/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion":"_astro/ReactAccordion.cf4fce92.js","/astro/hoisted.js?q=1":"_astro/hoisted.d552d9c9.js","/astro/hoisted.js?q=0":"_astro/hoisted.dde4f97e.js","/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu":"_astro/MobileMenu.0942afea.js","@astrojs/react/client.js":"_astro/client.502e3c6a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...bibtex_.ef8f0378.css","/_astro/_...doi_.4d573175.css","/_astro/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.6485e46d.css","/_astro/design-system.5ca0dd55.css","/_astro/design-system.c978e812.css","/_astro/index.2307b193.css","/_astro/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.c4c6db9e.css","/CNAME","/favicon.svg","/_astro/BlogHeader.astro_astro_type_script_index_0_lang.a1949a25.js","/_astro/MobileMenu.0942afea.js","/_astro/ReactAccordion.cf4fce92.js","/_astro/client.502e3c6a.js","/_astro/hoisted.d552d9c9.js","/_astro/hoisted.dde4f97e.js","/_astro/index.f1bc5ebf.js","/_astro/jsx-runtime.109e40f8.js","/assets/add-bibliography-tags.png","/assets/add-from-external-url.png","/assets/add-packages.png","/assets/add_author.png","/assets/citedrive-companion-button.png","/assets/citedrive-companion-popup.png","/assets/citedrive-companion.png","/assets/copy-citation-key.png","/assets/create-citedrive-project.png","/assets/creating-a-new-project-in-citedrive.png","/assets/draft-paper-copy.png","/assets/export-link.png","/assets/exported-bibtex.png","/assets/from-amazon-add.png","/assets/from-amazon-context.png","/assets/from-amazon-detail.png","/assets/from-bibtex-citedrive-add.png","/assets/from-bibtex-citedrive-paste.png","/assets/from-bibtex-database.png","/assets/from-bibtex-scholar-cite.png","/assets/from-bibtex-scholar.png","/assets/from-pubmed-add.png","/assets/from-pubmed-icon.png","/assets/from-pubmed-list.png","/assets/from-scholar-add.png","/assets/from-scholar-icon.png","/assets/hero.svg","/assets/imported-quantum-computing-article.png","/assets/initial-paper.png","/assets/intext-citation-button.png","/assets/invite_button.png","/assets/isbn-lookup-menu.png","/assets/paste-intext-citation.png","/assets/project_container.png","/assets/quantum-computing-articles.png","/assets/rendered-paper.png","/assets/search-journals-online.png","/assets/sharing-a-projects.png","/assets/theapp.png","/assets/upload-button.png","/assets/Banner/banner.svg","/assets/Decoration/DownArrow.svg","/assets/Decoration/SVG/Bib.svg","/assets/Decoration/SVG/Browser.svg","/assets/Decoration/SVG/Collab.svg","/assets/Decoration/SVG/Connect.svg","/assets/Decoration/SVG/Edit.svg","/assets/Decoration/SVG/Error.svg","/assets/Decoration/SVG/Quote.svg","/index.html","/citedrive-recommends/index.html","/terms-and-conditions/index.html","/privacy-policy/index.html","/design-system/index.html","/r-markdown/index.html","/citations/index.html","/overleaf/index.html","/overleaf/bibtex/bibliography-styles/index.html","/pricing/index.html","/quarto/index.html","/blog/index.html","/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio/index.html","/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents/index.html","/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach/index.html","/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022/index.html","/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade/index.html","/blog/data-visualization-packages-for-r-you-should-check-out/index.html","/blog/citedrive-3.0-information-on-the-upcoming-version/index.html","/blog/parenthetical-vs-narrative-citations-in-citedrive/index.html","/blog/citedrive-forum-has-moved-to-github-discussions/index.html","/blog/codemirror-6-a-new-source-editor-for-overleaf/index.html","/blog/citedrive-companion-for-overleaf-and-rstudio/index.html","/blog/using-natbib-with-bibtex-and-overleaf/index.html","/blog/literature-management-with-overleaf/index.html","/blog/citedrive-november-2021-release/index.html","/blog/how-to-cite-a-website-in-bibtex/index.html","/blog/citedrive-january-2022-release/index.html","/blog/overleaf-source-editor-upgrade/index.html","/blog/citation-keys-in-bibtex/index.html","/docs/adding-references-from-google-scholar/index.html","/docs/creating-a-new-project-in-citedrive/index.html","/docs/adding-references-from-bibtex/index.html","/docs/adding-references-from-pubmed/index.html","/docs/adding-references-to-journals/index.html","/docs/adding-references-to-websites/index.html","/docs/enabling-biblatex-support/index.html","/docs/enabling-bibtex-support/index.html","/docs/enabling-natbib-support/index.html","/docs/synchronize-database/index.html","/docs/sharing-a-project/index.html","/docs/adding-to-books/index.html","/docs/quick-start/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = undefined;
const _exports = createExports(_manifest);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap, renderers };
