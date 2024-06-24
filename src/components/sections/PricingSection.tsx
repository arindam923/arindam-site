import { CheckIcon } from "lucide-react";
const tiers = [
  {
    name: "Development Work",
    id: "tier-web-dev",
    href: "#",
    priceOneTime: "$2000",
    description:
      "Tailored web development services to bring your online presence to life. We offer a wide range of services to help you build a professional-looking website.",
    features: [
      "Custom website design",
      "Responsive layout",
      "SEO optimization",
      "CMS integration",
      "1-month support",
    ],
  },
  {
    name: "Full Stack Development",
    id: "tier-devops",
    href: "#",
    priceOneTime: "$5000",
    description:
      "We offer comprehensive full stack development services to help you build and scale your business. Our team of experienced developers and engineers is dedicated to delivering high-quality, reliable, and efficient software solutions.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring and logging",
      "6-month support",
    ],
  },
];

export default function FUIPricingWithSpecialTwo() {
  return (
    <div className="isolate relative overflow-hidden bg-transparent">
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-green-400/90 ">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist md:leading-4">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute opacity-70 -top-10 left-1/2 -z-8 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#16A34A" />
                <stop offset={1} stopColor="#06B6D4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root z-20 bg-transparent pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-green-600/90"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-100">
                        {tier.priceOneTime}
                      </span>
                      <span className="text-base font-semibold leading-7 text-gray-200">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-200">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-green-600/90"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-green-600/90 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-green-600/90">
                    Consulting
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    We offer tailored consulting services to help you achieve
                    your business goals. As consulting jobs can be
                    time-consuming and require a significant investment of time
                    and resources, we offer flexible and affordable pricing
                    options to suit your needs.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-green-600/90 ring-1 ring-inset ring-green-200/90 hover:ring-green-300/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
