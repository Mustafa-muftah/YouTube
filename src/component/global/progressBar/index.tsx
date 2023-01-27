import { useEffect, useState } from "react"
import"./ProgressBar.scss"

export const ProgressBar:React.FC =() => {
const [progessValue , setProgressBar] = useState(0)

useEffect(() => {
const _timer= setTimeout(() => {
    setProgressBar(progessValue + 3)
},100)

return () => clearTimeout(_timer)
},[progessValue])
    return(
        <div className="progressBar__container">
        <progress value={progessValue} max="100"></progress>
        </div>
    )
}