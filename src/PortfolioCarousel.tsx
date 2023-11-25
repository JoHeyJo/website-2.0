import { useState } from 'react';

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
    </>
  )
}
export default PortfolioCarousel;