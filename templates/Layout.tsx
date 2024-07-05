import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => (
  <>
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8 h-full">
      {props.children}
    </main>
    <Footer />
  </>
);

export { Layout };
