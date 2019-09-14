import { useCountUp } from "react-countup"

export default function Countup({ params }) {
  const { countUp } = useCountUp(params)
  return countUp
}
