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