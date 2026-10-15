import express from 'express';
const app = express();

const PORT = 5000;


app.get('/',(req, res)=>{
    return res.json({
        msg:"Hello from the server"
    });
});

app.listen(PORT,()=>{
    console.log("Server starting running at PORT: ",PORT);
});