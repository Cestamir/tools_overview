import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest){
    try {
        
    } catch (err) {
        console.error(err)
        return  NextResponse.json({message: 'Tool Creation Failed', error: err instanceof Error ? err.message : "Unkown"})
    }
}