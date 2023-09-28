
  function navigo() {
    console.log('navigo');
    const header = document.querySelector('header');
    const headerheight = header.clientHeight;
    const productpartPoint = window.innerHeight * 0.8;
    document.addEventListener('scroll', onScroll, { passive: true });
    function onScroll() {
      const scrollposition = window.pageYOffset;
      about_us = document.getElementById('about-us');
      console.log(about_us.getBoundingClientRect().top);
      console.log(scrollposition);
      if(scrollposition == about_us.getBoundingClientRect().top - screen.availHeight/2) {
        
      }
      


      
      /*
      const nav = document.getElementById('navigator');
      if (headerheight <= scrollposition) {
        if (productpartPoint <= scrollposition){
          nav.style.backgroundColor= 'skyblue';
        }
        else {
          nav.style.backgroundColor = '#FFFFFF';
        }
        nav.style.borderBottomLeftRadius = '50%';
        nav.style.borderBottomRightRadius = '50%';
        nav.style.opacity = 0.8;
        nav.style.display = 'flex';
        nav.style.position = 'fixed';
        nav.style.left = `${window.innerWidth/2 - nav.offsetWidth/2}px`;
        console.log(nav.style.left);
      }
      else {
        nav.style.position = 'none';
        nav.style.display = 'none';
      }
      */
      
    }

  }

  
  const counter = () => {
    let startYear = document.getElementById('start-year').textContent;
    let currentYear = new Date().getFullYear();
    let cal_Year = currentYear - parseInt(startYear);
    let start = 0;
    let experiencYear = document.getElementById('experience-year');
    
    const handle = setInterval(() => {
      experiencYear.innerHTML = start;

      if (start >= cal_Year) {
        clearInterval(handle);
      }
      start +=1 ;

    }, 50);
  }

  counter();

  /*
  function cal_year() {
    let startYear = document.getElementById('start-year').textContent;
    let currentYear = new Date().getFullYear();
    let cal_year = currentYear - parseInt(startYear);

    for (let i = 0; i <= cal_year; i++){
      experiencYear.innerHTML = cal_year;    
    }
  }
  cal_year()
  */
 navigo();