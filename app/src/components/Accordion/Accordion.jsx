import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function RecipeAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ingredients/Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Chemex 3 Cups</li>
            <li>Grinder Medium</li>
            <li>Coffee Beans 64 grams</li>
            <li>Kettle 4 Oz Water</li>
            <li>Chemex Filter 1 qty</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
