import styled from "styled-components";
import Heading from "./components/Heading";
import { useState } from "react";
import Navigation from "./components/Navigation";
import TabPanel from "./components/TabPanel";
import StageStepper from "./components/StageStepper";
import SummaryHeading from "./components/SummaryHeading";
import { Button } from "@mui/material";
import { LAYOUT_CONSTANTS } from "./components/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

const Header = styled.div`
  height: 82px;
  maxHeight: 82px;
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const NavBar = styled.div`
  flex: 0 0 200px;
  background: ${props => props.theme.palette.background.paper};
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.background.default};

`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  flex: 0 0 68px;
  border-top: 1px solid ${props => props.theme.palette.divider};
`;

const BodyHeader = styled.div`
  max-height: ${LAYOUT_CONSTANTS.STAGE_STEPPER_HEIGHT}px;
  position: relative;
  height: ${LAYOUT_CONSTANTS.STAGE_STEPPER_HEIGHT}px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-top: 4px solid ${props => props.theme.palette.divider};
  background-color: ${props => props.theme.palette.background.paper};
`;

const NavBarSummary = styled.div`
  max-height: ${LAYOUT_CONSTANTS.STAGE_STEPPER_HEIGHT}px;
  height: ${LAYOUT_CONSTANTS.STAGE_STEPPER_HEIGHT}px;
`;

const NavBarContent = styled.div`
  border: 1px solid ${props => props.theme.palette.divider};
  padding-top: 16px;
  border-left: none;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 12px;
  margin: 12px 14px 12px 14px;
`
const PrimaryButton = styled(Button)`
  border-radius: 2px;
  border: 2px solid ${props => props.theme.palette.secondary.light};
  background: ${props => props.theme.palette.secondary.dark};
`
const SecondaryButton = styled(Button)`
  border-radius: 2px;
  border: 1px solid ${props => props.theme.palette.divider};
  background: ${props => props.theme.palette.primary.contrastText};
  color: ${props => props.theme.palette.secondary.dark};
`

function Layout() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container style={{ height: "100vh", overflow: "auto" }}>
      <Header>
        <Heading/>
        {/* <div style={{  flex: '0 0 10px'}}></div> */}
      </Header>
      <Body>
        <NavBar>
          <NavBarSummary>
            <SummaryHeading/>
          </NavBarSummary>
          <NavBarContent>
            <Navigation tabValue={tabValue} handleTabChange={handleTabChange}/>
          </NavBarContent>
        </NavBar>
        <Page>
          <BodyHeader>
            <StageStepper/>
          </BodyHeader>
          <Content>
            <TabPanel value={tabValue} index={0}>
              Summary
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              OC-00000001
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              OC-00000002
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              OC-00000003
            </TabPanel>
          </Content>
          <Footer>
          <ButtonGroup >
            <PrimaryButton color='secondary' variant="contained" disableElevation>Save</PrimaryButton>
            <SecondaryButton variant="outlined" >Cancel</SecondaryButton>
          </ButtonGroup>
          </Footer>
        </Page>
      </Body>
    </Container>
  );
}

export default Layout;
