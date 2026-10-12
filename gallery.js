// Add a project: copy an object in PROJECTS. Photos go in photos/ (about 1600px on the long side).
// stage: before | during | after. story: short text for each stage.
var FN={"lenasia-before-1": "1-lenasia-before-1", "lenasia-during-1": "2-lenasia-during-1", "kk-after-1": "3-kk-after-1", "kk-after-2": "4-kk-after-2", "kk-after-3": "5-kk-after-3", "kk-after-4": "6-kk-after-4", "kk-before-1": "7-kk-before-1", "kk-before-2": "8-kk-before-2", "kk-during-1": "9-kk-during-1", "kk-during-2": "10-kk-during-2", "kk-during-3": "11-kk-during-3", "kk-during-4": "12-kk-during-4", "kk-during-5": "13-kk-during-5", "kk-during-6": "14-kk-during-6", "lenasia-after-1": "15-lenasia-after-1", "lenasia-after-2": "16-lenasia-after-2", "lenasia-after-3": "17-lenasia-after-3", "lenasia-after-4": "18-lenasia-after-4", "lenasia-after-5": "19-lenasia-after-5", "lenasia-during-2": "20-lenasia-during-2", "lenasia-during-3": "21-lenasia-during-3"};
var FN2={"pro-1":"1-pro-1","pro-10":"2-pro-10","pro-2":"3-pro-2","pro-3":"4-pro-3","pro-4":"5-pro-4","pro-5":"6-pro-5","pro-6":"7-pro-6","pro-7":"8-pro-7","pro-8":"9-pro-8","pro-9":"10-pro-9","alb-1":"1-alb-1","alb-2":"2-alb-2","alb-3":"3-alb-3","alb-4":"4-alb-4","alb-5":"5-alb-5","nat-1":"6-nat-1","nat-2":"7-nat-2","nat-3":"8-nat-3","nat-4":"9-nat-4","nat-5":"10-nat-5","nat-6":"11-nat-6","ox-1":"12-ox-1","ox-2":"13-ox-2","ox-3":"14-ox-3","ox-4":"15-ox-4","ox-5":"16-ox-5","ox-6":"17-ox-6"};var VF={"alb-v2":"2-alb-v2","alb-v2p":"1-alb-v2-poster","alb-v3":"4-alb-v3","alb-v3p":"3-alb-v3-poster","alb-v4":"6-alb-v4","alb-v4p":"5-alb-v4-poster","alb-v5":"8-alb-v5","alb-v5p":"7-alb-v5-poster","pro-v1":"12-pro-v1","pro-v2":"2-pro-v2","pro-v2p":"1-pro-v2-poster","pro-v1p":"11-pro-v1-poster","alb-v1":"19-alb-v1","alb-v1p":"18-alb-v1-poster","nat-v1":"21-nat-v1","nat-v1p":"20-nat-v1-poster","nat-v2":"23-nat-v2","nat-v2p":"22-nat-v2-poster"};
function P2(n,s,a){return {stage:s,src:"photos2/"+FN2[n]+".jpg",alt:a}}
function V(n,c){return {src:"videos/"+VF[n]+".mp4",poster:"videos/"+VF[n+"p"]+".jpg",caption:c}}
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
  {name:"Naturena suspended ceiling", area:"Naturena",
   blurb:"Suspended ceilings with stepped bulkheads and recessed downlights through the living areas and passage of a home.",
   cover:P2("nat-6","after","Finished ceiling with recessed downlights"),
   story:{
    before:"",
    during:"Ceiling boards and bulkheads were framed and fixed through the lounge, dining area and passage. The recessed downlights were fitted and the boards finished smooth, ready for paint.",
    after:"The finished ceiling is painted white, with stepped bulkheads and recessed downlights over a bright, clean room."},
   videos:[V("nat-v1","Naturena: ceilings and LED cove lighting, walkthrough 1"),V("nat-v2","Naturena: LED cove lighting in the evening")],
   photos:[
    P2("nat-1","during","Bulkhead framing going up"),
    P2("nat-2","during","Ceiling boards and downlight"),
    P2("nat-3","during","Bulkhead between the passage and kitchen"),
    P2("nat-4","during","Ceiling and bulkhead in the lounge"),
    P2("nat-5","during","Passage ceiling with downlights"),
    P2("nat-6","after","Finished ceiling with recessed downlights")
   ]},
  {name:"Oxford staircases", area:"Rosebank",
   blurb:"Exterior staircase retiling with dark slate-look tiles and aluminium nosings.",
   cover:P2("ox-5","after","Finished tiled staircase"),
   story:{
    before:"The existing staircase had tiles marked for repair.",
    during:"The crew chipped out the marked tiles and laid new dark tiles step by step.",
    after:"The finished staircase has dark slate-look tiles with an aluminium nosing on every step, neat edges against the stair walls and a white handrail."},
   photos:[
    P2("ox-4","before","Staircase with tiles marked for repair"),
    P2("ox-1","during","Crew removing tiles"),
    P2("ox-2","during","Crew at work on the steps"),
    P2("ox-3","during","Crew working up the staircase"),
    P2("ox-5","after","Finished staircase with aluminium nosings"),
    P2("ox-6","after","Finished staircase from the bottom")
   ]},
  {name:"Alberton bathroom refurb", area:"Alberton",
   blurb:"A full bathroom refurbishment: old tiles and fittings stripped out, then new wall and floor tiles and a new suite.",
   cover:P2("alb-5","after","Finished bathroom"),
   story:{
    before:"The old bathroom had beige wall tiles, a tiled shower base and an old suite. The crew started by taking out the fittings.",
    during:"The old fittings were removed and the walls stripped back to the bare surface, ready for new tiling.",
    after:"The finished bathroom has new cream wall and floor tiles, a bath with brass-finish taps and a new toilet."},
   videos:[V("alb-v1","Alberton bathroom walkthrough"),V("alb-v2","Strip-out: removing the old fittings and tiles"),V("alb-v3","Strip-out: walls stripped back, tile rubble"),V("alb-v4","Strip-out: bare walls and floor"),V("alb-v5","Finished bathroom walkthrough")],
   photos:[
    P2("alb-1","before","Removing the old toilet and cistern"),
    P2("alb-2","before","Old bathroom during strip-out"),
    P2("alb-3","during","Walls stripped back to the bare surface"),
    P2("alb-4","during","Old fittings removed"),
    P2("alb-5","after","Finished bathroom")
   ]},
  {name:"Protea gamazine", area:"Protea Glen",
   blurb:"Textured gamazine wall coating applied by hand to the boundary and entrance walls of a home.",
   cover:P2("pro-5","after","Finished textured frontage"),
   story:{
    before:"The boundary and entrance walls were rough grey plaster, with cracks and patched areas.",
    during:"The crew applied the textured gamazine coat by hand, working across the walls and columns at the entrance.",
    after:"The finished walls have a warm brown textured gamazine finish, even and clean around the entrance."},
   videos:[V("pro-v1","Applying the gamazine texture"),V("pro-v2","Protea Glen completed project")],
   photos:[
    P2("pro-1","before","Grey plastered wall and driveway"),
    P2("pro-2","before","Curved garden wall before texturing"),
    P2("pro-3","before","Entrance before texturing"),
    P2("pro-6","before","Cracked wall corner"),
    P2("pro-9","before","Street view before texturing"),
    P2("pro-4","during","Crew applying the gamazine coat"),
    P2("pro-7","during","Texturing the entrance wall"),
    P2("pro-8","during","Working on the entrance column"),
    P2("pro-5","after","Finished textured frontage"),
    P2("pro-10","after","Finished textured corner")
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
 if(p.videos&&p.videos.length){var vd=document.createElement("div");vd.className="stage";vd.innerHTML='<h4><span>Walkthrough</span></h4><div class="vids"></div>';var vg=vd.querySelector(".vids");p.videos.forEach(function(x){var f=document.createElement("figure");f.innerHTML='<video controls preload="none" playsinline poster="'+x.poster+'" src="'+x.src+'"></video><figcaption>'+x.caption+'</figcaption>';vg.appendChild(f)});s.appendChild(vd)}
 pr.appendChild(s)});
var v=document.getElementById("vids");
VIDEOS.forEach(function(x){var f=document.createElement("figure");f.innerHTML='<video controls preload="none" playsinline poster="'+(x.poster||"")+'" src="'+x.src+'"></video><figcaption>'+x.caption+'</figcaption>';v.appendChild(f)});
document.getElementById("yr").textContent=new Date().getFullYear();
