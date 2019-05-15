import React, { Suspense } from 'react';

import Breakpoint, { BreakpointProvider } from 'react-socks';
// components

const MobileNav = React.lazy(() =>
  import('./MobileNav' /* webpackChunkName: "mobile-nav" */),
);
const AppNav = React.lazy(() =>
  import('./AppNav' /* webpackChunkName: "app-nav" */),
);

const Nav = ({ items = [] }) => (
  <Suspense>
    <BreakpointProvider>
      <div>
        <Breakpoint small down>
          <MobileNav items={items} />
        </Breakpoint>
        <Breakpoint medium up>
          <AppNav items={items} />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  </Suspense>
);
export default Nav;
