(() => {
  function init() {
    const canvas = document.getElementById('background-dots');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const numDots = 100;
    const dots = [];

    function createDots() {
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.6,
          dy: (Math.random() - 0.5) * 0.6
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let dot of dots) {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < -10) dot.x = width + 10;
        if (dot.x > width + 10) dot.x = -10;
        if (dot.y < -10) dot.y = height + 10;
        if (dot.y > height + 10) dot.y = -10;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(184,134,11,0.45)';
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    }

    let animationId = null;

    function start() {
      resize();
      createDots();
      if (animationId == null) draw();
    }

    window.addEventListener('resize', () => {
      resize();
      createDots();
    }, { passive: true });

    // Pause animation when page is not visible to save CPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animationId != null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      } else {
        if (animationId == null) draw();
      }
    });

    start();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
