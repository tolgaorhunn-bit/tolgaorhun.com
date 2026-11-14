(() => {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });

  /* ---------- Contact page: WhatsApp link ---------- */
  const WA_NUMBER = ''; // digits only with country code, e.g. '974XXXXXXXX'
  const params = new URLSearchParams(location.search);
  const selected = params.get('stone');
  const whats = document.querySelector('#contact-whatsapp');
  if (whats) {
    const chosen = document.querySelector('#chosen-stone');
    if (selected && chosen) {
      chosen.hidden = false;
      chosen.textContent = 'Your selected gemstone: ' + selected;
    }
    if (WA_NUMBER) {
      whats.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(
        'Hello Diamonite, I would like to arrange a private consultation' +
        (selected ? ' about ' + selected : '') + '.');
      whats.removeAttribute('aria-disabled');
      document.querySelector('.contact-note')?.remove();
    } else {
      whats.addEventListener('click', (e) => e.preventDefault());
    }
  }

  /* ---------- Gemstones page ---------- */
  const list = document.querySelector('#stone-list');
  if (!list) return;

  const mobile = window.matchMedia('(max-width: 760px)');
  const title = document.querySelector('#stone-title');
  const description = document.querySelector('#stone-description');
  const photo = document.querySelector('#stone-photo');
  const contact = document.querySelector('#stone-contact');
  const feed = document.querySelector('#stone-feed');
  const floating = document.querySelector('#floating-contact');
  const floatingLabel = document.querySelector('#floating-contact-label');

  const contactHref = (s) => 'contact.html?stone=' + encodeURIComponent(s.name);

  fetch('stones.json')
    .then((r) => {
      if (!r.ok) throw Error('Could not load gemstone data');
      return r.json();
    })
    .then((stones) => {
      let current = -1;
      let lockUntil = 0; // ignore scroll-spy while a tab tap is scrolling the page

      // Tabs / sidebar buttons
      const buttons = stones.map((stone, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'stone-choice';
        b.textContent = stone.name;
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', () => {
          if (mobile.matches) {
            lockUntil = Date.now() + 900;
            setActive(i);
            sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            choose(i);
          }
        });
        list.append(b);
        return b;
      });

      // Mobile: one section per stone, scrolled vertically
      const sections = stones.map((s) => {
        const sec = document.createElement('section');
        sec.className = 'feed-stone';
        sec.id = 'stone-' + s.slug;
        sec.innerHTML =
          '<div class="feed-image"><img loading="lazy" alt=""><div class="photo-note">DESIGN INSPIRATION</div></div>' +
          '<div class="feed-copy"><h2></h2><p></p></div>';
        const img = sec.querySelector('img');
        img.src = 'assets/' + s.slug + '.webp';
        img.alt = 'Editorial jewellery styling inspiration for ' + s.name + '; not a photograph of inventory';
        sec.querySelector('h2').textContent = s.name;
        sec.querySelector('p').textContent = s.description;
        feed?.append(sec);
        return sec;
      });

      // Highlight a tab and keep it visible in the horizontal strip
      function setActive(i) {
        if (i === current) return;
        current = i;
        const s = stones[i];
        buttons.forEach((b, j) => {
          b.classList.toggle('active', i === j);
          b.setAttribute('aria-pressed', String(i === j));
        });
        if (mobile.matches) {
          const b = buttons[i];
          list.scrollTo({ left: b.offsetLeft - (list.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' });
        }
        if (floating) {
          floating.href = contactHref(s);
          floatingLabel.textContent = 'ASK ABOUT ' + s.name.toUpperCase();
        }
        history.replaceState(null, '', '?stone=' + encodeURIComponent(s.slug));
      }

      // Desktop: swap the single image/description panel
      function choose(i) {
        const s = stones[i];
        setActive(i);
        title.textContent = s.name.toUpperCase();
        description.textContent = s.description;
        photo.src = 'assets/' + s.slug + '.webp';
        photo.alt = 'Editorial jewellery styling inspiration for ' + s.name + '; not a photograph of inventory';
        contact.href = contactHref(s);
      }

      // Mobile scroll-spy: the stone crossing the middle of the screen is active
      const spy = new IntersectionObserver((entries) => {
        if (!mobile.matches || Date.now() < lockUntil) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(sections.indexOf(e.target));
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => spy.observe(s));

      // Initial stone (from ?stone=slug)
      const first = Math.max(0, stones.findIndex((s) => s.slug === selected));
      choose(first);
      current = -1;
      setActive(first);
      if (mobile.matches && first > 0) {
        lockUntil = Date.now() + 600;
        sections[first].scrollIntoView({ block: 'start' });
      }
    })
    .catch(() => {
      list.textContent = 'Gemstones could not be loaded. Please refresh the page.';
    });
})();
