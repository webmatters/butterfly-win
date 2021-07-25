import React from "react"
import axios from "axios"

import PageLayout from "components/layout/PageLayout"
import Faqs from "components/faqs/Faqs"

function faqs({ faqs }) {
  return (
    <PageLayout>
      <Faqs faqs={faqs} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const result = await axios.get(`${process.env.STRAPI_API_URL}/faqs`)
  const faqs = result.data

  return {
    props: {
      faqs,
    },
  }
}

export default faqs
