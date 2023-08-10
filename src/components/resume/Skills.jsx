import { skillsWithIds } from "./resumeConstants";
import "devicon";
// css => _resume.scss
const Skills = () => {
  return (
    <div className="skills__container">
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills__grid">
        {skillsWithIds.map((skill) => (
          <div className="skill" key={skill.id}>
            <div className="skill__info">
              <i className={`${skill.icon} colored skill__info__icon`} />
              <p className="skill__info__label">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
