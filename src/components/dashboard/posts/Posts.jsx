import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Box, Container, Grid } from "@mui/material";
import { Masonry } from "@mui/lab";

const Posts = () => {
  const breakpointColumnsObj = {
    default: 3, // The number of columns for screens wider than 1024px
    1024: 2, // The number of columns for screens between 1024px and 768px
    768: 1, // The number of columns for screens below 768px
  };

  return (
    <React.Fragment>
      <Box>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, "pic", 4, 4, 4, "pic"].map((post, index) => (
            <div className="my-masonry-grid_column">
              <SinglePost post={post} />
            </div>
          ))}
        </Masonry>
      </Box>
    </React.Fragment>
  );
};

export default Posts;
