export const getStaticProps = async () => {

    const res = await fetch('https://swapi.dev/api/planets');
    const data = await res.json();
    
    return {
        props: { planets: data }
    }
}
const Planets = ({ planets }) => {
    return (
        <div>
            <h1>StarWars Planets</h1>
            {planets.results.map(planet => (
                <div key={planet.name}>
                <h1>{planet.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Planets