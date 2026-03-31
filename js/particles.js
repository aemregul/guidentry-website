/* ============================================================
   GUIDENTRY — Particle System (Canvas-based)
   ============================================================ */

export function initParticles(canvasSelector = '.hero__canvas') {
  const canvas = document.querySelector(canvasSelector);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let connections = [];
  let mouse = { x: null, y: null };
  let animationId;

  const CONFIG = {
    particleCount: 60,
    maxDistance: 150,
    particleMinSize: 1,
    particleMaxSize: 2.5,
    speed: 0.3,
    color: { r: 20, g: 184, b: 166 }, // teal accent
    mouseRadius: 200,
    opacity: 0.6,
  };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * CONFIG.speed,
      vy: (Math.random() - 0.5) * CONFIG.speed,
      size: CONFIG.particleMinSize + Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize),
      opacity: 0.2 + Math.random() * CONFIG.opacity,
    };
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(CONFIG.particleCount, Math.floor((width * height) / 15000));
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function update() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse interaction
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseRadius) {
          const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }
      }

      // Limit speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > CONFIG.speed * 2) {
        p.vx = (p.vx / speed) * CONFIG.speed * 2;
        p.vy = (p.vy / speed) * CONFIG.speed * 2;
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const { r, g, b } = CONFIG.color;

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.maxDistance) {
          const opacity = (1 - dist / CONFIG.maxDistance) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
      ctx.fill();
    });
  }

  function animate() {
    update();
    draw();
    animationId = requestAnimationFrame(animate);
  }

  // Event listeners
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    resize();
    // Reposition particles that are out of bounds
    particles.forEach((p) => {
      if (p.x > width) p.x = width;
      if (p.y > height) p.y = height;
    });
  });

  // Visibility API - pause when hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

  init();
  animate();
}
