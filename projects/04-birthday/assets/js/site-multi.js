// Shared JS for multi-page site: confetti helpers, typewriter, countdown, pop-ins, balloons
/* global confetti */
(function(){
  window.confetti = window.confetti || (window.confetti || (function(){return function(){};}));

  window.typeWriter = function(targetEl, lines){
    let lineIndex=0,charIndex=0;
    function step(){
      if(lineIndex>=lines.length) return;
      const t = lines[lineIndex];
      targetEl.textContent = lines.slice(0,lineIndex).join('\n') + (lineIndex? '\n' : '') + t.slice(0,charIndex);
      charIndex++;
      if(charIndex>t.length){ lineIndex++; charIndex=0; setTimeout(step,350); } else setTimeout(step,28 + Math.random()*12);
    }
    step();
  };

  window.startCountdown = function(el, month, day){
    function update(){
      const now = new Date();
      let year = now.getFullYear();
      const target = new Date(year, month-1, day, 0,0,0);
      if(target - now < 0) target.setFullYear(year+1);
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff/86400000); const hrs = Math.floor((diff%86400000)/3600000);
      const mins = Math.floor((diff%3600000)/60000); const secs = Math.floor((diff%60000)/1000);
      el.textContent = `Time until the big day: ${days}d ${hrs}h ${mins}m ${secs}s`;
    }
    update(); setInterval(update,1000);
  };

  window.observePopIns = function(selector){
    const items = document.querySelectorAll(selector);
    if(!items.length) return;
    const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } }); },{threshold:0.12});
    items.forEach(i=> io.observe(i));
  };

  window.enableImageDrop = function(selector){
    document.querySelectorAll(selector).forEach(img=>{
      img.addEventListener('dragover', (ev)=> ev.preventDefault());
      img.addEventListener('drop', (ev)=>{
        ev.preventDefault(); const file = ev.dataTransfer.files && ev.dataTransfer.files[0];
        if(file && file.type.startsWith('image/')) img.src = URL.createObjectURL(file);
      });
    });
  };

  window.tryPlayMusic = function(){
    const a = document.getElementById('bgMusic');
    if(a){ a.play().catch(()=>{}); }
  };

  window.spawnBalloons = function(n){
    const root = document.getElementById('balloon-root');
    if(!root) return;
    const colors = ['#ff6bb8','#ffb3d9','#ffc9e0','#ff99cc','#ff85cc'];
    for(let i=0;i<n;i++){
      const b = document.createElement('div'); b.className='balloon';
      const size = 40 + Math.random()*40; b.style.width = size+'px'; b.style.height = (size*1.25)+'px';
      b.style.left = (10 + Math.random()*80)+'%'; b.style.bottom = '-80px'; b.style.background = colors[Math.floor(Math.random()*colors.length)];
      b.style.position='absolute'; b.style.borderRadius='50% 50% 44% 44%'; b.style.boxShadow='0 10px 30px rgba(255,107,184,0.3)';
      root.appendChild(b);
      const dur = 4000 + Math.random()*4000;
      b.animate([{transform:'translateY(0) rotate(0deg)'},{transform:`translateY(-${400+Math.random()*300}px) rotate(${(Math.random()*40-20)}deg)`}],{duration:dur,iterations:1,easing:'ease-out'});
      setTimeout(()=> b.remove(), dur+200);
    }
  };

})();
