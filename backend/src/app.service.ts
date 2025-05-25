import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class Home {
  public getHome(): object{
    return {
      title: 'Home',
      description: 'Welcome to the home page!',
      content: 'This is the content of the home page.',
    };
  }
}  