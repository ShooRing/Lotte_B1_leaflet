const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const foodTab = () => {
  let $Tab = getAll('.food .Tab li');
  let $List = getAll('.food .listBox li');

  
  $Tab.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      $Tab.forEach((item) => {
        item.classList.remove('on');
      });
     
      e.currentTarget.classList.add('on');

      
      $List.forEach((item) => {
        item.classList.remove('on');
      });
      
      $List[index].classList.add('on');
    });
  });
};

const handleScroll = () => {
  const $topbtn = get('.topbtn');
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  
  if (scrollPosition >= pageHeight * 0.8) {
    $topbtn.style.display = 'block'; 
  } else {
    $topbtn.style.display = 'none'; 
  }

};

const footerTop = () => {
  let $maintop = get('.topbtn');

  $maintop.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const mainInit = () => {
  foodTab();
  footerTop();

  
  window.addEventListener('scroll', handleScroll);
};

// 함수 실행
(() => {
  mainInit();
})();