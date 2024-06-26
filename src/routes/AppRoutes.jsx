import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/Auth/SignUp-Page";
import SignInPage from "../pages/Auth/SignIn-Page";
import NotFoundPage from "../pages/NotFoundPage/NotFound-Page";
import ProtectedRoutes from "../helpers/ProtectedRoutes";
import FeedPage from "../pages/feed/Feed-Page";
import PostPage from "../pages/Post/Post-Page";
import ProfilePage from "../pages/User/Profile/Profile-Page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/feed" element={<FeedPage />}></Route>
      <Route path="/auth/sign-up" element={<SignUpPage />}></Route>
      <Route path="/auth/sign-in" element={<SignInPage />}></Route>
      <Route path="/:userName" element={<ProfilePage />}></Route>
      <Route path="/post" element={<PostPage />}></Route>
      <Route element={<ProtectedRoutes />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
