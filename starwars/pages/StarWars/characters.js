import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const getStaticProps = async () => {

    const [people1, people2, people3, people4, people5, people6] = await Promise.all([
        fetch('https://swapi.dev/api/people/?search=a&page=1').then(r => r.json()),
        fetch('https://swapi.dev/api/people/?search=a&page=2').then(r => r.json()),
        fetch('https://swapi.dev/api/people/?search=a&page=3').then(r => r.json()),
        fetch('https://swapi.dev/api/people/?search=a&page=4').then(r => r.json()),
        fetch('https://swapi.dev/api/people/?search=a&page=5').then(r => r.json()),
        fetch('https://swapi.dev/api/people/?search=a&page=6').then(r => r.json()),

    ]);
    
    return { props: { people1, people2, people3, people4, people5, people6 } }
}

const Characters = ({ people1, people2, people3, people4, people5, people6 }) => {
    return (
        <div>
            <Tag>StarWars Characters</Tag>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                    <Tab>Five</Tab>
                    <Tab>Six</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <ol type='1'>
                    {people1.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='11'>
                    {people2.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='21'>
                    {people3.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='31'>
                    {people4.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='41'>
                    {people5.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                    <TabPanel>
                    <ol start='51'>
                    {people6.results.map(people => (
                        <div key={people.name}>
                        <h1><li>{people.name}</li></h1>
                        </div>
                    ))}
                    </ol>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </div>
    )
}

export default Characters