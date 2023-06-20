import { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';
//* The root layout is a Server Component by default and cannot be set to a Client Component
//* A layout is a UI that is shared between multiple pages.
//* On navigation, layouts preserve state, remain interactive, and do not re-render.
//* The root layout is defined at the top level of the app directory and applies to all routes.
//* This layout enables you to modify the initial HTML returned from the server.
//* <head /> will contain the components returned by the nearest parent
//* head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
