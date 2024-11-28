// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { formSchema } from '@/lib/form-schema';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = formSchema.parse(body);

    const result = await sendEmail(validatedData);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
