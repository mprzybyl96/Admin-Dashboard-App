import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import useGetConsts from "../hooks/constsHook";

export const TitleComponent = ({ name }: { name: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { title, subtitle } = useGetConsts(name);

  return (
    <div>
      <Box>
        <Typography variant="h2" color={colors.grey[100]}>
          {title?.toUpperCase()}
        </Typography>
        <Typography
          sx={{ mt: "10px", mb: "10px" }}
          variant="h5"
          color={colors.greenAccent[400]}
        >
          {subtitle}
        </Typography>
      </Box>
    </div>
  );
};
