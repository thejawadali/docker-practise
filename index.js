import express from "express"
import dotenv from "dotenv"
import axios from "axios"
dotenv.config()


const app = express()


app.get( "/", ( _req, res ) => {
  res.send( "Hello world" )
} )

app.get( "/users", async ( _req, res ) => {
  try {
    const { data } = await axios.get( "https://jsonplaceholder.typicode.com/users" )
    res.json( data )
  } catch ( error ) {
    res.json( error )
  }
} )
app.get( "/todos", async ( _req, res ) => {
  try {
    const { data } = await axios.get( "https://jsonplaceholder.typicode.com/todos" )
    res.json( data )
  } catch ( error ) {
    res.json( error )
  }
} )


console.log( process.env.PORT )
app.listen( process.env.PORT, () => {
  console.log( 'server started' )
} )