!function(){let t=document.getElementById("canvass"),e=t.getContext("2d"),n=!1,a=t.height-40,h=0,o=[],g=new Image,i=new Image;g.src="https://w7.pngwing.com/pngs/39/802/png-transparent-gray-dinosaur-illustration-tyrannosaurus-t-shirt-dino-t-rex-runner-2-lonely-t-rex-run-2-google-chrome-8-bit-game-angle-text-thumbnail.png",i.src="https://w7.pngwing.com/pngs/380/807/png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text-thumbnail.png";let r=!1,d=!1,m=0;document.addEventListener("keydown",l=>{"KeyW"!==l.code||r||(d||(d=!0,function d(){e.clearRect(0,0,t.width,t.height),e.drawImage(g,50,a,30,30),o.forEach(n=>{e.drawImage(i,n.x,t.height-n.height,n.width,n.height)}),a+=h,h+=.5,a>=t.height-40&&(a=t.height-40,h=0,n=!1),function(){if(o.forEach(t=>{t.x-=5}),m<=0){if(.02>Math.random()){let e=Math.floor(3*Math.random())+1,n=t.width;for(let t=0;t<e;t++){let t=5+15*Math.random();o.push({x:n+t,width:20+10*Math.random(),height:20+70*Math.random()}),n=o[o.length-1].x+o[o.length-1].width}m=100}}else m--;o=o.filter(t=>t.x>-t.width)}(),o.forEach(e=>{a+30>=t.height-e.height&&a<=t.height&&80>=e.x&&50<=e.x+e.width&&(r=!0,document.getElementById("retryButton").style.display="block")}),r||requestAnimationFrame(d),m--}()),n||!d||(n=!0,h=-11))}),document.getElementById("retryButton").onclick=function(){document.location.reload()}}();
//# sourceMappingURL=index.bd889465.js.map
