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
                if (e.target.tagName == 'IMG') {

                    var projectName = e.target.alt;
                    for (var i = 0; i < data.projects.length; i++) {
                        console.log(data.projects[i].alt);
                        if (e.target.alt === data.projects[i].alt) {

                            swal(
                                    "Details", "Name: " +
                                    data.projects[i].name +
                                    "\n Company: " +
                                    data.projects[i].companyName +
                                    "\nJob title: " +
                                    data.projects[i].jobTitle +
                                    "\n Email: " +
                                    data.projects[i].emailAdd);
                        }
                    }
                }

            }, false);
        }
    });
}()); // end immediately invoked anonymous function
