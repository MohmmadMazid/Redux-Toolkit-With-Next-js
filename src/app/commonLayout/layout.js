"use client";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {pathname !== "/commonLayout/subnavBar" ? (
        <div>
          <h1>This line will be visible all the common route</h1>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Layout;
