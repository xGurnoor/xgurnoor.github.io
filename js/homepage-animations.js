var food=document.querySelector("#food"),desserts=document.querySelector("#desserts"),drinks=document.querySelector("#drinks"),aboutDescription=document.querySelector("#about-description"),card1=document.querySelector("#card-1"),card2=document.querySelector("#card-2"),card3=document.querySelector("#card-3"),newsletterForm=document.querySelector("#newsletter-form"),options=(food.style.opacity="0",desserts.style.opacity="0",drinks.style.opacity="0",aboutDescription.style.opacity="0",card1.style.opacity="0",card2.style.opacity="0",card3.style.opacity="0",newsletterForm.style.opacity="0",{rootMargin:"0px",threshold:.2});function callback(e,t){e.forEach(function(e){switch(e.target.id){case"food":0<e.intersectionRatio&&(food.style.opacity="1",food.className+=" animated slideInUp",t.unobserve(e.target));break;case"desserts":0<e.intersectionRatio&&(desserts.style.opacity="1",desserts.className+=" animated slideInUp",t.unobserve(e.target));break;case"drinks":0<e.intersectionRatio&&(drinks.style.opacity="1",drinks.className+=" animated slideInUp",t.unobserve(e.target));break;case"about-description":0<e.intersectionRatio&&(aboutDescription.style.opacity="1",aboutDescription.className+=" animated fadeInUp",t.unobserve(e.target));break;case"card-1":0<e.intersectionRatio&&(card1.style.opacity="1",card1.className+=" animated slideInUp",t.unobserve(e.target));break;case"card-2":0<e.intersectionRatio&&(card2.style.opacity="1",card2.className+=" animated slideInUp",t.unobserve(e.target));break;case"card-3":0<e.intersectionRatio&&(card3.style.opacity="1",card3.className+=" animated slideInUp",t.unobserve(e.target));break;case"newsletter-form":0<e.intersectionRatio&&(newsletterForm.style.opacity="1",newsletterForm.className+=" animated fadeInUp",t.unobserve(e.target))}})}var observer=new IntersectionObserver(callback,options);observer.observe(food),observer.observe(desserts),observer.observe(drinks),observer.observe(aboutDescription),observer.observe(card1),observer.observe(card2),observer.observe(card3),observer.observe(newsletterForm);