$(function(){

    $('.header-slider').slick({
        arrows: false, //убрали стрелочьки у слайда
        vertical: true,//слайдер прокручикается вертикально
        dots: true,//сделали кнопки прокрутки слайда
        dotsClass: 'header-dots', //изменили клас прокрутки слайда
        autoplay: 3000 //авто прокрутка слайда
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();//плавно при клике кнопки появляется меню 
    });

});