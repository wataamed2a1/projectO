document.querySelector().animate(
    [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ],
    {
      duration: 1000,
      easing: 'linear',
      iterations: Infinity
    }
  );