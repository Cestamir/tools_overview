import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { connectMongo } from "@/lib/mongodb";
import ITool, { Tool } from "@/database/tool.model";


export async function POST(req: NextRequest) {
  try {
    // 🔹 Connect to MongoDB
    await connectMongo();

    // 🔹 Parse multipart/form-data
    let formData: FormData;
    try {
      formData = await req.formData();
    } catch (err) {
      console.error("❌ Failed to parse formData:", err);
      return NextResponse.json(
        {
          message: "Failed to parse form data",
          error: err instanceof Error ? err.message : String(err),
        },
        { status: 400 }
      );
    }

    // 🔹 Convert form fields into an object
    let fields: Record<string, any> = {};
    try {
      fields = Object.fromEntries(formData.entries());

      // Parse nested JSON strings into arrays/objects
      if (fields.features) fields.features = JSON.parse(fields.features as string);
      if (fields.similar) fields.similar = JSON.parse(fields.similar as string);
      if (fields.tags) fields.tags = JSON.parse(fields.tags as string);
    } catch (error) {
      console.error("❌ Invalid JSON fields:", error);
      return NextResponse.json(
        { message: "Invalid JSON data format" },
        { status: 400 }
      );
    }

    // 🔹 Handle file upload
    const file = formData.get("image") as File;

    if (!file || file.size === 0) {
      return NextResponse.json(
        { message: "Image file is required" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔹 Upload image to Cloudinary
    const uploadResult = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "DevTool" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result as { secure_url: string });
        }
      );
      upload.end(buffer);
    });

    // 🔹 Add uploaded image URL to fields
    fields.image = uploadResult.secure_url;

    // 🔹 Save to MongoDB
    const createdTool = await Tool.create(fields);

    return NextResponse.json(
      { message: "Tool created successfully", tool: createdTool },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Tool creation failed:", err);
    return NextResponse.json(
      {
        message: "Tool creation failed",
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(){
    try {
        await connectMongo()

        const tools = await Tool.find().sort({createdAt: -1});

        return NextResponse.json({message: 'Tools fetched successfully',tools})
    } catch (err) {
        return NextResponse.json({message: "Tool fetching failed",error: err})
    }
}

