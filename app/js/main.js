$(function () {
  // слайд заголовок
  $(".slider").slick({
    dots: true,
  });

  // переключение поиск
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

  // hover эффект на категории
  $(".category__item").hover(
    function () {
      $(this).addClass("category__item-active");
    },
    function () {
      $(this).removeClass("category__item-active");
    }
  );

  // слайдер товаров
  $(".card").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
  });

  // модальное окно
  $(".card__form").click(function () {
    $(".modal-popup").fadeIn();
    $(".popup-overlay").fadeIn();
  });
  $(".popup-close").click(function () {
    $(".modal-popup").fadeOut();
    $(".popup-overlay").fadeOut();
  });
  $(".popup-overlay").click(function () {
    $(".modal-popup").fadeOut();
    $(".popup-overlay").fadeOut();
  });
  $(".modal-btn").click(function () {
    alert(
      "При поступлении товара на указанный e-mail отправим почту. Спасибо!"
    );
  });

  // hover эффект на карточки
  $(".card__item").hover(
    function () {
      $(this).addClass("card__hover");
    },
    function () {
      $(this).removeClass("card__hover");
    }
  );
  $(".card__content").hover(
    function () {
      $(this).prepend(
        '<div class="card__hover-link"><a href="#">посмотреть товар</a></div>'
      );
    },
    function () {
      $(this).find($('.card__hover-link')).remove();
    }
  );
});
