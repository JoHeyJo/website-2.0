import './styles/ProjectCard.css';

type ProjectCard = {
  image: string;
}

function ProjectCard({ image }: ProjectCard) {
  return (
    <>
      <div className="image-container">

      <div className="container-1">
      <img id="ProjectCard-image" src={image} />
    </div>
      <div className="after">
      </div>
    </div>
    </>
  )
}

export default ProjectCard;