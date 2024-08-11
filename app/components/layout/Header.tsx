import Link from 'next/link';
import {auth, currentUser} from "@clerk/nextjs/server";
import {UserButton} from "@clerk/nextjs";
import Image from "next/image";

export async function Header() {
    const { userId } = auth();
    const user = await currentUser();

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
            <Link href="/" className="flex items-center justify-center">
                <Image src="/logo/logo_ucatolica.png" alt="Funlam logo" width={90} height={90} />
                <span className="ml-2 text-lg font-semibold">Ucla Radmap App</span>
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