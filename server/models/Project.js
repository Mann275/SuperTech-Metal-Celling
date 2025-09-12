const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Corporate', 'Commercial', 'Institutional', 'Healthcare', 'Hospitality', 'Industrial', 'Residential', 'Government', 'PSU', 'Other']
  },
  products: [String],
  area: {
    type: Number,
    required: true
  },
  areaUnit: {
    type: String,
    default: 'sq. meter'
  },
  completionDate: {
    type: Date,
    required: true
  },
  images: [String],
  featured: {
    type: Boolean,
    default: false
  },
  challenges: [String],
  solutions: [String],
  testimonial: {
    quote: String,
    author: String,
    position: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
