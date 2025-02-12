document.addEventListener(`DOMContentLoaded`, function () {
  const topBtn = document.querySelector(`.top_btn`);

  // 스크롤 어느 지점까지 스크롤 했을때 보여지게 하기
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
      top:0,
      behavior:`smooth`
    })
  });


});