import LocationIcon from '../icons/LocationIcon'
import "./UserInfo.css";

export const UserInfo = () => {
  return (
    <section className="user-info-container">
      <img
        src="https://thispersondoesnotexist.com/"
        alt="User-Profile-Photo"
        className="User-photo"
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-900">ALEX G</h2>
        <h4 className="mt-1 mb-1">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
        </h4>
        <LocationIcon/>
      </div>
    </section>
  );
};
