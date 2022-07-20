import { Box, Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/react"
import React from "react";

function SignInPage(){
  return(
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>

            </TabPanel>
            <TabPanel>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  )
}