import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      <SiteNav />
      <main id="main-content">{children}</main>
      {showFooter ? <SiteFooter /> : null}
    </>
  );
}
