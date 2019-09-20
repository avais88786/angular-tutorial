import { Injectable } from '@angular/core';

export interface ILogger {
    getLogMessageFromInterface(): string;
}

@Injectable()
export abstract class Logger {
    abstract getLogMessage(): string;
}
