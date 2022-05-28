import { Center } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Chakra1 = () => {
    return (
        <div>
            <Grid templateColumns={["repeat(1,1fr)","repeat(3,1fr)"]}
            w={['300px','1000px']} color="white"
             fontSize="30px" 
              gap={1}>

                <GridItem 
                w={['75px','250px']} h='300' bg='blue.500' padding='100' 
                    gridRow={[ " 1 / span 1","1 / span 1"]}>
                    <Center >Nav</Center>
                </GridItem>
                <GridItem w={['150px','500px']} h='300' bg='orange.500'padding='100'
                gridRow={[ " 3 / span 1","1 / span 1"]}>
                    <Center>Content</Center>
                </GridItem>
                <GridItem w={['75px','250px']} h='300' bg='red.500' padding='100'
                gridRow={[ " 2 / span 1","1 / span 1"]}>
                    <Center>Winget</Center>
                </GridItem>

            </Grid>
        </div>
    )
}

export default Chakra1
