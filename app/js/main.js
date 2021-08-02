$(function () {
  $(".slider").slick({
    dots: true,
  });

  $(".search__number").click(function () {
    $(".search__number").addClass("search__filter-active");
    $(".search__brand").removeClass("search__filter-active");
    $(".search__product").removeClass("search__filter-active");
    $("input").attr("placeholder", "Введите номер");
  });
  $(".search__brand").click(function () {
    $(".search__number").removeClass("search__filter-active");
    $(".search__brand").addClass("search__filter-active");
    $(".search__product").removeClass("search__filter-active");
    $("input").attr("placeholder", "Введите марку");
  });
  $(".search__product").click(function () {
    $(".search__number").removeClass("search__filter-active");
    $(".search__brand").removeClass("search__filter-active");
    $(".search__product").addClass("search__filter-active");
    $("input").attr("placeholder", "Введите название товара");
  });

  $(".category__item").hover(
    function () {
      $(this).addClass("category__item-active");
    },
    function () {
      $(this).removeClass("category__item-active");
    }
  );

  $(".card").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
  });
});
