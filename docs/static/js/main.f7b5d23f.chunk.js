(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(19),i=n.n(c),r=n(14),o=n(4),s="[principal] options",l="[principal] myLocation",d="[principal] myLocationWeather",m="[principal] myLocationWeatherForecast",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(o.a)(Object(o.a)({},e),{},{options:t.data.options});case l:return Object(o.a)(Object(o.a)({},e),{},{myLocation:t.data.myLocation});case d:return Object(o.a)(Object(o.a)({},e),{},{myLocationWeather:t.data.myLocationWeather,loading:!1});case m:return Object(o.a)(Object(o.a)({},e),{},{myLocationWeatherForecast:t.data.myLocationWeatherForecast});default:return e}},u=Object(a.createContext)(),h=n(10),b=n.n(h),p=n(13),g="6bdb061f209ffb53a5e735c495fc6fb1",O="https://api.openweathermap.org/data/2.5",x=function(){var e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.ipgeolocation.io","/ipgeo?apiKey=").concat("4c05c8de62454b2ca1ab98ea84376622"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(b.a.mark((function e(t,n,a){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/weather?q=").concat(t,"&units=").concat(n,"&lang=").concat(a,"&appid=").concat(g));case 2:return c=e.sent,e.next=5,c.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(b.a.mark((function e(t,n,a,c){var i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/onecall?lat=").concat(t,"&lon=").concat(n,"&units=").concat(a,"&lang=").concat(c,"&appid=").concat(g));case 2:return i=e.sent,e.next=5,i.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),v=n(0),L=function(e){var t=Object(a.useReducer)(j,{options:{idLanguage:"en",metric:"standard",metricSymbol:"K"},myLocation:null,myLocationWeather:null,myLocationWeatherForecast:null,loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1],o=function(e,t){y(e,t,c.options.metric,c.options.idLanguage).then((function(e){if(e){var t=e.daily.filter((function(t,n){return n>0&&n<e.daily.length-1}));i({type:m,data:{myLocationWeatherForecast:t}})}}))};return Object(a.useEffect)((function(){x().then((function(e){e.message?console.log("getCurrentLocation error : ",e):i({type:l,data:{myLocation:{ip:e.ip,country:e.country_name,stateProv:e.state_prov,countryFlag:e.country_flag,currentTime:e.time_zone.current_time_unix}}})}))}),[]),Object(a.useEffect)((function(){var e;null!==c.myLocation&&(e=c.myLocation.stateProv,c.options.metric,c.options.idLanguage,f(e,c.options.metric,c.options.idLanguage).then((function(e){e&&i({type:d,data:{myLocationWeather:{longitude:e.coord.lon,latitude:e.coord.lat,temp:e.main.temp,tempMin:e.main.temp_min,tempMax:e.main.temp_max,feelsLike:e.main.feels_like,pressure:e.main.pressure,icon:e.weather[0].icon,description:e.weather[0].description,percentage:[{title:"Humidity",value:e.main.humidity},{title:"Clouds",value:e.clouds.all}]}}})})))}),[c.myLocation,c.options]),Object(a.useEffect)((function(){null!==c.myLocationWeather&&o(c.myLocationWeather.latitude,c.myLocationWeather.longitude,c.options.metric,c.options.idLanguage)}),[c.myLocationWeather]),Object(v.jsx)(u.Provider,{value:{options:c.options,myLocation:c.myLocation,myLocationWeather:c.myLocationWeather,myLocationWeatherForecast:c.myLocationWeatherForecast,loading:c.loading,getCurrentWeatherForecastByLocation:o,setOptions:function(e){var t={idLanguage:e.idLang,metric:e.metrica,metricSymbol:e.simbolo};i({type:s,data:{options:t}})}},children:e.children})},N=n(21),w=n(2),F=n(12),W=n.n(F),k=function(){var e=Object(a.useContext)(u),t=e.myLocation,n=e.loading;return Object(v.jsx)(v.Fragment,{children:!n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h1",{className:"display-4 text-center font-weight-bold",children:[Object(v.jsx)("span",{children:t.stateProv}),", ",Object(v.jsx)("span",{children:t.country})," ",Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:t.countryFlag,alt:"country flag"})})]}),Object(v.jsx)("h3",{className:"text-center",children:W.a.unix(t.currentTime).format("ddd, D MMM YYYY")})]})})},C=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},S=function(){var e=Object(a.useContext)(u),t=e.options,n=e.myLocation,c=e.myLocationWeather,i=e.loading;return Object(v.jsx)(v.Fragment,{children:!i&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"principal-container",children:[Object(v.jsx)("div",{className:"principal-left",children:Object(v.jsx)("img",{className:"principal-icon",src:"https://openweathermap.org/img/wn/".concat(c.icon,"@4x.png"),alt:"icono"})}),Object(v.jsx)("div",{className:"principal-right",children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{className:"list-temp text-center",children:[Object(v.jsx)("span",{children:Math.round(c.temp)})," \xb0",Object(v.jsx)("span",{children:t.metricSymbol})]}),Object(v.jsx)("li",{className:"list-description text-center font-weight-bold",children:C(c.description)}),Object(v.jsxs)("li",{className:"list-hour text-center",children:["Updated ",Object(v.jsx)("span",{children:W.a.unix(n.currentTime).format("hh:mm a")})]})]})})]}),Object(v.jsx)("div",{className:"principal-container-list",children:Object(v.jsx)("div",{className:"principal-values col-lg-10 col-md-12 col-sm-12 col-12",children:Object(v.jsxs)("ul",{className:"principal-values-list col-md-12",children:[Object(v.jsxs)("li",{className:"col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold",children:["Pressure : ",Object(v.jsx)("span",{children:c.pressure})," hPa"]}),Object(v.jsxs)("li",{className:"col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold",children:["Feels like : ",Object(v.jsx)("span",{children:Math.round(c.feelsLike)}),"\xb0",Object(v.jsx)("span",{children:t.metricSymbol})]}),Object(v.jsxs)("li",{className:"col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold",children:["Temp : ",Object(v.jsx)("span",{children:Math.round(c.tempMax)}),"\xb0",Object(v.jsx)("span",{children:t.metricSymbol})," / ",Object(v.jsx)("span",{children:Math.round(c.tempMin)}),"\xb0",Object(v.jsx)("span",{children:t.metricSymbol})]})]})})})]})})})},M=n(20),_=function(e){var t=e.circular;return Object(v.jsxs)("div",{className:"porcentaje-circular-item",children:[Object(v.jsx)(M.a,{percentage:t.value,strokeWidth:15,strokeLinecap:"butt",primaryColor:["#26B6DB","#c1e1ee"],secondaryColor:"white",fontSize:"35px"}),Object(v.jsx)("div",{className:"text-center font-weight-bold",children:t.title})]})},P=function(){var e=Object(a.useContext)(u),t=e.myLocationWeather,n=e.loading;return Object(v.jsx)("div",{className:"porcentaje-circular",children:!n&&t.percentage.map((function(e,t){return Object(v.jsx)(_,{circular:e},t)}))})},z=function(e){var t=e.forecast,n=t.dt,a=t.temp,c=t.weather;return Object(v.jsx)("div",{className:"forecast-item card text-center",style:{width:"10rem"},children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h3",{className:"font-weight-bold",children:W.a.unix(n).format("ddd")}),Object(v.jsxs)("h3",{className:"",children:[Object(v.jsxs)("span",{className:"forecast-temp-max",children:[Math.round(a.max),"\xb0"]})," / ",Object(v.jsxs)("span",{className:"forecast-temp-min",children:[Math.round(a.min),"\xb0"]})]}),Object(v.jsx)("img",{className:"forecast-icon",src:"https://openweathermap.org/img/wn/".concat(c[0].icon,"@2x.png"),alt:""}),Object(v.jsx)("h6",{className:"forecast-description",children:C(c[0].description)})]})})},B=function(){var e=Object(a.useContext)(u).myLocationWeatherForecast;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"forecast-container",children:null!==e&&Object(v.jsx)(v.Fragment,{children:e.map((function(e){return Object(v.jsx)(z,{forecast:e},e.dt)}))})})})},T=n(9),K=[{id:"af",lang:"Afrikaans"},{id:"al",lang:"Albanian"},{id:"ar",lang:"Arabic"},{id:"az",lang:"Azerbaijani"},{id:"bg",lang:"Bulgarian"},{id:"ca",lang:"Catalan"},{id:"cz",lang:"Czech"},{id:"da",lang:"Danish"},{id:"de",lang:"German"},{id:"el",lang:"Greek"},{id:"en",lang:"English"},{id:"eu",lang:"Basque"},{id:"fa",lang:"Persian"},{id:"fi",lang:"Finnish"},{id:"fr",lang:"French"},{id:"gl",lang:"Galician"},{id:"he",lang:"Hebrew"},{id:"hi",lang:"Hindi"},{id:"hr",lang:"Croatian"},{id:"hu",lang:"Hungarian"},{id:"id",lang:"Indonesian"},{id:"it",lang:"Italian"},{id:"ja",lang:"Japanese"},{id:"kr",lang:"Korean"},{id:"la",lang:"Latvian"},{id:"lt",lang:"Lithuanian"},{id:"mk",lang:"Macedonian"},{id:"no",lang:"Norwegian"},{id:"nl",lang:"Dutch"},{id:"pl",lang:"Polish"},{id:"pt",lang:"Portuguese"},{id:"pt_br",lang:"Portugu\xeas B"},{id:"ro",lang:"Romanian"},{id:"ru",lang:"Russian"},{id:"sv",lang:"Swedish"},{id:"sk",lang:"Slovak"},{id:"sl",lang:"Slovenian"},{id:"es",lang:"Spanish"},{id:"sr",lang:"Serbian"},{id:"th",lang:"Thai"},{id:"tr",lang:"Turkish"},{id:"ua",lang:"Ukrainian"},{id:"vi",lang:"Vietnamese"},{id:"zh_cn",lang:"Chinese S"},{id:"zh_tw",lang:"Chinese T"},{id:"zu",lang:"Zulu"}],A=Object(a.memo)((function(e){var t=e.language;return Object(v.jsx)("option",{value:t.id,children:t.lang})})),D=function(){var e=Object(a.useContext)(u),t=e.options,n=e.setOptions,c=t.metric,i=t.metricSymbol,s=t.idLanguage,l=Object(a.useState)({idLang:s,simbolo:i,metrica:c}),d=Object(r.a)(l,2),m=d[0],j=d[1],h=function(e){var t,n,a,c=e.target.value,i="";if("metrica"===e.target.name)switch(c){case"metric":i="C",j(Object(o.a)(Object(o.a)({},m),{},(t={},Object(T.a)(t,e.target.name,c),Object(T.a)(t,"simbolo",i),t)));break;case"imperial":i="F",j(Object(o.a)(Object(o.a)({},m),{},(n={},Object(T.a)(n,e.target.name,c),Object(T.a)(n,"simbolo",i),n)));break;default:i="K",j(Object(o.a)(Object(o.a)({},m),{},(a={},Object(T.a)(a,e.target.name,c),Object(T.a)(a,"simbolo",i),a)))}else j(Object(o.a)(Object(o.a)({},m),{},Object(T.a)({},e.target.name,c)))};return Object(v.jsxs)("form",{className:"form-inline d-flex justify-content-center",onSubmit:function(e){e.preventDefault(),n(m)},children:[Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"form-group mx-sm-3 mb-2",children:Object(v.jsxs)("select",{className:"form-control",name:"metrica",value:m.metrica,onChange:h,children:[Object(v.jsx)("option",{value:"metric",children:"\xb0C"}),Object(v.jsx)("option",{value:"imperial",children:"\xb0F"}),Object(v.jsx)("option",{value:"standard",children:"\xb0K"})]})})}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"form-group mx-sm-3 mb-2",children:Object(v.jsx)("select",{className:"form-control",name:"idLang",value:m.idLang,onChange:h,children:K.map((function(e){return Object(v.jsx)(A,{language:e},e.id)}))})})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"OK"})})]})},E=(n(32),function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container mt-2",children:[Object(v.jsx)(D,{}),Object(v.jsx)(k,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)(S,{}),Object(v.jsx)(P,{}),Object(v.jsx)(B,{})]})]})})}),H=function(){return Object(v.jsx)(N.a,{children:Object(v.jsx)(w.c,{children:Object(v.jsx)(w.a,{path:"/",component:E})})})},Y=function(){return Object(v.jsx)(L,{children:Object(v.jsx)(H,{})})};i.a.render(Object(v.jsx)(Y,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f7b5d23f.chunk.js.map