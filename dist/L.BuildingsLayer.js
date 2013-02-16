(function(j){function I(p,x){var B=p[0]-x[0],e=p[1]-x[1];return B*B+e*e}function Oa(p){for(var x=0,B=0,e=0,h=p.length-3;e<h;e+=2){x+=p[e];B+=p[e+1]}p=(p.length-2)*2;return[x/p<<0,B/p<<0]}function Pa(p){var x=p.length/2,B=new Qa(x),e=0,h=x-1,k,t,z,C,J=[],P=[],Q=[];for(B[e]=B[h]=1;h;){t=0;for(k=e+1;k<h;k++){z=p[k*2];var ma=p[k*2+1],E=p[e*2],aa=p[e*2+1],ga=p[h*2],K=p[h*2+1],y=ga-E,F=K-aa,V=void 0;if(y!==0||F!==0){V=((z-E)*y+(ma-aa)*F)/(y*y+F*F);if(V>1){E=ga;aa=K}else if(V>0){E+=y*V;aa+=F*V}}y=z-E;F=
ma-aa;z=y*y+F*F;if(z>t){C=k;t=z}}if(t>2){B[C]=1;J.push(e);P.push(C);J.push(C);P.push(h)}e=J.pop();h=P.pop()}for(k=0;k<x;k++)B[k]&&Q.push(p[k*2],p[k*2+1]);return Q}var Ra=Ra||Array,Qa=Qa||Array,W=Math,ab=W.exp,bb=W.log,R=W.sin,ca=W.cos,za=W.tan,Sa=W.asin,cb=W.atan,Ta=W.atan2,Ga=W.min,db=W.max,Ha=j.document,M=function(){function p(e,h,k){if(k<0)k+=1;if(k>1)k-=1;if(k<1/6)return e+(h-e)*6*k;if(k<0.5)return h;if(k<2/3)return e+(h-e)*(2/3-k)*6;return e}function x(e,h,k,t){this.r=e;this.g=h;this.b=k;this.a=
arguments.length<4?1:t}var B=x.prototype;B.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+")"};B.adjustLightness=function(e){var h=M.toHSLA(this);h.l*=e;h.l=Math.min(1,Math.max(0,h.l));var k,t;if(h.s===0)e=k=t=h.l;else{t=h.l<0.5?h.l*(1+h.s):h.l+h.s-h.l*h.s;var z=2*h.l-t;e=p(z,t,h.h+1/3);k=p(z,t,h.h);t=p(z,t,h.h-1/3)}return new M(e*255<<0,k*255<<0,t*255<<0,h.a)};B.adjustAlpha=function(e){return new M(this.r,this.g,this.b,this.a*e)};x.parse=function(e){e+=
"";if(~e.indexOf("#")){e=e.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new M(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16)/255:1)}if(e=e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new M(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),e[4]?parseFloat(e[5],10):1)};x.toHSLA=function(e){var h=e.r/255,k=e.g/255,t=e.b/255,z=Math.max(h,k,t),C=Math.min(h,k,t),J,P=(z+C)/2,Q;if(z===C)J=C=0;else{Q=z-C;C=P>0.5?Q/(2-z-C):Q/(z+C);switch(z){case h:J=(k-
t)/Q+(k<t?6:0);break;case k:J=(t-h)/Q+2;break;case t:J=(h-k)/Q+4;break}J/=6}return{h:J,s:C,l:P,a:e.a}};return x}(),ha=Math.PI,Ua=ha/2,eb=ha/4,N=180/ha,fb=256,Ia=14,na="latitude",oa="longitude",X=0,O=1,S=2,da=3,Aa=4,pa=5,ba=6;j.OSMBuildings=function(p){function x(a,c){var b={};a/=qa;c/=qa;b[na]=c<=0?90:c>=1?-90:N*(2*cb(ab(ha*(1-2*c)))-Ua);b[oa]=(a===1?1:(a%1+1)%1)*360-180;return b}function B(a,c){return a.replace(/\{ *([\w_]+) *\}/g,function(b,d){return c[d]})}function e(a,c){var b=new XMLHttpRequest;
b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function h(){if(!(!Ja||T<Ia)){var a=x(Y-F,Z-V),c=x(Y+K+F,Z+y+V);Ba&&Ba.abort();Ba=e(B(Ja,{w:a[oa],n:a[na],e:c[oa],s:c[na],z:T}),k)}}function k(a){var c,b,d,f=[],g,i=g=0;ra=Ia;P(T);Ba=null;if(!(!a||a.meta.z!==T)){d=a.meta;b=a.data;if(D&&A&&D.z===d.z){g=D.x-d.x;i=D.y-d.y;a=0;for(c=A.length;a<c;a++)f[a]=A[a][S][0]+g+","+(A[a][S][1]+
i)}D=d;A=[];a=0;for(c=b.length;a<c;a++){d=[];if(!(b[a][O]>sa)){g=Pa(b[a][S]);if(!(g.length<8)){d[S]=g;d[Aa]=Oa(g);d[X]=Ga(b[a][X],sa);d[O]=b[a][O];g=d[S][0]+","+d[S][1];d[pa]=!(f&&~f.indexOf(g));d[da]=[];d[ba]=[];A.push(d)}}}ma()}}function t(a,c){var b=[],d,f,g,i,l,m,o,v,q,u=Ka-T;d=0;for(f=a.length;d<f;d++){l=a[d];v=l[O]>>u;if(!(v>sa)){m=l[S];q=new Ra(m.length);g=0;for(i=m.length-1;g<i;g+=2){o=m[g+1];var r=Ga(1,db(0,0.5-bb(za(eb+Ua*m[g]/180))/ha/2));o={x:(o/360+0.5)*qa<<0,y:r*qa<<0};q[g]=o.x;q[g+
1]=o.y}q=Pa(q);if(!(q.length<8)){i=[];i[S]=q;i[Aa]=Oa(q);i[X]=Ga(l[X]>>u,sa);i[O]=v;i[pa]=c;i[da]=l[da];i[ba]=[];for(g=0;g<3;g++)if(i[da][g])i[ba][g]=i[da][g].adjustAlpha(U)+"";b.push(i)}}}return b}function z(a,c){if(typeof a==="object")J(a,!c);else{var b=Ha.documentElement,d=Ha.createElement("script");j.jsonpCallback=function(f){delete j.jsonpCallback;b.removeChild(d);J(f,!c)};b.insertBefore(d,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function C(a,c,b){if(b===undefined)b=[];var d,
f,g,i=a[0]?a:a.features,l,m,o,v,q,u=c?1:0,r=c?0:1;if(i){d=0;for(a=i.length;d<a;d++)C(i[d],c,b);return b}if(a.type==="Feature"){l=a.geometry;d=a.properties}if(l.type==="Polygon")m=[l.coordinates];if(l.type==="MultiPolygon")m=l.coordinates;if(m){c=d.height;if(d.color||d.wallColor)v=M.parse(d.color||d.wallColor);if(d.roofColor)q=M.parse(d.roofColor);d=0;for(a=m.length;d<a;d++){i=m[d][0];o=[];f=l=0;for(g=i.length;f<g;f++){o.push(i[f][u],i[f][r]);l+=c||i[f][2]||0}if(l){f=[];g=S;var s=void 0,w=void 0,H=
void 0,ja=void 0,ta=0,$=void 0,Va=void 0;$=0;for(Va=o.length-3;$<Va;$+=2){s=o[$];w=o[$+1];H=o[$+2];ja=o[$+3];ta+=s*ja-H*w}if((ta/2>0?"CW":"CCW")==="CW")o=o;else{s=[];for(w=o.length-2;w>=0;w-=2)s.push(o[w],o[w+1]);o=s}f[g]=o;f[X]=l/i.length<<0;f[da]=[v||null,v?v.adjustLightness(0.8):null,q?q:v?v.adjustLightness(1.2):ia];b.push(f)}}}return b}function J(a,c){if(a){ua=C(a,c);ra=0;P(T);D={n:90,w:-180,s:-90,e:180,x:0,y:0,z:T};A=t(ua,true);ma()}else{ua=null;E()}}function P(a){var c,b,d;T=a;qa=fb<<T;U=1-
(T-ra)*0.3/(Ka-ra);Ca=ea.adjustAlpha(U)+"";Da=Ea.adjustAlpha(U)+"";Fa=ia.adjustAlpha(U)+"";La=Wa.adjustAlpha(U)+"";if(A){a=0;for(c=A.length;a<c;a++){d=A[a];d[ba]=[];for(b=0;b<3;b++)if(d[da][b])d[ba][b]=d[da][b].adjustAlpha(U)+""}}}function Q(){var a,c,b,d,f,g,i,l,m=Y-D.x,o=Z-D.y,v,q,u,r,s,w,H=[];n.fillStyle=La;a=0;for(c=A.length;a<c;a++){f=A[a];q=false;g=f[S];v=[];b=0;for(d=g.length-1;b<d;b+=2){v[b]=i=g[b]-m;v[b+1]=l=g[b+1]-o;q||(q=i>0&&i<K&&l>0&&l<y)}if(q){g=f[X];if(f[O])g=f[O];i=null;n.beginPath();
b=0;for(d=v.length-3;b<d;b+=2){l=v[b];u=v[b+1];q=v[b+2];r=v[b+3];s={x:l+va*g,y:u+wa*g};w={x:q+va*g,y:r+wa*g};if(f[O]){u={x:l+va*g,y:u+wa*g};r={x:q+va*g,y:r+wa*g};l=u.x;u=u.y;q=r.x;r=r.y}if((q-l)*(s.y-u)>(s.x-l)*(r-u)){i===1&&n.lineTo(l,u);i=0;b||n.moveTo(l,u);n.lineTo(q,r)}else{i===0&&n.lineTo(s.x,s.y);i=1;b||n.moveTo(s.x,s.y);n.lineTo(w.x,w.y)}}n.closePath();n.fill();H.push(v)}}n.fillStyle=Ca;a=0;for(c=H.length;a<c;a++)aa(H[a]);a=n.getImageData(0,0,K,y);c=a.data;b=M.parse(La).a*255<<0;m=0;for(o=
c.length;m<o;m+=4){d=c[m+0];f=c[m+3];if(d&&f>=255)c[m+3]=0;else if(f>b)c[m+3]=b}n.putImageData(a,0,0);fa=new Image;fa.src=G.toDataURL()}function ma(){ka=0;fa=null;clearInterval(Ma);Ma=setInterval(function(){ka+=0.1;if(ka>1){clearInterval(Ma);ka=1;for(var a=0,c=A.length;a<c;a++)A[a][pa]=0}E()},33)}function E(){n.clearRect(0,0,K,y);if(D&&A)if(!(T<ra||Na)){if(Xa)if(fa)n.drawImage(fa,Ya-Y,Za-Z);else{Q();Ya=Y;Za=Z}var a,c,b,d,f,g,i,l,m,o=Y-D.x,v=Z-D.y,q=[xa+o,ya+v],u,r,s,w,H,ja;A.sort(function(ta,$){return I($[Aa],
q)/$[X]-I(ta[Aa],q)/ta[X]});a=0;for(c=A.length;a<c;a++){f=A[a];r=false;g=f[S];u=[];b=0;for(d=g.length-1;b<d;b+=2){u[b]=l=g[b]-o;u[b+1]=m=g[b+1]-v;r||(r=l>0&&l<K&&m>0&&m<y)}if(r){b=f[pa]?f[X]*ka:f[X];g=la/(la-b);if(f[O]){b=f[pa]?f[O]*ka:f[O];i=la/(la-b)}l=[];b=0;for(d=u.length-3;b<d;b+=2){m=u[b];s=u[b+1];r=u[b+2];w=u[b+3];H=ga(m,s,g);ja=ga(r,w,g);if(f[O]){s=ga(m,s,i);w=ga(r,w,i);m=s.x;s=s.y;r=w.x;w=w.y}if((r-m)*(H.y-s)>(H.x-m)*(w-s)){n.fillStyle=m<r&&s<w||m>r&&s>w?f[ba][1]||Da:f[ba][0]||Ca;aa([r,w,
m,s,H.x,H.y,ja.x,ja.y])}l[b]=H.x;l[b+1]=H.y}n.fillStyle=f[ba][2]||Fa;n.strokeStyle=f[ba][1]||Da;aa(l,true)}}}}function aa(a,c){if(a.length){n.beginPath();n.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)n.lineTo(a[b],a[b+1]);n.closePath();c&&n.stroke();n.fill()}}function ga(a,c,b){return{x:(a-xa)*b+xa<<0,y:(c-ya)*b+ya<<0}}var K=0,y=0,F=0,V=0,Y=0,Z=0,T,qa,Ba,G,n,Ja,ea=new M(200,190,180),Ea=ea.adjustLightness(0.8),ia=ea.adjustLightness(1.2),Wa=new M(0,0,0,0.4),Ca=ea+"",Da=Ea+"",Fa=ia+"",La=Wa+"",
Xa=true,ua,D,A,ka=1,Ma,U=1,ra=Ia,Ka=20,sa,xa,ya,la,Na,Ya,Za,fa,va,wa,gb=357.5291/N,hb=0.98560028/N,ib=1.9148/N,jb=0.02/N,kb=3.0E-4/N,lb=102.9372/N,$a=23.45/N,mb=280.16/N,nb=360.9856235/N;this.setStyle=function(a){a=(a=a)||{};if(a.color||a.wallColor){ea=M.parse(a.color||a.wallColor);Ca=ea.adjustAlpha(U)+"";Ea=ea.adjustLightness(0.8);Da=Ea.adjustAlpha(U)+"";ia=ea.adjustLightness(1.2);Fa=ia.adjustAlpha(U)+""}if(a.roofColor){ia=M.parse(a.roofColor);Fa=ia.adjustAlpha(U)+""}if(a.shadows!==undefined)Xa=
!!a.shadows;E();return this};this.geoJSON=function(a,c){z(a,c);return this};this.setCamOffset=function(a,c){xa=F+a;ya=y+c};this.setMaxZoom=function(a){Ka=a};this.createCanvas=function(a){G=Ha.createElement("CANVAS");G.style.webkitTransform="translate3d(0,0,0)";G.style.imageRendering="optimizeSpeed";G.style.position="absolute";G.style.pointerEvents="none";G.style.left=0;G.style.top=0;a.appendChild(G);n=G.getContext("2d");n.lineCap="round";n.lineJoin="round";n.lineWidth=1;try{n.mozImageSmoothingEnabled=
false}catch(c){}return G};this.destroyCanvas=function(){G.parentNode.removeChild(G)};this.loadData=h;this.onMoveEnd=function(){var a=x(Y,Z),c=x(Y+K,Z+y);fa=null;E();if(D&&(a[na]>D.n||a[oa]<D.w||c[na]<D.s||c[oa]>D.e))h()};this.onZoomEnd=function(a){Na=false;P(a.zoom);if(ua){A=t(ua);fa=null;E()}else{E();h()}};this.onZoomStart=function(){Na=true;E()};this.render=E;this.setOrigin=function(a,c){Y=a;Z=c};this.setSize=function(a,c){K=a;y=c;F=K/2<<0;V=y/2<<0;xa=F;ya=y;la=K/1.5/za(45)<<0;G.width=K;G.height=
y;sa=la-50};this.setZoom=P;this.setDate=function(a){var c,b;fa=null;if(a){c=x(Y+F,Z+V);b=-c.longitude/N;c=c.latitude/N;a=a.valueOf()/864E5-0.5+2440588;var d=gb+hb*(a-2451545),f=ib*R(d)+jb*R(2*d)+kb*R(3*d);f=d+lb+f+ha;d=Sa(R(f)*R($a));f=Ta(R(f)*ca($a),ca(f));b=mb+nb*(a-2451545)-b-f;b={altitude:Sa(R(c)*R(d)+ca(c)*ca(d)*ca(b)),azimuth:Ta(R(b),ca(b)*R(c)-za(d)*ca(c))-ha/2};if(!(b.altitude<=0)){c=1/za(b.altitude);va=ca(b.azimuth)*c;wa=R(b.azimuth)*c;E()}}};Ja=p};j.OSMBuildings.VERSION="0.1.7a";j.OSMBuildings.ATTRIBUTION=
'&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
L.BuildingsLayer=L.Class.extend({map:null,osmb:null,canvas:null,blockMoveEvent:null,lastX:0,lastY:0,initialize:function(j){L.Util.setOptions(this,j)},onMove:function(){var j=L.DomUtil.getPosition(this.map._mapPane);this.osmb.setCamOffset(this.lastX-j.x,this.lastY-j.y);this.osmb.render()},onMoveEnd:function(){if(this.blockMoveEvent)this.blockMoveEvent=false;else{var j=L.DomUtil.getPosition(this.map._mapPane),I=this.map.getPixelOrigin();this.lastX=j.x;this.lastY=j.y;this.canvas.style.left=-j.x+"px";
this.canvas.style.top=-j.y+"px";this.osmb.setCamOffset(0,0);this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(I.x-j.x,I.y-j.y);this.osmb.onMoveEnd()}},onZoomStart:function(){this.osmb.onZoomStart()},onZoomEnd:function(){var j=L.DomUtil.getPosition(this.map._mapPane),I=this.map.getPixelOrigin();this.osmb.setOrigin(I.x-j.x,I.y-j.y);this.osmb.onZoomEnd({zoom:this.map._zoom});this.blockMoveEvent=true},addTo:function(j){j.addLayer(this);return this},onAdd:function(j){this.map=j;
this.osmb=new OSMBuildings(this.options.url);this.canvas=this.osmb.createCanvas(this.map._panes.overlayPane);this.osmb.maxZoom=this.map._layersMaxZoom;j=L.DomUtil.getPosition(this.map._mapPane);var I=this.map.getPixelOrigin();this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(I.x-j.x,I.y-j.y);this.osmb.setZoom(this.map._zoom);this.canvas.style.left=-j.x+"px";this.canvas.style.top=-j.y+"px";this.map.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},
this);if(this.map.options.zoomAnimation)this.canvas.className="leaflet-zoom-animated";this.map.attributionControl.addAttribution(OSMBuildings.ATTRIBUTION);this.osmb.loadData();this.osmb.render()},onRemove:function(j){j.attributionControl.removeAttribution(OSMBuildings.ATTRIBUTION);j.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.canvas=this.osmb.destroyCanvas();this.osmb=this.map=null},geoJSON:function(j,I){return this.osmb.geoJSON(j,I)},
setStyle:function(j){return this.osmb.setStyle(j)},setDate:function(j){return this.osmb.setDate(j)}});
