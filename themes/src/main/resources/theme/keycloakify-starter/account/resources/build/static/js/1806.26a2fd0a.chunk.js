"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[1806],{2597:(e,t,s)=>{t.Lf=void 0;var c=s(8121);var o=s(8848);Object.defineProperty(t,"Lf",{enumerable:!0,get:function(){return o.useRerenderOnStateChange}})},8121:function(e,t,s){var c=this&&this.__createBinding||(Object.create?function(e,t,s,c){void 0===c&&(c=s);var o=Object.getOwnPropertyDescriptor(t,s);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,c,o)}:function(e,t,s,c){void 0===c&&(c=s),e[c]=t[s]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.prototype.hasOwnProperty.call(e,s)&&c(t,e,s);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useEvt=void 0;var a=s(8252),n=l(s(2791)).useEffect;t.useEvt=function(e,t){n((function(){var t=a.Evt.newCtx();return e(t),function(){t.done()}}),t)}},8848:function(e,t,s){var c=this&&this.__createBinding||(Object.create?function(e,t,s,c){void 0===c&&(c=s);var o=Object.getOwnPropertyDescriptor(t,s);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,c,o)}:function(e,t,s,c){void 0===c&&(c=s),e[c]=t[s]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.prototype.hasOwnProperty.call(e,s)&&c(t,e,s);return o(t,e),t},a=this&&this.__read||function(e,t){var s="function"===typeof Symbol&&e[Symbol.iterator];if(!s)return e;var c,o,l=s.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(c=l.next()).done;)a.push(c.value)}catch(n){o={error:n}}finally{try{c&&!c.done&&(s=l.return)&&s.call(l)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.useRerenderOnStateChange=void 0;var n=s(8121),r=l(s(2791)).useState;t.useRerenderOnStateChange=function(e){var t=a(r((function(){return e.state})),2)[1];(0,n.useEvt)((function(s){return e.attach(s,(function(e){return t((function(){return e}))}))}),[e])}},2889:(e,t,s)=>{s.d(t,{a:()=>l});var c=s(6055),o=s(969);function l(e){const{defaultClasses:t}=e;return{useGetClassName:function(e){const{classes:s}=e;return{getClassName:(0,o.O)((e=>(0,c.W)(e,t[e],null===s||void 0===s?void 0:s[e])))}}}}},7107:(e,t,s)=>{s.d(t,{v:()=>o});var c=s(2889);const{useGetClassName:o}=(0,c.a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},1806:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var c=s(184),o=s(6055),l=s(2597),a=s(1644),n=s(7107),r=s(6007);function i(e){const{kcContext:t,i18n:s,doUseDefaultCss:i,Template:u,classes:f}=e,{getClassName:p}=(0,n.v)({doUseDefaultCss:i,classes:f}),{msg:d,msgStr:k}=s;(0,l.Lf)(r.R);const{url:m}=t,C=r.R.state;return void 0===C?null:(0,c.jsxs)(u,Object.assign({},{kcContext:t,i18n:s,doUseDefaultCss:i,classes:f},{displayMessage:!1,headerNode:d("termsTitle")},{children:[(0,c.jsx)("div",Object.assign({id:"kc-terms-text"},{children:(0,c.jsx)(a.U,{children:C})})),(0,c.jsxs)("form",Object.assign({className:"form-actions",action:m.loginAction,method:"POST"},{children:[(0,c.jsx)("input",{className:(0,o.W)(p("kcButtonClass"),p("kcButtonClass"),p("kcButtonClass"),p("kcButtonPrimaryClass"),p("kcButtonLargeClass")),name:"accept",id:"kc-accept",type:"submit",value:k("doAccept")}),(0,c.jsx)("input",{className:(0,o.W)(p("kcButtonClass"),p("kcButtonDefaultClass"),p("kcButtonLargeClass")),name:"cancel",id:"kc-decline",type:"submit",value:k("doDecline")})]})),(0,c.jsx)("div",{className:"clearfix"})]}))}},6055:(e,t,s)=>{s.d(t,{W:()=>l});var c=s(9883),o=s(9465);const l=function(){const e=arguments.length;let t=0,s="";for(;t<e;t++){const e=t<0||arguments.length<=t?void 0:arguments[t];if(null==e)continue;let a;switch(typeof e){case"boolean":break;case"object":if(Array.isArray(e))a=l(...e);else{(0,c.h)(!(0,o.z)(e,!1)),a="";for(const t in e)e[t]&&t&&(a&&(a+=" "),a+=t)}break;default:a=e}a&&(s&&(s+=" "),s+=a)}return s}},9465:(e,t,s)=>{function c(e,t){return t}s.d(t,{z:()=>c})}}]);
//# sourceMappingURL=1806.26a2fd0a.chunk.js.map