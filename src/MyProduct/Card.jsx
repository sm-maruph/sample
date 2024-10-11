import React from 'react';
import { Box, Typography, Grid, CardMedia, Button } from '@mui/material';
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
const Card = ({ item }) => {
  const [play, { stop }] = useSound("../../Sounds/despo.mp3", {
    volume: 1,
    soundEnabled: true,
  });

  const handlePlay = () => {
    stop();
    play();
  };



  return (
    <Box sx={{ maxWidth: 400, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image='/potato.webp'
        alt='Alu'
        sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />

      {/* Product Details */}
      <Box p={2}>
        <Grid container spacing={1}>
        <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>পণ্যের নাম:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{item.name}</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>প্রতি কেজি দাম:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{item.price}  ট</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>বিক্রিত পণ্য:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{2}  কেজি</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>অবশিষ্ট পণ্য:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{item.quantity - 2} কেজি</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>মোট পণ্য:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{item.quantity} কেজি</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <strong>মোত আয়:</strong>  
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                <span>{item.price * 2}  =  ট</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Button
              onClick={handlePlay}
              sx={{
                backgroundColor: "#808080",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "20px",
                marginBottom: 1,
              }}
            >
              <VolumeUp sx={{ marginRight: 1 }} />
              <Typography>শুনুন</Typography>
            </Button>{" "}      </Box>
    </Box>
  );
};

export default Card;
