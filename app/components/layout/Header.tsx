import Link from 'next/link';

export const Header = () => (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="sr-only">Acme Software</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 md:flex-1 md:justify-center">
            {['Roadmap', 'Features', 'Pricing', 'About'].map((item) => (
                <Link key={item} href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    {item}
                </Link>
            ))}
        </nav>
    </header>
);