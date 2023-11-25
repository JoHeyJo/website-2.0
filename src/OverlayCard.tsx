import Button from "react-bootstrap/Button";
import './styles/OverlayCard.css'
import { useContext } from "react";
import { PortfolioContext } from "./context/user";

type OverlayCardProp = {
  link: string;
}

/** on hover will render project info & can toggle portfolio view */
function OverlayCard({ link }: OverlayCardProp) {
  const {toggleView} = useContext(PortfolioContext)
  return (
    <div className="OverlayCard-container">
      <Button variant=""  href={link} target="_blank">Demo</Button>
      <Button variant="dark">More Info</Button>
    </div>
  )
}

export default OverlayCard;