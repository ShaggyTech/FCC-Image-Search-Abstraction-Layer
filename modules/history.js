'use strict'

const Database = require('./database')

const parseHistory = async (history) => {
  return await history.map((data) => {
    return data.search
  })
}

const getHistory = async () => {
  const history =  await Database.findUnique()
  const parsed =  await parseHistory(history)
  return {history: parsed}
}

const History = {
  getHistory: getHistory
}

module.exports = History