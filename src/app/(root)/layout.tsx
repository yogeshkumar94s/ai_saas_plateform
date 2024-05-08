import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <div className='root-container '></div>
      <div className='wrapper'>{children}</div>
    </main>
  );
};

export default Layout;
