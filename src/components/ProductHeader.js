import React from "react";
import PropTypes from "prop-types";
import Text from "./primitives/Text";
import View from "./primitives/View";

const ProductHeader = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <View className="header">
      <View className="w4">
        <Text className="p-4-0">{data.number}</Text>
      </View>
      <View className="w50">
        <Text className="p-4-0">{data.description}</Text>
      </View>
      <View className="w10">
        <Text className="p-0-4 right">{data.unit}</Text>
      </View>
      <View className="w12">
        <Text className="p-0-4 right">{data.quantity}</Text>
      </View>
      <View className="w12">
        <Text className="p-0-4 right">{data.unitPrice}</Text>
      </View>
      <View className="w12">
        <Text className="p-0-4 right">{data.total}</Text>
      </View>
    </View>
  );
};

ProductHeader.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string,
    description: PropTypes.string,
    unit: PropTypes.string,
    quantity: PropTypes.string,
    unitPrice: PropTypes.string,
    total: PropTypes.string,
  }),
};

export default ProductHeader;
