$(document).ready(function(){

    $('#addbutton').click(function(e){
        var counters = +document.getElementById("counter").value ;
        document.getElementById("counter").value = counters+1 ;
        var count = counters+1;

        var names = document.getElementById("counters").value ;
        document.getElementById("counters").value = names+"s" ;
        var nama = names+"s";

        e.preventDefault();
        $(this).before("<input name='userfile[]' type='file'/ multiple><br><div class='form-group'><div><label>Category*</label><br><div class='radio3 radio-check radio-inline'><input type='radio' id='role"+nama+"1' name='category["+count+"]' value='health sciences' checked><label for='role"+nama+"1'>health sciences</label></div><div class='radio3 radio-check radio-inline'><input type='radio' id='role"+nama+"2' name='category["+count+"]' value='life sciences'><label for='role"+nama+"2'>life sciences</label></div><div class='radio3 radio-check radio-inline'><input type='radio' id='role"+nama+"3' name='category["+count+"]' value='physical sciences'><label for='role"+nama+"3'>physical sciences</label></div><div class='radio3 radio-check radio-inline'><input type='radio' id='role"+nama+"4' name='category["+count+"]' value='social sciences'><label for='role"+nama+"4'>social sciences</label></div></div></div><br>");
    });

    $("#formupload").submit(function (e) {
        e.preventDefault();
        $('#submitButton').attr('disabled', true);
        var formData = new FormData($("#formupload")[0]);
        var url = $('#url').attr('href') + 'filing/upload';
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
                alert(data.status);
                $('#submitButton').attr('disabled', false);
            } else {
                alert(data.status);
                window.location.replace($('#url').attr('href') + 'filing');
            }
        });
    });

     $("#updatebackground").submit(function (e) {
        e.preventDefault();
        $('#submitButtonimg').attr('disabled', true);
        var formData = new FormData($("#updatebackground")[0]);
        var url = $('#url').attr('href') + 'background/upload';
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
                document.getElementById("photoalert").innerHTML = data.msg;
                $('#photoalert').show('fast');
                $('#photoalert').delay(20000).hide('fast');
                $('#submitButtonimg').attr('disabled', false);
                
            } else {
                $('#suksesimg').show('fast');
                $('#suksesimg').delay(20000).hide('fast');
                $('#submitButtonimg').attr('disabled', false);
            }
        });
    });

});

function deletetxt(id) {

    var accept = confirm("You're about to delete this item");

    if (accept) {

        var url = $('#url').attr('href') + "filing/delete";

        var post_data = {

            'target': id,

            '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'

        };

        $.ajax({

            url: url,

            type: 'POST',

            data: post_data,

            success: function (data) {

                if(data == 1){

                    alert('Deleted successfully');

                    window.location.replace($('#url').attr('href') + 'filing');

                } else {

                    alert('Delete failed');

                }

            }

        });

    } else {



    }

}



 function readIMG(input) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#backgroundimg')
                 .attr('src', e.target.result);
         };

         reader.readAsDataURL(input.files[0]);
     }
 }