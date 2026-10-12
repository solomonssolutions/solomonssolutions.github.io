// Add a project: copy an object in PROJECTS. Photos go in gallery/ (about 1200px wide, compressed).
// stage is optional: before | during | after
var PROJECTS=[
  {name:"Kota King, Doornfontein", area:"Johannesburg",
   blurb:"Full shop fit-out: brickwork, plastering, steel bulkhead, LED lighting, tiling and finishing, from an empty unit to a trading counter.",
   photos:[

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
    {stage:"after", src:"gallery/1-after-3.jpg", alt:"Kota King from the square"},
    {stage:"after", src:"gallery/after-4.jpg", alt:"Back-of-house kitchen"},
   ]},
];
// Add compressed clips to videos/ and list them here
var VIDEOS=[
  // {src:"videos/clip1.mp4", poster:"videos/clip1.jpg", caption:"Steel bulkhead framing"},
];
var pr=document.getElementById("projects");
PROJECTS.forEach(function(p){var s=document.createElement("article");s.className="proj";
 var h='<h3>'+p.name+'</h3><p class="meta">'+(p.area||"")+'</p><p class="lead">'+(p.blurb||"")+'</p><div class="gal"></div>';s.innerHTML=h;var g=s.querySelector(".gal");
 p.photos.forEach(function(x){var f=document.createElement("figure");var i=new Image();i.src=x.src;i.alt=x.alt||"";i.loading="lazy";f.appendChild(i);if(x.stage){var c=document.createElement("figcaption");c.textContent=x.stage;f.appendChild(c)}g.appendChild(f)});
 pr.appendChild(s)});
var v=document.getElementById("vids");
VIDEOS.forEach(function(x){var f=document.createElement("figure");f.innerHTML='<video controls preload="none" playsinline poster="'+(x.poster||"")+'" src="'+x.src+'"></video><figcaption>'+x.caption+'</figcaption>';v.appendChild(f)});
document.getElementById("yr").textContent=new Date().getFullYear();
