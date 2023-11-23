import {useState} from 'react';
import { Project as ProjectProps }  from './utils/projectData';
import ProjectCard from './ProjectCard';

function Project({ name, image, description, specs, links }: ProjectProps) {
  const [view, setView] = useState("carousel")

  return (
    <>
    <ProjectCard  image={image} />
    </>
  )
}

export default Project;