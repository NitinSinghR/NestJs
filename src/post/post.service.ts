/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  public async getAllPosts(){
    return this.postRepo
      .createQueryBuilder('post')
      .getMany();
  }

  public async deletePostById(id: string): Promise<boolean>{
    const deletePost = await this.postRepo.softDelete({id});
    return deletePost.affected>0;
  }

}
