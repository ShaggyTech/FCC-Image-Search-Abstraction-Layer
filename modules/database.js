'use strict'

// NPM Packages
const mongo = require('mongodb')
require('dotenv').config()

// URI string used to connect to the mongodb service - this app uses mlab.com
const MONGODB_URI = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DBPORT+'/'+process.env.DB;

// Populated when connect() is called
let collection   // Stores the database collection for persistent use

const insertUpdate = async (queryString) => {
  return await collection.findOneAndUpdate(
    {search: queryString},
    {$set: {lastModified: Date.now()}},
    {upsert: true}
  )
}

const findUnique = async () => {
  return await collection.find({}, {_id: 0, lastModified: 0})
  .sort({lastModified: -1})
  .limit(20)
  .toArray()
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
  findUnique: findUnique,
  insertUpdate: insertUpdate,
  connect: connect
}

module.exports = Database