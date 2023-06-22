var buttons = document.querySelectorAll('.item-list__btn');
var currentURL = window.location.href;

buttons.forEach(function(button) {
  var href = button.getAttribute('href');
  
  // Kiểm tra nếu href của nút trùng với URL hiện tại
  if (currentURL.indexOf(href) !== -1) {
    button.classList.add('active');
    button.style.color = 'red'; // Đổi màu sắc của nút thành màu đỏ
  }
  
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    
    // Kiểm tra xem nút đã có class 'active' hay chưa
    var isActive = this.classList.contains('active');

    // Xóa class 'active' khỏi tất cả các nút
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.style.color = 'black'; // Đổi màu sắc của tất cả các nút thành màu đen
    });

    // Nếu nút chưa có class 'active', thêm class và giữ màu đỏ
    if (!isActive) {
      this.classList.add('active');
      this.style.color = 'red'; // Đổi màu sắc của nút thành màu đỏ
    }

    // Lấy href của nút được click
    var href = this.getAttribute('href');

    // Chuyển trang
    // Chờ 500ms trước khi chuyển trang để cho màu sắc được cập nhật trước đó
  });
});