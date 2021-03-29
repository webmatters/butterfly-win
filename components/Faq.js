import { useState } from 'react'

function Faq({ id, question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
      <div className="pt-6">
        <dt className="text-lg">
          {/* Expand/collapse question button */}
          <button
            type="button"
            className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none"
            aria-controls={`faq-${id}`}
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <span className="font-medium text-gray-900">{question}</span>
            <span className="ml-6 h-7 flex items-center">
              <svg
                className={`h-6 w-6 transform ${
                  isOpen ? '-rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </dt>
        <dd className={`mt-2 pr-12 ${isOpen ? '' : 'hidden'}`} id={`faq-${id}`}>
          <p className="text-base text-gray-500">{answer}</p>
        </dd>
      </div>
    </dl>
  )
}

export default Faq
