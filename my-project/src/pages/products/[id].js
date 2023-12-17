import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details using the id
  // const product = ...

  return (
    <div>
      <h1>Product Detail Page for Product ID: {id}</h1>
      {/* Display product details */}
    </div>
  );
}
