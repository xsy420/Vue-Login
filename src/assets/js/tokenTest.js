const jwt = require('jsonwebtoken')
try {
  console.log(jwt.verify(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjMzIiwiZXhwIjoxNjQ5Njc2MTU3LCJ1c2VybmFtZSI6IjEyMyJ9.UkMS11nzXiNT7vTIVhouNxHWcjIsi5L9vYyfOhwZ5mk',
    'abcdefghijklmnopqrstuvwxyz',
    null,
    null
  )) // 如果过期将返回false
} catch (e) {
  console.error('jwt verify error --->', e)
}
