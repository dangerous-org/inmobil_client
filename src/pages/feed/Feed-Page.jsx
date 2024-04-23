import authStore from "../../store/authStore";

const FeedPage = () => {
  const user = authStore((state) => state.user);
  return (
    <div>
      Feed-Page
      <h2>{user && JSON.stringify(user)}</h2>
    </div>
  );
};

export default FeedPage;
