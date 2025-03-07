import { Application, IBoot } from 'egg'
// import * as assert from 'assert'
// import { createConnection } from 'mongoose'
// import { join } from 'path'


export default class AppBoot implements IBoot {
  private readonly app: Application;
  constructor(app: Application) {
    this.app = app
    // const { url } = this.app.config.mongoose
    // assert(url, '[egg-mongoose] url is required on config')
    // const db = createConnection(url)
    // db.on('connected', () => {
    //   app.logger.info(`[egg-mongoose] ${url} connected successfully`)
    // })
    // app.mongoose = db
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
    // const dir = join(this.app.config.baseDir, 'app/model')
    // // loadToApp()此函数用来将一个目录下的文件加载到 app 对象上
    // this.app.loader.loadToApp(dir, 'model', {
    //   caseStyle: 'upper'
    // })
  }
  async didReady(): Promise<void> {
    const ctx = await this.app.createAnonymousContext()
    const res = await ctx.service.test.sayHi('zzwkiwi')
    console.log('did ready as', res)
    console.log('final middlewares', this.app.middleware)

  }
}