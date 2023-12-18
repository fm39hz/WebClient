import ProductCard from './ProductCard';

const ProductContainer = ({ products: any, title: string }) => {
    return (
        <div className="mb-8 bg-white p-4 rounded-md">
            <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
            <div className="flex overflow-x-auto space-x-4">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};