import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <Menu>
        <MenuButton className="navbar" as={Button} rightIcon={<ChevronDownIcon />}>
            StarWars Categories
        </MenuButton>
        <MenuList>
            <MenuItem><Link href="/StarWars/characters" passHref><a className='characters'>Characters</a></Link></MenuItem>
            <MenuItem><Link href="/StarWars/starships" passHref><a className='starships'>StarShips</a></Link></MenuItem>
            <MenuItem><Link href="/StarWars/planets" passHref><a className='planets'>Planets</a></Link></MenuItem>
        </MenuList>
        </Menu>
    )
}

export default Navbar;