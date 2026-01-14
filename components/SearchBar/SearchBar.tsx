// @flow
import { Menu, Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import * as React from "react";

const SearchBar = () => {
  return (
    <div
      className={"w-30% h-20 bg-[#dbe3eb] rounded-[20vw] mt-2 text-center pt-4"}
    >
      <TextField
        id="searchField"
        className={"w-100"}
        variant="standard"
        InputProps={{
          endAdornment: (
            <IconButton>
              <Search />
            </IconButton>
          ),
          startAdornment: (
            <IconButton>
              <Menu />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};
export default SearchBar;
