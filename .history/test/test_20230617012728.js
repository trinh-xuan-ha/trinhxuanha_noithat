var buttons = document.querySelectorAll('.item-list__btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

    // Xóa class 'active' khỏi tất cả các nút
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm class 'active' cho nút được click
    this.classList.add('active');
  });
});