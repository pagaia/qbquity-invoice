export const calTotal = (data) => {
  const reducer = (accumulator, currentValue) =>
    accumulator +
    parseFloat(currentValue.quantity) * parseFloat(currentValue.unitPrice);

  const {
    productRows,
    total: { taxNumber } = {},
  } = data;

  const subTotal = parseFloat(productRows.reduce(reducer, 0).toFixed(2));
  const tax = parseFloat(((subTotal * parseFloat(taxNumber)) / 100).toFixed(2));
  const total = parseFloat((parseFloat(subTotal) + parseFloat(tax)).toFixed(2));

  return { subTotal, tax, total };
};
