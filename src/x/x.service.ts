import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class XService {
  private readonly x;
  constructor(@Inject('X_VALUE') private options) {
    this.x = options;
  }

  log() {
    console.log('x in Xservice is ' + this.x);
  }
}
