import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";

export function CardColab(props) {
  return (
    <Card
      sx={{
        boxShadow: "0 0 2.2rem rgba(25, 0, 58, 0.15)",
        padding: "3.5rem 1rem",
        borderRadius: "0.6rem",
        color: "#a59dad",
        cursor: "pointer",
        transition: "0.3s",
        backgroundColor: "#414253",
        maxWidth: 206.8,
        maxHeight: 400,
        marginRight: "2rem",
        marginTop: "1rem",
      }}
    >
      <CardActionArea>
        <Stack
          sx={{
            width: "8rem",
            height: "8rem",
            backgroundColor: "#4d61fc",
            padding: "0.5rem",
            borderRadius: "50%",
            margin: "0 auto 2rem auto",
          }}
        >
          <CardMedia
            sx={{ width: "100%", borderRadius: "50%", height: "100%" }}
            component="img"
            height="140"
            src={props.image}
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Stack>
        <CardContent sx={{ minWidth: "10rem", maxWidth: "10rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "inter" }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 300,
              textTransform: "uppercase",
              margin: "0.5rem 0 2rem 0",
              letterSpacing: "2px",
              color: "#a59dad",
              fontFamily: "inter",
            }}
          >
            {props.cargo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
