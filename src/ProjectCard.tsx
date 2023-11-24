import './styles/ProjectCard.css';
import OverlayCard from './OverlayCard';

type ProjectCard = {
  projectName: string;
  image: string;
  demoLink: string;
}

function ProjectCard({ projectName, image, demoLink }: ProjectCard) {
  return (
    <div className="ProjectCard-container">
      <img id="ProjectCard-image" src={image} alt={`${projectName} image`}/>
      <div className="ProjectCard-overlay">
        <OverlayCard link={demoLink}/>
      </div>
    </div>
  )
}

export default ProjectCard;