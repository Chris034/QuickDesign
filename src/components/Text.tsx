import styled from "styled-components"

const Text = styled.div<{$isBold?: boolean, $fontSize?: number, $color?: string}>`
    color: ${props => props.$color ? props.$color : props.theme.palette.text.primary};
    font-size: ${props => props.$fontSize ? props.$fontSize : props.theme.typography.fontSize}px;
    font-style: normal;
    font-weight: ${props => props.$isBold ? props.theme.typography.fontWeightBold : props.theme.typography.fontWeightRegular};
    line-height: normal;
`

export default Text