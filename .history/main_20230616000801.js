// alert('trịnh xuân hà')
function toggleCheckboxes(checkbox) {
    var url = './webnoithat.html'
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox' && checkboxes[i] != checkbox) {
            checkboxes[i].checked = false;
        }
    }
    checkbox.checked = true;
    
}

const links = document.querySelectorAll('contact--btn');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    links.forEach(l => {
      l.classList.remove('btn btn--primary');
    });

    link.classList.add('btn btn--primary');

  });
});
// var navigation_img_one = document.querySelectorAll('#navbar .navigation-img-one');
// navigation_img_one.forEach(function(element)
// {
//   element.addEventListener('click',function()
//   {
//     window.location.href = './family.html';
//   });
// });
function changeColor(element) {
  if (!element.classList.contains('active')) {
    var navButtons = document.getElementsByClassName('item-list__btn');
    for (var i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove('active');
    }
    element.classList.add('active');
  }
}