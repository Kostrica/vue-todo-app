"use strict";(self["webpackChunkvue_educational_project"]=self["webpackChunkvue_educational_project"]||[]).push([[970],{8970:function(o,e,t){t.r(e),t.d(e,{default:function(){return ro}});var l=t(3396),d=t(9242);const n={class:"container-todos"},i={class:"header"},a=(0,l._)("h1",null,"Todo application",-1),s=(0,l.Uk)("Home"),r=(0,l._)("hr",null,null,-1),u=(0,l._)("option",{value:"all"},"All",-1),c=(0,l._)("option",{value:"completed"},"Completed",-1),m=(0,l._)("option",{value:"not-completed"},"Not Completed",-1),p=[u,c,m],h=(0,l._)("hr",null,null,-1),v={class:"main"},_={key:2};function f(o,e,t,u,c,m){const f=(0,l.up)("router-link"),g=(0,l.up)("AddTodo"),T=(0,l.up)("Control"),k=(0,l.up)("Loader"),b=(0,l.up)("TodoList");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("header",i,[a,(0,l.Wm)(f,{to:"/"},{default:(0,l.w5)((()=>[s])),_:1}),r,(0,l.Wm)(g,{class:"container",onAddTodo:m.addTodo},null,8,["onAddTodo"]),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>c.filter=o),class:"filter"},p,512),[[d.bM,c.filter]]),(0,l.Wm)(T,{onMarkAllTodo:m.markAllTodo,onRemoveAllTags:m.removeAllTags,onDeleteAllMarked:m.deleteAllMarked},null,8,["onMarkAllTodo","onRemoveAllTags","onDeleteAllMarked"]),h]),(0,l._)("main",v,[c.loading?((0,l.wg)(),(0,l.j4)(k,{key:0})):m.filteredTodos.length?((0,l.wg)(),(0,l.j4)(b,{key:1,todos:m.filteredTodos,onRemoveTodo:m.removeTodo,onHandlChange:m.handlChange},null,8,["todos","onRemoveTodo","onHandlChange"])):((0,l.wg)(),(0,l.iD)("p",_,"No todos!"))])])}function g(o,e,t,d,n,i){const a=(0,l.up)("TodoItem");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.todos,((o,e)=>((0,l.wg)(),(0,l.j4)(a,{todo:o,index:e,onRemoveTodo:i.removeTodo,onHandlChange:i.handlChange},null,8,["todo","index","onRemoveTodo","onHandlChange"])))),256))])])}var T=t(7139);const k={class:"list-item"},b=["checked"];function C(o,e,t,d,n,i){return(0,l.wg)(),(0,l.iD)("li",k,[(0,l._)("label",{class:(0,T.C_)(["checkbox-other",{done:t.todo.completed}])},[(0,l._)("input",{type:"checkbox",checked:t.todo.completed,onChange:e[0]||(e[0]=e=>o.$emit("handl-change",t.todo.id))},null,40,b),(0,l._)("strong",null,(0,T.zw)(t.index+1),1),(0,l.Uk)(" "+(0,T.zw)(i.uppercaseTitle),1)],2),(0,l._)("button",{class:"btn-remove",onClick:e[1]||(e[1]=e=>o.$emit("remove-todo",t.todo.id))},"×")])}var w={props:{todo:{type:Object,required:!0},index:Number},computed:{uppercaseTitle(){return this.todo.title.toUpperCase()}}},A=t(89);const D=(0,A.Z)(w,[["render",C],["__scopeId","data-v-1d7a46ed"]]);var y=D,M={props:["todos"],components:{TodoItem:y},methods:{removeTodo(o){this.$emit("remove-todo",o)},handlChange(o){this.$emit("handl-change",o)}}};const j=(0,A.Z)(M,[["render",g],["__scopeId","data-v-60179daf"]]);var $=j;const x=o=>((0,l.dD)("data-v-c8f3cf84"),o=o(),(0,l.Cn)(),o),R=["placeholder"],H=x((()=>(0,l._)("button",{class:"btn-create",type:"submit"},"Add",-1)));function I(o,e,t,n,i,a){return(0,l.wg)(),(0,l.iD)("form",{class:"form",onSubmit:e[1]||(e[1]=(0,d.iM)(((...o)=>a.onSubmit&&a.onSubmit(...o)),["prevent"]))},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:i.placeholderString,"onUpdate:modelValue":e[0]||(e[0]=o=>i.title=o)},null,8,R),[[d.nr,i.title]]),H],32)}var S={data(){return{placeholderString:"Enter a new todo",title:""}},methods:{onSubmit(){if(this.title.trim()){const o={userId:1,id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",o),this.title=""}}}};const Z=(0,A.Z)(S,[["render",I],["__scopeId","data-v-c8f3cf84"]]);var U=Z;const L={class:"container"};function N(o,e){return(0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("button",{class:"btn",onClick:e[0]||(e[0]=e=>o.$emit("mark-all-todo"))},"Mark all"),(0,l._)("button",{class:"btn",onClick:e[1]||(e[1]=e=>o.$emit("remove-all-tags"))},"Remove all tags"),(0,l._)("button",{class:"btn",onClick:e[2]||(e[2]=e=>o.$emit("delete-all-marked"))},"Delete all marked")])}const W={},z=(0,A.Z)(W,[["render",N]]);var V=z;const q={class:"lds-default"},E=(0,l._)("div",null,null,-1),K=(0,l._)("div",null,null,-1),O=(0,l._)("div",null,null,-1),Y=(0,l._)("div",null,null,-1),B=(0,l._)("div",null,null,-1),F=(0,l._)("div",null,null,-1),G=(0,l._)("div",null,null,-1),J=(0,l._)("div",null,null,-1),P=(0,l._)("div",null,null,-1),Q=(0,l._)("div",null,null,-1),X=(0,l._)("div",null,null,-1),oo=(0,l._)("div",null,null,-1),eo=[E,K,O,Y,B,F,G,J,P,Q,X,oo];function to(o,e){return(0,l.wg)(),(0,l.iD)("div",q,eo)}const lo={},no=(0,A.Z)(lo,[["render",to]]);var io=no,ao={name:"App",data(){return{todos:[],loading:!0,filter:"all"}},mounted(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=3").then((o=>o.json())).then((o=>{setTimeout((()=>{this.todos=o,this.loading=!1}),1e3)}))},computed:{filteredTodos(){return"all"===this.filter?this.todos:"completed"===this.filter?this.todos.filter((o=>o.completed)):"not-completed"===this.filter?this.todos.filter((o=>!o.completed)):void 0}},methods:{removeTodo(o){this.todos=this.todos.filter((e=>e.id!==o))},addTodo(o){this.todos.push(o)},handlChange(o){this.todos=this.todos.map((e=>e.id===o?{...e,completed:!e.completed}:e))},markAllTodo(){this.todos=this.todos.map((o=>({...o,completed:!0})))},removeAllTags(){this.todos=this.todos.map((o=>({...o,completed:!1})))},deleteAllMarked(){this.todos=this.todos.filter((o=>!o.completed))}},components:{TodoList:$,AddTodo:U,Control:V,Loader:io,Control:V}};const so=(0,A.Z)(ao,[["render",f]]);var ro=so}}]);
//# sourceMappingURL=970.8de384e7.js.map