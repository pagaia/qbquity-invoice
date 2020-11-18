import React from "react";
import PropTypes from "prop-types";
import View from "primitives/View";
import LabelValue from "invoice/LabelValue";

const InvoiceInfo = ({ className, data }) => {
  if (!data) {
    return null;
  }

  return (
    <View className="w50 mb5">
      <LabelValue label={data.titleLabel} value={data.title} />
      <LabelValue label={data.dateLabel} value={data.date} />
      <LabelValue label={data.locationLabel} value={data.location} />
    </View>
  );
};

InvoiceInfo.propTypes = {
  data: PropTypes.shape({
    titleLabel: PropTypes.string,
    title: PropTypes.string,
    dateLabel: PropTypes.string,
    date: PropTypes.string,
    dueDateLabel: PropTypes.string,
    dueDate: PropTypes.string,
    locationLabel: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default InvoiceInfo;
