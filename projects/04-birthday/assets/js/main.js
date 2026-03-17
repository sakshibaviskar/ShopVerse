// Main JS used across pages — runs only when needed
(function(){
  // song upload on songs page
  const songUpload = document.getElementById('songUpload');
  if(songUpload){
    songUpload.addEventListener('change', (e)=>{
      const file = e.target.files[0];
      if(!file) return;
      const url = URL.createObjectURL(file);
      const ul = document.querySelector('.playlist');
      const li = document.createElement('li');
      li.innerHTML = `<strong>${file.name}</strong><audio controls src="${url}"></audio>`;
      ul.insertBefore(li, ul.firstChild);
    });
  }

  // Celebration page logic
  const candles = document.getElementById('candles');
  const lightBtn = document.getElementById('lightBtn');
  const blowBtn = document.getElementById('blowBtn');
  const surpriseBtn = document.getElementById('surpriseBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const balloonsRoot = document.getElementById('balloons');
  const confettiRoot = document.getElementById('confetti-root');

  function setCandles(lit){
    if(!candles) return;
    const list = candles.querySelectorAll('.candle');
    list.forEach(c=>{ if(lit) c.classList.add('lit'); else c.classList.remove('lit'); });
  }

  function spawnBalloons(count=8){
    if(!balloonsRoot) return;
    for(let i=0;i<count;i++){
      const b = document.createElement('div');
      b.className='balloon';
      const color = ['#ff6b81','#ffd36b','#92e6a7','#8ec5ff'][Math.floor(Math.random()*4)];
      b.style.background = color;
      b.style.left = (10 + Math.random()*80)+'%';
      b.style.bottom = '-80px';
      b.style.opacity = 0.95;
      balloonsRoot.appendChild(b);
      // animate upward
      const dur = 4000 + Math.random()*4000;
      b.animate([{transform:'translateY(0)',opacity:1},{transform:`translateY(-${400+Math.random()*300}px)`,opacity:1}],{duration:dur,iterations:1,easing:'ease-out'});
      setTimeout(()=>b.remove(),dur+100);
    }
  }

  function spawnConfetti(count=80){
    if(!confettiRoot) return;
    const colors = ['#ff6b81','#ffd36b','#92e6a7','#8ec5ff','#c98bff'];
    for(let i=0;i<count;i++){
      const c = document.createElement('div');
      c.className = 'confetti';
      const w = 6 + Math.random()*10; c.style.width = w+'px'; c.style.height = (8+Math.random()*12)+'px';
      c.style.background = colors[Math.floor(Math.random()*colors.length)];
      c.style.left = (Math.random()*100)+'%';
      c.style.top = (Math.random()*20)+'%';
      confettiRoot.appendChild(c);
      const fall = 1500 + Math.random()*2000;
      c.animate([{transform:`translateY(0) rotate(0deg)`},{transform:`translateY(${600+Math.random()*400}px) rotate(${360*Math.random()}deg)`}],{duration:fall,iterations:1,easing:'cubic-bezier(.2,.7,.2,1)'});
      setTimeout(()=>c.remove(),fall+100);
    }
  }

  if(lightBtn) lightBtn.addEventListener('click', ()=>{ setCandles(true); });
  if(blowBtn) blowBtn.addEventListener('click', ()=>{ setCandles(false); spawnConfetti(40); });
  if(surpriseBtn) surpriseBtn.addEventListener('click', ()=>{ setCandles(true); spawnBalloons(12); spawnConfetti(100); if(modal) modal.classList.remove('hidden');
    // try to start music on surprise using a public sample
    const a = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); a.volume = 0.8; a.play().catch(()=>{});
  });
  if(closeModal) closeModal.addEventListener('click', ()=>{ if(modal) modal.classList.add('hidden'); });

})();
