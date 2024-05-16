import { useEffect } from "react";
import postStore from "../../store/postStore";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import LocationIcon from "../../components/icons/LocationIcon";
import ImagesGrid from "../../components/ImagesGrid/ImagesGrid";
import BuildingIcon from "../../components/icons/BuildingIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import moment from "moment";

const PostPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const [postSelected] = postStore((state) => state.postSelected);
  const getPostById = postStore((state) => state.getPostById);

  useEffect(() => {
    const fetchData = async () => {
      await getPostById(id);
    };
    fetchData();
  }, [getPostById, id]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="flex flex-1 gap-2 justify-center items-center pt-5 mt-[70px] w-[95%] mx-auto">
        <ImagesGrid images={postSelected && postSelected.photos} />
        <section className="flex flex-col flex-1 h-[85%]">
          <header className="w-full h-10 pl-3 mt-1">
            <h2 className="text-4xl font-semibold">
              {postSelected && postSelected.title}
            </h2>
          </header>
          <div className="p-3">
            <p className="text-[#6d7482]">
              {postSelected && postSelected.description}
            </p>
            <LocationIcon />
            <span className="text-[#6d7482]">
              {postSelected && postSelected.location}
            </span>
            <div className="flex">
              <CalendarIcon />
              <span className="text-[#6d7482]">
                Built at{" "}
                {postSelected &&
                  moment(postSelected.builtDate).format("MMM Do YYYY")}
              </span>
            </div>
            <div className="flex">
              <BuildingIcon />
              <span className="text-[#6d7482]">
                {postSelected && postSelected.typeEstate}
              </span>
            </div>
          </div>
          <footer></footer>
        </section>
      </main>
      {/* {JSON.stringify(postSelected)} */}
    </div>
  );
};

export default PostPage;
