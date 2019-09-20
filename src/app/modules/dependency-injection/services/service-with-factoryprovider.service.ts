import { Injectable } from '@angular/core';
import { NewLoggerService } from './new-logger.service';


@Injectable()
export abstract class ServiceWithFactoryproviderService {
  public static toggler = 2;
  constructor() { }

  abstract getValue(): string;
}

@Injectable()
export class ServiceWithFactoryproviderService1 extends ServiceWithFactoryproviderService {

  getValue(): string {
    return 'Value coming from ServiceWithFactoryproviderService1';
  }

  constructor(private newLoggerService: NewLoggerService) {
    super();
  }
}

@Injectable()
export class ServiceWithFactoryproviderService2 extends ServiceWithFactoryproviderService {
  getValue(): string {
    return 'Value coming from ServiceWithFactoryproviderService2';
  }

  constructor(private newLoggerService: NewLoggerService) {
    super();
  }
}

export const factoryProviderService = (newLoggerService: NewLoggerService) => {
  if (ServiceWithFactoryproviderService.toggler === 1) {
    ServiceWithFactoryproviderService.toggler = 2;
    return new ServiceWithFactoryproviderService1(newLoggerService);
  } else {
    ServiceWithFactoryproviderService.toggler = 1;
    return new ServiceWithFactoryproviderService2(newLoggerService);
  }
};




