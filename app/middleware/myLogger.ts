import { Context, Application, EggAppConfig } from 'egg'
import { appendFileSync } from 'fs'

export default (options: EggAppConfig['myLogger'], app: Application) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log('option', options)
    console.log('app', app.config.logger)
    const startTime = Date.now()
    const requestTime = new Date()
    await next()
    const ms = Date.now() - startTime
    const logTime = `${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${JSON.stringify(ctx.params)} -- ${JSON.stringify(ctx.body)} -- ${ms}ms`
    if (options.allowedMethod.includes(ctx.method)) {
      appendFileSync('./log.txt', logTime + '\n')
    }
  }
}