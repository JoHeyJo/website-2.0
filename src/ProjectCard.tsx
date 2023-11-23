import './styles/ProjectCard.css';

type ProjectCard = {
  image: string;
}

function ProjectCard({ image }: ProjectCard) {
  return (
    <>
      <img id="ProjectCard-image" src={image} />
    </>
  )
}

export default ProjectCard;