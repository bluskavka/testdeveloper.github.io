$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        if (formID == 'form-autoback') {
            var formNm = $('#' + formID);
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки
                    $('#form-autoback .fmtext').html('<p class="fmtext success">Спасибо за отправку вашего сообщения!<br/><br/></p>'); 
                },
                error: function (jqXHR, text, error) {
                    // Вывод текста ошибки отправки
                    $(formNm).html(error);         
                }
            });
        } else {
            var formNm = $('#' + formID);
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки
                    $(formNm).html(data); 
                },
                error: function (jqXHR, text, error) {
                    // Вывод текста ошибки отправки
                    $(formNm).html(error);         
                }
            });
        };
        
        return false;
    });
});
