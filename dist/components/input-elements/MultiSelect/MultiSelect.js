'use client';
import{__rest as e}from"tslib";import t,{useState as r,useMemo as o}from"react";import{border as a}from"../../../lib/shape.js";import{sizing as l}from"../../../lib/sizing.js";import{spacing as n}from"../../../lib/spacing.js";import{makeClassName as m}from"../../../lib/utils.js";import{tremorTwMerge as s}from"../../../lib/tremorTwMerge.js";import"../../../contexts/BaseColorContext.js";import"../../../contexts/IndexContext.js";import"../../../contexts/RootStylesContext.js";import d from"../../../contexts/SelectedValueContext.js";import c from"../../../hooks/useInternalState.js";import i from"../../../assets/ArrowDownHeadIcon.js";import u from"../../../assets/SearchIcon.js";import p from"../../../assets/XCircleIcon.js";import{getFilteredOptions as f,getSelectButtonColors as b}from"../selectUtils.js";import{Listbox as g}from"@headlessui/react";import x from"../../../assets/XIcon.js";const h=m("MultiSelect"),k=t.forwardRef(((m,k)=>{const{defaultValue:w,value:v,onValueChange:E,placeholder:N="Select...",disabled:j=!1,icon:y,children:C,className:I}=m,S=e(m,["defaultValue","value","onValueChange","placeholder","disabled","icon","children","className"]),V=y,[X,R]=c(w,v),[D,B]=r(""),M=(null!=X?X:[]).length>0,z=o((()=>f(D,C)),[D,C]);return t.createElement(g,Object.assign({as:"div",ref:k,defaultValue:X,value:X,onChange:e=>{null==E||E(e),R(e)},disabled:j,className:s("w-full min-w-[10rem] relative text-tremor-default",I)},S,{multiple:!0}),(({value:e})=>t.createElement(t.Fragment,null,t.createElement(g.Button,{className:s("w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100","border-tremor-border shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted",V?"p-10 -ml-0.5":n.lg.paddingLeft,n.fourXl.paddingRight,n.xs.paddingY,a.sm.all,b(e.length>0,j))},V&&t.createElement("span",{className:s("absolute inset-y-0 left-0 flex items-center ml-px",n.md.paddingLeft)},t.createElement(V,{className:s(h("Icon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",l.lg.height,l.lg.width)})),t.createElement("div",{className:"h-6 flex items-center"},e.length>0?t.createElement("div",{className:"flex flex-nowrap overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-x-1 mr-5 -ml-1.5 relative"},z.filter((t=>e.includes(t.props.value))).map(((r,o)=>{var a;return t.createElement("div",{key:o,className:s("max-w-[100px] lg:max-w-[200px] flex justify-center items-center pl-2 pr-1.5 py-1 font-medium","rounded-tremor-small","bg-tremor-background-muted dark:bg-dark-tremor-background-muted","bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle","text-tremor-content-default dark:text-dark-tremor-content-default","text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis")},t.createElement("div",{className:"text-xs truncate "},null!==(a=r.props.children)&&void 0!==a?a:r.props.value),t.createElement("div",{onClick:t=>{t.preventDefault();const o=e.filter((e=>e!==r.props.value));null==E||E(o),R(o)}},t.createElement(x,{className:s(h("clearIconItem"),"cursor-pointer rounded-tremor-full w-3.5 h-3.5 ml-2","text-tremor-content-subtle hover:text-tremor-content","dark:text-dark-tremor-content-subtle dark:hover:text-tremor-content")})))}))):t.createElement("span",null,N)),t.createElement("span",{className:s("absolute inset-y-0 right-0 flex items-center",n.md.marginRight)},t.createElement(i,{className:s(h("arrowDownIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",l.md.height,l.md.width)}))),M&&!j?t.createElement("button",{type:"button",className:s("absolute inset-y-0 right-0 flex items-center",n.fourXl.marginRight),onClick:e=>{e.preventDefault(),R([]),null==E||E([])}},t.createElement(p,{className:s(h("clearIconAllItems"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",l.md.height,l.md.width)})):null,t.createElement(g.Options,{className:s("absolute z-10 divide-y overflow-y-auto max-h-[228px] w-full left-0 outline-none rounded-tremor-default","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",n.twoXs.marginTop,n.twoXs.marginBottom,a.sm.all)},t.createElement("div",{className:s("flex items-center w-full","bg-tremor-background-muted","dark:bg-dark-tremor-background-muted",n.md.paddingX)},t.createElement("span",null,t.createElement(u,{className:s("flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",n.sm.marginRight,l.md.height,l.md.width)})),t.createElement("input",{name:"search",type:"input",placeholder:"Search",className:s("w-full focus:outline-none focus:ring-none bg-transparent text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis",n.sm.paddingY),onChange:e=>B(e.target.value)})),t.createElement(d.Provider,{value:{selectedValue:e}},z)))))}));k.displayName="MultiSelect";export{k as default};
