import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
import { Link } from "react-router-dom";

const NameUpload = ({ info, setInfo }) => {
  const [play, { stop }] = useSound("../../../Sounds/naamlikhun.mp3", {
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

  // Handle the name change and update the 'info' state
  const handleNameChange = (e) => {
    setInfo({
      ...info,
      name: e.target.value, // Update the 'name' field in 'info'
    });
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
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
        পন্যের নাম লিখুন
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

      {/* Input Field for Product Name */}
      <TextField
        label="পণ্যের নাম লিখুন"
        variant="outlined"
        sx={{ marginBottom: 3, width: '300px' }}
        value={info.name} // Bind the input value to 'info.name'
        onChange={handleNameChange} // Handle input change to update state
      />

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
            marginBottom: 5,
          }}
        >
          <VolumeUp sx={{ marginRight: 1 }} />
          <Typography>শুনুন</Typography>
        </Button>
      </Box>

      <Link to="../quantityupload" style={{ textDecoration: "none" }}>
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
            marginTop: 0,
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

export default NameUpload;
