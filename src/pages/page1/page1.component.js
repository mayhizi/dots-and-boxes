import React, { useRef } from "react"

export default function Page1Component() {
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const onClick = () => {
    if (inputRef.current && inputRef.current.value == "") {
      outputRef.current.innerHTML = "not empty"
    }
  }
  return (
    <div>
      <input type="text" data-testid="input" ref={inputRef} />
      <div ref={outputRef}></div>
      <button onClick={onClick}>submit</button>
    </div>
  )
}
