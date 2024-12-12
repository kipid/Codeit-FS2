import { GetServerSideProps } from "next";
import Image from "next/image";

interface Product {
	id: number;
	name: string;
	imgUrl: string;
}

interface Props {
	product: Product;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
	const productId = context.params?.id;
	let product: Product;
	try {
		const res = await fetch(`https://learn.codeit.kr/api/codeitmall/products/${productId}`);
		product = await res.json();
	} catch (err) {
		console.error(err);
		return {
			notFound: true,
		};
	}

	if (!product) {
		return {
			notFound: true,
		};
	}

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
