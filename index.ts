import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const app = express();
const PORT = 3000;

//cau hinh view / parse / morgan: 
app.use(bodyParser.json());
app.use(morgan("common"));

//router: 
app.get('/',(req,res)=>{
    res.json({
        message : "Hello"
    })
})

//listen: 
app.listen(PORT,"localhost",()=>{
    console.log(`App listening on port http://localhost:${PORT}`);
});
