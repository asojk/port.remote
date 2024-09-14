export const EducationContent = () => (
  <div className="body-font text-gray-400 py-12">
    <section className="container mx-auto px-5">
      <div className="mb-4 text-center">
        <h1 className="title-font mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
          Education
        </h1>
      </div>

      <article className="rounded-xl p-4 mb-12">
      <div className="flex h-full items-center rounded-full border-b-[2px] border-primary/10 p-4 shadow-sm shadow-primary/40">

          <a href="https://www.uni.edu">
            <img 
              alt="University of Northern Iowa Logo" 
              src="/uni.webp" 
              className="h-16 w-16 mr-4 rounded-full object-contain bg-white" 
            />
          </a>
          <div>
            <h3 className="text-lg font-medium text-primary-light">M.A. Intersection of Identity and Technology</h3>
            <p className="title-font font-medium text-primary-dark">
              University of Northern Iowa - 2016-2020, GPA 3.87
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Digital Conditions of Self</strong>
              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Independent Instruction</strong>
              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Theatre Management</strong>
              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Tech Skills Consultant</strong>
              <p className="mt-1 text-xs font-medium text-gray-300">Fortepan IA</p>
            </a>
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="flex items-center gap-4 mb-4">
          <a href="https://www.umn.edu">
            <img 
              alt="University of Minnesota Logo" 
              src="/umn.webp" 
              className="h-16 w-16 rounded-full object-contain bg-white" 
            />
          </a>
          <div>
            <h3 className="text-lg font-medium text-white">B.A. Communication Studies</h3>
            <p className="text-sm font-medium text-gray-400">
              University of Minnesota - Twin Cities - 2016-2020, GPA 3.87
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Emotional Labor in the Service Industry</strong>
              <p className="mt-1 text-xs font-medium text-gray-300">
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
