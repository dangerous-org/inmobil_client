import { FileUploader } from "react-drag-drop-files";
import Modal from "../../components/Modal/Modal";
import { Input, Textarea, Select, SelectItem, DatePicker } from "@nextui-org/react";
import NavBar from "../../components/NavBar/NavBar";
import { status, typeEstates, typeOffers } from "../../data/selectData";
import useFormMultiPart from "../../hooks/useFormMultiPart";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";
import moment from "moment";
import authStore from "../../store/authStore";
import utilStore from "../../store/utilStore";
import postStore from "../../store/postStore";
import { useEffect } from "react";
import filetypes from "../../data/fileTypes";
import Card from "../../components/Card/Card";
import "./Feed.css";

const FeedPage = () => {

  const setDropMenuDisabled = utilStore((state) => state.setDropMenuDisabled);
  const isModalOpen = utilStore((state) => state.isModalOpen);
  const closeModal = utilStore((state) => state.closeModal);

  const createPost = postStore((state) => state.createPost);
  const getPosts = postStore((state) => state.getPosts);
  const post = postStore((state) => state.post);
  const message = postStore((state) => state.message);
  const setMessage = postStore((state) => state.setMessage);
  const isPostsLoading = postStore((state) => state.isPostsLoading);

  const user = authStore((state) => state.user);

  useEffect(() => {
    const getPostsHttp = async () => {
      await getPosts();
    };
    getPostsHttp();
  }, [getPosts]);

  const handleClose = () => {
    closeModal();
    clearForm();
    setDropMenuDisabled(false);
    setMessage(null);
  };

  const {
    handleChangeFiles,
    handleChange,
    handleDateChange,
    clearForm,
    data,
    photos,
    date,
  } = useFormMultiPart({
    title: "",
    description: "",
    typeOffer: "",
    location: "",
    status: "",
    price: "",
    typeEstate: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("typeOffer", data.typeOffer);
    formData.append("location", data.location);
    formData.append("status", data.status);
    formData.append("price", data.price);
    formData.append("typeEstate", data.typeEstate);
    formData.append("builtDate", moment(date).format());
    formData.append("user", user._id);
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    const res = await createPost(formData);
    if (res?.status == 201) {
      await getPosts();
      handleClose();
      setMessage(res.data.message);
    }
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col overflow-x-hidden ${isModalOpen ? "modal-open" : ""
        }`}
    >
      <NavBar />
      <main className="flex-1 mt-[70px] pt-5">
        <section className="w-[95%] gap-x-4 gap-y-6 mx-auto flex justify-center flex-wrap mb-5">
          <section className="card-container">
            {isPostsLoading ? (
              <p> loading </p>
            ) : (
              post?.map((post) => {
                return <Card key={post._id} post={post} />;
              })
            )}
          </section>
        </section>
        <Modal
          title={"Create a new post"}
          isOpen={isModalOpen}
          onClose={handleClose}
          width={"880"}
          height={"530"}
        >
          <form onSubmit={handleSubmit} className="p-6">
            <section className="w-full flex flex-col">
              <div className="flex gap-2">
                <Input
                  size="sm"
                  type="text"
                  label="Title"
                  name="title"
                  variant="bordered"
                  value={data.title}
                  onChange={handleChange}
                />
                <Input
                  size="sm"
                  type="number"
                  label="Price"
                  name="price"
                  variant="bordered"
                  value={data.price}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className="w-full mt-4"
                name="description"
                variant="bordered"
                value={data.description}
                maxRows={3}
                onChange={handleChange}
              />
            </section>
            <section className="w-full flex mt-4 justify-between gap-2">
              <Input
                size="sm"
                type="text"
                label="Location"
                name="location"
                className="max-w-md"
                variant="bordered"
                value={data.location}
                onChange={handleChange}
              />
              <DatePicker
                size="sm"
                label="Built Date"
                className="max-w-md"
                name="builtDate"
                variant="bordered"
                showMonthAndYearPickers
                onChange={handleDateChange}
              />
            </section>
            <section className="flex gap-2 mt-4">
              <Select
                size="sm"
                label="Type Offer"
                className="max-w-md"
                name="typeOffer"
                variant="bordered"
                value={data.typeOffer}
                onChange={handleChange}
              >
                {typeOffers.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                size="sm"
                label="Status"
                className="max-w-md"
                name="status"
                variant="bordered"
                value={data.status}
                onChange={handleChange}
              >
                {status.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </Select>
            </section>
            <section className="flex gap-2 mt-4 h-[120px]">
              <div className="flex-1 ">
                <FileUploader
                  name="photos"
                  multiple
                  classes="dragFile"
                  label="Upload photos"
                  handleChange={(files) => handleChangeFiles(files)}
                  types={filetypes}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <Select
                  size="sm"
                  label="Type Estate"
                  className="max-w-md"
                  name="typeEstate"
                  variant="bordered"
                  value={data.typeEstate}
                  onChange={handleChange}
                >
                  {typeEstates.map((estate) => (
                    <SelectItem key={estate.value} value={estate.value}>
                      {estate.label}
                    </SelectItem>
                  ))}
                </Select>
                <ButtonSpinner text="Create Post" />
              </div>
            </section>
            {message && <p className="text-center mt-3 ">{message}</p>}
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default FeedPage;
