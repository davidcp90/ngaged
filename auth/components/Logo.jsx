import React from 'react';
import Image from 'next/image';
import logo from '../public/logo/cover.png';
const Logo = ({ testId }) => (
  <figure className="" title="NGaged" data-testid={testId}>
    <Image src={logo} alt="Ngaged work" />
  </figure>
);

export default Logo;
