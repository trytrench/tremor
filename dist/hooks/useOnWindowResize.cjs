"use strict";var e=require("react");module.exports=(t,r)=>{const[n,i]=e.useState(r);e.useEffect((()=>{const e=()=>{i(window.innerWidth),t()};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t,n])};
