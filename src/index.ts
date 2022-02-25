import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Post} from "./entity/Post";
import { CreateUser, FindUser, UpdateUser, DeleteUser, CountUser, AvgOfAllPostByThisUser, CountPostByUser, HavingInUser} from "./user";
import { CreatePost, FindPost, SumOfAllPost, InbuiltNotFunctionInPost, AllPostWithLikesLessThen } from "./post";
import { CreateProfile } from "./profile";
import { CreateLocation, FindUserFromLocation } from "./location";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

    // await CreateUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await CreatePost().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await FindUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await FindPost().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await UpdateUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await DeleteUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await CountUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await SumOfAllPost().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await AvgOfAllPostByThisUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await CreateProfile().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await CreateLocation().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await FindUserFromLocation().catch((err) => {
    //     console.log("Error: ", err);
    // })

    // await CountPostByUser().catch((err) => {
    //     console.log("Error: ", err);
    // })

    await HavingInUser().catch((err) => {
        console.log("Error: ", err);
    })

    await InbuiltNotFunctionInPost().catch((err) => {
        console.log("Error: ", err);
    })

    await AllPostWithLikesLessThen().catch((err) => {
        console.log("Error: ", err);
    })

}).catch(error => console.log(error));
