export const getStaticProps = async () => {

    const res = await fetch('https://swapi.dev/api/starships');
    const data = await res.json();
    
    return {
        props: { starships: data }
    }
}

const Starships = ({ starships }) => {
    return (
        <div>
            <h1>StarWars StarShips</h1>
            {starships.results.map(starship => (
                <div key={starship.name}>
                <h1>{starship.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Starships