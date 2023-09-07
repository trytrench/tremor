import{startOfToday as t,sub as e,startOfMonth as r,startOfYear as o,startOfDay as n,max as a,min as i,isEqual as u}from"date-fns";import{makeClassName as l}from"../../../lib/utils.js";import"../../../lib/tremorTwMerge.js";const m=l("DateRangePicker"),c=(t,e,r,o)=>{var i;if(r&&(t=null===(i=o.get(r))||void 0===i?void 0:i.from),t)return n(t&&!e?t:a([t,e]))},s=(e,r,o,a)=>{var u,l;if(o&&(e=n(null!==(l=null===(u=a.get(o))||void 0===u?void 0:u.to)&&void 0!==l?l:t())),e)return n(e&&!r?e:i([e,r]))},d=[{value:"tdy",text:"Today",from:t()},{value:"w",text:"Last 7 days",from:e(t(),{days:7})},{value:"t",text:"Last 30 days",from:e(t(),{days:30})},{value:"m",text:"Month to Date",from:r(t())},{value:"y",text:"Year to Date",from:o(t())}],f=(t,e,r)=>{const o=(null==r?void 0:r.code)||"en-US";if(!t&&!e)return"";if(t&&!e){const e={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString(o,e)}if(t&&e){if(u(t,e)){const e={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString(o,e)}if(t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()){const r={month:"short",day:"numeric"};return`${t.toLocaleDateString(o,r)} - \n                    ${e.getDate()}, ${e.getFullYear()}`}{const r={year:"numeric",month:"short",day:"numeric"};return`${t.toLocaleDateString(o,r)} - \n                    ${e.toLocaleDateString(o,r)}`}}return""};export{d as defaultOptions,f as formatSelectedDates,m as makeDateRangePickerClassName,s as parseEndDate,c as parseStartDate};
