// v6.3.1884
(function(m,h,P,H,Q,r,v,z,da,ea,fa,w,U,A,ga,B,ha,ia){function n(a,b,c,d){return function(){a.call(b,c,d)}}function C(a){return"object"==typeof a}function wa(){for(var a=32,b="";a--;)b+=(0|16*Q.random()).toString(16);return b}function D(a,b,c,d){var e;(e=a.addEventListener)?e.call(a,b,c,0):a.attachEvent(d||"on"+b,c)}function ja(){return P&&"preview"==P.loadPurpose}function I(a,b){for(var c in a)a.hasOwnProperty(c)&&a[c]!==p&&b(a[c],c)}function xa(a){var b=(typeof a).charAt(0);return"[object Array]"==
V.call(a)?"a":"[object Date]"==V.call(a)?"d":b}function J(a,b){var c=[];I(a,function(a,e){c.push(da(e)+"="+da(b?xa(a)+("[object Date]"==V.call(a)?+a:C(a)&&a?J(a,b):a):a))});return c.join("&")}function K(a,b){if(!a)throw Error(b);}function ya(a){R[ka]=a;return ka++}function S(a,b){var c="path=/;",d=a.g(6);d&&(c+="domain="+d+";");return{m:function(d,f){a.g(1,1)&&(h.cookie=d+"="+f+";"+("expires="+(new r(+new r+(b?6E10:6E4))).toGMTString()+";")+c)},A:function(b){if(a.g(1,1))return(h.cookie.match("(^|;)\\s*"+
b+"=([^;]*)")||[])[2]||p},ba:function(a){h.cookie=a+"=;"+("expires="+(new r(0)).toGMTString()+";")+c}}}function L(a){function b(){var a=d[B];a&&(d[B]=a[w](":_GS_:")[0])}var c;if(L[a])return L[a];var d=m.top;L[a]=c=function(){b();d[B]=(d[B]||"")+":_GS_:"+[a,c.f,c.I]};try{var e=d[B]||"";if(-1!=e[ia](":_GS_:")){var f=e[w](":_GS_:")[1][w](",");f[0]==a&&(c.f=f[1]||"",c.I=f[2]||"")}b()}catch(q){d={}}return c}function la(a,b){var c=h[ha]("head")[0],d=h[fa]("script"),e=+new r;d.onerror=function(){100>+new r-
e&&b&&b()};d.src=a;c.appendChild(d);return function(){d&&c.removeChild(d);d=null}}function E(a){var b=x.c;b||(b=x.c=function(a){b.q.push(a)},b.q=[]);return b(a)}function ma(a,b){E(b);var c=x.c;c.c||(c.c=[2,a.b,a.g(15),a.g(11),a.g(6)]);var c=(a.g(15)||{}).js||"https://js.gs-chat.com/chat.js",d=b[0];na||(na=1,la(c+(d?"?"+d.v:"")))}function za(a){M(a,"chat",{},function(b){b&&(b[0]&&(b[0].notrack=1),ma(a,b))})}function F(a){function b(b){f.m(d,q.f=b?"":[t,548*g.D+2019,379*g.B+4621,+new r].join(":"));
a.s(11,b?0:t)}function c(b){m&&"-"!==m?(f.m(e,m+(n?"|"+n:"")),E(["i",a.b,m,n,b])):(f.m(e,""),E(["u",a.b,b]))}var d="gs_u_"+a.b,e="gs_v_"+a.b,f=S(a,1),q=L(a.b),k=(f.A(d)||q.f||"")[w](/(?::|%3A)/),l=1,t=a.g(11,k[0])||(l=0,wa()),Aa=((k[1]||2019)-2019)/548,h=((k[2]||4621)-4621)/379,k=(k[3]||0)/1E3,m=a.g(13),n=a.g(14),g;g={f:t,C:m,D:Aa,B:h,ia:~~k,pa:l,ga:function(a,c){g.B+=+a;g.D+=+c;b()},W:function(a){m=g.C=a;c(1)},qa:b,na:function(){var b=f.A("gs_p_"+a.b)||q.I;f.ba("gs_p_"+a.b);return a.i!==p?a.i:b},
M:n,ra:function(a){K(/^[0-9a-f]{64}$/.test(a),"Invalid auth signature");n=g.M=a;c(1)}};c();return g}function M(a,b,c,d,e,f){var q=n,k=v(function(){q();W=(W+1)%X[A];c.et&&(c.et=0);c.rt=1;--e&&M(a,b,c,d,e,f)},5E3),l=F(a);c.cb=ya(function(a,b){d(a,b);q();z(k)});c.a=a.b;c.au=l.M;c.id=l.f;c.cid=l.C;c.tv=ea;l=b+"?"+J(c);q=la((Ba?"http":"https")+"://"+("chat"==b?b:X[W])+".gosquared.com/"+l,f)}function Ca(a){var b=h[fa]("a");b.href=a||m.location.href;return b.href}function oa(a,b,c){b=Ca(b);a.g(7,1)||(b=
b[U](/\?([^#]*)/,function(a,b){b=b[w]("&");for(var c=[],d=0;d<b[A];d++)"utm_"===b[d].slice(0,4)&&c.push(b[d]);return c[A]?"?"+c.join("&"):""}));a.g(8)||(b=b[U](/#.*$/,""));return{sa:b,t:c!==p?c:h.title,U:function(a){return/^file:/.test(a)||/\/\/localhost[\/:]/.test(a+"/")}(b),T:/fb_xd_(bust|fragment)/.test(b)}}function pa(a){var b;if(a.L){var c=oa(a);!a.g(9)&&c.U||c.T||ja()||(b=J(a.h,1))&&M(a,"prop",{cp:b},n,5)}else v(function(){pa(a)},100)}function qa(a,b,c){var d=a.h=a.h||{};K(b||C(c),"Not an object");
b?d[b]=c:d=a.h=c;!a.V&&a.L&&(a.V=v(function(){pa(a);a.V=0},5))}function Da(){var a=0,b=0,c;H&&(a=H.width,b=H.height);c=(c=m.orientation)&&(c+360)%180;return{K:c?b:a,J:c?a:b,$:H&&H.colorDepth||"-",ha:P.language||P.browserLanguage||"-",aa:h.characterSet||h.charSet||"-",ca:m.devicePixelRatio||1,ja:(new r).getTimezoneOffset()}}function Y(){function a(a){return m["inner"+a]||c&&c[e="client"+a]||d&&d[e]}function b(a){return Q.max(d[e="scroll"+a]|0,c[e]|0,d[e="offset"+a]|0,c[e]|0,d[e="client"+a]|0,c[e]|
0)}var c=h.documentElement,d=h.body||c,e;return{Y:a("Width"),X:a("Height"),R:b("Width"),P:b("Height"),o:m.pageXOffset||c&&c.scrollLeft||0,u:m.pageYOffset||c&&c.scrollTop||0}}function ra(a){a.j&&(a.j=0,a.w=new r-a.F+(a.w||0))}function Z(a){z(a.ka);a.ka=v(n(ra,0,a),15E3);a.j||(a.j=1,a.F=new r)}function Ea(a){var b=a.w,c=new r;a.j&&(b+=c-a.F,a.F=c);a.w=0;return b}function Fa(a){Z(a);var b=Y();b.u>a.H&&(a.H=b.u);b.o>a.G&&(a.G=b.o)}function Ga(a){var b=n(Z,0,a);D(h,"mousemove",b);D(h,"keydown",b);D(m,
"scroll",n(Fa,0,a));D(h,"focus",b,"focusin");D(h,"blur",n(ra,0,a),"focusout")}function Ha(a){a=a.g(10,h.referrer);var b;!a||/^(chrome|about|file):/.test(a)||/^\[.*\]$/.test(a)?a="-":b=a[U](/^.*?\/\//,"")[ia](location.host);return{S:+(0<=b&&8>=b),oa:a}}function T(a,b,c,d){if(a.i!==p){if(!c){var e=Y();c={vw:e.Y,vh:e.X,dw:e.R,dh:e.P,st:e.u,sl:e.o,mst:a.H,msl:a.G}}c.i=a.i;c.e=b;c.et=Ea(a);u&&(c.bc=1);a.fa&&(c.rc=1);M(a,"ping",c,function(b){d&&d();z(a.l);a.l=v(n(T,0,a),[7E3,12E3][a.ma++]||17500+5E3*Q.random());
b&&E(["c",a.b])},5)}else v(function(){T(a,b,c,d)},5E3)}function Ia(a){if(a.i!==p){var b=S(a);a.g(1,1)?b.m("gs_p_"+a.b,a.i):(b=L(a.b),b.I=a.i,b())}}function aa(a,b,c){K(a,"Event name is required");b&&b.call&&(c=b,b=p);if(b===""+b||b===+b)b={caption:b};a={gs_evt_name:a,d:J(b||{},1)};T(this,"event",a,c)}function ba(a,b,c){a&&a.call&&(c=a,a=p);b&&b.call&&(c=b,b=p);var d=this;b=oa(d,a,b);var e=Ha(d),f=d.i===p&&!e.S,q=d.L=F(d),k=Da(),l=Y(),t,g=d.g(5);q.ga(1,f);z(d.l);d.w=0;d.j=0;Z(d);if(!(!d.g(9)&&b.U||
b.T||ja()||k.K&&k.J&&10>k.K&&10>k.J)){d.H=l.u;d.G=l.o;t={cs:k.aa,cd:k.$,la:k.ha,sw:k.K,sh:k.J,dp:k.ca,pu:b.sa,pt:b.t||"-",ri:e.S,ru:e.oa,re:q.pa,vi:q.D,pv:q.B,lv:q.ia,vw:l.Y,vh:l.X,dw:l.R,dh:l.P,st:l.u,sl:l.o,un:d.g(3),pp:q.na(),ec:g,aip:d.g(2)?1:p,tz:k.ja};d.h&&(t.cp=J(d.h,1));d.da||!1===d.g(15)||(t.rc=1,d.da=1);u&&(d.uid=q.f,t.bc=1);d.ma=0;var h;M(d,"pv",t,function(a,b){a!==p&&(d.i=a,z(d.l),d.l=v(n(T,0,d),5E3),c&&c());b&&!h&&(ma(d,b),d.fa=1)},5,function(){t.rc&&!h&&(h=1,za(d))});d.i!==p?a!==p&&
(d.i=p):(v(n(Ga,0,d),500),D(m,"beforeunload",n(Ia,0,d)))}}function sa(a){var b="gs_v_"+a,c=this,d=[];d[12]=c.b=a;c.s=function(a,b,e){4==a&&(qa(c,e,b),b&&!c.N&&(e=b.id,b=b.email,!e&&b&&(e="email:"+b),e&&(c.N=e,F(c).W(e))),b=c.h);13==a&&(qa(c,"id",b),b=(c.N=b)||"-",F(c).W(b));14==a&&F(c).ra(b);d[a]=b};c.g=function(a,e){function f(){var a=S(c,1).A(b),d;/\|[0-9a-f]{32,64}/.test(a)&&(a=a[w]("|"),d=a.pop(),a=a.join("|"));return{Z:d,C:a}}return a in d?d[a]:13==a?f().C||e:14==a?f().Z||e:e};var e;c.ea=function(){e=
v(n(ba,c),20)};c.O=function(){z(c.l);z(e)}}function ca(a,b,c){if(!a)for(a in g)return g[a];if(g[b||a])return g[b||a];a=g[b||a]=new sa(a);c&&a.ea();return a}function G(a,b,c,d,e){b?a.call(g[b],c,d,e):I(g,function(b){a.call(b,c,d,e)})}function Ja(a,b,c,d){function e(a,b){b=b||(C(a)?a:{});C(a)||(b[B]=a);K(b[B],"No Name");k.push(b);return l}function f(a){for(var b=0;b<a[A];)e(a[b++]);return l}function g(){G(function(){var a=S(this,1),d="gs_t_"+this.b,e=a.A(d)||0;a.m(d,+new r);aa.call(this,"_transaction",
{id:b,pt:{ts:+e},i:k,d:c})},a)}!c&&C(b)&&(c=b,b=c.id);var k=[],l;d&&f(d);c&&c.track&&g();return l={id:b,addItem:e,addItems:f,track:g}}function Ka(a,b){!b&&C(a)&&(b=a,a=b.id,!a&&b.email&&(a="email:"+b.email));K(a,"ID or email required");"__n/v_"!==a&&this.s(13,a);b&&this.s(4,b)}function x(a,b,c,d){if(a&&a.call)a();else if(/^GSN-.*-.$/.test(a))b!==""+b&&(c=b,b=0),ca(a,b,c||c===p);else if(R[a])R[a](b,c),delete R[a];else{var e=function(a,b,c){f?g[f].s(a,b,c):I(g,function(d){d.s(a,b,c)})};a=a[w](".");
var f;1<a[A]&&(f=a.shift());a=a[0];var h={usecookies:1,anonymizeip:2,visitorname:3,username:3,statuscode:5,cookiedomain:6,trackparams:7,trackhash:8,tracklocal:9,referrer:10,visitorid:13,visitor:4,clientid:11,auth:14,props:4,properties:4,chat:15};if(/transaction$/i.test(a))return Ja(f,b,c,d);if("get"==a)return c=h[(b+"")[ga]()]||b,f?d=g[f].g(c):I(g,function(a){d=a.g(c)}),d;"set"==a?(a=(b+"")[w]("."),b=a.shift(),e(h[b[ga]()]||b,c,a.join("."))):"track"==a?G(ba,f,b,c,d):"event"==a?G(aa,f,b,c,d):"cancel"==
a?G(function(){this.O()},f):"noCookies"==a?e(1,0):"anonymizeIP"==a?e(2,1):"tag"==a?e(3,b):"load"==a?b&&b():"auth"==a?e(14,b):"identify"==a?G(Ka,f,b,c,d):"alias"==a?e(13,b):"unidentify"==a?G(function(){if(this.g(13)||E(["e",this.b]))this.s(13),F(this).qa(1)}):"props"==a||"properties"==a?e(4,b):"chat"==a&&E([b,c,d])}}function ta(a){x.apply({},a)}var p,N,O=m._gs||(N=1,function(){ua.push(arguments)}),ua=O.q||[];if(!O.v){var u=m.GoSquared,V=Object.prototype.toString,R={},ka=0,X=["data","data2"],W=0|Q.random()*
X[A],Ba=/^http:/.test(location.href),na,g={};if(u){I(u,function(a,b){"acct"==b?(ca(a,"_default",1),O(function(){function c(a){d[a.shift()].apply(d,a)}var d=u.DefaultTracker=g._default;if(b=u.q)for(;a=b.shift();)c(a);u.q={push:c};(b=u.load)&&b(d)})):"load"!=b&&"q"!=b&&O("set",b,a)});var y=sa.prototype;y.TrackView=ba;y.TrackEvent=aa;y.Cancel=function(){this.O()};u.Tracker=ca;u.Cancel=n(x,0,"cancel")}m._gs=x;x.v=ea;for(O.q={push:ta};y=ua.shift();)ta(y);if(N){N=h[ha]("script");for(var y=N[A],va;y--;)(va=
N[y].getAttribute("data-gs"))&&x(va)}}})(window,document,navigator||{},screen,Math,Date,setTimeout,clearTimeout,encodeURIComponent,"6.3.1884","createElement","split","replace","length","toLowerCase","name","getElementsByTagName","indexOf");
