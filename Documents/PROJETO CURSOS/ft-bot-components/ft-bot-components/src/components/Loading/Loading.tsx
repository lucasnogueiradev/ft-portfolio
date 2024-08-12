import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonLogin() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton
        animation="wave"
        width={90}
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton variant="rounded" width="100%" height={200} />
      <Skeleton
        animation="wave"
        width="100%"
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton
        animation="wave"
        width="100%"
        height={40}
        sx={{ fontSize: "7rem", margin: "auto", display: "flex" }}
      />
      <Skeleton variant="rounded" width="100%" height={90} />
    </Box>
  );
}
