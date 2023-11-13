"use client";
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import {VscError} from 'react-icons/vsc'
import logo from '../../../public/img/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Header() {

  const url = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <div className="head">
        <div className="logo">
          <Link href="/">
            <Image src={logo} width={200}/>
          </Link>
        </div>
        <nav className={`menuMobile ${menuAberto ? 'accent' : ''}`}>
          <div onClick={toggleMenu}>{menuAberto? <VscError size={38}/> : <HiMenu size={38}/> }</div>
        </nav>
        <ul className={`menuDesktop ${menuAberto ? 'visible' : ''}`}>
          <li>
            <Link href="/faq">
              <p>FAQ</p>
            </Link>
          </li>
          <li>
            <Link href="/alunos">
              <p>Alunos</p>
            </Link>
          </li>
          <li>
            <Link href="/coberturas">
              <p>Coberturas</p>
            </Link>
          </li>
          
        </ul>
        <div className='invisible'>
          <Image src={""} width={200} />
        </div>
      </div>
      <div className={`menu-overlay ${menuAberto ? 'visible' : ''}`} onClick={toggleMenu}></div>
      <style jsx>{`
        header {
          width: 100%;
          margin: 0 auto;
          position: ${url == '/form-cliente' || url == '/form-bike' ?  'static' : 'absolute'};
        }

        .head {
          width: 100%;
          padding: 0px 190px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          top: 0;
          padding-top: 5rem;
        }

        .logo img {
          width: 170px;
          padding: 0.5rem;
          cursor: pointer;
          transition: filter 300ms;
        }

        .logo.invisible {
          visibility: hidden;
        }

        .menuMobile {
          display: none;
        }

        ul {
          width: 300px;
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }

        li,
        li p {
          list-style: none;
          font-size: 1.5rem;
          color: #000;
          font-weight: 500;
          text-decoration: none;
          z-index: 2;
        }

        .coberturas {
          border: 1px solid #000;
          border-radius: 10px;
          padding: 0 10px;
          cursor: pointer;
        }

        .faq {
          cursor: pointer;
        }



        @media (max-width: 1199px) {
          .logo img {
            width: 160px;
          }

          .coberturas li {
            font-size: 1rem;
          }
          .faq {
            font-size: 1rem;
          }
          .alunos a {
            font-size: 1rem;
          }

          ul {
            width: 282px;
          }
        }

        @media (max-width: 991px) {
          .menuMobile {
            display: block;
          }

          .menuMobile.accent {
            color: #009ee2;
          }

          .logo img {
            width: 150px;
          }

          .coberturas li {
            font-size: 0.9rem;
          }
          .faq {
            font-size: 0.9rem;
          }
          .alunos a {
            font-size: 0.9rem;
          }

          ul {
            flex-direction: column;
            display: none;
          }

          .logo.invisible {
            display: none;
          }
        }

        @media (max-width: 783px) {
          .menuMobile {
            display: block;
          }

          .logo img {
            width: 150px;
          }

          .coberturas li {
            font-size: 0.9rem;
          }
          .faq {
            font-size: 0.9rem;
          }
          .alunos p {
            font-size: 0.9rem;
          }

          ul {
            flex-direction: column;
            display: none;
          }

          .logo.invisible {
            display: none;
          }

          .head {
            width: 100%;
            padding: 0px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            top: 0;
          }
        }

        @media (max-width: 575px) {
          .menuMobile {
            display: block;
          }

          .logo img {
            width: 150px;
          }

          .coberturas li {
            font-size: 0.9rem;
          }
          .faq {
            font-size: 0.9rem;
          }
          .alunos a {
            font-size: 0.9rem;
          }

          ul {
            flex-direction: column;
            display: none;
          }

          .logo.invisible {
            display: none;
          }

          .head {
            width: 100%;
            padding: 0px 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            top: 0;
          }
        }

        .visible {
          display: flex;
        }

        .menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 30%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .visible {
          display: flex;
        }
      `}</style>
    </header>
  );
};


