import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "600" }}>
            FAQ: RETURNS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "600" }}>
            How many days do I have to return?
          </Typography>
          <Typography>
            We offer free returns and exchanges within 30 days of your delivery,
            with exceptions as described in our Returns Policy. Certain items
            are designated as final sale and not eligible for returns or
            exchanges. The product page indicates whether an item is a final
            sale item. Hype products should be returned via the online returns
            portal within seven days of the delivery date. The product page
            communicates the seven-day return window during the ordering
            process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "600" }}>
            FAQ: EXCHANGES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "600" }}>
            How many days do I have to return?
          </Typography>
          <Typography>
            We offer free returns and exchanges within 30 days of your delivery,
            with exceptions as described in our Returns Policy. Certain items
            are designated as final sale and not eligible for returns or
            exchanges. The product page indicates whether an item is a final
            sale item. Hype products should be returned via the online returns
            portal within seven days of the delivery date. The product page
            communicates the seven-day return window during the ordering
            process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "600" }}>
            FAQ: REFUND
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "600" }}>
            How many days do I have to return?
          </Typography>
          <Typography>
            We offer free returns and exchanges within 30 days of your delivery,
            with exceptions as described in our Returns Policy. Certain items
            are designated as final sale and not eligible for returns or
            exchanges. The product page indicates whether an item is a final
            sale item. Hype products should be returned via the online returns
            portal within seven days of the delivery date. The product page
            communicates the seven-day return window during the ordering
            process.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
