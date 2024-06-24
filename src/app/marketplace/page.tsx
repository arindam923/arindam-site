import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductCard = ({ product }: any) => {
  return (
    <div className="bg-secondary text-black  rounded-lg hover:shadow-lg transition duration-300">
      <div className="relative w-full h-[250px]">
        <Image src={product.image} alt="" fill className="" />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <h4 className="text-2xl font-bold mb-2">{product.title}</h4>
        <p className="mb-4">{product.description}</p>
        <span className="text-xl font-semibold">{product.price}</span>
        <div className="mt-2">
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

const MarketplacePage = () => {
  const products = [
    {
      id: 1,
      title: "Cryptocurrency Portfolio Tracker",
      image: "/pro1.png",
      description:
        "Easily manage and track your cryptocurrency investments with real-time updates and detailed analytics.",
      price: "$39",
    },
    {
      id: 2,
      title: "Minimalist Web Design Template",
      image: "/pro2.png",
      description:
        "A sleek and modern web template designed for minimalism enthusiasts. Perfect for blogs, portfolios, and business sites.",
      price: "$49",
    },
    {
      id: 3,
      title: "Mobile App UI Kit",
      image: "/pro3.png",
      description:
        "A comprehensive UI kit for mobile apps featuring beautiful and intuitive designs. Suitable for both iOS and Android.",
      price: "$29",
    },
    {
      id: 4,
      title: "Responsive Business App Template",
      image: "/pro4.png",
      description:
        "A professional and fully responsive app template tailored for business applications. Optimized for performance and user experience.",
      price: "$59",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-br from-green-400 via-teal-300 to-indigo-700 bg-clip-text text-transparent">
          Loved
        </span>{" "}
        by businesses worldwide.
      </h1>
      <p className="mt-4 text-lg tracking-tight text-gray-500 sm:text-xl md:text-2xl">
        We are a team of experts who are dedicated to delivering high-quality,
        reliable, and efficient software solutions. Our team of experts is
        dedicated to delivering seamless, high-performing, and visually stunning
        digital experiences tailored to your business needs.
      </p>
      <div className="grid grid-cols-1 max-w-6xl mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
