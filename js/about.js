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

// Get a reference to the menu and an array of elements
const menu = document.querySelector('.menu');
const elements = document.querySelectorAll('.pick');

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  let value = false;
  // Loop through each element and check if the menu is covering it
  elements.forEach((element) => {
    // Get the bounding rectangles of the menu and the element
    const menuRect = menu.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Check if the menu is covering the element
    const isCovering = (menuRect.top < elementRect.bottom && menuRect.bottom > elementRect.top
   && menuRect.left < elementRect.right && menuRect.right > elementRect.left);
    if (isCovering) {
      value = true;
    }
  });
  if (value === true) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});