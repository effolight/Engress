const btn = document.querySelector('.toggle-btn');
const header = document.querySelector('.header__inner');
const mask = document.querySelector('.mask');
btn.addEventListener('click', function() {
  btn.classList.toggle('active');
  header.classList.toggle('panelactive');
  mask.classList.toggle('active');
})

// アコーディオン
const question = document.querySelectorAll('.faq__header');
function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('active');
  content.classList.toggle('open');
  }

  for (let i = 0; i < question.length; i ++){
    question[i].addEventListener('click', toggle)
  }


  
