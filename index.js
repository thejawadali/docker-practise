import express from "express"
import dotenv from "dotenv"
dotenv.config()


const app = express()


app.get( "/", ( req, res ) => {
  res.send( "Hello world" )
} )
console.log( process.env.PORT )
app.listen( process.env.PORT, () => {
  console.log( 'server started' )
} )