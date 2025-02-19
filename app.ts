import { Application, IBoot } from 'egg'

export default class AppBoot implements IBoot {
  private readonly app: Application;
  constructor(app: Application) {
    this.app = app
  }
  // config文件读取并合并，但是还没生效
  // 应用层修改配置的最后时机
  configWillLoad(): void {
    console.log('config', this.app.config.baseUrl)
    console.log('enable middleware', this.app.config.coreMiddleware)
    this.app.config.coreMiddleware.unshift('myLogger')
  }
  configDidLoad(): void {
    //
  }
  // didLoad(): Promise<void> {
  //   //
  // }
  async willReady(): Promise<void> {
    console.log('enable willReady', this.app.config.coreMiddleware)
  }
  async didReady(): Promise<void> {
    const ctx = await this.app.createAnonymousContext()
    const res = await ctx.service.test.sayHi('zzwkiwi')
    console.log('did ready as', res)
    console.log('final middlewares', this.app.middleware)

  }
}