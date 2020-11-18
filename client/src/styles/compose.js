import { styles } from "./styles";

const reducer = (accumulator, currentValue) => {
  if (typeof styles[currentValue] !== undefined) {
    return { ...accumulator, ...styles[currentValue] };
  }
};

const extractStyle = (classes) => {
  return classes.replace(/\s+/g, " ").split(" ").reduce(reducer, {});
};

export default extractStyle;
