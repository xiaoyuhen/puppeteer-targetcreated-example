const Koa = require('koa')

const app = new Koa()

app.use(async function(ctx) {
  ctx.body = '<a href="http://www.google.com" target="_blank">link</a>'
})

app.listen(3000)
