const express=require('express');
const app=express();

const db=require('./config/db');
db();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // take the json data from client server convert it into object
                            // and store it in req.body




// import royer file
const userRoutes=require('./routes/userRoutes');
const listingRoutes=require('./routes/listingRoutes')
// use the routes
app.use('/user',userRoutes);
app.use('/listing',listingRoutes);

app.get('/',(req,res)=>{
    res.send('welcome to FindMyFlat');
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('connected with server');
    
})