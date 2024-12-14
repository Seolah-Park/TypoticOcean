$(document).ready(function() {
   // 사이드바 영역 클릭 시 열리고 접히는 기능
   $("#sidebar-wrapper").click(function(e) {
      e.preventDefault(); // 기본 동작 방지
      $("#wrapper").toggleClass("toggled"); // toggled 클래스 추가/삭제
   });

   // 사이드바 외부를 클릭하면 닫히도록 처리
   $(document).click(function(e) {
      if (!$(e.target).closest("#sidebar-wrapper").length) {
         $("#wrapper").removeClass("toggled");
      }
   });

   // 기존 메뉴 초기화 유지
   function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      $('#menu li a').click(function() {
         var checkElement = $(this).next();
         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
         }
         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
         }
      });
   }

   initMenu();
});

window.onload = function() {
  var fishShapes = document.querySelectorAll('.fish-shape1, .fish-shape2, .fish-shape3, .fish-shape4, .fish-shape5, .fish-shape6, .fish-shape7, .fish-shape8, .fish-shape9, .fish-shape10, .fish-shape11, .fish-shape12, .fish-shape13, .fish-shape14, .fish-shape15, .fish-shape16, .fish-shape17');
  
  fishShapes.forEach(function(img, index) {
    setTimeout(function() {
      img.style.left = '0';  // 각 이미지를 화면 왼쪽 끝으로 이동
    }, index * 500); // 이미지마다 0.5초씩 딜레이를 주어 순차적으로 움직이게 설정
  });
};
