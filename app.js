
//*************************************************************** */
//**********************ВАЛИДАТОР******************************** */
//*************************************************************** */

var errors = [];
var errorMass = {
    name: "errorName",
    email: "errorEmail",
    phone: "errorPhone",
    web: "errorWeb",
};


$(function () {
    $("#contact-submit").click(function () {
        //Перед началом, если в форме остались ошибки - очищаем.
        if (errors.length > 0) {
            $('.error').remove();
            $('.errorBorder').removeClass();
            errors = [];
        }

        var name = $('input[name="name"]').val();
        var mail = $('input[name="email"]').val();
        var phone = $('input[name="phone"]').val();
        var web = $('input[name="web"]').val();


        //Регулярки для валидации
        var regMail = /^(\w.?|)+(@)+(\w+.\w{2,5})/g;
        var regName = /^[a-z,A-Z,а-я,А-Я]+/g;
        var regPhone = /\+\d\(\d{3}\)\d{3}-\d{4}/g;
        var regWeb = /^(http:\/\/)?(www\.)?\w+\.(com|ru|net|io)$/gm;

        //Валидация имени
        if (!regName.test(name)) {
            errors.push(errorMass.name);
            for (var i = 0; i < errors.length; i++) {
                if (errors[i] == 'errorName') {
                    $('input[name="name"]').after('<div class="error">' + 'Не верно указано имя' + '</div>');
                    $('input[name="name"]').addClass('errorBorder');
                }
            }
        }

        //Валидация почтового адреса
        if (!regMail.test(mail)) {
            errors.push(errorMass.email);
            for (var i = 0; i < errors.length; i++) {
                if (errors[i] == 'errorEmail') {
                    $('input[name="email"]').after('<div class="error">' + 'Не верно указан Email' + '</div>');
                    $('input[name="email"]').addClass('errorBorder');
                }
            }
        }

        //Валидация номера телефона
        if (!regPhone.test(phone)) {
            errors.push(errorMass.phone);
            for (var i = 0; i < errors.length; i++) {
                if (errors[i] == 'errorPhone') {
                    $('input[name="phone"]').after('<div class="error">' + 'Введите телефон в формате: +7(000)000-0000' + '</div>');
                    $('input[name="phone"]').addClass('errorBorder');
                }
            }
        }

        //Валидация адреса сайта
        if (!regWeb.test(web)) {
            errors.push(errorMass.web);
            for (var i = 0; i < errors.length; i++) {
                if (errors[i] == 'errorWeb') {
                    $('input[name="web"]').after('<div class="error">' + 'Не верно указан адрес сайта' + '</div>');
                    $('input[name="web"]').addClass('errorBorder');
                }
            }
        }

        console.log(errors);
        if (errors.length == 0) {
            alert('Все верно, форма отправлена!');
            document.location.reload(true)
        }
    });
});