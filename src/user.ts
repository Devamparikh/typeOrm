import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { Location } from "./entity/Location";



export const CreateUser = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create({
        name: "Devam",
        email: "hellovam1@gmail.com"
    });
    await userRepo.save(user).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("New user saved ", user);
};

export const FindUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.find({ name: "Alpha" });
    console.log("New user found ", users[0]);
};

export const UpdateUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.update({ name: "Devam" }, {name: "Alpha"});
    console.log("user updated ", users);
};

export const DeleteUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.delete({ email: "devam@gmail.com" });
    console.log("user removed ", users);
};

export const CountUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.count({ name: "Alpha" });
    console.log("user counted ", users);
};

export const AvgOfAllPostByThisUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.createQueryBuilder("user")
    .leftJoin("user.posts", "post")
    .addSelect("AVG(post.likes)", "avg")
    .where("user.id = :id", { id: 1 })
    .getRawMany();

    console.log("user post likes avg ", users);
};

export const CountPostByUser = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.createQueryBuilder("user")
    .leftJoin("user.posts", "post")
    .addSelect("COUNT(post.id)", "count")
    .groupBy("user.id")
    // .where("user.id = :id", { id: 1 })
    .getRawMany();

    console.log("total number of post by user ", users);
};

export const HavingInUser = async () => {
const userRepo = getRepository(User);
const users = await userRepo.createQueryBuilder("user")
.having("user.name = :name", { name: "Alpha" })
.andHaving("user.email = :email", { email: "devam@gmail.com" })
.getMany();

console.log("user having name and email ", users);
};

export const userGroupByRole = async () => {
    const userRepo = getRepository(User);
    const users = await userRepo.createQueryBuilder("user")
    .groupBy("user.role")    
    .leftJoinAndSelect(Profile,  "profile", "user.id = profile.userId")
    .leftJoinAndSelect(Location, "location", "location.profileId = profile.id")
    .addSelect("GROUP_CONCAT(user.name)", "group")
    .addSelect("COUNT(user.role)", "count")
    .getRawMany();
    // .getSql();
    
    console.log("user profile by user id ", users);
};
