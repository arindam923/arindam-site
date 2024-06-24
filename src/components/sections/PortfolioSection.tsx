import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <div className="mt-10 container mx-auto">
      <p className="mb-10 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist md:leading-4">
        Some of our best <span className="text-primary">Work</span>
      </p>
      <BentoGrid>
        <BentoCard
          className="col-span-2"
          name="Crypto Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
          href="#"
          cta="Buy Now"
          background={
            <div className="relative w-full h-full">
              <Image
                className="object-cover"
                src="/pro2.png"
                alt="free-trial"
                fill
              />
            </div>
          }
        />
        <BentoCard
          className="col-span-1"
          name="Ticket Booking App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
          href="#"
          cta="Buy Now"
          background={
            <div className="relative w-full h-full">
              <Image src="/pro3.png" alt="free-trial" fill />
            </div>
          }
        />
        <BentoCard
          className="col-span-1"
          name="Nft Marketplace"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
          href="#"
          cta="Buy Now"
          background={
            <div className="relative w-full h-full">
              <Image src="/pro4.png" alt="free-trial" fill />
            </div>
          }
        />
        <BentoCard
          className="col-span-1"
          name="Automation Tool"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
          href="#"
          cta="Buy now"
          background={
            <div className="relative w-full h-full">
              <Image src="/pro5.png" alt="free-trial" fill />
            </div>
          }
        />
        <BentoCard
          className="col-span-1"
          name="Automation Tool"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
          href="#"
          cta="Buy now"
          background={
            <div className="relative w-full h-full">
              <Image src="/pro1.png" alt="free-trial" fill />
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
};

export default PortfolioSection;
