import { ReactNode } from "react";
import "./HomePageCard.scss";

interface HomePageCardProps { // Renaming to HomePageCardProps for clarity, common practice
  title: string;
  description?: string;
  backgroundColor?: string;
  children?: ReactNode; // Changed from any to ReactNode
}

const HomePageCard = ({
  title,
  description,
  backgroundColor,
  children,
}: HomePageCardProps) => { // Adjusted to use HomePageCardProps
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
