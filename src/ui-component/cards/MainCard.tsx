import { forwardRef, ReactNode, Ref } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, SxProps } from '@mui/material';


const headerSX: SxProps = {
  '& .MuiCardHeader-action': { mr: 0 }
};

const MainCard = forwardRef(
  (
    {
      border = true,
      elevation = 0,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    }: any,
    ref: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        elevation={elevation}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.primary.main + 25,
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
          },
          ...sx
        }}
      >
        {title && (
          <>
            <CardHeader sx={headerSX} title={darkTitle ? <Typography variant="h3">{title}</Typography> : (title as string)} action={secondary} />
            <Divider />
          </>
        )}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default MainCard;
