import React from "react";
import PropTypes from "prop-types";
import Text from "./primitives/Text";
import View from "./primitives/View";

const Company = ({ className, data, name }) => {
  if (!data) {
    return null;
  }
  return (
    <View className={className}>
      <Text>{data.name}</Text>
      <Text>{data.address}</Text>
      <Text>{data.address2}</Text>
      <Text>{data.country}</Text>
      <Text>{data.vat}</Text>
    </View>
  );
};

Company.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    address2: PropTypes.string,
    country: PropTypes.string,
    vat: PropTypes.string,
  }),
  name: PropTypes.string,
};

export default Company;
