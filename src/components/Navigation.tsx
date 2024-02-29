import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent } from "react";
import {tabsClasses, tabClasses} from "@mui/material";
import styled from "styled-components";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }
  
  const StyledTabs = styled(({...props}: StyledTabsProps) => (
    <Tabs
      {...props}
      orientation="vertical"
      variant="scrollable"
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))`
    & .${tabsClasses.indicator} {
      display: flex;
      justify-content: center;
      background-color: transparent;
      left: 4px;
      width: 4px;
      align-items: center;
    }
    & .MuiTabs-indicatorSpan {
      width: 4px;
      height: 20px;
      background-color: ${props => props.theme.palette.primary.dark};
    }
  `;
  
  interface StyledTabProps {
    label: string;
  }
  
  const StyledTab = styled(({...props}: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))`
    &.${tabClasses.selected} {
      background-color: ${props => props.theme.palette.background.default};
      color: ${props => props.theme.palette.text.primary};
    }
    &.${tabClasses.root} {
      align-items: flex-start;
      min-height: 36px;
      height: 36px;
      padding-top: 0px;
      padding-bottom: 0px;
      margin-top: 0px;
      font-size: ${props => props.theme.typography.fontSize};
      font-style: normal;
      font-weight:  ${props => props.theme.typography.fontWeightRegular};
      line-height: normal;
      margin-bottom: 0px;
      text-transform: none;
      color: ${props => props.theme.palette.text.primary};
    }
    &:hover {
      color: ${props => props.theme.palette.text.secondary};
    }
  `;


interface NavigationProps {
    tabValue: number
    handleTabChange: (event: SyntheticEvent<Element, Event>, value: number) => void
}

function Navigation({tabValue, handleTabChange}: NavigationProps) {
    return (
        <StyledTabs
          value={tabValue}
          onChange={handleTabChange}
        >
          <StyledTab label="Summary" />
          <StyledTab label="OC-00000001"  />
          <StyledTab label="OC-00000002"  />
          <StyledTab label="OC-00000003"  />
        </StyledTabs>
    )
}

export default Navigation