        // SCRIPT FOR THE LANDING PAGE'S NAVBAR //
        const tes = document.querySelector(".main-head");
        //console.log(tes.childNodes);
        $(document).ready(function () {
            
            //console.log("tessssssssss")
            $(window).scroll(function () {
                //console.log("aaaaaaaaaaaaaaaaa")
                if ($(this).scrollTop() > 150) {
                    $('.main-head').addClass("solid");
                    $(".main-head ul").attr("id", "main-head-ul")
                    $("#image").attr('src', '/img/dropdown2.png')
                } else {
                    $('.main-head').removeClass("solid");
                    $('#main-head-ul').removeAttr('id');
                    $("#image").attr('src', '/img/dropdown.png')
                    $('.main-head').css({"box-shadow": "none"});
                }
            });
            createActiveLeft();
        });