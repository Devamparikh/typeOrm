import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToOne, JoinColumn} from "typeorm";
import { Location } from "./Location";
import { User } from "./User";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bio: string;

    @Column()
    userId: number;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User;

    @OneToOne(() => Location, location => location.profile) // specify inverse side as a second parameter
    @JoinColumn()
    location: Location;

}
