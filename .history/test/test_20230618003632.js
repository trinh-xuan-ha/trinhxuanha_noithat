// const activapage = window.location.pathname;
// const navlinks = document.querySelectorAll('.item-list__btn').forEach(link => {

//   if(link.href.includes(`${activapage}`)){
//   link.classList.add('active');
// }
// })
// const activapage = window.location.pathname;
// const navlinks = document.querySelectorAll('.item-list__btn').forEach(link => {

//   if(link.href.includes(`${activapage}`)){
//   link.classList.add('active');
// }
// })
const activapage = window.location.pathname;
const listItems = document.querySelectorAll('.item-list').forEach(listItem => {
  const link = listItem.querySelector('.item-list__btn');

  if (link.href.includes(`${activapage}`)) {
    listItem.classList.add('active');
  }
});