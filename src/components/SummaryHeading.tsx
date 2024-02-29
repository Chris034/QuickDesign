import styled, { useTheme } from "styled-components";
import Text from "./Text"

const Container = styled.div`
    background-color: ${props => props.theme.palette.primary.dark};
    height: 50px; //todo: make var
    padding: 3px 24px 3px 15px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
`;


function SummaryHeading() {
    const theme = useTheme();
    return (
        <Container>
            <Text $color={theme.palette.primary.contrastText} $isBold={true} >Forecast Stages</Text>
            <Text $color={theme.palette.primary.contrastText}>Active for X days</Text>
        </Container>
    );
}

export default SummaryHeading;