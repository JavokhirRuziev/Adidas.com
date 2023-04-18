import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ComponentsOfMFAS from "../../components/ComponentsOfMFAS";
import BlackButton from "../../components/BlackButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function MFAS() {
  const [displayChange, setDisplayChange] = useState(true);
  const firstButton = useRef();
  const secondButton = useRef();

  function toRight() {
    firstButton.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
    setDisplayChange(false);
  }
  const toLeft = () => {
    secondButton.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setDisplayChange(true);
  };

  return (
    <Box sx={{ margin: "20px" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
          position: "relative",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
            MORE FROM ADIDAS STORIES
          </Typography>
        </Box>
        <div
          style={{
            display: "flex",
            overflowY: "hidden",
          }}
        >
          <div ref={secondButton} />
          <ComponentsOfMFAS
            image={"/MFAS1.jpg"}
            storyName={"What Is A Penalty Kick In Soccer"}
            story={
              "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi..."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS2.jpg"}
            storyName={"Offsides In Soccer: Explained"}
            story={
              "Watching a match? Get the scoop on the rules of the game, starting with the offside soccer rule, explained by adidas."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS3.jpg"}
            storyName={"The Only Ultraboost Sizing Guide You’ll Ever Need"}
            story={
              " Upgrade your runs with the all new adidas Ultraboost Light. Read our size guide to discover the differences between the different shoes in t..."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS4.jpg"}
            storyName={"The Definitive adidas Forum Size Guide"}
            story={
              "Curious about where to start with adidas Forum sizing? Look no further to learn about how the iconic sneakers fit before even trying them on..."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS1.jpg"}
            storyName={"What Is A Penalty Kick In Soccer"}
            story={
              "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi..."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS2.jpg"}
            storyName={"Offsides In Soccer: Explained"}
            story={
              "Watching a match? Get the scoop on the rules of the game, starting with the offside soccer rule, explained by adidas."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS3.jpg"}
            storyName={"The Only Ultraboost Sizing Guide You’ll Ever Need"}
            story={
              " Upgrade your runs with the all new adidas Ultraboost Light. Read our size guide to discover the differences between the different shoes in t..."
            }
          />
          <ComponentsOfMFAS
            image={"/MFAS4.jpg"}
            storyName={"The Definitive adidas Forum Size Guide"}
            story={
              "Curious about where to start with adidas Forum sizing? Look no further to learn about how the iconic sneakers fit before even trying them on..."
            }
          />
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: "200px",
              bgcolor: "white",
            }}
          >
            <BlackButton
              className={displayChange ? "changedDisplay" : ""}
              onClick={toLeft}
              text={<KeyboardArrowLeftIcon sx={{ padding: "10px 0 10px 0" }} />}
            />
            <BlackButton
              className={displayChange ? "" : "changedDisplay"}
              onClick={toRight}
              text={
                <KeyboardArrowRightIcon sx={{ padding: "10px 0 10px 0" }} />
              }
            />
          </Box>
          <div ref={firstButton} />
        </div>
      </Box>
    </Box>
  );
}

export default MFAS;
