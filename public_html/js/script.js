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
                    console.log(e.target.alt);

                    for (var i = 0; i < data.projects.length; i++) {

                        if (e.target.alt === data.projects[i].alt) {
                            swal({title: "Project: " + data.projects[i].companyName, text: "You will not be able to recover this imaginary file!", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, delete it!", cancelButtonText: "No, cancel plx!", closeOnConfirm: false, closeOnCancel: false}, function (isConfirm) {
                                if (isConfirm) {
                                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                                } else {
                                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                                }
                            });


                            //                     swal({
                            //                             "Details", "Company: " +
                            //                             data.projects[i].companyName +
                            //                             "\nJob title: " +
                            //                             data.projects[i].jobTitle +
                            //                             "\n Link: " +
                            //                              data.projects[i].link 
                            //                              //+ 
                            // //                     "text", "By clicking 'OK' you will be redirected to the link." +
                            // //                            "type," warning + 
                            // // "showCancelButton", true
                            // });

                        }
                    }
                }
            }, false);
        }
    });
}()); // end immediately invoked anonymous function

// title: "Are you sure?",
//        
 