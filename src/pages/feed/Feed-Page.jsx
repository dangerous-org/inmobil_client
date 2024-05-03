import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Modal from "../../components/Modal/Modal";
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  DatePicker,
} from "@nextui-org/react";
import NavBar from "../../components/NavBar/NavBar";
import { status, typeOffers } from "../../data/selectData";
import useFormMultiPart from "../../hooks/useFormMultiPart";
import "./Feed.css";
// import postStore from "../../store/postStore";

const FeedPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const createPost = postStore((state) => state.createPost);

  const handleClose = () => {
    setIsOpen(false);
  };

  const { handleChangeFiles, handleChange, data, photos } = useFormMultiPart({
    title: "",
    description: "",
    typeOffer: "",
    location: "",
    status: "",
    price: "",
    builtDate: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("data", data);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos);
    }
    console.log(data);
    console.log(photos);
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col ${
        isOpen ? "modal-open" : ""
      }`}
    >
      <NavBar setIsOpen={setIsOpen} />
      <main className="flex-1 pt-5">
        <Modal
          title={"Create a new post"}
          isOpen={isOpen}
          onClose={handleClose}
          width={"920"}
          height={"600"}
        >
          <form onSubmit={handleSubmit} className="p-6">
            <section className="w-full flex flex-col">
              <div className="flex gap-2">
                <Input
                  type="text"
                  label="Title"
                  name="title"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  label="Price"
                  name="price"
                  onChange={handleChange}
                />
              </div>
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className="w-full mt-4"
                name="description"
                onChange={handleChange}
              />
            </section>
            <section className="w-full flex mt-4 justify-between gap-2">
              <Input
                type="text"
                label="Location"
                name="location"
                className="max-w-md"
                onChange={handleChange}
              />
              <DatePicker
                label="Built Date"
                className="max-w-md"
                name="builtDate"
                onChange={handleChange}
              />
            </section>
            <section className="flex gap-2 mt-4">
              <Select
                label="Type Offer"
                className="max-w-md"
                name="typeOffer"
                onChange={handleChange}
              >
                {typeOffers.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Status"
                className="max-w-md"
                name="status"
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
                />
              </div>
              <div className="flex-1">
                <button
                  type="submit"
                  className="py-4 px-8 bg-lilaDefault text-white rounded-md"
                >
                  save
                </button>
              </div>
            </section>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default FeedPage;
