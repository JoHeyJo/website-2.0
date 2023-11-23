
type ProjectCard = {
  image: string;
}


function ProjectCard({ image }: ProjectCard) {
  console.log(image)
  return (
    <>
      <img src={image} />
    </>
  )
}

export default ProjectCard;