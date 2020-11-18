import React from "react";
import PropTypes from "prop-types";
import TotalRow from "invoice/TotalRow";

const Total = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <TotalRow label={data.subTotalLabel} value={data.subTotal} />
      <TotalRow label={data.taxLabel} value={data.tax} />
      <TotalRow label={data.totalLabel} value={data.total} />
      <TotalRow label={data.currencyLabel} value={data.currency} />
    </>
  );
};

Total.propTypes = {
  data: PropTypes.shape({
    subTotalLabel: PropTypes.string,
    subTotal: PropTypes.number,
    taxLabel: PropTypes.string,
    tax: PropTypes.number,
    totalLabel: PropTypes.string,
    total: PropTypes.number,
    currencyLabel: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default Total;
