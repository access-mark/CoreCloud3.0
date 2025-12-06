// =========================================================
// CoreCloud Nav
// =========================================================
window.CC = {
  toggleNav(){
    const nav = document.getElementById('ccNav');
    if(!nav) return;
    nav.classList.toggle('cc-open');
  }
};

// =========================================================
// AI Background Particles — CoreCloud Motion Layer
// =========================================================
(function(){
  const canvas = document.getElementById("cc-ai-bg");
  if(!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  const COUNT = 75; // increase for denser field

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  for(let i = 0; i < COUNT; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.6,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.3
    });
  }

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(0,150,255,${p.a})`; // CoreCloud neon-ish blue
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
