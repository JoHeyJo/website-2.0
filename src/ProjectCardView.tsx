import './styles/ProjectCardView.css';
import OverlayCard from './OverlayCard';

type ProjectCardProp = {
  index: number;
  projectName: string;
  image: string;
  demoLink: string;
  summary: string;
  blurb: string;
}

/** Project Image displayed in thumbnail view
 * 
 * Project -> ProjectCardView -> OverlayCard
 */
function ProjectCardView({ index, projectName, image, demoLink, summary, blurb }: ProjectCardProp) {
  return (
    <div className="ProjectCardView-container">
      <img className="ProjectCardView-image" src={image} alt={`${projectName} image`}/>
      <div className="ProjectCardView-overlay">
        <OverlayCard index={index} link={demoLink} summary={summary} blurb={blurb}/>
      </div>
    </div>
  )
}

export default ProjectCardView;