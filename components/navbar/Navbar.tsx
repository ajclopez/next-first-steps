import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { key: 'about_id', path: '/about', text: 'About' },
  { key: 'contact_id', path: '/contact', text: 'Contact' },
  { key: 'pricing_id', path: '/pricing', text: 'Pricing' },
];

export const Navbar = () => {
  console.log('test');

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"></HomeIcon>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.key} path={item.path} text={item.text} />
      ))}
    </nav>
  );
};
