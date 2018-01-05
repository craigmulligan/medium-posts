const axios = require('axios')
const BASE_URL = 'https://medium.com'

const parsePosts = data => {
  return Object.values(data.references.Post).map(p => {
    const url = `${BASE_URL}/@${data.user.username}/${p.uniqueSlug}`
    p.url = url
    p.image = `https://cdn-images-1.medium.com/max/500/${
      p.virtuals.previewImage.imageId
    }`
    return p
  })
}

const getData = (username, limit) => {
  return axios
    .get(`${BASE_URL}/@${username}/latest`, {
      params: {
        format: 'json',
        limit
      }
    })
    .then(res => {
      return res.data
    })
    .then(data => data.replace('])}while(1);</x>', ''))
    .then(JSON.parse)
    .then(data => data.payload)
}

module.exports = {
  getUser: (username = 'hobochild') =>
    getData(username, 0).then(data => data.user),
  getPosts: (username = 'hobochild', limit = 10) =>
    getData(username, limit).then(parsePosts)
}
