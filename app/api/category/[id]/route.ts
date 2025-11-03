import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;

		return NextResponse.json(id);
	} catch (err) {
		console.log('[CATEGORY_ID_GET] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to get category' },
			{ status: 500 },
		);
	}
}
