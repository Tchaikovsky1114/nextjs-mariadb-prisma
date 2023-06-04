import React from 'react'
import classes from './layout.module.css'
import Navbar from './layout/Navbar'
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <div className={classes.container}>
        <Navbar />
        {children}
    </div>
    </>
  )
}
