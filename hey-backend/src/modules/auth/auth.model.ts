import mongoose, { Mongoose, Schema } from "mongoose";

const accountSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      required: true,
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
    collection: "Accounts",
    toJSON: { getters: true }, 
    toObject: { getters: true }, 
  },
);

// Tạo getter cho `createdAt` và `updatedAt` để chuyển đổi thành Unix time
accountSchema.path('createdAt').get(function (v: Date) {
  return Math.floor(v.getTime() / 1000);
});

accountSchema.path('updatedAt').get(function (v: Date) {
  return Math.floor(v.getTime() / 1000);
});

const Accounts = mongoose.model('Accounts', accountSchema);

export default Accounts;
