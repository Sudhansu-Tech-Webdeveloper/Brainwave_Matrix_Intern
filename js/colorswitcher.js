// Color Switcher Functionality
document.querySelector('.switcher-btn').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
  };

  let themeButtons = document.querySelectorAll('.theme-buttons');
  themeButtons.forEach(color => {
      
     color.addEventListener('click', () =>{

      let dataColor = color.getAttribute('data-color');
      let secondarydataColor = color.getAttribute('secondary-data-color');
      document.querySelector(':root').style.setProperty('--primary-color', dataColor);
      document.querySelector(':root').style.setProperty('--secondary-color', secondarydataColor);

     });

  });