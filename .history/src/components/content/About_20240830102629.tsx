import { SwipeCarousel } from "../SwipeCarousel";

export const GreetingContent = () => (
  <div>
    <section className="body-font text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-4 text-center">


          <h1 className="title-font mb-2 text-center text-2xl mt-12 font-medium text-white sm:text-3xl">
            Professional Summary:
          </h1>
          <span className="mb-6 mt-2 inline-block h-1 w-10 rounded bg-violet-400" />

          <p className="mx-auto mb-4 md:mb-8 max-w-5xl text-left text-base md:text-lg lg:text-xl leading-relaxed text-primary-light lg:w-3/4">
            As a versatile and experienced professional, I specialize in branding, marketing, and project management with demonstrated skills in web development, content creation, and graphic design.
            </p>
            <p className="mx-auto max-w-5xl text-left text-base md:text-lg lg:text-xl leading-relaxed text-primary-light lg:w-3/4">
            My proven expertise extends to comprehensive market research, maintaining brand consistency, and optimizing processes to reduce costs, making me a valuable asset for any project or team.
          </p>

        </div>
      </div>
    </section>

    <div className="mb-4 text-center">
    <h1 className="title-font mb-2 text-center text-2xl mt-8 font-medium text-white sm:text-3xl">
            Personal Interests:
          </h1>
          <span className="mb-6 mt-2 inline-block h-1 w-10 rounded bg-violet-400" />

      <SwipeCarousel />

            </div>
            </div>

);
