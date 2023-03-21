import { FiPlus } from "react-icons/fi";

import { AvailabilityFilter } from "./AvailabilityFilter";
import { SearchInput } from "./SearchInput";
import { SkillsFilter } from "./SkillsFilter";

export const UsersFilters = ({
  onChangeAvailabiity,
  onChangeSkill,
  onChangeSearch,
  onResetSearch,
  onSubmitSearch,
  filters,
}) => {
  const { isAvailableChecked, skill, search } = filters;
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilter
          isAvailable={isAvailableChecked}
          onChangeAvailability={onChangeAvailabiity}
        />
        <SkillsFilter onChangeSkill={onChangeSkill} skillValue={skill} />
        <button type="button" class="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput onResetSearch={onResetSearch} onChangeSearch={onChangeSearch} onSubmitSearch={onSubmitSearch} search={search} />
    </>
  );
};
