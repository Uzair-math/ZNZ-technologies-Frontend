import { Link, Typography } from "@mui/material";
import React from "react";
const Links = ({ outer, href, label }) => {
  const routerLinkStyles = {};
  return (
    <React.Fragment>
      {outer ? (
        <a href={href} style={{ color: "black" }}>
          {label}
        </a>
      ) : (
        <Link href={href}>
          <Typography variant="links">{label}</Typography>
        </Link>
      )}
    </React.Fragment>
  );
};

export default Links;
