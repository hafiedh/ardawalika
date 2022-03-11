        // SCRIPT FOR THE LANDING PAGE'S NAVBAR //
        const tes = document.querySelector(".main-head");
        console.log(tes.childNodes);
        $(document).ready(function () {
            
            console.log("tessssssssss")
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
            
            createActiveLeft()
        });

        
        // SCRIPT TO SHOW DETAIL PAKET //
        const detailPaket = document.querySelector(".detail-paket")
        const detailPaketChoices = document.querySelector(".detail-paket-choices")
        const kustomisasiChoices = document.querySelector(".kustomisasi-choices")
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

        detailPaketChoices.onclick = (e) => {
            console.log("ini tes3")
            const getClassName = e.target.className;
            const getAnotherClassName = e.target.parentNode.className;
            const getParent = e.target.parentNode.parentNode;
            const getList = getParent.children[1];
            // console.log("className: ", getClassName, "e target: ", e.target, "tes: ");
            // console.log(getParent, getList, getClassName)
            // console.log(getList)

        if(getParent && getList && getClassName !== "detail-paket-choices" 
            && getClassName !== "info-keterangan" && getAnotherClassName !== "sect"){
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

        kustomisasiChoices.onclick = (e) => {
            console.log("ini tes kustomisasi")
            const getClassName = e.target.className;
            const getTagName = e.target.tagName;
            const getAnotherClassName = e.target.parentNode.className;
            const getParent = e.target.parentNode.parentNode.parentNode;
            const getList = getParent.children[1];
            // console.log("className: ", getClassName, "e target: ", e.target, "tes: ");
            // console.log("getParent: ",getParent, "getList: ", getList, "getClassName: ", getClassName)
            // console.log("Tag Name: ", getTagName)

        if(getParent && getList && getClassName !== "container"  && getTagName !== "LI" && getTagName !== "UL"
            && getClassName !== "info"  && getClassName !== "info-keterangan" && getAnotherClassName !== "sect"){
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




   