import { getRepository, createQueryBuilder } from "typeorm";
import { Location } from "./entity/Location";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";



export const CreateLocation = async () => {
    const locationRepo = getRepository(Location);
    const location = locationRepo.create({
        city: "Rajkot",
        pincode: 360001,
        country: "India",
    });
    await locationRepo.save(location).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("New location saved ", location);
};

export const FindUserFromLocation = async () => {
    const locationRepo = getRepository(Location);
    const profile = await locationRepo.createQueryBuilder("location")
    .leftJoinAndMapOne("location.profileId", "location.profile", "profile", "profile.id = 1")
    .leftJoinAndMapOne("location.userId", "profile.user","user", "user.id = 1")
    .getRawOne();
    
    console.log("User data from location", profile);
};

export const FindUserGroupByLocation = async () => {
    // const locationRepo = getRepository(Location);
    // const profile = await locationRepo.createQueryBuilder("location")
    
    // .leftJoinAndSelect(Profile, "profile", "profile.id = location.profileId")
    // .leftJoinAndSelect(User, "user", "user.id = profile.userId")

    // // .innerJoinAndMapMany("location.userId", "profile.user","user", "user.id = profile.userId")
    // // .addSelect("COUNT(location.city)", "count")
    // .groupBy("location.city")
    // .printSql()
    // .getRawMany();
    
    // console.log("User data from location", profile);
};
