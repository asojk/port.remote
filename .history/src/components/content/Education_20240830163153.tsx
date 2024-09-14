export const EducationContent = () => (
  <div className="body-font text-gray-400 py-12">
    <section className="container mx-auto">
      <div className="mb-4 text-center">
        <h1 className="title-font mb-2 text-center text-2xl font-medium text-white sm:text-3xl">
          Education
        </h1>
        <span className="mb-4 mt-2 inline-block h-1 w-10 rounded bg-violet-400" />

      </div>

      <article className="rounded-xl p-4 mb-8">
      <div className="flex h-full items-center border-b-[2px] border-primary-dark md:p-4">

          <a href="https://www.uni.edu">
            <img 
              alt="University of Northern Iowa Logo" 
              src="/uni.webp" 
              className="h-16 w-16 mr-8 rounded-full object-contain bg-white" 
            />
          </a>
          <div>
            <h3 className="text-lg md:text-2xl font-medium mb-1 text-primary-light">M.A. - Intersection of Identity and Technology</h3>
            <p className="title-font font-medium text-md md:text-lg text-violet-400">
              University of Northern Iowa - 2019-2021, GPA 4.0
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 pl-8 md:pl-12">
          <li>
            <a className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Independent Instruction</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
              Independent instruction of post-secondary public speaking courses.
              Daily responsibilities included lesson design, planning, implementation & assessment.
              </p>
            </a>
          </li>
          <li>
            <a className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Teaching Assistant</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
              Student advising and management, assessment, substitute teaching, facilitation of online migration during COVID, technological management.
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/uniinterptheatre/" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Theatre Key</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
              Website, event, conference, and marketing management.
              </p>
            </a>
          </li>
          <li>
            <a href="https://fortepan.us/ia/" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Marketing & Code Consultant</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
              Identified coding personnel needs for project Fortepan Iowa, simplified volunteer aquisition and training.
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
              University of Minnesota - Twin Cities - 2014-2016, GPA 3.87
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 pl-8 md:pl-12">
          <li>
            <a className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Advanced Interpersonal & Small-Group Communications Courses</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Senior thesis Emotional Labor in the Service Industry
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.theaftermidnightgroup.com" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Managerial Internship</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
              Fall – Spring 2015. The AFter Midnight Group, Minneapolis. Adapted to and developed insights into business trends for effective staffing and labor costs.
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.cemanahuacspanishschool.com" className="block h-full p-4 border-l-4 border-transparent hover:border-primary-dark">
              <strong className="text-lg font-medium text-primary-light">Spanish Language Immersion</strong>
              <p className="mt-1 text-sm md:text-md font-medium text-primary-dark">
                Study abroad with Cemanahuac Educational Community in Cuernavaca, Mexico.
              </p>
            </a>
          </li>
          

      </ul>
      </article>
</section>
    
  </div>
);
