import Button from "react-bootstrap/Button";
import './styles/OverlayCard.css'

type OverlayCardProp = {
  link: string;
}

function OverlayCard({ link }: OverlayCardProp) {
  return (
    <div className="OverlayCard-container">
      <Button variant="dark"  href={link} target="_blank">Demo</Button>
      <Button variant="dark">More Info</Button>
    </div>
  )
}

export default OverlayCard;