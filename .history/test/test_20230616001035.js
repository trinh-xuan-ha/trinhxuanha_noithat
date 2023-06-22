function changeColor(element) {
    // Xóa lớp 'active' khỏi tất cả các nút
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
  
    // Thêm lớp 'active' vào nút được nhấp vào
    element.classList.add('active');
  }