import model from '../model/index.js'
import mongodb from 'mongodb'
const getAll = async (req,res)=>{
    await model.client.connect()
    try {
        let db = model.client.db(model.dbName)
        let users = await db.collection('users').find({}).toArray()
        res.status(200).send({
            message:"Data Fetch Successful",
            users
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const getById = async (req,res)=>{
    await model.client.connect()
    try {
        let {id} = req.params
        let db = model.client.db(model.dbName)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})
        res.status(200).send({
            message:"Data Fetch Successful",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const create = async(req,res)=>{
    await model.client.connect()
    try {
        let db = model.client.db(model.dbName)
        let user = await db.collection('users').findOne({email:req.body.email})
        if(!user)
        {
            await db.collection('users').insertOne(req.body)

            res.status(200).send({
                message:"User Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const editById = async (req,res)=>{
    await model.client.connect()
    try {
        let {id} = req.params
        let db = model.client.db(model.dbName)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})
        if(user)
        {
            await db.collection('users').updateOne({_id:new mongodb.ObjectId(id)},{$set:req.body})
            res.status(200).send({
                message:"User Edited Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const deleteById = async (req,res)=>{
    await model.client.connect()
    try {
        let {id} = req.params
        let db = model.client.db(model.dbName)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})
        if(user)
        {
            await db.collection('users').deleteOne({_id:new mongodb.ObjectId(id)})
            res.status(200).send({
                message:"User Deleted Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

export default {
    create,
    getAll,
    getById,
    editById,
    deleteById
}