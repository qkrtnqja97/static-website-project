function navigo() {
  console.log('navigo');
  const header = document.querySelector('header');
  const headerheight = header.clientHeight;
  const productpartPoint = window.innerHeight * 0.8;
  document.addEventListener('scroll', onScroll, { passive: true });
  function onScroll() {
    const scrollposition = window.pageYOffset;
    console.log(scrollposition);
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
    
  }

}

let $experience_year = 

const counter = ($experience_year, max) => {
  let now = max;

  const handle = setInterval(() => {
    $experience-year.innerHTML = Math.ceil(max - now);

    if (now < 1) {
      clearInterval(handle);
    }

    const step = now / 10;

    now -= step;
  }, 50);
}

function cal_year() {
  let startYear = document.getElementById('start-year').textContent;
  let currentYear = new Date().getFullYear();
  let cal_year = currentYear - parseInt(startYear);

  let experiencYear = document.getElementById('experience-year');
  for (let i = 0; i <= cal_year; i++){
    experiencYear.innerHTML = cal_year;    
  }
}
cal_year()