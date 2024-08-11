import Link from 'next/link';
import {auth, currentUser} from "@clerk/nextjs/server";
import {UserButton} from "@clerk/nextjs";

export async function Header() {
    const { userId } = auth();
    const user = await currentUser();

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
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
                <span className="ml-2 text-lg font-semibold">Acme Software</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
                {['Roadmap', 'Features', 'Pricing', 'About'].map((item) => (
                    <Link key={item} href={`/${item.toLowerCase()}`}
                          className="text-sm font-medium hover:underline underline-offset-4">
                        {item}
                    </Link>
                ))}
            </nav>
            <div>
                {userId ? (
                    <div className="flex items-center gap-4">
                        <UserButton />
                        <Link href="/sign-out" className="text-sm font-medium hover:underline underline-offset-4">
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <Link href="/sign-in" className="text-sm font-medium hover:underline underline-offset-4">
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    );
}