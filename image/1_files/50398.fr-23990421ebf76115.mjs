(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50398,4394],{537347:e=>{!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function i(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,i=t+100;return e.f.style.width=i+"px",e.c.scrollLeft=i,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function s(e,i){function n(){var e=s;o(e)&&e.a.parentNode&&i(e.g)}var s=e;t(e.b,n),t(e.c,n),o(e)}function r(e,t){var i=t||{};this.family=e,this.style=i.style||"normal",this.weight=i.weight||"normal",this.stretch=i.stretch||"normal"}var l=null,a=null,c=null,d=null;function u(){return null===d&&(d=!!document.fonts),d}function h(){if(null===c){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(t){}c=""!==e.style.font}return c}function m(e,t){return[e.style,e.weight,h()?e.stretch:"","100px",t].join(" ")}r.prototype.load=function(e,t){var o=this,r=e||"BESbswy",c=0,d=t||3e3,h=(new Date).getTime();return new Promise((function(e,t){if(u()&&!function(){if(null===a)if(u()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);a=!!e&&603>parseInt(e[1],10)}else a=!1;return a}()){var p=new Promise((function(e,t){!function i(){(new Date).getTime()-h>=d?t(Error(d+"ms timeout exceeded")):document.fonts.load(m(o,'"'+o.family+'"'),r).then((function(t){1<=t.length?e():setTimeout(i,25)}),t)}()})),f=new Promise((function(e,t){c=setTimeout((function(){t(Error(d+"ms timeout exceeded"))}),d)}));Promise.race([f,p]).then((function(){clearTimeout(c),e(o)}),t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}((function(){function a(){var t;(t=-1!=x&&-1!=v||-1!=x&&-1!=y||-1!=v&&-1!=y)&&((t=x!=v&&x!=y&&v!=y)||(null===l&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=l&&(x==g&&v==g&&y==g||x==_&&v==_&&y==_||x==b&&v==b&&y==b)),t=!t),t&&(w.parentNode&&w.parentNode.removeChild(w),clearTimeout(c),e(o))}var u=new i(r),p=new i(r),f=new i(r),x=-1,v=-1,y=-1,g=-1,_=-1,b=-1,w=document.createElement("div");w.dir="ltr",n(u,m(o,"sans-serif")),n(p,m(o,"serif")),n(f,m(o,"monospace")),w.appendChild(u.a),w.appendChild(p.a),w.appendChild(f.a),document.body.appendChild(w),g=u.a.offsetWidth,_=p.a.offsetWidth,b=f.a.offsetWidth,function e(){if((new Date).getTime()-h>=d)w.parentNode&&w.parentNode.removeChild(w),t(Error(d+"ms timeout exceeded"));else{var i=document.hidden;!0!==i&&void 0!==i||(x=u.a.offsetWidth,v=p.a.offsetWidth,y=f.a.offsetWidth,a()),c=setTimeout(e,50)}}(),s(u,(function(e){x=e,a()})),n(u,m(o,'"'+o.family+'",sans-serif')),s(p,(function(e){v=e,a()})),n(p,m(o,'"'+o.family+'",serif')),s(f,(function(e){y=e,a()})),n(f,m(o,'"'+o.family+'",monospace'))}))}))},e.exports=r}()},989881:(e,t,i)=>{var n=i(247816),o=i(899291)(n);e.exports=o},121078:(e,t,i)=>{var n=i(862488),o=i(137285);e.exports=function e(t,i,s,r,l){var a=-1,c=t.length;for(s||(s=o),l||(l=[]);++a<c;){var d=t[a];i>0&&s(d)?i>1?e(d,i-1,s,r,l):n(l,d):r||(l[l.length]=d)}return l}},247816:(e,t,i)=>{var n=i(228483),o=i(3674);e.exports=function(e,t){return e&&n(e,t,o)}},269199:(e,t,i)=>{var n=i(989881),o=i(498612);e.exports=function(e,t){var i=-1,s=o(e)?Array(e.length):[];return n(e,(function(e,n,o){s[++i]=t(e,n,o)})),s}},882689:(e,t,i)=>{var n=i(829932),o=i(297786),s=i(267206),r=i(269199),l=i(571131),a=i(307518),c=i(285022),d=i(406557),u=i(701469);e.exports=function(e,t,i){t=t.length?n(t,(function(e){return u(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[d];var h=-1;t=n(t,a(s));var m=r(e,(function(e,i,o){return{criteria:n(t,(function(t){return t(e)})),index:++h,value:e}}));return l(m,(function(e,t){return c(e,t,i)}))}},571131:e=>{e.exports=function(e,t){var i=e.length;for(e.sort(t);i--;)e[i]=e[i].value;return e}},626393:(e,t,i)=>{var n=i(733448);e.exports=function(e,t){if(e!==t){var i=void 0!==e,o=null===e,s=e==e,r=n(e),l=void 0!==t,a=null===t,c=t==t,d=n(t);if(!a&&!d&&!r&&e>t||r&&l&&c&&!a&&!d||o&&l&&c||!i&&c||!s)return 1;if(!o&&!r&&!d&&e<t||d&&i&&s&&!o&&!r||a&&i&&s||!l&&s||!c)return-1}return 0}},285022:(e,t,i)=>{var n=i(626393);e.exports=function(e,t,i){for(var o=-1,s=e.criteria,r=t.criteria,l=s.length,a=i.length;++o<l;){var c=n(s[o],r[o]);if(c)return o>=a?c:c*("desc"==i[o]?-1:1)}return e.index-t.index}},899291:(e,t,i)=>{var n=i(498612);e.exports=function(e,t){return function(i,o){if(null==i)return i;if(!n(i))return e(i,o);for(var s=i.length,r=t?s:-1,l=Object(i);(t?r--:++r<s)&&!1!==o(l[r],r,l););return i}}},137285:(e,t,i)=>{var n=i(562705),o=i(135694),s=i(701469),r=n?n.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||o(e)||!!(r&&e&&e[r])}},189734:(e,t,i)=>{var n=i(121078),o=i(882689),s=i(105976),r=i(816612),l=s((function(e,t){if(null==e)return[];var i=t.length;return i>1&&r(e,t[0],t[1])?t=[]:i>2&&r(t[0],t[1],t[2])&&(t=[t[0]]),o(e,n(t,1),[])}));e.exports=l},372169:(e,t,i)=>{i.d(t,{Je:()=>n,dA:()=>s,iO:()=>r,jh:()=>l,s_:()=>o,wq:()=>a});const n=350,o=134,s=16,r=2,l=236,a=20},918301:(e,t,i)=>{i.d(t,{CB:()=>m,y9:()=>h});var n=i(667294),o=i(121151),s=i(6637),r=i(898781),l=i(883119),a=i(785893);const c=({onConfirm:e})=>{const t=(0,r.ZP)(),[i,c]=(0,n.useState)(!1),d=()=>{c(!0),s.Z.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,a.jsx)(o.ZP,{accessibilityModalLabel:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,heading:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,a.jsxs)(l.kC,{justifyContent:"end",gap:{row:2,column:0},children:[i?(0,a.jsx)(l.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("E-mail envoyé", "Email sent", "Button text for verification email being sent", undefined, true),disabled:i,onClick:d}):(0,a.jsx)(l.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Renvoyer l'e-mail", "Resend email", "Button text for resending email verification email", undefined, true),disabled:i,onClick:d}),(0,a.jsx)(l.zx,{fullWidth:!0,size:"lg",color:"red",text:t.bt("Compris !", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true),onClick:e})]}),role:"alertdialog",children:(0,a.jsx)(l.xu,{padding:8,children:(0,a.jsx)(l.xv,{align:"center",size:"300",children:t.bt("Sécurisez votre compte en vérifiant votre adresse e-mail. Vérifiez dans la boîte de réception associée à ce compte si vous avez reçu un e-mail de notre part pour continuer à utiliser Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})};var d=i(425288);const{Provider:u,useHook:h}=(0,d.Z)("EmailVerificationReminderModal");function m({children:e}){const[t,i]=(0,n.useState)(!1),o=(0,n.useMemo)((()=>({showEmailVerificationReminderModal:()=>{i(!0)}})),[]);return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)(u,{value:o,children:e}),t&&(0,a.jsx)(c,{onConfirm:()=>{i(!1)}})]})}},28543:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var n=i(567831);var o=i(55259),s=i(966113);function r(e,t,i){if(!o.Z[e])throw new Error(`unknown url key: ${e}`);i||(i={});let r=o.Z[e](i);const l=function(e,t){let i=null;return e&&(i=e.advertiserId||null),!i&&t&&(i=t.id),i}(i,t);return"string"==typeof l&&(r="/advertiser/"+l+r),!!i.absolutify&&(r=(0,n.Z)(r,void 0,s.Z.settings.ADS_DOMAIN)),r}},21353:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(702664),o=i(28543);function s(){const e=(0,n.useSelector)((({advertiser:e})=>e));return(t,i)=>(0,o.default)(t,e,i)}},673270:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(249647),o=i(121093),s=i(911687),r=i(70061),l=i(785893);const a=({placementId:e})=>(0,l.jsx)(o.Z,{placementId:e,predicate:e=>{var t;return 1===(null===(t=e.display_data)||void 0===t?void 0:t.component_type)},children:({complete:e,dismiss:t,experience:{display_data:i}})=>{const o=(0,n.Z)(r.Z)(i);return(0,l.jsx)(s.Z,{displayData:o,onComplete:()=>e(),onDismiss:t})}})},77827:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(667294),o=i(773285),s=i(898781),r=i(883119),l=i(276775),a=i(785893);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const d=5e3;class u extends n.Component{constructor(...e){super(...e),c(this,"isOnClose",this.props.onCloseEnabled&&2===this.props.actionTrigger),c(this,"state",{surveyAccepted:!1,surveyLoaded:!1,surveyLoadFailed:!1,showSurveyOnClose:this.isOnClose}),c(this,"loadSurvey",((e=!0)=>{const{onView:t}=this.props;e&&t(),this.setState({surveyLoaded:!0})})),c(this,"processIFrameMessage",(e=>{const{presentationDelay:t=d,onComplete:i,surveyLink:n,onCloseEnabled:o}=this.props,s=e.origin||e.originalEvent.origin;n.startsWith(s)&&("surveyFinished"===e.data?i():"surveyLoaded"===e.data&&(window.clearTimeout(this.loadSurveyFailureTimeout),this.isOnClose&&this.showSurveyOnLeavingPage(),o?this.actionTriggerHandler():this.loadSurveyTimeout=window.setTimeout(this.loadSurvey,t)))})),c(this,"handleShowSurvey",(()=>{this.setState({surveyAccepted:!0})}))}componentDidMount(){window.addEventListener("message",this.processIFrameMessage),this.loadSurveyFailureTimeout=window.setTimeout((()=>{this.state.surveyLoaded||(window.clearTimeout(this.loadSurveyTimeout),this.setState({surveyLoadFailed:!0}))}),15e3)}componentWillUnmount(){window.removeEventListener("message",this.processIFrameMessage),window.clearTimeout(this.loadSurveyTimeout),window.clearTimeout(this.loadSurveyFailureTimeout),this.isOnClose&&this.props.unblock()}actionTriggerHandler(){const{actionTrigger:e,presentationDelay:t=d}=this.props;switch(e){case 1:this.loadSurvey();break;case 2:this.loadSurvey(!1);break;default:this.loadSurveyTimeout=window.setTimeout(this.loadSurvey,t)}}showSurveyOnLeavingPage(){const{onView:e,block:t}=this.props;t((()=>{e(),this.setState({showSurveyOnClose:!1})}))}render(){const{surveyAccepted:e,surveyLoadFailed:t,surveyLoaded:i,showSurveyOnClose:n}=this.state;if(t)return null;const{acceptButtonText:o,bodyText:s,declineButtonText:l,onDismiss:c,subtitleText:d,surveyLink:u,titleText:h}=this.props,m=(0,a.jsx)("iframe",{style:e?{border:0,minHeight:810,paddingBottom:4,width:"100%"}:{display:"none"},src:u,title:this.props.i18n.bt("Enquête Pinterest", "Pinterest Survey", "Accessible label for survey frame", undefined, true),"data-test-id":"anket-iframe"});return i&&!n?(0,a.jsx)(r.xu,{position:"absolute",zIndex:new r.Ry(1e3),children:(0,a.jsxs)(r.u_,{accessibilityModalLabel:this.props.i18n.bt("Auriez-vous quelques minutes pour répondre à notre enquête ?", "Have a few minutes to take a survey?", "User evaluation survey", undefined, true),footer:!e&&(0,a.jsxs)(r.xu,{display:"flex",justifyContent:"end",paddingX:1,children:[(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{padding:"6px 8px"}},children:(0,a.jsx)(r.zx,{fullWidth:!0,text:l,onClick:()=>{this.setState({surveyAccepted:!1}),c()}})}),(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{padding:"6px 8px"}},children:(0,a.jsx)(r.zx,{fullWidth:!0,color:"red",text:o,onClick:this.handleShowSurvey})})]}),heading:e?"":h,onDismiss:c,role:"alertdialog",size:e?"lg":"md",children:[(0,a.jsx)(r.xu,{children:m}),!e&&(0,a.jsxs)(r.xu,{padding:3,children:[(0,a.jsx)(r.xv,{children:d}),(0,a.jsx)(r.xv,{children:s})]})]})}):m}}const h=function(e){const t=(0,s.ZP)(),{checkExperiment:i}=(0,o.F)(),r=(0,l.useHistory)(),[c,d]=(0,n.useState)(null),h=(0,n.useRef)(null);return(0,a.jsx)(u,{...e,i18n:t,history:(0,l.useHistory)(),onCloseEnabled:i("discovery_measurements_on_close_survey").anyEnabled,unblock:()=>{var e;h&&(null===(e=h.current)||void 0===e||e.call(h));if(c){const{location:e,action:t}=c;"PUSH"===t?r.push(`${e.pathname}${e.search}`):"POP"===t&&r.goBack()}},block:e=>{h.current=r.block(((t,i)=>(d({location:t,action:i}),e(),!1)))}})};var m=i(121093),p=i(149230),f=i(121151);function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class v extends n.Component{constructor(...e){super(...e),x(this,"state",{surveyLoaded:!1}),x(this,"loadSurvey",(()=>{var e,t;this.setState({surveyLoaded:!0}),null===(e=(t=this.props).view)||void 0===e||e.call(t)})),x(this,"handleDismiss",(()=>{this.props.dismiss(),this.setState({surveyLoaded:!1})})),x(this,"handleComplete",(()=>{this.props.complete(),this.setState({surveyLoaded:!1})}))}componentDidMount(){const{displayData:{delay:e}}=this.props;this.surveyTimer=window.setTimeout(this.loadSurvey,e)}componentWillUnmount(){clearTimeout(this.surveyTimer)}render(){if(!this.state.surveyLoaded)return null;const{displayData:{buttons:e,detailed_text:t,title_text:i}}=this.props;return(0,a.jsx)(f.ZP,{heading:i,accessibilityModalLabel:this.props.i18n.bt("Accepteriez-vous de répondre à une enquête ?", "Would you mind taking a survey?", "User eval survey", undefined, true),onDismiss:this.handleDismiss,size:"sm",footer:(0,a.jsx)(r.kC,{alignItems:"stretch",justifyContent:"end",children:e.map((e=>{if(e.uri){const t=e.uri,i=(0,p.Z)({url:t})?"nofollow":"none";return(0,a.jsx)(r.xu,{marginStart:1,children:(0,a.jsx)(r.zx,{role:"link",href:t,target:"blank",rel:i,fullWidth:!0,color:"red",text:e.text,onClick:this.handleComplete})},e.text)}return(0,a.jsx)(r.xu,{marginStart:1,children:(0,a.jsx)(r.zx,{fullWidth:!0,text:e.text,onClick:this.handleDismiss})},e.text)}))}),children:(0,a.jsx)(r.xu,{padding:3,children:(0,a.jsx)(r.xv,{children:t})})})}}function y(e){const t=(0,s.ZP)();return(0,a.jsx)(v,{...e,i18n:t})}const g=e=>{const{complete:t,dismiss:i,view:n,displayData:o}=e,{anket:s,buttons:r,delay:l,detailed_text:c,subtitle_text:d,title_text:u,action_trigger:m=3}=o,[p,f]=r;return s?(0,a.jsx)(h,{acceptButtonText:f.text,bodyText:c,declineButtonText:p.text,onComplete:t,onDismiss:i,onView:n,presentationDelay:l,subtitleText:d,surveyLink:f.uri,titleText:u,actionTrigger:m}):(0,a.jsx)(y,{complete:t,dismiss:i,displayData:o,view:n})},_=e=>{const{experienceId:t,displayData:i}=e,{delay:o=0}=i,s={...i,delay:0},r={...e,displayData:{...s}},l=(0,n.useRef)(),[c,d]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=["/pin-builder","/idea-pin-builder"],t=e=>window.location.pathname.includes(e),i=()=>{e.some(t)?l.current=setTimeout((()=>i()),3e3):d(!0)};return l.current=setTimeout((()=>i()),o),()=>{clearTimeout(l.current)}}),[t,o]),c?(0,a.jsx)(g,{...r}):null};function b(e){const{placementId:t,targeting:i,eligibleIds:n}=e;return(0,a.jsx)(m.Z,{placementId:t,eligibleTypes:[5],disableAutoView:!0,targeting:i,eligibleIds:n||[],children:({complete:e,dismiss:i,view:n,experience:o})=>{const s=o.display_data,r=o.experience_id;return 1000421===t?(0,a.jsx)(_,{experienceId:r,complete:e,dismiss:i,view:n,displayData:s}):(0,a.jsx)(g,{complete:e,dismiss:i,view:n,displayData:s})}})}},911687:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(164985),o=i(391254),s=i(149230),r=i(898781),l=i(444445),a=i(883119),c=i(785893);const d=(l.yF+l.lX)*l.yc-l.lX,u=Array.from(Array(l.g5-l.yc).keys()).reduce(((e,t)=>{const i=t+l.yc,n=(l.yF+l.lX)*i-l.lX;return e+(0,l.KN)(l.yF,i,i,`.banner-content {\n          width: ${n}px;\n          min-width: ${n}px;\n        }`,l.lX)}),`.banner-content {\n      width: ${d}px;\n      min-width: ${d}px;\n  }`);function h(e){const t=(0,r.ZP)(),{displayData:{backgroundColorNarrow:i,backgroundColorWide:l,backgroundImageNarrow:d,backgroundImageWide:h,canClose:m,completeButtonText:p,coverImage:f,dismissButtonText:x,iconImage:v,layoutNarrow:y,layoutWide:g,links:_=[],linkTitles:b=[],message:w,onCompleteRedirectUrl:C,onDismissRedirectUrl:j,textColorNarrow:A,textColorWide:k,titleText:T,external:S},onComplete:z,onDismiss:P}=e,{windowWidth:E}=(0,n.Z)(),L=E<=480,I=L?y:g,D=!L&&3!==I,W=L?i:l,Z=L?A:k,{altText:N,uri:H}=(L?d:h)||{},{altText:O,uri:B}=f||{},{altText:M,uri:$}=v||{},F=L&&2===I||!L&&2===I,R=L?"96px":"48px",U=L&&3===I,V=({event:e})=>{z&&z(e)},q=({event:e})=>{P&&P(e)},X=p&&!C&&(0,c.jsx)(a.zx,{text:p,onClick:V,color:"white"}),G=(0,s.Z)({url:C})?"nofollow":"none",K=p&&C&&(0,c.jsx)(a.zx,{text:p,onClick:V,href:C,role:"link",rel:G,target:S?"blank":void 0,color:"white",size:"lg"},"naglink"),Y=(0,s.Z)({url:j})?"nofollow":"none",Q=x&&j&&(0,c.jsx)(a.zx,{text:x,onClick:q,href:j,role:"link",rel:Y,target:S?"blank":void 0,color:"white",size:"lg"},"naglink"),J=x&&!j&&(0,c.jsx)(a.zx,{text:x,onClick:q,color:"white",size:"lg"}),ee=m&&(0,c.jsx)(a.hU,{accessibilityLabel:t.bt("Fermer", "Close", "accessibility close label", undefined, true),bgColor:"lightGray",onClick:q,icon:"cancel",iconColor:"gray",size:"md"}),te=_.reduce(((e,t,i)=>{const n=t.startsWith("https://")||t.startsWith("http://")?'rel="noreferrer noopener" target="_blank"':"",o=`<a href="${t}" ${n}>${b[i]}</a>`;return e.replace(`{${i}}`,o)}),w),ie={backgroundColor:W,backgroundImage:!H||F||U?void 0:`url(${H})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return(0,c.jsxs)(a.xu,{direction:D?"row":"column",display:"flex",marginBottom:5,marginEnd:2,marginStart:2,marginTop:2,children:[(0,c.jsx)(o.Z,{unsafeCSS:u}),(0,c.jsx)("div",{className:"banner-content",style:{borderRadius:"16px",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},children:(0,c.jsxs)(a.zd,{rounding:4,width:"100%",children:[U&&B&&(0,c.jsx)(a.kC,{alignItems:"start",height:128,justifyContent:"center",width:"100%",children:(0,c.jsx)(a.Ee,{alt:O||"cover image",fit:"cover",naturalHeight:1,naturalWidth:3,src:B})}),(0,c.jsxs)(a.xu,{"aria-label":N,alignItems:"center",dangerouslySetInlineStyle:{__style:ie},direction:D?"row":"column",display:"flex",justifyContent:"between",marginTop:U?-2:0,padding:6,children:[(0,c.jsxs)(a.kC,{alignItems:"center",direction:D?"row":"column",justifyContent:"between",maxWidth:D?void 0:"560px",children:[F&&$&&(0,c.jsx)(a.xu,{alignItems:"center",direction:"column",display:"flex",justifyContent:"center",marginEnd:D?4:0,marginBottom:D?0:6,children:(0,c.jsx)(a.xu,{height:R,width:R,children:(0,c.jsx)(a.zd,{rounding:D?4:6,children:(0,c.jsx)(a.Ee,{alt:M||"icon",naturalHeight:1,naturalWidth:1,src:$})})})}),!D&&T&&(0,c.jsx)(a.xv,{align:"center",weight:"bold",children:(0,c.jsx)("div",{className:"banner-title",style:{color:Z,fontSize:"28px",marginBottom:"8px"},children:T})}),te&&(0,c.jsxs)(a.xv,{align:D?"start":"center",overflow:"normal",children:[(0,c.jsx)("style",{dangerouslySetInnerHTML:{__html:`\n                        .banner-text a {\n                          color: ${Z||""};\n                          font-weight: bold;\n                        }`}}),(0,c.jsx)("div",{className:"banner-text",dangerouslySetInnerHTML:{__html:te},style:{color:Z}})]})]}),(0,c.jsx)(a.xu,{marginBottom:D?0:-1,marginStart:D?4:0,marginTop:D?0:4,children:(0,c.jsxs)(a.kC,{alignItems:"center",justifyContent:"center",wrap:!D,gap:{row:2,column:0},children:[J||Q,X||K,ee]})})]})]})})]})}},164985:(e,t,i)=>{i.d(t,{Z:()=>n});function n(){let e=800,t=400;return"undefined"!=typeof window&&(e=window.innerHeight,t=window.innerWidth),{windowHeight:e,windowWidth:t}}},232843:(e,t,i)=>{i.d(t,{H:()=>o,W:()=>s});var n=i(425288);const{Provider:o,useMaybeHook:s}=(0,n.Z)("PinCreateDeleteContext")},575160:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(63444),o=i(883119),s=i(785893);function r({coverImages:e,height:t,isHovered:i,onClick:r,onMouseEnter:l,onMouseLeave:a,textType:c,text:d,url:u,width:h}){const m=e&&(e["236x"]||e["280x280"]);return(0,s.jsx)(n.Z,{backgroundColor:"gray",coverImage:m,height:t,isHovered:i,onClick:r,onMouseEnter:l,onMouseLeave:a,url:u,width:h,children:(0,s.jsx)(o.xu,{alignItems:"center",display:"flex",height:t,justifyContent:"center",padding:3,position:"absolute",top:!0,width:h||"100%",children:"text"===c?(0,s.jsx)(o.xu,{alignItems:"center",display:"flex",height:48,padding:3,children:(0,s.jsx)(o.X6,{align:"center",size:"500",color:"light",children:d})}):(0,s.jsx)(o.xu,{alignItems:"center",color:"secondary",display:"flex",height:48,padding:3,rounding:"pill",children:(0,s.jsx)(o.xv,{align:"center",weight:"bold",children:d})})})})}},89061:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(189734),o=i.n(n),s=i(898781),r=i(19121),l=i(883119),a=i(349700),c=i(785893);function d(e){var t,i,n,o;const s=null!==(t=null!==(i=null==e?void 0:e.imageMediumUrl)&&void 0!==i?i:null==e?void 0:e.image_medium_url)&&void 0!==t?t:"";return{name:null!==(n=null!==(o=null==e?void 0:e.fullName)&&void 0!==o?o:null==e?void 0:e.full_name)&&void 0!==n?n:"",src:"https://s.pinimg.com/images/user/default_75.png"===s?void 0:s}}function u({board:e,forceViewer:t,isCompact:i,ownerOnly:n}){var u,h,m,p,f;const x=(0,s.ZP)(),v=(0,r.Z)(),y=n?[d(null==e?void 0:e.owner)]:function(e,t,i){const{collaborated_by_me:n,collaborating_users:s,owner:r}=null!=e?e:{},l=null!=s?s:[],a=[r];if(n||i){const e=l.findIndex((e=>t.isAuth&&e.id===t.id));if(-1!==e){const t=l.splice(e,1)[0];a.push(t)}else a.push(t)}const c=o()(l,"full_name");return[...a,...c]}(e,v,t).map(d),g=y.slice(0,3).map((e=>e.name));let _="";switch(y.length){case 3:_=(0,a.Wc)(`${x.bt("{{ first }}, {{ second }}, et {{ last }}", "{{ first }}, {{ second }}, and {{ last }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars", undefined, true)}`,{first:`${null!==(u=g[0])&&void 0!==u?u:""}`,second:`${null!==(h=g[1])&&void 0!==h?h:""}`,last:`${null!==(m=g[2])&&void 0!==m?m:""}`});break;case 2:_=(0,a.Wc)(`${x.bt("{{ first }} et {{ second }}", "{{ first }} and {{ second }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars", undefined, true)}`,{first:`${null!==(p=g[0])&&void 0!==p?p:""}`,second:`${null!==(f=g[1])&&void 0!==f?f:""}`});break;default:_=g.join(", ")}const b=y.length>3?(0,a.Wc)(`, ${x.nbt(["Collaborateurs : {{ userNames }} et {{ leftCount }} de plus.", "Collaborateurs : {{ userNames }} et {{ leftCount }} de plus."], y.length - 3, "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree", true)}`,{userNames:_,leftCount:""+(y.length-3)}):(0,a.Wc)(`, ${x.bt("Collaborateurs : {{ userNames }}.", "Collaborators: {{ userNames }}.", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree", undefined, true)}`,{userNames:_});return(0,c.jsx)(l.HE,{accessibilityLabel:b,collaborators:y,size:i?"xs":"sm"})}},281527:(e,t,i)=>{function n(e,t){return{type:"SEARCH_PIN_CLOSEUP_VIEWED",payload:{pinId:e,query:t}}}function o(e){return{type:"SEARCH_QUERY_STARTED",payload:{query:e}}}function s(e){return{type:"SEARCH_QUERY_INVALIDATED",payload:{query:e}}}i.d(t,{Y4:()=>n,g4:()=>o,sb:()=>s})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50398.fr-23990421ebf76115.mjs.map