import { getRepository } from "typeorm";
import { User } from "./entity/User";

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
    const users = await userRepo.find({ relations: ["posts"] });
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
