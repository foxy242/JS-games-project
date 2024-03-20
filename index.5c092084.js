document.querySelector(".time-button__calculator").addEventListener("click",function(){let t=parseInt(document.getElementById("start-timer").value);document.querySelector(".time-calc__time").textContent=` ${Math.floor(t/86400)}\u{434}\u{43D}   ${Math.floor(t%86400/3600)}:${Math.floor(t%3600/60)}:${t%60}`});
//# sourceMappingURL=index.5c092084.js.map
