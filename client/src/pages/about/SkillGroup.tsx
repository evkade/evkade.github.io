type SkillGroupProps = {
  skills: string[];
  title: string;
};

function SkillGroup({ skills, title }: SkillGroupProps) {
  return (
    <div className="skill-group">
      <h4 className="skill-category accent">{title}</h4>
      <div className="skill-badges">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
