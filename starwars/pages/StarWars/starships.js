import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const getStaticProps = async () => {

    const [starships1, starships2, starships3, starships4]= await Promise.all([
        fetch('https://swapi.dev/api/starships/?search=a&page=1').then(r => r.json()),
        fetch('https://swapi.dev/api/starships/?search=a&page=2').then(r => r.json()),
        fetch('https://swapi.dev/api/starships/?search=a&page=3').then(r => r.json()),
        fetch('https://swapi.dev/api/starships/?search=a&page=4').then(r => r.json()),
    ]);

    return { props: { starships1, starships2, starships3, starships4 } }

    
}

const Starships = ({ starships1, starships2, starships3, starships4 }) => {
    return (
        <div>
            <Tag>StarWars StarShips</Tag>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <ol type='1'>
                    {starships1.results.map(starship => (
                        <div key={starship.name}>
                        <h1><li>{starship.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='11'>
                    {starships2.results.map(starship => (
                        <div key={starship.name}>
                        <h1><li>{starship.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='21'>
                    {starships3.results.map(starship => (
                        <div key={starship.name}>
                        <h1><li>{starship.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='31'>
                    {starships4.results.map(starship => (
                        <div key={starship.name}>
                        <h1><li>{starship.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </div>
    )
}

export default Starships