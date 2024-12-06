import { useEffect, useState } from 'react'

// components

import WorkoutDetails from '../components/WorkoutsDetails'
import WorkoutForm from '../components/workoutForm'

function Home() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const responce = await fetch("/api/workouts")
      const json = await responce.json()

      if (responce.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])


  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;