import { useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { UserInfo } from "../../../components/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import userProfileStore from "../../../store/userProfile.store";
import authStore from "../../../store/authStore";
import "./Profile.css";
import ModalProfile from "../../../components/ModalProfile/ModalProfile";

const ProfilePage = () => {
  const { userName } = useParams();

  const user = authStore((state) => state.user);
  
  const userProfile = userProfileStore((state) => state.userProfile);
  const getUserProfile = userProfileStore((state) => state.getUserProfile);
  const isProfileUpdated = userProfileStore((state) => state.isProfileUpdated);
  const userProfilePosts = userProfileStore((state) => state.userProfilePosts);

  console.log(userProfilePosts);

  useEffect(() => {
    const http = async () => {
      await getUserProfile(userName);
    };
    http();
  }, [getUserProfile, userName]);

  useEffect(() => {
    const fetchData = async () => {
      if (isProfileUpdated) {
        await getUserProfile();
      }
    };
    fetchData();
  }, [isProfileUpdated, getUserProfile]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="flex-1 pt-5 flex mt-[70px]">
        <aside className="w-1/4 flex flex-col fixed left-0 top-[70px] bottom-0 ">
          <div className="flex flex-col flex-1 ">
            <div className="flex flex-1 justify-around items-center">
              <span>Followers</span>
              <span>Followed</span>
            </div>
            <div className="flex flex-1 items-center justify-around">
              {userProfile.user != undefined &&
              user != undefined &&
              userProfile.user._id == user._id ? null : (
                <button className="px-4 py-2 rounded-md text-white bg-default-black">
                  Follow
                </button>
              )}
              {userProfile.user != undefined &&
              user != undefined &&
              userProfile.user._id == user._id ? (
                <ModalProfile />
              ) : null}
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <h2>Catalogues</h2>
          </div>
        </aside>
        <section className="flex flex-col flex-1 max-w-3/4 ml-[25.5%]">
          <UserInfo />
          <div className="flex justify-center flex-col flex-wrap flex-1 mt-10 mb-5">
            <h3 className="text-2xl mt-4 pl-[100px]">Posts</h3>
            <section className="card-container-profile">
              {userProfilePosts.map((post) => {
                return <Card key={post._id} post={post} />;
              })}
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
