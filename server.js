const express = require('express')
const { getdata } = require('./controllers/warehouse.controller')
const app = express()
const userRoute= require('./routes/routes')
const cors = require('cors');

app.use(cors());
app.use(express.json());




app.use('/api',userRoute)


const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`server is runing on Port ${PORT}`)
})

