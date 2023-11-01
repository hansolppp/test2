new Swiper('.swiper-video', {
  loop: true,
	navigation: {
	  prevEl: ".swiper-button-prev",
	  nextEl: ".swiper-button-next",
  }
});

$(document).ready(function(){
  let mobileBtn = $('.mobile-btn'),
      navMobile = $('.nav-mobile'),
      layerMask = $('.layer-mask');
  // Mobile Menu
  mobileBtn.click(function(e){
    e.preventDefault();
    let tmp = $(this).hasClass('mobile-btn-active')
    if(tmp){
      $(this).removeClass('mobile-btn-active')
      navMobile.removeClass('active')
      layerMask.removeClass('active')
    }else{
      $(this).addClass('mobile-btn-active')
      navMobile.addClass('active')
      layerMask.addClass('active')
    }
  })
  // window-mask 클릭시
  layerMask.click(function(){
    mobileBtn.removeClass('mobile-btn-active')
    navMobile.removeClass('active')
    layerMask.removeClass('active')
  })

  // 화면사이즈체크
  $(window).resize(function(){
    let tmp = $(window).width()
    if(tmp > 960) {
      mobileBtn.removeClass('mobile-btn-active')
      navMobile.removeClass('active')
      layerMask.removeClass('active')
    }
  })
  // 주메뉴 클릭시 스크롤
  const $menu = $('header ul li'),
        $contents = $('section')
        console.log($contents)
  $menu.click(function(){
    $(this).addClass('on')
    // 메뉴의 해당 li의 인덱스 번호구하기
    let idx = $(this).index()
    let $section = $contents.eq(idx)
    // 현재선택된 section의 위치정보(top)
    let sectionDistance = $section.offset().top - 84
    console.log(sectionDistance)
    $('html, body').animate({
      scrollTop:sectionDistance
    })
  })
  // 윈도우를 스크롤할 때
  $(window).scroll(function(){
    $contents.each(function(){
      console.log($(this).offset().top, $(window).scrollTop()+84)
      if($(this).offset().top <= $(window).scrollTop()+84) {
        let idx = $(this).index();
        $menu.removeClass("on")
        $menu.eq(idx).addClass("on")
        $('.menu-mobile li').removeClass("active")
        $('.menu-mobile li').eq(idx).addClass("active")
      }
    })
  })
  // 모바일메뉴 클릭시 스크롤
  const menuMobile = $('.menu-mobile li')
  menuMobile.click(function(){
    $(this).addClass("active")
    let idx = $(this).index()
    let $section = $contents.eq(idx)
    let sectionDistance = $section.offset().top-84
    console.log(sectionDistance)
    $('html, body').animate({
      scrollTop: sectionDistance
    })
  })
})


$(function(){
  const tabMenu = $('.pad-controls button'),
        tabContent = $('.swiper-video')

  // 링크를 클릭하면 할 일
  tabMenu.click(function(){

    // 전체 li 안에 a의 active 클래스를 제거
    // 방법1
    tabMenu.removeClass('is_active')
    $(this).addClass('is_active')

    tabContent.hide();
    let targetIdx = $(this).index()
    tabContent.eq(targetIdx).show()
  })
  tabMenu.eq(0).trigger('click')
})

$(function(){
  const tabMenu = $('.pad-controls button'),
        tabContent = $('.contents-inner')

  // 링크를 클릭하면 할 일
  tabMenu.click(function(){

    // 전체 li 안에 a의 active 클래스를 제거
    // 방법1
    tabMenu.removeClass('is_active')
    $(this).addClass('is_active')

    tabContent.hide();
    let targetIdx = $(this).index()
    tabContent.eq(targetIdx).show()
  })
  tabMenu.eq(0).trigger('click')
})


$(document).ready(function(){
  // function 함수이름(입력값1, 입력값2, ...){}  
  function skill(id, percent){
    var bar = new ProgressBar.Line(id, {
      strokeWidth: 4,
      trailWidth: 4,
      color: "#FF7360",
      duration: 2400,
      // step: (state, bar) => {
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    bar.animate(percent)
  }
  skill("#Ae", 0.7)
  skill("#Pr", 0.9)
  skill("#Ps", 0.9)
  skill("#Ai", 0.7)
  skill("#FCP", 0.7)
  skill("#c4d", 0.6)
}) 



