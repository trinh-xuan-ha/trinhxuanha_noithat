var buttons = document.querySelectorAll('button');

// Gán sự kiện click cho từng nút
var buttons = document.querySelectorAll('button');

// Gán sự kiện click cho từng nút
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Xóa class 'active' khỏi tất cả các nút
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm class 'active' cho nút được click
    this.classList.add('active');
  });
});