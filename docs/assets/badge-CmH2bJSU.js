import{g as c}from"./_commonjsHelpers-Cpj98o6Y.js";var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function e(){for(var r="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(r=a(r,i(o)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return e.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var o in r)n.call(r,o)&&r[o]&&(s=a(s,o));return s}function a(r,s){return s?r?r+" "+s:r+s:r}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(l);var d=l.exports;const f=c(d),m=({text:t,type:n="ds-badge-type-solid",size:e="ds-badge-size-default",color:i="ds-badge-color-primary"})=>{try{console.log(">>>>> cl(type, size, color)",f(n,e,i))}catch(a){console.log(">>>> error",a)}return`
      <div class="ds-badge">${t}</div>
    `};var u=(t=>(t.Solid="ds-badge-type-solid",t.Soft="ds-badge-type-soft",t))(u||{}),p=(t=>(t.Default="ds-badge-size-default",t.Small="ds-badge-size-small",t.Big="ds-badge-size-big",t))(p||{}),b=(t=>(t.Primary="ds-badge-color-primary",t.Gray="ds-badge-color-gray",t))(b||{});export{u as B,p as a,m as b,b as c};
