import { Injectable } from '@angular/core';
import { ILogger, Logger } from './iLogger';

@Injectable()
export class OldLoggerService extends Logger {

  getLogMessage(): string {
    return 'Message from Old Logger Service';
  }

  constructor() {
    super();
  }
}
