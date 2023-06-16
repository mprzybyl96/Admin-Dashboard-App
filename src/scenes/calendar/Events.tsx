import { formatDate } from "@fullcalendar/core";
import {
  Box,
  colors,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

interface Props {
  events: [];
}

const Events: React.FC<Props> = ({ events }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      flex="1 1 20%"
      p="15px"
      borderRadius="4px"
      sx={{
        backgroundColor: `${colors.primary[400]}`,
      }}
    >
      <Typography variant="h5">Events</Typography>
      <List>
        {events.map((event: any) => {
          return (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Events;
