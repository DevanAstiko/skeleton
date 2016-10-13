$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        var formData = new FormData($("#loginForm")[0]);
        var url = $('#loginForm').attr('action') + 'login/dologin';
        $('#loginButton').attr('disabled', true);
        $.ajax({
            url: url,
            type: 'post',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
        }).done(function (data) {
            if (data.st == 0){
                $('#loginalert').html(data.msg);
                $('#loginButton').attr('disabled', false);
                $('#loginalert').show('fast');
                $('#loginalert').delay('5000').hide('fast');
            } else {
                window.location.replace($('#loginForm').attr('action'));
            }
        });
    });
});
