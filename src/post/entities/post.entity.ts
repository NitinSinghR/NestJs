import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field()
  @Column({ name: 'post_name' })
  name: string;

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;

  @Field()
  @Column({name: 'postOrderNumber',nullable:true})
  postOrderNumber: string;

  @Field()
  @CreateDateColumn({name: 'CreatedAt'})
  createTime: Date;

  @Field()
  @UpdateDateColumn({ name: 'updatedAt'})
  updateTime: Date;

  @Field()
  @DeleteDateColumn({name: 'deletedAt'})
  deletePost: Date;
}
