import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [play, { stop }] = useSound("../../Sounds/ponnobikri.mp3", {
    volume: 1,
    soundEnabled: true,
  });

  const handlePlay = () => {
    stop();
    play();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#FDFAD9",
        height: "100vh",
        padding: 0,
        textAlign: "center",
        border: "4px solid #B8001F"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#B8001F",
          color: "#fff",
          padding: "10px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="div">
          কৃষকের হাট
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          marginTop: 3,
          width: "80%",
          maxWidth: 300,
        }}
      >
        <img
          src="../../image/OIP (7).jpeg"
          alt="Market"
          style={{
            width: "100%",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Audio Section */}
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
      <Link to="./imageupload" style={{ textDecoration: "none" }}>
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
            marginTop: 4,
            "&:hover": {
                  backgroundColor: "#C40000",
                },
          }}
        >
          জমা দিন
        </Button>
      </Link>
    </Box>
  );
};

export default AddProduct;
