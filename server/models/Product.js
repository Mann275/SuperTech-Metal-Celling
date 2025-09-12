const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Metal Ceilings', 'Exterior Louvers', 'Exterior Cladding', 'T Grid Systems', 'Raised Floor Systems', 'Access Floor Systems', 'Fasttrak Cubicle Systems', 'Toilet Cubicle Systems']
  },
  description: {
    type: String,
    required: true
  },
  features: [String],
  specifications: {
    type: Map,
    of: String
  },
  materialOptions: [String],
  applications: [String],
  images: [String],
  brochureUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
