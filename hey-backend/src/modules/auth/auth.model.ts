import mongoose, { Mongoose, Schema } from "mongoose";

const accountSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      require: true,
    },
    roles: {
      type: [String],
    },
    userId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    collection: "Accounts"
  },
);

const Accounts = mongoose.model('Accounts', accountSchema);

export default Accounts;