import { ReactNode } from 'react';

import './globals.css';

//* The root layout is a Server Component by default and cannot be set to a Client Component
//* A layout is a UI that is shared between multiple pages.
//* On navigation, layouts preserve state, remain interactive, and do not re-render.
//* The root layout is defined at the top level of the app directory and applies to all routes.
//* This layout enables you to modify the initial HTML returned from the server.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      {/* 
        //* <head /> will contain the components returned by the nearest parent
        //* head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
