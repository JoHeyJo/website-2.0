import Button from "react-bootstrap/Button";
import './styles/OverlayCard.css'
import { useContext } from "react";
import { PortfolioContext } from "./context/user";
import { Stack } from "react-bootstrap";

type OverlayCardProp = {
  index: number;
  link: string;
  header: string;
  summary: string;
}

/** on hover will render project info & and action button to toggle portfolio view 
 * 
 * ProjectCardView -> OverlayCard
*/
function OverlayCard({ index, link, header, summary }: OverlayCardProp) {

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
          <h1>{header}</h1>
          <p className="OverlayCard-description">{summary}</p>
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