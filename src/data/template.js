export const template = {
  title: "My invoice",
  company: {
    name: "QBQUITY sprl",
    address: "avenue D'Auderghem 22",
    address2: "1040 Brussels ",
    country: "Belgium",
    vat: "BE VAT1",
  },
  client: {
    billTo: "Bill To:",
    name: "Client",
    address: "avenue D'Auderghem 22",
    address2: "1000 Bruxelles",
    country: "United States",
    vat: "BE VAT2",
  },
  invoice: {
    titleLabel: "Invoice N.",
    title: "2020-100",
    dateLabel: "Invoice Date",
    date: "31/07/2020",
    locationLabel: "Location",
    location: "Bruxelles",
  },
  productHeader: {
    number: "N.",
    description: "Description",
    unit: "Unit",
    quantity: "Quantity",
    unitPrice: "Unit price",
    total: "Total",
  },
  productRows: [
    {
      number: 1,
      description: "Description service",
      unit: "days",
      quantity: 22,
      unitPrice: 500.67,
    },
    {
      number: 2,
      description: "Description service 2",
      unit: "1",
      quantity: 1,
      unitPrice: 510,
    },
  ],
  total: {
    subTotalLabel: "SUBTOTAL",
    taxLabel: "VAT 21%",
    taxNumber: 21,
    totalLabel: "TOTAL (VAT included)",
    currencyLabel: "Currency",
    currency: "Euro",
  },
  note: "We bring your business everywhere",
  termLabel: "Terms & Conditions",
  term: `Extract of our conditions of services
  1. Fees are payable in advance and upon receipt
  2. The customer has 15 days to dispute the fees
  3. Interest of 1% is due on amounts paid more than 30 days after the due date
  4. Any unpaid note will be increased by 10% with a minimum of 248,00 Eur and
  will bear interest at the rate of 12% per annum.
  5. Any delivery late or not performed due to non-payment or late releases us from
  any civil or professional liability`,
  bank: {
    accountholder: "QBQUITY SPRL",
    name: "KBC Brussels",
    iban: "IBAN BE00 0000 0000 0000",
    bic: "BIC KREDBEBB",
  },
};
