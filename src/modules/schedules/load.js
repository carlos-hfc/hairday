import { listSchedulesByDay } from "../../services/list-schedules-by-day"
import { hoursLoad } from "../form/hours-load"
import { showSchedules } from "./show"

const selectedDate = document.getElementById("date")

export async function schedulesDays() {
  const date = selectedDate.value

  const dailySchedules = await listSchedulesByDay({ date })

  showSchedules({ dailySchedules })

  hoursLoad({ date, dailySchedules })
}