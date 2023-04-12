import { Body, Controller, Get, Post /*Put*/ } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly appService: PostService) {}
  @Get()
  getPost(): string {
    return this.appService.getPost();
  }

  @Post()
  createPost(@Body() body): any {
    return this.appService.createPost(body);
  }

  // @Put('/:id')
}
