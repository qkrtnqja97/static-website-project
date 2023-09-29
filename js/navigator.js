
  function navigo() {
    console.log('navigo');
    const headerheight = 200;
    document.addEventListener('scroll', onScroll, { passive: true });
    function onScroll() {
      const scrollposition = window.scrollY;
      console.log(scrollposition);
      const nav = document.getElementById('scrollNav');
      if (headerheight <= scrollposition) {
        nav.style.display = 'block';
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.boxShadow = '0px 0px 10px 0px';
      }
      else {
        nav.style.display = 'none';
      }
    }




  }
  navigo();