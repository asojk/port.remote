export const EducationContent = () => (
  <div className="py-12">
    <div className="space-y-2 text-center">
      <h2 className="pb-10 text-3xl font-semibold text-primary-light md:text-4xl">
        Education
      </h2>
      <p className="text-primary lg:mx-auto lg:w-6/12 "></p>
    </div>
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <a href="https://www.uni.edu">
        <img
          alt=""
          src="/uni.webp"
          className="size-16 rounded-full object-contain bg-white"
        />
        </a>

        <div>
          <h3 className="text-lg font-medium text-white">M.A. Intersection of Identity and Technology</h3>

          <div className="flow-root">
            <p className="float-left text-gray-400">University of Northern Iowa</p>
          </div>
          <p className="text-sm float-left font-medium text-gray-400">
              2016-2020, GPA 3.87
            </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Digital Conditions of Self</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequuntur deleniti, unde ab ut in!
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Independent Instruction</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cumque saepe sit.
            </p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Theatre Management</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cumque saepe sit.
            </p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Tech Skills Consultant</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Fortepan IA
            </p>
          </a>
        </li>
      </ul>
    </article>





    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <a href="https://www.umn.edu">
        <img
          alt=""
          src="/umn.webp"
          className="size-16 rounded-full object-contain bg-white"
        />
        </a>

        <div>
          <h3 className="text-lg font-medium text-white">B.A. Communication Studies</h3>

          <div className="flow-root">
            <p className="float-left text-gray-400">University of Minnesota - Twin Cities</p>
          </div>
          <p className="text-sm float-left font-medium text-gray-400">
              2016-2020, GPA 3.87
            </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Emotional Labor in the Service Industry</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Senior thesis project examining the emotional labor of service workers in the hospitality industry.
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Spanish Language Immersion - Cemanahuac Edu.
                            Community - Cuernavaca, MEX</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cumque saepe sit.
            </p>
          </a>
        </li>
      </ul>
    </article>
    
  </div>
);
