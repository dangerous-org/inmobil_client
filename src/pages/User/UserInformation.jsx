import NavBar from "../../components/NavBar/NavBar";
const UserInformation = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 pt-5">
        <p>User Information</p>
      </main>
    </div>
  );
};

export default UserInformation;
