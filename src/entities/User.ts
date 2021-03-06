import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Like } from "./Like";
import { TextStory } from "./TextStory";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { unique: true })
  githubId: string;

  @Column("text", { unique: true })
  username: string;

  @Column("text")
  displayName: string;

  @Column("text")
  profileUrl: string;

  @Column("text")
  photoUrl: string;

  @Column("text")
  githubAccessToken: string;

  @Column("text", { nullable: true })
  flair: string;

  @Column("jsonb")
  other: any;

  @Column("int", { default: 1 })
  tokenVersion: number;

  @OneToMany(() => TextStory, (s) => s.creator)
  textStories: Promise<User>;

  @OneToMany(() => Like, (s) => s.user)
  likes: Promise<Like>;

  @CreateDateColumn({ type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedAt: Date;
}
