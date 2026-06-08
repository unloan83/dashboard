import React from 'react';

export const metadata = {
  title: 'OpenStock Custom Dashboard',
  description: 'Personalized high-density financial asset tracker matrix.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-zinc-100 dark">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen antialiased bg-black text-zinc-200">
        {children}
      </body>
    </html>
  );
}
