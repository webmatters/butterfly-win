import Faq from "./Faq"

export default function Faqs({ faqs }) {
  const renderFaqs = () => {
    return faqs.map((faq) => (
      <Faq key={faq.id} question={faq.question} answer={faq.answer} />
    ))
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          {renderFaqs()}
        </div>
      </div>
    </div>
  )
}

// const faqs = [
//   {
//     id: 1,
//     question: "What is Reiki?",
//     answer:
//       "Reiki is a natural healing technique that helps the body heal itself by enhancing the connection an individual has with the Universal life force energy that flows through all living things. A Reiki practitioner places her hands on or slightly above the client’s body and allows the energy to flow through her to the client. Reiki promotes relaxation and can be beneficial on all levels, physical, mental, emotional and spiritual. Its uses have ranged from eliminating pain and stress, to reducing the side effects of Chemo-therapy. Since Reiki helps to stimulate the body's own natural healing process, its applications are endless. It is simple to use, non-invasive, and can be used along with other forms of health care.",
//   },
//   {
//     id: 2,
//     question: "What is Kinesiology?",
//     answer:
//       "Kinesiology is the science and art of muscle testing. In the 1960's a Detroit Chiropractor, Dr. George Goodheart, began combining acupuncture theory with a variety of western discoveries that involved touch reflexes and muscle testing. He discovered that there was a relationship not only between meridians and major organs but also muscles. He called his system Applied Kinesiology. Many other kinesiology systems have developed out of Dr. Goodheart’s Applied Kinesiology, including Touch for Health. Kinesiology practitioners look beyond symptoms and do not diagnose, treat or prescribe for named diseases. Using manual muscle testing, kinesiologists identify imbalances in the energy systems of the body. Through a series of simple techniques, the energy systems can then be rebalanced to restore harmony and aid the body’s own natural healing process.  All manner of issues can be helped with kinesiology techniques from muscle pain or weakness, to emotional stress and distress.",
//   },
//   {
//     id: 3,
//     question: "What is Touch For Health?",
//     answer:
//       "Touch for Health is a form of kinesiology that was developed by Dr. John Thie. The theories and techniques are based on Dr. George Goodheart’s system of Applied Kinesiology which was developed for medical doctors. Dr. Thie believed that many of the techniques were simple enough for anyone to learn and use to improve their own health and wellbeing. He saw a need for people to be able to take control of their own health and to have tools to help their own families. He created Touch for Health in order to make this simple form of healthcare accessible to everyone.",
//   },
//   {
//     id: 4,
//     question: "What is an energy balancing session?",
//     answer:
//       "An energy balancing session is a highly individualized and interactive session where many different energy healing methods may be used to help you achieve your desired outcome.  It starts with a conversation about your challenges and goals and a baseline evaluation of your energy systems. Muscle testing is used throughout to gain insight from the body and determine the most beneficial techniques for you at that time. Some sessions may require you to take a very active role in the process by doing things like holding or rubbing points, participating in a series of muscle tests or following a set of movements. During other sessions you may spend much of the time relaxing on the table while the balancing work is done. Each session is a unique experience and tailor designed to get you feeling better as quickly as possible.",
//   },
//   {
//     id: 5,
//     question: "What happens in a distant or virtual session?",
//     answer:
//       "Distant or virtual energy balancing sessions are done via zoom. The sessions follow the same protocol as in person sessions and the results are similar. The practitioner either does the balancing work using distant reiki techniques or walks the client through the corrections needed. Most of the techniques used in the office can also be used during a virtual session.",
//   },
//   {
//     id: 6,
//     question: "How can Reiki or energy work be done at a distance?",
//     answer:
//       "Energy is not bound by physical location. Think of how your cell phone works. It rings in your pocket, is connected to no physical wiring, and yet you can speak to a friend across the country or the world. The same connections can be made between people so that healing work can take place no matter the distance between. Zoom makes things a lot easier, but just a bit of identifying information like a name or a picture allows me to connect with the client and do the healing work.",
//   },
//   {
//     id: 7,
//     question: "What is the Biomat?",
//     answer:
//       "The Biomat is a registered FDA medical device. It uses a combination of fabrics and amethyst crystals to create far-infrared rays. These rays create heat within the body that helps to relieve minor muscle pain, reduce stress and fatigue, and promote relaxation.",
//   },
//   {
//     id: 8,
//     question: "How much does a session cost?",
//     answer:
//       "Your first session as a new client is $100. Each subsequent session is $85. Cash, check and credit card are all acceptable forms of payment.",
//   },
//   {
//     id: 9,
//     question: "How often will I need to come?",
//     answer:
//       "Every person is different. There is no set schedule for how often you should get balanced. At the end of every session, I use muscle testing to determine if another session is beneficial and if so, what the optimal timing would be.",
//   },
//   {
//     id: 10,
//     question: "What is the cancellation policy?",
//     answer:
//       "Policy for sessions: There is a $50 charge for no shows and cancellations less than 24 hours before your scheduled appointment. Policy for sessions: There is a $50 charge for no shows and cancellations less than 24 hours before your scheduled appointment. Policy for classes: All class registrations include a non-refundable deposit. Cancellations up to 2 weeks prior to the class will receive a full refund less the non-refundable deposit. Cancellations 1 to 2 weeks prior to the class will receive a refund of half the class fee, less the non-refundable deposit. Cancellations less than1 week prior to the class will not receive a refund. If the class is cancelled, registrants will receive a full refund. Online registration closes one week prior to the class. No drop-ins are accepted.Policy for classes: All class registrations include a non-refundable deposit. Cancellations up to 2 weeks prior to the class will receive a full refund less the non-refundable deposit. Cancellations 1 to 2 weeks prior to the class will receive a refund of half the class fee, less the non-refundable deposit. Cancellations less than1 week prior to the class will not receive a refund. If the class is cancelled, registrants will receive a full refund. Online registration closes one week prior to the class. No drop-ins are accepted.",
//   },
//   {
//     id: 11,
//     question: "Do you give continuing education credit for classes?",
//     answer:
//       "Yes! I am approved by the National Certification Board for Therapeutic Massage & Bodywork (NCBTMB) as a continuing education Approved Provider. Almost all of my classes are approved for CE credit for massage therapists. As an IKC certified Touch for Health instructor, I am able to award CE’s for TFH classes to massage therapists, nurses, acupuncturists and personal trainers (through ISSA).",
//   },
//   {
//     id: 12,
//     question: "Do you offer online classes?",
//     answer:
//       "Yes! Many of my classes can now be taught via webinar, and I also offer self-paced online classes at https://butterflyholistics.thinkific.com",
//   },
// ]
