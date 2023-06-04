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
  background: linear-gradient(aliceblue, 87%, teal);
  .logo {
    color: #0e0c30;
    font-size: 30px;
    font-weight: 700;
    a {
      color: inherit;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    .menu-item {
      color: #0e0c30;
      font-size: 18px;
      font-weight: bold;
      
      cursor: pointer;
      list-style-type: none;
      font-size: 14px;
      padding: 8px 16px;
      border: 1px solid transparent;
      &:hover {
        color: #2d63e2;
        border: 1px solid #2d63e2;
        border-radius: 8px;
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
            <Link href="/about">About Me</Link>
          </li>
          <li className="menu-item">
            <Link href="/auth">회원가입/로그인</Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}
