import React from "react";
import PropTypes from "prop-types";
import Text from "primitives/Text";
import View from "primitives/View";

const TotalRow = ({ label, value }) => {
  return (
    <View className="flexVerso">
      <View className="w15">
        <Text className="right total">{value}</Text>
      </View>
      <View className="w25">
        <Text className="bold">{label}</Text>
      </View>
    </View>
  );
};

TotalRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TotalRow;
