import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({title, colored, sx}) => {
    return (
      <>
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: "700",
            textAlign: "center",
            ...sx
          }}
        >
          {title}{" "}
          {colored && (
            <span
              style={{
                color: "#7AB259",
              }}
            >
              {colored}
            </span>
          )}{" "}
        </Typography>
      </>
    );
};

export default SectionTitle;