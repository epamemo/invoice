import{r as c,j as o,a,g as p}from"./app-096681d8.js";import{A as N}from"./AuthenticatedLayout2-b46bf92c.js";import h from"./Test-a6a71d90.js";import{f as g}from"./FormatInput-9cebfaa9.js";import{N as v}from"./Notification-bd32ecad.js";import"./Sidebar-fcc0b717.js";import"./boxicons-e0508a0b.js";import"./InputLabel-3277f235.js";import"./TextInput-f4fcf91f.js";function k(t){const[i,m]=c.useState({show:!1,statusNotif:""}),[e,n]=c.useState({id:t.customer.id,name:t.customer.name,phone:t.customer.phone}),r=u=>{const{name:s,value:l}=u.target;if(s==="name")n({...e,[s]:l.toUpperCase()});else{const f=g(l);n({...e,[s]:f})}console.log(e)},d=()=>{e.name&&e.phone?(p.post("/customer/edit",e),n({name:"",phone:""})):(m({show:!0,statusNotif:"warning"}),t.flash.message=`Isi
            ${e.name==""?"Nama Customer":""}
            ${e.name==""&&e.phone==""?" & ":""}
            ${e.phone==""?"Kontak Customer":""}`)};return o(N,{user:t.auth.user,header:t.title,children:[i.show&&a("div",{onClick:()=>m(!1),className:`alert alert-${i.statusNotif} shadow-lg w-auto`,children:o("div",{className:"flex gap-2",children:[a("box-icon",{name:"error"}),o("span",{children:[" ",t.flash.message]})]})}),a(v,{props:t.notification}),a("div",{className:"",children:o("div",{className:"text-gray-900",children:[o("div",{className:"grid grid-flow-col gap-4",children:[a("div",{className:"my-4 relative",children:a(h,{nameInpt:"name",type:"text",id:"name",label:"Nama Customer",placeholder:"Nama Customer",value:e.name,onchange:r})}),a("div",{className:"form-control my-4",children:a(h,{nameInpt:"phone",id:"phone",type:"text",label:"Phone",placeholder:"+62841627113",value:e.phone,onchange:r})})]}),o("button",{className:"btn btn-primary",onClick:()=>d(),children:[a("box-icon",{name:"save",color:"#B4BFFE"}),"Submit"]})]})})]})}export{k as default};
