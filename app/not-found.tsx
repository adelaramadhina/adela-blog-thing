export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">Oops! I don't exist. Here's my Roblox character dancing though.</p>
      <img
        src="/image/404.gif"
        alt="404 Not Found"
        className="mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}
