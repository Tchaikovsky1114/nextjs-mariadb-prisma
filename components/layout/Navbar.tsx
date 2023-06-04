import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .logo {
    font-size: 30px;
    font-weight: 700;
    color: #000;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    .menu-item {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      cursor: pointer;
      list-style-type: none;
      font-size: 14px;
      &:hover {
        color: #2d63e2;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <div>
        <ul className="menu">
          
          <li className="menu-item">
            <Link href="/busan-7beach">부산7BEACH</Link>
          </li>
          <li className="menu-item">
            <Link href="/">About Me</Link>
          </li>
          <li className="menu-item">
            <Link href="/">회원가입/로그인</Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}
