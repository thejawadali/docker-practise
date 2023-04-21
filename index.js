import express from "express"
import dotenv from "dotenv"
import axios from "axios"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import User from "./UserModel.js"

dotenv.config()


const app = express()
app.use( bodyParser() )

const db = mongoose.connect( 'mongodb://localhost:27017/docker-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} )

db.then( () => {

  app.get( "/", ( _req, res ) => {
    res.send( "Hello world" )
  } )



  app.post( '/users', async ( req, res ) => {
    try {
      const user = new User( {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      } )
      await user.save()
      res.send( user )
    } catch ( err ) {
      res.status( 400 ).send( err )
    }
  } )

  app.get( "/users", async ( _req, res ) => {
    try {
      const users = await User.find()
      res.json( users )
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
} )