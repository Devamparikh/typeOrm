import { getRepository, createQueryBuilder } from "typeorm";
import { Profile } from "./entity/Profile";

export const CreateProfile = async () => {
    const profileRepo = getRepository(Profile);
    const profile = profileRepo.create({
        bio: "Devam",
        userId: 1,
    });
    await profileRepo.save(profile).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("New profile saved ", profile);
};

export const FindUserAndGroupByLocation = async () => {
    // const profileRepo = getRepository(Profile);
    // const users = await profileRepo.createQueryBuilder("profile")
    
    // .leftJoinAndSelect("profile.", "profile", "profile.id = location.profileId")
    // .leftJoinAndSelect(User, "user", "user.id = profile.userId")

    // // .innerJoinAndMapMany("location.userId", "profile.user","user", "user.id = profile.userId")
    // // .addSelect("COUNT(location.city)", "count")
    // .groupBy("profile.locationId")
    // .printSql()
    // .getRawMany();
    
    // console.log("User data from location", profile);
};