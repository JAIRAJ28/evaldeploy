const express=require("express")
const connect=require("./connect/connect")
const {signin}=require("./routes/register.route")
const {auth}=require("./middleware/middleware")
const {posts}=require("./routes/posts.route")
const app=express()

app.use(express.json())
app.use("/users",signin)
app.use(auth)
app.use("/posts",posts)
app.listen(8300,async()=>{
  try {
    await connect;
    console.log("Connection done port 8300")
  } catch (error) {
    console.log("Connection error")
  }
})