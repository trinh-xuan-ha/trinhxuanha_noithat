
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
  
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const itemlist = $$('.item-list')
itemlist.forEach((tab, index) => {
  tab.onclick = function(){
    $('.item-list.active').classList.remove('active')
    this.classList.add('active')
  }

})
// Lấy phần tử HTML hiển thị số lượng đơn hàng var orderCountElement = document.querySelector('.header-cart-notice'); // Lấy phần tử HTML của nút "MUA HÀNG" var buyButton = document.querySelector('.btn-cart-input'); // Kiểm tra nếu có số lượng đơn hàng đã được lưu trong Session Storage if (sessionStorage.getItem('orderCount')) { // Lấy số lượng đơn hàng từ Session Storage var orderCount = parseInt(sessionStorage.getItem('orderCount')); // Cập nhật số lượng đơn hàng trên phần tử HTML orderCountElement.textContent = orderCount; } else { // Nếu không có dữ liệu trong Session Storage, đặt số lượng đơn hàng về 0 var orderCount = 0; } // Lắng nghe sự kiện click trên nút "MUA HÀNG" buyButton.addEventListener('click', function(event) { event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết // Tăng số lượng đơn hàng lên 1 sau mỗi lần click orderCount++; // Cập nhật số lượng đơn hàng trên phần tử HTML orderCountElement.textContent = orderCount; // Lưu số lượng đơn hàng vào Session Storage sessionStorage.setItem('orderCount', orderCount); });
// const itemlistbtActive = $(".item-list__btn.active");
