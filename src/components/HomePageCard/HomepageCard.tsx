import "./HomePageCard.scss";

interface HomePageCard {
  title: string;
  description?: string;
  backgroundColor?: string;
  children?: any;
}

const HomePageCard = ({
  title,
  description,
  backgroundColor,
  children,
}: HomePageCard) => {
  return (
    <div className="homepage-card" style={{ backgroundColor }}>
      <div className="homepage-card__content">
        <div className="homepage-card__text">
          <h4 className="homepage-card__title">{title}</h4>
          {description && (
            <>
              <div className="homepage-card__divider" />
              <p className="homepage-card__desc">{description}</p>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default HomePageCard;
