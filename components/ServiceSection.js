import Link from 'next/link'

const features = [
  {
    title: 'Sessions',
    content: 'The results of energy balancing sessions are tangible. One-on-one and group sessions involving Reiki, Kinesiology, and Chakra work are available both in-person and virtually.',
    image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  },
  {
    title: 'Education',
    content: 'We offer in-person and self-paced online classes to help you learn self-care tools or take the first steps in becoming a practitioner. We\'re here every step of the way to support you.',
    image: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  },
  {
    title: 'Speaking',
    content: 'Valerie’s passion for holistic energy work comes through in all her presentations. She is available for private classes and speaking engagements that can be tailored to the needs of your group.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  }

]

function ServiceSection(props) {
  return (
    <div className="mb-10 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
            Meeting your specific needs
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            You are unique and yet we are all connected. Your journey to
            wellness will be unlike that of anyone else. Butterfly Holistics
            offers many options to meet you where you are.
          </p>
        </div>
        {/* Features map */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={feature.image} alt={feature.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1 pb-4">

                    <p className="text-xl font-semibold text-gray-900">{feature.title}</p>
                    <p className="mt-3 text-base text-gray-500">{feature.content}</p>
                </div>
                {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>


        {/* Services columns */}
        {/* <div className="py-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Meeting your specific needs</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              <div>
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
                    One-on-One Sessions
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The results of energy balancing sessions are real and
                    tangible. Stress can be reduced, sleep can be improved,
                    mindsets can be changed, and pain can often be reduced or
                    relieved in a matter of minutes. Reiki, Kinesiology, Chakra
                    work and more can be part of the experience. Whatever
                    challenge you are facing, these sessions can help.
                  </dd>
                </div>
              </div>

              <div>
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
                    Education
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Whether you want to learn transformative self-care tools or
                    take the first steps in becoming a practitioner, we offer
                    both live in-person and self-paced online classes for you.
                    Valerie is there every step of the way to support you in
                    your learning.
                  </dd>
                </div>
              </div>

              <div>
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
                    Speaking Engagements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Valerie’s passion for holistic energy work comes through in
                    all her presentations. She is available for private classes
                    and speaking engagements that can be tailored to the needs
                    of your group.
                  </dd>
                </div>
              </div>

              <div>
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
                    Group Sessions
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Similar to one-on-one sessions in form and results, group
                    sessions and programs provide the opportunity to find
                    balance and healing within a supportive group of people
                    working through similar challenges.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div> */}

        <div className="flex justify-center mt-16">
          <Link href="/services">
            <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary md:py-3 md:text-lg md:px-10 btn">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
