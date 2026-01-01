const products = [
    {
      title: 'Outside Vibes T-Shirt Sunshine',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1492446190781-58ac4285911d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Hike Bottle Outside Vibes Forest Green',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller',
      promo: 'Save 15%'
    },
    {
      title: 'Rest in Nature T-Shirt Charcoal',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Outside Vibes Cap Forest Green',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller',
      promo: 'Save 15%'
    },
    {
      title: 'Vintage Ride T-Shirt Charcoal',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1471440671318-55bdbb772f93?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Trail Runner Knit Crimson',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Minimalist Shades Matte Black',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1450297350677-623de575f31c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller',
      promo: 'Save 10%'
    },
    {
      title: 'Citrus Pop Tee',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Skyline Shades Graphite',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    },
    {
      title: 'Studio Wireless Headphones',
      price: '$104.95',
      primaryImage: 'https://images.unsplash.com/photo-1495305379050-64540d6ee95d?auto=format&fit=crop&w=1200&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80',
      badge: 'Best Seller'
    }
  ];
  
  const grid = document.getElementById('productGrid');
  const showMoreBtn = document.getElementById('showMoreBtn');
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  
  const starIcon = `<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path d="M10 1.5l2.472 5.008 5.528.804-4 3.896.944 5.51L10 13.75l-4.944 2.968.944-5.51-4-3.896 5.528-.804L10 1.5z"/></svg>`;
  
  function renderProducts() {
    grid.innerHTML = '';
    products.forEach((product, index) => {
      const hiddenClass = index >= 4 ? 'hidden md:block' : '';
      const promoBadge = index % 2 === 1 ? 'Save 15%' : null;
      const badges = `
        <div class="absolute left-3 right-3 top-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-gray-900">
          ${product.badge ? `<span class="badge-default rounded-full px-2 py-1 shadow-sm">${product.badge}</span>` : '<span></span>'}
          ${promoBadge ? `<span class="badge-promo rounded-full px-2 py-1 shadow-sm">${promoBadge}</span>` : '<span></span>'}
        </div>
      `;
      const stars = `<div class="flex items-center gap-1 text-amber-500">${starIcon.repeat(5)}</div>`;
      const card = document.createElement('article');
      card.className = `product-card relative flex w-[165px] min-w-[165px] max-w-[165px] h-[260px] cursor-pointer flex-col rounded-[10px] bg-white pb-3 transition duration-300 hover:-translate-y-1 focus:outline-none ${hiddenClass} md:w-[355px] md:min-w-[355px] md:max-w-[355px] md:h-[467px] md:pb-4 md:snap-start`;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', product.title);
      card.innerHTML = `
        <div class="relative h-[165px] w-[165px] overflow-hidden rounded-[10px] md:h-[355px] md:w-[355px]">
          ${badges}
          <img src="${product.primaryImage}" alt="${product.title}" class="primary-img h-full w-full object-cover transition-opacity duration-300 ease-in-out rounded-[10px]">
          <img src="${product.secondaryImage}" alt="${product.title} alternate view" class="secondary-img absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out rounded-[10px]">
        </div>
        <div class="flex h-[80px] flex-col justify-between gap-2 p-3 md:p-4">
          <div class="space-y-1">
            <h3 class="font-[400] text-[14px] leading-tight text-gray-900 w-[149px] h-[22px] overflow-hidden whitespace-nowrap text-ellipsis uppercase tracking-[0.03em] md:text-[18px] md:w-[331px]" style="font-family: 'Bebas Neue', sans-serif;">${product.title}</h3>
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-semibold leading-tight text-gray-900 w-[149px] h-[22px] overflow-hidden whitespace-nowrap text-ellipsis md:text-base md:w-[331px]">[Review Widget i.e Judgeme]</h3>
          </div>
          <div class="flex items-center justify-start text-sm text-gray-700">
            <p class="text-[14px] font-[500] leading-[1] uppercase text-gray-900 md:text-[16px]" style="font-family: 'Poppins', sans-serif;">${product.price}</p>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  function setupHoverSwap() {
    if (!supportsHover) return;
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const primary = card.querySelector('.primary-img');
      const secondary = card.querySelector('.secondary-img');
      card.addEventListener('mouseenter', () => {
        primary.classList.add('opacity-0');
        secondary.classList.remove('opacity-0');
      });
      card.addEventListener('mouseleave', () => {
        primary.classList.remove('opacity-0');
        secondary.classList.add('opacity-0');
      });
    });
  }
  
  function setupShowMore() {
    if (!showMoreBtn) return;
    showMoreBtn.addEventListener('click', () => {
      const hiddenCards = [...document.querySelectorAll('.product-card.hidden')];
      hiddenCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.remove('hidden');
          card.classList.add('animate-fadeIn');
        }, index * 80);
      });
      showMoreBtn.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        showMoreBtn.style.display = 'none';
      }, 250);
    });
  }
  
  function handleKeyboardHover() {
    if (supportsHover) return;
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const primary = card.querySelector('.primary-img');
      const secondary = card.querySelector('.secondary-img');
      card.addEventListener('focus', () => {
        primary.classList.add('opacity-0');
        secondary.classList.remove('opacity-0');
      });
      card.addEventListener('blur', () => {
        primary.classList.remove('opacity-0');
        secondary.classList.add('opacity-0');
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupHoverSwap();
    setupShowMore();
    handleKeyboardHover();
  });
  
  