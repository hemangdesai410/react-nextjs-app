export const getStaticProps = async () => {

    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    
    return {
        props: { persons: data }
    }
}

const Characters = ({ persons }) => {
    return (
        <div>
            <h1>StarWars Characters</h1>
            {persons.results.map(people => (
                <div key={people.name}>
                <h1>{people.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Characters