import React from "react";
import PropTypes from "prop-types";
import Text from "./primitives/Text";
import View from "./primitives/View";

const BankInfo = ({ className, data }) => {
  if (!data) {
    return null;
  }

  return (
    <View className={className}>
      <Text>{data.accountholder}</Text>
      <Text>{data.name}</Text>
      <Text>{data.iban}</Text>
      <Text>{data.bic}</Text>
    </View>
  );
};

BankInfo.propTypes = {
  data: PropTypes.shape({
    accountholder: PropTypes.string,
    name: PropTypes.string,
    iban: PropTypes.string,
    bic: PropTypes.string,
  }),
};

export default BankInfo;
