import { getRepository, createQueryBuilder, Not, LessThan, getConnection } from "typeorm";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

export const CreatePost = async () => {
    const connection = getConnection();
    const userRepo = getRepository(User);
    const postRepo = getRepository(Post);

    const user = new User();
    user.id = 3;
    // await connection.manager.save(user);

    // const post = new Post();
    // post.title = "me.jpg";
    // post.authorId = user;
    // await connection.manager.save(post);

    const post = postRepo.create({
        title: "Alpha",
        content: "devam1@gmail.com",
        published: false,
        jsonObject: {category: 'Black Life Matter', ref:'current affairs'},
        likes: 11,
        authorId: user
    });
    await postRepo.save(post).catch((err) => {
        console.log("can not be saved");
        
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

export const InbuiltNotFunctionInPost = async () => {
    const postRepo = getRepository(Post)
    const post = await postRepo.find({title: Not("Devam")});

    console.log("all post except title equle to devam", post);
};

export const AllPostWithLikesLessThen = async () => {
    const postRepo = getRepository(Post)
    const post = await postRepo.find({likes: LessThan(15)})
    
    console.log("all post with likes less then 15", post);
};