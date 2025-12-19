import { hoursLoad } from "../form/hours-load"

const selectedDate = document.getElementById("date")

export function schedulesDays() {
  const date = selectedDate.value

  hoursLoad({ date })
}