'use strict'

// NPM Packages
const mongo = require('mongodb')

// URI string used to connect to the mongodb service - this app uses mlab.com
const MONGODB_URI = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DBPORT+'/'+process.env.DB;

// Populated when connect() is called
let collection   // Stores the database collection for persistent use

// Inserts a new urls object into the database collection
// Returns inserted document after insertion completes
const insert = (obj) => {
  return (collection.insertOne(obj), obj)
}

// Returns the complete database object (excluding the _id field) if the key:value was found
// Returns undefined if there was no match in the database
const find = (key, value) => {
  return collection.findOne({[key]: {$eq: value}},{_id: 0})
}

// Called once after the first request is made to the server
// Saves a copy of the database collection and the app's hostname
const connect = async (hostname) => {
  console.log('Connecting to the database.....')
  const db = await mongo.MongoClient.connect(MONGODB_URI)
  collection = db.collection(process.env.COLLECTION)
  console.log('Database Collection Saved')
  return collection
}

const Database = {
  insert: insert,
  find: find,
  connect: connect
}

module.exports = Database