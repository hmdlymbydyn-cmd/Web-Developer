/* Rendering, language, theme, animations (GSAP) */
if(typeof gsap==='undefined'){window.gsap={fromTo(){},from(){},to(t,v){if(v&&v.onComplete)v.onComplete()},utils:{toArray:q=>Array.from(document.querySelectorAll(q))},registerPlugin(){}}}
const WA='https://wa.me/962799694856',IG='https://www.instagram.com/webdev.a26/',PH='0799694856';
let L=0,TH='dark';
try{L=+localStorage.getItem('l')||0;TH=localStorage.getItem('t')||'dark'}catch(e){}
const p=a=>a[L],$=s=>document.querySelector(s);
const head=(t,s)=>`<div class="rv"><h2>${p(t)}</h2>${s?`<p class="lead">${p(s)}</p>`:''}</div>`;
const sv=a=>`<div class="card rv"><div class="ic">${a[0]}</div><h3>${p(a[1])}</h3><p class="mu">${p(a[2])}</p><div class="bn">✓ ${p(a[3])}</div></div>`;
const pj=a=>`<div class="card rv"><div class="pv" style="background:${a[0]}"><i style="top:22px;width:40%"></i><i style="top:46px;height:48px;opacity:.25"></i><i style="top:112px;width:60%;opacity:.4"></i></div><h3>${p(a[1])}</h3><p class="mu">${p(a[2])}</p><div class="tg">${a[3].split(' · ').map(x=>`<span>${x}</span>`).join('')}</div><a class="btn" href="contact.html">${p(U.more)}</a></div>`;
const cta=`<section><div class="c"><div class="card cta rv"><h2>${L?'جاهز لبدء مشروعك؟':'Ready to start your project?'}</h2><p class="lead" style="margin:0 auto 26px">${L?'أخبرنا عن فكرتك وسنحوّلها إلى موقع يحقق أهدافك.':'Tell us your idea and we will turn it into a website that meets your goals.'}</p><div class="row" style="justify-content:center"><a class="btn bp" href="${WA}" target="_blank" rel="noopener">${p(U.wa)}</a><a class="btn" href="contact.html">${p(U.start)}</a></div></div></div></section>`;
const hdr=k=>`<section style="padding-bottom:0"><div class="c rv"><h1 style="font-size:clamp(34px,5vw,60px)">${p(PT[k])}</h1></div></section>`;
const pages={
home:()=>`<section class="hero"><div class="grid-bg"></div><div class="orb" id="o1" style="width:420px;height:420px;background:var(--ac);top:-80px;inset-inline-start:-60px"></div><div class="orb" id="o2" style="width:380px;height:380px;background:#6f7cff;bottom:-100px;inset-inline-end:-40px;opacity:.2"></div><div class="c"><h1 class="h1">${L?'احترافية في تصميم وتطوير المواقع الإلكترونية':'Professional Website Development'}</h1><p class="lead h1">${L?'نحوّل أفكارك إلى مواقع عصرية سريعة ومتجاوبة تحقق أهداف مشروعك':'We turn your ideas into modern, fast, and responsive websites that help your business grow'}</p><div class="row h1"><a class="btn bp" href="contact.html">${p(U.start)}</a><a class="btn" href="portfolio.html">${p(U.work)}</a></div></div></section>
<section><div class="c">${head(['What we build','ما نبنيه'],DESC)}<div class="g g3">${S.slice(0,6).map(sv).join('')}</div><p style="margin-top:26px"><a class="btn" href="services.html">${p(U.all)}</a></p></div></section>
<section><div class="c">${head(['Selected work','أعمال مختارة'])}<div class="g g3">${P.slice(0,3).map(pj).join('')}</div><p style="margin-top:26px"><a class="btn" href="portfolio.html">${p(U.all)}</a></p></div></section>
<section><div class="c">${head(['Why choose us','لماذا نحن'])}<div class="g g4">${WHY.map(w=>`<div class="card rv"><h3>${p(w[0])}</h3><p class="mu">${p(w[1])}</p></div>`).join('')}</div></div></section>
<section><div class="c"><div class="g g4">${ST.map(s=>`<div class="rv"><div class="st"><span class="cn" data-n="${s[0]}">0</span>${s[1]}</div><p class="mu">${p(s[2])}</p></div>`).join('')}</div></div></section>
<section><div class="c">${head(['What clients say','آراء العملاء'])}<div class="g g3">${TS.map(t=>`<div class="card rv"><p>“${p(t[0])}”</p><p class="mu" style="margin-top:14px">${p(t[1])}</p></div>`).join('')}</div></div></section>${cta}`,
about:()=>`${hdr('about')}<section><div class="c"><p class="lead rv">${p(DESC)}</p><div class="g g2"><div class="card rv"><h3>${L?'رؤيتنا':'Vision'}</h3><p class="mu">${L?'أن نكون الاستوديو الأول للمواقع السريعة والأنيقة في المنطقة.':'To be the regional studio people trust for fast, elegant websites.'}</p></div><div class="card rv"><h3>${L?'مهمتنا':'Mission'}</h3><p class="mu">${L?'تحويل أفكار العملاء إلى منتجات رقمية تحقق نتائج قابلة للقياس.':'To turn client ideas into digital products with measurable results.'}</p></div></div>${head(['Why clients choose us','لماذا يختارنا العملاء'])}<div class="g g4">${WHY.map(w=>`<div class="card rv"><h3>${p(w[0])}</h3><p class="mu">${p(w[1])}</p></div>`).join('')}</div><div class="rv" style="margin-top:56px"><h2>${L?'رحلتنا':'Our timeline'}</h2></div><div class="tl">${TL.map(t=>`<div class="rv"><h3>${t[0]}</h3><p class="mu">${p(t[1])}</p></div>`).join('')}</div></div></section>${cta}`,
services:()=>`${hdr('services')}<section><div class="c"><div class="g g3" style="margin-top:0">${S.map(sv).join('')}</div></div></section>${cta}`,
portfolio:()=>`${hdr('portfolio')}<section><div class="c"><div class="g g3" style="margin-top:0">${P.map(pj).join('')}</div></div></section>${cta}`,
pricing:()=>`${hdr('pricing')}<section><div class="c"><p class="mu" style="margin-bottom:8px">${L?'أسعار البدء تقريبية وتختلف حسب متطلبات مشروعك.':'Starting prices are estimates and vary with your requirements.'}</p><div class="g g3">${PL.map((x,i)=>`<div class="card rv ${i==1?'pop':''}">${i==1?`<div class="bn" style="margin:0 0 8px">${p(U.pop)}</div>`:''}<h3>${p(x[0])}</h3><p class="mu">${p(x[2])}</p><div class="pr" style="margin-top:14px">$${x[1]}<small> ${L?'ابتداءً من':'from'}</small></div><ul class="f">${x[3].map(f=>`<li>${p(f)}</li>`).join('')}</ul><a class="btn ${i==1?'bp':''}" href="contact.html">${p(U.choose)}</a></div>`).join('')}</div></div></section>`,
faq:()=>`${hdr('faq')}<section><div class="c" style="max-width:820px"><div style="display:grid;gap:12px">${FQ.map(f=>`<div class="card q rv"><button>${p(f[0])}<span>＋</span></button><div>${p(f[1])}</div></div>`).join('')}</div></div></section>${cta}`,
contact:()=>`${hdr('contact')}<section><div class="c g g2" style="margin-top:0"><div class="card rv"><h3>${L?'الهاتف':'Phone'}</h3><p><a href="tel:${PH}" dir="ltr">${PH}</a></p><h3 style="margin-top:18px">Instagram</h3><p><a href="${IG}" target="_blank" rel="noopener" dir="ltr">@webdev.a26</a></p><div class="row" style="margin-top:24px"><a class="btn bp" href="${WA}" target="_blank" rel="noopener">${p(U.wa)}</a><a class="btn" href="${IG}" target="_blank" rel="noopener">${L?'تواصل عبر إنستغرام':'Message on Instagram'}</a></div></div>
<form class="card rv" id="cf"><input name="n" required placeholder="${L?'الاسم':'Name'}"><input name="e" type="email" required placeholder="${L?'البريد الإلكتروني':'Email'}"><input name="p" type="tel" placeholder="${L?'الهاتف':'Phone'}"><select name="t">${(L?['موقع شركة','متجر إلكتروني','موقع مطعم','موقع عيادة','نظام حجز','مشروع مخصص']:['Company website','Online store','Restaurant website','Clinic website','Booking system','Custom project']).map(o=>`<option>${o}</option>`).join('')}</select><textarea name="m" rows="5" required placeholder="${L?'رسالتك':'Message'}"></textarea><button class="btn bp" style="justify-content:center">${p(U.send)}</button></form></div></section>`};
function chrome(){
 document.documentElement.lang=L?'ar':'en';document.documentElement.dir=L?'rtl':'ltr';document.documentElement.dataset.theme=TH;
 $('#lg').textContent=L?'EN':'ع';
 const pg=cur();
 $('#lk').innerHTML=NAV.map(n=>`<a href="${n[0]=='home'?'index':n[0]}.html" class="${n[0]==pg?'on':''}">${p(n[1])}</a>`).join('');
 $('#ft').innerHTML=`<div class="g g4" style="margin-top:0"><div><div class="logo">A Web <b>Developer</b></div><p class="mu" style="margin-top:8px">${L?'مواقع احترافية سريعة ومتجاوبة.':'Fast, responsive, professional websites.'}</p><a href="${IG}" target="_blank" rel="noopener">Instagram</a><a href="${WA}" target="_blank" rel="noopener">WhatsApp</a></div><div><h3>${L?'روابط سريعة':'Quick links'}</h3>${NAV.map(n=>`<a href="${n[0]=='home'?'index':n[0]}.html">${p(n[1])}</a>`).join('')}</div><div><h3>${L?'الخدمات':'Services'}</h3>${S.slice(0,5).map(s=>`<a href="services.html">${p(s[1])}</a>`).join('')}</div><div><h3>${L?'تواصل':'Contact'}</h3><a href="tel:${PH}" dir="ltr">${PH}</a><a href="${WA}" target="_blank" rel="noopener">${p(U.wa)}</a></div></div><p class="mu" style="margin-top:36px;font-size:14px">© 2026 A Web Developer. ${L?'جميع الحقوق محفوظة.':'All rights reserved.'}</p>`;
}
const cur=()=>document.body.dataset.page||'home';
function render(first){
 let pg=cur();if(!pages[pg])pg='home';
 chrome();document.title=pg=='home'?p(PT.home):p(PT[pg])+' | A Web Developer';
 const a=$('#app');a.innerHTML=pages[pg]();window.scrollTo(0,0);$('#lk').classList.remove('open');
 gsap.fromTo(a,{opacity:0,y:14},{opacity:1,y:0,duration:.5});
 if(window.ScrollTrigger){ScrollTrigger.getAll().forEach(t=>t.kill());gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.rv').forEach(el=>gsap.from(el,{y:36,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%'}}));
  gsap.utils.toArray('.cn').forEach(el=>{const o={v:0};gsap.to(o,{v:+el.dataset.n,duration:2,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%'},onUpdate:()=>el.textContent=Math.round(o.v)})})}
 else document.querySelectorAll('.cn').forEach(e=>e.textContent=e.dataset.n);
 if($('.h1')){gsap.from('.h1',{y:50,opacity:0,duration:1.1,stagger:.18,ease:'power4.out',delay:first?1.1:.2});
  gsap.to('#o1',{x:90,y:60,duration:9,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('#o2',{x:-80,y:-50,duration:11,repeat:-1,yoyo:true,ease:'sine.inOut'})}
 document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=q.classList.toggle('open');b.lastChild.textContent=o?'－':'＋'});
 const f=$('#cf');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);const m=`${d.get('t')}\n${L?'الاسم':'Name'}: ${d.get('n')}\n${L?'البريد':'Email'}: ${d.get('e')}\n${L?'الهاتف':'Phone'}: ${d.get('p')}\n\n${d.get('m')}`;window.open(WA+'?text='+encodeURIComponent(m),'_blank')};
}
$('#lg').onclick=()=>{L=1-L;try{localStorage.setItem('l',L)}catch(e){}render()};
$('#th').onclick=()=>{TH=TH=='dark'?'light':'dark';try{localStorage.setItem('t',TH)}catch(e){}document.documentElement.dataset.theme=TH};
$('#bg').onclick=()=>$('#lk').classList.toggle('open');
$('#up').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>$('#up').classList.toggle('show',scrollY>600));
render(true);
setTimeout(()=>gsap.to('#ld',{opacity:0,duration:.6,onComplete:()=>$('#ld').remove()}),700);
