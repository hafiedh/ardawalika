const { Dekorasi,Dokumentasi,Entertainment,Rias,Catering,User,Category,Paket } = require("../models");
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/index");
  },

  // admin Dekorasi
  viewDecoration: async (req, res) => {
    const dekorasi = await Dekorasi.findAll();
    res.render("admin/dekorasi/index", { dekorasi });
  },

  createDecoration: async (req, res) => {
    try {
      const { name_dekorasi, harga_dekorasi, keterangan_dekorasi } = req.body;

      await Dekorasi.create({
        name_dekorasi,
        harga_dekorasi,
        keterangan_dekorasi,
      });
      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },
  updateDecoration: async (req, res) => {
    try {
      const { id, name_dekorasi, harga_dekorasi, keterangan_dekorasi } =
        req.body;
      const dekorasi = await Dekorasi.findByPk(id);

      (dekorasi.name_dekorasi = name_dekorasi),
        (dekorasi.harga_dekorasi = harga_dekorasi),
        (dekorasi.keterangan_dekorasi = keterangan_dekorasi),
        await dekorasi.save();

      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },
  deleteDecoration: async (req, res) => {
    try {
      await Dekorasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },

  // Catering

  viewCatering: async (req, res) => {
    const catering = await Catering.findAll();
    res.render("admin/catering/index", { catering });
  },
  createCatering: async (req, res) => {
    try {
      const { name_catering, harga_catering, keterangan_catering } = req.body;

      await Catering.create({
        name_catering,
        harga_catering,
        keterangan_catering,
      });
      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },
  updateCatering: async (req, res) => {
    try {
      const { id, name_catering, harga_catering, keterangan_catering } =
        req.body;
      const catering = await Catering.findByPk(id);

      (catering.name_catering = name_catering),
        (catering.harga_catering = harga_catering),
        (catering.keterangan_catering = keterangan_catering),
        await catering.save();

      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },
  deleteCatering: async (req, res) => {
    try {
      await Catering.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },

  // Rias

  viewRias: async (req, res) => {
    const rias = await Rias.findAll();
    res.render("admin/rias/index", { rias });
  },
  createRias: async (req, res) => {
    try {
      const { name_rias, harga_rias, keterangan_rias } = req.body;

      await Rias.create({
        name_rias,
        harga_rias,
        keterangan_rias,
      });
      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },
  updateRias: async (req, res) => {
    try {
      const { id, name_rias, harga_rias, keterangan_rias } = req.body;
      const rias = await Rias.findByPk(id);

      (rias.name_rias = name_rias),
        (rias.harga_rias = harga_rias),
        (rias.keterangan_rias = keterangan_rias),
        await rias.save();

      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },
  deleteRias: async (req, res) => {
    try {
      await Rias.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },

  // Dokumentasi
  viewDokumentasi: async (req, res) => {
    const dokumentasi = await Dokumentasi.findAll();
    res.render("admin/dokumentasi/index", { dokumentasi });
  },
  createDokumentasi: async (req, res) => {
    try {
      const { name_dokumentasi, harga_dokumentasi, keterangan_dokumentasi } =
        req.body;

      await Dokumentasi.create({
        name_dokumentasi,
        harga_dokumentasi,
        keterangan_dokumentasi,
      });
      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },
  updateDokumentasi: async (req, res) => {
    try {
      const {
        id,
        name_dokumentasi,
        harga_dokumentasi,
        keterangan_dokumentasi,
      } = req.body;
      const dokumentasi = await Dokumentasi.findByPk(id);

      (dokumentasi.name_dokumentasi = name_dokumentasi),
        (dokumentasi.harga_dokumentasi = harga_dokumentasi),
        (dokumentasi.keterangan_dokumentasi = keterangan_dokumentasi),
        await dokumentasi.save();

      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },
  deleteDokumentasi: async (req, res) => {
    try {
      await Dokumentasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },

  // Entertainment
  
  viewEntertainment : async(req,res) => {
        
    const entertainment = await Entertainment.findAll();
    res.render('admin/entertainment/index',{entertainment})
},
createEntertainment : async(req,res) => {
    try{
        const {name_entertainment,harga_entertainment,keterangan_entertainment} = req.body;
       
        await Entertainment.create({
            name_entertainment,
            harga_entertainment,
            keterangan_entertainment
        });
        res.redirect('/admin/entertainment')
    }catch(error){
        res.redirect('/admin/entertainment')
    }
},
updateEntertainment : async(req,res) => {
    try{
        const { id, name_entertainment,harga_entertainment,keterangan_entertainment } = req.body;
        const entertainment = await Entertainment.findByPk(id );
        
        entertainment.name_entertainment= name_entertainment,
        entertainment.harga_entertainment = harga_entertainment,
        entertainment.keterangan_entertainment = keterangan_entertainment,
        await entertainment.save()

        res.redirect('/admin/entertainment');
        
    }catch(error){
        res.redirect('/admin/entertainment')
    }

},
deleteEntertainment : async(req,res)=>{
    try {
         await Entertainment.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect('/admin/entertainment')
        
    } catch (error) {
        res.redirect('/admin/entertainment')
    }
},



    viewUser : async(req,res) => {
        
        const user = await User.findAll();
        res.render('admin/user/index',{user})
    },



    viewPaket : async(req,res) =>{
        const paket = await Paket.findAll({
            include:[{
                model:Category
            },
            {
                model:Dekorasi,
                attributes: ['name_dekorasi'],
            },
            {
                model:Rias,
                attributes: ['name_rias'],
                
            },
            {
                model:Entertainment,
                attributes: ['name_entertainment']
            },
            {
                model:Catering,
                attributes: ['name_catering']
            },
            {
                model:Dokumentasi,
                attributes: ['name_dokumentasi']
            },

        
        ],
           
        });
        res.render('admin/paket/index',{paket})
    },

    viewCreatePaket:async(req,res)=>{
        try {
            const category = await Category.findAll();
            const dekorasi = await Dekorasi.findAll();
            const rias = await Rias.findAll();
            const entertainment = await Entertainment.findAll()
            const dokumentasi = await Dokumentasi.findAll()
            const catering = await Catering.findAll()
      
              res.render('admin/paket/create',{dekorasi,category,rias,entertainment,dokumentasi,catering})
        } catch (error) {
            res.redirect('/')
        }


    },

    createPaket:async(req,res,next)=>{
        try {
             await Paket.create({
              category_id: req.body.category,
              name_paket: req.body.name,
              harga_paket: req.body.harga,
              dekorasi_id: req.body.dekorasi,
              catering_id: req.body.catering,
              rias_id: req.body.rias,
              dokumentasi_id: req.body.dokumentasi,
              entertainment_id: req.body.entertainment,
              img_url : "tes"
            });
            res.redirect('/admin/paket')
          } catch (error) {
            next(error);
          }
    }  
}

