import express from "express"

const app = express()


app.get( "/", ( req, res ) => {
  res.send( "Hellow workd" )
} )

app.listen( 3000, () => {
  console.log( 'server started' )
} )