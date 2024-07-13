"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

export default function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ProgressBar
        height="5px"
        color="#ff4719"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </QueryClientProvider>
  );
}
