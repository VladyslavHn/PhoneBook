import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom";


const NotFoundPage = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        return () => clearInterval(interval);
    },[])

    if (timer === 5) {
        return (
            <Navigate to="/" replace/>
        )
    }

  return (
    <div>
          <h1>Page not found</h1>
          <h2>You will be redirected to the main page in {5 - timer} seconds</h2>
          <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFoundPage
