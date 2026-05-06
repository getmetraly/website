import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({
  children,
  showFooter = true,
  footerClassName,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
  footerClassName?: string;
}) {
  return (
    <>
      <SiteNav />
      <main id="main-content">{children}</main>
      {showFooter ? <SiteFooter className={footerClassName} /> : null}
    </>
  );
}
