$(document).ready(function () {



           let pattern = /^[a-z0-9_-_.]+@[a-z0-9-]+\.[a-z]{2,6}$/i;

           let mail = $('#exampleInputEmail1');


        mail.blur(function(){
            if(mail.val() != ''){
                if(mail.val().search(pattern) == 0){
                    $('#valid').text('Подходит');
                    $("#exampleInputEmail1").css("border", "1px solid green");
                    $('#submit').attr( false);

                    mail.removeClass('error').addClass('ok');
                }else{
                    $('#valid').text('Не подходит');
                    $("#exampleInputEmail1").css("border", "1px solid red");
                    $('#submit').attr('disabled', true);

                    mail.addClass('ok');
                }

            }else{

                $('#valid').text('Поле e-mail не должно быть пустым!');
                mail.addClass('error');
                $('#submit').attr('disabled', true);
            }
        });





    /* smooth scrolling for scroll to top */
    $('#to-top').bind('click', function()
    {
        $('body,html').animate({
                scrollTop: 0},
            1500);



    });
    });
