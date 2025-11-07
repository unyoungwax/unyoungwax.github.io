import { EvmProvider, QueryProvider, SolanaProvider } from "@web/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavProvider } from "./NavProvider";

import "./main.scss";

main();

function main() {
  const container = document.getElementById("root");

  if (container == null) {
    return;
  }

  const root = createRoot(container);

  root.render((
    <StrictMode>
      <QueryProvider>
        <EvmProvider>
          <SolanaProvider>
            <NavProvider />
          </SolanaProvider>
        </EvmProvider>
      </QueryProvider>
    </StrictMode>
  ));
}
