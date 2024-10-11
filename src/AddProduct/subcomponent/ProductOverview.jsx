import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addObjectToLocalStorage } from "../../Database";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";

function ProductOverview({ info, setInfo }) {
    const [play, { stop }] = useSound("../../../Sounds/productoverview.mp3", {
        volume: 1,
        soundEnabled: true,
      });
    
      const handlePlay = () => {
        stop();
        play();
      };
  console.log(info);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#FDFAD9",
        padding: 2,
        textAlign: "center",
        border: "4px solid #B8001F",

      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#B8001F",
          color: "#fff",
          padding: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="div">
          কৃষকের হাট
        </Typography>
      </Box>
      
      {/* Audio Section */}
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
        পণ্যের বিবরনগুলো পুনরায় দেখুন
      </Typography>
        {/* Sound Icon */}
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
        </Button>
      </Box>
      {/* Audio Section */}
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, margin: "5px" }}>
          <CardMedia
            component="img"
            height="140"
            image="../../../image/OIP (7).jpeg"
            alt={info.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {info.quantity}
            </Typography>
            <Typography variant="h6" color="text.primary">
              Price: ${info.price}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Link to="../productlist" style={{ textDecoration: "none" }}>
        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#B8001F",
            color: "#fff",
            borderRadius: "50%",
            padding: "40px 32px",
            fontSize: "18px",
            marginBottom: 1,
            "&:hover": {
                  backgroundColor: "#C40000",
                },
          }}
          onClick={()=>{
            addObjectToLocalStorage(info)
          }}
        >
          জমা দিন
        </Button>
      </Link>

      <Button
        variant="contained"
        color="primary"
        sx={{
            backgroundColor: "#117554",
            color: "#fff",
            borderRadius: "50%",
            padding: "40px 32px",
            fontSize: "18px",
            marginTop: 1,
            "&:hover": {
              backgroundColor: "#557C56",
            },
          }}
        onClick={() => {
          window.location.href = "/";
        }} // Change '/' to your homepage URL if needed
      >
        হোমে ফিরে যান
      </Button>
    </Box>
  );
}

export default ProductOverview;
