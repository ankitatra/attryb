const mongoose = require("mongoose");

const oemSpecsSchema = new mongoose.Schema(
  {
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    listPrice: {
      type: Number,
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },

    odometer: {
      type: Number,
      required: true,
    },
    majorScratches: {
      type: Boolean,
      required: true,
    },
    originalPaint: {
      type: String,
      required: true,
    },
    accidentsReported: {
      type: Number,
      required: true,
    },
    previousBuyers: {
      type: Number,
      required: true,
    },
    registrationPlace: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const OEMSpecs = mongoose.model("Car", oemSpecsSchema);

module.exports = {
  OEMSpecs,
};

// {
//   "model":"Honda-City",
//   "year":2020,
//   "listPrice":600000,
//   "colors":"White",
//   "mileage":40,
//   "power":135.35,
//   "maxSpeed":250,
//   "odometer":5000,
//   "majorScratches":false,
//   "originalPaint":"Gray",
//   "accidentsReported":0,
//   "previousBuyers":1,
//   "registrationPlace":"Delhi"

// }
