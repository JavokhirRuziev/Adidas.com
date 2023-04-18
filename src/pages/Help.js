import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import PageFooter from "./PageFooter";
import AppBar from "../../components/AppBar";
import BlackButton from "../../components/BlackButton";
import ComponentsOfHelp from "../../components/ComponentsOfHelp";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GradingIcon from "@mui/icons-material/Grading";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Image from "next/image";
import HeaderAppBar from "../../components/HeaderAppBar";

function Help() {
  const [onClick, setOnClick] = useState({
    acc: false,
    run: false,
    comp: false,
    club: false,
    deliver: false,
    order: false,
    pay: false,
    prod: false,
    promote: false,
    return: false,
    app: false,
  });
  const ref = useRef();
  const toTop = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };
  return (
    <>
      <div ref={ref}></div>
      <HeaderAppBar />
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Box
          sx={{
            margin: "100px 100px 70px 100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "520px",
              height: "350px",
              justifyContent: "space-between",
              margin: "0 0 70px 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                padding: "10px 0 10px 0",
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </Typography>
            <Box>
              <BlackButton
                text={"WHAT IS THE ADIDAS EMPLOYEE STORE DIGITAL PASS?"}
              />
            </Box>
            <Box>
              <BlackButton text={"HOW DO I RETURN MY PRODUCT(S)?"} />
            </Box>
            <Box>
              <BlackButton text={"WHAT ARE THE TERMS AND CONDITIONS?"} />
            </Box>
            <Box>
              <BlackButton
                text={"WHY CAN’T I FIND MY ORDER IN MY ORDER HISTORY?"}
              />
            </Box>
            <Box>
              <BlackButton
                text={
                  "WHY DOESN’T MY PROMOTION CODE APPLY THE CORRECT DISCOUNT TO MY ORDER?"
                }
              />
            </Box>
            <Box>
              <BlackButton text={"HOW DO I CREATE AN ACCOUNT?"} />
            </Box>
            <Box>
              <BlackButton
                text={"WHAT SHOULD I KNOW ABOUT PERSONALIZED GEAR?"}
              />
            </Box>
            <Box>
              <BlackButton text={"HOW DO I RESET MY ACCOUNT PASSWORD?"} />
            </Box>
          </Box>

          <Box sx={{ margin: "0 0 70px 0" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                padding: "10px 0 10px 0",
              }}
            >
              SUPPORT TOPICS
            </Typography>
            <Box sx={{ display: "flex", height: "625px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0 12px 0 12px",
                }}
              >
                <ComponentsOfHelp
                  onClick={() => setOnClick({ acc: true })}
                  text={"ACCOUNT NEWSLETTER"}
                  icon={<DraftsIcon />}
                  arrow={onClick.acc}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ comp: true })}
                  arrow={onClick.comp}
                  text={"COMPANY INFORMATION"}
                  icon={
                    <Image
                      src={"/sneaker.png"}
                      width={30}
                      height={30}
                      alt="sneaker"
                    />
                  }
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ club: true })}
                  arrow={onClick.club}
                  text={"ADICLUB"}
                  icon={
                    <Image
                      src={"/adidas.png"}
                      width={25}
                      height={25}
                      alt="sneaker"
                    />
                  }
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ deliver: true })}
                  arrow={onClick.deliver}
                  text={"DELIVERY"}
                  icon={<LocalShippingIcon />}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ order: true })}
                  arrow={onClick.order}
                  text={"ORDERING"}
                  icon={<GradingIcon />}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ pay: true })}
                  arrow={onClick.pay}
                  text={"PAYMENT"}
                  icon={<PaymentIcon />}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ prod: true })}
                  arrow={onClick.prod}
                  text={"PRODUCTS"}
                  icon={
                    <Image
                      src={"/sneaker.png"}
                      width={30}
                      height={30}
                      alt="sneaker"
                    />
                  }
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ promote: true })}
                  arrow={onClick.promote}
                  text={"PROMOTIONS VOUCHERS"}
                  icon={<ConfirmationNumberIcon />}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ return: true })}
                  arrow={onClick.return}
                  text={"RETURN REFUND"}
                  icon={<CreditScoreIcon />}
                />
                <ComponentsOfHelp
                  onClick={() => setOnClick({ app: true })}
                  arrow={onClick.app}
                  text={"CONFIRMED APP"}
                  icon={
                    <Image
                      src={"/adidas.png"}
                      width={25}
                      height={25}
                      alt="sneaker"
                    />
                  }
                />
              </Box>
              <Box sx={{ bgcolor: "#ededed", width: "580px" }}></Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              maxWidth: "930px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                width: "400px",
              }}
            >
              <Box sx={{}}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  WHERE IS MY ORDER?
                </Typography>
                <Typography>
                  Log in or use the Order Tracker to quickly track your order,
                  start a return, and check the status of a refund.
                </Typography>
              </Box>
              <BlackButton text={"LOGIN"} width={"70px"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                width: "400px",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  NO ANSWER TO YOUR QUESTION? ASK OUR CUSTOMER CARE
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </>
  );
}

export default Help;
