'use client'

import Link from "next/link";
import DarkMode from "./DarkMode";
import { GithubLogo, LinkedinLogo, Logo, XLogo } from "./Icons";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-5 flex-wrap">
      {
        pathname === '/'?
        <Logo size={32} />
        :
        <Link href="/" aria-label="Index Page" scroll={false}>
          <Logo size={32} />
        </Link>
      }
      <div className="flex items-center gap-4 md:gap-5 font-medium flex-wrap">
        <DarkMode />
        {
          pathname === '/blog'?
          <span>Blog</span>
          :
          <Link href="/blog" aria-label="Blog" scroll={false}>
            Blog
          </Link>
        }
        {
          pathname === '/contact'?
          <button className="wave noAa rounded-md py-1.5 px-3 w-fit transition-opacity duration-200 hover:opacity-90" aria-label="Get in Touch">
            Get in Touch
          </button>
          :
          <Link
            href="/contact"
            className="wave noAa rounded-md py-1.5 px-3 w-fit transition-opacity duration-200 hover:opacity-90 pressable"
            aria-label="Get in Touch"
            scroll={false}
          >
            Get in Touch
          </Link>
        }
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between py-10">
      <p className="text-sm font-mono font-medium -tracking-wider">
        &copy; {new Date().getFullYear()} ~ Coding
      </p>

      <nav className="flex items-center gap-2">
        <a
          href="https://www.linkedin.com/in/alexander-mamani"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Linkedin Profile"
          title="Follow me on Linkedin"
        >
          <LinkedinLogo size={20} />
        </a>

        <a
          href="https://github.com/alexqs96"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github Profile"
          title="Follow me on Github"
        >
          <GithubLogo size={20} />
        </a>

        <a
          href="https://x.com/alexqs96"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="X Profile"
          title="Follow me on X"
        >
          <XLogo size={20} />
        </a>
      </nav>
    </footer>
  );
}
