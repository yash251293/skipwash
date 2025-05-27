import "./SubHomePageCard.scss";

interface SubHomePageCard {
  title: string;
  desc: string;
  footer?: string;
  icon?: any;
}

const SubHomePageCard = ({ title, desc, footer, icon }: SubHomePageCard) => {
  return (
    <div className="sub-homepage-card">
      <div
        className="sub-homepage-card__content"
        // style={{ backgroundColor: "#ffffff80" }}
      >
        {icon}
        <div className="sub-homepage-card__content-text">
          <h2 className="sub-homepage-card__title">{title}</h2>
          <p className="sub-homepage-card__desc">{desc}</p>
          {footer && <p>{footer}</p>}
        </div>
      </div>
    </div>
  );
};

export default SubHomePageCard;
