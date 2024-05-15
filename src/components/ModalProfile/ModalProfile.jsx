/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  DatePicker,
  Textarea,
  Button,
} from "@nextui-org/react";
import moment from "moment";
import { FileUploader } from "react-drag-drop-files";
import useFormMultiPart from "../../hooks/useFormMultiPart";
import userProfileStore from "../../store/userProfile.store";
import authStore from "../../store/authStore";
import filetypes from "../../data/fileTypes";

const ModalProfile = () => {
  const isProfileLoading = userProfileStore((state) => state.isProfileLoading);
  const userProfileMessage = userProfileStore(
    (state) => state.userProfileMessage
  );
  const setUserProfileMessage = userProfileStore(
    (state) => state.setUserProfileMessage
  );
  const updateUserProfile = userProfileStore(
    (state) => state.updateeUserProfile
  );

  const user = authStore((state) => state.user);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    handleChangeFiles,
    handleChange,
    handleDateChange,
    clearForm,
    data,
    photos,
    date,
  } = useFormMultiPart({
    names: "",
    lastName: "",
    dni: "",
    phoneNumber: "",
    location: "",
    biography: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("names", data.names);
    formData.append("lastName", data.lastName);
    formData.append("dni", data.dni);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("location", data.location);
    formData.append("biography", data.biography);
    formData.append("birthDate", moment(date).format());
    formData.append("picture", photos[0]);
    const response = await updateUserProfile(formData, user._id);
    if (response.status == 200) {
      clearForm();
      onOpenChange(!onOpen);
    }
  };

  const handleCloseModal = () => {
    onOpenChange();
    setUserProfileMessage(null);
  };

  return (
    <>
      <button
        onClick={onOpen}
        color="none"
        className="px-4 py-2 rounded-md text-white bg-default-black"
      >
        Edit Profile
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={handleCloseModal}
        placement="top-center"
        size="3xl"
        isDismissable={false}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit your profile
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit} className="flex gap-y-2 flex-col">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      name="names"
                      placeholder="Names"
                      variant="bordered"
                      size="lg"
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      variant="bordered"
                      size="lg"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      name="dni"
                      placeholder="Dni"
                      variant="bordered"
                      size="lg"
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone"
                      variant="bordered"
                      size="lg"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      name="location"
                      placeholder="Location"
                      variant="bordered"
                      size="lg"
                      onChange={handleChange}
                    />
                    <DatePicker
                      name="birthDate"
                      label="Birth Date"
                      variant="bordered"
                      showMonthAndYearPickers
                      size="sm"
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Textarea
                      label="Description"
                      name="biography"
                      placeholder="biography"
                      className="max-w-md"
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <FileUploader
                      name="picture"
                      classes="dragFile"
                      label="Upload your picture"
                      types={filetypes}
                      handleChange={(files) => handleChangeFiles(files)}
                    />
                  </div>
                  <Button
                    isLoading={isProfileLoading}
                    type="submit"
                    className="w-full h-11 bg-default-black text-white rounded-md"
                  >
                    Save
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter className="h-6 flex justify-center items-center">
                <p>{userProfileMessage && userProfileMessage}</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProfile;
