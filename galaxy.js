/* =====================================================================
   GALAKSI KENANGAN — Untuk Thea
   ===================================================================== */
const memories = [
  {title:"Foto bareng graduation",        desc:"Fotbar kita habis kelulusan kamu cantikk bangettt", icon:"✨", photo:"img/ao636eiuaejee5w05pnf.webp", crop:"bottom"},
  {title:"Rambut Kepang",           desc:"Pap rambut kepang kamu waktu aku ngepap pake masker wajah ahahhahahaha lcuuu bangettt", icon:"💬", photo:"img/b9z248baeb7f0r4g9mzh.webp"},
  {title:"Pap PKL",     desc:"Pap kamu kaya mba mba poltekes ahahahhahaha cantik bangettt", icon:"📱", photo:"img/ba5yxaq5vkjn1y1l3mh3.webp"},
  {title:"Pap berkumiszz",        desc:"Pap random lucuu bangett kesukaan akuu", icon:"🤝", photo:"img/crhtwcb8xulymgntakky.webp"},
  {title:"Pap before ngantor",         desc:"Pap sebelum kamu ngantor, cantik nan lucu bangettt", icon:"🌙", photo:"img/cvhnggeinfarz5gtob0e.webp"},
  {title:"Foto kebaya",                 desc:"Foto kamu pakai kebaya pas graduation CANTIKKK BANGETTT GILAKK", icon:"💌", photo:"img/dbzo0lkxvokv3d4unl6a.webp"},
  {title:"Liburan Pertama",      desc:"Foto bareng kita di pantai wediombo, tapi masih belom siap aowkoawkaowk", icon:"🌇", photo:"img/dustnx9dxc3lbaj95f1s.webp", crop:"bottom"},
  {title:"Foto Pantai",          desc:"Piknik sekelas duluu kamu lucuu bangett", icon:"🎬", photo:"img/e134lvqpmrfz6jktmnzp.webp"},
  {title:"Fotoboth Spesial",    desc:"Momen kita foto bareng setelah nonton film horor", icon:"🍽️", photo:"img/Ee5oQIZvDU7a2593BEhRnFoKCfymzqQv7QsjGVEw.webp"},
  {title:"Pap Random",          desc:"Pap random lucuu pipinyaa minta dicubit loh yaaaa", icon:"🌧️", photo:"img/ek6bgmk8jhkykcjzor9l.webp"},
  {title:"Pap Dikantor",           desc:"Pap kamuu sela selaa kerjaa", icon:"😂", photo:"img/em5z5nncbcdt5elzayt0.webp", crop:"bottom"},
  {title:"Liburan Pertama",      desc:"Foto bareng kita di pantai wediombo, sudah agak siap tapi maloe", icon:"🫂", photo:"img/esgt8oppmma1i0mymaj9.webp", crop:"bottom"},
  {title:"Pap Imoet",        desc:"Pap imoet kamuu yang lucuuu bangettt", icon:"🧳", photo:"img/g0ozbw0forapp8bbxwcu.webp"},
  {title:"Pap Imoet",           desc:"Pap kamu nyoba baju yang beli di solo", icon:"🧺", photo:"img/gcmodi6arifycy6ibggj.webp"},
  {title:"Pap Cantik",           desc:"Pap mengobati rasa kangen akuu", icon:"🍳", photo:"img/geifyrmkviifmhgthljy.webp"},
  {title:"Pap Cantik",          desc:"pap cantik kamu buat aku yang lagii kangenn bangettt", icon:"🎁", photo:"img/gffssze1drdarnrupgvd.webp"},
  {title:"Foto Bareng di Pantai",         desc:"Foto bareng kita di wediombo belom siap sudah di foto aja jir", icon:"😆", photo:"img/gqcgejihfix049xusmbz.webp", crop:"bottom"},
  {title:"Graduation",            desc:"Foto bareng kita waktu graduation", icon:"🌃", photo:"img/ha07jrvgb2nmrmzs2ckj.webp", crop:"bottom"},
  {title:"Pap Imoet",           desc:"Pap random kamu yang imoet bangett astagaaaaaaa lucuuuu", icon:"☔", photo:"img/hcqbfjcreyrys2zt9kr6.webp"},
  {title:"Dijalan",        desc:"Foto kamu pas habis pulang kerjaa", icon:"🎶", photo:"img/hwhzgryssjcbedrqic9p.webp"},
  {title:"Pap Cantik",           desc:"Pap cantik kamu waktu aku ngambek trus kamu kasih foto cantik cantik kamuu ahahhahahaaha", icon:"☕", photo:"img/ibx6vycs0yv2klvo8syd.webp"},
  {title:"Liburan Pertama",           desc:"Baru aja sampe di pantai wediombo, cafek banget", icon:"😴", photo:"img/IMG_2250.webp"},
  {title:"Liburan Pertama",          desc:"Baru aja sampe di pantai wediombo, cafek banget", icon:"🍦", photo:"img/IMG_2258.webp"},
  {title:"Liburan Pertama",    desc:"Baru aja sampe di pantai wediombo, cafek banget", icon:"👻", photo:"img/IMG_2259.webp"},
  {title:"Momen Senja di Pantai",          desc:"Momen indah waktu kita mau foto foto sunset di wediombo", icon:"🎤", photo:"img/IMG_2270.webp"},
  {title:"Kamu dan Sunset",       desc:"Foto kamu pas lagi mendaki melihat sunset yang indah", icon:"🧁", photo:"img/IMG_2366.webp"},
  {title:"Keindahan CiptaanNya",          desc:"Keindahan 2 hal yang menyatu menjadi keajaiban duniakuuuuuu", icon:"🏃", photo:"img/IMG_2454.webp", crop:"bottom"},
  {title:"Menikmati Sunset",         desc:"Momen indah saat menikmati sunset berdua", icon:"🛍️", photo:"img/IMG_2512.webp", crop:"bottom"},
  {title:"Menikmati Sunset",         desc:"Momen indah saat menikmati sunset berdua", icon:"😳", photo:"img/IMG_2525.webp", crop:"bottom"},
  {title:"Kedekatan Berdua",           desc:"Forbar kita sebelum sunset datang yang sangat berarti buat akuu", icon:"💭", photo:"img/IMG_2608.webp"},
  {title:"Selfie Berdua",       desc:"Forbar kita sebelum sunset datang yang sangat berarti buat akuu", icon:"🎮", photo:"img/IMG_2609.webp"},
  {title:"Momen Berdua Melihat Sunset",          desc:"Momen indah saat kita melihat sunset berdua di atas tebing", icon:"🤳", photo:"img/IMG_6275.webp", crop:"bottom"},
  {title:"Momen Berdua Melihat Sunset",         desc:"Momen indah saat kita melihat sunset berdua di atas tebing", icon:"😤", photo:"img/IMG_6276.webp", crop:"bottom"},
  {title:"Berdua Melihat Sunset di Pantai",            desc:"Momen indah saat aku rangkul kamu terus kamu bersandar di bahuku sambil melihat sunset yang indah WOWW", icon:"🤗", photo:"img/IMG_6279.webp", crop:"bottom"},
  {title:"Berdua Melihat Sunset di Pantai",             desc:"Momen indah saat aku rangkul kamu sambil melihat sunset yang indah", icon:"🤞", photo:"img/IMG_6282.webp", crop:"bottom"},
  {title:"Ombak",          desc:"Kedatengan ombak gede pas lagi menikmati sunset, seruuuu bangettt", icon:"💭", photo:"img/IMG_6283.webp", crop:"bottom"},
  {title:"Rangkulan",             desc:"Momen aku rangkul kamu di atas tebing, bikin aku saltingg OMAGAAAAAAAAAAAAA", icon:"👵", photo:"img/IMG_6343.webp", crop:"bottom"},
  {title:"Rangkulan",  desc:"Momen pertama kali aku rangkul kamu kaya beginih xixixixiixixi", icon:"🎂", photo:"img/IMG_6347.webp", crop:"bottom"},
  {title:"Masa Kecil",        desc:"Foto masa kecil kammuu yang lucuu banget menggemaskannnn", icon:"🏠", photo:"img/IMG-20241116-WA0052.webp"},
  {title:"Biru Laut",        desc:"Foto bareng kita yang go public ituuu AHHAHHAHAHAHHAA", icon:"🚗", photo:"img/jjzrt0dsamknls6dp9wd.webp", crop:"bottom"},
  {title:"Random",        desc:"Foto random kamu buat wisuda (tapi bukann yang inii yang diwisudaa)", icon:"🌠", photo:"img/k6pwrym0ugehnhq3qhe8.webp"},
  {title:"Graduation",    desc:"Foto bareng kita di acara wisuda, dengan kecantikan kamu yang sangat cocok dengan baju ituh", icon:"💗", photo:"img/kfxcquxzbqgx0btsyv9h.webp", crop:"bottom"},
  {title:"Graduation",      desc:"Foto bareng kita di acara wisuda", icon:"📷", photo:"img/kih2uavmcp1lrrqj9kjv.webp", crop:"bottom"},
  {title:"Pap Random",         desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung muah", icon:"🤝", photo:"img/l7vrnq6t2tfb9yhycgly.webp"},
  {title:"Tumbuh Bersama",         desc:"Foto kecil kita yang disatuin AHAHHAHAHAHAHA lucuuu bangettt", icon:"🌱", photo:"img/l932bh6kfmdwmnxevy07.webp"},
  {title:"Pap Random",      desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"🌸", photo:"img/m85cnwerycyd0ocgzfcv.webp"},
  {title:"Biru Laut",        desc:"Foto bareng kita waktu piknik sekelas yang dilihat orang orang kelas ahahahhahahaha", icon:"🎉", photo:"img/mnjdba215ru9pwsvsdly.webp", crop:"bottom"},
  {title:"Pap Random",           desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"🌌", photo:"img/mofuprkq4npwwsllte5n.webp"},
  {title:"Senyum",      desc:"Senyum yang selalu bisa mencairkan suasana hatiku", icon:"😊", photo:"img/mychdlgbeckmbay7bdxo.webp"},
  {title:"Imut & Lucu",         desc:"Foto kecil kita yang disatuin AHAHHAHAHAHAHA lucuuu bangettt", icon:"🫂", photo:"img/nabof5is2t9gjhelp930.webp"},
  {title:"Couple",           desc:"Foto kita sebagai pasangan yang bahagia", icon:"😂", photo:"img/njqd8uhicf7l98qdg8gr.webp", crop:"bottom"},
  {title:"Wediombo",      desc:"Momen foto berdua di tempat yang indah", icon:"🗺️", photo:"img/o1ue32ygrcgaxc7sp9fv.webp", crop:"bottom"},
  {title:"Pap Random",        desc:"Foto random kamu dengan pipi tembemnyaa ituh minta di cubitttttt", icon:"🌅", photo:"img/onxcvf1tturbn25ff5m9.webp"},
  {title:"Photoboth",       desc:"Photoboth setelah nonton film yang sangat berkesan", icon:"🌆", photo:"img/opINNdgvvFuy6qHPmAzJCnvmvPXhx6jECSSX3z6u.webp"},
  {title:"Pap Random",        desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"🌌", photo:"img/p41c4lfyphgseg9nkt9p.webp", crop:"bottom"},
  {title:"Pap Random",         desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"💫", photo:"img/p73hjcccgybewxialcxi.webp"},
  {title:"Rangkul Tangan",          desc:"Momen kamu rangkul tanganku waktu fotbar wisuda (salting parah)", icon:"🎀", photo:"img/p9ennzzjhmjfca452yuy.webp", crop:"bottom"},
  {title:"Go Public",            desc:"Momen Foto bareng kita yang di lihat beberapa temen temen sekelas", icon:"🛋️", photo:"img/pur6epilmesmmw1l4owg.webp", crop:"bottom"},
  {title:"Pap Random💋",            desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"🚶", photo:"img/qxjdsnv9vc1fusk4wduf.webp"},
  {title:"Bidadari",             desc:"Kecantikan yang begitu luar biasa", icon:"🍜", photo:"img/qxq0ukbiuho1xlbfwbwp.webp"},
  {title:"Kita dan Biru Laut",        desc:"Foto kita dengan background biru laut yang indah", icon:"☕", photo:"img/re3hig0nalf1pgyckhyb.webp", crop:"bottom"},
  {title:"Pap Imuoet",         desc:"Foto kamu yang lucuu dengan pose menggemaskan ituuh awghhhhhhh", icon:"🌙", photo:"img/shs8agzvhtw1zy3vzwon.webp"},
  {title:"Kenangan Manis",         desc:"Foto kamu yang begitu manis dan membuatku tersenyum", icon:"🍯", photo:"img/swuqxa9ql0tskndh0hcw.webp"},
  {title:"Pap Random",           desc:"Foto random kamu yang unik dan dengan ciri khasnya mulut mancung MUAH💋", icon:"⭐", photo:"img/tlcfqro3jcnfwxzpzlyr.webp"},
  {title:"Keindahan",              desc:"1 Keindahan dunia dari banyaknya keindahan yang ada dialam ini", icon:"🙏", photo:"img/uh6ywwmpzbq7ejf3gfas.webp"},
  {title:"Momen Dag Dig Dug",           desc:"Pertama kali rangkul bahu kamuuu di photoboth xixixiixixixi", icon:"🎁", photo:"img/uwn0ml9fju4mnrt091et.webp"},
  {title:"Jajan Mie Ayam",         desc:"Rekaman momen kita jajan mie ayam di warung bu yuni, sampe di videoin bu yuni nya loh yaa AHAHAHHHHA", icon:"🎥", photo:"img/VID-20250919-WA0012.mp4"},
  {title:"Es Krim",        desc:"Pap keseharian kamu yang habis dibeliin eskrim, aku sukaaaa banget foto kaya beginiiii", icon:"💗", photo:"img/xqybudkayh0bn8lmftpg.webp"},
  {title:"Berduaan",          desc:"Momen berdua yang membuat hati gembiraaa", icon:"👫", photo:"img/xrlq1r9ayygli8prn2dy.webp"},
  {title:"Bahagia Bersama",        desc:"Kebahagiaan saat kita sudah dikenal orang orang", icon:"🥰", photo:"img/yeznqv0xqoh6nnch3rnh.webp", crop:"bottom"},
  {title:"Maloeee",              desc:"Momen maluu karna dilihat banyak orang AHAHAHHHHAHAHAHA", icon:"♾️", photo:"img/zfdbsclxaf20vn2ad4nt.webp", crop:"bottom"}
];

/* =====================================================================
   RESPONSIVE HELPERS
   ===================================================================== */
let isMobile = window.innerWidth < 700;
const R = 400;

/* =====================================================================
   THREE.JS SETUP
   ===================================================================== */
const canvas = document.getElementById('galaxyCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 1.5));

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05030f);

const camera = new THREE.PerspectiveCamera(52, window.innerWidth/window.innerHeight, 0.1, 6000);

let resizeTimer;
function resizeRenderer(){
  cancelAnimationFrame(resizeTimer);
  resizeTimer = requestAnimationFrame(() => {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w,h);
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
    isMobile = w < 700;
    recomputeFitDistance();
  });
}

/* =====================================================================
   BACKGROUND STARFIELD
   ===================================================================== */
function makeStarfield(){
  const count = 3500;
  const positions = new Float32Array(count*3);
  for(let i=0;i<count;i++){
    const r = 1600 + Math.random()*1900;
    const theta = Math.random()*Math.PI*2;
    const phi = Math.acos((Math.random()*2)-1);
    positions[i*3]   = r*Math.sin(phi)*Math.cos(theta);
    positions[i*3+1] = r*Math.cos(phi);
    positions[i*3+2] = r*Math.sin(phi)*Math.sin(theta);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  const mat = new THREE.PointsMaterial({ color:0xcfd0ff, size:4.0, sizeAttenuation:true, transparent:true, opacity:0.85 });
  return new THREE.Points(geo, mat);
}
scene.add(makeStarfield());

/* =====================================================================
   TEXTURE HELPERS
   ===================================================================== */
function roundRect(g,x,y,w,h,r){
  g.beginPath();
  g.moveTo(x+r,y);
  g.arcTo(x+w,y,x+w,y+h,r);
  g.arcTo(x+w,y+h,x,y+h,r);
  g.arcTo(x,y+h,x,y,r);
  g.arcTo(x,y,x+w,y,r);
  g.closePath();
}
function makeDustTexture(){
  const c = document.createElement('canvas'); c.width=32; c.height=32;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(255,255,255,0.92)';
  roundRect(g,3,3,26,26,6); g.fill();
  return new THREE.CanvasTexture(c);
}
function makeCardTexture(colorSkeleton){
  const S = 96;
  const c = document.createElement('canvas'); c.width=S; c.height=S;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(255,143,199,0.55)';
  roundRect(g,3,3,S-6,S-6,14); g.fill();
  if(colorSkeleton){
    g.fillStyle = 'rgba(45,35,60,0.7)';
    roundRect(g,7,7,S-14,S-14,10); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.04)';
    roundRect(g,7,7,S-14,S-14,10); g.fill();
  } else {
    g.fillStyle = '#1a1030';
    roundRect(g,7,7,S-14,S-14,10); g.fill();
    g.fillStyle = '#ff8fc7';
    g.font = '38px sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('▶', S/2, S/2+2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return { tex, canvas: c };
}
function makeRadialGlow(color, inner){
  const c = document.createElement('canvas'); c.width=256; c.height=256;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(128,128,0,128,128,128);
  grad.addColorStop(0, `rgba(${color},${inner})`);
  grad.addColorStop(1, `rgba(${color},0)`);
  g.fillStyle = grad;
  g.fillRect(0,0,256,256);
  return new THREE.CanvasTexture(c);
}
function makeSparkTexture(){
  const c = document.createElement('canvas'); c.width=64; c.height=64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32,32,0,32,32,32);
  grad.addColorStop(0,'rgba(255,255,255,1)');
  grad.addColorStop(0.4,'rgba(255,235,210,0.7)');
  grad.addColorStop(1,'rgba(255,235,210,0)');
  g.fillStyle = grad;
  g.fillRect(0,0,64,64);
  return new THREE.CanvasTexture(c);
}

/* =====================================================================
   CORE
   ===================================================================== */
const coreRadius = R*0.055;
const coreMesh = new THREE.Mesh(
  new THREE.SphereGeometry(coreRadius, 32, 32),
  new THREE.MeshBasicMaterial({ color:0xff3b1f })
);
scene.add(coreMesh);

const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
  map: makeRadialGlow('255,90,40', 0.85), transparent:true, blending:THREE.AdditiveBlending, depthWrite:false
}));
glowSprite.scale.set(R*0.5, R*0.5, 1);
scene.add(glowSprite);

const glowSpriteOuter = new THREE.Sprite(new THREE.SpriteMaterial({
  map: makeRadialGlow('255,150,90', 0.35), transparent:true, blending:THREE.AdditiveBlending, depthWrite:false
}));
glowSpriteOuter.scale.set(R*0.95, R*0.95, 1);
scene.add(glowSpriteOuter);

/* =====================================================================
   GALAXY GROUP
   ===================================================================== */
const galaxyGroup = new THREE.Group();
scene.add(galaxyGroup);

function makeDustField(){
  const count = 4500;
  const positions = new Float32Array(count*3);
  const dustTex = makeDustTexture();
  for(let i=0;i<count;i++){
    const radius = R*0.13 + Math.sqrt(Math.random())*R*1.8;
    const angle = Math.random()*Math.PI*2;
    const y = (Math.random()-0.5)*R*0.06;
    positions[i*3]   = Math.cos(angle)*radius;
    positions[i*3+1] = y;
    positions[i*3+2] = Math.sin(angle)*radius;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  const mat = new THREE.PointsMaterial({
    map:dustTex, color:0xffffff, size: R*0.024, sizeAttenuation:true,
    transparent:true, alphaTest:0.15, depthWrite:false
  });
  return new THREE.Points(geo, mat);
}
galaxyGroup.add(makeDustField());

function makeSparkleClusters(){
  const clusterCount = 50;
  const perCluster = 9;
  const positions = new Float32Array(clusterCount*perCluster*3);
  let idx = 0;
  for(let c=0;c<clusterCount;c++){
    const cx = (Math.random()-0.5)*2*R*1.8;
    const cz = (Math.random()-0.5)*2*R*1.8;
    const cRadius = Math.hypot(cx,cz);
    if(cRadius > R*1.9 || cRadius < R*0.1) { continue; }
    const cy = (Math.random()-0.5)*R*0.07;
    for(let k=0;k<perCluster;k++){
      positions[idx*3]   = cx + (Math.random()-0.5)*R*0.05;
      positions[idx*3+1] = cy + (Math.random()-0.5)*R*0.02;
      positions[idx*3+2] = cz + (Math.random()-0.5)*R*0.05;
      idx++;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, idx*3),3));
  const mat = new THREE.PointsMaterial({
    map:makeSparkTexture(), color:0xfff2d8, size:R*0.035, sizeAttenuation:true,
    transparent:true, blending:THREE.AdditiveBlending, depthWrite:false
  });
  return new THREE.Points(geo, mat);
}
galaxyGroup.add(makeSparkleClusters());

/* ---- memory markers ---- */
const markerSprites = [];
const pendingPhoto = [];
const FADE_DURATION = 400;
{
  const n = memories.length;
  const goldenAngle = Math.PI*(3-Math.sqrt(5));
  for(let i=0;i<n;i++){
    const radiusFrac = Math.sqrt((i+0.5)/n);
    const radius = R*0.2 + radiusFrac*R*1.6;
    const angle = i*goldenAngle;
    const x = Math.cos(angle)*radius;
    const z = Math.sin(angle)*radius;
    const y = (Math.random()-0.5)*R*0.035;

    const isPhoto = memories[i].photo && !memories[i].photo.match(/\.(mp4|webm|ogg|mov)$/i);
    const { tex, canvas } = makeCardTexture(isPhoto);
    const mat = new THREE.SpriteMaterial({ map:tex, transparent:true });
    const sprite = new THREE.Sprite(mat);
    sprite.position.set(x,y,z);
    sprite.userData = { order:i+1, data:memories[i] };
    galaxyGroup.add(sprite);
    markerSprites.push(sprite);

    if(isPhoto){
      pendingPhoto.push({ canvas, tex, sprite, photoPath: memories[i].photo });
    }
  }
}
function applyResponsiveMarkerScale(){
  const baseScale = R*0.10*(isMobile? 1.55 : 1);
  markerSprites.forEach(s=> s.scale.set(baseScale, baseScale, 1));
}
applyResponsiveMarkerScale();

/* ---- immediate image loading + staggered texture upload ---- */
const MAX_PER_FRAME = 2;
let updateQueue = [];
let updateScheduled = false;

function scheduleTextureUpdate(){
  if(updateScheduled) return;
  updateScheduled = true;
  requestAnimationFrame(() => {
    updateScheduled = false;
    const batch = updateQueue.splice(0, MAX_PER_FRAME);
    batch.forEach(item => {
      const g = item.canvas.getContext('2d');
      const S = item.canvas.width;
      g.clearRect(0, 0, S, S);
      g.fillStyle = 'rgba(255,143,199,0.55)';
      roundRect(g, 3, 3, S-6, S-6, 14); g.fill();
      g.save();
      roundRect(g, 7, 7, S-14, S-14, 10); g.clip();
      g.drawImage(item.img, 7, 7, S-14, S-14);
      g.restore();
      item.tex.needsUpdate = true;
      fadeInSprite(item.sprite);
    });
    if(updateQueue.length > 0) scheduleTextureUpdate();
  });
}

function fadeInSprite(sprite){
  const mat = sprite.material;
  mat.opacity = 0;
  const start = performance.now();
  function step(){
    const t = Math.min((performance.now()-start)/FADE_DURATION, 1);
    const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    mat.opacity = ease;
    if(t < 1) requestAnimationFrame(step);
    else mat.opacity = 1;
  }
  requestAnimationFrame(step);
}

function startImageLoading(){
  if(pendingPhoto.length===0) return;
  pendingPhoto.forEach(item => {
    const img = new Image();
    img.onload = () => {
      updateQueue.push({ canvas: item.canvas, tex: item.tex, sprite: item.sprite, img });
      scheduleTextureUpdate();
    };
    img.src = item.photoPath;
  });
}
startImageLoading();

/* =====================================================================
   CAMERA ANIMATION
   ===================================================================== */
const ROTATION_SPEED = (Math.PI*2)/50000;
const PHI_MIN = 0.10, PHI_MAX = 1.30;
let phi = 1.05;
let theta = 0;
let orbitRadius = 0;
let baseOrbitRadius = 0;

function sphericalPos(radius, phiVal, thetaVal){
  return new THREE.Vector3(
    radius*Math.sin(phiVal)*Math.sin(thetaVal),
    radius*Math.cos(phiVal),
    radius*Math.sin(phiVal)*Math.cos(thetaVal)
  );
}

function recomputeFitDistance(){
  const vFov = camera.fov*Math.PI/180;
  const aspect = camera.aspect;
  const margin = 1.6;
  const neededByHeight = R*margin/Math.tan(vFov/2);
  const neededByWidth  = R*margin/(Math.tan(vFov/2)*aspect);
  const newBase = Math.max(neededByHeight, neededByWidth, R*1.5);
  if(!orbitRadius){ orbitRadius = newBase; }
  else if(baseOrbitRadius){ orbitRadius *= newBase/baseOrbitRadius; }
  baseOrbitRadius = newBase;
  orbitRadius = Math.min(Math.max(orbitRadius, baseOrbitRadius*0.6), baseOrbitRadius*2.1);
}
resizeRenderer();
window.addEventListener('resize', ()=>{ resizeRenderer(); applyResponsiveMarkerScale(); });

let mode = 'idle';
let flightStart = 0;
const FLIGHT_DURATION = 18000;

function easeInOutCubic(x){ return x<0.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2; }

camera.position.copy(new THREE.Vector3(0, coreRadius*0.8, coreRadius*4.0));
camera.lookAt(0,0,0);

function updateFlight(now){
  const elapsed = now-flightStart;
  const p = Math.min(elapsed/FLIGHT_DURATION, 1);

  const kf0pos = new THREE.Vector3(0, coreRadius*0.8, coreRadius*4.0);
  const kf1pos = sphericalPos(baseOrbitRadius * 0.7, 1.45, 0);
  const kf2pos = sphericalPos(baseOrbitRadius * 0.25, 1.35, 0.8);
  const kf3pos = sphericalPos(baseOrbitRadius * 0.6, 1.20, -0.8);
  const kf4pos = sphericalPos(baseOrbitRadius * 1.0, 1.05, 0);

  const curve = new THREE.CatmullRomCurve3([kf0pos, kf1pos, kf2pos, kf3pos, kf4pos]);
  curve.curveType = 'centripetal';

  const t = easeInOutCubic(p);
  const pos = curve.getPoint(t);

  camera.position.copy(pos);
  camera.lookAt(0,0,0);

  if(p>=1){
    mode = 'orbit';
    theta = 0;
    phi = 1.05;
    orbitRadius = baseOrbitRadius * 1.0;
    document.getElementById('hint').classList.add('show');
  }
}

function updateOrbit(){
  const pos = sphericalPos(orbitRadius, phi, theta);
  camera.position.copy(pos);
  camera.lookAt(0,0,0);
}

/* =====================================================================
   RENDER LOOP
   ===================================================================== */
let lastTime = performance.now();
let hidden = false;
document.addEventListener('visibilitychange', () => { hidden = document.hidden; });

function animate(now){
  if(!hidden){
    const dt = Math.min(now-lastTime, 50); lastTime = now;
    galaxyGroup.rotation.y -= ROTATION_SPEED*dt;
    if(mode==='flying') updateFlight(now);
    else if(mode==='orbit') updateOrbit();
    renderer.render(scene, camera);
  } else {
    lastTime = now;
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

/* =====================================================================
   INTERACTION
   ===================================================================== */
let dragging = false, dragMoved = false, lastX=0, lastY=0;

canvas.addEventListener('pointerdown', (e)=>{
  if(mode!=='orbit') return;
  dragging = true; dragMoved = false;
  lastX = e.clientX; lastY = e.clientY;
  canvas.classList.add('dragging');
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e)=>{
  if(!dragging) return;
  const dx = e.clientX-lastX;
  const dy = e.clientY-lastY;
  if(Math.abs(dx)+Math.abs(dy) > 3) dragMoved = true;
  theta -= dx*0.0032;
  phi = Math.min(PHI_MAX, Math.max(PHI_MIN, phi + dy*0.0026));
  lastX = e.clientX; lastY = e.clientY;
});
function endDrag(e){
  if(!dragging) return;
  dragging = false;
  canvas.classList.remove('dragging');
  if(!dragMoved && mode==='orbit') tryPick(e.clientX, e.clientY);
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', ()=>{ dragging=false; canvas.classList.remove('dragging'); });

canvas.addEventListener('wheel', (e)=>{
  if(mode!=='orbit') return;
  e.preventDefault();
  const factor = Math.exp(e.deltaY*0.0011);
  orbitRadius = Math.min(Math.max(orbitRadius*factor, baseOrbitRadius*0.55), baseOrbitRadius*2.2);
}, {passive:false});

let pinchStartDist = null, pinchStartRadius = 0;
canvas.addEventListener('touchstart', (e)=>{
  if(e.touches.length===2 && mode==='orbit'){
    dragging = false;
    pinchStartDist = Math.hypot(
      e.touches[0].clientX-e.touches[1].clientX,
      e.touches[0].clientY-e.touches[1].clientY
    );
    pinchStartRadius = orbitRadius;
  }
}, {passive:true});
canvas.addEventListener('touchmove', (e)=>{
  if(e.touches.length===2 && pinchStartDist){
    e.preventDefault();
    const dist = Math.hypot(
      e.touches[0].clientX-e.touches[1].clientX,
      e.touches[0].clientY-e.touches[1].clientY
    );
    const ratio = pinchStartDist/dist;
    orbitRadius = Math.min(Math.max(pinchStartRadius*ratio, baseOrbitRadius*0.55), baseOrbitRadius*2.2);
  }
}, {passive:false});
canvas.addEventListener('touchend', (e)=>{ if(e.touches.length<2) pinchStartDist = null; }, {passive:true});

const raycaster = new THREE.Raycaster();
const pointerNDC = new THREE.Vector2();
function tryPick(clientX, clientY){
  const rect = canvas.getBoundingClientRect();
  pointerNDC.x = ((clientX-rect.left)/rect.width)*2-1;
  pointerNDC.y = -((clientY-rect.top)/rect.height)*2+1;
  raycaster.setFromCamera(pointerNDC, camera);
  const hits = raycaster.intersectObjects(markerSprites);
  if(hits.length){
    const s = hits[0].object;
    openModal(s.userData.order, s.userData.data);
  }
}

/* =====================================================================
   MODAL
   ===================================================================== */
const modalOverlay = document.getElementById('modalOverlay');
const modalMedia = document.getElementById('modalMedia');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalOrder = document.getElementById('modalOrder');

function openModal(order, d){
  modalOrder.textContent = `Kenangan #${order}`;
  modalTitle.textContent = d.title;
  modalDesc.textContent = d.desc;
  if(d.photo){
    const isVideo = d.photo.match(/\.(mp4|webm|ogg|mov)$/i);
    const pos = d.crop === 'bottom' ? 'center bottom' : d.crop === 'top' ? 'center top' : 'center';
    modalMedia.innerHTML = isVideo
      ? `<video src="${d.photo}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>`
      : `<img src="${d.photo}" alt="${d.title}" style="width:100%;height:100%;object-fit:cover;object-position:${pos};">`;
  } else {
    modalMedia.innerHTML = d.icon;
  }
  modalOverlay.classList.add('open');
}
function closeModal(){ modalOverlay.classList.remove('open'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e)=>{ if(e.target===modalOverlay) closeModal(); });
window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

/* =====================================================================
   INTRO / START
   ===================================================================== */
document.getElementById('startBtn').addEventListener('click', (e)=>{
  e.target.disabled = true;
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('label').classList.add('show');
  mode = 'flying';
  flightStart = performance.now();
});
