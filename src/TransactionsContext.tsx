import React, { createContext, ReactNode, useState, useEffect } from "react";

interface TransactionProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProps) {
  return <div>{children}</div>;
}
