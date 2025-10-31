import { NextResponse } from 'next/server';

export async function GET({ params }: { params: Promise<{ id: string }> }) {

	const { id } = await params;

	return NextResponse.json(id);
}
