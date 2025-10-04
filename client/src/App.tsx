import { useState } from "react"
import { Button } from "./components/ui/button"

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-3 items-center">
          <h1>Sha, isip ka ning architecture</h1>
          <h3 className="text-3xl">{count === 0 ? "^__^" : (count === 10 ? "Dami tym" : count)}</h3>
          <div className="flex gap-3">
            <Button variant="destructive"
              onClick={() => setCount(prev => prev <= 0 ? 0 : prev - 1)}
            >-</Button>
            <Button
              onClick={() => setCount(prev => prev >= 10 ? 10 : prev + 1)}
            >+</Button>
          </div>
        </div>
      </div>
    </>
  )
}
