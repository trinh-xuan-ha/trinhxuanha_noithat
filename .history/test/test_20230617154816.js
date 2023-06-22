var buttons = document.querySelectorAll('.item-list__btn');
var currentURL = window.location.href;

buttons.forEach(function(button) {
  var href = button.getAttribute('href');
  
  // Kiểm tra nếu href của nút trùng với URL hiện tại
  if (currentURL.indexOf(href) !== -1) {
    button.classList.add('active');
  }
  
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

    // Xóa class 'active' khỏi tất cả các nút
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm class 'active' cho nút được click
    this.classList.add('active');

    // Lấy href của nút được click
    var href = this.getAttribute('href');

    // Chuyển trang
    window.location.href = href;
  });
});