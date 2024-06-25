import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,

  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;

  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "transform-gpu bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div className="absolute inset-0 w-full h-full">{background}</div>
    <div className="absolute inset-0 pointer-events-none bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative hidden pt-16  z-10 group-hover:flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
      <h3 className="text-xl font-semibold text-neutral-100">{name}</h3>
      <p className="max-w-lg text-neutral-200">{description}</p>
    </div>
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);
export { BentoCard, BentoGrid };
