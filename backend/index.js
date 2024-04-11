//first install npm i init for package.json instalaction and express,mysql,cors,nodemon

const express = require("express");
const mysql = require("mysql");
const cors = require("cors")


const app = express()

const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"formcreation"
})
app.use(express.json())
app.use(cors())

//must in all and top express and cors

app.post("/Login-login",(req,res)=>{
    const { username, password } = req.body;
    const sql = `SELECT * FROM adminform WHERE email = '${username}'`;
   db.query(sql,(err,data)=>{
  if(err){
    return res.json(err)
  }else{
if(data.length===0){
    res.json(false)

}
else{
    if(data[0].password===password){
        res.json(true)

    }else{
        res.json(false)
    }
}
  }
    

   })
})


// POST CODE OF CLIENT REGISTRACTION

app.post("/clientform",(req,res)=>{

    const VALUES=[
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.location,
        req.body.howknow,
        req.body.gender
       ]

  const sql= " INSERT INTO clientlogin (`name`,`email`,`phonenumber`,`location`,`howknow`,`gender`) VALUES(?)"
 
   
   
   db.query(sql,[VALUES],(err,data)=>{
    if(err){
        return res.json(err)
    }return res.json(data)
   })
})


//GET CLINTLOGIN DATA
 


app.get("/clientdata",(req,res)=>{
const sql = "SELECT * FROM clientlogin ";

db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
})

})

//delete clinte data

app.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id
    const sql = 'DELETE FROM clientlogin WHERE id=(?)';
    const values =[id]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }return res.json("user deleted successfully")
    })
})

app.listen(4000,()=>{
    console.log("server is running at 4000 port")
})