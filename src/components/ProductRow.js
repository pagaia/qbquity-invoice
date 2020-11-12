import React from "react";
import PropTypes from "prop-types";
import Text from "./primitives/Text";
import View from "./primitives/View";

const ProductRow = ({ data }) => {
  if (!data) {
    return null;
  }

  const total = parseFloat(data.quantity) * parseFloat(data.unitPrice);

  return (
    <View className="flex row">
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
        <Text className="p-0-4 right">{total}</Text>
      </View>
    </View>
  );
};

ProductRow.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number,
    description: PropTypes.string,
    unit: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
  }),
};

export default ProductRow;
