ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.651574, 37.573856],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent:'<p class="adress-header">Адрес центра:</p>'+'<p class="adress-adress">ул. Новая, д.58 <br>Режим работы: ежедневно <br>с 10:00 до 18:00</p>'
         },{
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/13/pointer.png',
            // Размеры метки.
            iconImageSize: [52, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
            hideIconOnBalloonOpen: false
            
         } 
);
       
            // Опции.
            // Необходимо указать данный тип макета.
            
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);placemark.balloon.open();
});