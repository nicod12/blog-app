// Importa los componentes y estilos necesarios aquí
import Link from 'next/link';

// Define la interfaz Product
interface Product {
  id: string;
  name: string;
  price: number;
  // Agrega más propiedades según sea necesario
}

// Página de Productos (products/index.tsx)
const ProductsPage: React.FC = () => {
  // Datos estáticos de productos
  const products: Product[] = [
    { id: '1', name: 'Teclado Mecánico 1', price: 99.99 },
    { id: '2', name: 'Teclado Mecánico 2', price: 129.99 },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};