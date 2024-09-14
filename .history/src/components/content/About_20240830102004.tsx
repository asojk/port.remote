import { SwipeCarousel } from "../SwipeCarousel";

export const GreetingContent = () => (
  <div>
    <section className="body-font text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-4 text-center">


          <h1 className="title-font mb-4 text-center text-2xl mt-12 font-medium text-white sm:text-3xl">
            Professional Summary:
          </h1>

          <p className="mx-auto max-w-4xl text-left text-base leading-relaxed text-primary lg:w-3/4 xl:w-2/4">
            As a versatile and experienced professional, I specialize in
            branding, marketing, and project management with demonstrated skills
            in web development, content creation, and graphic design. My proven
            expertise extends to comprehensive market research, maintaining
            brand consistency, and optimizing processes to reduce costs, making
            me a valuable asset for any project or team.
          </p>
          <span className="mb-6 mt-8 inline-block h-1 w-10 rounded bg-violet-400" />
        </div>
      </div>
    </section>

    <div className="py-16">
    <h1 className="title-font mb-4 text-center text-2xl mt-12 font-medium text-white sm:text-3xl">
            Personal Interests:
          </h1>

      <SwipeCarousel />

            </div>
            </div>
);
