import authStore from "../../store/authStore";
import Card from "../../components/Card/Card";

const FeedPage = () => {
  const user = authStore((state) => state.user);
  const googleToken = authStore((state) => state.googleToken);
  const isAuthenticated = authStore((state) => state.isAuthenticated);

  const images = [
    "https://i.pinimg.com/564x/be/a1/a2/bea1a266eacef5969ef032b8ff3592b0.jpg",
    "https://i.pinimg.com/564x/ca/f9/72/caf9722ef3438e794d296d99bbacbdcb.jpg",
    "https://i.pinimg.com/564x/13/ca/95/13ca95fe6122259b0a825f7712139830.jpg",
  ];

  return (
    <div>
      Feed-Page
      <h2>{user && JSON.stringify(user)}</h2>
      {googleToken && JSON.stringify(googleToken)}
      {isAuthenticated && JSON.stringify(isAuthenticated)}
      <Card images={images} />
    </div>
  );
};

export default FeedPage;
