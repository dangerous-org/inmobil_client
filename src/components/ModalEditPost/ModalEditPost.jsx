import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  DatePicker,
  Textarea,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import useFormMultiPart from "../../hooks/useFormMultiPart";
import filetypes from "../../data/fileTypes";
import { status, typeEstates, typeOffers } from "../../data/selectData";
import utilStore from "../../store/utilStore";
import moment from "moment";
import postStore from "../../store/postStore";
import { useEffect } from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";

const ModalEditPost = () => {
  
  const [postSelected] = postStore((state) => state.postSelected);
  const isLoading = postStore((state) => state.isLoading);
  const updatePostMessage = postStore((state) => state.updatePostMessage);

  const isModalEditPostOpen = utilStore((state) => state.isModalEditPostOpen);
  const closeEditPostModal = utilStore((state) => state.closeEditPostModal);

  const updatePost = postStore((state) => state.updatePost);

  const {
    handleChangeFiles,
    handleChange,
    handleDateChange,
    data,
    photos,
    date,
    setData,
    setDate,
  } = useFormMultiPart({
    title: "",
    description: "",
    typeOffer: "",
    location: "",
    status: "",
    price: "",
    typeEstate: "",
  });

  useEffect(() => {
    setData({
      title: postSelected && postSelected.title,
      description: postSelected && postSelected.description,
      typeOffer: postSelected && postSelected.typeOffer,
      location: postSelected && postSelected.location,
      status: postSelected && postSelected.status,
      price: postSelected && postSelected.price,
      typeEstate: postSelected && postSelected.typeEstate,
    });
    setDate(postSelected && postSelected.builtDate);
  }, [postSelected, setData, setDate]);

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
    if (photos.length > 0) {
      photos.forEach((photo) => {
        formData.append("photos", photo);
      });
    }
    const response = await updatePost(formData, postSelected._id);
    if (response?.status == 200) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    closeEditPostModal();
  };

  return (
    <>
      <Modal
        isOpen={isModalEditPostOpen}
        onOpenChange={handleCloseModal}
        size="4xl"
        placement="top-center"
        className="w-[880px] h-[490px]"
        isDismissable={false}
        radius="md"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col px-9 py-3 text-xl">
                Edit Post
              </ModalHeader>
              <ModalBody className="px-9 py-0">
                <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                  <section className="w-full flex flex-col gap-y-2">
                    <div className="flex gap-1">
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
                      className="w-full"
                      name="description"
                      variant="bordered"
                      value={data.description}
                      maxRows={3}
                      onChange={handleChange}
                    />
                  </section>
                  <section className="w-full flex justify-between gap-1">
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
                      defaultValue={
                        postSelected &&
                        parseAbsoluteToLocal(postSelected.builtDate)
                      }
                      granularity="day"
                    />
                  </section>
                  <section className="flex gap-1">
                    <Select
                      size="sm"
                      label="Type Offer"
                      className="max-w-md"
                      name="typeOffer"
                      variant="bordered"
                      selectedKeys={[data.typeOffer]}
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
                      selectedKeys={[data.status]}
                      onChange={handleChange}
                    >
                      {status.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </section>
                  <section className="flex gap-1 h-[120px]">
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
                        selectedKeys={[data.typeEstate]}
                        onChange={handleChange}
                      >
                        {typeEstates.map((estate) => (
                          <SelectItem key={estate.value} value={estate.value}>
                            {estate.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Button
                        type="submit"
                        isLoading={isLoading}
                        className="w-full h-11 bg-default-black text-white rounded-md"
                      >
                        Save
                      </Button>
                    </div>
                  </section>
                </form>
              </ModalBody>
              <ModalFooter className="h-6 flex justify-center items-center">
                <p className="">{updatePostMessage && updatePostMessage}</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditPost;
