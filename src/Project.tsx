import {useState} from 'react';
import { Project as ProjectProps }  from './utils/projectData';
import ProjectCard from './ProjectCard';

/** Displays project image along with corresponding info about project. */
function Project({ name, image, description, specs, links }: ProjectProps) {
  const [view, setView] = useState("carousel")

  return (
    <>
    <ProjectCard  projectName={name} demoLink={links.demo} image={image} />
    </>
  )
}

export default Project;