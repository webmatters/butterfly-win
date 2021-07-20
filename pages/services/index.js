import React from "react"

import PageLayout from "components/layout/PageLayout"
import PageHeader from "components/shared/PageHeader"
import Faqs from "components/faqs/Faqs"

function services() {
  const title = "Services"
  const subtitle = "The Right Approach For Your Needs"
  const intro =
    "We tap into the body's innate intelligence to help guide your particular treatment. We are trained in a variety of modalties to ensure that you receive the right treatment for your needs."

  return (
    <PageLayout>
      <Faqs />
    </PageLayout>
  )
}

export default services
