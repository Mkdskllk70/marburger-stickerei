(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if(burger && mobile){
    burger.addEventListener('click', () => mobile.classList.toggle('open'));
    mobile.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=> mobile.classList.remove('open'));
    });
  }

  // Lightbox
  const lb = document.querySelector('[data-lightbox]');
  const lbImg = document.querySelector('[data-lightbox-img]');
  const closeBtn = document.querySelector('[data-lightbox-close]');
  function close(){
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
  if(lb && lbImg){
    document.querySelectorAll('[data-gallery-item]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const src = btn.getAttribute('data-src');
        const alt = btn.getAttribute('data-alt') || 'Galerie';
        lbImg.src = src;
        lbImg.alt = alt;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    lb.addEventListener('click', (e)=>{
      if(e.target === lb) close();
    });
    if(closeBtn) closeBtn.addEventListener('click', close);
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && lb.classList.contains('open')) close();
    });
  }

  // DSGVO Map: click to load
  const mapBtn = document.querySelector('[data-load-map]');
  const mapBox = document.querySelector('[data-map]');
  if(mapBtn && mapBox){
    mapBtn.addEventListener('click', ()=>{
      const iframe = document.createElement('iframe');
      iframe.title = 'Google Maps';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.style.width='100%';
      iframe.style.height='100%';
      iframe.style.border='0';
      iframe.src = mapBtn.getAttribute('data-src');
      mapBox.innerHTML = '';
      mapBox.appendChild(iframe);
    }, {once:true});
  }
})();