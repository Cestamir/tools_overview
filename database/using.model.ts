import { Schema, model, models, type Model, type HydratedDocument, Types } from 'mongoose';
import { Tool } from './tool.model';

export interface IUsing {
  toolId: Types.ObjectId; // Reference to Tool
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UsingDocument = HydratedDocument<IUsing>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UsingSchema = new Schema<IUsing>(
  {
    toolId: {
      type: Schema.Types.ObjectId,
      ref: 'Tool',
      required: true,
      index: true, // speeds up lookups by tool
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => emailRegex.test(v),
        message: 'email must be a valid email address',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save: ensure referenced Tool exists; prevents dangling references
UsingSchema.pre<UsingDocument>('save', async function (next) {
  if (!this.isModified('toolId')) return next();

  const exists = await Tool.exists({ _id: this.toolId });
  if (!exists) return next(new Error('Referenced tool does not exist'));

  next();
});

export const Using: Model<IUsing> = (models.Using as Model<IUsing>) || model<IUsing>('Using', UsingSchema);

export default Using;
