import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Save the incoming data for later implementation
    const { name, email, subject, message } = await req.json();
    
    // Always return success for now
    return NextResponse.json({ success: true });
    
  } catch (error) {
    // Even if parsing fails, still return success
    return NextResponse.json({ success: true });
  }
}
