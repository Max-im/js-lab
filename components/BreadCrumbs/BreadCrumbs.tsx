import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function BreadCrumbs({ path }: {path: {name: string, path: string}[]}) {
  const last = path[path.length - 1];
  const links = path.slice(0, path.length - 1);
    
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>

        {links.map((item, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.path}
          >
            {item.name}
          </Link>
        ))}

      {last &&  <Typography sx={{ color: 'text.primary' }}>{last.name}</Typography>}
      </Breadcrumbs>
    </div>
  );
}
