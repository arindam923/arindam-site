
type ServiceCardProps = {
    heading: string,
    title: string,
    description: string
}

const serviceData: ServiceCardProps[] = [
    {
        heading: "Full Stack Dev",
        title: "Complete Solutions, From Frontend to Backend",
        description: "Our Full Stack Development service ensures seamless integration of front-end and back-end technologies. We specialize in crafting robust, scalable, and efficient web applications tailored to your business needs. From user-friendly interfaces to powerful server-side functionalities, our team delivers comprehensive solutions that enhance user experience and drive growth. Whether you need an e-commerce platform, a content management system, or a custom web application, we've got you covered every step of the way."
    },
    {
        heading: "Mobile App Dev",
        title: "Innovative Apps, Ultimate Performance",
        description: "Our Mobile App Development service offers cutting-edge solutions for both iOS and Android platforms. We prioritize user experience, ensuring intuitive interfaces and seamless navigation. Our expertise in mobile technologies allows us to build high-performance apps that meet your business objectives and captivate your audience. From conceptualization to deployment, we provide end-to-end support, transforming your ideas into impactful mobile applications that stand out in the competitive market."
    },
    {
        heading: "UI/UX Design",
        title: "Designs That Speak, Experiences That Delight",
        description: "Our UI/UX Design service focuses on creating visually appealing and user-centric designs. We believe that a great user experience is at the heart of every successful digital product. Our team of designers employs the latest design trends and best practices to create intuitive interfaces that enhance user engagement and satisfaction. Whether you need a complete design overhaul or incremental improvements, we work closely with you to understand your users' needs and deliver designs that resonate with your target"
    }
]

const ServiceCard: React.FC<ServiceCardProps> = ({
    heading,
    title,
    description
}) => {
    return (
        <div className="lg:w-[60%]">
            <h3 className="uppercase text-sm text-primary tracking-wider font-semibold">{heading}</h3>
            <h1 className="text-2xl font-semibold leading-normal">{title}</h1>
            <p className="text-sm leading-5 text-stone-400">{description}</p>
            <button className="w-[60%] rounded-md mt-2 bg-gradient-to-br from-primary via-teal-500 text-sm font-semibold shadow-md to-blue-400 py-2 ">
                Get Started
            </button>
        </div>
    )
}



const ServiceSection = () => {
    return (
        <section className="container mt-5 space-y-4 mx-auto ">
            {serviceData.map(it => (
                <ServiceCard {...it} key={it.title} />
            ))}
        </section>
    )
}



export default ServiceSection