import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()


        const workout = { title, load, reps }

        const response = await fetch("/api/workouts", {
            method: 'post',
            body: JSON.stringify(workout),
            headers: {
                'Content-type': 'aplication/json'
            }
        })
        
        // if (!response.ok) {
        //     throw new Error(`Response status: ${response.status}`);
        //   }

        const json = await response.json()
        console.log({json})

        if (!responce.ok) {
            setError(json.error)
        }
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        if (responce.ok) {
            setError(null)
            console.log("new workout added", json);

        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label>Exersize Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>load ( in kg): </label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>eps</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add workout</button>
            {error && <div className="error">{error} </div>}
        </form>
    )

}

export default WorkoutForm