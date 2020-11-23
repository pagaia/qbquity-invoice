import React from "react";

/**
 *  Get  a state, a path and the new value to replace the path
 * @param {object} prev
 * @param {string} key
 * @param {object} value
 */
export function updateState(prev, key, value) {
  console.log("prev, key, value: ", prev, key, value);
  // split the key to navigate inside the structure
  const [first, ...rest] = key.split(".");

  console.log("first, rest", first, rest);

  // check if it's an array
  const regexArrayIndex = /\[\d\]/g;
  const arrayIdx = first.match(regexArrayIndex);

  // if array
  if (arrayIdx && arrayIdx[0]) {
    console.log("found: ", arrayIdx[0]);
    const idx = arrayIdx[0].replace(/[\[\]]/g, "");
    console.log("idx: ", idx);
    const [arrayName, ...restArray] = first.split("[");

    console.log("arrayName, idx", arrayName, idx);
    console.log("prev[arrayName][idx]: ", prev[arrayName][idx]);
    let item;
    // complex object left
    if (rest.length > 0) {
      item = updateState(prev[arrayName][idx], rest.join("."), value);
    } else {
      // simple object left: no need to iterate
      item = value;
    }
    console.log({ item });


    console.log(`${idx} +1 position: `, { ...prev[arrayName].slice(idx + 1) });
    console.log("...prev[arrayName].slice(0, idx), ", prev[arrayName].slice(0, idx))
    console.log("prev[arrayName].slice(idx + 1): ",prev[arrayName].slice(idx+1 ))

    
    const newArray = prev[arrayName].slice(0)
    newArray[idx] = item
    return {
      ...prev,
      [arrayName]: newArray
    };
  }

  // if complex object
  if (rest.length > 0) {
    const complexObject = {
      ...prev,
      [first]: updateState(prev[first], rest.join("."), value),
    };
    console.log({complexObject})
    return complexObject;
  }

  // if simple object
  const simple = {
    ...prev,
    [first]: value,
  };
  console.log({simple})

  return simple;
}

function useFormFields(initialValues) {
  const [formFields, setFormFields] = React.useState(initialValues);

  const createChangeHandler = (key) => (e) => {
    const value = e.target.value;

    setFormFields((prev) => {
      return updateState(prev, key, value);
    });
  };
  return { formFields, createChangeHandler };
}

export default useFormFields;
