import LocationIcon from "../icons/LocationIcon";
import userProfileStore from "../../store/userProfile.store";
import UserInfoSkeleton from "./UserInfo-Skeleton";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import "./UserInfo.css";

export const UserInfo = () => {
  
  const userProfile = userProfileStore((state) => state.userProfile);
  const isProfileLoading = userProfileStore((state) => state.isProfileLoading);

  return isProfileLoading ? (
    <UserInfoSkeleton />
  ) : (
    <section className="user-info-container">
      <img
        src={userProfile.picture}
        alt="picture"
        className="w-32 h-32 object-cover rounded-[50%]"
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {userProfile.names + " " + userProfile.lastName || "No name"}
        </h2>
        <p>@{userProfile.user && userProfile.user.userName}</p>
        <p className="mt-1 mb-1">{userProfile.biography || "No description"}</p>
        <footer className="flex gap-3">
          <span>
            <LocationIcon /> {userProfile.location || "No location"}{" "}
          </span>
          <a href={`https://wa.me/${userProfile.phoneNumber}`} target="_blank">
            {userProfile.phoneNumber ? <WhatsAppIcon /> : null}
          </a>
        </footer>
      </div>
    </section>
  );
};
