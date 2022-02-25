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