'use server';

import { connectMongo } from "../mongodb";
import Tool from '@/database/tool.model'

export const getSimilarToolsBySlug = async (slug: string) => {
    try {
        await connectMongo();

        const tool = await Tool.findOne({slug});

        return await Tool.find({_id: { $ne: tool?._id}, tags: {$in: tool?.tags} }).lean();

    } catch {
        return [];
    }
}