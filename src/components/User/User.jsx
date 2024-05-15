import PropTypes from "prop-types";
import { User as UserData } from "@nextui-org/react";
import { Link } from "react-router-dom";

const User = ({ userData, userProfileData }) => {
  let picture;
  if (userProfileData) {
    picture = userProfileData.picture;
  }

  return (
    <Link
      to={`/${userData && userData.userName}`}
      onClick={(evt) => evt.stopPropagation()}
    >
      <UserData
        name={userProfileData && userProfileData.names}
        className="mb-4"
        description={<p>@{userData && userData.userName}</p>}
        avatarProps={{
          src: picture,
        }}
      />
    </Link>
  );
};

export default User;

User.propTypes = {
  userData: PropTypes.object,
  userProfileData: PropTypes.object,
};
