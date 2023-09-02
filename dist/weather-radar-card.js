function e(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new r(i,e,n)},s=(e,n)=>{i?e.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),a=t.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,e.appendChild(n)}))},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,n))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window,h=d.trustedTypes,m=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},g=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},v="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const a=this[e];this[t]=n,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return s(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=f){var n;const a=this.constructor._$Ep(e,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,a=n._$Ev.get(e);if(void 0!==a&&this._$El!==a){const e=n.getPropertyOptions(a),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=a,this[a]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");const y=window,b=y.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,A="?"+k,S=`<${A}>`,C=document,E=()=>C.createComment(""),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,P=/>/g,V=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),D=new WeakMap,j=C.createTreeWalker(C,129,null,!1);function W(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,n=[];let a,r=2===t?"<svg>":"",o=O;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===O?"!--"===l[1]?o=I:void 0!==l[1]?o=P:void 0!==l[2]?(z.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=V):void 0!==l[3]&&(o=V):o===V?">"===l[0]?(o=null!=a?a:O,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?V:'"'===l[3]?U:M):o===U||o===M?o=V:o===I||o===P?o=O:(o=V,a=void 0);const h=o===V&&e[t+1].startsWith("/>")?" ":"";r+=o===O?i+S:c>=0?(n.push(s),i.slice(0,c)+x+i.slice(c)+k+h):i+k+(-2===c?(n.push(void 0),t):h)}return[W(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class q{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,r=0;const o=e.length-1,s=this.parts,[l,c]=Z(e,t);if(this.el=q.createElement(l,i),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=j.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(x)||t.startsWith(k)){const i=c[r++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+x).split(k),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?Q:"@"===t[1]?ee:X})}else s.push({type:6,index:a})}for(const t of e)n.removeAttribute(t)}if(z.test(n.tagName)){const e=n.textContent.split(k),t=e.length-1;if(t>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],E()),j.nextNode(),s.push({type:2,index:++a});n.append(e[t],E())}}}else if(8===n.nodeType)if(n.data===A)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(k,e+1));)s.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function F(e,t,i=e,n){var a,r,o,s;if(t===B)return t;let l=void 0!==n?null===(a=i._$Co)||void 0===a?void 0:a[n]:i._$Cl;const c=R(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(o=(s=i)._$Co)&&void 0!==o?o:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=F(e,l._$AS(e,t.values),l,n)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);j.currentNode=a;let r=j.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new K(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new te(r,this,e)),this._$AV.push(t),l=n[++s]}o!==(null==l?void 0:l.index)&&(r=j.nextNode(),o++)}return j.currentNode=C,a}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class K{constructor(e,t,i,n){var a;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),R(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>L(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(W(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.v(i);else{const e=new J(a,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new q(e)),t}T(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new K(this.k(E()),this.k(E()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class X{constructor(e,t,i,n,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const a=this.strings;let r=!1;if(void 0===a)e=F(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const n=e;let o,s;for(e=a[0],o=0;o<a.length-1;o++)s=F(this,n[i+o],t,o),s===B&&(s=this._$AH[o]),r||(r=!R(s)||s!==this._$AH[o]),s===N?e=N:e!==N&&(e+=(null!=s?s:"")+a[o+1]),this._$AH[o]=s}r&&!n&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}const G=b?b.emptyScript:"";class Q extends X{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class ee extends X{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=F(this,e,t,0))&&void 0!==i?i:N)===B)return;const n=this._$AH,a=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==N&&(n===N||a);a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const ie=y.litHtmlPolyfillSupport;null==ie||ie(q,K),(null!==(w=y.litHtmlVersions)&&void 0!==w?w:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ne,ae;class re extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,a;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=r._$litPart$;if(void 0===o){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=o=new K(t.insertBefore(E(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}}re.finalized=!0,re._$litElement$=!0,null===(ne=globalThis.litElementHydrateSupport)||void 0===ne||ne.call(globalThis,{LitElement:re});const oe=globalThis.litElementPolyfillSupport;null==oe||oe({LitElement:re}),(null!==(ae=globalThis.litElementVersions)&&void 0!==ae?ae:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,le=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},ce=(e,t,i)=>{t.constructor.createProperty(i,e)};function de(e){return(t,i)=>void 0!==i?ce(e,t,i):le(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function he(e){return de({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me,ue,pe;null===(me=window.HTMLSlotElement)||void 0===me||me.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(pe||(pe={}));var ge=function(e,t,i,n){n=n||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};let fe=class extends(function(e){return class extends e{createRenderRoot(){const e=this.constructor,{registry:t,elementDefinitions:i,shadowRootOptions:n}=e;i&&!t&&(e.registry=new CustomElementRegistry,Object.entries(i).forEach((([t,i])=>e.registry.define(t,i))));const a=this.renderOptions.creationScope=this.attachShadow({...n,customElements:e.registry});return s(a,this.constructor.elementStyles),a}}}(re)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}render(){if(!this.hass||!this._helpers)return H``;let e;return e=this._config,H`
      <div class="values">
        <mwc-textfield
            label="Card Title (optional)"
            .value=${e.card_title?e.card_title:""}
            .configValue=${"card_title"}
            @input=${this._valueChangedString}
        ></mwc-textfield>
        <mwc-select label="Data Source (optional)" .configValue=${"data_source"} .value=${e.data_source?e.data_source:""} @selected=${this._valueChangedString} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="RainViewer-Original">RainViewer - Original</mwc-list-item>
            <mwc-list-item value="RainViewer-UniversalBlue">RainViewer - Universal Blue</mwc-list-item>
            <mwc-list-item value="RainViewer-TITAN">RainViewer - TITAN</mwc-list-item>
            <mwc-list-item value="RainViewer-TWC">RainViewer - The Weather Channel</mwc-list-item>
            <mwc-list-item value="RainViewer-Meteored">RainViewer - Meteored</mwc-list-item>
            <mwc-list-item value="RainViewer-NEXRAD">RainViewer - NEXRAD Level III</mwc-list-item>
            <mwc-list-item value="RainViewer-Rainbow">RainViewer - Rainbow @ SELEX-IS</mwc-list-item>
            <mwc-list-item value="RainViewer-DarkSky">RainViewer - Dark Sky</mwc-list-item>
        </mwc-select>
        <div class="side-by-side">
          <mwc-select label="Map Style (optional)" .configValue=${"map_style"} .value=${e.map_style?e.map_style:""} @selected=${this._valueChangedString} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="Light">Light</mwc-list-item>
            <mwc-list-item value="Voyager">Voyager</mwc-list-item>
            <mwc-list-item value="Satellite">Satellite</mwc-list-item>
            <mwc-list-item value="Dark">Dark</mwc-list-item>
          </mwc-select>
          <mwc-select label="Zoom Level (optional)" .configValue=${"zoom_level"} .value=${e.zoom_level?e.zoom_level.toString():null} @selected=${this._valueChangedNumber} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="4">4</mwc-list-item>
            <mwc-list-item value="5">5</mwc-list-item>
            <mwc-list-item value="6">6</mwc-list-item>
            <mwc-list-item value="7">7</mwc-list-item>
            <mwc-list-item value="8">8</mwc-list-item>
            <mwc-list-item value="9">9</mwc-list-item>
            <mwc-list-item value="10">10</mwc-list-item>
          </mwc-select>
        </div>
        <mwc-textfield
            label="Map Centre Latitude (optional)"
            .value=${e.center_latitude?e.center_latitude:""}
            .configValue=${"center_latitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Map Centre Longitude (optional)"
            .value=${e.center_longitude?e.center_longitude:""}
            .configValue=${"center_longitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Marker Latitude (optional)"
            .value=${e.marker_latitude?e.marker_latitude:""}
            .configValue=${"marker_latitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Marker Longitude (optional)"
            .value=${e.marker_longitude?e.marker_longitude:""}
            .configValue=${"marker_longitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <div class="side-by-side">
          <mwc-textfield
              label="Frame Count (optional)"
              .value=${e.frame_count?e.frame_count:""}
              .configValue=${"frame_count"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
          <mwc-textfield
              label="Frame Delay(ms) (optional)"
              .value=${e.frame_delay?e.frame_delay:""}
              .configValue=${"frame_delay"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
          <mwc-textfield
              label="Restart Delay(ms) (optional)"
              .value=${e.restart_delay?e.restart_delay:""}
              .configValue=${"restart_delay"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Static Map"}>
            <mwc-switch
              .checked=${!0===e.static_map}
              .configValue=${"static_map"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Zoom"}>
            <mwc-switch
              .checked=${!0===e.show_zoom}
              .configValue=${"show_zoom"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Square Map"}>
            <mwc-switch
              .checked=${!0===e.square_map}
              .configValue=${"square_map"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Show Marker"}>
            <mwc-switch
              .checked=${!0===e.show_marker}
              .configValue=${"show_marker"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Playback"}>
            <mwc-switch
              .checked=${!0===e.show_playback}
              .configValue=${"show_playback"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Recenter"}>
            <mwc-switch
              .checked=${!0===e.show_recenter}
              .configValue=${"show_recenter"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Show Scale"}>
            <mwc-switch
              .checked=${!0===e.show_scale}
              .configValue=${"show_scale"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Range"}>
            <mwc-switch
              .checked=${!0===e.show_range}
              .configValue=${"show_range"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Extra Labels"}>
            <mwc-switch
              .checked=${!0===e.extra_labels}
              .configValue=${"extra_labels"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChangedSwitch(e){const t=e.target;this._config&&this.hass&&t&&(this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:t.checked}),ge(this,"config-changed",{config:this._config}))}_valueChangedNumber(e){if(!this._config||!this.hass)return;const t=e.target;this[`_${t.configValue}`]!==t.value&&(t.configValue&&(""===t.value||null===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:Number(t.value)})),ge(this,"config-changed",{config:this._config}))}_valueChangedString(e){if(!this._config||!this.hass)return;const t=e.target;this[`_${t.configValue}`]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:t.value})),ge(this,"config-changed",{config:this._config}))}};fe.styles=o`
    mwc-select,
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
    }
    mwc-formfield {
      padding-bottom: 8px;
    }
    mwc-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }
    .option {
      padding: 4px 0px;
      cursor: pointer;
    }
    .row {
      display: flex;
      margin-bottom: -14px;
      pointer-events: none;
    }
    .title {
      padding-left: 16px;
      margin-top: -6px;
      pointer-events: none;
    }
    .secondary {
      padding-left: 40px;
      color: var(--secondary-text-color);
      pointer-events: none;
    }
    .values {
      padding-left: 16px;
      background: var(--secondary-background-color);
    }
    ha-switch {
      padding: 16px 6px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
  `,e([de({attribute:!1})],fe.prototype,"hass",void 0),e([he()],fe.prototype,"_config",void 0),e([he()],fe.prototype,"_helpers",void 0),fe=e([se("weather-radar-card-editor")],fe);var ve={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},_e={common:ve},we={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},ye={common:we};const be={en:Object.freeze({__proto__:null,common:ve,default:_e}),nb:Object.freeze({__proto__:null,common:we,default:ye})};function $e(e,t="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce(((e,t)=>e[t]),be[n])}catch(t){a=e.split(".").reduce(((e,t)=>e[t]),be.en)}return void 0===a&&(a=e.split(".").reduce(((e,t)=>e[t]),be.en)),""!==t&&""!==i&&(a=a.replace(t,i)),a}console.info(`%c  WEATHER-RADAR-CARD \n%c  ${$e("common.version")} 2.1.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"weather-radar-card",name:"Weather Radar Card",description:"A rain radar card using the new tiled images from RainViewer"});let xe=class extends re{constructor(){super(...arguments),this.isPanel=!1}static async getConfigElement(){return document.createElement("weather-radar-card-editor")}static getStubConfig(){return{}}setConfig(e){this._config=e}getCardSize(){return 10}shouldUpdate(){return!0}render(){if(this._config.show_warning)return this.showWarning($e("common.show_warning"));const e=`\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Weather Radar Card</title>\n          <meta charset="utf-8" />\n          <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n          <link rel="stylesheet" href="/local/community/weather-radar-card/leaflet.css"/>\n          <link rel="stylesheet" href="/local/community/weather-radar-card/leaflet.toolbar.min.css"/>\n          <script src="/local/community/weather-radar-card/leaflet.js"><\/script>\n          <script src="/local/community/weather-radar-card/leaflet.toolbar.min.js"><\/script>\n          <style>\n            body {\n              margin: 0;\n              padding: 0;\n            }\n            .text-container {\n              font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 2.5px 0px 10px;\n            }\n            .text-container-small {\n              font: 10px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 10px 0px 2.5px;\n            }\n            .light-links a {\n              color: blue;\n            }\n            .dark-links a {\n              color: steelblue;\n            }\n            #timestamp {\n              font: 14px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 0px;\n              padding-top: 5px;\n            }\n            #color-bar {\n              margin: 0px 0px;\n            }\n          </style>\n        </head>\n        <body onresize="resizeWindow()">\n          <span>\n            <div id="color-bar" style="height: 8px;">\n              <img id="img-color-bar" height="8" style="vertical-align: top" />\n            </div>\n            <div id="mapid" style="height: ${this.isPanel?this.offsetParent?this.offsetParent.clientHeight-48-2-(!0===this.editMode?59:0)+"px":"540px":void 0!==this._config.square_map&&this._config.square_map?this.getBoundingClientRect().width+"px":"492px"};"></div>\n            <div id="div-progress-bar" style="height: 8px; background-color: white;">\n              <div id="progress-bar" style="height:8px;width:0; background-color: #ccf2ff;"></div>\n            </div>\n            <div id="bottom-container" class="light-links" style="height: 32px; background-color: white;">\n              <div id="timestampid" class="text-container" style="width: 120px; height: 32px; float:left; position: absolute;">\n                <p id="timestamp"></p>\n              </div>\n              <div id="attribution" class="text-container-small" style="height: 32px; float:right;">\n                <span class="Map__Attribution-LjffR DKiFh" id="attribution"\n                  ></span\n                >\n              </div>\n            </div>\n            <script>\n              const maxZoom = 10;\n              const minZoom = 3;\n              var radarOpacity = 1.0;\n              var zoomLevel = ${void 0!==this._config.zoom_level?this._config.zoom_level:7};\n              var centerLat = ${void 0!==this._config.center_latitude?this._config.center_latitude:this.hass.config.latitude};\n              var centerLon = ${void 0!==this._config.center_longitude?this._config.center_longitude:this.hass.config.longitude};\n              var markerLat = (${this._config.marker_latitude}) ? ${this._config.marker_latitude} : centerLat;\n              var markerLon = (${this._config.marker_longitude}) ? ${this._config.marker_longitude} : centerLon;\n              var timeout = ${void 0!==this._config.frame_delay?this._config.frame_delay:500};\n              var restartDelay = ${void 0!==this._config.restart_delay?this._config.restart_delay:1e3};\n              var frameCount = ${null!=this._config.frame_count?this._config.frame_count:10};\n              var tileURL = '${void 0!==this._config.data_source?this._config.data_source:"RainViewer-Original"}';\n              switch (tileURL) {\n                case "RainViewer-Original":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/1/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-original.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-UniversalBlue":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/2/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-universalblue.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-TITAN":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/3/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-titan.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-TWC":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/4/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-twc.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-Meteored":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/5/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-meteored.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-NEXRAD":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/6/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-nexrad.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-Rainbow":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/7/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-rainbow.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-DarkSky":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/8/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-darksky.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n              }\n              resizeWindow();\n              var labelSize = ${void 0!==this._config.extra_labels&&this._config.extra_labels?128:256};\n              var labelZoom = ${void 0!==this._config.extra_labels&&this._config.extra_labels?1:0};\n              var map_style = '${void 0!==this._config.map_style&&null!==this._config.map_style?this._config.map_style.toLowerCase():"light"}';\n              switch (map_style) {\n                case "dark":\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'dark_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'dark_only_labels';\n                  var svg_icon = 'home-circle-light.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case "voyager":\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'rastertiles/voyager_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'rastertiles/voyager_only_labels';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case 'satellite':\n                  var basemap_url = 'https://server.arcgisonline.com/ArcGIS/rest/services/{style}/MapServer/tile/{z}/{y}/{x}';\n                  var basemap_style = 'World_Imagery';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'proton_labels_std';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="http://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9" target="_blank">ESRI</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case "light":\n                default:\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'light_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'light_only_labels';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n              }\n\n              var idx = 0;\n              var run = true;\n              var doRadarUpdate = false;\n              var radarMap = L.map('mapid', {\n                zoomControl: ${!0===this._config.show_zoom&&!0!==this._config.static_map?"true":"false"},\n                ${!0===this._config.static_map?"scrollWheelZoom: false,                 doubleClickZoom: false,                 boxZoom: false,                 dragging: false,                 keyboard: false,                 touchZoom: false,":"wheelPxPerZoomLevel: 120,"}\n                attributionControl: false,\n                minZoom: minZoom,\n                maxZoom: maxZoom,\n              }).setView([centerLat, centerLon], zoomLevel);\n              var radarImage = [frameCount];\n              var radarTime = [frameCount];\n              var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n              var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n              var d = new Date();\n              d.setTime(Math.trunc((d.valueOf() - frameLag) / framePeriod) * framePeriod - (frameCount - 1) * framePeriod);\n\n              document.getElementById("progress-bar").style.width = barSize+"px";\n              document.getElementById("attribution").innerHTML = attribution;\n\n              var t2actions = [];\n\n              if (${!0===this._config.show_recenter&&!0!==this._config.static_map}) {\n                var recenterAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/recenter.png" width="24" height="24">',\n                          tooltip: 'Re-center'\n                      }\n                  },\n\n                  addHooks: function () {\n                    radarMap.setView([centerLat, centerLon], zoomLevel);\n                  }\n                });\n                t2actions.push(recenterAction);\n              }\n\n              if (${!0===this._config.show_playback}) {\n                var playAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img id="playButton" src="/local/community/weather-radar-card/pause.png" width="24" height="24">',\n                          tooltip: 'Pause'\n                      }\n                  },\n\n                  addHooks: function () {\n                    run = !run;\n                    if (run) {\n                      document.getElementById("playButton").src = "/local/community/weather-radar-card/pause.png"\n                    } else {\n                      document.getElementById("playButton").src = "/local/community/weather-radar-card/play.png"\n                    }\n                  }\n                });\n                t2actions.push(playAction);\n\n                var skipbackAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/skip-back.png" width="24" height="24">',\n                          tooltip: 'Previous Frame'\n                      }\n                  },\n\n                  addHooks: function () {\n                    skipBack();\n                  }\n                });\n                t2actions.push(skipbackAction);\n\n                var skipnextAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/skip-next.png" width="24" height="24">',\n                          tooltip: 'Next Frame'\n                      }\n                  },\n\n                  addHooks: function () {\n                    skipNext();\n                  }\n                });\n                t2actions.push(skipnextAction);\n              }\n\n              if (t2actions.length > 0) {\n                new L.Toolbar2.Control({\n                  position: 'bottomright',\n                  actions: t2actions\n                }).addTo(radarMap);\n              }\n\n              if (${!0===this._config.show_scale}) {\n                L.control.scale({\n                  position: 'bottomleft',\n                  metric: ${"km"===this.hass.config.unit_system.length},\n                  imperial: ${"mi"===this.hass.config.unit_system.length},\n                  maxWidth: 100,\n                }).addTo(radarMap);\n\n                if ((map_style === "dark") || (map_style == "satellite")) {\n                  var scaleDiv = this.document.getElementsByClassName("leaflet-control-scale-line")[0];\n                  scaleDiv.style.color = "#BBB";\n                  scaleDiv.style.borderColor = "#BBB";\n                  scaleDiv.style.background = "#00000080";\n                }\n              }\n\n              if ((map_style === "dark") || (map_style == "satellite")) {\n                this.document.getElementById("div-progress-bar").style.background = "#1C1C1C";\n                this.document.getElementById("progress-bar").style.background = "steelblue";\n                this.document.getElementById("bottom-container").style.background = "#1C1C1C";\n                this.document.getElementById("bottom-container").style.color = "#DDDDDD";\n                this.document.getElementById("bottom-container").className = "dark-links";\n              }\n\n              L.tileLayer(\n                basemap_url,\n                {\n                  style: basemap_style,\n                  subdomains: 'abcd',\n                  detectRetina: true,\n                  tileSize: 256,\n                  zoomOffset: 0,\n                },\n              ).addTo(radarMap);\n\n              for (i = 0; i < frameCount; i++) {\n                t = d.valueOf()/1000 + i * (framePeriod/1000);\n                radarImage[i] = L.tileLayer(\n                  tileURL,\n                  {\n                    time: t,\n                    detectRetina: true,\n                    tileSize: 256,\n                    zoomOffset: 0,\n                    opacity: 0,\n                    frame: i,\n                  },\n                );\n                radarTime[i] = getRadarTimeString(d.valueOf() + i * framePeriod);\n              }\n\n              for (i = 0; i < (frameCount - 1); i++) {\n                radarImage[i].on('load', function(e) {\n                  radarImage[e.target.options.frame + 1].addTo(radarMap);\n                });\n              }\n\n              radarImage[0].addTo(radarMap);\n\n              radarImage[idx].setOpacity(radarOpacity);\n              document.getElementById('timestamp').innerHTML = radarTime[idx];\n              d.setTime(d.valueOf() + (frameCount - 1) * framePeriod);\n\n              townLayer = L.tileLayer(\n                label_url,\n                {\n                  subdomains: 'abcd',\n                  detectRetina: false,\n                  tileSize: labelSize,\n                  zoomOffset: labelZoom,\n                },\n              ).addTo(radarMap);\n              townLayer.setZIndex(2);\n\n              ${!0===this._config.show_marker?"var myIcon = L.icon({                        iconUrl: '/local/community/weather-radar-card/'+svg_icon,                        iconSize: [16, 16],                      });                      L.marker([markerLat, markerLon], { icon: myIcon, interactive: false }).addTo(radarMap);":""}\n\n              ${!0===this._config.show_range?"km"===this.hass.config.unit_system.length?"L.circle([markerLat, markerLon], { radius: 50000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 100000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 200000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);":"L.circle([markerLat, markerLon], { radius: 48280, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 96561, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 193121, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);":""}\n\n        setTimeout(function() {\n          nextFrame();\n        }, timeout);\n        setUpdateTimeout();\n\n        function setUpdateTimeout() {\n          d.setTime(d.valueOf() + framePeriod);\n          x = new Date();\n          setTimeout(triggerRadarUpdate, d.valueOf() - x.valueOf() + frameLag);\n        }\n\n        function triggerRadarUpdate() {\n          doRadarUpdate = true;\n        }\n\n        function updateRadar() {\n          t = d.valueOf()/1000;\n          newLayer = L.tileLayer(tileURL, {\n            time: t,\n            maxZoom: maxZoom,\n            tileSize: 256,\n            zoomOffset: 0,\n            opacity: 0,\n          });\n          newLayer.addTo(radarMap);\n          newTime = getRadarTimeString(d.valueOf());\n\n          radarImage[0].remove();\n          for (i = 0; i < frameCount - 1; i++) {\n            radarImage[i] = radarImage[i + 1];\n            radarTime[i] = radarTime[i + 1];\n          }\n          radarImage[frameCount - 1] = newLayer;\n          radarTime[frameCount - 1] = newTime;\n          idx = 0;\n          doRadarUpdate = false;\n\n          setUpdateTimeout();\n        }\n\n        function getRadarTime(date) {\n          x = new Date(date);\n          return (\n            x.getUTCFullYear().toString() +\n            (x.getUTCMonth() + 1).toString().padStart(2, '0') +\n            x\n              .getUTCDate()\n              .toString()\n              .padStart(2, '0') +\n            x\n              .getUTCHours()\n              .toString()\n              .padStart(2, '0') +\n            x\n              .getUTCMinutes()\n              .toString()\n              .padStart(2, '0')\n          );\n        }\n\n        function getRadarTimeString(date) {\n          x = new Date(date);\n          return (\n            weekday[x.getDay()] +\n            ' ' +\n            month[x.getMonth()] +\n            ' ' +\n            x\n              .getDate()\n              .toString()\n              .padStart(2, '0') +\n            ' ' +\n            x\n              .getHours()\n              .toString()\n              .padStart(2, '0') +\n            ':' +\n            x\n              .getMinutes()\n              .toString()\n              .padStart(2, '0')\n          );\n        }\n\n        function nextFrame() {\n          if (run) {\n            nextImage();\n          }\n          setTimeout(function() {\n            nextFrame();\n          }, (idx == frameCount) ? restartDelay : timeout);\n        }\n\n        function skipNext() {\n          if (idx == frameCount-1) {\n            idx += 1;\n          }\n          nextImage();\n        }\n\n        function skipBack() {\n          if (idx == frameCount) {\n            radarImage[frameCount - 1].setOpacity(0);\n            idx -= 1;\n          } else if (idx < frameCount) {\n            radarImage[idx].setOpacity(0);\n          }\n          idx -= 1;\n          if (doRadarUpdate && idx == 1) {\n            updateRadar();\n          }\n          if (idx < 0) {\n            idx = frameCount-1;\n          }\n          document.getElementById("progress-bar").style.width = (idx+1)*barSize+"px";\n          document.getElementById('timestamp').innerHTML = radarTime[idx];\n          radarImage[idx].setOpacity(radarOpacity);\n        }\n\n        function nextImage() {\n          if (idx == frameCount) {\n            radarImage[frameCount - 1].setOpacity(0);\n          } else if (idx < frameCount - 1) {\n            radarImage[idx].setOpacity(0);\n          }\n          idx += 1;\n          if (doRadarUpdate && idx == 1) {\n            updateRadar();\n          }\n          if (idx == frameCount + 1) {\n            idx = 0;\n          }\n          if (idx != frameCount + 1) {\n            document.getElementById("progress-bar").style.width = (idx+1)*barSize+"px";\n          }\n          if (idx < frameCount) {\n            document.getElementById('timestamp').innerHTML = radarTime[idx];\n            radarImage[idx].setOpacity(radarOpacity);\n          }\n        }\n\n        function resizeWindow() {\n          this.document.getElementById("color-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("img-color-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("mapid").width = this.frameElement.offsetWidth;\n          this.document.getElementById("mapid").height = ${this.isPanel?this.offsetParent?this.offsetParent.clientHeight-48-2-(!0===this.editMode?59:0):492:void 0!==this._config.square_map&&this._config.square_map?this.getBoundingClientRect().width:492}\n          this.document.getElementById("div-progress-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("bottom-container").width = this.frameElement.offsetWidth;\n          barSize = this.frameElement.offsetWidth/frameCount;\n        }\n        <\/script>\n            </span>\n        </body>\n      </html>\n    `,t=this.isPanel?this.offsetParent?this.offsetParent.clientHeight-2-(!0===this.editMode?59:0)+"px":"540px":void 0!==this._config.square_map&&this._config.square_map?`${this.getBoundingClientRect().width+48}px`:"540px",i=void 0!==this._config.card_title?H`<div id="card-title">${this._config.card_title}</div>`:"";return H`
      <style>
        ${this.styles}
      </style>
      <ha-card class="type-iframe" onclick="${this._handleClick}">
        ${i}
        <div id="root" style="padding-top: ${t}">
          <iframe srcdoc=${e} scrolling="no"></iframe>
        </div>
      </ha-card>
    `}_handleClick(){console.info("Clicked map");const e={entity:this._config.entity,tap_action:{action:this._config.tap_action?this._config.tap_action:"more-info",navigation_path:this._config.navigation_path,url_path:this._config.url_path,data:this._config.data,pipeline_id:this._config.pipeline_id}},t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:e,action:"tap"},dispatchEvent(t)}showWarning(e){return H`
      <hui-warning>${e}</hui-warning>
    `}showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this._config}),H`
      ${t}
    `}get styles(){return o`
      .text-container {
        font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      #timestamp {
        margin: 2px 0px;
      }
      #color-bar {
        margin: 0px 0px;
      }
      ha-card {
        overflow: hidden;
      }
      #root {
        width: 100%;
        position: relative;
      }
      iframe {
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      #card-title {
        margin: 8px 0px 4px 8px;
        font-size: 1.5em;
      }
    `}};e([de({type:Boolean,reflect:!0})],xe.prototype,"isPanel",void 0),e([de({attribute:!1})],xe.prototype,"hass",void 0),e([de({attribute:!1})],xe.prototype,"_config",void 0),e([de({attribute:!1})],xe.prototype,"editMode",void 0),xe=e([se("weather-radar-card")],xe);export{xe as WeatherRadarCard};
