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
    <div role="presentation" className="mt-1 ml-2">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
          <meta itemProp="position" content="1" />
          <span itemProp="name">Home</span>
        </Link>

        {links.map((item, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.path}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <meta itemProp="position" content={(index + 2).toString()} />
            <span itemProp="name">{item.name}</span>
          </Link>
        ))}

      {last && (
          <Typography sx={{ color: 'text.primary' }} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <meta itemProp="position" content={(path.length).toString()} />
            <span itemProp="name">{last.name}</span>
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
