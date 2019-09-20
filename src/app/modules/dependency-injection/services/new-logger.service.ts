import { Injectable } from '@angular/core';
import { ILogger, Logger } from './iLogger';

@Injectable()
export class NewLoggerService extends Logger implements ILogger {

  getLogMessageFromInterface(): string {
    return 'Message from New Logger Service for interface call';
  }

  getLogMessage(): string {
    return 'Message from New Logger Service';
  }

  constructor() {
    super();
  }
}
