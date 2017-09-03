'require strict'

const request = require('request-promise'),
      Database = require('./database')

const parseImgurResponse = async (searchResults) => {
  const parsedResult = await JSON.parse(searchResults)
  return await parsedResult.data.map((data) => {
    return {
      title: data.title,
      link: data.link,
      is_album: data.is_album,
      nsfw: data.nsfw
    }
  })
}

const search = async (searchTerm, offset, userIP) => {
  let requestOptions = { 
    method: 'GET',
    url: `https://api.imgur.com/3/gallery/search/score/all/${offset}`,
    qs: 
    { 
      q: searchTerm
    },
    headers: {authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`}
  }
  
  const imgurResponse = await request(requestOptions)
  const parsedResponse = await parseImgurResponse(imgurResponse)
  
  // error catchers
  if (parsedResponse.length < 1) {
    if (offset) return {"error": `No search results found for offset ${offset}. Try a lower offset or no offset.`}
    else return {"error": `no search results found for '${searchTerm}'`}
  }
  
  const inserted = await Database.insertUpdate(searchTerm)
  return {result: parsedResponse}
}

const Imgur = {
  search: search
}

module.exports = Imgur
