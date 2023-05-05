import { FilterInput } from "./Filter.styled";

function Filter({value, onChange}) {
    console.log('Filter:', value);
  return (
    <FilterInput
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Search..."
    />
  );
}

export default Filter;