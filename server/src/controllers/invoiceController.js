// External Dependancies
const boom = require("boom");

// Get Data Models
const Invoice = require("../models/invoice");

// Get all invoices
exports.getInvoices = async (req, reply) => {
  try {
    const invoice = await Invoice.find();
    return invoice;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single invoice by ID
exports.getSingleInvoice = async (req, reply) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findById(id);
    return invoice;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new invoice
exports.addInvoice = async (req, reply) => {
  try {
    const invoice = new Invoice(req.body);
    return invoice.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing invoice
exports.updateInvoice = async (req, reply) => {
  try {
    const id = req.params.id;
    const invoice = req.body;
    const { ...updateData } = invoice;
    const update = await Invoice.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete an invoice
exports.deleteInvoice = async (req, reply) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findByIdAndRemove(id);
    return invoice;
  } catch (err) {
    throw boom.boomify(err);
  }
};
