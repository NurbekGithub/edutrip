import React, { useState, useEffect } from "react"
import Circle from "react-circle"

export default function AnimatedCircle(props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(props.progress)
  }, [])
  return <Circle {...props} progress={progress} />
}
