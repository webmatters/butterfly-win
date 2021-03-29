import React from 'react'

import PageLayout from 'components/PageLayout'
import PageHeader from 'components/PageHeader'

function Appointments() {
  const title = 'Appointments'
  const subtitle = 'Schedule Your Next Appointment'
  const intro =
    "Scheduling an appointment is as easy as selecting an available date and time below. You'll receive a confirmation and a handy reminder the day before your appointment."
  return (
    <PageLayout>
      <PageHeader title={title} subtitle={subtitle} intro={intro} />
      <div className="px-4 sm:px-6 lg:px-16">
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=13298494"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </PageLayout>
  )
}

export default Appointments
