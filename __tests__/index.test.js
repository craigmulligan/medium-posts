const { getUser, getPosts } = require('../')

describe('.getUser', () => {
  test('should return user with properties', async () => {
    const user = await getUser()
    expect(user).toMatchSnapshot()
  })
})

describe('.getPosts', () => {
  test('should return posts with limit', async () => {
    const posts = await getPosts('the_economist', 30)
    expect(posts.length).toBe(30)
  })

  test('should return posts with url', async () => {
    const posts = await getPosts('the_economist')
    const expected = [
      expect.objectContaining({
        url: expect.any(String),
        image: expect.any(String)
      })
    ]
    expect(posts).toEqual(expect.arrayContaining(expected))
  })
})
