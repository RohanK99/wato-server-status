const Koa = require('koa')
const koaBody = require('koa-body')
const serverStatus = require('./controllers/serverStatus');
const app = new Koa()

app.use(koaBody())
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        console.error(err.stack)
        if (err.isJoi) {
            ctx.status = 400
            ctx.body = {
                message: 'Bad Request: ' + err.message
            }
        } else {
            ctx.status = 500
            ctx.body = {
                message: 'Internal Error'
            }
        }
    }
})

app.use(serverStatus.routes())

const port = 5000;
app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`server is listening on ${port}`)
})
