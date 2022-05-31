import express from 'express';

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
app.get('/books',(req,res)=>{
    res.json({status:'Sucess',data : book} )
})

app.listen(port,()=>{
    console.log("Server is running at "+ port);
})
