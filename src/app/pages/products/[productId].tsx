import { useRouter } from 'next/router';

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Simula la obtención de datos del producto
  const product = {
    id: productId as string,
    name: `Teclado Mecánico ${productId}`,
    price: 99.99,
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: ${product.price}</p>
      {/* Otras informaciones y opciones de personalización aquí */}
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetailsPage;