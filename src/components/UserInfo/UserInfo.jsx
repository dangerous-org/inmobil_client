import LocationIcon from "../icons/LocationIcon";
import { Avatar } from "@nextui-org/react";
import userProfileStore from "../../store/userProfile.store";
import UserInfoSkeleton from "./UserInfo-Skeleton";
import "./UserInfo.css";

export const UserInfo = () => {

  const userProfile = userProfileStore((state) => state.userProfile);
  const isProfileLoading = userProfileStore((state) => state.isProfileLoading);

  return isProfileLoading ? (
    <UserInfoSkeleton/>
  ) : (
    <section className="user-info-container">
      <Avatar src={userProfile.picture} size="lg" isBordered alt="picture"></Avatar>
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {userProfile.names + ' ' + userProfile.lastName || "No name"}
        </h2>
        <p>@{userProfile.user && userProfile.user.userName}</p>
        <p className="mt-1 mb-1">{userProfile.biography || "No description"}</p>
        <span>
          <LocationIcon /> {userProfile.location || "No location"}{" "}
        </span>
      </div>
    </section>
  );
};
