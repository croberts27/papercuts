/* eslint-disable react/no-unescaped-entities */
function About() {
    return (
      <>
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-pink-50 lg:grid-cols-[max(50%,36rem),1fr]">
          <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">papercuts</h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Here's a little bit about me and how I started doing collage!
              </p>
              <div className="mt-10">
              <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <br></br>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </div>
            </div>
          </main>
          <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <img
              src="src/images/papercuts.JPG"
              alt="papercuts portrait"
              className="absolute inset-12 pt-20 h-75% w-75% object-cover"
            />
          </div>
        </div>
      </>
    )
  }
  export default About