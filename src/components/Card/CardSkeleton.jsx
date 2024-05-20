import "./Card.css";

const CardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <header className="skeleton-header"></header>
      <main className="skeleton-body">
        <div className="Content">
          <p className="skeleton-title"></p>
        </div>
        <div className="skeleton-user">
          <div className="skeleton-user-img"></div>
          <div className="skeleton-user-info">
            <p></p>
            <p></p>
          </div>
        </div>
        <footer className="skeleton-footer">
            <div></div>
            <div></div>
        </footer>
      </main>
    </div>
  );
};

export default CardSkeleton;
