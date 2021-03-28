import Link from 'next/link'

function UniqueExperience() {
  return (
    <div className="mb-12 pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Unique Experience
          </h2> */}
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl">
            Our Unique Experience
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
          <div className="mt-6 text-gray-500 text-lg">
            <p className="mb-8">
              I believe in taking an active role in your own healing. While
              there are lots of great and highly effective healing techniques
              where you can lay on the table and relax while the practitioner
              does all the work, I find that getting my clients involved in the
              experience brings them{' '}
              <span className="font-cursive text-2xl font-bold">
                {' '}
                more in touch{' '}
              </span>{' '}
              with themselves and helps them to learn ways to{' '}
              <span className="font-cursive text-2xl font-bold">
                {' '}
                maintain balance{' '}
              </span>{' '}
              on their own.
            </p>

            <p className="mb-8 ">
              In my sessions there are times where you will relax on the table,
              and others where you may be holding or rubbing points,
              participating in muscle tests or examining
              <span className="font-cursive text-2xl font-bold">
                {' '}
                emotions{' '}
              </span>{' '}
              that relate to the issue we are focusing on. The evaluation
              process is the same for each session, but the techniques used to
              balance and the experience of the session are unique to you and
              your needs that day. In all sessions, the goal is that{' '}
              <span className="font-cursive text-2xl font-bold">
                {' '}
                you feel better{' '}
              </span>{' '}
              when you walk out than you did when you walked in.
            </p>
            <p className="mb-8">
              One of the most amazing things about energy work is that you
              really can make{' '}
              <span className="font-cursive text-2xl font-bold">
                {' '}
                lasting change{' '}
              </span>{' '}
              in a very short amount of time. Stress can be reduced, sleep can
              be improved, and pain can often be reduced or relieved in a matter
              of minutes or seconds. In both my sessions and classes I make sure
              there is both
              <span className="font-cursive text-2xl font-bold">
                {' '}
                healing and learning{' '}
              </span>{' '}
              happening because nothing solidifies a concept better than
              experience and nothing solidifies a result more than having the
              tools to maintain it.
            </p>
            <p className="mb-8">
              Energy work is based in science and it{' '}
              <span className="font-cursive text-2xl font-bold">
                {' '}
                feels like magic{' '}
              </span>{' '}
              , and that’s what I love so much about it. The body is an
              awe-inspiring masterpiece that we have only begun to scratch the
              surface of understanding. Tapping into your body’s own innate
              healing abilities opens up possibilities that we have only yet
              imagined.
            </p>
          </div>
          {/* <div className="flex justify-center mt-10">
            <Link href="/classes">
              <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary md:py-3 md:text-lg md:px-10 btn">
                Sign Up
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UniqueExperience
