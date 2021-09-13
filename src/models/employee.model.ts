import { Schema, model } from 'mongoose';

export interface IEmployee {
  first_name: string;
  last_name: string;
  participation: number;
  color: string;
}

const schema = new Schema<IEmployee>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    participation: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const EmployeeModel = model<IEmployee>('Employee', schema);

export default EmployeeModel;
