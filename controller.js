import Helper from './helper.js'
const users = [
    {
        id:1,
        name:"Megha",
        email:"megha@gmail.com",
        mobile:"6378267383",
        password:"Admin@123"
    },
    {
        id:2,
        name:"Aravinth",
        email:"aravinth@gmail.com",
        mobile:"7896789788",
        password:"123"
    }
]
const index = (req,res)=>{
    res.status(200).send('<h1>Express CRUD</h1>')
}
const getAllUsers = (req,res)=>{
    res.status(200).send({
        message:"Data Fetch Successful",
        users
    })
}
const getUserById = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
        res.status(200).send({
            message:"Data Fetch Successful",
            user:users[index]
        })
    }
    else
    {
        res.status(400).send({
            message:"Invalid Id"
        })
    }
}

const createUser = (req,res)=>{

    let duplicatUser = users.filter((e)=>e.email===req.body.email)
    if(duplicatUser.length===0)
    {
        req.body.id = users.length?users[users.length-1].id+1:1
        users.push(req.body)
        res.status(200).send({
            message:"User Created Successfully",
        })
    }
    else
    {
        res.status(200).send({
            message:`User with ${req.body.email} already exists`,
        })
    }
}

const editUserById = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
        req.body.id = id
        users.splice(index,1,req.body)
        res.status(200).send({
            message:"User Edited Successfully"
        })
    }
    else
    {
        res.status(400).send({
            message:"Invalid Id"
        })
    }
}
const deleteUserById = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
        users.splice(index,1)
        res.status(200).send({
            message:"User Deleted Successfully"
        })
    }
    else
    {
        res.status(400).send({
            message:"Invalid Id"
        })
    }
}

export default {
    index,
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}