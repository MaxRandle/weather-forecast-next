"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="bg-base-100 text-base-900 dark:bg-base-900 dark:text-base-100">
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
