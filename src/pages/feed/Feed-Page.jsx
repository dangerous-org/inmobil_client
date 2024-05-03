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
import "./Feed.css";

const FeedPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const typeOffers = [
    { label: "Sell", value: "sell" },
    { label: "Rent", value: "rent" },
  ];

  const status = [
    { label: "New", value: "new" },
    { label: "Excellent condition", value: "excellent condition" },
    { label: "Good condition", value: "good condition" },
    { label: "To renew", value: "to renew" },
  ];

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
          <form action="" className="p-6">
            <section className="w-full flex flex-col">
              <div className="flex gap-2">
                <Input type="text" label="Title" name="title" />
                <Input type="number" label="Price" name="price" />
              </div>
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className="w-full mt-4"
              />
            </section>
            <section className="w-full flex mt-4 justify-between gap-2">
              <Input
                type="text"
                label="Location"
                name="location"
                className="max-w-md"
              />
              <DatePicker label="Built Date" className="max-w-md" />
            </section>
            <section className="flex gap-2 mt-4">
              <Select label="Type Offer" className="max-w-md">
                {typeOffers.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Status" className="max-w-md">
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
                />
              </div>
              <div className="flex-1">
                <button>xddddd</button>
              </div>
            </section>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default FeedPage;
