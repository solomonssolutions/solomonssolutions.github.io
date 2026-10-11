// Add photos to gallery/ and list them here. stage: before | during | after
var PHOTOS=[
  {stage:"before", src:"gallery/before-1.jpg", alt:"Empty unit before work"},
  {stage:"before", src:"gallery/before-2.jpg", alt:"Inside the empty unit"},
  {stage:"during", src:"gallery/during-1.jpg", alt:"Counter brickwork going up"},
  {stage:"during", src:"gallery/during-2.jpg", alt:"Steel bulkhead frame"},
  {stage:"during", src:"gallery/during-3.jpg", alt:"Crew fitting the bulkhead"},
  {stage:"during", src:"gallery/during-4.jpg", alt:"Bulkhead plastered"},
  {stage:"during", src:"gallery/during-5.jpg", alt:"Counter and LED lighting going in"},
  {stage:"during", src:"gallery/during-6.jpg", alt:"New floor tiles laid"},
  {stage:"after", src:"gallery/after-1.jpg", alt:"Finished counter and painted bulkhead"},
  {stage:"after", src:"gallery/after-2.jpg", alt:"Kota King shopfront at night"},
  {stage:"after", src:"gallery/after-3.jpg", alt:"Kota King from the square"},
  {stage:"after", src:"gallery/after-4.jpg", alt:"Back-of-house kitchen"},
];
// Add compressed clips to videos/ and list them here
var VIDEOS=[
  // {src:"videos/clip1.mp4", poster:"videos/clip1.jpg", caption:"Steel bulkhead framing"},
];
PHOTOS.forEach(function(p){var g=document.querySelector('.gal[data-stage="'+p.stage+'"]');if(!g)return;var i=new Image();i.src=p.src;i.alt=p.alt||"";i.loading="lazy";g.appendChild(i)});
var v=document.getElementById("vids");
VIDEOS.forEach(function(x){var f=document.createElement("figure");f.innerHTML='<video controls preload="none" playsinline poster="'+(x.poster||"")+'" src="'+x.src+'"></video><figcaption>'+x.caption+'</figcaption>';v.appendChild(f)});
document.getElementById("yr").textContent=new Date().getFullYear();
