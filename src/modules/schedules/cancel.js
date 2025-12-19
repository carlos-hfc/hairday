import { cancelSchedule } from "../../services/cancel-schedule"
import { schedulesDays } from "./load"

const periods = document.querySelectorAll(".period")

periods.forEach(period => {
  period.addEventListener("click", async event => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if (isConfirm) {
          await cancelSchedule({ id })
          await schedulesDays()
        }
      }
    }
  })
})