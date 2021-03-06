import React from "react"

import PageLayout from "components/layout/PageLayout"

function About() {
  return (
    <PageLayout>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Butterfly Holistics
          </h3>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Photo grid column */}
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="butterfly-about.jpg"
                      alt="Valerie Remhoff at the butterfly house."
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    {/* Heroicon name: solid/camera */}
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">
                      Photograph by Valerie's Photographer
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base prose mx-auto lg:max-w-none">
                <p className="text-gray-500">
                  I???m Valerie Remhoff, Kinesiologist, IKC certified Touch for
                  Health instructor/consultant, Reiki master teacher, author and
                  educator. All of those titles aside, most people would simply
                  call me an energy healer, it???s who I am. I am passionate about
                  helping people create real and lasting change in their lives
                  and it brings me immense joy to see the smiles of relief and
                  hope on my clients faces. I am grateful every day to be able
                  to do what I love while helping others heal.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  I didn???t always know that this was what I wanted to do. In
                  fact, like many people, I didn???t even know the field of energy
                  healing existed. I started college as a chemistry major with a
                  dance minor and graduated three years later as an
                  environmental science major with a job as a software
                  configuration manager. Even though I have always been
                  intuitive, loved helping people and have seen and sensed
                  energy my whole life, my logical and scientific brain took
                  over when it came to choosing a career. For a long time, I
                  thought the two aspects of my personality were at odds with
                  one another, the logic/science and the intuition. Turns out
                  they are a perfect combination for an energy healer using
                  kinesiology!
                </p>
                <p>
                  I came upon this revelation when my sister, who was battling a
                  serious illness, had exhausted all the treatment options of
                  conventional medicine and began seeing a holistic
                  practitioner. After working with him for a short time, she
                  started feeling better and seeing more improvement than she
                  had in years of conventional treatments. After hearing about
                  her sessions, I started researching the techniques her
                  practitioner was using. This is how I discovered kinesiology.
                  I was fascinated at how kinesiology blends western scientific
                  principles with eastern energy philosophy. It gave me a way to
                  combine both my logical scientific brain and my heart centered
                  intuitive gifts. I knew I had found my calling.
                </p>
                <p>
                  I immersed myself in learning about kinesiology and energy
                  healing modalities. With the support of my husband, I left my
                  job in software and began building my energy healing practice
                  while raising our boys. In 2010, I founded Butterfly Holistics
                  to serve my community and beyond, with in-person and virtual
                  healing sessions as well as classes in energy healing methods.
                </p>
                <p>
                  The work I do changes lives, and I want to share my gifts with
                  as many people as possible. When you open your heart and mind
                  to the healing abilities of the body, you can truly work
                  miracles.
                </p>
                <h3>My Credentials</h3>
                <p>
                  I began my studies in 2004 and have trained in Reiki, Touch
                  for Health (TFH), Health Kinesiology (now Natural
                  Bioenergetics), Energy Medicine, the Professional Kinesiology
                  Practitioner Program (PKP), Inner Clarity and many other
                  techniques and systems including chakra balancing and crystal
                  healing. I am a Reiki Master Teacher and an IKC Certified
                  Touch for Health instructor and consultant. I am also a
                  National Certification Board for Therapeutic Massage and
                  Bodywork (NCBTMB) approved continuing education provider. In
                  2015, I published the book Dynamic Healing: A Practitioner???s
                  Guide to Reiki Applications with my co-author Marina Lando. I
                  have developed many classes and programs to help people learn
                  more about energy healing and ways to heal themselves.
                </p>
                <img src="ncbtmb-logo.jpg" />
                <img src="dynamic-healing-book.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default About
