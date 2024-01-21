"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[9025],{9025:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(2791),r=s(6055),l=s(1027),n=s(8777),i=s(532),d=s(1928),c=s(6315),o=s(5442),m=s(184);const p=c.fC,u=(c.ZA,c.B4),x=t.forwardRef(((e,a)=>{let{className:s,children:t,...r}=e;return(0,m.jsxs)(c.xz,{ref:a,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...r,children:[t,(0,m.jsx)(c.JO,{asChild:!0,children:(0,m.jsx)(d.jnn,{className:"h-4 w-4 opacity-50"})})]})}));x.displayName=c.xz.displayName;const f=t.forwardRef(((e,a)=>{let{className:s,...t}=e;return(0,m.jsx)(c.u_,{ref:a,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...t,children:(0,m.jsx)(d.g8U,{})})}));f.displayName=c.u_.displayName;const h=t.forwardRef(((e,a)=>{let{className:s,...t}=e;return(0,m.jsx)(c.$G,{ref:a,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...t,children:(0,m.jsx)(d.v4q,{})})}));h.displayName=c.$G.displayName;const g=t.forwardRef(((e,a)=>{let{className:s,children:t,position:r="popper",...l}=e;return(0,m.jsx)(c.h_,{children:(0,m.jsxs)(c.VY,{ref:a,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:r,...l,children:[(0,m.jsx)(f,{}),(0,m.jsx)(c.l_,{className:(0,o.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,m.jsx)(h,{})]})})}));g.displayName=c.VY.displayName;t.forwardRef(((e,a)=>{let{className:s,...t}=e;return(0,m.jsx)(c.__,{ref:a,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",s),...t})})).displayName=c.__.displayName;const j=t.forwardRef(((e,a)=>{let{className:s,children:t,...r}=e;return(0,m.jsxs)(c.ck,{ref:a,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...r,children:[(0,m.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,m.jsx)(c.wU,{children:(0,m.jsx)(d.nQG,{className:"h-4 w-4"})})}),(0,m.jsx)(c.eT,{children:t})]})}));j.displayName=c.ck.displayName;function N(e){const{kcContext:a,onIsFormSubmittableValueChange:s,i18n:d,getClassName:c,BeforeField:o,AfterField:f}=e,{advancedMsg:h,msg:N}=d,{formValidationState:{fieldStateByAttributeName:y,isFormSubmittable:b},formValidationDispatch:v,attributesWithPassword:w}=(0,l.Q)({kcContext:a,i18n:d});(0,t.useEffect)((()=>{s(b)}),[b]);let k="";return(0,m.jsx)(m.Fragment,{children:w.map(((e,a)=>{var s;const{group:l="",groupDisplayHeader:d="",groupDisplayDescription:b=""}=e,{value:w,displayableErrors:C}=y[e.name],F=(0,r.W)(c("kcFormGroupClass"),0!==C.length&&c("kcFormGroupErrorClass"));return(0,m.jsxs)(t.Fragment,{children:[l!==k&&""!==(k=l)&&(0,m.jsxs)("div",{className:F,children:[(0,m.jsx)("div",{className:c("kcContentWrapperClass"),children:(0,m.jsx)("label",{id:"header-".concat(l),className:c("kcFormGroupHeader"),children:h(d)||k})}),""!==b&&(0,m.jsx)("div",{className:c("kcLabelWrapperClass"),children:(0,m.jsx)("label",{id:"description-".concat(l),className:c("kcLabelClass"),children:h(b)})})]}),o&&(0,m.jsx)(o,{attribute:e}),(0,m.jsxs)("div",{className:F,children:[(0,m.jsxs)("div",{className:c("kcLabelWrapperClass"),children:[(0,m.jsx)(i._,{htmlFor:e.name,className:c("kcLabelClass"),children:h(null!==(s=e.displayName)&&void 0!==s?s:"")}),e.required&&(0,m.jsx)("span",{className:"text-red-500",children:" *"})]}),(0,m.jsxs)("div",{className:c("kcInputWrapperClass"),children:[(()=>{const{options:a}=e.validators;return void 0!==a?(0,m.jsxs)(p,{name:e.name,onValueChange:a=>v({action:"update value",name:e.name,newValue:w}),value:w,children:[(0,m.jsx)(x,{id:e.name,children:(0,m.jsx)(u,{children:w||N("selectAnOption")})}),(0,m.jsx)(g,{children:a.options.map((e=>(0,m.jsx)(j,{value:e,children:e},e)))})]}):(0,m.jsx)(n.I,{type:(()=>{switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}})(),id:e.name,name:e.name,value:w,onChange:a=>v({action:"update value",name:e.name,newValue:a.target.value}),onBlur:()=>v({action:"focus lost",name:e.name}),className:c("kcInputClass"),"aria-invalid":0!==C.length,disabled:e.readOnly,autoComplete:e.autocomplete})})(),0!==C.length&&(()=>{const a="input-error-".concat(e.name);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("style",{children:"#".concat(a," > span: { display: block; }")}),(0,m.jsx)("span",{id:a,className:"text-red-500 text-xs",style:{position:1===C.length?"absolute":void 0},"aria-live":"polite",children:C.map((e=>{let{errorMessage:a}=e;return a}))})]})})()]})]}),f&&(0,m.jsx)(f,{attribute:e})]},a)}))})}t.forwardRef(((e,a)=>{let{className:s,...t}=e;return(0,m.jsx)(c.Z0,{ref:a,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",s),...t})})).displayName=c.Z0.displayName;var y=s(7107),b=s(9207);function v(e){const{kcContext:a,i18n:s,doUseDefaultCss:r,Template:l,classes:n}=e,{getClassName:i}=(0,y.v)({doUseDefaultCss:r,classes:n}),{url:d,messagesPerField:c,recaptchaRequired:o,recaptchaSiteKey:p}=a,{msg:u,msgStr:x}=s,[f,h]=(0,t.useState)(!1);return(0,m.jsx)(l,{kcContext:a,i18n:s,doUseDefaultCss:r,classes:n,displayMessage:c.exists("global"),displayRequiredFields:!0,headerNode:u("doRegister"),children:(0,m.jsx)("div",{className:"lg:p-8 lg:pb-4 flex gap-4",children:(0,m.jsxs)("div",{className:"mx-auto flex w-full flex-col justify-center sm:w-[350px] ",id:"kc-form-wrapper",children:[(0,m.jsxs)("form",{id:"kc-register-form",className:"grid gap-3 items-center",action:d.registrationAction,method:"post",children:[(0,m.jsx)(N,{kcContext:a,onIsFormSubmittableValueChange:h,i18n:s,getClassName:i}),o&&(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("div",{className:i("kcInputWrapperClass"),children:(0,m.jsx)("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":p})})}),(0,m.jsx)("div",{className:i("kcFormGroupClass"),style:{marginBottom:30},children:(0,m.jsx)("div",{id:"kc-form-buttons",className:i("kcFormButtonsClass"),children:(0,m.jsx)(b.z,{className:"w-full",type:"submit",disabled:!f,children:x("doRegister")})})})]}),(0,m.jsx)("div",{className:"text-sm mt-3 hover:underline text-slate-500",children:(0,m.jsx)("span",{children:(0,m.jsx)("a",{href:d.loginUrl,children:u("backToLogin")})})})]})})})}}}]);
//# sourceMappingURL=9025.7fdfb27c.chunk.js.map