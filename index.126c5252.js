let t=document.getElementById("field"),e=document.getElementById("ball"),n=0,i=0;t.addEventListener("mousedown",(function(l){let o=t.getBoundingClientRect(),d=e.getBoundingClientRect(),g=l.clientX-o.left,h=l.clientY-o.top,c=g-(d.left-o.left+d.width/2),u=h-(d.top-o.top+d.height/2),a=Math.atan2(u,c);n=5*Math.cos(a),i=5*Math.sin(a)})),function l(){let o=t.getBoundingClientRect(),d=e.getBoundingClientRect(),g=d.left-o.left+n,h=d.top-o.top+i;(g<0||g+d.width>o.width)&&(n*=-1),(h<0||h+d.height>o.height)&&(i*=-1),e.style.left=g+"px",e.style.top=h+"px",requestAnimationFrame(l)}();
//# sourceMappingURL=index.126c5252.js.map
