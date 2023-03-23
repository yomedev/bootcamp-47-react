const skills = [
  { value: "all", label: "All" },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue", value: "vue" },
];

export const SkillsFilter = ({ onChangeSkill, skillValue }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {skills.map((skill) => (
          <div key={skill.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.label}</span>
              <input
                checked={skill.value === skillValue}
                onChange={onChangeSkill}
                className="form-check-input"
                value={skill.value}
                type="radio"
                name="skil"
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
