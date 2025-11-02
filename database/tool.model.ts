import { Schema, model, models, type Model, type HydratedDocument } from 'mongoose';
import type { ToolFeature } from '../lib/constants';

// Strong TypeScript interface for the Tool document
export interface ITool {
  title: string;
  slug: string;
  main: string;
  type: string;
  url: string;
  price: string;
  usage: string;
  similar: string[];
  author: string;
  difficulty: 'beginner' | 'advanced' | 'professional';
  image: string;
  features: ToolFeature[]; // Array of ToolFeature objects (at least one required)
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type ToolDocument = HydratedDocument<ITool>;

// Validators
const nonEmpty = (v: string): boolean => typeof v === 'string' && v.trim().length > 0;
const nonEmptyArray = (v: unknown[]): boolean => Array.isArray(v) && v.length > 0;
const nonEmptyStringArray = (v: unknown[]): boolean =>
  Array.isArray(v) && v.length > 0 && v.every((s) => typeof s === 'string' && s.trim().length > 0);

// Sub-schema for features that mirrors ToolFeature shape; no _id for compactness
const FeatureSchema = new Schema<ToolFeature>(
  {
    name: { type: String, required: true, trim: true, validate: [nonEmpty, 'feature.name required'] },
    desc: { type: String, required: true, trim: true, validate: [nonEmpty, 'feature.desc required'] },
    icon: { type: String, required: true, trim: true, validate: [nonEmpty, 'feature.icon required'] },
  },
  { _id: false }
);

// Main Tool schema with strict validation and timestamps
const ToolSchema = new Schema<ITool>(
  {
    title: { type: String, required: true, trim: true, validate: [nonEmpty, 'title required'] },
    slug: {
      type: String,
      required: true,
      unique: true, // unique index for fast lookups and integrity
      index: true,
      trim: true,
      validate: [nonEmpty, 'slug required'],
    },
    main: { type: String, required: true, trim: true, validate: [nonEmpty, 'main required'] },
    type: { type: String, required: true, trim: true, validate: [nonEmpty, 'type required'] },
    url: { type: String, required: true, trim: true, validate: [nonEmpty, 'url required'] },
    price: { type: String, required: true, trim: true, validate: [nonEmpty, 'price required'] },
    usage: { type: String, required: true, trim: true, validate: [nonEmpty, 'usage required'] },
    similar: {
      type: [String],
      required: true,
      validate: [nonEmptyStringArray, 'similar must be a non-empty array of strings'],
    },
    author: { type: String, required: true, trim: true, validate: [nonEmpty, 'author required'] },
    difficulty: {
      type: String,
      enum: ['beginner', 'advanced', 'professional'],
      required: true,
    },
    image: { type: String, required: true, trim: true, validate: [nonEmpty, 'image required'] },
    features: {
      type: [FeatureSchema],
      required: true,
      validate: [nonEmptyArray, 'features must contain at least one item'],
    },
    tags: {
      type: [String],
      required: true,
      validate: [nonEmptyStringArray, 'tags must be a non-empty array of strings'],
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

// Slug generator: URL-friendly, idempotent
function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumerics
    .replace(/\s+/g, '-') // spaces -> hyphens
    .replace(/-+/g, '-'); // collapse dashes
}

// Pre-validate: ensure slug exists/updates before required validators run
ToolSchema.pre<ToolDocument>('validate', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title);
  }
  next();
});

// Ensure index creation for unique slug in dev/prod alike
ToolSchema.index({ slug: 1 }, { unique: true });

// Reuse existing model in dev to avoid OverwriteModelError on HMR
export const Tool: Model<ITool> = (models.Tool as Model<ITool>) || model<ITool>('Tool', ToolSchema);

export default Tool;
