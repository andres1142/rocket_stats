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


    /**
     * This functions iterates through the data and maps the rocket name into counter value.
     * */

    function sortData(){
        // Initialize an empty object to store the launch data
        let launch_dict = {};

        // Loop through each launch in the 'results' array
        for (let launch of data) {
            debugger
            // Extract the year from the 'window_start' property
            const year = String(launch.window_start).substring(0, 4);
            // Extract the rocket configuration name
            const name = String(launch.rocket.configuration.name);

            // Check if the year exists in the launch_dict object
            if (!(year in launch_dict)) {
                launch_dict[year] = { [name]: 1 };
            } else {
                // Check if the rocket configuration name exists for the year
                if (!(name in launch_dict[year])) {
                    launch_dict[year][name] = 1;
                } else {
                    launch_dict[year][name] += 1;
                }
            }
        }
    }

    return (
        <div>
            <h3>Launches Per Year</h3>

            <h4>SpaceX flights</h4>
            {data.length > 0 ? createTable() : null}
        </div>
    )
}