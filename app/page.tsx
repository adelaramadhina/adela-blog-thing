import { BlogPosts } from 'app/components/posts';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      {/* Container for the image and text */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        {/* Square Image */}
        <div className="w-24 h-24 mb-4 md:mb-0 md:mr-6">
        <Image
  src="/image/adela-avatar.jpg"
  alt="Adela Ramadhina"
  width={96} // Set your desired width
  height={96} // Set your desired height
  className="rounded-lg object-cover"
/>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Adela Ramadhina's Diary 
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {`cyber security but I break things (for legal reasons mostly). appsec & devsecops apologist. professional beep booper 🖥️.`}
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
