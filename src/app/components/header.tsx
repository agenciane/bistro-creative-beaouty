import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={300} height={100} />
        </Link>
        <div className="w-[300px] text-center">BISTRÔ</div>
        <div className="w-[300px] text-center">
          <Link href="/menu">MENU</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
