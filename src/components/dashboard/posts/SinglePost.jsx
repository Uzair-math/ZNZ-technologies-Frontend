import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import theme from "../../../theme";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SinglePost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const iconColors = [
    theme.palette.primary.main,
    theme.palette.hearts.blue,
    theme.palette.hearts.pink,
    theme.palette.hearts.black,
    theme.palette.hearts.red,
    theme.palette.hearts.yellow,
  ];
  const iconColor = iconColors[Math.floor(Math.random() * iconColors.length)];
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const cardWidthControlf = () => {
    const minWidth = 574;
    const maxWidth = 368;
    const width =
      Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

    const cardStyle = {
      width: `${width}px`,
    };
  };
  useEffect(() => {
    cardWidthControlf();
  }, []);

  return (
    <Card
      sx={{
        // ...cardStyle,
        border: "1px solid #F8F8F8",
        boxShadow: " 0px 4px 40px 0px rgba(0, 0, 0, 0.05)",
        borderRadius: "16px",
        margin: 0,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "61px",
              height: "61px",
              bgcolor: theme.palette.primary.main,
            }}
            aria-label="user"
          >
            <Typography variant="postCardTypo">R</Typography>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="postUserTypo">Robert Fin</Typography>}
        subheader="4:31 PM"
      />
      {post === "pic" ? (
        <>
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image="assets/photos/demo.jpg"
            alt="Paella dish"
            sx={{
              backgroundSize: "cover",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </>
      ) : (
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      )}

      <CardActions>
        <IconButton
          aria-label="add to favorites"
          sx={{ color: iconColor }}
          onClick={toggleLike}
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ImageComp src={"assets/photos/share.png"} alt={'share.png'} /> */}
          <ShareIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <IconButton aria-label="share">
          {/* <ImageComp src={"assets/photos/comment.png"} alt={'comment.png'} /> */}
          <ModeCommentOutlinedIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
