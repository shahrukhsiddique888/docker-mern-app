const express = require("express")
const mongoose = require("mongoose")
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config")
const postRouter = require("./routes/postRoutes")
const app = express()

const mongoURL =  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
 mongoose.connect(
     mongoURL
     // `mongodb://sidd:ishu%40123@mongo-anyname:27017/?authSource=admin`
     //the mongo here is from the same as service name form the docker service
    
 ).then(() => console.log("sucessful")) 
  .catch((e) => {console.log(e)
  setTimeout(connectWithRetry, 5000)
  }
);

}
connectWithRetry()
app.use(express.json())

app.get("/" ,(req, res) => {
     res.send("<h1>heldddddfd!!!o </h1> ")
})
app.use("/api/posts", postRouter);
// app.use("/posts", postRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))