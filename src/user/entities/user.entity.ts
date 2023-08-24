import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import {  Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];

  @Field()
  // @Column()
  @CreateDateColumn({name: 'CreatedAt'})
  createTime: Date;

  @Field()
  @UpdateDateColumn({ name: 'updatedAt'})
  updateTime: Date;

  @Field()
  @DeleteDateColumn({name: 'deletedAt'})
  deleteTime: Date;
}
