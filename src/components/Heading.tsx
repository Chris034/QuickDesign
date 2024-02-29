import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Text from './Text';
import { DatePicker } from '@mui/x-date-pickers';
import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

const Idenitifier = styled(Stack)`
    min-width: 200px;
`;

function Heading() {
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Stack sx={{ boxSizing: 'border-box', overflow: 'hidden', margin: '12px 14px 0px 14px' }} direction={'row'} >
            <Idenitifier direction="column" >
                <Text $fontSize={20} $isBold={true} >Forecast12345</Text>
                <Text>Draft</Text>
            </Idenitifier>
            <Grid container  spacing={2}>
                <Grid item xs={6} sx={{display: 'flex'}} justifyContent={'center'} alignItems={'center'}>
                <Text style={{whiteSpace: matchesLG ? 'normal' : 'nowrap', marginRight: '8px'}}>First Product Production Date</Text>
                <DatePicker
                    sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            height: "32px",
                            minWidth: '100px',
                        },
                    }}
                        />
                </Grid>
                <Grid sx={{display: 'flex'}} item xs={6}justifyContent={'center'} alignItems={'center'}>
                    <Text style={{whiteSpace: matchesLG ? 'normal' : 'nowrap', marginRight: '8px'}}>Years of Production</Text>
                    <TextField fullWidth variant="outlined"
                    sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                            height: '19px',
                            padding: '6.5px 8px 6.5px 8px',
                            minWidth: '100px',
                        },
                    }}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Heading