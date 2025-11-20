import { ProductPage } from '@pages/product';
import { prisma } from '@prisma/prisma-client';

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const product = await prisma.product.findFirst({
		where: {
			slug: slug,
		},
		include: {
			ingredients: true,
			options: {
				include: {
					ingredients: true,
				},
			},
		},
	});

	return <ProductPage product={product}/>;
}
