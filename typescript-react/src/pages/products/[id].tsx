import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";


interface Product {
	id: number;
	name: string;
	imgUrl: string;
}

interface Props {
	product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://learn.codeit.kr/api/codeitmall/products/');
	const data = await res.json();
	const products: Product[] = data.results;
	const paths = products.map((product: Product) => ({
		params: { id: String(product.id) },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const productId = context.params?.id;
	const res = await fetch(`https://learn.codeit.kr/api/codeitmall/products/${productId}`);
	const product: Product = await res.json();

	return {
		props: {
			product,
		},
	};
}

const Product = ({ product }: Props) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<Image width={500} height={500} src={product.imgUrl} alt={product.name} />
		</div>
	);
};

export default Product;
