import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Service = ({image}) => {
    return (
      //   <Card sx={{ maxWidth: 345 }}>
      //     <CardMedia
      //        sx={{ height: 140, width: 140 , mx: "auto"}}
      //       image={image}
      //       title="green iguana"

      //     />
      //     <CardContent sx={{
      //         textAlign: "center"
      //     }}>
      //       <Typography gutterBottom variant="h5" component="div" sx={{
      //         fontWeight: "500"
      //       }}>
      //         Web & Mobile Design
      //       </Typography>
      //       <Typography variant="body2" color="text.secondary">
      //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at voluptas iure optio deleniti sunt perspiciatis aperiam debitis quae officiis?
      //       </Typography>
      //     </CardContent>

      //   </Card>
      <Card sx={{ maxWidth: 345, boxShadow: "none", pt: 2, mx: "auto", "&:hover":{
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",

      }  }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
          sx={{
            width: "auto",
            mx: "auto"
          }}
        />
        <CardContent sx={{
            textAlign :"center"
        }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "500",
            }}
          >
            Web & Mobile Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum quidem magni itaque natus illo labore. Adipisci repudiandae fugiat eaque.
          </Typography>
        </CardContent>
        
      </Card>
    );
};

export default Service;