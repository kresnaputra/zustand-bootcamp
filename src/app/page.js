// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <Link href="/products" className="text-blue-500 hover:underline text-xl">
        View Products
      </Link>
    </div>
  );
}
