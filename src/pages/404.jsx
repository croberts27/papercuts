/* eslint-disable react/no-unescaped-entities */
function ErrorPage() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <div className="absolute inset-0 -z-10 h-full bg-pink w-full object-cover object-top"></div>
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-black">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-black/70 sm:mt-6">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="/available-prints"
              className="text-sm font-semibold leading-7 text-black"
            >
              <span aria-hidden="true">&larr;</span> BACK TO PAPERCUTS!
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
