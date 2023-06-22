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
// const activapage = window.location.pathname;
// const navlinks = document.querySelectorAll('#navigation .item-list').forEach(link => {

//   if(link.href.includes(`${activapage}`)){
//   link.classList.add('active');
// }
// })
const activapage = window.location.pathname;
const navlinks = document.querySelectorAll('').forEach(li => {
  const link = li.querySelector('a');
  if (link.href.includes(activapage)) {
    li.classList.add('active');
  }
});