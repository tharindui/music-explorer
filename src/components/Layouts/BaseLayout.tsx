import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

import theme from "config/theme";
import Header from "../organisms/Header";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" pb={30} component={Box} mt={12}>
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default BaseLayout;
