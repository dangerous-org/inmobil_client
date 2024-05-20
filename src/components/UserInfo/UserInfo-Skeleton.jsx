import "./UserInfo.css";

const UserInfoSkeleton = () => {
  return (
    <section className="user-info-container">
      <div className="skeleton-avatar"></div>
      <div className="ml-4 skeleton-info">
        <div className="skeleton-name"></div>
        <div className="skeleton-username"></div>
        <div className="skeleton-biography"></div>
        <div className="skeleton-location"></div>
      </div>
    </section>
  );
};

export default UserInfoSkeleton;
