import { DynamicModule, Module } from '@nestjs/common';
import { XService } from './x.service';

@Module({})
export class XModule {
  static register(options): DynamicModule {
    return {
      module: XModule,
      providers: [
        {
          provide: 'X_VALUE',
          useValue: options,
        },
        XService,
      ],
      exports: [XService],
    };
  }
}
