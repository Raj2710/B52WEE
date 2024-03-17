import express from 'express'
import AppRoutes from './routes.js'
const app = express()
const PORT = 8000

app.use(express.json())
app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))

//1. npm init
//2. npm i express
//3. In package.json add type as module
//4. In package.json in side script add start command
//5. Use the above code