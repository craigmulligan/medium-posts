# medium posts 

> A cheeky way to get a medium user info and post info without an api token.


[![Build Status](https://travis-ci.org/hobochild/medium-posts.svg?branch=master)](https://travis-ci.org/hobochild/medium-posts)

# Usage

```
const { getPosts, getUser } = require('medium-posts')

// latest 10 posts by hobochild
getPosts('hobochild', 10).then(console.log)

// get basic user info
getUser('hobochild').then(console.log)
```

## caveats 

This won't work in a browser environment due to cors restrictions

## Related

* [micro-medium-api](https://github.com/evenchange4/micro-medium-api)
