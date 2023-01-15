import { Box, IconButton } from '@mui/material';
import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
      setValue(newValue);
    };
    return (
      <Box
        sx={{
          my: 5,
        }}
      >
        {/* Heading Section  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SectionTitle
            title="Here are some of"
            colored="our works"
            sx={{
              textAlign: "left",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={{
                "& 	.MuiTabs-indicator": {
                  display: "none",
                },
                "& .Mui-selected": {
                  color: "primary.green",
                  fontWeight: "700",
                },
                "& .MuiButtonBase-root": {
                  textTransform: "capitalize",
                },
              }}
            >
              <Tab label="All" />
              <Tab label="Web Design" />
              <Tab label="Mobile App" />
            </Tabs>
            <Box>
              <IconButton
                sx={{
                  border: `1px solid #959EAD`,
                  mr: 2,
                }}
                onClick={() => setValue(value - 1)}
                disabled={value === 0}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                sx={{
                  border: `1px solid #959EAD`,
                }}
                onClick={() => setValue(value + 1)}
                disabled={value === 2}
              >
                <ArrowBackIcon
                  sx={{
                    transform: "rotate(180deg)",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};

export default OurWorks;