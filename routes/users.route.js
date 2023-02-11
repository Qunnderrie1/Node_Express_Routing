import express from "express";
import db from "../mockdb/index.js";
import path from 'path';


const router  = express.Router();


 router.get("/:id?" , (req, res , next) =>{

    let { id } = req.params;
    let data;
    
    try {

        if(id){
            data = db.getOne(id);
        }else{
            data = db.getAll();
        }

    } catch (error) {
        console.log(error)
    }

    console.log(data)
    
})
router.post("/" , (req, res) =>{

    try {
        let newUser = req.body;
        let data = db.add(newUser);
        res.send(data)
        
    } catch (error) {
        console.log(error)
    }
    
})
router.put("/:id" , (req, res) =>{
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        const data = db.update(id , updatedUser);
        res.send(data)
    } catch (error) {
        console.log(error)
        
    }
    
})
router.delete("/:id" , (req, res) =>{
    try {
        const { id } = req.params;
        const data = db.remove(id);
        res.send(data);
        
    } catch (error) {
        console.log(error)
    }
    
})


export default router;