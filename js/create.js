const API_URL = 'https://6486a3c8beba6297278efd7e.mockapi.io/students'
let myForm = document.getElementById('createForm')
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    create()
})
const create = async()=>{
    try {
        let data = {
            firstname:document.getElementById("firstname").value,
            lastname:document.getElementById("lastname").value,
            email:document.getElementById("email").value,
            batch:document.getElementById("batch").value,
            address:{
                state:document.getElementById("state").value,
                city:document.getElementById("city").value,
                zipcode:document.getElementById("zipcode").value
            }
        }
        let res = await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        if(res.status===201)
            window.location.href='/'
    } catch (error) {
        console.log(error)
    }
}