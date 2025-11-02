import mongoose, { type ConnectOptions, type Mongoose } from 'mongoose';

/**
 * Strongly-typed shape of the cached connection stored on the Node global.
 * We avoid multiple connections during development (where modules can be reloaded
 * frequently by HMR) by storing the connecting promise/connection on globalThis.
 */
type Cached = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

// Augment the Node global type so TypeScript knows about our cache.
// The leading "__" reduces the chance of name collisions.
declare global {
  // eslint-disable-next-line no-var
  var __mongoose: Cached | undefined;
}

/**
 * MongoDB connection string (e.g. mongodb+srv://user:pass@cluster/dbname)
 * Must be supplied via environment variable.
 */
const MONGODB_URI = process.env.MONGODB_URI as string | undefined;

if (!MONGODB_URI) {
  throw new Error(
    'Missing environment variable: MONGODB_URI. Please set it to your MongoDB connection string.'
  );
}

// Initialize the cache once per server process.
const cached: Cached = globalThis.__mongoose ?? (globalThis.__mongoose = { conn: null, promise: null });

/**
 * Establishes (or reuses) a singleton Mongoose connection.
 * - Returns the same Promise while a connection is in-flight to avoid races.
 * - Reuses an existing connection if already established.
 */
export async function connectMongo(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Sensible defaults; tune pool size for your workload.
    const options: ConnectOptions = {
      // Disable Mongoose's internal buffering; surface errors immediately
      bufferCommands: false,
      // Size of the driver connection pool
      maxPoolSize: 10,
      // KeepAlive helps with transient network issues
      serverSelectionTimeoutMS: 30_000,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, options);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/**
 * Optional helper to close the Mongoose connection.
 * In production you might call this on graceful shutdown. In development,
 * we generally keep the connection open to benefit from the cache.
 */
export async function disconnectMongo(): Promise<void> {
  if (!cached.conn) return;
  if (process.env.NODE_ENV === 'production') {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }
}

export type { Mongoose };


