import{__rest as t}from"tslib";import e from"react";import{colorPalette as r}from"../../../lib/theme.js";import{getColorClassNames as o}from"../../../lib/utils.js";import{tremorTwMerge as m}from"../../../lib/tremorTwMerge.js";const s=e.forwardRef(((s,a)=>{const{color:i,children:l,className:c}=s,n=t(s,["color","children","className"]);return e.createElement("p",Object.assign({ref:a,className:m("font-medium text-tremor-title",i?o(i,r.darkText).textColor:"text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",c)},n),l)}));s.displayName="Title";export{s as default};
