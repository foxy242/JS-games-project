!function(){var t=document.getElementById("canvass"),e=t.getContext("2d"),n=!1,a=t.height-40,i=0,h=[],o=new Image,g=new Image;g.style.width="10px",o.src="https://w7.pngwing.com/pngs/39/802/png-transparent-gray-dinosaur-illustration-tyrannosaurus-t-shirt-dino-t-rex-runner-2-lonely-t-rex-run-2-google-chrome-8-bit-game-angle-text-thumbnail.png",g.src="https://w7.pngwing.com/pngs/380/807/png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text-thumbnail.png";var r=!1,c=!1;function d(){e.clearRect(0,0,t.width,t.height),e.drawImage(o,50,a,30,30),h.forEach((function(n){e.drawImage(g,n.x,t.height-n.height,n.width,n.height)})),a+=i,i+=.5,a>=t.height-40&&(a=t.height-40,i=0,n=!1),h.forEach((function(t){t.x-=3})),Math.random()<.02&&h.push({x:t.width,width:20+20*Math.random(),height:20+70*Math.random()}),(h=h.filter((function(t){return t.x>-t.width}))).forEach((function(e){a+30>=t.height-e.height&&a<=t.height&&80>=e.x&&50<=e.x+e.width&&(r=!0,document.getElementById("retryButton").style.display="block")})),r||requestAnimationFrame(d)}document.addEventListener("keydown",(function(t){"Space"!==t.code||r||(c||(c=!0,d()),!n&&c&&(n=!0,i=-10.5))})),document.getElementById("retryButton").onclick=function(){document.location.reload()}}();
//# sourceMappingURL=index.8d4aff92.js.map
