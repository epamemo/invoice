import{r as i,g,j as r,a as e,b as v}from"./app-434eec2a.js";import{I as l}from"./InputLabel-cd3b80c3.js";import{T as o}from"./TextInput-6c11b43d.js";import{A as b}from"./AuthenticatedLayout2-aeee04ae.js";import"./Sidebar-dd1fec0c.js";import"./boxicons-e0508a0b.js";function S(a){console.log(a);const[n,c]=i.useState(""),[s,d]=i.useState(""),[h,m]=i.useState(""),[f,u]=i.useState(!1),y=()=>{const t={title:n,description:s,category:h};g.post("/dashboard",t),u(!0),c(""),d(""),m("")};return i.useEffect(()=>{a.myNews||g.get("history.invoice"),console.log("props",a)},[]),r(b,{user:a.auth.user,header:"Dashboard",children:[e(v,{title:"Dashboard"}),r("div",{className:"pl-2 pr-4",children:[f&&e("div",{onClick:()=>u(!1),className:"alert alert-success shadow-lg absolute w-auto",children:r("div",{children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),r("span",{children:[" ",a.flash.message]})]})}),e("div",{className:"bg-white  mb-4  rounded-2xl",children:r("div",{className:"p-6 text-gray-900 prose-h1:font-bold prose-h1:text-2xl",children:[e("h1",{children:"Buat Penerimaan Barang"}),r("div",{className:"form-control my-4",children:[e(l,{htmlFor:"title",children:"Title"}),e(o,{type:"text",placeholder:"Title",name:"title",id:"title",value:n,onChange:t=>c(t.target.value)})]}),r("div",{className:"form-control my-4",children:[e(l,{htmlFor:"category",children:"Category"}),e(o,{type:"text",placeholder:"Category",name:"category",id:"category",value:h,onChange:t=>m(t.target.value)})]}),r("div",{className:"form-control my-4",children:[e(l,{htmlFor:"description",children:"Description"}),e(o,{type:"text",placeholder:"Description",name:"description",id:"description",value:s,onChange:t=>d(t.target.value)})]}),e("button",{className:"btn btn-primary",onClick:()=>y(),children:"Submit"})]})}),e("div",{className:"overflow-x-auto",children:r("table",{className:"table w-full",children:[e("thead",{children:r("tr",{children:[e("th",{children:"No"}),e("th",{children:"Title"}),e("th",{children:"Category"}),e("th",{children:"Description"}),e("th",{children:"Action"})]})}),e("tbody",{children:a.myNews.map((t,p)=>r("tr",{children:[e("th",{children:p+1}),e("td",{children:t.title}),e("td",{children:t.category}),e("td",{children:t.description}),e("td",{children:t.description})]},p))})]})})]})]})}export{S as default};