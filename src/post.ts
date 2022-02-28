import { getRepository, createQueryBuilder, Not, LessThan, getConnection, Between } from "typeorm";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

export const CreatePost = async () => {
    const connection = getConnection();
    const userRepo = getRepository(User);
    const postRepo = getRepository(Post);

    const user = new User();
    user.id = 1;
    // await connection.manager.save(user);

    // const post = new Post();
    // post.title = "me.jpg";
    // post.authorId = user;
    // await connection.manager.save(post);

    const post = postRepo.create({
        title: "Mayur",
        content: "mayur's contant",
        published: true,
        jsonObject: {category: 'Black Life Matter', ref:'current affairs'},
        likes: 25,
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

export const SumOfAllLikesByGroup = async () => {
    const postRepo = getRepository(Post);
    const post = await postRepo.createQueryBuilder("post")
    .select("SUM(post.likes)", "sum")
    .groupBy("authorIdId")
    .getRawOne();
    
    console.log("Sum of liked posts by group", post);
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

export const retrieveJsonObject = async () => {
    const postRepo = getRepository(Post)
    const post = await postRepo.find({title: 'Alpha'})
    
    console.log("retrieve Json Object", post);
};

export const findPostBetweenDates = async () => {
    const postRepo = getRepository(Post)
    const post = await postRepo.find({updatedAt: Between('2022-02-24','2022-02-26')})
    
    console.log("post between given dates", post);
};
