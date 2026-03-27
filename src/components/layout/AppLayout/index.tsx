import { useState, type ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { MobileHeader } from "../MobileHeader";
import { MobileDrawer } from "../MobileDrawer";
import { ContentArea, Layout, Main, MobileTop, SidebarArea } from "./styles";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <Layout>
      <SidebarArea>
        <Sidebar />
      </SidebarArea>

      <ContentArea>
        <MobileTop>
          <MobileHeader onOpenMenu={openDrawer} />
        </MobileTop>

        <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        <Main>{children}</Main>
      </ContentArea>
    </Layout>
  );
}
