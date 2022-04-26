import mongoose from 'mongoose';

const utilitySchema = new mongoose.Schema(
  {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      location: {
        lat: Number,
        lng: Number,
        address: String,
        name: String,
        vicinity: String,
        googleAddressId: String,
      },
      utilityCategory: { type: String, required: true },
      paymentMethod: { type: String, required: true },
      Amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Utility = mongoose.model('Utility', utilitySchema);
export default Utility;
