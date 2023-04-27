import { useState , useEffect} from 'react';

export default function LauchesPerYear(){
    const [data, setData] = useState([])

    useEffect( () => {
         fetchData().then(r => console.log(r))
    }, [])


    async function fetchData(){
        try {
            const response =  await fetch("https://ll.thespacedevs.com/2.2.0/launch/previous/?limit=10&search=SpaceX")
            const data = await response.json()
            setData(data.results)
        } catch (error) {
            console.log(error)
        }
    }


    function createTable() {
        console.log(data)
        return (
            <table>
                <thead>
                <tr>
                    <th>Mission Name</th>
                    <th>Launch Date</th>
                    <th>Launch Site</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {data.map((launch, index) => {
                        return (
                            <tr key={index}>
                                <td>{launch.name}</td>
                                <td>{launch.window_start}</td>
                                <td>{launch.pad.location.name}</td>
                                <td>{launch.mission ? launch.mission.description : "No Details"}</td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h3>Launches Per Year</h3>

            <h4>SpaceX flights</h4>
            {data.length > 0 ? createTable() : null}
        </div>
    )
}