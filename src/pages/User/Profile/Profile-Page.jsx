import { useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { UserInfo } from "../../../components/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import userProfileStore from "../../../store/userProfile.store";
const ProfilePage = () => {
  const { userName } = useParams();
  const getUserProfile = userProfileStore((state) => state.getUserProfile);
  useEffect(() => {
    const http = async () => {
      await getUserProfile(userName);
    };
    http();
  }, [getUserProfile, userName]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="flex-1 pt-5 flex">
        <aside className="w-1/4 flex flex-col">
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
        <section className="flex flex-col flex-1 ">
          <UserInfo />
          <div className="flex-1 pl-[60px]">
            <h3 className="text-2xl mt-4">My Posts</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
