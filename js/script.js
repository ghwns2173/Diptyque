document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // top버튼
  const topBtn = document.querySelector(`.top_btn`);

  window.addEventListener(`scroll`, function () {
    const scrollTop = window.scrollY;
    

    if (scrollTop >= 300) {
      topBtn.classList.add(`scroll`);
    } else {
      topBtn.classList.remove(`scroll`);
    }
  });

  topBtn.addEventListener(`click`, function () {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    })
  });

  // --------------------------------------------------

  // 사이드 메뉴
  const menuBtn = document.querySelector(`.m_btn`);
  const gnbMenu = document.querySelector(`.gnb`);

  menuBtn.addEventListener(`click`, function () {
    this.classList.toggle(`active`);
    const hasClass = this.classList.contains(`active`);
    if (hasClass) {
      gnbMenu.classList.add(`active`);
    } else {
      gnbMenu.classList.remove(`active`);
    }
  });


  // --------------------------------------------------
  // sub_menu 영역
  const submenuTab = document.querySelectorAll(`.gnb li`);
  const submenuBox = document.querySelector(`.sub_menu_box`);

  for (const li of submenuTab) {
    li.addEventListener(`mouseenter`, function () {
      submenuBox.classList.add(`active`);

      // 탭메뉴 연결
      const tab = this.getAttribute(`data-tab`);
      const subMenu = document.querySelectorAll(`.sub_menu`);

      for (const tabContent of subMenu) {
        tabContent.classList.remove(`active`);
      }

      // data-tab 에 작성된 데이터명과 동일한 아이디명을 가진 서브메뉴는 출력
      // const changeTab = document.getElementById(tab);
      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`active`);
    });
  }
  submenuBox.addEventListener(`mouseleave`, function () {
    this.classList.remove(`active`);
  });

  // --------------------------------------------------
  //  sec2번 tab
  const tabLi = document.querySelectorAll(`.tab_box li`);

  // 추가 제거 부분
  for (const li of tabLi) {
    li.addEventListener(`click`, function () {
      this.classList.add(`tabOn`);

      for (const siblings of tabLi) {
        if (siblings != this) {
          siblings.classList.remove(`tabOn`);
        }
      }
      // 탭 연결
      const tabData = this.getAttribute(`data-alt`);
      const menuList = document.querySelectorAll(`.swiper_wrap`);

      for (const tabContent of menuList) {
        tabContent.classList.remove(`tabOn`);
      }
      const changeTab = document.getElementById(tabData);
      changeTab.classList.add(`tabOn`);
    });

  }

  // --------------------------------------------------


  // // sec2번 슬라이드
  // new Swiper(".listSwiper", {

  // });

  // 스와이퍼 변수선언
  let swiper = undefined;

  // 선언식 함수
  function initSwiper() {
    // 윈도우에 너비를 변수에 저장
    const windowWidth = window.innerWidth;

    // 스와이퍼가 윈도우 960이상이면 작동하고 미만이면 작동중지
    if (windowWidth >= 960 && swiper == undefined) {
      // 스와이퍼
      swiper = new Swiper(".listSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 4,
        // spaceBetween: 20,

      });
    } else if (windowWidth < 960 && swiper != undefined) {
      swiper.destroy();
      swiper = undefined;
    }
  }

  // 함수 전역 호출
  initSwiper();


  // 윈도우 리사이즈 될때 스와이퍼 자동 반응설정
  window.addEventListener(`resize`, () => {
    initSwiper(); // 함수 지역호출
  });




}); //end