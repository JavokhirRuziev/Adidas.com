import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import { Close } from "@mui/icons-material";
import BlackButton from "./BlackButton";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxWidth: "500px",
};

export default function ComponentsOfProduct({
  addTogBag,
  image,
  productName,
  price,
  total,
  quentity,
  product,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const bag = useSelector((state) => state.product.bag);

  return (
    <div>
      <Box>
        <Box
          onClick={handleOpen}
          className={
            bag.find((item) => item.image1 === product) !== undefined
              ? "bg"
              : ""
          }
        >
          <Box
            sx={{
              position: "relative",
              border: "solid 1px black",
              width: "137.5px",
              height: "42.5px",
              cursor: "pointer",
            }}
            onClick={addTogBag}
          >
            <Button
              className="button"
              style={{
                position: "absolute",
                width: "138px",
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
              ADD TO BAG <EastIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Box>
        <Box
          className={
            bag.find((item) => item.image1 === product) !== undefined
              ? ""
              : "bg"
          }
          sx={{
            position: "relative",
            width: "137.5px",
            height: "42.5px",
            cursor: "pointer",
          }}
        >
          <Button
            className="button"
            style={{
              position: "absolute",
              width: "138px",
              bottom: "3px",
              zIndex: "1",
              right: "3px",
              fontSize: "12px",
              fontWeight: "600",
              padding: "10px 0 10px 0",
            }}
            color="primary"
            variant="contained"
            disabled
          >
            ADDED
          </Button>
        </Box>
      </Box>
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  sx={{
                    padding: "10px 10px 10px 20px",
                    fontWeight: "600",
                    fontSize: "24px",
                  }}
                >
                  SUCCESSFULLY ADDED TO BAG!
                </Typography>
              </Box>
              <BlackButton
                onClick={handleClose}
                text={<Close sx={{ padding: "10px 0 10px 0" }} />}
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", width: "50%", padding: "10px" }}>
                  <Image
                    style={{ margin: "0 15px 0 0" }}
                    src={image}
                    width={100}
                    height={100}
                    alt="photo"
                  />
                  <Box>
                    <Typography sx={{ fontSize: "12px" }}>
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                      {price}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    borderLeft: "solid 1px black",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Typography>Your Bag</Typography>
                    <Typography>{quentity}</Typography>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Total Product Cost</Typography>
                        <Typography>{price}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Total Product Cost </Typography>
                        <Typography>$2.99</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          borderTop: "solid 1px black",
                        }}
                      >
                        <Typography sx={{ fontWeight: "600" }}>
                          Total:
                        </Typography>
                        <Typography sx={{ fontWeight: "600" }}>
                          {total}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Link href={"/Bag"}>
                    <Box
                      sx={{
                        position: "relative",
                        border: "solid 1px black",
                        height: "42.5px",
                        cursor: "pointer",
                        margin: "10px 0 10px 0",
                      }}
                    >
                      <Button
                        className="button"
                        style={{
                          position: "absolute",
                          bottom: "3px",
                          zIndex: "1",
                          right: "3px",
                          fontSize: "12px",
                          fontWeight: "600",
                          padding: "10px 0 10px 0",
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%",
                        }}
                        color="primary"
                        variant="contained"
                      >
                        view bag <EastIcon sx={{ marginLeft: "10px" }} />
                      </Button>
                    </Box>
                  </Link>
                  <Button
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-around",
                      border: "solid 1px black",
                      margin: "10px 0 10px 0",
                    }}
                  >
                    CHECKOUT
                    <EastIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
