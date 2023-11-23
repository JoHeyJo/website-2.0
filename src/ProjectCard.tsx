import img from './images/buglyImg.png';
type ProjectCard = {
  image: string;
}

function ProjectCard({ image }: ProjectCard) {
  console.log(image)
  return (
    <>
      <img src={`./images/${image}`} />
      <img src={image} />
      <img src={img} />
    </>
  )
}

export default ProjectCard;