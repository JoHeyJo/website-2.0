import './styles/Bio.css';
import { user } from './utils/userData';

function Bio() {
  return (
    <section id="Bio-about-me">
      <ul id="about-me-links container">
        {user.info.map(info => <li>{info}</li>)}
      </ul>
    </section>
  )
}

export default Bio;

