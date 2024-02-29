import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector, StepIconProps, SvgIcon, stepConnectorClasses, stepLabelClasses} from '@mui/material';
import { StageActiveIcon } from './icons/StageActiveIcon';
import { StageInactiveIcon } from './icons/StageInactiveIcon';
import { StageCompleteIcon } from './icons/StageCompleteIcon';
import styled from 'styled-components';

const steps = ['Opportunity', 'Design Win', 'Tapeout Revenue'];

function StageStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    const icon = (active?: boolean, completed?: boolean) => {
      return active ? <SvgIcon component={StageActiveIcon} />
      : completed ? <SvgIcon component={StageCompleteIcon} />
      : <SvgIcon component={StageInactiveIcon} />
    }

    return (
      <div style={{ zIndex: 999 }} className={className}>
       {icon(active, completed)}
      </div>
    );
  }

  const StageConnector = styled(StepConnector)`
  & .${stepConnectorClasses.line} {
    transform: translateX(-7px);
    //todo: fix this for 4k monitors and <700px
    width: 106%;
    z-index: -1;
    border-color: ${props => props.theme.palette.border.dark};
    border-top-width: 4px;
    border-radius: 1px;
  }
`;

const StageStepLabel = styled(StepLabel)`
  &.${stepLabelClasses.alternativeLabel} .${stepLabelClasses.label} {
    margin-top: 0;
  }
`;

 function StageStepper() {
  const [activeStep] = React.useState(1);
//   const [skipped, setSkipped] = React.useState(new Set<number>());

//   const isStepOptional = (step: number) => {
//     // return step === 1;
//     console.log(step)
//     return false;
//   };

//   const isStepSkipped = (step: number) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <Box sx={{ width: '100%', position: 'absolute', top: '-16px', zIndex: 999, maxHeight: '75px'}}>
      <Stepper connector={<StageConnector />} alternativeLabel activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
        //   if (isStepSkipped(index)) {
        //     stepProps.completed = false;
        //   }
          return (
            <Step key={label} {...stepProps}>
              <StageStepLabel StepIconComponent={StageStepIcon} {...labelProps}>{label}</StageStepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default StageStepper;