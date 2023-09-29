window.onload = function(){

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
      start += 1;

    }, 50);
  }
  console.log('counter');
  counter();
}