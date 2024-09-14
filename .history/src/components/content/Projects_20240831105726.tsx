import YouTube from 'react-youtube';


export const ProjectsAndAchievementsContent = () => (
	<div>
		<div className='py-12'>
			<div className='m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-6'>
				<div className='mb-12 space-y-2 text-center'>
				<h1 className="title-font mb-2 text-center text-2xl font-medium text-white sm:text-3xl">
            Some Past Projects
          </h1>
          <span className="mb-6 mt-2 inline-block h-1 w-10 rounded bg-violet-400" />
				</div>

				<h2 className="title-font mb-4 text-2xl font-medium text-primary-light">Web Development Projects</h2>
				<div className='grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12 px-4 mx-4 md:px-8 md:mx-12'>
					<div className='group space-y-6'>
						<a href='https://www.deckrenew.net' className='cursor-pointer'>
							<img
								src='deckrenew.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl bg-white object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>
						</a>
						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Deck Renew</h4>
						<p className='text-primary-light'>
							Quick turnaround on website design and development for a new, local business. Currently maintained and
							updated as needed.
						</p>

						<div className='flex gap-4'>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Tailwindcss
							</a>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Vite
							</a>
						</div>
					</div>

					<div className='group space-y-6'>
						<a href='https://www.grellcommercialroofing.com' className='cursor-pointer'>
							<img
								src='grell.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl bg-white object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>
						</a>
						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Grell Roofing</h4>
						<p className='text-primary-light'>
							Developed and implemented a new logo and color scheme, an updated web and email domain, and a
							user-friendly website using React and Tailwind. Not currently maintained.
						</p>

						<div className='flex gap-4'>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Tailwindcss
							</a>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								ReactJS
							</a>
						</div>
					</div>
					<div className='group space-y-6'>
						<a href='https://www.neifb.org' className='cursor-pointer'>
							<img
								src='neifb.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl bg-white object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>
						</a>
						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Northeast Iowa Food Bank</h4>
						<p className='text-primary-light'>
							Managed rebrand and website redesign, implemented website launch. Not currently maintained.
						</p>

						<div className='flex gap-4'>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								HTML
							</a>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								CSS
							</a>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								JS
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className=''>
			<div className='m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-6'>
			<h2 className="title-font mb-4 text-2xl font-medium text-primary-light">Research & Writing</h2>
				<div className='grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12 px-4 mx-4 md:px-8 md:mx-12'>
					<div className='group space-y-6'>
						<a
							href='https://sites.google.com/view/asoj/digital-conditions-of-self?authuser=2'
							className='cursor-pointer'>
							<img
								src='thesis.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>
						</a>
						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Research Publication</h4>
						<p className='text-primary-light'>
							Independent research and publications on topics such as algorithmic personalization and information
							overload.
						</p>
					</div>

					<div className='group space-y-6'>
						<a href='https://www.neifb.org/news' className='cursor-pointer'>
							<img
								src='newsl.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl bg-white object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>
						</a>
						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Newsletter Campaigns</h4>
						<p className='text-primary-light'>
							Developed and managed monthly and quarterly newsletter campaigns for various organizations.
						</p>

						<div className='flex gap-4'>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Adobe InDesign
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>





		<div className=''>
			<div className='m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-6'>
			<h2 className="title-font mb-4 text-2xl font-medium text-primary-light">Other Design</h2>
				<div className='grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12 px-4 mx-4 md:px-8 md:mx-12'>
					<div className='group space-y-6'>

							<img
							src='golfb.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>

						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>CAD / 3D Design</h4>
						<p className='text-primary-light'>
            From golf courses to project sites and homes, I have created a variety of content for various purposes.
						</p>
            <div className='flex gap-4'>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Blender
							</a>
							<a
								href='#'
								className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
								Adobe Substance
							</a>
						</div>
					</div>


				</div>
			</div>
		</div>










		<div className=''>
			<div className='m-auto px-6 pt-12 text-gray-600 xl:container md:px-12 xl:px-6'>
			<h2 className="title-font mb-4 text-2xl font-medium text-primary-light">Marketing & Copywriting</h2>
				<div className='grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12 px-4 mx-4 md:px-8 md:mx-12'>
					<div className='group space-y-6'>

							<img
									src='email1.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>

						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Email Marketing</h4>
						<p className='text-primary-light'>
            Pardot, MailChimp, and Constant Contact are just a few of the platforms I have used to develop and
            manage email marketing campaigns.
						</p>
            <div className='flex gap-4'>
									<a
										href='#'
										className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										HTML/CSS
									</a>
									<a
										href='#'
										className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										Segmentation
									</a>
								</div>
					</div>

					<div className='group space-y-6'>

							<img
									src='golfa.webp'
								alt='art cover'
								loading='lazy'
								width='1000'
								height='667'
								className='h-56 w-full rounded-3xl object-contain object-center transition-all duration-500 group-hover:rounded-xl'
							/>

						<h4 className='text-xl font-semibold text-primary-light md:text-2xl'>Social Media Marketing</h4>
						<p className='text-primary-light'>
            Implemented strategic, unified social media marketing campaigns for various organizations across all
            major social media platforms.
						</p>

            <div className='flex gap-4'>
									<a
										href='#'
										className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										Adobe Illustrator
									</a>
									<a
										href='#'
										className='rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										RADAAR
									</a>
								</div>
					</div>
				</div>
			</div>
		</div>







      <div className='m-auto px-6 pt-12 text-gray-600 xl:container md:px-12 xl:px-6'>
        <h2 className="title-font mb-4 text-2xl font-medium text-primary-light">Audio/Video Production</h2>
		<p className='text-lg text-primary-light'>I have produced and edited television advertisements, instructional videos, drone videography as well as promotional and educational content for various organizations.</p>
		<p className='text-lg text-primary-light'>
			Instead of embedding videos here (which allows YouTube to track your views, and clogs my site with other unnecessary code), I'll provide some links to some channels I've contributed to:
		</p>
		<ul className=''>
			<li className='text-primary-light'><a href='https://www.youtube.com/@IfEyeMayMusic'>
				asdf</a></li>
			<li className='text-primary-light'><a href='https://www.youtube.com/@atsojka'>
				asdf</a></li>
			<li className='text-primary-light'><a href='https://www.youtube.com/@uniinterpreterstheatre2876'>
				asdf</a></li>
			<li className='text-primary-light'><a href='https://www.youtube.com/@neifbank'>
				asdf</a></li>
				<li className='text-primary-light'><a href='https://www.youtube.com/channel/UC7OVYG_Py-V6FWQZibBOp_A'>
				asdf</a></li>
				<li className='text-primary-light'><a href='https://grell.s3.us-east-2.amazonaws.com/Smid3.mp4'>
				asdf</a></li>
		</ul>
  </div>

</div>
);
