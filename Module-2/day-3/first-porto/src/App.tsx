// import ReusableText from './components/ReusableTest'

import HeaderProfileName from "./components/HeaderProfile";
import SkillBadge from "./components/SkillBadge";
import ExperienceCard from "./components/ExperienceCard";

export default function App() {

  const skills: string[] = ["React", "Typescript", "PostgreSQL"];

  return (
    <div className='cv-container'>
      {/* <div>
        <ReusableText id={1} name="Budi" age={25} />
        <ReusableText id={2} name="Siti" age={22} />
      </div> */}

      <HeaderProfileName name="John Doe" role="Fullstack Web Developer" />

      <h3>Skills</h3>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skillName={skill} />
        ))}
      </div>

      <h3>Work Experience</h3>
      <ExperienceCard
        role="Junior Developer"
        company="Digital Studio"
        period="2023 - 2024"
        description="Maintain client websites, optimized web performance, and fixed bugs"
      />
    </div>
  );
}
