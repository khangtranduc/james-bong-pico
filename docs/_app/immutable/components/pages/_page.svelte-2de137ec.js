import{S as K,i as L,s as M,k as g,a as I,q as w,l as _,c as N,m as d,r as B,h as n,K as x,n as c,L as y,C as F,b as A,D as l,E as U,B as H,G as V}from"../../chunks/index-064ced86.js";import{d as z}from"../../chunks/store-32828cda.js";import{g as Q}from"../../chunks/navigation-e61bd54a.js";function R(r){let s,u,h,t,o,m,E,i,C,f,P,S,p,b,j,q,v,O,D;return{c(){s=g("img"),h=I(),t=g("div"),o=g("h1"),m=w("James Bong"),E=I(),i=g("p"),C=w("Your one stop shop for everything "),f=g("span"),P=w("weed"),S=I(),p=g("button"),b=g("span"),j=w("Explore our catalogs"),q=I(),v=g("iconify-icon"),this.h()},l(e){s=_(e,"IMG",{src:!0,alt:!0,class:!0}),h=N(e),t=_(e,"DIV",{class:!0});var a=d(t);o=_(a,"H1",{class:!0});var G=d(o);m=B(G,"James Bong"),G.forEach(n),E=N(a),i=_(a,"P",{class:!0});var Y=d(i);C=B(Y,"Your one stop shop for everything "),f=_(Y,"SPAN",{class:!0});var J=d(f);P=B(J,"weed"),J.forEach(n),Y.forEach(n),S=N(a),p=_(a,"BUTTON",{class:!0});var k=d(p);b=_(k,"SPAN",{});var T=d(b);j=B(T,"Explore our catalogs"),T.forEach(n),q=N(k),v=_(k,"ICONIFY-ICON",{icon:!0,width:!0}),d(v).forEach(n),k.forEach(n),a.forEach(n),this.h()},h(){x(s.src,u=r[2][r[0]])||c(s,"src",u),c(s,"alt",""),c(s,"class","svelte-1felopp"),y(s,"gray",r[1]),c(o,"class","gradient svelte-1felopp"),y(o,"gray-txt",r[1]),c(f,"class","gradient svelte-1felopp"),y(f,"gray-txt",r[1]),c(i,"class","svelte-1felopp"),F(v,"icon","lucide:arrow-right"),F(v,"width","25"),c(p,"class","svelte-1felopp"),c(t,"class","title svelte-1felopp")},m(e,a){A(e,s,a),A(e,h,a),A(e,t,a),l(t,o),l(o,m),l(t,E),l(t,i),l(i,C),l(i,f),l(f,P),l(t,S),l(t,p),l(p,b),l(b,j),l(p,q),l(p,v),O||(D=U(p,"click",r[4]),O=!0)},p(e,[a]){a&1&&!x(s.src,u=e[2][e[0]])&&c(s,"src",u),a&2&&y(s,"gray",e[1]),a&2&&y(o,"gray-txt",e[1]),a&2&&y(f,"gray-txt",e[1])},i:H,o:H,d(e){e&&n(s),e&&n(h),e&&n(t),O=!1,D()}}}function W(r,s,u){let h,t;V(r,z,i=>u(3,t=i));const o=["/splashes/snoop-dogg-puffing.jpg","/splashes/person-smoking-marijuana-pipe.jpg"];let m=0;setInterval(()=>u(0,m=(m+1)%o.length),3e3);const E=()=>Q("/search");return r.$$.update=()=>{r.$$.dirty&8&&u(1,h=t)},[m,h,o,t,E]}class ee extends K{constructor(s){super(),L(this,s,W,R,M,{})}}export{ee as default};
