export const EducationContent = () => (
  <div className="body-font text-gray-400 py-12">
    <section className="container mx-auto px-5">
      <div className="mb-4 text-center">
        <h1 className="title-font mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
          Education
        </h1>
      </div>

      <article className="rounded-xl p-4 mb-12">
      <div className="flex h-full items-center border-b-[2px] border-primary-dark p-4">

          <a href="https://www.uni.edu">
            <img 
              alt="University of Northern Iowa Logo" 
              src="/uni.webp" 
              className="h-16 w-16 mr-4 rounded-full object-contain bg-white" 
            />
          </a>
          <div>
            <h3 className="text-lg md:text-2xl font-medium mb-1 text-primary-light">M.A. - Intersection of Identity and Technology</h3>
            <p className="title-font font-medium text-md md:text-lg text-violet-400">
              University of Northern Iowa - 2016-2020, GPA 3.87
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 pl-8 md:pl-12">
          <li>
            <a href="#" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Independent Instruction</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Theatre Co-Management</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Marketing & Code Consultant</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>

        </ul>
      </article>

      <article className="rounded-xl p-4 mb-12">
      <div className="flex h-full items-center border-b-[2px] border-primary-dark p-4">
          <a href="https://www.umn.edu">
            <img 
              alt="University of Minnesota Logo" 
              src="/umn.webp" 
              className="h-16 w-16 mr-4 rounded-full object-contain bg-white" 
            />
          </a>
          <div>
            <h3 className="text-lg md:text-2xl font-medium mb-1 text-primary-light">B.A. Communication Studies</h3>
            <p className="title-font font-medium text-md md:text-lg text-[#ffcc33]">
              University of Minnesota - Twin Cities - 2016-2020, GPA 3.87
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 pl-8 md:pl-12">
          <li>
            <a href="#" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Emotional Labor in the Service Industry</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Senior thesis project examining the emotional labor of service workers in the hospitality industry.
              </p>
            </a>
          </li>
          <li>

          <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-white">Spanish Language Immersion - Cemanahuac Edu. Community - Cuernavaca, MEX</strong>
            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
            </p>
          </a>
        </li>
      </ul>
      </article>
</section>
    
  </div>
);
