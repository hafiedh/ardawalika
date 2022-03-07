        // QUERY SELECTOR //
        const detailPaket = document.querySelector(".detail-paket")
        const kustomisasi = document.querySelector(".kustomisasi")
        const boxOptions = document.querySelector(".box-options")
        const boxDetailPaket = document.querySelector(".box-detail-paket")
        const boxKustomisasi = document.querySelector(".box-kustomisasi")
        
        const dekorasi = document.querySelector(".dekorasi");
        const rias = document.querySelector(".rias")
        const katering = document.querySelector(".katering")
        const dokumentasi = document.querySelector(".documentation")
        const hiburan = document.querySelector(".hiburan")
        const mc = document.querySelector(".mc")

        const dekorasiDetail = document.querySelector(".paket-detail-dekorasi");
        const riasDetail = document.querySelector(".paket-detail-rias")
        const kateringDetail = document.querySelector(".paket-detail-katering")
        const dokumentasiDetail = document.querySelector(".paket-detail-documentation")
        const hiburanDetail = document.querySelector(".paket-detail-hiburan")
        const mcDetail = document.querySelector(".paket-detail-mc")
        const showAll = document.querySelector(".showDoc")

        const below = document.querySelector(".below")
        const selengkapnya = document.querySelector("#selengkapnya")
        const tanggal = document.querySelector(".tanggal")
        
        showAll.addEventListener("click", showDocumentation)
        detailPaket.addEventListener("click", createActiveLeft)
        kustomisasi.addEventListener("click", createActiveRight)

        boxKustomisasi.style.display = "none"
                

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

            
            // createActiveLeft()
            // console.log("tessssssssss")
        });
        
        // SCRIPT TO SHOW ALL DOCUMENTATIONS //
        function showDocumentation() {
            console.log("aaaaaaaaa")

            if(below.style.display == "none"){
                below.style.display = "inline"
                showAll.innerHTML = "Read More"
                selengkapnya.style.display = "none"
            } else {
                 below.style.display = "none"
                showAll.style.display = "none"
                selengkapnya.style.display = "inline"
            }
        }


        // SCRIPT TO SHOW DETAIL PAKET //
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

        dekorasi.onclick = () => {
            console.log("helooooo")
            if (dekorasiDetail.style.display !== "block") {
                dekorasiDetail.style.display = "block"
            } else {
                dekorasiDetail.style.display = "none"
                console.log("none")
            }
        }

        rias.onclick = () => {
            console.log("yaa")
            if (riasDetail.style.display !== "block") {
                riasDetail.style.display = "block"
                console.log("block")
            } else {
                riasDetail.style.display = "none"
                console.log("none")
            }
        }

         katering.onclick = () => {
            if (kateringDetail.style.display !== "block") {
                kateringDetail.style.display = "block"
                console.log("block")
            } else {
                kateringDetail.style.display = "none"
                console.log("none")
            }
        }

        dokumentasi.onclick = () => {
            console.log("yaa")
            if (dokumentasiDetail.style.display !== "block") {
                dokumentasiDetail.style.display = "block"
            } else {
                dokumentasiDetail.style.display = "none"
                console.log("none")
            }
        }

        hiburan.onclick = () => {
            console.log("yaa")
            if (hiburanDetail.style.display !== "block") {
                hiburanDetail.style.display = "block"
            } else {
                hiburanDetail.style.display = "none"
                console.log("none")
            }
        }

        mc.onclick = () => {
            console.log("yaa")
            if (mcDetail.style.display !== "block") {
                mcDetail.style.display = "block"
            } else {
                mcDetail.style.display = "none"
                console.log("none")
            }
        }

        

   