import { Divider, List, Typography } from '@mui/material';
import React from 'react';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

import { useTheme } from '@mui/material/styles';


interface NavGroupProps {
  item: {
    title?: string;
    caption?: string;
    children?: {
      id: string;
      type: string;
      // Add more specific types here as needed
    }[];
  };
}

const NavGroup: React.FC<any> = ({ item }) => {
  const theme = useTheme();

  const items = item.children?.map((menu:any) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant="caption" sx={{ ...theme.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" sx={{ ...theme.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
