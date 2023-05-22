import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';

interface Props {
  title: string;
  description: string;
  onClick: (id: string) => void;
}

const RecipeReviewCard: React.FC<Props> = ({ title, description, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          onClick={onClick}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {title[0].toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={description}
          subheaderTypographyProps={{
            sx: {
              maxWidth: '250px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
          titleTypographyProps={{
            sx: {
              maxWidth: '250px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default RecipeReviewCard;
