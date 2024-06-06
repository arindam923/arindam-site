import NewsletterSubscription from "@/components/common/EmailInput";
import Loader from "@/components/common/Loader";
import StackAvatar from "@/components/common/StackedAvatar";
import { Spotlight } from "@/components/ui/spot-light-";
import { IconUsers, IconStarFilled } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const ServiceSection = dynamic(
  () => import("@/components/sections/ServiceSection"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const PortfolioSection = dynamic(
  () => import("@/components/sections/PortfolioSection"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const TestimonailSection = dynamic(
  () => import("@/components/sections/TestimonailSection"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const TeamSection = dynamic(() => import("@/components/sections/TeamSection"), {
  ssr: false,
  loading: () => <Loader />,
});

const ProductSection = dynamic(
  () => import("@/components/sections/ProductSection"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export default function Home() {
  return (
    <main className="dark:bg-black">
      <div className="bg-grid-white/[0.008] flex items-center justify-center min-h-[90vh] w-full overflow-hidden relative">
        <Spotlight fill="#16A34A" />
        <Spotlight fill="#86EFAC" className="absolute top-[200px] left-0" />
        <Spotlight fill="#16A34A" className="absolute left-[80%] top-[20px]" />
        <div className="flex flex-col items-center">
          <h3 className="text-sm font-semibold">Best Agency , Best Work</h3>
          <h1 className="text-5xl font-bold leading-normal text-center">
            Excellent Service that <br />
            is Second to None
          </h1>
          <p className="lg:w-[60%] text-sm text-stone-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
            tenetur atque harum magnam quam provident optio praesentium
            doloribus omnis.
          </p>
          <div className="mt-4 flex items-center flex-col">
            <NewsletterSubscription />
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center text-sm gap-2">
                <IconUsers />
                <span>More than 4000+ Happy custommers.</span>
              </div>

              <div className="flex items-center gap-2">
                <StackAvatar
                  images={[
                    "https://i.pravatar.cc/150?img=12",
                    "https://i.pravatar.cc/150?img=42",
                    "https://i.pravatar.cc/150?img=23",
                  ]}
                />
                <div className="text-xs ">
                  <div className="flex items-center">
                    {new Array(5).fill(0).map((it, index) => (
                      <IconStarFilled key={index} />
                    ))}
                    <p>5.0</p>
                  </div>
                  +140 Authorized Business Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceSection />
      <PortfolioSection />
      <TestimonailSection />
      <TeamSection />
      <ProductSection />
      <PricingSection />
    </main>
  );
}
