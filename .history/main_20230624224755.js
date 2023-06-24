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
// const navlinks = document.querySelectorAll('.item-list__btn').forEach(link => {

//   if(link.href.includes(`${activapage}`)){
//   link.classList.add('active');
// }
// })
// const activapage = window.location.pathname;
// const navlinks = document.querySelectorAll('.item-list').forEach(link => {
//   const anchorTag = link.querySelector('.item-list__btn');
//   if (anchorTag.href.includes(activapage)) {
//     link.classList.add('active');
//   }
// });
// const activapage = window.location.pathname;
// const listItems = document.querySelectorAll('#navigation .item-list').forEach(listItem => {
//   const link = listItem.querySelector('.item-list__btn');

//   if (link.href.includes(`${activapage}`)) {
//     listItem.classList.add('active');
//   }
// });
  // Lấy phần tử HTML hiển thị số lượng đơn hàng
  var orderCountElement = document.querySelector('.header-cart-notice');
  
  // Lấy phần tử HTML của nút "MUA HÀNG"
  var buyButton = document.querySelector('.btn-cart-input');
  
  // Kiểm tra nếu có số lượng đơn hàng đã được lưu trong Session Storage
  if (sessionStorage.getItem('orderCount')) {
    // Lấy số lượng đơn hàng từ Session Storage
    var orderCount = parseInt(sessionStorage.getItem('orderCount'));
    
    // Cập nhật số lượng đơn hàng trên phần tử HTML
    orderCountElement.textContent = orderCount;
  } else {
    // Nếu không có dữ liệu trong Session Storage, đặt số lượng đơn hàng về 0
    var orderCount = 0;
  }
  
  // Lắng nghe sự kiện click trên nút "MUA HÀNG"
  buyButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  
    // Tăng số lượng đơn hàng lên 1 sau mỗi lần click
    orderCount++;
    
    // Cập nhật số lượng đơn hàng trên phần tử HTML
    orderCountElement.textContent = orderCount;
    
    // Lưu số lượng đơn hàng vào Session Storage
    sessionStorage.setItem('orderCount', orderCount);
  });
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const itemlistbtn = $$("item-list__btn");

const itemlistbtActive = $(".item-list__btn.active");
