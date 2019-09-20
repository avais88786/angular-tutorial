import { Component, OnInit, Inject } from '@angular/core';
import { OldLoggerService } from '../../services/old-logger.service';
import { ILogger, Logger } from '../../services/iLogger';
import { ServiceWithFactoryproviderService } from '../../services/service-with-factoryprovider.service';

@Component({
  selector: 'app-di-providers',
  templateUrl: './di-providers.component.html',
  styleUrls: ['./di-providers.component.scss']
})
export class DiProvidersComponent implements OnInit {

  constructor(
    public loggerService: OldLoggerService,
    @Inject('ILogger') public iLogger: ILogger,
    @Inject('ILoggerWithUseValue') public iLoggerWithValue: any,
    public serviceWithFactoryprovider1: ServiceWithFactoryproviderService,
    @Inject('MultiInstances') public multiInstances: Logger[]) {     }

  ngOnInit() {
  }

}
