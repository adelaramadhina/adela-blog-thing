import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/adela-r-82a285184/"
          >
            <FaLinkedin className="text-lg" /> {/* LinkedIn Icon */}
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adelaramadhina"
          >
            <FaGithub className="text-lg" /> {/* GitHub Icon */}
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()}. With ♡ and Next.js
      </p>
    </footer>
  );
}
