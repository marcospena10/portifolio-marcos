(function(){
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phone=document.getElementById("phone");
  var scrub=document.getElementById("scrub");
  var words=scrub.textContent.trim().split(/\s+/);
  scrub.innerHTML=words.map(function(w){return '<span class="w">'+w+'</span>'}).join(" ");
  var spans=scrub.querySelectorAll(".w");
  function update(){
    var y=window.scrollY,h=window.innerHeight;
    if(!reduce){
      var p=Math.min(1,Math.max(0,y/(h*.8)));
      phone.style.setProperty("--sc",(0.92+0.12*p).toFixed(3));
      phone.style.transform="rotateX("+(18*(1-p)).toFixed(2)+"deg) translateY("+(-30*p).toFixed(1)+"px) scale("+(0.92+0.12*p).toFixed(3)+")";
    }
    var r=scrub.getBoundingClientRect();
    var prog=Math.min(1,Math.max(0,(h*.85-r.top)/(h*.6+r.height*.5)));
    var n=Math.round(prog*spans.length);
    for(var i=0;i<spans.length;i++){spans[i].classList.toggle("on",i<n||reduce)}
  }
  window.addEventListener("scroll",update,{passive:true});
  window.addEventListener("resize",update);
  update();
})();

/* ===== Demonstrações: filtro e ampliação ===== */
(function(){
  var tabs=document.querySelectorAll(".tab"),items=document.querySelectorAll(".item");
  tabs.forEach(function(t){
    t.addEventListener("click",function(){
      var f=t.dataset.filter;
      tabs.forEach(function(x){var on=x===t;x.classList.toggle("on",on);x.setAttribute("aria-selected",on)});
      items.forEach(function(i){i.hidden=!(f==="todos"||i.dataset.cat===f)});
    });
  });
  var lb=document.getElementById("lightbox"),body=document.getElementById("lbBody");
  document.querySelectorAll(".media").forEach(function(m){
    m.addEventListener("click",function(){
      var el=m.querySelector("img,video");
      if(!el)return;
      var c=el.cloneNode(true);
      if(c.tagName==="VIDEO"){c.controls=true;c.muted=false;c.autoplay=true}
      body.innerHTML="";body.appendChild(c);lb.showModal();
    });
  });
  function close(){lb.close();body.innerHTML=""}
  document.getElementById("lbClose").addEventListener("click",close);
  lb.addEventListener("click",function(e){if(e.target===lb)close()});
  lb.addEventListener("close",function(){body.innerHTML=""});
})();
