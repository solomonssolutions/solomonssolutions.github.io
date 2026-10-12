// Add a project: copy an object in PROJECTS. Photos go in photos/ (about 1600px on the long side).
// stage: before | during | after. story: short text for each stage.
var FN={"lenasia-before-1": "1-lenasia-before-1", "lenasia-during-1": "2-lenasia-during-1", "kk-after-1": "3-kk-after-1", "kk-after-2": "4-kk-after-2", "kk-after-3": "5-kk-after-3", "kk-after-4": "6-kk-after-4", "kk-before-1": "7-kk-before-1", "kk-before-2": "8-kk-before-2", "kk-during-1": "9-kk-during-1", "kk-during-2": "10-kk-during-2", "kk-during-3": "11-kk-during-3", "kk-during-4": "12-kk-during-4", "kk-during-5": "13-kk-during-5", "kk-during-6": "14-kk-during-6", "lenasia-after-1": "15-lenasia-after-1", "lenasia-after-2": "16-lenasia-after-2", "lenasia-after-3": "17-lenasia-after-3", "lenasia-after-4": "18-lenasia-after-4", "lenasia-after-5": "19-lenasia-after-5", "lenasia-during-2": "20-lenasia-during-2", "lenasia-during-3": "21-lenasia-during-3"};
function P(n,s,a){return {stage:s,src:"photos/"+FN[n]+".jpg",alt:a}}
var PROJECTS=[
  {name:"Lenasia Residence", area:"Lenasia, Johannesburg",
   blurb:"A full exterior upgrade of a family home: paving, boundary walls with steel fencing, a slab-and-grass driveway and a container conversion.",
   cover:P("lenasia-after-1","after","Finished slab-and-grass driveway at dusk"),
   story:{
    before:"The yard started as bare ground inside a plain boundary wall and palisade fence, with no paving and no defined driveway.",
    during:"Red and charcoal paving went in along the side of the house with a neat edge. A rock bed and paved verge were built along the street wall, and the driveway was set out in concrete slabs with grass strips between them.",
    after:"The finished property has a red paved courtyard, a slab-and-grass driveway leading to the garage, boundary walls with decorative steel fencing, and a red container conversion with timber-clad doors."},
   photos:[
    P("lenasia-before-1","before","Bare yard inside the boundary wall before work"),
    P("lenasia-during-1","during","Red paving laid along the side of the house"),
    P("lenasia-during-3","during","Rock bed and paved edge along the street wall"),
    P("lenasia-during-2","during","Driveway slabs and grass strips going in"),
    P("lenasia-after-1","after","Slab-and-grass driveway at dusk"),
    P("lenasia-after-2","after","Finished driveway leading to the garage"),
    P("lenasia-after-3","after","Driveway slabs and grass strips"),
    P("lenasia-after-5","after","Red paved courtyard with charcoal edge"),
    P("lenasia-after-4","after","Red container conversion with timber doors")
   ]},
  {name:"Kota King, Doornfontein", area:"Johannesburg",
   blurb:"Full shop fit-out: brickwork, plastering, steel bulkhead, LED lighting, tiling and finishing, from an empty unit to a trading counter.",
   cover:P("kk-after-2","after","Kota King shopfront at night"),
   story:{
    before:"An empty shell of a unit: bare walls and floor, ready for a full fit-out.",
    during:"The counter brickwork went up first, then the steel bulkhead frame was fitted and plastered. LED lighting was installed and new floor tiles were laid.",
    after:"A finished, branded takeaway: painted bulkhead, lit counter, tiled kitchen and a shopfront ready to trade."},
   photos:[
    P("kk-before-1","before","Empty unit before work"),
    P("kk-before-2","before","Inside the empty unit"),
    P("kk-during-1","during","Counter brickwork going up"),
    P("kk-during-2","during","Steel bulkhead frame"),
    P("kk-during-3","during","Crew fitting the bulkhead"),
    P("kk-during-4","during","Bulkhead plastered"),
    P("kk-during-5","during","Counter and LED lighting going in"),
    P("kk-during-6","during","New floor tiles laid"),
    P("kk-after-1","after","Finished counter and painted bulkhead"),
    P("kk-after-2","after","Kota King shopfront at night"),
    P("kk-after-3","after","Kota King from the square"),
    P("kk-after-4","after","Back-of-house kitchen")
   ]},
];
var VIDEOS=[];
var ALL=[];
var pr=document.getElementById("projects");
var LB=document.getElementById("lb"),LI=LB.querySelector("img"),LC=LB.querySelector(".cap"),cur=0;
function show(i){cur=(i+ALL.length)%ALL.length;LI.src=ALL[cur].src;LC.textContent=ALL[cur].alt;LB.classList.add("on")}
LB.querySelector(".x").onclick=function(){LB.classList.remove("on")};
LB.querySelector(".pv").onclick=function(e){e.stopPropagation();show(cur-1)};
LB.querySelector(".nx").onclick=function(e){e.stopPropagation();show(cur+1)};
LB.onclick=function(e){if(e.target===LB)LB.classList.remove("on")};
document.addEventListener("keydown",function(e){if(!LB.classList.contains("on"))return;if(e.key==="Escape")LB.classList.remove("on");if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});
function fig(x){var idx=ALL.length;ALL.push(x);var f=document.createElement("figure");var i=new Image();i.src=x.src;i.alt=x.alt||"";i.loading="lazy";f.appendChild(i);f.onclick=function(){show(idx)};return f}
var LAB={before:"Before",during:"During",after:"After"};
PROJECTS.forEach(function(p){var s=document.createElement("article");s.className="proj";
 s.innerHTML='<h3>'+p.name+'</h3><p class="meta">'+(p.area||"")+'</p><p class="lead">'+(p.blurb||"")+'</p>';
 ["before","during","after"].forEach(function(st){var ph=p.photos.filter(function(x){return x.stage===st});if(!ph.length)return;
  var d=document.createElement("div");d.className="stage";
  d.innerHTML='<h4><span>'+LAB[st]+'</span></h4><p>'+((p.story&&p.story[st])||"")+'</p><div class="gal"></div>';
  var g=d.querySelector(".gal");ph.forEach(function(x){g.appendChild(fig(x))});s.appendChild(d)});
 pr.appendChild(s)});
var v=document.getElementById("vids");
VIDEOS.forEach(function(x){var f=document.createElement("figure");f.innerHTML='<video controls preload="none" playsinline poster="'+(x.poster||"")+'" src="'+x.src+'"></video><figcaption>'+x.caption+'</figcaption>';v.appendChild(f)});
document.getElementById("yr").textContent=new Date().getFullYear();
