import{r as a,j as t,a as n}from"./app-096681d8.js";const v=()=>{const[c,d]=a.useState(""),[h,s]=a.useState(""),[o,r]=a.useState(""),[u,i]=a.useState([]);return t("div",{children:[n("select",{value:c,onChange:e=>{d(e.target.value)}}),n("input",{type:"text",value:h,onChange:e=>{s(e.target.value)}}),n("input",{type:"text",value:o,onChange:e=>{r(e.target.value)}}),n("button",{onClick:()=>{const e={selectedData:c,name:h,phone:o};i(l=>[...l,e]),d(""),s(""),r("")},children:"Add"}),u.map((e,l)=>t("div",{children:[t("p",{children:["Selected Data: ",e.selectedData]}),t("p",{children:["Name: ",e.name]}),t("p",{children:["Phone: ",e.phone]})]},l))]})};export{v as default};