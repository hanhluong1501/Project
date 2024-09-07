import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "",
    imgPath: "https://adminbeauty.hvnet.vn/Upload/Files/cocoon-my-pham-thuan-chay-viet-nam.jpg?width=1170&height=450&v=15042020%22",
  },
  {
    label: "",
    imgPath: "https://adminbeauty.hvnet.vn/Upload/Files/banner/bo-my-pham-2022.jpg?width=1170&height=450&v=15042020",
  },
  {
    label: "",
    imgPath: "https://adminbeauty.hvnet.vn/Upload/Files/bannerweb-chinhanh(1).png?width=1170&height=450&v=15042020",
  },
  {
    label: "",
    imgPath: "https://toquoc.mediacdn.vn/280518851207290880/2022/8/31/photo1661938107121-16619381072031855484639-1661938235583-1661938235905489752247.jpg",
  },
];

function HeroSection() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: {
                    xs: "20rem",
                    md: "30rem",
                  },
                  display: "block",
                  overflow: "hidden",
                  filter: "brightness(90%)",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: "var(--white, #FFF)",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: 0,
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: "var(--white, #FFF)",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
        sx={{
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "var(--primary, #A10550)",
          },
        }}
      />
    </Box>
  );
}

export default HeroSection;
