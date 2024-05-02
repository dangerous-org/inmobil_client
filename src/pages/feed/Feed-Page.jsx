import authStore from "../../store/authStore";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const FeedPage = () => {
  const user = authStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar setIsOpen={setIsOpen} />
      <main className="flex-1 pt-5">
        {user && JSON.stringify(user)}
        <Modal
          title={"New Post"}
          isOpen={isOpen}
          onClose={handleClose}
          width={"800"}
          height={"500"}
        ></Modal>
      </main>
    </div>
  );
};

export default FeedPage;
