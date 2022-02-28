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

    @Column() // 0 == subscriber and 1 == admin
    role: boolean;

    @OneToMany(() => Post, post => post.authorId)
    posts: Post[];

    @OneToOne(() => Profile, profile => profile.userId)
    @JoinColumn()
    profile: Profile[];

}
