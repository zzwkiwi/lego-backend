import { Controller } from 'egg'

export default class TestController extends Controller {
  async index() {
    const { ctx } = this
    const { id } = ctx.params
    const { query, body } = ctx.request
    const { baseUrl } = ctx.app.config
    const res = await this.app.axiosInstance.get('/api/breeds/image/random')
    // NONE| DEBUG | INFO | WARN | ERROR
    ctx.logger.debug('debug info')
    ctx.logger.info('res data', res.data)
    ctx.logger.warn('warning')
    ctx.logger.error(new Error('whoops'))
    console.log('axios', res.data)
    const resp = {
      query,
      id,
      body,
      baseUrl,
    }
    ctx.helper.success({ ctx, res: resp })
  }
  async getDog() {
    const { service, ctx } = this
    const resp = await service.dog.show()
    await ctx.render('test.nj', { url: resp.message })
  }
}
