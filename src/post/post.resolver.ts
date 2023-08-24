import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(()=> [Post])
  public async getAllPosts(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }

  @Mutation(()=> Boolean)
  public async deletePostById(@Args('id') id: string): Promise<boolean>{
    const deleted = await this.postService.deletePostById(id)
    return deleted
  }
}
