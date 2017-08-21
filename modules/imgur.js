'require strict'

const rp = require('request-promise')

const parseImgurResponse = (result) => {
  return new Promise((resolve) => {
    const parsedResult = JSON.parse(result)
    const parsedData = parsedResult.data.map((d) => {
      return {
        title: d.title,
        link: d.link,
        is_album: d.is_album,
        nsfw: d.nsfw
      }
    })
    resolve(parsedData)
  })
}

const searchGalleries = (queryString, page) => {
  let options = { 
    method: 'GET',
    url: `https://api.imgur.com/3/gallery/search/score/all/${page}`,
    qs: 
    { 
      q: queryString
    },
    headers: {authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`}
  }

  return rp(options)
  .then((response) => {
    return parseImgurResponse(response)
  })
}

const Imgur = {
  searchGalleries: searchGalleries
}

module.exports = Imgur
