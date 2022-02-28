import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Profile } from "./Profile";
@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    pincode: number;

    @Column()
    country: string;

    @OneToOne(() => Profile, profile => profile.id)
    @JoinColumn()
    profile: Profile;

}
