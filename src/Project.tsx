import {useState} from 'react';
import { Project } from './utils/projectData';

function Project({ name, image, description, specs, links }: Project) {
  const [view, setView] = useState("carousel")
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    
    </>
  )
}

export default Project;