import{g as f}from"./_commonjsHelpers-Cpj98o6Y.js";var d={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function e(){for(var r="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(r=i(r,o(a)))}return r}function o(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return e.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var a in r)n.call(r,a)&&r[a]&&(s=i(s,a));return s}function i(r,s){return s?r?r+" "+s:r+s:r}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(d);var l=d.exports;const u=f(l),y=({text:t,type:n="ds-badge-type-solid",size:e="ds-badge-size-default",color:o="ds-badge-color-primary"})=>`
      <div class="ds-badge ${u(n,e,o)}">${t}</div>
    `;var c=(t=>(t.Solid="ds-badge-type-solid",t.Soft="ds-badge-type-soft",t))(c||{}),p=(t=>(t.Default="ds-badge-size-default",t.Small="ds-badge-size-small",t.Big="ds-badge-size-big",t))(p||{}),b=(t=>(t.Primary="ds-badge-color-primary",t.Gray="ds-badge-color-gray",t))(b||{});export{c as B,p as a,y as b,b as c};
