import { useState } from "react";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { IAvatarWithMenuProps } from "./types";

export const AvatarWithMenu = ({ menuItems }: IAvatarWithMenuProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Avatar
        onClick={handleOpenUserMenu}
        sx={{
          cursor: "pointer",
        }}
      >
        V
      </Avatar>
      <Menu
        sx={{
          mt: 5,
        }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
