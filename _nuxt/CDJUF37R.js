import{_ as Ua,a as Ba}from"./aIJCLbCE.js";import Ya from"./BQ7moFgb.js";import{e as Va,r as te,f as zt,g as H,h as Ha,i as Ga,u as Ka,j as Xa,c as G,o as K,a as E,b as W,w as Ja,d as qa,k as C,F as Qa,l as Za,m as er,n as tr,p as ke,v as ar}from"#entry";import{u as rr,a as nr}from"./B6-PUFFc.js";const ir=Va("users",()=>{const e=te([]);function t(){e.value.push({id:crypto.randomUUID(),label:[],type:"LOCAL",login:"",labelInput:"",password:"",errors:{}})}function a(){localStorage.setItem("users",JSON.stringify(e.value))}function r(i){e.value=e.value.filter(o=>o.id!==i),a()}function n(){const i=localStorage.getItem("users");if(i){const o=JSON.parse(i);e.value=o.map(s=>({...s,labelInput:s.label?.map(l=>l.text).join(";")||"",errors:{}}))}}return{users:e,addUser:t,saveToLocalStorage:a,removeUser:r,loadFromLocalStorage:n}});/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function or(e){if(Array.isArray(e))return e}function sr(e){if(Array.isArray(e))return Ne(e)}function lr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Rt(r.key),r)}}function ur(e,t,a){return t&&fr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function h(e,t,a){return(t=Rt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function cr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){f=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function mr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?st(Object(a),!0).forEach(function(r){h(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ye(e,t){return or(e)||dr(e,t)||Xe(e,t)||mr()}function j(e){return sr(e)||cr(e)||Xe(e)||vr()}function pr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rt(e){var t=pr(e,"string");return typeof t=="symbol"?t:t+""}function ve(e){"@babel/helpers - typeof";return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function Xe(e,t){if(e){if(typeof e=="string")return Ne(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ne(e,t):void 0}}var lt=function(){},Je={},Wt={},Ut=null,Bt={mark:lt,measure:lt};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Wt=document),typeof MutationObserver<"u"&&(Ut=MutationObserver),typeof performance<"u"&&(Bt=performance)}catch{}var gr=Je.navigator||{},ft=gr.userAgent,ut=ft===void 0?"":ft,D=Je,x=Wt,ct=Ut,fe=Bt;D.document;var M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Yt=~ut.indexOf("MSIE")||~ut.indexOf("Trident/"),Pe,hr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,yr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},br={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ht=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],k="classic",oe="duotone",Gt="sharp",Kt="sharp-duotone",Xt="chisel",Jt="etch",qt="jelly",Qt="jelly-duo",Zt="jelly-fill",ea="notdog",ta="notdog-duo",aa="slab",ra="slab-press",na="thumbprint",ia="whiteboard",xr="Classic",wr="Duotone",Sr="Sharp",Ar="Sharp Duotone",kr="Chisel",Pr="Etch",Ir="Jelly",Or="Jelly Duo",Er="Jelly Fill",_r="Notdog",Cr="Notdog Duo",Fr="Slab",jr="Slab Press",Nr="Thumbprint",Tr="Whiteboard",oa=[k,oe,Gt,Kt,Xt,Jt,qt,Qt,Zt,ea,ta,aa,ra,na,ia];Pe={},h(h(h(h(h(h(h(h(h(h(Pe,k,xr),oe,wr),Gt,Sr),Kt,Ar),Xt,kr),Jt,Pr),qt,Ir),Qt,Or),Zt,Er),ea,_r),h(h(h(h(h(Pe,ta,Cr),aa,Fr),ra,jr),na,Nr),ia,Tr);var $r={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Lr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Mr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Dr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},sa=["fak","fa-kit","fakd","fa-kit-duotone"],dt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zr=["kit"],Rr="kit",Wr="kit-duotone",Ur="Kit",Br="Kit Duotone";h(h({},Rr,Ur),Wr,Br);var Yr={kit:{"fa-kit":"fak"}},Vr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Hr={kit:{fak:"fa-kit"}},mt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ie,ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Kr="classic",Xr="duotone",Jr="sharp",qr="sharp-duotone",Qr="chisel",Zr="etch",en="jelly",tn="jelly-duo",an="jelly-fill",rn="notdog",nn="notdog-duo",on="slab",sn="slab-press",ln="thumbprint",fn="whiteboard",un="Classic",cn="Duotone",dn="Sharp",mn="Sharp Duotone",vn="Chisel",pn="Etch",gn="Jelly",hn="Jelly Duo",yn="Jelly Fill",bn="Notdog",xn="Notdog Duo",wn="Slab",Sn="Slab Press",An="Thumbprint",kn="Whiteboard";Ie={},h(h(h(h(h(h(h(h(h(h(Ie,Kr,un),Xr,cn),Jr,dn),qr,mn),Qr,vn),Zr,pn),en,gn),tn,hn),an,yn),rn,bn),h(h(h(h(h(Ie,nn,xn),on,wn),sn,Sn),ln,An),fn,kn);var Pn="kit",In="kit-duotone",On="Kit",En="Kit Duotone";h(h({},Pn,On),In,En);var _n={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Cn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Te={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Fn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],la=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Gr,Fn),jn=["solid","regular","light","thin","duotone","brands","semibold"],fa=[1,2,3,4,5,6,7,8,9,10],Nn=fa.concat([11,12,13,14,15,16,17,18,19,20]),Tn=["aw","fw","pull-left","pull-right"],$n=[].concat(j(Object.keys(Cn)),jn,Tn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(fa.map(function(e){return"".concat(e,"x")})).concat(Nn.map(function(e){return"w-".concat(e)})),Ln={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",$e=16,ua="fa",ca="svg-inline--fa",B="data-fa-i2svg",Le="data-fa-pseudo-element",Mn="data-fa-pseudo-element-pending",qe="data-prefix",Qe="data-icon",vt="fontawesome-i2svg",Dn="async",zn=["HTML","HEAD","STYLE","SCRIPT"],da=["::before","::after",":before",":after"],ma=(function(){try{return!0}catch{return!1}})();function se(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[k]}})}var va=u({},Vt);va[k]=u(u(u(u({},{"fa-duotone":"duotone"}),Vt[k]),dt.kit),dt["kit-duotone"]);var Rn=se(va),Me=u({},Dr);Me[k]=u(u(u(u({},{duotone:"fad"}),Me[k]),mt.kit),mt["kit-duotone"]);var pt=se(Me),De=u({},Te);De[k]=u(u({},De[k]),Hr.kit);var Ze=se(De),ze=u({},_n);ze[k]=u(u({},ze[k]),Yr.kit);se(ze);var Wn=hr,pa="fa-layers-text",Un=yr,Bn=u({},$r);se(Bn);var Yn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oe=br,Vn=[].concat(j(zr),j($n)),re=D.FontAwesomeConfig||{};function Hn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Kn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kn.forEach(function(e){var t=ye(e,2),a=t[0],r=t[1],n=Gn(Hn(a));n!=null&&(re[r]=n)})}var ga={styleDefault:"solid",familyDefault:k,cssPrefix:ua,replacementClass:ca,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Q=u(u({},ga),re);Q.autoReplaceSvg||(Q.observeMutations=!1);var v={};Object.keys(ga).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){Q[e]=a,ne.forEach(function(r){return r(v)})},get:function(){return Q[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,ne.forEach(function(a){return a(v)})},get:function(){return Q.cssPrefix}});D.FontAwesomeConfig=v;var ne=[];function Xn(e){return ne.push(e),function(){ne.splice(ne.indexOf(e),1)}}var X=$e,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jn(e){if(!(!e||!M)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return x.head.insertBefore(t,r),e}}var qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){for(var e=12,t="";e-- >0;)t+=qn[Math.random()*62|0];return t}function Z(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function et(e){return e.classList?Z(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ha(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ha(e[a]),'" ')},"").trim()}function be(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tt(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function Zn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function ei(e){var t=e.transform,a=e.width,r=a===void 0?$e:a,n=e.height,i=n===void 0?$e:n,o="";return Yt?o+="translate(".concat(t.x/X-r/2,"em, ").concat(t.y/X-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "),o+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ti=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ya(){var e=ua,t=ca,a=v.cssPrefix,r=v.replacementClass,n=ti;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var ht=!1;function Ee(){v.autoAddCss&&!ht&&(Jn(ya()),ht=!0)}var ai={mixout:function(){return{dom:{css:ya,insertCss:Ee}}},hooks:function(){return{beforeDOMElementCreation:function(){Ee()},beforeI2svg:function(){Ee()}}}},L=D||{};L[$]||(L[$]={});L[$].styles||(L[$].styles={});L[$].hooks||(L[$].hooks={});L[$].shims||(L[$].shims=[]);var F=L[$],ba=[],xa=function(){x.removeEventListener("DOMContentLoaded",xa),pe=1,ba.map(function(t){return t()})},pe=!1;M&&(pe=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),pe||x.addEventListener("DOMContentLoaded",xa));function ri(e){M&&(pe?setTimeout(e,0):ba.push(e))}function le(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?ha(e):"<".concat(t," ").concat(Qn(r),">").concat(i.map(le).join(""),"</").concat(t,">")}function yt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var _e=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function wa(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function bt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Re(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=bt(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,bt(t)):F.styles[e]=u(u({},F.styles[e]||{}),i),e==="fas"&&Re("fa",t)}var ie=F.styles,ni=F.shims,Sa=Object.keys(Ze),ii=Sa.reduce(function(e,t){return e[t]=Object.keys(Ze[t]),e},{}),at=null,Aa={},ka={},Pa={},Ia={},Oa={};function oi(e){return~Vn.indexOf(e)}function si(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!oi(n)?n:null}var Ea=function(){var t=function(i){return _e(ie,function(o,s,l){return o[l]=_e(s,i,{}),o},{})};Aa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),ka=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Oa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ie||v.autoFetchSvg,r=_e(ni,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Pa=r.names,Ia=r.unicodes,at=xe(v.styleDefault,{family:v.familyDefault})};Xn(function(e){at=xe(e.styleDefault,{family:v.familyDefault})});Ea();function rt(e,t){return(Aa[e]||{})[t]}function li(e,t){return(ka[e]||{})[t]}function U(e,t){return(Oa[e]||{})[t]}function _a(e){return Pa[e]||{prefix:null,iconName:null}}function fi(e){var t=Ia[e],a=rt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function z(){return at}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function ui(e){var t=k,a=Sa.reduce(function(r,n){return r[n]="".concat(v.cssPrefix,"-").concat(n),r},{});return oa.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ii[r].includes(n)}))&&(t=r)}),t}function xe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?k:a,n=Rn[r][e];if(r===oe&&!e)return"fad";var i=pt[r][e]||pt[r][n],o=e in F.styles?e:null,s=i||o||null;return s}function ci(e){var t=[],a=null;return e.forEach(function(r){var n=si(v.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function xt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var wt=la.concat(sa);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=xt(e.filter(function(g){return wt.includes(g)})),o=xt(e.filter(function(g){return!wt.includes(g)})),s=i.filter(function(g){return n=g,!Ht.includes(g)}),l=ye(s,1),f=l[0],c=f===void 0?null:f,m=ui(i),y=u(u({},ci(o)),{},{prefix:xe(c,{family:m})});return u(u(u({},y),pi({values:e,family:m,styles:ie,config:v,canonical:y,givenPrefix:n})),di(r,n,y))}function di(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?_a(n):{},o=U(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ie.far&&ie.fas&&!v.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var mi=oa.filter(function(e){return e!==k||e!==oe}),vi=Object.keys(Te).filter(function(e){return e!==k}).map(function(e){return Object.keys(Te[e])}).flat();function pi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,c=a===oe,m=t.includes("fa-duotone")||t.includes("fad"),y=f.familyDefault==="duotone",g=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(m||y||g)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&mi.includes(a)){var S=Object.keys(s).find(function(A){return vi.includes(A)});if(S||f.autoFetchSvg){var b=Mr.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=U(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=z()||"fas"),r}var gi=(function(){function e(){lr(this,e),this.definitions={}}return ur(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Re(s,o[s]);var l=Ze[k][s];l&&Re(l,o[s]),Ea()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(a[s][m]=f)}),a[s][l]=f}),a}}])})(),St=[],J={},q={},hi=Object.keys(q);function yi(e,t){var a=t.mixoutsTo;return St=e,J={},Object.keys(q).forEach(function(r){hi.indexOf(r)===-1&&delete q[r]}),St.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ve(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}r.provides&&r.provides(q)}),a}function We(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=J[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=J[e]||[];n.forEach(function(i){i.apply(null,a)})}function R(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function Ue(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||z();if(t)return t=U(a,t)||t,yt(Fa.definitions,a,t)||yt(F.styles,a,t)}var Fa=new gi,bi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Y("noAuto")},xi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(Y("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ri(function(){Si({autoReplaceSvgRoot:a}),Y("watch",t)})}},wi={icon:function(t){if(t===null)return null;if(ve(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xe(t[0]);return{prefix:r,iconName:U(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Wn))){var n=we(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:U(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=z();return{prefix:i,iconName:U(i,t)||t}}}},_={noAuto:bi,config:v,dom:xi,parse:wi,library:Fa,findIconDefinition:Ue,toHtml:le},Si=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?x:a;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&M&&v.autoReplaceSvg&&_.dom.i2svg({node:r})};function Se(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return le(r)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ai(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(tt(o)&&a.found&&!r.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};n.style=be(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function ki(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function Pi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function nt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,c=e.watchable,m=c===void 0?!1:c,y=r.found?r:a,g=y.width,S=y.height,b=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),A={children:[],attributes:u(u({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:f.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(S)})};!Pi(f.attributes)&&!f.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),m&&(A.attributes[B]="");var d=u(u({},A),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:u({},f.styles)}),p=r.found&&a.found?R("generateAbstractMask",d)||{children:[],attributes:{}}:R("generateAbstractIcon",d)||{children:[],attributes:{}},w=p.children,P=p.attributes;return d.children=w,d.attributes=P,s?ki(d):Ai(d)}function At(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[B]="");var f=u({},i.styles);tt(n)&&(f.transform=ei({transform:n,width:a,height:r}),f["-webkit-transform"]=f.transform);var c=be(f);c.length>0&&(l.style=c);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),m}function Ii(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=be(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ce=F.styles;function Be(e){var t=e[0],a=e[1],r=e.slice(4),n=ye(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Oi={found:!1,width:512,height:512};function Ei(e,t){!ma&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ye(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=z()),new Promise(function(r,n){if(a==="fa"){var i=_a(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ce[t]&&Ce[t][e]){var o=Ce[t][e];return r(Be(o))}Ei(e,t),r(u(u({},Oi),{},{icon:v.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var kt=function(){},Ve=v.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:kt,measure:kt},ae='FA "7.0.1"',_i=function(t){return Ve.mark("".concat(ae," ").concat(t," begins")),function(){return ja(t)}},ja=function(t){Ve.mark("".concat(ae," ").concat(t," ends")),Ve.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},it={begin:_i,end:ja},de=function(){};function Pt(e){var t=e.getAttribute?e.getAttribute(B):null;return typeof t=="string"}function Ci(e){var t=e.getAttribute?e.getAttribute(qe):null,a=e.getAttribute?e.getAttribute(Qe):null;return t&&a}function Fi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function ji(){if(v.autoReplaceSvg===!0)return me.replace;var e=me[v.autoReplaceSvg];return e||me.replace}function Ni(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Ti(e){return x.createElement(e)}function Na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Ni:Ti:a;if(typeof e=="string")return x.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Na(o,{ceFn:r}))}),n}function $i(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var me={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Na(n),a)}),a.getAttribute(B)===null&&v.keepOriginalSource){var r=x.createComment($i(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~et(a).indexOf(v.replacementClass))return me.replace(t);var n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return le(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function It(e){e()}function Ta(e,t){var a=typeof t=="function"?t:de;if(e.length===0)a();else{var r=It;v.mutateApproach===Dn&&(r=D.requestAnimationFrame||It),r(function(){var n=ji(),i=it.begin("mutate");e.map(n),i(),a()})}}var ot=!1;function $a(){ot=!0}function He(){ot=!1}var ge=null;function Ot(e){if(ct&&v.observeMutations){var t=e.treeCallback,a=t===void 0?de:t,r=e.nodeCallback,n=r===void 0?de:r,i=e.pseudoElementsCallback,o=i===void 0?de:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ge=new ct(function(f){if(!ot){var c=z();Z(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Pt(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&Pt(m.target)&&~Yn.indexOf(m.attributeName))if(m.attributeName==="class"&&Ci(m.target)){var y=we(et(m.target)),g=y.prefix,S=y.iconName;m.target.setAttribute(qe,g||c),S&&m.target.setAttribute(Qe,S)}else Fi(m.target)&&n(m.target)})}}),M&&ge.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Li(){ge&&ge.disconnect()}function Mi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Di(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=we(et(e));return n.prefix||(n.prefix=z()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=li(n.prefix,e.innerText)||rt(n.prefix,wa(e.innerText))),!n.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function zi(e){var t=Z(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Ri(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Di(e),r=a.iconName,n=a.prefix,i=a.rest,o=zi(e),s=We("parseNodeAttributes",{},e),l=t.styleParser?Mi(e):[];return u({iconName:r,prefix:n,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wi=F.styles;function La(e){var t=v.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(pa)?R("generateLayersText",e,t):R("generateSvgReplacementMutation",e,t)}function Ui(){return[].concat(j(sa),j(la))}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=x.documentElement.classList,r=function(m){return a.add("".concat(vt,"-").concat(m))},n=function(m){return a.remove("".concat(vt,"-").concat(m))},i=v.autoFetchSvg?Ui():Ht.concat(Object.keys(Wi));i.includes("fa")||i.push("fa");var o=[".".concat(pa,":not([").concat(B,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=it.begin("onTree"),f=s.reduce(function(c,m){try{var y=La(m);y&&c.push(y)}catch(g){ma||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(y){Ta(y,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(y){l(),m(y)})})}function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;La(e).then(function(a){a&&Ta([a],t)})}function Yi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ue(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ue(n||{})),e(r,u(u({},a),{},{mask:n}))}}var Vi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?N:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,f=a.maskId,c=f===void 0?null:f,m=a.classes,y=m===void 0?[]:m,g=a.attributes,S=g===void 0?{}:g,b=a.styles,A=b===void 0?{}:b;if(t){var d=t.prefix,p=t.iconName,w=t.icon;return Se(u({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),nt({icons:{main:Be(w),mask:l?Be(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:u(u({},N),n),symbol:o,maskId:c,extra:{attributes:S,styles:A,classes:y}})})}},Hi={mixout:function(){return{icon:Yi(Vi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=_t,a.nodeCallback=Bi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?x:r,i=a.callback,o=i===void 0?function(){}:i;return _t(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,c=r.extra;return new Promise(function(m,y){Promise.all([Ye(n,i),l.iconName?Ye(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var S=ye(g,2),b=S[0],A=S[1];m([a,nt({icons:{main:b,mask:A},prefix:i,iconName:n,transform:o,symbol:s,maskId:f,extra:c,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=be(s);l.length>0&&(n.style=l);var f;return tt(o)&&(f=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},Gi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Se({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(j(i)).join(" ")},children:o}]})}}}},Ki={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,f=l===void 0?{}:l;return Se({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),Ii({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(j(i))}})})}}}},Xi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?N:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Se({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),At({content:a,transform:u(u({},N),i),extra:{attributes:f,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Yt){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([a,At({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ma=new RegExp('"',"ug"),Ct=[1105920,1112319],Ft=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Lr),Ln),Vr),Ge=Object.keys(Ft).reduce(function(e,t){return e[t.toLowerCase()]=Ft[t],e},{}),Ji=Object.keys(Ge).reduce(function(e,t){var a=Ge[t];return e[t]=a[900]||j(Object.entries(a))[0][1],e},{});function qi(e){var t=e.replace(Ma,"");return wa(j(t)[0]||"")}function Qi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ma,""),n=r.codePointAt(0),i=n>=Ct[0]&&n<=Ct[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Zi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ge[a]||{})[n]||Ji[a]}function jt(e,t){var a="".concat(Mn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=Z(e.children),o=i.filter(function(V){return V.getAttribute(Le)===t})[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(Un),c=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&m!=="none"&&m!==""){var y=s.getPropertyValue("content"),g=Zi(l,c),S=qi(y),b=f[0].startsWith("FontAwesome"),A=Qi(s),d=rt(g,S),p=d;if(b){var w=fi(S);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!A&&(!o||o.getAttribute(qe)!==g||o.getAttribute(Qe)!==p)){e.setAttribute(a,p),o&&e.removeChild(o);var P=Ri(),O=P.extra;O.attributes[Le]=t,Ye(d,g).then(function(V){var ee=nt(u(u({},P),{},{icons:{main:V,mask:Ca()},prefix:g,iconName:p,extra:O,watchable:!0})),Ae=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=ee.map(function(Wa){return le(Wa)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function eo(e){return Promise.all([jt(e,"::before"),jt(e,"::after")])}function to(e){return e.parentNode!==document.head&&!~zn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Le)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var ao=function(t){return!!t&&da.some(function(a){return t.includes(a)})},ro=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var n=ce(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(ao(o)){var s=da.reduce(function(l,f){return l.replace(f,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function Nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ce(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ce(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,c=ro(f.selectorText),m=ce(c),y;try{for(m.s();!(y=m.n()).done;){var g=y.value;r.add(g)}}catch(b){m.e(b)}finally{m.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(b,A){var d=Z(a).filter(to).map(eo),p=it.begin("searchPseudoElements");$a(),Promise.all(d).then(function(){p(),He(),b()}).catch(function(){p(),He(),A()})})}}var no={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Nt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?x:r;v.searchPseudoElements&&Nt(n)}}},Tt=!1,io={mixout:function(){return{dom:{unwatch:function(){$a(),Tt=!0}}}},hooks:function(){return{bootstrap:function(){Ot(We("mutationObserverCallbacks",{}))},noAuto:function(){Li()},watch:function(a){var r=a.observeMutationsRoot;Tt?He():Ot(We("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$t=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},oo={mixout:function(){return{parse:{transform:function(a){return $t(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=$t(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},y={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:y};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),g.path)}]}]}}}},Fe={x:0,y:0,width:"100%",height:"100%"};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function so(e){return e.tag==="g"?e.children:[e]}var lo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?we(n.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=z()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,f=i.width,c=i.icon,m=o.width,y=o.icon,g=Zn({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:u(u({},Fe),{},{fill:"white"})},b=c.children?{children:c.children.map(Lt)}:{},A={tag:"g",attributes:u({},g.inner),children:[Lt(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},b))]},d={tag:"g",attributes:u({},g.outer),children:[A]},p="mask-".concat(s||gt()),w="clip-".concat(s||gt()),P={tag:"mask",attributes:u(u({},Fe),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,d]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:so(y)},P]};return r.push(O,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(p,")")},Fe)}),{children:r,attributes:n}}}},fo={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},uo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},co=[ai,Hi,Gi,Ki,Xi,no,io,oo,lo,fo,uo];yi(co,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var Ke=_.parse;_.findIconDefinition;_.toHtml;var mo=_.icon;_.layer;_.text;_.counter;function I(e,t,a){return(t=ho(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Mt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Mt(Object(a),!0).forEach(function(r){I(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Mt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function vo(e,t){if(e==null)return{};var a,r,n=po(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function po(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function go(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ho(e){var t=go(e,"string");return typeof t=="symbol"?t:t+""}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function je(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function yo(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(I(I(I(I(I(I(I(I(I(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),I(I(I(I(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(r){return a[r]?r:null}).filter(function(r){return r})}var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Da={exports:{}};(function(e){(function(t){var a=function(d,p,w){if(!f(p)||m(p)||y(p)||g(p)||l(p))return p;var P,O=0,V=0;if(c(p))for(P=[],V=p.length;O<V;O++)P.push(a(d,p[O],w));else{P={};for(var ee in p)Object.prototype.hasOwnProperty.call(p,ee)&&(P[d(ee,w)]=a(d,p[ee],w))}return P},r=function(d,p){p=p||{};var w=p.separator||"_",P=p.split||/(?=[A-Z])/;return d.split(P).join(w)},n=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,w){return w?w.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=n(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return r(d,p).toLowerCase()},s=Object.prototype.toString,l=function(d){return typeof d=="function"},f=function(d){return d===Object(d)},c=function(d){return s.call(d)=="[object Array]"},m=function(d){return s.call(d)=="[object Date]"},y=function(d){return s.call(d)=="[object RegExp]"},g=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},b=function(d,p){var w=p&&"process"in p?p.process:p;return typeof w!="function"?d:function(P,O){return w(P,d,O)}},A={camelize:n,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return a(b(n,p),d)},decamelizeKeys:function(d,p){return a(b(o,p),d,p)},pascalizeKeys:function(d,p){return a(b(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(bo)})(Da);var xo=Da.exports,wo=["class","style"];function So(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=xo.camelize(a.slice(0,r)),i=a.slice(r+1).trim();return t[n]=i,t},{})}function Ao(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return za(l)}),n=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Ao(c);break;case"style":l.style=So(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=vo(a,wo);return Ga(e.tag,T(T(T({},t),{},{class:n.class,style:T(T({},n.style),o)},n.attrs),s),r)}var Ra=!1;try{Ra=!0}catch{}function ko(){if(!Ra&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ke.icon)return Ke.icon(e);if(e===null)return null;if(he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Po=zt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var r=a.attrs,n=H(function(){return Dt(t.icon)}),i=H(function(){return je("classes",yo(t))}),o=H(function(){return je("transform",typeof t.transform=="string"?Ke.transform(t.transform):t.transform)}),s=H(function(){return je("mask",Dt(t.mask))}),l=H(function(){var c=T(T(T(T({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return c.title=t.title,c.titleId=t.titleId,mo(n.value,c)});Ha(l,function(c){if(!c)return ko("Could not find one or more icon(s)",n.value,s.value)},{immediate:!0});var f=H(function(){return l.value?za(l.value.abstract[0],{},r):null});return function(){return f.value}}});/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Io={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},Oo={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]};const Eo=e=>e.split(";").flatMap(t=>({text:t.trim()})).filter(t=>t.text.length>0),_o={class:"p-10"},Co={class:"flex"},Fo={class:"flex mb-2"},jo={key:0,class:"text-gray-500 italic"},No={key:1,class:"grid grid-cols-5 gap-2"},To={class:"grid grid-cols-5 gap-2"},$o=["onUpdate:modelValue","onChange"],Lo={key:0,class:"relative"},Mo=["onClick"],Uo=zt({__name:"index",setup(e){te(["LDAP","Локальная"]),rr(),nr(),Ka();const t=ir();function a(n){const i=t.users.find(s=>s.id===n);if(!i)return;const o={};i.type==="LOCAL"&&!i.password.trim()&&(o.password=!0),i.errors=o,Object.keys(o).length===0&&(i.label=Eo(i.labelInput||""),t.saveToLocalStorage())}const r=te({});return te(!1),te(""),Xa(()=>{t.loadFromLocalStorage()}),(n,i)=>{const o=Ua,s=Ya,l=Ba;return K(),G("div",_o,[E("div",Co,[i[1]||(i[1]=E("p",{class:"font-bold text-2xl mb-10"},"Учетные записи",-1)),W(o,{onClick:C(t).addUser},{default:Ja(()=>[...i[0]||(i[0]=[qa("+",-1)])]),_:1},8,["onClick"])]),E("div",Fo,[W(s,{name:"radix-icons:question-mark",class:"mr-3"}),i[2]||(i[2]=E("p",null,"Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;",-1))]),C(t).users.length===0?(K(),G("div",jo," Нет учетных записей. Нажмите + чтобы добавить. ")):(K(),G("form",No,[...i[3]||(i[3]=[E("div",{class:"font-semibold"},"Метка",-1),E("div",{class:"font-semibold"},"Запись",-1),E("div",{class:"font-semibold"},"Логин",-1),E("div",{class:"font-semibold"},"Пароль",-1),E("div",null,null,-1)])])),(K(!0),G(Qa,null,Za(C(t).users,f=>(K(),G("form",{key:f.id},[E("div",To,[W(l,{placeholder:"Метка",type:"text",maxlength:"50",modelValue:f.labelInput,"onUpdate:modelValue":c=>f.labelInput=c,class:ke(["mb-3",{"border-red-500":f.errors?.password}]),onBlur:c=>a(f.id)},null,8,["modelValue","onUpdate:modelValue","onBlur","class"]),er(E("select",{"onUpdate:modelValue":c=>f.type=c,class:"border p-1 rounded h-9",onChange:c=>a(f.id)},[...i[4]||(i[4]=[E("option",{disabled:"",value:""},"Выберите тип",-1),E("option",{value:"LDAP"},"LDAP",-1),E("option",{value:"Локальная"},"Локальная",-1)])],40,$o),[[ar,f.type]]),W(l,{placeholder:"Значение",type:"text",onBlur:c=>a(f.id),maxlength:"100",modelValue:f.name,"onUpdate:modelValue":c=>f.name=c,class:ke(["mb-3",["border p-1 rounded",f.type==="LDAP"?"col-span-2":"col-span-1",{"border-red-500":f.errors?.login}]])},null,8,["onBlur","modelValue","onUpdate:modelValue","class"]),f.type==="Локальная"?(K(),G("div",Lo,[W(l,{type:C(r)[f.id]?"text":"password",placeholder:"Пароль",maxlength:"100",modelValue:f.password,"onUpdate:modelValue":c=>f.password=c,onBlur:c=>a(f.id),class:ke({"border-red-500":f.errors?.password})},null,8,["type","modelValue","onUpdate:modelValue","onBlur","class"]),E("button",{type:"button",onClick:c=>C(r)[f.id]=!C(r)[f.id],class:"absolute right-2 top-1/2 transform -translate-y-1/2"},[W(C(Po),{icon:C(r)[f.id]?C(Io):C(Oo),class:"w-1 align-center"},null,8,["icon"])],8,Mo)])):tr("",!0),W(s,{name:"radix-icons:trash",class:"cursor-pointer self-center",scale:2,onClick:c=>C(t).removeUser(f.id)},null,8,["onClick"])])]))),128))])}}});export{Uo as default};
