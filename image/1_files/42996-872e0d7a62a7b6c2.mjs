(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42996],{829932:e=>{e.exports=function(e,r){for(var t=-1,o=null==e?0:e.length,s=Array(o);++t<o;)s[t]=r(e[t],t,e);return s}},880531:(e,r,t)=>{var o=t(562705),s=t(829932),i=t(701469),n=t(733448),a=o?o.prototype:void 0,c=a?a.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(i(r))return s(r,e)+"";if(n(r))return c?c.call(r):"";var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t}},479833:(e,r,t)=>{var o=t(880531);e.exports=function(e){return null==e?"":o(e)}},782677:(e,r,t)=>{function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function n(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function a(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,r,t){return Object.keys(e).reduce((function(r,o){var s=""+o;return r.has(s)?r.set(s,t(r.get(s),e[s])):r}),r)}t.d(r,{Fv:()=>I,fK:()=>A});var d=function(){function e(e,r,t){if(void 0===r&&(r={}),void 0===t&&(t={}),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var o=t,s=o.idAttribute,n=void 0===s?"id":s,c=o.mergeStrategy,d=void 0===c?function(e,r){return i({},e,r)}:c,u=o.processStrategy,l=void 0===u?function(e){return i({},e)}:u,p=o.fallbackStrategy,_=void 0===p?function(e,r){}:p;this._key=e,this._getId="function"==typeof n?n:function(e){return function(r){return a(r)?r.get(e):r[e]}}(n),this._idAttribute=n,this._mergeStrategy=d,this._processStrategy=l,this._fallbackStrategy=_,this.define(r)}var r=e.prototype;return r.define=function(e){this.schema=Object.keys(e).reduce((function(r,t){var o,s=e[t];return i({},r,((o={})[t]=s,o))}),this.schema||{})},r.getId=function(e,r,t){return this._getId(e,r,t)},r.merge=function(e,r){return this._mergeStrategy(e,r)},r.fallback=function(e,r){return this._fallbackStrategy(e,r)},r.normalize=function(e,r,t,o,s,i){var n=this,a=this.getId(e,r,t),c=this.key;if(c in i||(i[c]={}),a in i[c]||(i[c][a]=[]),i[c][a].some((function(r){return r===e})))return a;i[c][a].push(e);var d=this._processStrategy(e,r,t);return Object.keys(this.schema).forEach((function(r){if(d.hasOwnProperty(r)&&"object"==typeof d[r]){var t=n.schema[r],a="function"==typeof t?t(e):t;d[r]=o(d[r],d,r,a,s,i)}})),s(this,d,e,r,t),a},r.denormalize=function(e,r){var t=this;return a(e)?c(this.schema,e,r):(Object.keys(this.schema).forEach((function(o){if(e.hasOwnProperty(o)){var s=t.schema[o];e[o]=r(e[o],s)}})),e)},s(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),u=function(){function e(e,r){r&&(this._schemaAttribute="string"==typeof r?function(e){return e[r]}:r),this.define(e)}var r=e.prototype;return r.define=function(e){this.schema=e},r.getSchemaAttribute=function(e,r,t){return!this.isSingleSchema&&this._schemaAttribute(e,r,t)},r.inferSchema=function(e,r,t){if(this.isSingleSchema)return this.schema;var o=this.getSchemaAttribute(e,r,t);return this.schema[o]},r.normalizeValue=function(e,r,t,o,s,i){var n=this.inferSchema(e,r,t);if(!n)return e;var a=o(e,r,t,n,s,i);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,r,t)}},r.denormalizeValue=function(e,r){var t=a(e)?e.get("schema"):e.schema;return this.isSingleSchema||t?r((this.isSingleSchema?void 0:a(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[t]):e},s(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),l=function(e){function r(r,t){if(!t)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,r,t)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,s,i){return this.normalizeValue(e,r,t,o,s,i)},t.denormalize=function(e,r){return this.denormalizeValue(e,r)},r}(u),p=function(e){function r(){return e.apply(this,arguments)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,s,n){var a=this;return Object.keys(e).reduce((function(r,t,c){var d,u=e[t];return null!=u?i({},r,((d={})[t]=a.normalizeValue(u,e,t,o,s,n),d)):r}),{})},t.denormalize=function(e,r){var t=this;return Object.keys(e).reduce((function(o,s){var n,a=e[s];return i({},o,((n={})[s]=t.denormalizeValue(a,r),n))}),{})},r}(u),_=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},R=function(e){return Array.isArray(e)?e:Object.keys(e).map((function(r){return e[r]}))},E=function(e,r,t,o,s,i,n){return e=_(e),R(r).map((function(r,a){return s(r,t,o,e,i,n)}))},y=function(e){function r(){return e.apply(this,arguments)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,s,i){var n=this;return R(e).map((function(e,a){return n.normalizeValue(e,r,t,o,s,i)})).filter((function(e){return null!=e}))},t.denormalize=function(e,r){var t=this;return e&&e.map?e.map((function(e){return t.denormalizeValue(e,r)})):e},r}(u),f=function(e,r,t,o,s,n,a){var c=i({},r);return Object.keys(e).forEach((function(t){var o=e[t],i="function"==typeof o?o(r):o,d=s(r[t],r,t,i,n,a);null==d?delete c[t]:c[t]=d})),c},m=function(e,r,t){if(a(r))return c(e,r,t);var o=i({},r);return Object.keys(e).forEach((function(r){null!=o[r]&&(o[r]=t(o[r],e[r]))})),o},S=function e(r,t,o,s,i,n){return"object"==typeof r&&r?"object"!=typeof s||s.normalize&&"function"==typeof s.normalize?s.normalize(r,t,o,e,i,n):(Array.isArray(s)?E:f)(s,r,t,o,e,i,n):r},A={Array:y,Entity:d,Object:function(){function e(e){this.define(e)}var r=e.prototype;return r.define=function(e){this.schema=Object.keys(e).reduce((function(r,t){var o,s=e[t];return i({},r,((o={})[t]=s,o))}),this.schema||{})},r.normalize=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return f.apply(void 0,[this.schema].concat(r))},r.denormalize=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return m.apply(void 0,[this.schema].concat(r))},e}(),Union:l,Values:p},I=function(e,r){if(!e||"object"!=typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var t={},o=function(e){return function(r,t,o,s,i){var n=r.key,a=r.getId(o,s,i);n in e||(e[n]={});var c=e[n][a];e[n][a]=c?r.merge(c,t):t}}(t);return{entities:t,result:S(e,e,null,r,o,{})}}},983360:(e,r,t)=>{t.d(r,{$o:()=>a,$t:()=>L,AC:()=>Ae,AO:()=>oe,AZ:()=>m,Ae:()=>D,BM:()=>R,C2:()=>$,CB:()=>ue,CD:()=>S,DC:()=>T,Df:()=>I,F5:()=>i,Fi:()=>y,Fl:()=>_,GG:()=>J,HQ:()=>z,IY:()=>ie,JG:()=>q,K0:()=>n,Kp:()=>se,L6:()=>s,LB:()=>C,Ly:()=>H,MA:()=>k,MU:()=>o,NE:()=>pe,OO:()=>X,Pz:()=>Z,Qj:()=>ee,R8:()=>w,Th:()=>W,U1:()=>x,UD:()=>fe,Uf:()=>B,Wn:()=>Re,XA:()=>ne,YZ:()=>u,Yn:()=>A,ZX:()=>N,a9:()=>h,aj:()=>V,b6:()=>l,c7:()=>g,cZ:()=>M,cs:()=>F,dF:()=>v,dO:()=>ce,eI:()=>G,fz:()=>d,hC:()=>Se,hl:()=>b,il:()=>me,j_:()=>Ee,l_:()=>c,le:()=>K,lj:()=>ye,m2:()=>_e,mU:()=>de,nk:()=>E,o3:()=>te,pV:()=>Y,pd:()=>le,q:()=>Q,tg:()=>U,u2:()=>p,vH:()=>j,vW:()=>ae,wc:()=>f,xV:()=>O,xl:()=>P,zB:()=>re});const o="APPEND_FEED_ITEMS",s="DISMISS_UNAUTH_APP_UPSELL",i="SETTINGS_CHANGE",n="TOPIC_FOLLOW",a="PIN_ADD",c="PIN_DELETE",d="PIN_EDIT",u="PIN_UNDO_SAVE",l="PIN_IMPRESSIONS",p="PINS_MOVE",_="PINS_MOVE_ALL",R="SET_SESSION_DATA",E="BOARD_SECTION_EDIT",y="BOARD_COLLABORATOR_DELETE",f="BOARD_COLLABORATOR_ADD",m="BOARD_INVITE_APPROVED_BY_VIEWER",S="BOARD_INVITE_DENIED_BY_VIEWER",A="BOARD_SECTION_DELETE",I="AUTHENTICATE_USER",g="REGISTER_USER",h="SET_LOGIN_SIGNUP_FROM",T="UPDATE_CURRENT_SEARCH",b="UPDATE_RECENT_SEARCHES",O="CLEAR_RECENT_SEARCH",D="CLEAR_RECENT_PERSONAL_SEARCH",P="CLEAR_RECENT_SEARCHES",v="CLEAR_RECENT_PERSONAL_SEARCHES",N="COMPLETE_STORY",L="SET_NUM_SIGNUP_STEPS",C="SET_OWN_PROFILE_PINS_REFRESH",F="SHOW_REPIN_ANIMATION",U="HIDE_REPIN_ANIMATION",B="MESSAGE_SEND_PENDING",$="MESSAGE_SEND_PENDING_SUCCESS",w="MESSAGE_SEND_PENDING_FAILURE",M="ONE_TAP_SAVE",x="ONE_TAP_UNSAVE",G="CLEAR_MESSAGES_BADGE",k="CLEAR_MESSAGE_BADGE",H="RELOAD_VISUAL_SEARCH_ANNOTATIONS",V="SHOW_NUX_HOMEFEED_LOADER",z="SHOW_BIZ_NUX_HOMEFEED_LOADER",j="SET_VIEWED_IMAGE",K="SET_VIEWED_SHARED_PINS",Y="SHOW_NAV_FOOTER",q="HIDE_NAV_FOOTER",W="SET_MESSENGER_CAMPAIGN_DATA",Z="LOGGED_OUT_USER_INFO_FOUND",X="LOGGED_OUT_USER_INFO_NOT_FOUND",Q="PIN_BUILDER_LOADED_IMAGES",J="UPDATE_PIN_BUILDER_INPUT",ee="SET_ACTIVE_HOMEFEED_TAB",re="SET_MARKETING_PARAMS",te="SET_SOCIAL_SEASONAL_BOARD",oe="SET_SHARE_ON_BOARD_PAGE",se="UPDATE_PIN_REACTION_COUNT",ie="SET_FLASHLIGHT_CROP_SOURCE",ne="ALLOW_ALL_COOKIES",ae="SCROLL_TO_CLOSEUP_PIN",ce="STOP_SCROLL_TO_CLOSEUP_PIN",de="UPDATE_CONTACT_REQUEST_STATUS",ue="REMOVE_CONTACT_REQUESTS",le="SHOW_TOAST_CONTACT_REQUEST_UNDO",pe="SHOW_BLOCK_UNBLOCK_MODAL_CONTACT_REQUEST",_e="CONVERSATION_DELETE",Re="DISMISS_UNAUTH_SAVE",Ee="SET_UNAUTH_SAVE_PIN_ID",ye="COMPLETE_UNAUTH_SAVE_ACTION",fe="UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",me="SET_LANDING_PAGE_TYPE",Se="REPLACE_STATE",Ae="SET_DARK_MODE"},332611:(e,r,t)=>{t.d(r,{CK:()=>p,N:()=>f,Qu:()=>_,UT:()=>l,YX:()=>y,d9:()=>R,fO:()=>c,kd:()=>E,pz:()=>d});var o=t(6637),s=t(764990),i=t(172071),n=t(957191);let a;const c=(e,r)=>t=>{const s=r?{extra_context:e,targeting:r}:{extra_context:e};return o.Z.create("UserExperiencePlatformResource",s).callGet().then((e=>e.resource_response?t((0,n.OD)(e.resource_response.data)):void 0))},d=(e,r,t,i)=>(c,d)=>{if(r)return Promise.resolve();if(i&&(a=i),1===e.length){const r=e[0],o=d().experiences[r],i=(null==o?void 0:o.extraContext)||null;if(JSON.stringify(i)===JSON.stringify(t)||(0,s.E3)(o)&&!(t&&Object.keys(t).length>0))return Promise.resolve()}return o.Z.create("UserExperienceResource",{placement_ids:e,extra_context:t||null,targeting:i}).callGet().then((e=>e.resource_response?c((0,n.cL)(e.resource_response.data)):void 0))},u=(e,r)=>(t,s,i,d=!1,u,l)=>(p,_)=>{const{experiences:R,experiencesMulti:E}=_();let y=null,f=!0;var m;d||(f=R[t]&&R[t].experience_id===s,y=f?R[t]:Array.isArray(E[t])&&(null===(m=E[t])||void 0===m?void 0:m.find((e=>e.experience_id===s))));if(y&&y.experience_id===s||d&&t&&s){const d=o.Z.create(e,{placed_experience_id:`${t}%3A${s}`,extra_context:null!=u?u:{},targeting:l}),_=f?n.Yb:n.xW;switch(r){case"dismissed":return d.callDelete().then((()=>{p(_(t,s,r)),p(c(void 0,a))}));case"completed":return d.callUpdate().then((()=>{i||(p(_(t,s,r)),p(c(void 0,a)))}));case"viewed":return p(_(t,s,r)),d.callUpdate().then((()=>{1000162===t&&p(c())}));case"completedWithoutHomefeed":return d.callUpdate().then((()=>{i||p(_(t,s,r))}));default:return Promise.resolve()}}return Promise.resolve()},l=u("UserExperienceViewedResource","viewed"),p=u("UserExperienceCompletedResource","completed"),_=u("UserExperienceResource","dismissed"),R=u("UserExperienceCompletedResource","completedWithoutHomefeed"),E=(e,r)=>(t,s)=>{const{experiences:n}=s(),a=n[e];a&&a.triggerable_placed_exps&&a.triggerable_placed_exps.length&&a.triggerable_placed_exps.forEach((t=>{const[,s]=t.split(":");let n=r;a.metadata&&a.metadata[s]&&(n=Object.assign({},r,a.metadata[s])),o.Z.create("UserExperienceTriggerResource",{placed_experience_id:t.replace(":","%3A"),extra_context:n}).callUpdate().then((()=>{((e,r,t={})=>{i.Z.increment(`${e}.${r}`,1,t)})("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:s})}))}))},y=e=>(r,t)=>{r(E(e));const{experiences:o}=t();return o[e]},f=(e,r,t)=>o=>{t&&(a=t),o(E(e,r)),r&&Object.keys(r).length>0&&o(d([e],!1,r,t))}},764990:(e,r,t)=>{function o(e){return!!e&&0!==e.type}t.d(r,{A0:()=>i,E3:()=>o,MQ:()=>s});const s=(e,r,t)=>{const s=e[t];return r[t]&&o(s)?s:null};function i(e){var r;return null===(r=e.display_data)||void 0===r?void 0:r.anchor}},207737:(e,r,t)=>{t.d(r,{$S:()=>o,V$:()=>s,_4:()=>n,iY:()=>a,mR:()=>i});const o="REFRESH_ALL_EXPERIENCES_MULTI",s="UPDATE_EXPERIENCE_MULTI",i="FETCH_EXPERIENCES",n="REFRESH_ALL_EXPERIENCES",a="UPDATE_EXPERIENCE"},957191:(e,r,t)=>{t.d(r,{NW:()=>n,OD:()=>c,Yb:()=>a,cL:()=>d,xW:()=>i});var o=t(6637),s=t(207737);const i=(e,r,t)=>({type:s.V$,payload:{placementId:e,experienceId:r,status:t}}),n=e=>r=>o.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then((e=>{return e.resource_response?r((t=e.resource_response.data,{type:s.$S,payload:{experiencesMulti:t}})):void 0;var t})),a=(e,r,t)=>({type:s.iY,payload:{placementId:e,experienceId:r,status:t}}),c=e=>({type:s._4,payload:{experiences:e}}),d=e=>({type:s.mR,payload:{experiences:e}})},311560:(e,r,t)=>{t.d(r,{Z:()=>o});const o=e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}}},932995:(e,r,t)=>{function o(e,r,t){const o=[...e],s=o.splice(r,1)[0];return o.splice(t,0,s),o}t.d(r,{Z:()=>o})},909499:(e,r,t)=>{t.d(r,{Hd:()=>n,_R:()=>s,lw:()=>o,wF:()=>i});const o={PINS:"pins",PINS_BUYABLE:"buyable_pins",PINS_MINE:"my_pins",PINS_VIDEO:"videos",BOARDS:"boards",USERS:"users",IDEA_PINS:"idea_pins"},s=e=>{switch(e){case o.PINS:return 43;case o.PINS_MINE:return 107;case o.PINS_BUYABLE:return 254;case o.PINS_VIDEO:return 3306;case o.BOARDS:return 44;case o.USERS:return 45;default:return null}},i=e=>{switch(e){case o.PINS:return 60;case o.PINS_MINE:return 63;case o.PINS_BUYABLE:return 3800;case o.PINS_VIDEO:return 64;case o.BOARDS:return 61;case o.USERS:return 62;default:return null}},n=e=>{switch(e){case o.USERS:return 1000392;case o.PINS_BUYABLE:return 1000391;case o.PINS:default:return 29}}},648284:(e,r,t)=>{function o({appliedProductFilters:e,autoCorrectionDisabled:r,filters:t,query:o,scope:s,selectedPinImgSig:i,user:n}){const a=[s,t,e,n,i,o].map((e=>null!=e?e:"")).join(":");return r?"auto-correction-disabled:"+a:a}function s(e){const{autoCorrectionDisabled:r,appliedProductFilters:t,appliedFilters:o,filters:s,selectedPinImgSig:i,query:n,rs:a,scope:c,bubbleId:d,user:u}=e;return{name:"BaseSearchResource",options:function({autoCorrectionDisabled:e=!1,appliedFilters:r=null,appliedProductFilters:t=null,bubbleId:o=null,filters:s=null,query:i=null,rs:n="direct_navigation",scope:a="pins",selectedPinImgSig:c=null,sourceId:d=null,user:u}){return{article:o,applied_filters:r,appliedProductFilters:t,auto_correction_disabled:e,corpus:c?"personalize":null,customized_rerank_type:c?"manas_graph_sage_only_wand_rewrite":null,filters:s,query:i,query_pin_sigs:c,redux_normalize_feed:!0,rs:n,scope:a,source_id:d,user:u}}({autoCorrectionDisabled:!!r,appliedProductFilters:t,appliedFilters:o,filters:s,query:n,rs:a,scope:c,selectedPinImgSig:i,bubbleId:d,user:u})}}t.d(r,{Ht:()=>s,Tb:()=>o})},91456:(e,r,t)=>{t.d(r,{GY:()=>n,LM:()=>c,h9:()=>d,r$:()=>a});var o=t(385740),s=t(909499);const i=["search_articles_story","shop_tab_upsell","story_pins_search_upsell","structured_search_bubble","user_style_story_v2","search_for_you_upsell"];function n({query:e,scope:r}){return`${e}-${r}`}function a({query:e,rs:r,scope:t},i){const n=(0,o.BE)(),a=!(null!=n&&n.viewType||null!=n&&n.viewParameter),c=(0,s.wF)(t);if(!a&&c){const{viewType:t,viewParameter:o}=null!=n?n:{};i({event_type:c,view_type:t,view_parameter:o,aux_data:{query:e,rs:r||"Unknown"}})}"hashtag_closeup"===r?i({event_type:101,component:13065,element:10273,view_type:142}):"hashtag_pinrep"===r&&i({event_type:101,component:0,element:10349,view_type:142})}const c=(e=[])=>{let r=!0;return e.reduce(((e,t)=>{var o;return r&&t.story_type&&i.includes(t.story_type)&&0===(null===(o=t.display_options)||void 0===o?void 0:o.num_columns_requested)?e.searchFullWidthStories.push(t):(r=!1,e.filteredResults.push(t)),e}),{searchFullWidthStories:[],filteredResults:[]})};function d(e){const{results:r=[]}=e||{};return!!r.find((e=>!(null==e||!e.is_eligible_for_filters)))}},848900:(e,r,t)=>{t.d(r,{Z:()=>o});const o=(e,r)=>`${e}:${r||""}`},47495:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(583228);const s={AggregatedCommentResource:o.rm,AggregatedCommentFeedResource:o.LR,AggregatedCommentReplyResource:o.rm,AggregatedCommentReplyFeedResource:o.LR,AggregatedActivityFeedResource:o.LR,BestPinsFeedAltResource:o.LR,BoardArchiveResource:o.LR,BoardCollaboratorsResource:o.LR,BoardContentRecommendationResource:o.LR,BoardFeedResource:o.LR,BoardFollowingResource:o.LR,BoardInviteResource:o.sf,BoardInvitesResource:o.Ht,BoardlessPinsResource:o.LR,BoardPickerBoardsResource:{all_boards:o.LR,boards_shortlist:o.LR},BoardSectionEditResource:o._F,BoardSectionsRepinResource:o.LR,BoardSectionsResource:o.LR,BoardsFeedResource:o.LR,BoardResource:o.IY,BoardSectionResource:o._F,BoardSectionPinsResource:o.LR,BoardToolsFeedResource:o.LR,ContactRequestsResource:o.LR,ConversationsResource:o.LR,ConversationMessagesResource:o.dq,DidItCommentsResource:o.LR,DidItLikedByResource:o.Gn,DidItUserFeedResource:o.LR,ExploreArticleBlockPinResource:o.LR,ExploreArticleBlockSearchResource:o.LR,ExploreArticleBlockUserResource:o.LR,ExploreArticleBlockUserDidItDataResource:o.LR,ExploreArticleResource:o.yg,FollowingFeedResource:o.LR,HolidaySpotlightRelatedFeedResource:o.LR,HolidaySpotlightResource:o.LR,InterestFollowingResource:o.LR,InterestResource:o.cC,MoreIdeasTabsBoardsResource:o.LR,NewsHubResource:o.LR,NewsHubDetailsResource:o.LR,NewsHubSummaryResource:o.t6,NuxInterestsResource:o.LR,NuxTopicToCreatorsResource:o.Gn,PartnerPermissionsResource:o.Ay,PinResource:o.Cj,PinCatalogResource:o.LR,PinsFromBrandResource:o.LR,ReactionsResource:o.fE,RelatedArticlesResource:o.LR,RelatedInterestsResource:o.LR,RelatedModulesResource:o.LR,RelatedPinFeedResource:o.LR,RelatedProductFeedResource:o.LR,RelatedStreamResource:o.LR,RepinResource:o.Cj,BaseSearchResource:{results:o.LR},SearchResource:o.LR,SectionToolsFeedResource:o.LR,ShareSuggestionsTypeaheadResource:{items:o.LR},ShoppingFeedModularizedResource:o.LR,StoryFeedResource:o.LR,StoryPinTaggedProductsResource:o.LR,SuggestedCreatorFollowsResource:o.Gn,TodayArticleFeedResource:o.LR,IdeasHubTodayArticlesResource:o.LR,TodayArticleResource:o.iF,TodayTabInterestFeedResource:o.LR,TodayTabResource:o.LR,TopicFeedResource:o.LR,UnifiedCommentsResource:o.LR,UserActivityPinsResource:o.LR,UserFollowingResource:o.LR,UserRecentActivityResource:o.LR,UserSimilarBusinessesResource:o.LR,UserHomefeedResource:o.LR,UserPinsResource:o.LR,UserSettingsResource:o.EA,UserStoryPinsFeedResource:o.LR,UserResource:o.EA,VideosFeedResource:o.LR,VisualLiveSearchResource:{results:o.LR},VisualLiveSearchProductFeedResource:o.LR,VisualSearchFlashlightUnifiedResource:o.LR,SeoTier1CandidateResource:o.LR}},583228:(e,r,t)=>{t.d(r,{Ay:()=>v,Cj:()=>d,EA:()=>i,Gn:()=>O,Ht:()=>b,IY:()=>c,LR:()=>P,_F:()=>p,cC:()=>S,dq:()=>R,fE:()=>l,iF:()=>m,rm:()=>n,sN:()=>D,sf:()=>I,t6:()=>T,yg:()=>y});var o=t(782677);const s=Object.freeze({aggregatedComment:"aggregatedComments",article:"articles",board:"boards",boardsection:"boardsections",contactrequest:"contactrequests",conversation:"conversations",conversationMessage:"conversationMessages",creatorRecommendationItem:"creatorRecommendationItems",inbox:"inbox",notification:"notifications",partnerPermissions:"partnerPermissions",pin:"pins",reaction:"reactions",reportReasons:"reportReasons",story:"stories",todayArticle:"todayArticles",topic:"topics",triedit:"triedits",user:"users",invite:"collaboratorinvite",offer:"offers"}),i=new o.fK.Entity(s.user),n=new o.fK.Entity(s.aggregatedComment,{user:i,tagged_users:[i]}),a=new o.fK.Entity(s.article,{curator:i}),c=new o.fK.Entity(s.board),d=new o.fK.Entity(s.pin,{board:c,comments:{data:[{commenter:i}]}}),u=new o.fK.Entity(s.reaction,{user:i}),l=new o.fK.Array(u),p=new o.fK.Entity(s.boardsection,{board:c,preview_pins:[d]}),_=new o.fK.Entity(s.conversationMessage,{sender:i,users:[i],board:c,pin:d,user:i}),R=new o.fK.Array(_),E=new o.fK.Entity(s.contactrequest),y=new o.fK.Entity(s.story,{cover_pin:d,user:i}),f=new o.fK.Entity(s.triedit,{pin:d,user:i}),m=new o.fK.Entity(s.todayArticle,{article_creator_user:i,content_pin:d,content_pin_official_user:i,video_pin:d}),S=new o.fK.Entity(s.topic,{},{processStrategy:(e,r,t)=>({...e,slug:e.slug?e.slug:e.url_name?e.url_name.includes(":")?e.url_name.split(":")[1]:e.url_name:""})}),A=new o.fK.Entity(s.creatorRecommendationItem,{user:i,interest:S}),I=new o.fK.Entity(s.invite,{invited_by_user:i,invited_user:i,board:c},{idAttribute:e=>`${e.board.id}:${e.invited_user.id}`}),g=e=>{switch(e.type){case"aggregatedcomment":return"aggregatedComment";case"conversationMessage":return"conversationMessage";case"creatorrecommendationitem":return"creatorRecommendationItem";case"explorearticle":return"article";case"news":return"notification";case"interest":return"topic";case"userdiditdata":return"triedit";case"board_section":return"boardsection";case"klp_featured_data":return"topic";case"todayarticle":return"todayArticle";default:return e.type}},h=new o.fK.Union({user:i,board:c,invite:I,pin:d,topic:S,triedit:f},g),T=new o.fK.Entity(s.notification,{content_items:[{content_object:h}],header_icon_objects:[h]}),b=new o.fK.Array(I),O=new o.fK.Array(i),D=new o.fK.Array(c),P=new o.fK.Array({aggregatedComment:n,article:a,board:c,boardsection:p,contactrequest:E,conversationMessage:_,creatorRecommendationItem:A,notification:T,pin:d,story:y,todayArticle:m,topic:S,triedit:f,user:i},g,(e=>{switch(e.type){case"collaboratorinvite":return e.board.id;case"category":return"key";default:return"id"}}));y.define({objects:P});const v=new o.fK.Entity(s.partnerPermissions)},778821:(e,r,t)=>{t.d(r,{DV:()=>l,J:()=>y,ZP:()=>A});var o=t(848900),s=t(932995),i=t(47495),n=t(91456),a=t(648284),c=t(983360),d=t(583228),u=t(338739);const l={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregatedCommentReplies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardlessPins",BOARD_SECTIONS:"boardSections",BOARD_SECTION_PINS:"board-section-pins",CALL_TO_CREATE_RESPONSES_FEED:"callToCreateResponsesFeed",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unifiedComments",USER_DID_IT_DATA:"userDidItData"},p=new Set(["PinResource","RepinResource"]),_={ApiResource:e=>{return"/v3/orientation/nux_creator_recommendations/"===(null==e?void 0:e.url)?"nux-creator-recommendations":null!=e&&e.url.match(/\/v3\/call_to_create_pins\/([0-9]|[a-z]|[A-Z])+\/pins\//)?`call-to-create-pins:${e.pin_id}`:"/v3/users/me/interests/"===(null==e?void 0:e.url)?`recommended-interests:${null===(r=e.data)||void 0===r?void 0:r.blend_type}`:"";var r},AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`aggregated-comment-replies:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:e=>"archived-boards",BoardCollaboratorsResource:e=>`board-collaborators:${e.board_id}`,BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:e=>"conversations",DidItCommentsResource:e=>`aggregated-comment-replies:${e.objectId}`,DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,ExploreArticleBlockSearchResource:e=>`explore-search:${e.article_id}:${e.block_id}`,ExploreArticleBlockUserResource:e=>`explore-user:${e.article_id}:${e.block_id}`,ExploreArticleBlockPinResource:e=>`explore-pin:${e.article_id}:${e.block_id}`,ExploreArticleBlockUserDidItDataResource:e=>`explore-did_it:${e.article_id}:${e.block_id}`,ExploreArticleResource:({response:e})=>{if(!e)return"";const r="explore_tab_pin".length,t=e.resource_response.data,{story_type:o}=t?t.objects[0]:{story_type:""};return`explore-${o.slice(r)}:${t.id}`},FollowingFeedResource:()=>"following",HolidaySpotlightRelatedFeedResource:e=>`holiday-spotlight-related:${e.storyType}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:e=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{const r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},BaseSearchResource:e=>{const r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.appliedProductFilters}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:()=>"user-recent-activity",UserSimilarBusinessesResource:e=>`user-similar-business:${e.username}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:e=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},R={ApiResource:({options:e})=>null!=e&&e.url.match(/\/v3\/call_to_create_pins\/([0-9]|[a-z]|[A-Z])+\/pins\//)?{type:l.CALL_TO_CREATE_RESPONSES_FEED,id:e.pin_id}:null,AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:l.USER_DID_IT_DATA,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:l.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:r}})=>({type:e?l.AGGREGATED_COMMENT_REPLIES:l.AGGREGATED_COMMENTS,id:r,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:l.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:l.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:l.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:l.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:r}})=>({type:l.PROFILE_BOARDS,id:(0,o.Z)(e,r)}),BaseSearchResource:({options:{auto_correction_disabled:e,appliedProductFilters:r,scope:t,filters:o,query_pin_sigs:s,query:i,user:c},response:d})=>{var u;return{type:l.SEARCH_PINS,id:(0,a.Tb)({appliedProductFilters:r,autoCorrectionDisabled:e,filters:o,query:i,selectedPinImgSig:s,scope:t,user:c}),items:null!==(u=d.resource_response.data)&&void 0!==u&&u.results?(0,n.LM)(d.resource_response.data.results).filteredResults:[]}},DidItCommentsResource:({options:{objectId:e}})=>({type:l.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:l.USER_DID_IT_DATA,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:l.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:l.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:l.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:l.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:l.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:l.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:r}})=>({type:l.UNIFIED_COMMENTS,id:e,reversed:r}),UserActivityPinsResource:({options:{user_id:e}})=>({type:l.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:r}})=>({type:l.STORY_PINS_FEED,id:r,items:e.resource_response.data||[]})},E=(e,{pinId:r,oldFeedId:t,newFeedId:o})=>t===o?e:((e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:[{type:"pin",id:r},...e[t]]}:e)(((e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:e[t].filter((e=>!("pin"===e.type&&e.id===r)))}:e)(e,{pinId:r,feedId:t}),{pinId:r,feedId:o}),y=(e,r)=>e in _?_[e](r):null,f=(e,r)=>r?`board-section-pins:${r}`:`boardfeed:${e}`,m=(e,r)=>e.map((({id:e,schema:t})=>{var o;return t?{id:e,type:t,trackingParams:"pin"===t?r.pins[e].tracking_params:void 0,user_id:"creatorRecommendationItem"===t?null===(o=r.creatorRecommendationItems[e])||void 0===o?void 0:o.user_id:void 0}:null})).filter(Boolean),S=(e,r,t)=>Object.keys(e).reduce(((o,s)=>{const i=e[s]||[],n=i.filter((e=>!(e.type===r&&e.id===t)));return i.length!==n.length&&(o[s]=n),o}),{...e}),A=(e={},r)=>{switch(r.type){case u.zP:case u.aW:{const{payload:o}=r,{resource:s,options:n,normalizedResponse:a,schema:c}=o;if(a&&s in _){const t=((e,r,t)=>{const o=t||i.Z[e];if(o===d.LR)return r.result;if(o===d.sN)return r.result.map((e=>({id:e,schema:"board"})));if(o===d.Gn)return r.result.map((e=>({id:e,schema:"user"})));if(o===d.Ht)return r.result.map((e=>({id:e,schema:"invite"})));if(o===d.fE)return r.result.map((e=>({id:e,schema:"reaction"})));if("object"==typeof o){const e=Object.entries(o).find((([e,r])=>r===d.LR));if(e)return r.result[e[0]]}return null})(s,a,c);if(t&&Array.isArray(t)){const o=_[s](n);if("ShoppingFeedModularizedResource"===s){const{board_id:r,saved_products_only:o}=null!=n?n:{},s=`board-shop-related:${r}`,i=`board-shop-saved:${r}`,c=`board-shop-saved-preview:${r}`,d=[...e[s]||[]],u=[...e[i]||[]],l=[...e[c]||[]];return m(t,a.entities).forEach((e=>{var t;o?u.push(e):a.entities.pins&&(null===(t=a.entities.pins[e.id])||void 0===t?void 0:t.board)===r?l.push(e):d.push(e)})),{...e,[s]:d,[i]:u,[c]:l}}if("BoardToolsFeedResource"===s||"SectionToolsFeedResource"===s)return{...e,[o]:t};{const s=(r.type===u.aW&&e[o]||[]).concat(m(t,a.entities));return{...e,[o]:s}}}}else{var t;const s=o.response.resource_response.data;if(null===(t=o.options)||void 0===t||!t.redux_normalize_feed)return e;const i=R[o.resource](o);if(i){const{type:t,id:o,items:n,reversed:a}=i;let c=(n||s||[]).map((e=>((e,r)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return r===l.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"board_section",id:e.id};case"userdiditdata":return{type:"userdiditdata",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"userdiditdata",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}})(e,t)));a&&(c=c.reverse());const d=`${t}:${o}`,p=e[d];if(p||r.type!==u.aW){const t=p||[];let o=c;return r.type===u.aW&&(o=a?c.concat(t):t.concat(c)),{...e,[d]:o}}}}break}case"FEED_ITEM_REORDERED":{const{payload:{feedType:t,feedId:o,itemType:i,targetItemId:n,sourceItemId:a}}=r,c=`${t}:${o}`,d=e[c]||[];let u=-1,p=-1;if([l.BOARDFEED,l.BOARD_SECTION_PINS,l.BOARD_SECTIONS,"profileBoards"].includes(t)&&(u=d.findIndex((e=>e.type===i&&e.id===a)),p=d.findIndex((e=>e.type===i&&e.id===n))),-1!==u&&-1!==p)return{...e,[c]:(0,s.Z)(d,u,p)};break}case"FEED_ITEMS_REMOVED":{const{payload:{feedType:t,feedId:o,inverseSelection:s,itemType:i,itemIds:n=[]}}=r,a=`${t}:${o}`,c=e[a]||[];if(c&&c.length>0&&(t===l.BOARD_SECTION_PINS||t===l.BOARDFEED)){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===i&&(s&&!r||!s&&r))})),t=!!r.find((e=>"pin"===e.type));return{...e,[a]:t?r:[]}}if(c&&c.length>0&&t===l.BOARD_SECTIONS){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===i&&r)}));return{...e,[a]:r}}if(c&&c.length>0&&(t===l.AGGREGATED_COMMENTS||t===l.BOARDLESS_PINS||t===l.PROFILE_PINS_FEED||t===l.STORY_PINS_FEED||t===l.UNIFIED_COMMENTS||t===l.USER_DID_IT_DATA||t===l.STORY_PIN_DATA)){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===i&&r)}));return{...e,[a]:r}}break}case"FEED_ITEMS_ADDED":{const{payload:{feedType:t,feedId:o,itemType:s,itemIds:i=[],prepend:n}}=r,a=`${t}:${o}`,c=e[a]||[];if(c&&(t===l.BOARD_SECTION_PINS||t===l.BOARDFEED||t===l.BOARDLESS_PINS)){const r=i.map((e=>({id:e,type:s})));let t=0;"story"===(c[0]||{}).type&&(t=1),"story"===(c[1]||{}).type&&(t=2);const o=[...c.slice(0,t),...r,...c.slice(t)];return{...e,[a]:o}}if(c&&t===l.BOARD_SECTIONS){const r=[...i].reverse().map((e=>({id:e,type:"board_section"}))),t=c?[...r,...c]:[...r];return{...e,[a]:t}}if(t===l.AGGREGATED_COMMENTS||t===l.AGGREGATED_COMMENT_REPLIES||t===l.PROFILE_PINS_FEED||t===l.STORY_PINS_FEED||t===l.UNIFIED_COMMENTS){const r=i.map((e=>({id:e,type:s}))),t=c?[...n?r:c,...n?c:r]:r;return{...e,[a]:t}}if(t===l.USER_DID_IT_DATA){const r=i.map((e=>({id:e,type:s}))),t=c?[...r,...c]:r;return{...e,[a]:t}}break}case"FEED_INVALIDATE":{const{payload:{feedType:t,feedId:o}}=r,s=`${t}:${o}`;if(e[s]||[])return{...e,[s]:null};break}case c.MU:{const{payload:{id:t,items:o,options:s}}=r,i=e[t];if(i){let r;return r=s.isPrepend?i[0]&&"story"===i[0].type?[].concat(i[0],o,i.slice(1)):o.concat(i):i.concat(o),{...e,[t]:r}}return{...e,[t]:o}}case c.l_:{const{payload:{pinId:t}}=r;return S(e,"pin",t)}case"BOARD_ARCHIVE":{const{payload:{boardId:t,username:o}}=r,s=`profile-boards:${null!=o?o:""}`;if(e[s])return{...e,[s]:e[s].filter((e=>e.id!==t))};break}case"BOARD_UNARCHIVE":{const{payload:{boardId:t}}=r,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter((e=>e.id!==t))};break}case"BOARD_DELETE":{const{payload:{boardId:t}}=r;return S(e,"board",t)}case c.Yn:{const{payload:{boardSectionId:t}}=r;return S(e,"boardsection",t)}case c.u2:{const{payload:{source:t,target:o,pinIds:s,userId:i}}=r,n=t.boardlessPins&&i&&`boardless-pins:${i}`||t.boardId&&f(t.boardId,t.sectionId),a=f(o.boardId,o.sectionId);return s.reduce(((e,r)=>E(e,{pinId:r,oldFeedId:n,newFeedId:a})),e)}case c.Fl:{const{payload:{source:t,target:o,excludePinIds:s}}=r,i=f(t.boardId,t.sectionId),n=f(o.boardId,o.sectionId),a={...e,[i]:s.map((e=>({type:"pin",id:e})))};return delete a[n],a}case c.fz:{const{payload:{pinId:t,boardId:o,section:s,source:{boardId:i,sectionId:n}}}=r,a=f(i,n),c=f(o,null==s?void 0:s.id);return E(e,{pinId:t,oldFeedId:a,newFeedId:c})}case u.AF:if(p.has(r.payload.resource)){const t=r.payload.response.resource_response.data,o=t.board;let s;if("quick_saves"===o.layout)s=`boardless-pins:${r.payload.options.user_id}`;else{const e=r.payload.options.section;s=e?`board-section-pins:${e}`:`boardfeed:${o.id}`}if(e[s]){const r={...e},o={id:t.id,type:"pin",trackingParams:null==t?void 0:t.tracking_params};return r[s]=[o].concat(e[s]),r}}if("BoardSectionResource"===r.payload.resource&&r.payload.normalizedResponse){const t=r.payload.normalizedResponse.result,o=`board-sections:${r.payload.normalizedResponse.entities.boardsections[t].board}`;if(e[o]){const r={...e},s={id:t,type:"boardsection"};return r[o]=[s].concat(e[o]),r}}if("Agg2regatedCommentResource"===r.payload.resource&&r.payload.normalizedResponse){const t={id:r.payload.normalizedResponse.result,type:"aggregatedcomment"},o=["aggregated-comments","unified-comments"];let s={...e};for(const i of o){const o=`${i}:${r.payload.options.objectId}`;e[o]&&(s={...s,[o]:[t].concat(s[o])})}return s}if("AggregatedCommentReplyResource"===r.payload.resource&&r.payload.normalizedResponse){const t=`aggregated-comment-replies:${r.payload.options.objectId}`;return{...e,[t]:[...e[t]||[],{id:r.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===r.payload.resource&&r.payload.normalizedResponse){const{reaction_pin_id:t}=r.payload.options;if("reaction"===r.payload.options.action_type){const o=`reactions:${r.payload.options.pin_id}`,s={...e},i={id:`${t}:${r.payload.options.user_id}`,type:"reaction",trackingParams:void 0};return s[o]=[i].concat(e[o]),s}if("unreaction"===r.payload.options.action_type){const o=`${t}:${r.payload.options.user_id}`;return S(e,"reaction",o)}}break;case c.ZX:{const{payload:{storyId:t}}=r;return S(e,"story",t)}}return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42996-872e0d7a62a7b6c2.mjs.map