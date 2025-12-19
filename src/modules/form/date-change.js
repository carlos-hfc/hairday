import { schedulesDays } from "../schedules/load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => {
  schedulesDays()
}