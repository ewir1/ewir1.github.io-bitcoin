(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),s=a("O40h"),c=a("q1tI"),o=a.n(c),i=a("pJ0N"),l=a("zgjP"),m=a.n(l),u=function(e){var t=e.precio,a=t.PRICE,n=t.CHANGEPCT24HOUR,r=t.MARKET,s=t.TOTALVOLUME24H;return o.a.createElement("div",{className:"card text-white bg-success mb-3"},o.a.createElement("div",{className:"card-header"},"Precio del Bitcoin"),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Precio Actual: ",a),o.a.createElement("div",{className:"d-md-flex justify-content-between"},o.a.createElement("p",{className:"card-text"},o.a.createElement("span",{className:"font-weight-bold"},"Últimas 24 Horas: ")," ",n,"%"),o.a.createElement("p",{className:"card-text"},o.a.createElement("span",{className:"font-weight-bold"},"Market: ")," ",r),o.a.createElement("p",{className:"card-text"},o.a.createElement("span",{className:"font-weight-bold"},"Volumen Total 24 Horas: ")," ",s))))},d=function(e){var t,a=e.noticia,n=a.urlToImage,r=a.url,s=a.title,c=a.description,i=a.source;return t=""!=n?o.a.createElement("img",{src:n,alt:s,className:"card-img-top"}):o.a.createElement("p",{className:"text-center my-5"},"Imagen No Disponible"),o.a.createElement("div",{className:"col-md-6 col-12 mb-4"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-image"},t),o.a.createElement("div",{className:"card-body"},o.a.createElement("h3",{className:"card-title"},s),o.a.createElement("p",{className:"card-text"},c),o.a.createElement("p",{className:"card-text text-danger"},i.name),o.a.createElement("a",{href:r,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},p=function(e){return o.a.createElement("div",{className:"row"},e.noticias.map(function(e){return o.a.createElement(d,{key:e.url,noticia:e})}))},f=a("pLtp"),E=a.n(f),v=function(e){var t=e.info,a=t.name,n=t.url,r=t.description,s=a.text;s.length>100&&(s=s.substr(0,100)+"...");var c=r.text;return c&&(c=c.substr(0,250)+"..."),o.a.createElement("a",{href:n,target:"_blank",className:"nav-link list-group-item active text-light mb-1"},o.a.createElement("h3",{className:"mb-3"},s),o.a.createElement("p",{className:"mb-1"},c))},N=function(e){var t=E()(e.eventos);return o.a.createElement("div",{className:"list-group"},t.map(function(t){return o.a.createElement(v,{key:t,info:e.eventos[t]})}))},h=function(e){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h2",{className:"my-4"},"Precio del Bitcoin"),o.a.createElement(u,{precio:e.precioBitcoin})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("h2",{className:"my-4"},"Noticias sobre Bitcoin"),o.a.createElement(p,{noticias:e.noticias})),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h2",{className:"my-4"},"Proximos eventos Bitcoin"),o.a.createElement(N,{eventos:e.eventos}))))};h.getInitialProps=Object(s.default)(r.a.mark(function e(){var t,a,n,s,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD");case 2:return t=e.sent,e.next=5,m()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-28&sortBy=publishedAt&apiKey=73b747688861479f97530387c6a578d1&language=es");case 5:return a=e.sent,e.next=8,m()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=64P2RTEHJSFLC7LRQEFD");case 8:return n=e.sent,e.next=11,t.json();case 11:return s=e.sent,e.next=14,a.json();case 14:return c=e.sent,e.next=17,n.json();case 17:return o=e.sent,e.abrupt("return",{precioBitcoin:s.DISPLAY.BTC.USD,noticias:c.articles,eventos:o.events});case 19:case"end":return e.stop()}},e)}));t.default=h},"W/7i":function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest;for(var s in r.open(t.method||"get",e,!0),t.headers)r.setRequestHeader(s,t.headers[s]);function c(){var e,t=[],a=[],n={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,s,c){t.push(s=s.toLowerCase()),a.push([s,c]),n[s]=(e=n[s])?e+","+c:c}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:c,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return a},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}r.withCredentials="include"==t.credentials,r.onload=function(){a(c())},r.onerror=n,r.send(t.body||null)})}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("W/7i").default||a("W/7i"))}},[["vlRD",1,0]]]);