import Link from 'next/link'

function WhyButterfly() {
  return (
    <div className="mt-10 mb-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl text-primary font-semibold tracking-wide uppercase">
            Why Butterfly Holistics?
          </h2>
          <p className="mt-2 leading-8 font-semibold tracking-tight text-gray-700 sm:text-2xl">
            Expert care from a Master Practitioner
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-4">
            <p className="mb-8  text-gray-500 text-lg">
              I want you to feel better and{' '}
              <span className="font-cursive text-2xl font-bold text-primary-dark">
                {' '}
                live the life you are dreaming.{' '}
              </span>{' '}
              Maybe for you that means feeling calmer, more present and able to
              balance work and home life. It could mean moving forward and
              finally letting go of something that has been keeping you stuck.
              Maybe you have been struggling, feel like you have tried
              everything and just need relief. I want you to know that
              <span className="font-cursive text-2xl font-bold text-primary-dark">
                {' '}
                there is hope.{' '}
              </span>{' '}
            </p>
            <p className="mb-8  text-gray-500 text-lg">
              Holistic Healing methods like energy work can supplement
              traditional health care and enhance wellness. In some cases, the
              holistic approach can work where standard health care has failed.
              This is often because the holistic model looks at the whole person
              on all levels, physical, mental, emotional, and spiritual and
              works to{' '}
              <span className="font-cursive text-2xl font-bold text-primary-dark">
                {' '}
                restore harmony{' '}
              </span>{' '}
              throughout. Imbalances in any of the levels cause stress in the
              body. By identifying and balancing these stress responses, the
              whole person can be returned to a more harmonious state.
            </p>
            <p className="mb-8  text-gray-500 text-lg">
              Many people can identify their issues, and even logically reason
              them out on a conscious level, but still are unable to release
              them. I help you both identify and release the blocks from your
              energy and unconscious that are keeping you from living your best
              life. When you work with me, my goal is for you to be out of pain,
              and{' '}
              <span className="font-cursive text-2xl font-bold text-primary-dark">
                {' '}
                feeling euphoric{' '}
              </span>{' '}
              about the change you see and feel in yourself and your life.
            </p>
            <p className="mb-8  text-gray-500 text-lg">
              -- Valerie Remhoff, Butterfly Holistics
            </p>

            <div className="flex justify-center">
              <Link href="/about">
                <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary md:py-2 md:text-lg md:px-10 btn">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyButterfly
