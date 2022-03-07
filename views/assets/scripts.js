        // SCRIPT FOR THE LANDING PAGE'S NAVBAR //
        $(document).ready(function () {
            $(window).scroll(function () {
                console.log("aaaaaaaaaaaaaaaaa")
                if ($(this).scrollTop() > 150) {
                    $('.main-head').addClass("solid");
                    $(".main-head ul").attr("id", "main-head-ul")
                } else {
                    $('.main-head').removeClass("solid");
                    $('#main-head-ul').removeAttr('id');
                }
            });
            createActiveLeft()
            console.log("tessssssssss")
        });

        
        // SCRIPT TO SHOW DETAIL PAKET //
        const detailPaket = document.querySelector(".detail-paket")
        const kustomisasi = document.querySelector(".kustomisasi")
        const boxOptions = document.querySelector(".box-options")
        
        const boxDetailPaket = document.querySelector(".box-detail-paket")
        const boxKustomisasi = document.querySelector(".box-kustomisasi")

        detailPaket.addEventListener("click", createActiveLeft)
        kustomisasi.addEventListener("click", createActiveRight)


        function createActiveLeft() {
            console.log("tes create id")
            boxOptions.setAttribute("id", "active-left")

            if (boxDetailPaket.style.display !== "block") {
                boxDetailPaket.style.display = "block"
                boxKustomisasi.style.display = "none"
                console.log("block")
            }
        }

        function createActiveRight() {
            console.log("tes create id right")
            boxOptions.setAttribute("id", "active-right")

            if (boxKustomisasi.style.display !== "block") {
                boxKustomisasi.style.display = "block"
                boxDetailPaket.style.display = "none"
                console.log("kustomisasi")
            }
        }

        const detailPaketChoices = document.querySelector(".detail-paket-choices")
        detailPaketChoices.onclick = (e) => {
            console.log("ini tes3")
            const getClassName = e.target.className;
            const getParent = e.target.parentNode.parentNode;
            const getList = getParent.children[1];
            console.log(getParent, getList)

        if(getParent && getList && getClassName !== "detail-paket-choices" && getClassName !== "info-keterangan"){
            if (getList.style.display !== "block") {
                    getList.style.display = "block"
            } else {
                    getList.style.display = "none"
                    console.log("none")
            }
        } else {
               return;
           }
        }



   