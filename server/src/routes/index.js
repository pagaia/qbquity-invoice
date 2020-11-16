// Import our Controllers
const invoiceController = require('../controllers/invoiceController')

const routes = [
  {
    method: 'GET',
    url: '/api/invoices',
    handler: invoiceController.getInvoices
  },
  {
    method: 'GET',
    url: '/api/invoices/:id',
    handler: invoiceController.getSingleInvoice
  },
  {
    method: 'POST',
    url: '/api/invoices',
    handler: invoiceController.addInvoice,
  },
  {
    method: 'PUT',
    url: '/api/invoices/:id',
    handler: invoiceController.updateInvoice
  },
  {
    method: 'DELETE',
    url: '/api/invoices/:id',
    handler: invoiceController.deleteInvoice
  }
]

module.exports = routes