import { getRepository, createQueryBuilder } from "typeorm";
import { Post } from "./entity/Post";

export const CreatePost = async () => {
    const postRepo = getRepository(Post);
    const post = postRepo.create({
        title: "Devam",
        content: "devam1@gmail.com",
        published: false,
    });
    await postRepo.save(post).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("New post saved ", post);
};

export const FindPost = async () => {
    const postRepo = getRepository(Post);
    const post = await postRepo.find({ relations: ["authorId"] });
    
    console.log("New post found ", post[0].authorId.name);
};

export const SumOfAllPost = async () => {
    const postRepo = getRepository(Post);
    const post = await postRepo.createQueryBuilder("post")
    .select("SUM(post.likes)", "sum")
    .getRawOne();
    
    console.log("Sum of liked posts", post);
};

    