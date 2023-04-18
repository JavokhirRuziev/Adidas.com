import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  TextField,
} from "@mui/material";
import BlackButton from "./BlackButton";
import EastIcon from "@mui/icons-material/East";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  height: "70%",
};

export default function JoinAdiClub() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Typography
        onClick={handleOpen}
        className="headerText"
        sx={{ fontSize: "12px", cursor: "pointer" }}
      >
        join adiClub
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "white",
                right: 0,
              }}
            >
              <BlackButton
                onClick={handleClose}
                text={<Close sx={{ padding: "10px 0 10px 0" }} />}
              />
            </Box>
            <Image src={"/joinAC.jpg"} width={300} height={80} alt="adiClub" />
            <Box sx={{ padding: "12px" }}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                YOUR ADICLUB BENEFITS AWAIT
              </Typography>
              <Typography sx={{ fontSize: "13px", marginBottom: "10px" }}>
                Get free shipping, discount vouchers and members only products
                when you’re in adiClub.
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Log in or sign up (it’s free)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "20px 0 20px 0",
                }}
              >
                <Box
                  sx={{
                    padding: "10px",
                    border: "solid black 1px",
                  }}
                >
                  <AppleIcon />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "solid black 1px",
                  }}
                >
                  <FacebookIcon sx={{ color: "#1e5799" }} />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "solid black 1px",
                  }}
                >
                  <GoogleIcon />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "solid black 1px",
                  }}
                >
                  <Image
                    src={"/yahoo.png"}
                    width={20}
                    height={20}
                    alt="yahoo"
                  />
                </Box>
              </Box>
              <TextField
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
                variant="outlined"
                label="EMAIL ADDRESS"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <>
                    <Typography>
                      Keep me logged in. Applies to all options.
                    </Typography>
                    <BlackButton text={"More info"} />
                  </>
                }
              />
              <Box sx={{ margin: "20px 5px 20px 5px " }}>
                <Box
                  sx={{
                    position: "relative",
                    border: "solid 1px black",
                    width: "129px",
                    height: "43px",
                    cursor: "pointer",
                  }}
                >
                  <Button
                    className="button"
                    style={{
                      position: "absolute",
                      width: "130px",
                      bottom: "3px",
                      zIndex: "1",
                      right: "3px",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "10px 0 10px 0",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    continue <EastIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "14px" }}>
                  Sign me up to adiClub, featuring exclusive adidas offers and
                  news By clicking the “Continue” button, you are joining
                  adiClub, will receive emails with the latest news and updates,
                  and agree to the
                </Typography>
                <BlackButton width={"120px"} text={"TERMS OF USE"} />
                <Typography sx={{ width: "30px", fontSize: "14px" }}>
                  and
                </Typography>
                <BlackButton
                  width={"270px"}
                  text={"ADICLUB TERMS AND CONDITIONS"}
                />
                <Typography sx={{ fontSize: "14px" }}>
                  and acknowledge you have read the{" "}
                </Typography>
                <BlackButton width={"200px"} text={"ADIDAS PRIVACY POLICY."} />
                <Typography sx={{ fontSize: "14px" }}>
                  If you are a California resident, the adiClub membership may
                  be considered a financial incentive. Please see the Financial
                  Incentives section of our
                </Typography>
                <BlackButton
                  width={"230px"}
                  text={"CALIFORNIA PRIVACY NOTICE"}
                />
                <Typography sx={{ width: "80px", fontSize: "14px" }}>
                  for details.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
