import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="mt-4">
      <div className="flex items-center justify-center">
        <Image src="/logo.webp" alt="Logo" width={200} height={100} />
      </div>
      <div className="mt-4">
        <p className="text-center">COPYRIGHT © Creative Beauty BISTRÔ - TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
