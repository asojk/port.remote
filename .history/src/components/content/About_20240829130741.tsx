export const GreetingContent = () => (
  <div>
    <section className="body-font text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-4 text-center">
          <h1 className="title-font mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
            Hi all, I'm Alex.
          </h1>
          <p className="mx-auto max-w-xl text-left text-base leading-relaxed text-primary lg:w-3/4 xl:w-2/4">
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
      <div className="m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12">
          <div className="group space-y-6">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
            />
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Flipper and JS: why we added JavaScript support to a mobile
              debugging platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Finding the right open source project for your first contribution
              can feel daunting. It took me years to find a repository that fit
              my skills and interests.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="-ml-1 flex items-center gap-3 rounded-full p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="images/man.jpg"
                  alt=""
                />
                <span className="hidden text-base font-semibold text-gray-600 sm:block dark:text-gray-200">
                  Bernard Ng.
                </span>
              </a>
              <span className="block w-max font-light text-gray-500 sm:mt-0">
                Aug 27 2022
              </span>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400 dark:text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2 min read</span>
              </div>
            </div>
          </div>
          <div className="group space-y-6">
            <img
              src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
            />
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Flipper and JS: why we added JavaScript support to a mobile
              debugging platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Finding the right open source project for your first contribution
              can feel daunting. It took me years to find a repository that fit
              my skills and interests.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="-ml-1 flex items-center gap-3 rounded-full p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="images/man.jpg"
                  alt=""
                />
                <span className="hidden text-base font-semibold text-gray-600 sm:block dark:text-gray-200">
                  Bernard Ng.
                </span>
              </a>
              <span className="block w-max font-light text-gray-500 sm:mt-0">
                Aug 27 2022
              </span>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400 dark:text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
