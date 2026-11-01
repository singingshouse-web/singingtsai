/* 心映好物 · shop.js — 視差捲動、線上抽牌、分享圖
   單元：01 Hero / 02 規模 / 03 社會證明 / 04 四種牌 / 05 線上抽牌 / 06 導購
   每個單元＝一段釘住的舞台（sticky）＋一段捲動距離，進度 0→1 驅動場景 */
(function(){
'use strict';
var POOL=[{"id": "A_01", "name": "走吧，邁出那一步", "intro": "你已經準備得比你想像中更多了。現在向前一步，是向自己證明：我願意往前走一點點。世界會在你踏出去的那刻開始回應你。", "cat": "內在雙向"}, {"id": "A_02", "name": "承認還沒準備好", "intro": "此刻，你的身體與心靈需要停泊。放慢腳步，允許自己暫時停下來，那也是一種前進。", "cat": "內在雙向"}, {"id": "A_03", "name": "我正在改變", "intro": "外界可能看不出來，但你知道自己已經不同了。一些念頭正在鬆動，一些舊的反應開始消失。悄悄地、緩緩地向新的自己靠近。", "cat": "內在雙向"}, {"id": "A_04", "name": "我好像又退縮了", "intro": "退縮也是可以的，身體正在溫柔保護那小小的舊傷疤。「我們還需要一點安全感，再往前。」當你願意聽見這個訊號了，就是改變的開始。", "cat": "內在雙向"}, {"id": "A_05", "name": "願意與生命合作", "intro": "當你允許鬆開執著，你會發現事情開始有自己的韻律。步伐會變得更輕，發現自己可以不用再那麼用力。願意讓世界參與你的旅程。", "cat": "內在雙向"}, {"id": "A_06", "name": "放下控制", "intro": "過去的經驗讓你深信，把一切抓在手中，秩序才不會崩塌。但越想抓住的結果，是讓自己累得喘不過氣。心裡留下一點空間,  你將會發現自己擁有自由。", "cat": "內在雙向"}, {"id": "A_07", "name": "我願意相信一次", "intro": "信任，是將心交付給未知的勇敢。儘管不安，你仍願意為自己敞開一扇窗，看見可能性。", "cat": "內在雙向"}, {"id": "A_08", "name": "不急著打開全部的心", "intro": "疑慮像迷霧，讓你看不清前方。允許自己暫時停下，檢視內心的不安。\n你正在用自己的方式，慢慢靠近", "cat": "內在雙向"}, {"id": "A_09", "name": "輕拾行囊，再啟程", "intro": "你已經走過的那些路，無需再證明。現在，只要讓呼吸慢下來，安穩的整合自己。\n當節奏跟頻率對齊，下一步，會自然浮現。", "cat": "內在雙向"}, {"id": "A_10", "name": "停下也是一種前進", "intro": "有時候，真正的力量，是在你願意承認自己累了的那一刻開始的。正為了下一次出發，靜靜地整合能量。", "cat": "內在雙向"}, {"id": "A_11", "name": "點起那盞小小的光", "intro": "你付出了很多，但你最想聽見的那句話，可能還沒對自己說過。\n為自己亮起一盞光,學著當最先看見自己努力的人。", "cat": "內在雙向"}, {"id": "A_12", "name": "從來沒對自己說過謝謝的我", "intro": "撐過那麼多，不是因為你多堅強，而是因為當時沒有選擇。現在你可以回來，看見自己的努力，給自己一個擁抱。", "cat": "內在雙向"}, {"id": "A_13", "name": "身體為我按下了保護鍵", "intro": "當你感到麻木，那是身體溫柔的保護。它暫時將過重的情緒收起，給你空間喘息。現在，你可以開始相信這份愛，並靜待內心再次與世界相連。", "cat": "內在雙向"}, {"id": "A_14", "name": "世界，好像關機了", "intro": "當內心麻木，世界彷彿靜音，感受像被按下暫停鍵。此刻，你只是需要一個沒有外界雜訊的空間，靜靜地回到內在。\n在這裡，沒有人覺得你慢,也沒有誰期待你趕上。", "cat": "內在雙向"}, {"id": "A_15", "name": "選擇將重擔交還給時間", "intro": "或許會發現，緊抓著某些沉重過往，是對自己無形的消耗。現在，你選擇將這份重量輕輕放下，交由時間溫柔承接。回到內在最柔軟的角落，與完整的自己，靜靜相伴。", "cat": "內在雙向"}, {"id": "A_16", "name": "有些重量，還放在心上", "intro": "有些記憶或感受，你還無法將它們輕易放下。那份沉重感是真實的，它也許仍需要一點黑暗。允許自己擁有這段緩緩鬆開的過程。", "cat": "內在雙向"}, {"id": "A_17", "name": "被遺忘的選擇權", "intro": "我一直以為，卸下責任不是我的選項。所以我就苦撐著，習慣了不放手。但有些重量，從來不是我的。", "cat": "內在雙向"}, {"id": "A_18", "name": "在這個時刻，選擇放下", "intro": "我坐下來，讓自己不再獨自撐完整場戲。卸下戲服的那一刻，終於看見，我值得回到最初的平衡裡。", "cat": "內在雙向"}, {"id": "A_19", "name": "被時間縫補的傷痕", "intro": "有些失去，不會被忘記。它像細細的線，織進我靈魂的紋理，成為我之所以堅韌的理由。我不再害怕想起它，因為它已經成為我身體的一部分。", "cat": "內在雙向"}, {"id": "A_20", "name": "我一個人留在了這裡", "intro": "有些失去，不是說了再見就能結束。我的某一部分，還坐在回憶裡，靜靜看著那個沒能留下的風景。我知道我終究會離開，只是現在我還想多陪它一會。", "cat": "內在雙向"}, {"id": "A_21", "name": "回到此刻", "intro": "慢慢地，把注意力帶回現在。感覺呼吸的起伏，也去感覺現在身體所處的位置。當你開始照看自己的情緒，就正在拿回，屬於自己的節奏。", "cat": "內在雙向"}, {"id": "A_22", "name": "焦慮感", "intro": "焦慮，是頭腦在為你尋找生存的方法。反覆檢查，是想確保你不會措手不及。你的身體與頭腦，正在盡最大的力量保護你。而此刻，沒有需要被處理的事情。你可以讓這個系統，暫時休息一下。", "cat": "內在雙向"}, {"id": "A_23", "name": "跟隨內在羅盤", "intro": "開始練習，在沒有保證、沒有標準答案的時候，仍然自己做選擇。所有的嘗試，都在為正確的路徑累積經驗。", "cat": "內在雙向"}, {"id": "A_24", "name": "放手的決定權", "intro": "不敢為自己做決定，因為總是太害怕選錯。過去的你學會相信權威、相信別人的正確答案。卻慢慢忘了，自己也能為自己創造獨特的選擇。", "cat": "內在雙向"}, {"id": "A_25", "name": "選擇我自己身上的標籤", "intro": "那些曾被批評、壓抑的部分，不一定是錯的，只是還沒被你親手命名。當你自己選擇出專屬於你的標籤，它們會成為你的力量，讓它們成為你獨有的光芒。", "cat": "內在雙向"}, {"id": "A_26", "name": "永遠在扮演「適合」的樣子", "intro": "你熟練地演著，角色台詞早已寫好，只要乖一點、懂事一點，世界就不會那麼可怕。但那個角色，是你真心願意扮演的嗎？", "cat": "內在雙向"}, {"id": "A_27", "name": "專屬於我的步調", "intro": "不是每個人都適合用一樣的速度前進，你正在用屬於自己的方式，緩慢而確實地走著。別人的成就不是你的刻度，只要跟內在對齊，就能找到自己的方向。", "cat": "內在雙向"}, {"id": "A_28", "name": "緊緊追趕", "intro": "曾以為，只要跟著別人的方向，就會走到目的地，所以一直努力追趕。但現在，開始意識到，自己背負著某個被期待的樣子往前走。", "cat": "內在雙向"}, {"id": "A_29", "name": "這一次，我不再退後", "intro": "開始學著往內走，看見憤怒底下未被說出口的傷口與需求。每次看見，都是在重新接納那個終於敢開口的自己。", "cat": "內在雙向"}, {"id": "A_30", "name": "怒氣，是邊界被踐踏的證明", "intro": "以為只要不說，就沒有衝突。退一步，事情就會過去。但身體卻開始出現徵兆。憤怒並沒有錯，內在正在告訴你——夠了，我不能再退讓了。", "cat": "內在雙向"}, {"id": "A_31", "name": "與自己在一起", "intro": "當你願意在最孤單的時候靠近自己，世界就會一點一點變得柔軟。你不需要別人給你位置獲認可，你正在為自己打造一個世界上獨一無二的個體。", "cat": "內在雙向"}, {"id": "A_32", "name": "孤獨感受", "intro": "努力迎合，但仍覺得孤單，像被世界遺落。以為被別人接納才是完整，但也許，那個孤單的你，才是你真正的起點。在還沒被擁抱之前，你願不願意，先陪著那個自己？", "cat": "內在雙向"}];            // 內在雙向 A_01–A_32：{id,name,intro}（取自 App 資料，已清理）
var IMG='./images/shop/';
var ALL=[];(function(){var r={A:[1,32],B:[33,43],C:[44,55],D:[56,60]};for(var k in r)for(var n=r[k][0];n<=r[k][1];n++)ALL.push(k+'_'+(n<10?'0'+n:n))})();
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var clamp=function(v,a,b){return Math.min(b==null?1:b,Math.max(a==null?0:a,v))};
var easeOut=function(t){return 1-Math.pow(1-t,3)};
var easeIO=function(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var isM=function(){return matchMedia('(max-width:760px)').matches};
var rng=function(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}};
var shuffle=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a};
var thumb=function(id){return IMG+'t/'+id+'.webp'};
var imgTag=function(id,alt,lazy){return '<img src="'+thumb(id)+'" alt="'+(alt||'')+'" decoding="async"'+(lazy?' loading="lazy"':'')+' draggable="false">'};
var toastT;function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('on')},2200)}
/* 追蹤：之後掛上 Meta Pixel / GA 即自動生效（目前無 ID 就不送） */
function track(name,p){try{if(window.fbq)fbq('trackCustom',name,p||{});if(window.gtag)gtag('event',name,p||{})}catch(e){}}

/* ---------- 01 ---------- */
var C01=[ // xn,yn,rot,速度,手機 xn,yn
 [.17,.29,-25,.5,.2,.2],[.34,.26,-5,1.0,.62,.14],[.73,.28,15,1.3,.84,.3],[.11,.62,12,.7,.16,.7],[.33,.77,8,1.2,.5,.84],[.69,.78,-5,.6,.82,.76],[.89,.55,10,.9,.5,.5]];
function build01(){
  var m=isM(),h='',list=m?[0,1,2,3,4,5]:[0,1,2,3,4,5,6],ids=shuffle(ALL);
  list.forEach(function(k,i){var c=C01[k],x=m?c[4]:c[0],y=m?c[5]:c[1];
    h+='<div class="c" data-s="'+c[3]+'" style="--xn:'+x+';--yn:'+y+'"><div class="ci" style="--r:'+c[2]+'deg;--i:'+i+';--xn:'+x+';--yn:'+y+'"><div class="card">'+imgTag(ids[i])+'</div></div></div>'});
  $('#cards01').innerHTML=h;
}
function up01(p){
  $$('#cards01 .c').forEach(function(c){var s=+c.dataset.s;
    c.style.transform=RM?'none':'translate3d(0,'+(-p*s*70).toFixed(2)+'vh,0)';
    c.style.opacity=String(1-clamp((p-.8)/.2))});
  var ht=$('.hero-text');ht.style.opacity=String(1-clamp((p-.6)/.3));ht.style.transform=RM?'none':'translateY('+(-p*18).toFixed(2)+'vh)';
  $('.arrow').style.opacity=String(1-clamp(p/.06));
}

/* ---------- 牆（02 / 06） ---------- */
function buildWall(el,cols,seed,gap){
  var r=rng(seed),W=el.clientWidth||innerWidth,H=el.clientHeight||innerHeight;
  var cw=(W-(cols+1)*gap)/cols,ch=cw*12/7,n=Math.ceil(H*3.2/(ch+gap))+1,h='',ids=shuffle(ALL),k=0;
  for(var c=0;c<cols;c++){
    var x=gap+c*(cw+gap),bl='';
    var off=-Math.round(r()*.35*H)-40;if(c%2)off-=Math.round(1.15*H);
    for(var i=0;i<n;i++){bl+='<div class="card" style="height:'+ch.toFixed(1)+'px">'+imgTag(ids[k++%ids.length],'',true)+'</div>'}
    h+='<div class="col" data-c="'+c+'" style="left:'+x.toFixed(1)+'px;width:'+cw.toFixed(1)+'px;top:'+off+'px">'+bl+'</div>';
  }
  el.innerHTML=h;
}
var SP=[.5,1,.7,1.25,.6,.95];
function up02(p,pe){
  var H=innerHeight;
  $$('#wall02 .col').forEach(function(c,i){var d=(i%2?1:-1)*pe*SP[i%SP.length]*.9*H;c.style.transform=RM?'none':'translate3d(0,'+d.toFixed(1)+'px,0)'});
  var c=$('#c02');c.style.scale=String(.94+.06*easeOut(clamp(p/.15)));c.style.opacity=String(clamp((pe-.25)/.2));
  var v=Math.round(60*easeIO(clamp(p/.42)));if(RM)v=p>.05?60:0;
  $('#n02').textContent=(v<10?'0':'')+v;
  $('#p02').style.opacity=String(clamp((p-.36)/.14));
}

/* ---------- 03 ---------- */
var TXT=['好美的牌卡','抽到的那張剛好說中我','收到的時候哭了','送給朋友她很喜歡','每一張都好溫柔','插畫好療癒','陪我度過低潮','值得收藏']; // 假留言，待換成真實購買人留言
function build03(){
  var bb=$('#bb03'),H=bb.clientHeight||300,r=rng(7),h='',xs=[6,34,60,20,72,46,10,78,52];
  for(var i=0;i<9;i++){h+='<div class="bub" style="left:'+xs[i]+'%;--H:'+H+'px;--d:'+(9+Math.round(r()*7))+'s;--dl:-'+Math.round(r()*14)+'s"><i></i>'+TXT[i%TXT.length]+'</div>'}
  bb.innerHTML=h;
}
function up03(p){
  var v=Math.round(1032197*easeIO(clamp(p/.62)));if(RM)v=p>.05?1032197:0;
  $('#am03').textContent=v.toLocaleString('en-US');
  var o=clamp((p-.6)/.25),ol=$('#ol03');ol.style.opacity=String(o);ol.style.transform='translateY('+((1-o)*18).toFixed(1)+'px)';
  $('#ch03').style.opacity=String(clamp((p-.66)/.2));
}

/* ---------- 04 ---------- */
var CATS=[ // 範例牌取自 App；說明文字為暫代，待定稿
 {n:'內在雙向牌',k:'內在雙向',id:'A_10',t:'情緒的真實鏡子，\n從陰與陽兩面看見自己'},
 {n:'情緒支援牌',k:'情緒支援',id:'B_36',t:'當你感覺走不動時，\n給你溫柔的語句與肯定'},
 {n:'深入覺察牌',k:'深入覺察',id:'C_44',t:'打開內在對話的通道，\n看見未察覺的模式'},
 {n:'宇宙任務牌',k:'宇宙任務',id:'D_56',t:'輕盈帶點玩心的小行動，\n邀請你轉換能量'}];
var KIDX={};CATS.forEach(function(c,i){KIDX[c.k]=i});
var catIdx=function(id){return {A:0,B:1,C:2,D:3}[id.charAt(0)]};
function backHTML(i){return '<div class="back bk'+i+'"><small>心映好事</small><i>✦</i><span>'+CATS[i].k+'</span></div>'}
var cover=function(i,alt){return '<div class="card">'+'<img src="'+IMG+'cover/'+CATS[i].id+'.webp" alt="'+(alt||'')+'" decoding="async" draggable="false"></div>'};
var open04=-1,sel04=-1,rev04=false;
function render04(){
  var h='',el=$('#s04');
  if(open04<0){
    h='<div class="grid4'+(rev04?' in':'')+'">';
    CATS.forEach(function(c,i){h+='<button class="tile" type="button" data-i="'+i+'" style="--i:'+i+'" aria-label="展開'+c.n+'">'+cover(i)+'<span class="lab '+(i===sel04?'sel':'dot')+'">'+c.n+'</span></button>'});
    h+='</div>';
  }else{
    var c=CATS[open04];
    h='<div class="detail"><button class="xbtn" id="x04" type="button" aria-label="關閉">✕</button><div class="pair"><div class="f1">'+cover(open04,c.n+'牌面')+'</div><div class="mid"><h3>'+c.n+'</h3><div class="rule"><i>✦</i></div><p>'+c.t+'</p><div class="rule"><i>✦</i></div></div><div class="f2"><div class="card">'+backHTML(open04)+'</div></div></div><div class="thumbs">';
    CATS.forEach(function(k,i){if(i!==open04)h+='<button type="button" data-i="'+i+'" aria-label="切換到'+k.n+'"><span class="lab dot">'+k.n+'</span>'+cover(i)+'</button>'});
    h+='</div></div>';
  }
  el.innerHTML=h;
}
$('#s04').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  if(b.id==='x04'){var was=open04;sel04=-1;open04=-1;render04();var t=$('#s04 .tile[data-i="'+was+'"]');if(t)t.focus({preventScroll:true});return}
  if(b.dataset.i!=null){open04=+b.dataset.i;sel04=open04;render04();track('shop_cat_open',{cat:CATS[open04].k});var x=$('#x04');if(x)x.focus({preventScroll:true})}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&open04>=0){sel04=-1;open04=-1;render04()}});

/* ---------- 05 ---------- */
var st=$('#st05'),u05=$('#u05'),cur=null,extra=0,y0=0,baseH=0;
var lastBlk=[];
function buildRing(){
  var W=st.clientWidth,H=st.clientHeight,m=isM(),ids=shuffle(ALL),k=0,h='',sr=st.getBoundingClientRect();
  if(st.dataset.state==='s0'){lastBlk=[];['.t05','.s0text','#b05'].forEach(function(s){var e=$(s,st),r=null;if(e){if(s==='#b05')r=e.getBoundingClientRect();else{var rg=document.createRange();rg.selectNodeContents(e);r=rg.getBoundingClientRect()}}
    if(r&&r.width>0)lastBlk.push({l:r.left-sr.left-14,t:r.top-sr.top-14,r:r.right-sr.left+14,b:r.bottom-sr.top+14})})}
  var Rb=m?W*.62:Math.min(W*.34,H*.44),ys=m?1.25:1;
  /* 由外往內：牌越來越小、越淡、越糊，當作背景；與文字重疊的牌另外加糊 */
  var RG=[{f:.3,n:6,w:m?.13:.085,o:.6,b:1.6,ph:.3},{f:.62,n:9,w:m?.2:.135,o:.8,b:.8,ph:.1},{f:1,n:12,w:m?.3:.22,o:1,b:0,ph:0}];
  RG.forEach(function(g){var R=Rb*g.f,w=Rb*g.w,hh=w*12/7;
    for(var i=0;i<g.n;i++){var a=(i/g.n+g.ph)*Math.PI*2-Math.PI/2,x=Math.cos(a)*R,y=Math.sin(a)*R*ys,cx=W/2+x,cy=H/2+y,rad=hh/2,bl=false;
      lastBlk.forEach(function(q){if(cx+rad>q.l&&cx-rad<q.r&&cy+rad>q.t&&cy-rad<q.b)bl=true});
      h+='<div class="rc'+(bl?' bl':'')+'" style="width:'+w.toFixed(1)+'px;height:'+hh.toFixed(1)+'px;opacity:'+g.o+';filter:blur('+g.b+'px);transform:translate('+(x-w/2).toFixed(1)+'px,'+(y-hh/2).toFixed(1)+'px) rotate('+(a*180/Math.PI+90).toFixed(1)+'deg)">'+imgTag(ids[k++%ids.length])+'</div>'}});
  $('#ring05').innerHTML=h;
}
function setState(s){st.dataset.state=s}
function resetBlur(){st.classList.remove('blur');st.style.removeProperty('--e');st.style.removeProperty('--sh')}
function showCard(c){
  var ci=catIdx(c.id);
  $('#dr05').classList.remove('flipped');$('#fl05').textContent='「看看它的另一面」';
  $('#dr05 .fr').innerHTML='<img src="'+IMG+'draw/'+c.id+'.webp" alt="'+c.name+'" decoding="async" draggable="false">';
  $('#dr05 .bk').innerHTML=backHTML(ci);
  $('.blur-layer').style.setProperty('--bl','url("'+thumb(c.id)+'")');
  $('#pt05').textContent=c.name;$('#pi05').textContent=c.intro;$('#pc05').textContent=c.cat||'內在雙向';
}
function preload(id){var i=new Image();i.src=IMG+'draw/'+id+'.webp'}
$('#b05').addEventListener('click',function(){
  if(st.dataset.state==='s0'){
    var pool=POOL.filter(function(c){return !cur||c.id!==cur.id});
    cur=pool[Math.floor(Math.random()*pool.length)];preload(cur.id);showCard(cur);
    $('#b05').textContent='快看牌卡';setState('s1');track('shop_draw_click',{id:cur.id});
  }else if(st.dataset.state==='s1'){
    setState('s2');track('shop_draw_reveal',{id:cur.id});
    if(isM()&&!RM){baseH=u05.offsetHeight;extra=Math.round(st.clientHeight*.8);u05.style.height=(baseH+extra)+'px';y0=scrollY}
    $('#x05').focus({preventScroll:true});
  }
});
function flip(){var d=$('#dr05'),f=d.classList.toggle('flipped');$('#fl05').textContent=f?'「回到牌面」':'「看看它的另一面」'}
$('#fl05').addEventListener('click',flip);
$('#dr05').addEventListener('click',function(){if(st.dataset.state==='s2'&&!st.classList.contains('blur'))flip()});

/* 分享圖：沿用 App 的 1080×1920 Canvas 版型 */
async function shareImage(card){
  var W=1080,H=1920,cv=document.createElement('canvas');cv.width=W;cv.height=H;var ctx=cv.getContext('2d');
  try{await document.fonts.load("400 50px 'Noto Sans TC'","擁抱情緒牌卡")}catch(e){}
  var g=ctx.createLinearGradient(0,0,W*.5,H);g.addColorStop(0,'#F5D9C8');g.addColorStop(.35,'#EDCBD8');g.addColorStop(.65,'#D4C0E8');g.addColorStop(1,'#C4D4F0');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.font="400 50px 'Noto Sans TC', sans-serif";ctx.fillStyle='rgba(60,50,70,0.62)';ctx.textAlign='center';ctx.fillText('擁  抱  情  緒  牌  卡',W/2,140);
  var CW=660,CH=Math.round(CW*12/7),cx=(W-CW)/2,cy=210,img=new Image();
  await new Promise(function(res){img.onload=res;img.onerror=res;img.src=IMG+'draw/'+card.id+'.webp'});
  ctx.save();ctx.shadowColor='rgba(0,0,0,0.28)';ctx.shadowBlur=80;ctx.shadowOffsetY=28;
  ctx.beginPath();ctx.roundRect(cx,cy,CW,CH,44);ctx.clip();
  if(img.naturalWidth>0)ctx.drawImage(img,cx,cy,CW,CH);else{ctx.fillStyle='#d8d0e8';ctx.fillRect(cx,cy,CW,CH)}
  ctx.restore();ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0;
  ctx.strokeStyle='rgba(255,255,255,0.75)';ctx.lineWidth=6;ctx.beginPath();ctx.roundRect(cx,cy,CW,CH,44);ctx.stroke();
  var by=cy+CH+60,bW=240,bH=72;ctx.fillStyle='#333';ctx.beginPath();ctx.roundRect((W-bW)/2,by,bW,bH,36);ctx.fill();
  ctx.font="600 32px 'Noto Sans TC', sans-serif";ctx.fillStyle='#fff';ctx.fillText(card.cat||'內在雙向',W/2,by+48);
  var dy=by+bH+68;ctx.strokeStyle='rgba(60,50,70,0.18)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(160,dy);ctx.lineTo(W-160,dy);ctx.stroke();
  ctx.font='bold 32px serif';ctx.fillStyle='rgba(60,50,70,0.38)';ctx.fillText('✦',W/2,dy+12);
  ctx.font="700 76px 'Noto Sans TC', sans-serif";ctx.fillStyle='rgba(22,15,32,0.88)';
  var buf='',ly=dy+96;for(var ch of card.name){var t=buf+ch;if(ctx.measureText(t).width>W-200&&buf.length>0){ctx.fillText(buf,W/2,ly);buf=ch;ly+=100}else buf=t}
  if(buf)ctx.fillText(buf,W/2,ly);
  var fy=H-160;ctx.font="600 36px 'Noto Sans TC', sans-serif";ctx.fillStyle='rgba(60,50,70,0.55)';ctx.fillText('✦ 心映好事',W/2,fy);
  var d=new Date(),ds=d.getFullYear()+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+String(d.getDate()).padStart(2,'0');
  ctx.font="400 30px 'Noto Sans TC', sans-serif";ctx.fillStyle='rgba(60,50,70,0.38)';ctx.fillText(ds,W/2,fy+54);
  return new Promise(function(res){cv.toBlob(res,'image/png')});
}
var sharing=false;
$('#sh05').addEventListener('click',async function(){
  if(!cur||sharing)return;sharing=true;track('shop_share',{id:cur.id});
  try{
    var blob=await shareImage(cur);if(!blob)throw new Error('no blob');
    var file=new File([blob],'心映好事-'+cur.id+'.png',{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'擁抱情緒牌卡',text:cur.name})}
    else{var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=file.name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},4000);toast('牌卡圖已下載')}
  }catch(e){if(e&&e.name!=='AbortError')toast('分享暫時失敗，請再試一次')}
  sharing=false;
});
function scrollToY(y,dur,done){
  if(RM||dur<=0){scrollTo(0,y);done&&done();return}
  var s=scrollY,t0=performance.now();
  (function f(t){var k=clamp((t-t0)/dur);scrollTo(0,s+(y-s)*easeIO(k));if(k<1)requestAnimationFrame(f);else done&&done()})(t0);
}
function closeGo(){
  if(st.dataset.state!=='s2')return;
  var y=$('#u06').getBoundingClientRect().top+scrollY;
  if(!RM)st.classList.add('closing');
  setTimeout(function(){
    scrollToY(y,RM?0:720,function(){
      setState('s0');$('#b05').textContent='憑直覺，選一張';resetBlur();st.classList.remove('closing');
      if(extra){var sy=scrollY;u05.style.height='';scrollTo(0,sy-extra);extra=0}
      var h=$('#u06 h2');h.setAttribute('tabindex','-1');h.focus({preventScroll:true});
    });
  },RM?0:200);
}
$('#x05').addEventListener('click',closeGo);
$('#ct05').addEventListener('click',function(){track('shop_continue');closeGo()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeGo()});
function up05(p){
  $('#ring05').style.scale=st.dataset.state==='s2'?'':String(1+p*.12);
  if(st.dataset.state==='s2'&&isM()&&extra){
    var q=clamp((scrollY-y0)/extra),e=easeIO(clamp((q-.15)/.7));
    st.style.setProperty('--e',e.toFixed(3));st.style.setProperty('--sh',clamp((q-.85)/.15).toFixed(3));
    var on=st.classList.contains('blur');if(!on&&q>.4)st.classList.add('blur');else if(on&&q<.36)st.classList.remove('blur');
  }
}

/* ---------- 06 ---------- */
$('#cta1').addEventListener('click',function(){track('shop_cta_1shop')});
$('#ctaL').addEventListener('click',function(){track('shop_cta_line')});

var R6=$$('#u06 .rv6');
function up06(){
  var r=$('#u06').getBoundingClientRect(),vh=innerHeight,s=clamp((vh-r.top)/vh),w=$('#w06'),H=w.clientHeight||vh;
  $$('.col',w).forEach(function(c,i){var d=(i%2?1:-1)*s*SP[i%SP.length]*.9*H;c.style.transform=RM?'none':'translate3d(0,'+d.toFixed(1)+'px,0)'});
  R6.forEach(function(e,i){var ty=e._ty||0,top=e.getBoundingClientRect().top-ty,pr=RM?1:clamp((vh*1.05-top)/(vh*.2));
    e._ty=(1-pr)*(26+i*16);e.style.opacity=String(pr);e.style.transform=RM?'none':'translateY('+e._ty.toFixed(1)+'px)'});
}

/* ---------- 迴圈 ---------- */
var units=[{el:$('#u01'),pin:1,f:up01},{el:$('#u02'),pin:1,f:up02},{el:$('#u03'),pin:1,f:up03},{el:$('#u04'),pin:0},{el:$('#u05'),pin:1,f:up05},{el:$('#u06'),pin:0,f:up06}];
function prog(u){
  var r=u.el.getBoundingClientRect(),vh=u.pin?u.el.querySelector('.stage').offsetHeight:innerHeight;
  if(u.pin){var tot=r.height-vh;return tot>0?clamp(-r.top/tot):0}
  return clamp(1-r.top/vh);
}
var tick=false,hud=null;
function render(){
  tick=false;var mid=innerHeight*.5,cu=units[0],cp=0;
  for(var i=0;i<units.length;i++){var u=units[i],r=u.el.getBoundingClientRect(),p=prog(u);
    u.p=p;if(u.f)u.f(p,u.pin?clamp((innerHeight-r.top)/r.height):p);
    if(r.top<=mid&&r.bottom>mid){cu=u;cp=p}
    if(u.pin)u.el.classList.toggle('live',r.bottom>0&&r.top<innerHeight);
  }
  if(hud)hud.textContent=cu.el.id+' '+Math.round(cp*100)+'%';
}
function req(){if(!tick){tick=true;requestAnimationFrame(render)}}
addEventListener('scroll',req,{passive:true});
var rz,lastW=innerWidth;addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){if(innerWidth!==lastW){lastW=innerWidth;init(true)}},150)});

function init(re){
  build01();buildWall($('#wall02'),isM()?4:6,11,isM()?12:18);buildWall($('#w06'),3,5,isM()?10:18);
  build03();buildRing();render04();
  if(!re){
    if(/[?&]hud=1/.test(location.search)){hud=document.createElement('div');hud.className='hud';document.body.appendChild(hud)}
    requestAnimationFrame(function(){$('#u01').classList.add('play')});
    var rid=ALL[Math.floor(Math.random()*ALL.length)];$('#fc06 img').src=IMG+'draw/'+rid+'.webp';
    if('IntersectionObserver' in window){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){rev04=true;var g=$('#s04 .grid4');if(g)g.classList.add('in');o.disconnect()}},{threshold:.35}).observe($('#s04'))}else{rev04=true;var g0=$('#s04 .grid4');if(g0)g0.classList.add('in')}
  }
  req();
}
init(false);
})();
