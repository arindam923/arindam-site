import Link from "next/link"


const Header = () => {

    const links = [
        {
            id: 0,
            name: "Start",
            href: "/"
        },
        {
            id: 1,
            name: "MarketPlace",
            href: "/"
        },
        {
            id: 2,
            name: "Resources",
            href: "/"
        },
        {
            id: 3,
            name: "Team",
            href: "/"
        },
        {
            id: 4,
            name: "Support",
            href: "/"
        }
    ]


    return (
        <header className="flex container mx-auto py-4 items-center justify-between">

            <div>
                <h1 className="text-2xl font-semibold"><span className="text-primary">A</span>rshop</h1>
            </div>

            <nav className="flex items-center text-sm space-x-8">
                {links.map(li => (
                    <Link href={li.href} key={li.id}>
                        <p>{li.name}</p>
                    </Link>
                ))}
            </nav>


            <div className="flex items-center space-x-8 text-sm">
                <button className="text-muted-foreground">
                    Login
                </button>

                <button className="bg-primary/10 px-4 shadow-md py-2 text-primary rounded-md ">
                    Get Started
                </button>

            </div>
        </header>
    )
}


export default Header