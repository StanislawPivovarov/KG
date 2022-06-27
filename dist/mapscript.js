"use strict";

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.651574, 37.573856],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),
      // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/13/pointer.png',
    // Размеры метки.
    iconImageSize: [52, 70],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});