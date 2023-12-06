import Button from "react-bootstrap/Button";
import './styles/OverlayCard.css'
import { useContext } from "react";
import { PortfolioContext } from "./context/user";
import { Stack } from "react-bootstrap";

type OverlayCardProp = {
  index: number;
  link: string;
  summary: string;
  blurb: string;
}

/** on hover will render project info & and action button to toggle portfolio view 
 * 
 * ProjectCardView -> OverlayCard
*/
function OverlayCard({ index, link, summary, blurb }: OverlayCardProp) {

  const { toggleView, setIndex } = useContext(PortfolioContext);

  /** Handle switch to carousel view & update index correspond to project image*/
  function handleViewToggle() {
    toggleView();
    setIndex(index);
  }

  return (
    <div className="OverlayCard-container">
      <div className="OverlayCard-content">
        <Stack>
          <h1>{summary}</h1>
          <p className="OverlayCard-description">{blurb}</p>
          {/* <p className="OverlayCard-description">React | TypeScript | Python | Flask | SQLAlchemy
            Catalogs and organizes projects and all its corresponding posts (aka bugs).
            Admin actions are protected by client - side & server - side validation with JSON Web Tokens.
            Relational database built with Flask, SQLAlchemy, and SQL.</p> */}
          <div className="OverlayCard-actions">
            <Button variant="dark" href={link} target="_blank">Demo</Button>
            <Button onClick={handleViewToggle} variant="dark">More Info</Button>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default OverlayCard;