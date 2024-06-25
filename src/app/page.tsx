import { Spotlight } from "@/components/ui/spot-light-";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

import NewsletterSubscription from "@/components/common/EmailInput";
import Loader from "@/components/common/Loader";
import FUIFeatureSectionWithCards from "@/components/sections/AboutusSection";
import FUINewsletterWithBackground from "@/components/ui/NewsLetterSubscription";
import AnimatedGradientText from "@/components/ui/animated-gradient";
import AvatarCircles from "@/components/ui/avatar-cirlces";

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

export default function Home() {
  return (
    <main>
      <div className="bg-grid-white/[0.008] flex items-center justify-center py-8 lg:py-0 lg:min-h-[90vh] w-full overflow-hidden relative">
        <Spotlight fill="#16A34A" />
        <Spotlight fill="#86EFAC" className="absolute top-[200px] left-0" />
        <Spotlight fill="#16A34A" className="absolute left-[80%] top-[20px]" />
        <div className="flex container mx-auto flex-col items-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing ArShop
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <h1 className="font-display mt-5 text-center text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]">
            Transforming Ideas into{" "}
            <span className="text-[#00D1B2]">Digital Excellence</span>
          </h1>
          <p className="lg:w-[70%] text-xs mt-4 leading-6 lg:text-sm text-stone-400 text-center">
            At our core, we bring your vision to life with cutting-edge web
            solutions. Our team of experts is dedicated to delivering seamless,
            high-performing, and visually stunning digital experiences tailored
            to your business needs.
          </p>

          <div className="mt-4 flex items-center  flex-col">
            <NewsletterSubscription />
            <div className="mt-10 flex items-center flex-col lg:flex-row gap-4">
              <AvatarCircles
                numPeople={140}
                avatarUrls={[
                  "https://i.pravatar.cc/150?img=12",
                  "https://i.pravatar.cc/150?img=42",
                  "https://i.pravatar.cc/150?img=23",
                  "https://i.pravatar.cc/150?img=18",
                ]}
              />
              <div className="text-xs lg:text-sm">
                <div className="flex space-x-1 items-center">
                  {new Array(5).fill(0).map((it, index) => (
                    <IconStarFilled
                      className="text-yellow-500 h-4 w-4"
                      key={index}
                    />
                  ))}
                  <p>5.0</p>
                </div>
                +140 Happy custommers.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ServiceSection />
      <DemoForm />
     
      <TeamSection />
      <ProductSection />
     */}
      <FUIFeatureSectionWithCards />
      <PortfolioSection />
      <PricingSection />
      <TestimonailSection />
      <FUINewsletterWithBackground />
    </main>
  );
}
