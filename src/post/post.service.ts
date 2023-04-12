import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPost(): string {
    return 'Hello Post!';
  }

  createPost(post: any): any {
    return post;
  }
}
