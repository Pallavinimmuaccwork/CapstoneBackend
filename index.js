const express = require("express");
const app = express();
const port = 5500;
const jwt = require("jsonwebtoken");
const json = express.json
const cors = require("cors");
app.use(cors())
const database = require("./model/userSchema");

require("./DB/connection");

// const userRouter = require("./router/router");

const Auth = require("./middleware/authentication");

// body parser
app.use(express.urlencoded({ extended: true }));

//  json middleware
// app.use(json());
app.use(express.json({ limit: "2000mb" }));

// lab middleware
// app.use("/lab", userRouter);

app.get("/welcome", (req, res) => {
  console.log("hai");
  res.json({ message: "hi" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const match = await database.findOne({ email: email });
  console.log(match);
// res.send(match);
if(match){
  const { _id, name } = match;

  const SECRET_KEY = "dfghj5432dfghj543";
  const payload = { _id, name };
  const token = jwt.sign(payload, SECRET_KEY);
  console.log(token);
//   res.cookie("token", token);
  res.send(token);
}else{
    res.send("invalid credentials")
}


});

app.post("/register", async (req, res) => {
  try {
    console.log("fdgh",req.body) ;
    const { name, email, password, role, test } = req.body;

    if (email || password || name || role || test) {
      console.log("if>>>", name, email, password, role, test);
      const newUser = new database({ name, email, password, role, test });
      newUser.save().then(async () => {
        res.json({ message: req.body });
      });
    } else {
      console.log("else>>", name, email, password, role, test);
      res.send("fill form");
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/sample", Auth, (req, res) => {
  res.send(req.auth);
});

app.listen(port, () => {
  console.log(`server running at localhost:${port}`);
});























// const express = require("express");
// const app = express();
// const port = 5005;
// const router = new express.Router()
// const json = express.json

// const database =   require('./model/userSchema');

// require('./DB/connection')

// const userRouter = require('./router/router')

// //body parser

// app.use(express.urlencoded({extended:true}));

// //json middleware
// app.use(json());

// // app.use(express.json({limit:"20mb"}))


// //lab middleware
// app.use('/lab',userRouter);


// app.get('/welcome',(req,res)=>{
//     console.log("hai");
// res.json({message:"hi"})})
// app.post("/register", async(req, res) => {
//   try {
//     // console.log(req.body) ;
//     const {name,email,password,role,test}=req.body;
//     console.log(name,email,password,role,test);
// const newUser = new database({name,email,password,role,test})
// newUser.save().then(async()=>{
//     res.json({message:req.body})
// })
     

//   } catch(err) {
//     console.log(err)
//   }
// });

// app.listen(port, () => {
//   console.log(`server running at localhost:${port}`);
// });
















// // const express = require('express');
// // const app = express();
// // const cors = require('cors')
// // const port = 4001;

// // console.log('inside index');
// // //db  connection
// // require('./DB/connection')

// // app.use(express.json({limit:"20mb"}))
// // //model Schema
// // // require('./model/userSchema')
// // const userSchema = require('./model/userSchema')


// // app.use(cors());
// // //routing
// // // app.use(express.json())
// // // app.use('/', require("./router/auth"))

// // // app.get('/sample',async(res,req) => {
// // //     console.log(req.body);

// // //     res.send(1000);
// // // })

// // app.post('/register', async (req, res) => {

// //     // console.log(req);
// //     console.log(req.body);
// //     res.send("register")
// //     const { name, email, password, role, test } = req.body

// //     if (!name || !email || !password || !role) {
// //         res.status(401).json({
// //             error: true,
// //             message: "Fill the form properly",
// //             data: null
// //         })

// //     } else {

// //         try {
// //             const data = await database.findOne({ email: email }).lean();
// //             console.log(data);
// //             if (!data) {
// //                 const newUser = new database({ name, email, password, role, test });
// //                 newUser.save().then(async () => {
// //                     res.status(200).json({
// //                         error: false,
// //                         message: "Registrated Successfull",
// //                         data: null
// //                     })
// //                 })
// //             } else {
// //                 res.status(200).json({
// //                     error: true,
// //                     message: "user already Exist",
// //                     data: null
// //                 })
// //             }


// //         } catch (err) {
// //             res.status(401).json({
// //                 error: true,
// //                 message: "Registrated failed",
// //                 data: null
// //             })
// //         }
// //     }

// // })


// // app.post('/sample', (req, res) => {
// //     console.log(req.body);
// //     // res.cookie('name', 'DEVILFIGHTERZ');
// //     res.send('non-persistance cookies has been created');
// // });
// // app.listen(port, () => {
// //     console.log(`localhost:${port}`)
// // })