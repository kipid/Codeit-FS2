import Size from "./size";

interface Product {
	id: string;
	name: string;
	price: number;
	sizes: Size[];
}

export default Product;
