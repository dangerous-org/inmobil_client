import { useEffect } from "react";
import postStore from "../../store/postStore";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const PostPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const postSelected = postStore((state) => state.postSelected);
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
      <main className="flex-1 pt-5 flex mt-[70px]">
        {postSelected && JSON.stringify(postSelected)}
      </main>
    </div>
  );
};

export default PostPage;
