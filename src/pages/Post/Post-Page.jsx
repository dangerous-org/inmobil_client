import { useEffect } from "react";
import postStore from "../../store/postStore";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import LocationIcon from "../../components/icons/LocationIcon";
import ImagesGrid from "../../components/ImagesGrid/ImagesGrid";
import BuildingIcon from "../../components/icons/BuildingIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import moment from "moment";
import OfferIcon from "../../components/icons/Offer";
import IconLogoUsd from "../../components/icons/DolarIcon";
import User from "../../components/User/User";
import Modal from "../../components/Modal/Modal";
import Carrousel from "../../components/Carrousel/Carrousel";
import ImagesGridSkeleton from "../../components/ImagesGrid/ImagesGridSkeleton";
import utilStore from "../../store/utilStore";
import "./PostPage.css";

const PostPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const isPostsLoading = postStore((state) => state.isPostsLoading);
  const [postSelected] = postStore((state) => state.postSelected);
  const getPostById = postStore((state) => state.getPostById);

  const isModalOpen = utilStore((state) => state.isModalOpen);
  const closeModal = utilStore((state) => state.closeModal);
  const selectedImages = utilStore((state) => state.selectedImages);
  const setSelectedImage = utilStore((state) => state.setSelectedImage);
  const setDropMenuDisabled = utilStore((state) => state.setDropMenuDisabled);
  const SelectedImageIndex = utilStore((state) => state.indexImg);

  useEffect(() => {
    const fetchData = async () => {
      await getPostById(id);
    };
    fetchData();
  }, [getPostById, id]);

  const handleCloseModal = () => {
    setSelectedImage([]);
    closeModal();
    setDropMenuDisabled(false);
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col overflow-x-hidden ${
        isModalOpen ? "modal-open" : ""
      }`}
    >
      <NavBar />
      <main className="flex flex-1 gap-3 justify-center items-center pt-5 mt-[70px] w-[95%] mx-auto">
        <Modal
          isOpen={isModalOpen}
          title="Photos"
          width={"900"}
          height={"530"}
          onClose={handleCloseModal}
        >
          <div className="w-full h-[87%] mt-1">
            <Carrousel
              images={selectedImages}
              index={SelectedImageIndex != null ? SelectedImageIndex : 0}
              footerControl
            />
          </div>
        </Modal>

        {isPostsLoading ? (
          <ImagesGridSkeleton />
        ) : (
          <ImagesGrid images={postSelected && postSelected.photos} />
        )}
        <section className="flex flex-col flex-1 h-[85%] ml-10 pl-5">
          <header className="w-full h-10 pl-3 mt-1">
            <h2 className="text-5xl font-semibold">
              {postSelected && postSelected.title}
            </h2>
          </header>
          <div className="p-3">
            <p className="text-[#6d7482]">
              {postSelected && postSelected.description}
            </p>
            <div className="flex gap-x-2 mt-4">
              <LocationIcon />
              <span className="text-[#6d7482]">
                {postSelected && postSelected.location}
              </span>
            </div>
            <div className="flex gap-x-2 mt-4">
              <CalendarIcon />
              <span className="text-[#6d7482]">
                Built at{" "}
                {postSelected && moment(postSelected.builtDate).format("LL")}
              </span>
            </div>
            <div className="flex gap-x-2 mt-4">
              <BuildingIcon />
              <span className="text-[#6d7482]">
                {postSelected && postSelected.typeEstate}
              </span>
            </div>
            <div className="flex gap-x-2 mt-4">
              <OfferIcon />
              <span className="text-[#6d7482]">
                {postSelected && postSelected.typeOffer}
              </span>
            </div>
            <div className="flex gap-x-2 mt-4">
              <CalendarIcon />
              <span className="text-[#6d7482]">
                Posted On{" "}
                {postSelected && moment(postSelected.createAt).fromNow()}
              </span>
            </div>
            <div className="flex items-center gap-x-2 mt-4">
              <IconLogoUsd />
              <span className="text-black text-4xl font-bold">
                {postSelected &&
                  new Intl.NumberFormat("es-CO").format(postSelected.price)}
              </span>
            </div>
            <div className="flex items-center gap-x-2 mt-4 pl-">
              {postSelected && (
                <User
                  userData={postSelected.userData && postSelected.userData}
                  userProfileData={
                    postSelected.userProfileData && postSelected.userProfileData
                  }
                />
              )}
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
