import { StyledEngineProvider } from "@mui/material/styles";
import { EvmProvider, QueryProvider, SolanaProvider, ThemeProvider } from "@web/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { themes } from "./entity/Theme";
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
      <StyledEngineProvider injectFirst>
        <ThemeProvider themes={themes} cssVariableTarget={document.body}>
          <QueryProvider>
            <EvmProvider>
              <SolanaProvider>
                <NavProvider />
              </SolanaProvider>
            </EvmProvider>
          </QueryProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  ));
}
