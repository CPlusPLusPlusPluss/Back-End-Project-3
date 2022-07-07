const express = require('express')
const router = express()
const Data = require('../models/data')

router.get('/:id', async(req,res)=>{
    try{
        const datas = await Data.find({user: req.params.id}).populate('user')
        res.send({
            success: true,
            data: datas
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.post('/', async(req,res)=>{
    try{
        const newData = await Data.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            user: req.body.user,
            img: req.body.img
        });
        res.send({
            success: true,
            data: newData
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send({
            success: true,
            data: data
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.delete('/:id', async(req,res)=>{
    try{
        const data = await Data.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
            data: data
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

module.exports = router;