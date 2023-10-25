const hotspotsArray = {
  'hotspot 1': {
    title: 'New Innovation Fastest Charger',
    description: 'Say goodbye to waiting. Our New Innovation Fastest Charger lets you enjoy hours of music with just a few minutes of charge. Get back to your life, powered by the quickest charging technology available.',
    img: null
  },
  'hotspot 2': {
    title: '8D Dynamic Revolution Sound System',
    description: 'Immerse yourself in the 8D Dynamic Revolution Sound System. Each earbud is engineered to provide a multi-dimensional audio experience, taking your music and podcasts to a whole new level.',
    img: null
  },
  'hotspot 3': {
    title: 'Fastest Bluetooth Chip',
    description: 'Never miss a beat with our Fastest Bluetooth Chip. Experience real-time audio with zero lag, making sure your devices are always in sync and ready to deliver top-notch sound.',
    img: 'images/chip-img.jpg'
  },
  'hotspot 4': {
    title: 'Gold Metal Logotype',
    description: 'Elegance meets functionality. Our Gold Metal logotype is not just a brand—it is a statement. Show off your impeccable taste while enjoying the best audio experience.',
    img: null
  }
};

document.querySelectorAll('.HotspotAnnotation').forEach(annotation => {
  gsap.set(annotation, {autoAlpha: 0});
});

// Added mouseover and mouseout events
document.querySelectorAll('.Hotspot').forEach(hotspot => {
  hotspot.addEventListener('mouseover', function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    gsap.to(annotation, {duration: 0.5, autoAlpha: 1});
  });
  
  hotspot.addEventListener('mouseout', function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    gsap.to(annotation, {duration: 0.5, autoAlpha: 0});
  });
});


