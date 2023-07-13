import { differenceInCalendarDays } from "date-fns"
import { useEffect, useMemo, useState } from "react"

import Logo from './assets/bb-icon.png'

const App = () => {
  const [now, setNow] = useState(new Date())

  const butternutStartDate = useMemo(() => new Date("2016-03-15"), [])
  const daysDecimal = ((now.getTime() - butternutStartDate.getTime()) / (1000 * 3600 * 24)).toFixed(6)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  })

  useEffect(() => {
    document.title = `Day ${differenceInCalendarDays(now, butternutStartDate)} | Butternut Box`
  }, [now, butternutStartDate])

  return (
    <>
      <section className="content">
        <img className="content__icon" src={Logo} alt="Butternut Box" />
        <h1>
          { `Day ` }
          <span>
            {differenceInCalendarDays(now, butternutStartDate)}
          </span>
        </h1>
        <p className="content__days-decimal">{daysDecimal}</p>
      </section>
      <footer>
        { `Inspired by `}
        <a href="https://days.ramp.com/" target="_blank" rel="noreferrer">
          { `ramp.com` }
        </a>
      </footer>
    </>
  )
}

export default App
