        // SCRIPT FOR THE LANDING PAGE'S NAVBAR //
        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.main-head').addClass("solid");
                    $(".main-head ul").attr("id", "main-head-ul")
                } else {
                    $('.main-head').removeClass("solid");
                    $('#main-head-ul').removeAttr('id');
                }
            });
        });

        // SCRIPT TO SHOW DETAIL PAKET //
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
        const btn = document.querySelector("#toggle")

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
