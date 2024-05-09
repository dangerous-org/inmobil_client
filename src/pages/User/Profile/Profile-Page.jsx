import { useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { UserInfo } from "../../../components/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import userProfileStore from "../../../store/userProfile.store";
const ProfilePage = () => {
  const { userName } = useParams();

  const getUserProfile = userProfileStore((state) => state.getUserProfile);
  const userProfilePosts = userProfileStore((state) => state.userProfilePosts);
  console.log(userProfilePosts, " profile posts");
  useEffect(() => {
    const http = async () => {
      await getUserProfile(userName);
    };
    http();
  }, [getUserProfile, userName]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden ">
      <NavBar /> *
      <main className="flex-1 pt-5 flex mt-[70px]">
        <aside className="w-1/4 flex flex-col fixed left-0 top-[70px] bottom-0">
          <div className="flex flex-col flex-1 ">
            <div className="flex flex-1 justify-around items-center">
              <span>Segidores</span>
              <span>Seguidos</span>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
              <button className="px-8 py-1 rounded-md text-white bg-lilaDefault">
                Seguir
              </button>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <h2>Catalogues</h2>
          </div>
        </aside>
        <section className="flex flex-col flex-1 ml-[25%]">
          <UserInfo />
          <div className="flex flex-col flex-wrap flex-1 pl-[100px] mt-10 mb-5">
            <h3 className="text-2xl mt-4">Posts</h3>
            <section className="flex flex-wrap gap-x-4 gap-y-8 mt-8"> 
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
