import React, { useState } from "react";
import { Box, Grid, Button, Avatar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { VolumeUp } from "@mui/icons-material";
import useSound from "use-sound";
function Card({ item, id, deleteObject }) {
  const [play, { stop }] = useSound("../../Sounds/consent.mp3", {
    volume: 1,
    soundEnabled: true,
  });

  const handlePlay = () => {
    stop();
    play();
  };
  const [buttonText, setButtonText] = useState(""); // Initial button text

  const handleDoneClick = () => {
    setButtonText("অর্ডার সম্পুর্ণ হয়েছে"); // Change text to 'Completed' when clicked
    // Add any additional logic for when the done button is clicked
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Audio Section */}
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Sound Icon */}
      </Box>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderRadius: 2,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
          p={1}
          ml={1}
          mt={1}
          mb={2}
        >
          <Grid item xs={12}>
            <h2 style={{ margin: 0, textAlign: "center" }}>
              {id + 1}. {item.name}
            </h2>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
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
            </Button>{" "}
            <p style={{ margin: 0 }}>
              আপনার কাছ থেকে ২ কেজি {item.name} কিনতে ইচ্ছুক
            </p>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src="./potato.webp"
              sx={{ width: 80, height: 80 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 5,
            }}
            mt={2}
          >
            <Button
              variant="contained"
              sx={{ background: "green" }}
              onClick={handleDoneClick}
            >
              {buttonText === "" ? <DoneIcon /> : buttonText}
            </Button>

            <Button
              variant="contained"
              sx={{ background: "red" }}
              onClick={() => {
                deleteObject("myObjectsArray", id);
                window.location.reload();
              }}
            >
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Card;
