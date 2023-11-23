type ProjectCard = {
  image: string;
}

function ProjectCard({ image }: ProjectCard) {
  return (
    <>
      <img src={image} />
    </>
  )
}

export default ProjectCard;