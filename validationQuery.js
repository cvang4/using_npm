import jQuery from "jquery";


    $(document).ready(function() {
        $("#submit").on("click", function() {
            var name = $("#name");
            var email = $("#email");
            var phone = $("#phone");
            var required = [name, email, phone];

            for (let i = 0; i < required.length; i++) {

            } if (required[i].val() == " ") {
            $("#message").addClass("warning").html("Please Fill Out Required Fields");
            
            } if (required[i].val () !== "") {
                required[i].prev().removeClass('warning');
            }
            if (!$("label").hasClass("warning")) {
                $("#form").remove();
                $('h2').html('Thanks for your feedback!')
                }
        })
    });
