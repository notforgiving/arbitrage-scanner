(this.webpackJsonpscanner=this.webpackJsonpscanner||[]).push([[0],{13:function(e,t,s){e.exports={login:"styles_login__2y5dX",login_form:"styles_login_form__3T73s",login_content:"styles_login_content__3gKCn",title:"styles_title__3oBrH",form:"styles_form__1uZic",inputs:"styles_inputs__20aFq",btns:"styles_btns__3b6iw"}},19:function(e,t,s){e.exports={header:"styles_header__XwrA4",header_container:"styles_header_container__AtN1I",header_actions:"styles_header_actions__3_M4y",header_btns:"styles_header_btns__4tqlj",header_login:"styles_header_login__3vbeO"}},23:function(e,t,s){e.exports={language:"styles_language__2Tlsy",body:"styles_body__1dJVi",dropdown:"styles_dropdown__1xQ-f",item:"styles_item__TysC7"}},30:function(e,t,s){e.exports={googlebtn:"styles_googlebtn__2_MoT",back:"styles_back__3T1Fq"}},31:function(e,t,s){e.exports={googlebtn:"styles_googlebtn__2B2jf",back:"styles_back__3Tuh3"}},36:function(e,t,s){e.exports={btn:"styles_btn__9BgaR"}},4:function(e,t,s){e.exports={home:"styles_home__8OCFY",accent:"styles_accent__ytFCI",accent_content:"styles_accent_content__qsit0",title:"styles_title__-xZnw",subtitle:"styles_subtitle__1lX9q",btn:"styles_btn__1Btq8",points:"styles_points__3Kny-",section_title:"styles_section_title__3q43E",section_desc:"styles_section_desc__2upnn",how_info:"styles_how_info__2Ihvs",how_item:"styles_how_item__Z1Qxc",how_items:"styles_how_items__1ZYps",how_img:"styles_how_img__2BpQY"}},43:function(e,t,s){e.exports={grid_sections:"styles_grid_sections__1Lxx6"}},45:function(e,t,s){e.exports={input:"styles_input__2eia8"}},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(35),i=s.n(a),l=s(66),c=s(2),r=s(5),o=s(14),h=s.n(o),_=s(17),d=s(36),j=s.n(d),b=s(0);var C=e=>{let{children:t,type:s,className:n,onClick:a}=e;return Object(b.jsx)("button",{className:h()(j.a.btn,"btn_component",n,{_isBlue:"blue"===s,_isGreen:"green"===s,_isOutline:"outline"===s}),type:"button",onClick:a,children:t})},m=s(22),u=s(65),p=s(23),g=s.n(p);var x,O,v,y=()=>{const{i18n:e}=Object(u.a)(),t=[{value:"ru",label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"en",label:"English"}],s=localStorage.getItem("scannerlanguage"),[a,i]=Object(n.useState)(null!==s?JSON.parse(s):t[0]);return Object(b.jsxs)("div",{className:g.a.language,children:[Object(b.jsxs)("div",{className:g.a.body,children:[Object(b.jsx)("span",{children:a.value}),Object(b.jsx)(m.b,{color:"#a8b0b9",size:20})]}),Object(b.jsx)("div",{className:g.a.dropdown,children:t.map((t=>{const s=t.value===a.value;return Object(b.jsxs)("div",{className:h()(g.a.item,{_isChecked:s}),onClick:()=>(t=>{localStorage.setItem("scannerlanguage",JSON.stringify(t)),i(t),e.changeLanguage(t.value)})(t),children:[Object(b.jsx)("span",{children:t.label}),Object(b.jsx)(m.a,{})]},t.value)}))})]})},w=s(19),f=s.n(w);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},H.apply(null,arguments)}function L(e,t){let{title:s,titleId:a,...i}=e;return n.createElement("svg",H({width:166,height:40,viewBox:"0 0 166 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),s?n.createElement("title",{id:a},s):null,x||(x=n.createElement("path",{d:"M50.2511 33.8158C49.2607 33.8158 48.311 33.6855 47.4022 33.4251C46.4943 33.1535 45.7635 32.8046 45.209 32.3786L46.1827 30.213C46.7594 30.6148 47.3905 30.9315 48.0569 31.1535C48.7711 31.3875 49.5174 31.5074 50.2687 31.5088C50.8344 31.5088 51.2888 31.4558 51.6319 31.3488C51.9843 31.2307 52.244 31.0707 52.41 30.8697C52.5751 30.6688 52.6576 30.4381 52.6576 30.1776C52.663 30.0251 52.6302 29.8737 52.5621 29.7372C52.4941 29.6006 52.393 29.4834 52.2681 29.3962C52.0085 29.1953 51.6663 29.0362 51.2415 28.9181C50.7756 28.7775 50.3034 28.6589 49.8264 28.5628C49.3191 28.4446 48.8062 28.3023 48.2869 28.1367C47.7977 27.9793 47.3287 27.7648 46.8894 27.4976C46.4673 27.2398 46.1103 26.8877 45.8461 26.4688C45.5864 26.0428 45.4566 25.4986 45.4566 24.8362C45.4566 24.1255 45.6448 23.4809 46.0223 22.9014C46.4118 22.3097 46.9895 21.8428 47.7564 21.4995C48.5354 21.1442 49.5083 20.9674 50.6758 20.9674C51.4548 20.9674 52.2208 21.0614 52.9757 21.2511C53.6833 21.4085 54.3593 21.6846 54.9751 22.0679L54.0904 24.2502C53.5464 23.9331 52.9634 23.6886 52.3562 23.5228C51.8045 23.361 51.233 23.2774 50.6582 23.2744C50.1036 23.2744 49.6492 23.3395 49.295 23.4697C48.9426 23.6 48.6885 23.7711 48.5345 23.9842C48.3803 24.188 48.2992 24.4381 48.3045 24.6939C48.3045 25.013 48.4344 25.2735 48.694 25.4753C48.9537 25.6642 49.2959 25.8176 49.7206 25.9358C50.1454 26.0548 50.6109 26.173 51.1182 26.2911C51.6375 26.4093 52.1503 26.5451 52.6576 26.6995C53.1769 26.853 53.6481 27.0604 54.0728 27.32C54.4975 27.5804 54.8388 27.9246 55.0985 28.3497C55.3702 28.7758 55.5065 29.3144 55.5065 29.9646C55.5065 30.6623 55.3118 31.3014 54.9223 31.8809C54.5328 32.4614 53.9485 32.9283 53.1695 33.2837C52.4035 33.6381 51.4307 33.8158 50.2511 33.8158ZM63.0377 33.8158C62.1268 33.8237 61.2218 33.6674 60.366 33.3544C59.576 33.0503 58.8541 32.5918 58.2423 32.0055C57.6407 31.4257 57.1597 30.7321 56.8271 29.9646C56.497 29.1832 56.3319 28.3265 56.3319 27.3916C56.3319 26.4567 56.497 25.599 56.8271 24.8186C57.1598 24.0512 57.6408 23.3575 58.2423 22.7776C58.8603 22.1949 59.5884 21.7423 60.3836 21.4465C61.1969 21.1265 62.0881 20.9674 63.0544 20.9674C64.1283 20.9674 65.0946 21.1562 65.9571 21.5348C66.8288 21.9014 67.5615 22.4465 68.1503 23.1674L66.3104 24.8716C65.8857 24.386 65.4137 24.0251 64.8952 23.7888C64.3641 23.5379 63.7833 23.4107 63.1963 23.4167C62.6185 23.4167 62.0881 23.5107 61.604 23.7004C61.1332 23.8814 60.7055 24.1593 60.3483 24.5162C59.9941 24.8716 59.7177 25.2911 59.5165 25.7767C59.3223 26.2925 59.2264 26.8403 59.2336 27.3916C59.2336 27.9832 59.3282 28.5209 59.5165 29.0065C59.7168 29.4911 59.9941 29.9116 60.3483 30.266C60.7017 30.6214 61.1208 30.8939 61.604 31.0828C62.1124 31.2765 62.6525 31.3727 63.1963 31.3665C63.7815 31.3725 64.361 31.2516 64.8952 31.0121C65.4146 30.7637 65.8857 30.3907 66.3104 29.8939L68.1503 31.5972C67.5629 32.3175 66.8099 32.8841 65.9562 33.2483C65.0956 33.6269 64.1227 33.8158 63.0377 33.8158ZM106.985 33.6028V21.1814H109.356L116.663 30.1255H115.513V21.1814H118.344V33.6037H115.991L108.666 24.6595H109.816V33.6037L106.985 33.6028ZM120.921 33.6028V21.1814H123.291L130.598 30.1255H129.448V21.1814H132.279V33.6037H129.926L122.601 24.6595H123.751V33.6037L120.921 33.6028ZM137.491 26.1851H143.453V28.4204H137.491V26.1851ZM137.703 31.2958H144.444V33.6028H134.855V21.1814H144.214V23.4883H137.703V31.2958ZM146.371 33.6028V21.1814H151.732C152.841 21.1814 153.796 21.3646 154.598 21.7311C155.4 22.0865 156.019 22.6009 156.456 23.2753C156.892 23.9497 157.111 24.7544 157.111 25.6883C157.111 26.6111 156.892 27.4093 156.456 28.0846C156.019 28.7469 155.4 29.2558 154.598 29.6102C153.796 29.9655 152.841 30.1432 151.732 30.1432H147.963L149.237 28.8828V33.6037L146.371 33.6028ZM154.244 33.6028L151.148 29.0949H154.209L157.341 33.6028H154.244ZM149.237 29.2018L147.963 27.853H151.572C152.457 27.853 153.117 27.6632 153.554 27.2855C153.991 26.8948 154.209 26.3618 154.209 25.6874C154.209 25.0018 153.991 24.4688 153.554 24.0902C153.117 23.7116 152.457 23.5228 151.572 23.5228H147.963L149.237 22.1553V29.2018ZM8.42188 17.8586L13.9425 5.43531H16.7729L22.3112 17.8586H19.3028L14.7735 6.89113H15.9058L11.3589 17.8586H8.42188ZM11.1827 15.1962L11.9431 13.013H18.3123L19.0913 15.1962H11.1827ZM23.3303 17.8586V5.43531H28.6906C29.7997 5.43531 30.7549 5.61857 31.5571 5.98508C32.3593 6.34043 32.9787 6.85485 33.4146 7.52927C33.8514 8.20369 34.0693 9.00834 34.0693 9.94322C34.0693 10.866 33.8514 11.6642 33.4146 12.3386C32.9787 13.0018 32.3593 13.5107 31.5571 13.8651C30.7549 14.2204 29.7997 14.3972 28.6915 14.3972H24.9226L26.1969 13.1376V17.8586H23.3303ZM31.2037 17.8586L28.1072 13.3507H31.1676L34.2993 17.8586H31.2037ZM26.1959 13.4567L24.9226 12.1079H28.532C29.4167 12.1079 30.077 11.919 30.5138 11.5404C30.9496 11.1497 31.1685 10.6176 31.1685 9.94322C31.1685 9.25671 30.9496 8.72462 30.5138 8.34601C30.077 7.96741 29.4167 7.77857 28.532 7.77857H24.9226L26.1969 6.41113L26.1959 13.4567ZM36.0752 17.8586V5.43531H42.1254C43.6834 5.43531 44.8501 5.73113 45.6291 6.32276C46.4192 6.91438 46.8142 7.69485 46.8142 8.66508C46.8142 9.31624 46.6547 9.88369 46.3366 10.3693C46.0095 10.85 45.5563 11.2308 45.0272 11.4697C44.4726 11.7302 43.8364 11.8604 43.1168 11.8604L43.4525 11.1321C44.2315 11.1321 44.9215 11.2623 45.5224 11.5228C46.1243 11.7711 46.5898 12.1442 46.92 12.6409C47.2631 13.1376 47.4337 13.7469 47.4337 14.4688C47.4337 15.533 47.0145 16.3674 46.1771 16.9711C45.3397 17.5628 44.1072 17.8586 42.4797 17.8586H36.0752ZM38.9232 15.693H42.2673C43.0101 15.693 43.5703 15.5748 43.9477 15.3386C44.3372 15.0893 44.532 14.6995 44.532 14.1665C44.532 13.6455 44.3372 13.2614 43.9477 13.013C43.5703 12.7525 43.0111 12.6223 42.2673 12.6223H38.7108V10.5293H41.7712C42.4676 10.5293 42.999 10.4102 43.3644 10.1739C43.7418 9.92555 43.9301 9.55252 43.9301 9.05578C43.9301 8.57113 43.7418 8.20927 43.3644 7.97299C42.999 7.72462 42.4676 7.60089 41.7721 7.60089H38.9223V15.6939L38.9232 15.693ZM49.3376 17.8586V5.43531H52.2041V17.8586H49.3376ZM57.4429 17.8586V7.77671H53.4802V5.43531H64.273V7.77764H60.3094V17.8586H57.4429ZM65.549 17.8586V5.43531H70.9102C72.0193 5.43531 72.9745 5.61857 73.7758 5.98508C74.578 6.34043 75.1974 6.85485 75.6342 7.52927C76.0701 8.20369 76.289 9.00834 76.289 9.94322C76.289 10.866 76.0701 11.6642 75.6342 12.3386C75.1984 13.0018 74.578 13.5107 73.7767 13.8651C72.9745 14.2204 72.0193 14.3972 70.9102 14.3972H67.1414L68.4156 13.1376V17.8586H65.549ZM73.4225 17.8586L70.326 13.3507H73.3863L76.519 17.8586H73.4225ZM68.4156 13.4567L67.1414 12.1079H70.7507C71.6354 12.1079 72.2957 11.919 72.7325 11.5404C73.1684 11.1497 73.3872 10.6176 73.3872 9.94322C73.3872 9.25671 73.1693 8.72462 72.7325 8.34601C72.2966 7.96741 71.6354 7.77857 70.7507 7.77857H67.1423L68.4165 6.41113L68.4156 13.4567ZM103.254 18.0707C102.276 18.0707 101.374 17.9172 100.548 17.6102C99.7543 17.3034 99.0272 16.8454 98.4068 16.2614C97.8055 15.6813 97.3246 14.9877 96.9917 14.2204C96.6615 13.439 96.4965 12.5814 96.4965 11.6465C96.4965 10.7125 96.6615 9.85485 96.9917 9.07345C97.3339 8.29206 97.8115 7.61299 98.4245 7.03252C99.0472 6.4474 99.7816 5.99488 100.583 5.70229C101.409 5.38229 102.317 5.22229 103.308 5.22229C104.405 5.22229 105.39 5.40555 106.263 5.77299C107.121 6.12109 107.885 6.66847 108.492 7.3702L106.651 9.07345C106.203 8.59996 105.714 8.25113 105.183 8.02601C104.637 7.78628 104.046 7.66549 103.449 7.67159C102.888 7.66473 102.33 7.76088 101.804 7.95531C101.322 8.13624 100.882 8.4142 100.512 8.77206C100.155 9.13262 99.8722 9.56073 99.6811 10.0316C99.4867 10.5473 99.3907 11.0952 99.3982 11.6465C99.3982 12.2269 99.4919 12.759 99.6811 13.2437C99.8814 13.7293 100.159 14.1553 100.512 14.5218C100.878 14.8762 101.303 15.1488 101.786 15.3386C102.307 15.5323 102.858 15.6285 103.414 15.6223C103.973 15.6232 104.528 15.5333 105.059 15.3562C105.601 15.1665 106.126 14.8539 106.634 14.4158L108.262 16.4921C107.59 17.0009 106.805 17.3907 105.908 17.6632C105.049 17.9315 104.154 18.0682 103.254 18.0707ZM105.643 16.119V11.4511H108.262V16.4921L105.643 16.119ZM113.295 10.44H119.257V12.6762H113.295V10.44ZM113.507 15.5516H120.248V17.8586H110.658V5.43531H120.018V7.74229H113.507V15.5516Z",fill:"#212121"})),n.createElement("mask",{id:"mask0_0_966",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:68,y:0,width:40,height:40},O||(O=n.createElement("path",{d:"M68.4921 0.588863H107.019V39.4875H68.4921V0.588863Z",fill:"white"}))),v||(v=n.createElement("g",{mask:"url(#mask0_0_966)"},n.createElement("path",{d:"M103.781 33.5116L92.0629 12.9395L88.6557 18.8883L97.0216 33.5116H103.781ZM90.886 27.546H74.1831L71.4724 33.5116H94.2979L90.886 27.546ZM82.3431 25.1599L90.7043 10.5553L87.0551 5.70132L75.5445 25.1599H82.3431Z",fill:"#0149EC"}),n.createElement("path",{d:"M89.5186 25.16L87.2929 21.2651L85.0635 25.16H89.5205H89.5186ZM94.2955 33.5014L74.1808 27.5349L71.6991 33.5005L94.2955 33.5014ZM75.5431 25.16L90.7029 10.5553L86.5946 5.93115L75.544 25.1591L75.5431 25.16ZM92.0615 12.9395L97.0211 33.5116H103.781L92.0615 12.9395Z",fill:"#0149EC"}),n.createElement("path",{d:"M90.9542 3.8977L93.0492 11.8512L83.0586 6.12003L90.9542 3.8977ZM68.5507 31.0512L74.3431 25.2279L74.4423 36.7721L68.5507 31.0512ZM100.36 39.5163L94.6146 33.5117H106.071L100.36 39.5163Z",fill:"#0149EC"}))))}const k=n.forwardRef(L);s.p;var N=s(32),V=s(40);N.a.use(V.a).init({resources:{ru:{translations:{registrations:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",login:"\u0412\u0445\u043e\u0434",main_title:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 <bold>onchain \u0434\u0430\u043d\u043d\u044b\u0445</bold>",subtitle:"\u0418 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0439\u0442\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0442\u043e\u043f-\u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0434\u0440\u0443\u0433\u0438\u0445",try_free_ver:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e",points1:"\u0411\u043e\u043b\u0435\u0435 10000 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441",points2:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c Tony Awards",points3:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c Blockchain Life 2024",back:"\u041d\u0430\u0437\u0430\u0434",auth:{title:"Google \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",tg_nik:"Telegram-\u043d\u0438\u043a\u043d\u0435\u0439\u043c \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 WhatsApp",reg:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",email:"Email",phone_req:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",password:"\u041f\u0430\u0440\u043e\u043b\u044c",confirm_pass:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",register:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},how:{title:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430\u0448 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442?",desc:"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c\u044e \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432, \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435\u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0445 \u0442\u0440\u0435\u0439\u0434\u043e\u0432 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0438\u043a\u043e\u0432",item_title_1:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u043e\u043d\u0447\u0435\u0439\u043d-\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438",item_text_1:"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f\u043c \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430 \u043d\u0430 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u0445. \u0423 \u043d\u0430\u0441 \u0441\u0430\u043c\u044b\u0439 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432.",item_title_2:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432",item_text_2:"\u041d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0444\u043e\u043d\u0434\u043e\u0432, \u043c\u0430\u0440\u043a\u0435\u0442\u043c\u0435\u0439\u043a\u0435\u0440\u043e\u0432 \u0438 \u043e\u043f\u044b\u0442\u043d\u044b\u0445 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043e\u0432, \u043f\u043e\u043c\u043e\u0433\u0430\u044f \u0432\u044b\u044f\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043a\u043e\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0438 \u0442\u0440\u0435\u043d\u0434\u044b.",item_title_3:"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u043d\u043d\u0438\u0445 \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u0432",item_text_3:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0439\u0442\u0435 \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0438 \u0442\u043e\u043a\u0435\u043d\u044b\u043d\u0430 \u0441\u0442\u0430\u0434\u0438\u0438 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f. \u0424\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043f\u043e \u0441\u0443\u043c\u043c\u0435, \u0447\u0430\u0441\u0442\u043e\u0442\u0435 \u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430\u043c\u0438.",item_title_4:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f",item_text_4:"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u0430 \u0432\u0430\u0436\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}}},en:{translations:{registrations:"Registration",login:"Entrance",main_title:"Find hidden opportunities based on <bold>on chain data</bold>",subtitle:"And repeat the successful strategies of top traders faster than others.",try_free_ver:"Try the free version",points1:"More than 10,000 have chosen our service",points2:"Tony Awards Winner",points3:"Winner of Blockchain Life 2024",back:"Back",auth:{title:"Google registration",phone:"Phone number (optional)",tg_nik:"Telegram-nickname or WhatsApp number",reg:"Registration",email:"Email",phone_req:"Telephone",password:"Password",confirm_pass:"Password confirmation",register:"Register"},how:{title:"How does our tool work?",desc:"Monitor the activity of large wallets, analyze the liquidity and automate the search for profitable trades in a few clicks",item_title_1:"Monitoring of on-chain activity",item_text_1:"Get instant access to capital movements on blockchains. We have the widest and most convenient tool on the market for analyzing blockchain data and wallets.",item_title_2:"Strategy analysis of major players",item_text_2:"Our service captures the actions of funds, market makers and experienced traders, helping to identify patterns and trends.",item_title_3:"Detecting early signals",item_text_3:"Identify promising projects and tokens at the stage of accumulation. Filter transactions by amount, frequency, and interaction with other wallets.",item_title_4:"Automated alerts",item_text_4:"Set up customized notifications and respond to important events in real time."}}}},fallbackLng:"en",whitelist:["en","ru"],load:"languageOnly",nonExplicitWhitelist:!0,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var M=N.a;var Z=()=>{const{t:e}=Object(u.a)(),t=Object(c.g)();return Object(b.jsx)("div",{className:f.a.header,children:Object(b.jsxs)("div",{className:h()("container",f.a.header_container),children:[Object(b.jsx)(_.a,{to:"/",children:Object(b.jsx)(k,{})}),Object(b.jsxs)("div",{className:f.a.header_actions,children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{className:f.a.header_btns,children:[Object(b.jsx)(C,{onClick:()=>t.push("/register"),children:e("registrations")}),Object(b.jsx)(C,{type:"blue",onClick:()=>t.push("/auth"),children:M.t("login")})]}),Object(b.jsx)(m.c,{className:f.a.header_login,size:20,onClick:()=>t.push("/auth")})]})]})})},E=s(67),F=s(43),B=s.n(F);var A=e=>{let{children:t}=e;return Object(b.jsx)("div",{className:B.a.grid_sections,children:t})},T=s.p+"static/media/how.05c4742e.webp",q=s(4),S=s.n(q);var I=()=>{const e=Object(c.g)(),{t:t}=Object(u.a)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z,{}),Object(b.jsx)("div",{className:S.a.home,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("section",{className:S.a.accent,children:Object(b.jsxs)("div",{className:S.a.accent_content,children:[Object(b.jsx)("h1",{className:S.a.title,children:Object(b.jsx)(E.a,{i18nKey:"main_title",components:{bold:Object(b.jsx)("strong",{})}})}),Object(b.jsx)("div",{className:S.a.subtitle,children:t("subtitle")}),Object(b.jsx)(C,{type:"green",className:S.a.btn,onClick:()=>e.push("/auth"),children:t("try_free_ver")}),Object(b.jsxs)("ul",{className:S.a.points,children:[Object(b.jsx)("li",{children:t("points1")}),Object(b.jsx)("li",{children:t("points2")}),Object(b.jsx)("li",{children:t("points3")})]})]})}),Object(b.jsx)(A,{children:Object(b.jsxs)("section",{className:S.a.how,children:[Object(b.jsx)("div",{className:S.a.section_title,children:t("how.title")}),Object(b.jsx)("div",{className:S.a.section_desc,children:t("how.desc")}),Object(b.jsxs)("div",{className:S.a.how_info,children:[Object(b.jsxs)("div",{className:S.a.how_items,children:[Object(b.jsxs)("div",{className:S.a.how_item,children:[Object(b.jsx)("strong",{children:t("how.item_title_1")}),Object(b.jsx)("span",{children:t("how.item_text_1")})]}),Object(b.jsxs)("div",{className:S.a.how_item,children:[Object(b.jsx)("strong",{children:t("how.item_title_2")}),Object(b.jsx)("span",{children:t("how.item_text_2")})]})]}),Object(b.jsx)("img",{src:T,alt:"",className:S.a.how_img}),Object(b.jsxs)("div",{className:S.a.how_items,children:[Object(b.jsxs)("div",{className:S.a.how_item,children:[Object(b.jsx)("strong",{children:t("how.item_title_3")}),Object(b.jsx)("span",{children:t("how.item_text_3")})]}),Object(b.jsxs)("div",{className:S.a.how_item,children:[Object(b.jsx)("strong",{children:t("how.item_title_4")}),Object(b.jsx)("span",{children:t("how.item_text_4")})]})]})]})]})})]})})]})},P=s(45),W=s.n(P);var R,z,J,G,D=e=>{let{value:t,label:s,inputAttributes:n,onChange:a}=e;return Object(b.jsxs)("div",{className:h()(W.a.input,"input_component"),children:[s&&Object(b.jsx)("label",{children:s}),Object(b.jsx)("input",{type:"text",value:t,...n,onChange:a})]})};function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},K.apply(null,arguments)}function Q(e,t){let{title:s,titleId:a,...i}=e;return n.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),s?n.createElement("title",{id:a},s):null,R||(R=n.createElement("path",{d:"M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",fill:"#FFC107"})),z||(z=n.createElement("path",{d:"M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z",fill:"#FF3D00"})),J||(J=n.createElement("path",{d:"M12 22.0003C14.583 22.0003 16.93 21.0118 18.7045 19.4043L15.6095 16.7853C14.5719 17.5749 13.3038 18.0017 12 18.0003C9.39897 18.0003 7.19047 16.3418 6.35847 14.0273L3.09747 16.5398C4.75247 19.7783 8.11347 22.0003 12 22.0003Z",fill:"#4CAF50"})),G||(G=n.createElement("path",{d:"M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",fill:"#1976D2"})))}const X=n.forwardRef(Q);s.p;var Y=s(13),U=s.n(Y);var $=e=>{let{title:t,inputs:s,actions:n}=e;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:U.a.login,children:[Object(b.jsx)("div",{className:U.a.login_logo,children:Object(b.jsx)(k,{})}),Object(b.jsx)("div",{className:U.a.login_form,children:Object(b.jsxs)("div",{className:U.a.login_content,children:[Object(b.jsx)("h1",{className:U.a.title,children:t}),Object(b.jsxs)("form",{action:"",method:"post",className:U.a.form,children:[Object(b.jsx)("div",{className:U.a.inputs,children:s}),Object(b.jsx)("div",{className:U.a.btns,children:n})]})]})})]})})},ee=s(30),te=s.n(ee);var se=()=>{const{t:e}=Object(u.a)(),t=Object(c.g)(),[s,a]=Object(n.useState)({phone:"",nik:""}),i=(e,t)=>{a({...s,[t]:e.target.value})};return Object(b.jsx)($,{title:e("auth.title"),inputs:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{label:e("auth.phone"),value:s.phone,onChange:e=>i(e,"phone")}),Object(b.jsx)(D,{label:e("auth.tg_nik"),value:s.nik,onChange:e=>i(e,"nik")})]}),actions:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(C,{type:"outline",className:te.a.googlebtn,onClick:()=>t.push("/register"),children:[Object(b.jsx)(X,{}),Object(b.jsx)("span",{children:e("auth.title")})]}),Object(b.jsx)(C,{type:"outline",className:te.a.back,onClick:()=>t.goBack(),children:e("back")})]})})},ne=s(31),ae=s.n(ne);var ie=()=>{const{t:e}=Object(u.a)(),t=Object(c.g)(),[s,a]=Object(n.useState)({email:"",phone:"",nik:"",password:"",confirmPassword:""}),i=(e,t)=>{a({...s,[t]:e.target.value})};return Object(b.jsx)($,{title:e("auth.reg"),inputs:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{label:e("auth.email"),value:s.email,onChange:e=>i(e,"email"),inputAttributes:{type:"email"}}),Object(b.jsx)(D,{label:e("auth.phone_req"),value:s.phone,onChange:e=>i(e,"phone")}),Object(b.jsx)(D,{label:e("auth.tg_nik"),value:s.nik,onChange:e=>i(e,"nik")}),Object(b.jsx)(D,{label:e("auth.password"),value:s.password,onChange:e=>i(e,"password"),inputAttributes:{type:"password"}}),Object(b.jsx)(D,{label:e("auth.confirm_pass"),value:s.confirmPassword,onChange:e=>i(e,"confirmPassword"),inputAttributes:{type:"password"}})]}),actions:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{type:"green",children:e("auth.register")}),Object(b.jsxs)(C,{type:"outline",className:ae.a.googlebtn,children:[Object(b.jsx)(X,{}),Object(b.jsx)("span",{children:e("auth.title")})]}),Object(b.jsx)(C,{type:"outline",className:ae.a.back,onClick:()=>t.goBack(),children:e("back")})]})})};const le=Object(r.a)();var ce=()=>Object(b.jsx)(l.a,{i18n:M,children:Object(b.jsx)(c.c,{history:le,children:Object(b.jsxs)(c.d,{children:[Object(b.jsx)(c.b,{path:"/",render:()=>Object(b.jsx)(I,{}),exact:!0}),Object(b.jsx)(c.b,{path:"/auth",render:()=>Object(b.jsx)(se,{}),exact:!0}),Object(b.jsx)(c.b,{path:"/register",render:()=>Object(b.jsx)(ie,{}),exact:!0}),Object(b.jsx)(c.a,{to:"/"})]})})});s(63);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(ce,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.462469ee.chunk.js.map