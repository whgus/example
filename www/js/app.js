// This is a JavaScript file

/****************************************
 사이드 메뉴 클릭시 페이지 이동 정의 
 * *************************************/
    window.fn = {};
    
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      menu.open();
    };
    
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load(page)
        .then(menu.close.bind(menu));
    };

/***************************************/

/******************************************
 * 상단 슬라이드 메뉴 부분 
 * ****************************************/



  
  
/*************************************************/

/*************************************************
 * 특정 소설 페이지의 공지사항 클릭 시*
 *************************************************/
 
 document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'home') {
    page.querySelector('#push').onclick = function() {
      document.querySelector('#myNavigator1').pushPage('mainNovel.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'mainNovel') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
   document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainNovel') {
    page.querySelector('.list__item__thumbnail').onclick = function() {
      document.querySelector('#myNavigator2').pushPage('notice.html', {data: {title: '작품공지사항'}});
    };
  } else if (page.id === 'notice') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

