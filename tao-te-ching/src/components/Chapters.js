import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { numChapters, taoTeChing } from "../logic/tao-te-ching";

export default function Chapters() {
  const [value, setValue] = React.useState("ch_1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Console shows up in inspector
    console.log("Value is now: " + newValue);
    console.log(taoTeChing[value]);
  };

  return (
    <Box sx={{ maxWidth: 1080, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {numChapters.map((value, index) => (
          <Tab
            label={`Ch. ${index + 1}`}
            key={index + 1}
            value={`ch_${index + 1}`}
          />
        ))}
      </Tabs>
      <Typography variant="h5" color="darkslategrey">
        {taoTeChing[value].split("\n").map((item) => (
          <span>
            <br />
            {item}
            <br />
          </span>
        ))}
      </Typography>
    </Box>
  );
}

//{this.props.section.text.split(“\n”).map(function(item) {
// return (
//     <span>
//       {item}
//       <br/>
//     </span>
//   )
// })}
