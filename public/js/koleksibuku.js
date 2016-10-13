$(document).ready(function () {
    
    $("#uploadkoleksi").submit(function (e) {
        e.preventDefault();
        $('#submitButton').attr('disabled', true);
        var formData = new FormData($("#uploadkoleksi")[0]);
        var url = $('#url').attr('href') + 'koleksibuku/upload';

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
            if (data.st == 0) {

               alert(data.msg);
           
            } else {
                window.location.replace($('#url').attr('href') + 'koleksibuku');
            }
        });
    });
});
