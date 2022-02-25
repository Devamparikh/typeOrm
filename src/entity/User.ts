import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { Post } from "./Post";
import { Profile } from "./Profile";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @OneToMany(() => Post, post => post.authorId)
    posts: Post[];

    @OneToOne(() => Profile, profile => profile.userId)
    profile: Profile[];

}
