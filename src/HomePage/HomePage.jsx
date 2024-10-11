import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add"; // Import Add Icon
import ListIcon from "@mui/icons-material/List"; // Import List Icon
import { Link } from "react-router-dom";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
import HearingIcon from "@mui/icons-material/Hearing"; // Import Hearing Icon
const HomePage = () => {
  const [play, { stop }] = useSound("../../Sounds/পন্যের_তালিকা_দেখুন.mp3", {
    volume: 1,
    soundEnabled: true,
  });
  const handlePlay = () => {
    stop();
    play();
  };
  const [playAdd, { stop: stopAdd }] = useSound("../../Sounds/notun_ponno_add_korun.mp3", {
    volume: 1,
    soundEnabled: true,
  });
  const handlePlayAdd = () => {
    stopAdd();
    playAdd();
  };

  const [playList, { stop: stopList }] = useSound("../../Sounds/ponner_biboron.mp3", {
    volume: 1,
    soundEnabled: true,
  });
  const handlePlayList = () => {
    stopList();
    playList();
  };


  return (
    <Box
      sx={{
        backgroundColor: "#FDFAD9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid #B8001F",

      }}
      
    >
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "#E60000",
            color: "#fff",
            padding: "10px 0",
            borderRadius: "10px 10px 0 0",
            marginBottom: "20px",
            fontWeight: "bold",
            display: "flex", // Use flexbox to align items
            alignItems: "center", // Center the icon vertically
            justifyContent: "center", // Center the content horizontally
          }}
        >
          <HomeIcon sx={{ marginRight: 1 }} /> {/* Icon with margin */}
          কৃষকের হাট
        </Typography>
        
        {/* Button Section */}
        <Box sx={{ marginBottom: "15px" }}>
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

          <Link to="/product-list" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#B8001F",
                color: "#fff",
                fontSize: "16px",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#C40000",
                },
              }}
              startIcon={<ListIcon />}
            >
              আমার পণ্যের তালিকা দেখুন
            </Button>
          </Link>
        </Box>

        <Box sx={{ marginBottom: "15px" }}>
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
              marginBottom: 1,
            }}
          >
            <VolumeUp sx={{ marginRight: 1 }} />
            <Typography>শুনুন</Typography>
          </Button>
        </Box>

          <Link to="/add-product" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#117554",
                color: "#fff",
                fontSize: "16px",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#557C56",
                },
              }}
              startIcon={<AddIcon />}
            >
              আপনার পণ্য যোগ করুন
            </Button>
          </Link>
        </Box>

        <Box>
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
            onClick={handlePlayList}
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
          <Link to="/order-list" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#FFFF00",
                color: "#000",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#FFEB00",
                },
              }}
              startIcon={<HomeIcon />}
            >
              আমার অর্ডার তালিকা
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
