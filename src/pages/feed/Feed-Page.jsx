import authStore from "../../store/authStore";

const FeedPage = () => {
  const user = authStore((state) => state.user);
  const googleToken = authStore((state) => state.googleToken);
  const isAuthenticated = authStore((state) => state.isAuthenticated);

  return (
    <div>
      Feed-Page
      <h2>{user && JSON.stringify(user)}</h2>
      {googleToken && JSON.stringify(googleToken)}

      {isAuthenticated && JSON.stringify(isAuthenticated)}
    </div>
  );
};

export default FeedPage;
