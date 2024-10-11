import React, { useState } from "react";
import { Box, Button, Typography,                                                                                                                                                                            Card, CardContent, CardMedia } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
import imageIcon from "../../../image/shutterstock_90945554.jpg"; // Make sure to have a large image icon here
import { Link } from "react-router-dom";

const ImageUpload = () => {
  const [play, { stop }] = useSound("../../../Sounds/ponnerchobi.mp3", {
    volume: 1,
    soundEnabled: true,
  });

  const handlePlay = () => {
    stop();
    play();
  };
  const [playAdd, { stop: stopAdd }] = useSound("../../../Sounds/porobortidhaap.mp3", {
    volume: 1,
    soundEnabled: true,
  });
  const handlePlayAdd = () => {
    stopAdd();
    playAdd();
  };


  const [image, setImage] = useState(null); // State to hold the uploaded image

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the uploaded image in state
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

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
        border: "4px solid #B8001F"

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
          marginTop: 1,
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

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        ছবি যোগ করুন
      </Typography>

      {/* Card for Image Upload */}
      <Card sx={{ maxWidth: 400, marginBottom: 1, padding: 2, textAlign: "center" }}>
        <CardContent>
          <input
            type="file"
            accept="image/*" // Accept only image files
            onChange={handleImageChange} // Handle file selection
            style={{ display: "none" }} // Hide the default input
            id="image-upload" // Assign an ID for the label to target
          />
          <label htmlFor="image-upload">
            <CardMedia
              component="img"
              src={image || imageIcon} // Display uploaded image or icon
              alt="Upload"
              sx={{
                width: "150px", // Set width of the icon
                height: "150px",
                margin: "0 auto", // Center the icon
                cursor: "pointer", // Change cursor to pointer
              }}
            />
          </label>
        </CardContent>
      </Card>

      

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
          onClick={handlePlayAdd}
          sx={{
            backgroundColor: "#808080",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            marginBottom: 2,
          }}
        >
          <VolumeUp sx={{ marginRight: 1 }} />
          <Typography>শুনুন</Typography>
        </Button>
      </Box>
      <Link to="../nameupload" style={{ textDecoration: "none" }}>
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

export default ImageUpload;
