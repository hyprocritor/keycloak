"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[5999],{2889:(s,e,t)=>{t.d(e,{a:()=>a});var c=t(6055),l=t(969);function a(s){const{defaultClasses:e}=s;return{useGetClassName:function(s){const{classes:t}=s;return{getClassName:(0,l.O)((s=>(0,c.W)(s,e[s],null===t||void 0===t?void 0:t[s])))}}}}},7107:(s,e,t)=>{t.d(e,{v:()=>l});var c=t(2889);const{useGetClassName:l}=(0,c.a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},5999:(s,e,t)=>{t.r(e),t.d(e,{default:()=>r});var c=t(184),l=t(2791),a=t(1630),o=t(6055),i=t(7107);function r(s){const{kcContext:e,i18n:t,doUseDefaultCss:r,Template:n,classes:p}=s,{getClassName:d}=(0,i.v)({doUseDefaultCss:r,classes:p}),{otpLogin:f,url:m}=e,{msg:u,msgStr:k}=t;return(0,l.useEffect)((()=>{let s=!1;const{prLoaded:t,remove:c}=(0,a.t)({type:"javascript",src:"".concat(e.url.resourcesCommonPath,"/node_modules/jquery/dist/jquery.min.js")});return(async()=>{await t,s||$(document).ready((function(){$(".card-pf-view-single-select").click((function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).children().removeAttr("name")):($(".card-pf-view-single-select").removeClass("active"),$(".card-pf-view-single-select").children().removeAttr("name"),$(this).addClass("active"),$(this).children().attr("name","selectedCredentialId"))}));var s=$(".card-pf-view-single-select")[0];s&&s.click()}))})(),()=>{s=!0,c()}}),[]),(0,c.jsx)(n,Object.assign({},{kcContext:e,i18n:t,doUseDefaultCss:r,classes:p},{headerNode:u("doLogIn")},{children:(0,c.jsxs)("form",Object.assign({id:"kc-otp-login-form",className:d("kcFormClass"),action:m.loginAction,method:"post"},{children:[f.userOtpCredentials.length>1&&(0,c.jsx)("div",Object.assign({className:d("kcFormGroupClass")},{children:(0,c.jsx)("div",Object.assign({className:d("kcInputWrapperClass")},{children:f.userOtpCredentials.map((s=>(0,c.jsxs)("div",Object.assign({className:d("kcSelectOTPListClass")},{children:[(0,c.jsx)("input",{type:"hidden",value:"${otpCredential.id}"}),(0,c.jsxs)("div",Object.assign({className:d("kcSelectOTPListItemClass")},{children:[(0,c.jsx)("span",{className:d("kcAuthenticatorOtpCircleClass")}),(0,c.jsx)("h2",Object.assign({className:d("kcSelectOTPItemHeadingClass")},{children:s.userLabel}))]}))]}),s.id)))}))})),(0,c.jsxs)("div",Object.assign({className:d("kcFormGroupClass")},{children:[(0,c.jsx)("div",Object.assign({className:d("kcLabelWrapperClass")},{children:(0,c.jsx)("label",Object.assign({htmlFor:"otp",className:d("kcLabelClass")},{children:u("loginOtpOneTime")}))})),(0,c.jsx)("div",Object.assign({className:d("kcInputWrapperClass")},{children:(0,c.jsx)("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:d("kcInputClass"),autoFocus:!0})}))]})),(0,c.jsxs)("div",Object.assign({className:d("kcFormGroupClass")},{children:[(0,c.jsx)("div",Object.assign({id:"kc-form-options",className:d("kcFormOptionsClass")},{children:(0,c.jsx)("div",{className:d("kcFormOptionsWrapperClass")})})),(0,c.jsx)("div",Object.assign({id:"kc-form-buttons",className:d("kcFormButtonsClass")},{children:(0,c.jsx)("input",{className:(0,o.W)(d("kcButtonClass"),d("kcButtonPrimaryClass"),d("kcButtonBlockClass"),d("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:k("doLogIn")})}))]}))]}))}))}},4943:()=>{HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(s){if("string"===typeof s)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(s,this.firstChild)})},6055:(s,e,t)=>{t.d(e,{W:()=>a});var c=t(9883),l=t(9465);const a=function(){const s=arguments.length;let e=0,t="";for(;e<s;e++){const s=e<0||arguments.length<=e?void 0:arguments[e];if(null==s)continue;let o;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=a(...s);else{(0,c.h)(!(0,l.z)(s,!1)),o="";for(const e in s)s[e]&&e&&(o&&(o+=" "),o+=e)}break;default:o=s}o&&(t&&(t+=" "),t+=o)}return t}},1630:(s,e,t)=>{t.d(e,{t:()=>l});t(4943);var c=t(3172);function l(s){const e=document.createElement((()=>{switch(s.type){case"css":return"link";case"javascript":return"script"}})()),t=new c.Deferred;return e.addEventListener("load",(()=>t.resolve())),Object.assign(e,(()=>{switch(s.type){case"css":return{href:s.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:s.src,type:"text/javascript"}}})()),document.getElementsByTagName("head")[0][(()=>{switch(s.type){case"javascript":return"appendChild";case"css":return(()=>{switch(s.position){case"append":return"appendChild";case"prepend":return"prepend"}})()}})()](e),{prLoaded:t.pr,remove:()=>e.remove()}}},9465:(s,e,t)=>{function c(s,e){return e}t.d(e,{z:()=>c})}}]);
//# sourceMappingURL=5999.5c5a9d01.chunk.js.map