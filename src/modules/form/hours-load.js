import dayjs from "dayjs"

import { openingHous } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  hours.replaceChildren()

  const unavailableHours = dailySchedules.map(schedule => dayjs(schedule.when).format("HH:mm"))

  const opening = openingHous.map(hour => {
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour", available ? "hour-available" : "hour-unavailable")
    li.textContent = hour
    li.setAttribute("value", hour)

    if (hour === "9:00") {
      addHourHeader("Manhã", "morning")
      li.setAttribute("data-period", "morning")
    } else if (hour === "13:00") {
      addHourHeader("Tarde", "afternoon")
      li.setAttribute("data-period", "afternoon")
    } else if (hour === "18:00") {
      addHourHeader("Noite", "night")
      li.setAttribute("data-period", "night")
    }

    hours.append(li)
  })

  hoursClick()
}

function addHourHeader(title, period) {
  const header = document.createElement("li")

  header.classList.add("hour-period")
  header.setAttribute("data-period", period)
  header.textContent = title

  hours.append(header)
}