'require strict'

const request = require('request-promise'),
      Database = require('./database')

const parseImgurResponse = async (searchResults) => {
    const parsedResult = await JSON.parse(searchResults)
    const parsedData = await parsedResult.data.map((data) => {
      return {
        title: data.title,
        link: data.link,
        is_album: data.is_album,
        nsfw: data.nsfw
      }
    })
    return parsedData
}

const search = async (queryString, page, userIP) => {
  //console.log(Database.insert())
  let options = { 
    method: 'GET',
    url: `https://api.imgur.com/3/gallery/search/score/all/${page}`,
    qs: 
    { 
      q: queryString
    },
    headers: {authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`}
  }
  
  const imgurResponse = await request(options)
  const searchMeta = await Database.insert({search: queryString, time: new Date(), ip: userIP})
  const parsedData = await parseImgurResponse(imgurResponse)
  return parsedData
}

const Imgur = {
  search: search
}

module.exports = Imgur
