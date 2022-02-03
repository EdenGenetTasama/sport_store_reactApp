import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PantCard = ({itemInPantCards}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {itemInPantCards.clothingGender.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={itemInPantCards.clothingCompany}
        subheader={itemInPantCards.clothingModel}
      />
      <CardMedia
        component="img"
        height="194"
        image={itemInPantCards.linkToClothing}
        alt="Paella dish"
      />
      <CardContent>
        Price: {itemInPantCards.clothingPrice}$
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{itemInPantCards.clothingType}</Typography>
          <Typography paragraph>
          About shoe : Lorem, ipsum. Omnis, ad? Ad, sunt?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PantCard;

// {
//   /* <h2>{itemInPantCards.clothingType}</h2>
//       <p>
//         {itemInPantCards.clothingCompany} , {itemInPantCards.clothingModel} , {itemInPantCards.clothingPrice}
//       </p>
//       <img src={itemInPantCards.linkToClothing} className="imageOfCard" /> */
// }
