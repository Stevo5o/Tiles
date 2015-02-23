/**
 * myscript.js Projects Pop-up
 * @ Stephen O'Connor, Feburary 2015
 * 
 * Dependencies:
 * https://developers.google.com/speed/libraries/devguide#jquery
 * http://tristanedwards.me/sweetalert 
 * 
 */

// immediately invoked anonymous function
(function () {
    // jQuery AJAX call
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {
            document.querySelector('.grid').addEventListener('click', function (e) {
                console.log(e.target.id);
                if (e.target.tagName === 'IMG') {
                    for (var i = 0; i < data.projects.length; i++) {
                        var link = data.projects[i].link;
                        if (e.target.alt === data.projects[i].alt) {
                            swal({title: "Project: " + data.projects[i].companyName, text: "Description: " + data.projects[i].desc + "\nLink: " + link, showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Go to site!", cancelButtonText: "No thanks!", closeOnConfirm: true, closeOnCancel: true},
                            function (isConfirm) {
                                if (isConfirm) {
                                    for (var j = 0; j < data.projects.length; j++) {
                                        if (e.target.alt === data.projects[j].alt)
                                        {
                                            window.open(data.projects[j].link);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
            }, false);
        }
    });
}()); // end immediately invoked anonymous function