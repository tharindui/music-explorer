import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
type itemProps = {
  title: string;
  imageUrl: string;
  collectionName: string;
  artistName: string;
  type: string;
};

export default function SearchItem(item: itemProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      component={Box}
      minHeight={400}
    >
      <CardActionArea>
        <Box position="relative" height={200}>
          <Image
            alt="ss"
            fill
            style={{ objectFit: "contain" }}
            src={item.imageUrl}
          ></Image>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="caption" component="div">
            Type : {item.type}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
            Artist : {item.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Collection Name : {item.collectionName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
