import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

/** display a carousel project images and information 
 * 
 * Portfolio -> PortfolioCarousel -> Project
*/
function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel>
      <Carousel.Item>
        
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default PortfolioCarousel;