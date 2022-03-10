const { Dekorasi,Dokumentasi,Entertainment,Rias,Catering } = require("../models");
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    viewDashboard : (req,res) => {
        res.render('admin/dashboard/index')
    },

    // admin Dekorasi
    viewDecoration : async(req,res) => {
        
        const dekorasi = await Dekorasi.findAll();
        res.render('admin/dekorasi/index',{dekorasi})
    },

    createDecoration : async (req,res) =>{
        try {
           
            const {name_dekorasi,harga_dekorasi,keterangan_dekorasi} = req.body;
           
            await Dekorasi.create({
                name_dekorasi,
                harga_dekorasi,
                keterangan_dekorasi
            });
            res.redirect('/admin/dekorasi')
            
        } catch (error) {
            res.redirect('/admin/dekorasi')
        }
    },
    updateDecoration :async(req,res) => {
        try{
            const { id, name_dekorasi,harga_dekorasi,keterangan_dekorasi } = req.body;
            const dekorasi = await Dekorasi.findByPk(id );
            
            dekorasi.name_dekorasi= name_dekorasi,
            dekorasi.harga_dekorasi = harga_dekorasi,
            dekorasi.keterangan_dekorasi = keterangan_dekorasi,
            await dekorasi.save()

            res.redirect('/admin/dekorasi');
            
        }catch(error){
            res.redirect('/admin/dekorasi')
        }
    },
    deleteDecoration : async(req,res)=>{
        try {
             await Dekorasi.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.redirect('/admin/dekorasi')
            
        } catch (error) {
            res.redirect('/admin/dekorasi')
        }
    },

    // Catering

    viewCatering : async(req,res) => {
        
        const catering = await Catering.findAll();
        res.render('admin/catering/index',{catering})
    },
    createCatering : async(req,res) => {
        try{
            const {name_catering,harga_catering,keterangan_catering} = req.body;
           
            await Catering.create({
                name_catering,
                harga_catering,
                keterangan_catering
            });
            res.redirect('/admin/catering')
        }catch(error){
            res.redirect('/admin/catering')
        }
    },
    updateCatering : async(req,res) => {
        try{
            const { id, name_catering,harga_catering,keterangan_catering } = req.body;
            const catering = await Catering.findByPk(id );
            
            catering.name_catering= name_catering,
            catering.harga_catering = harga_catering,
            catering.keterangan_catering = keterangan_catering,
            await catering.save()

            res.redirect('/admin/catering');
            
        }catch(error){
            res.redirect('/admin/catering')
        }
    
    },
    deleteCatering : async(req,res)=>{
        try {
             await Catering.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.redirect('/admin/catering')
            
        } catch (error) {
            res.redirect('/admin/catering')
        }
    },

}