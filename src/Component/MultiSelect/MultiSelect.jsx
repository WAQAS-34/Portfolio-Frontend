import React from "react";

import Select from "react-select";

// export default MultiSelect () => {
//   return (

//   );
// };

const MultiSelect = ({options ,multiSelect,setmultiSelect}) => {
const handleChange =(data)=>{
    

}
  return (
    <Select
      // defaultValue={[options[2], options[3]]}
      placeholder="Select skills"
      isMulti
      onChange={setmultiSelect}
      value={multiSelect}
    //   onChange={handleChange}
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default MultiSelect;
