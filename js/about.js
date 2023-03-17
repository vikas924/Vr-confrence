function showhide() {
  const element = document.querySelector('#logo');
  const closemenu = document.querySelector('.mobile-menu');
  if (element.style.visibility !== 'hidden') {
    element.style.visibility = 'hidden';
    closemenu.style.visibility = 'visible';
    closemenu.style.height = '60%';
  } else if (element.style.visibility === 'hidden') {
    closemenu.style.height = '0';
    setTimeout(() => {
      closemenu.style.visibility = 'hidden';
      element.style.visibility = 'visible';
    }, 200);
  }
}

const openMenu = document.querySelector('#logo');
openMenu.addEventListener('click', showhide);

const closeMenu = document.querySelector('.menu-button');
closeMenu.addEventListener('click', showhide);
