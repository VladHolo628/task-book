import { Card, Typography } from "@mui/material";
import { IWidgetWrapperProps } from "./types";

export const WidgetWrapper = ({
  children,
  widgetTitle,
}: IWidgetWrapperProps) => {
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: 2,
        width: "100%",
      }}
    >
      <Typography marginBottom={3} color={"primary"} variant="h6">
        {widgetTitle}
      </Typography>
      {children}
    </Card>
  );
};
