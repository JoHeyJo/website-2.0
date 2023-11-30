import Button from "react-bootstrap/Button";
import './styles/OverlayCard.css'
import { useContext } from "react";
import { PortfolioContext } from "./context/user";

type OverlayCardProp = {
  index: number;
  link: string;
}

/** on hover will render project info & can toggle portfolio view 
 * 
 * ProjectCardView -> OverlayCard
*/
function OverlayCard({ index, link }: OverlayCardProp) {

  const { toggleView, setIndex } = useContext(PortfolioContext);

  /** Handle switch to carousel view & update index correspond to project image*/
  function handleViewToggle(){
    toggleView();
    setIndex(index);
  }

  return (
    <div className="OverlayCard-container">
      <Button variant="dark" href={link} target="_blank">Demo</Button>
      <Button onClick={handleViewToggle} variant="dark">More Info</Button>
    </div>
  )
}

export default OverlayCard;