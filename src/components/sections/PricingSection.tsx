import { IconCheck } from "@tabler/icons-react";
import { BackgroundGradient } from "../ui/background-gradient";

const packages = [
  {
    id: 0,
    name: "BASIC",
    price: 10000,
    description:
      "Single One page site fully responsive developed using react or next.js",
    points: [
      "Functional Website",
      "Responsive Design",
      "Content Upload",
      "SEO Ready",
      "Ready to deploy",
    ],
  },
  {
    id: 1,
    name: "STANDARD",
    price: 25000,
    description:
      "Multi-page website with dynamic content and user authentication",
    points: [
      "Fully Responsive Design",
      "Content Management System (CMS)",
      "User Registration and Login",
      "Admin Dashboard",
      "Email Integration",
      "Social Media Integration",
      "SEO Optimized",
    ],
  },
  {
    id: 2,
    name: "PREMIUM",
    price: 50000,
    description:
      "E-commerce website with payment gateway integration and advanced features",
    points: [
      "Fully Responsive Design",
      "Content Management System (CMS)",
      "User Registration and Login",
      "Admin Dashboard",
      "Email Integration",
      "Social Media Integration",
      "SEO Optimized",
      "E-commerce Functionality",
      "Payment Gateway Integration",
      "Order Management System",
      "Inventory Management",
      "Shipping and Tracking",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-semibold">Our Pricing</h2>
      <p className="mt-2 text-sm text-center lg:w-[60%] text-stone-400 leading-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae amet
        possimus eveniet magnam sint voluptates esse molestias consequatur
        dolore!
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-5">
        {packages.map((item) => (
          <BackgroundGradient
            className="rounded-[22px] flex flex-col justify-around h-full p-4 sm:p-10 bg-zinc-900"
            key={item.id}
          >
            <p className="text-slate-200 text-sm uppercase tracking-wider">
              {item.name}
            </p>
            <h1 className="text-2xl font-semibold"> ₹ {item.price}</h1>
            <p className="text-slate-200 text-xs ">{item.description}</p>

            <div className="mt-4 space-y-2">
              {item.points.map((it) => (
                <p
                  className="text-xs flex items-center space-x-2 text-stone-400"
                  key={it}
                >
                  <IconCheck />
                  <span>{it}</span>
                </p>
              ))}
            </div>

            <button className="w-full py-2 rounded-md border border-primary hover:bg-primary">
              Get started
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
