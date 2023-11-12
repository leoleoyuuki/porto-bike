"use client";
import Image from 'next/image';

import Image from 'next/image';
import PortoSeguroBrand from '../../../public/img/logo.svg';

export default function Brand() {
  return <div onClick={() => window.location.href = '/'}><Image className="brand" src={PortoSeguroBrand} /></div>
}
