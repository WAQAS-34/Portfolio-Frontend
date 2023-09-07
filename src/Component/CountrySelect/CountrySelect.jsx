import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelect({ setValue, value }) {
    
//   const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    const option = `https://flagcdn.com/w2560/${value.value.toLowerCase()}.png`;
    
    setValue((prev) => {
      return {
        ...prev,
      ...value,
      countyPic:option
      };
    });
  };

  return <Select placeholder={"Select Country"} options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelect;
