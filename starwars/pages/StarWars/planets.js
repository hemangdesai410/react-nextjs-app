import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const getStaticProps = async () => {

    const [planets1, planets2, planets3, planets4] = await Promise.all([
        fetch('https://swapi.dev/api/planets/?search=a&page=1').then(r => r.json()),
        fetch('https://swapi.dev/api/planets/?search=a&page=2').then(r => r.json()),
        fetch('https://swapi.dev/api/planets/?search=a&page=3').then(r => r.json()),
        fetch('https://swapi.dev/api/planets/?search=a&page=4').then(r => r.json()),
    ]);
    
    return { props: { planets1, planets2, planets3, planets4 } }

}

const Planets = ({ planets1, planets2, planets3, planets4 }) => {
    return (
        <div>
            <Tag size="lg" colorScheme="whatsapp" borderRadius="full">StarWars Planets</Tag>
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
                    {planets1.results.map(planet => (
                        <div key={planet.name}>
                        <h1><li>{planet.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='11'>
                    {planets2.results.map(planet => (
                        <div key={planet.name}>
                        <h1><li>{planet.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='21'>
                    {planets3.results.map(planet => (
                        <div key={planet.name}>
                        <h1><li>{planet.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='31'>
                    {planets4.results.map(planet => (
                        <div key={planet.name}>
                        <h1><li>{planet.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </div>
    )
}

export default Planets