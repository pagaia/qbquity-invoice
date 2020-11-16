// External Dependancies
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  title: String,
  company: {
    name: String,
    address: String,
    address2: String,
    country: String,
    vat: String,
  },
  client: {
    billTo: String,
    name: String,
    address: String,
    address2: String,
    country: String,
    vat: String,
  },
  invoice: {
    titleLabel: String,
    title: String,
    dateLabel: String,
    date: String,
    locationLabel: String,
    location: String,
  },
  productHeader: {
    number: String,
    description: String,
    unit: String,
    quantity: String,
    unitPrice: String,
    total: String,
  },
  productRows: [
    {
      number: Number,
      description: String,
      unit: String,
      quantity: Number,
      unitPrice: Number,
    },
    {
      number: Number,
      description: String,
      unit: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  total: {
    subTotalLabel: String,
    taxLabel: String,
    taxNumber: Number,
    totalLabel: String,
    currencyLabel: String,
    currency: String,
  },
  note: String,
  termLabel: String,
  term: String,
  bank: {
    accountholder: String,
    name: String,
    iban: String,
    bic: String,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
