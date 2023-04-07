import { useState } from "react";
import { getNewUserInfo } from "./helpers";
import { useDispatch } from "react-redux";
import { createUserAction, toggleModalAction } from "../../../../redux/users/usersSlice";

const skillsList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

export const NewUserForm = () => {
  const [form, setForm] = useState(() => getNewUserInfo());

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeAvailability = () => {
    setForm((prev) => ({ ...prev, isOpenToWork: !prev.isOpenToWork }));
  };

  const handleSkillsUpdate = (event) => {
    const { name } = event.target;

    setForm((prev) => {
      if (prev.skills.includes(name)) {
        return {
          ...prev,
          skills: prev.skills.filter((skill) => skill !== name),
        };
      }

      return { ...prev, skills: [...prev.skills, name] };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUserAction(form))
    dispatch(toggleModalAction())
  };

  const { name, email, bio, skills, isOpenToWork } = form;
  return (
    <form
      action="#"
      autoComplete="off"
      className="w-100"
      onSubmit={handleSubmit}
    >
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea
            name="bio"
            className="form-control"
            value={bio}
            onChange={handleChange}
          />
        </label>
      </div>

      <fieldset className="mt-3">
        <legend className="h6">Availability:</legend>

        <div className="form-check">
          <label className="form-check-label">
            <span>Is open to work</span>
            <input
              className="form-check-input"
              type="checkbox"
              name="isOpenToWork"
              value={isOpenToWork}
              onChange={handleChangeAvailability}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-3">
        <legend className="h6">Skills:</legend>

        <div className="d-flex">
          {skillsList.map((skill) => (
            <div key={skill.value} className="form-check me-5">
              <label className="form-check-label">
                <span>{skill.label}</span>
                <input
                  name={skill.value}
                  type="checkbox"
                  className="form-check-input"
                  checked={skills.includes(skill.value)}
                  onChange={handleSkillsUpdate}
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="d-flex flex-column mt-5">
        <button
          type="button"
          className="btn py-2 btn-light w-100 mb-2"
          onClick={() => dispatch(toggleModalAction())}
        >
          Cancel
        </button>
        <button type="submit" className="btn py-2 btn-primary w-100">
          Create user
        </button>
      </div>
    </form>
  );
};

