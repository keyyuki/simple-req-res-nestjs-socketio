import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SocketIoClientProxyService } from './socket-io-client-proxy/socket-io-client-proxy.service';
import { take } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly socketIoClientProxyService: SocketIoClientProxyService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-emit')
  testEmitAction() {
    this.socketIoClientProxyService.emit(
      'greeting',
      'Greeting from action test-emit',
    );
    return 'ok';
  }

  @Get('test-send')
  async testSendAction() {
    const requestParams = {
      sendTime: Date.now(),
    };
    const socketResponse = await this.socketIoClientProxyService
      .send('test-request', requestParams)
      .pipe(take(1))
      .toPromise();
    return {
      requestParams,
      socketResponse,
    };
  }
}
