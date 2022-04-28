import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
           <div className="logo">
               <h1>StarWars Categories</h1>
            </div> 
            <Link href="StarWars/characters"><a>Characters</a></Link>
            <Link href="StarWars/starships"><a>StarShips</a></Link>
            <Link href="StarWars/planets"><a>Planets</a></Link>
        </nav>
    )
}

export default Navbar;