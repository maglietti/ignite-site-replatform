/**
 * Navbar Theme Override
 * Replaces default Docusaurus navbar with custom implementation
 */

import React from 'react';
import CustomNavbar from '@site/src/components/CustomNavbar';

export default function Navbar(): JSX.Element {
  return <CustomNavbar />;
}
