import PropTypes from "prop-types";
import React from "react";
import Text from "./primitives/Text";
import View from "./primitives/View";

const LabelValue = ({ label, value }) => {
  return (
    <View className="flex">
      <View className="w40 bold">
        <Text>{label}</Text>
      </View>
      <View className="w60">
        <Text>{value}</Text>
      </View>
    </View>
  );
};

LabelValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
export default LabelValue;
