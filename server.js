import express from 'express';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const port= process.env.PORT || 5000
const book=[
    {
        name:'Chi Pheo',
        id:1

    },
    {
        name:'Chi Pheo 1',
        id:2

    },
    {
        name:'Chi Pheo 2',
        id:3

    },
]
app.use(express.json());

//MiddleWare

function AuthenToken(req,res,next){
    console.log(next);
    const authorizationHeader = req.headers['authorization'];

    const token= authorizationHeader.split(' ')[1];
    if(!token) res.sendStatus(404);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECREET,(err,data)=>{
        if(err) res.sendStatus(403)
        next();
    })

}

app.get('/books',AuthenToken,(req,res)=>{
    res.json({status:'Sucess',data : book} )
})

app.listen(port,()=>{
    console.log("Server is running at "+ port);
})
