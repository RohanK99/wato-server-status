const joi = require('joi')
const ping = require('ping')
const Router = require('@koa/router')

const router = new Router();

const schema = joi.object().keys({
    host: joi.string().ip({ version: ['ipv4'] })
}).options({
    skipFunctions: true,
    abortEarly: true,
    allowUnknown: false,
})

router.post('/', async (ctx) => {
    const { host } = joi.attempt(ctx.request.body, schema, 'body is incorrect')
    const pingResponse = await ping.promise.probe(host)
    ctx.body = {
        host: pingResponse.numeric_host,
        alive: pingResponse.alive,
        latency: pingResponse.time,
    }
})

module.exports = {
    routes: () => router.routes()
}
