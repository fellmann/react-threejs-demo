import {
  Alert,
  Button,
  MantineContext,
  MantineThemeContext,
  Stack,
} from "@mantine/core";
import { Html, useContextBridge } from "@react-three/drei";
import { ReactNode } from "react";

export function Overlay({
  title,
  children,
  href,
}: {
  title: string;
  href?: string;
  children: ReactNode;
}) {
  const MantineBridgeProvider = useContextBridge(
    MantineThemeContext,
    MantineContext
  );
  return (
    <Html>
      <MantineBridgeProvider>
        <Alert title={title}>
          <Stack>
            {children}
            {href && (
              <Button component="a" href={href} target="_blank">
                Learn More
              </Button>
            )}
          </Stack>
        </Alert>
      </MantineBridgeProvider>
    </Html>
  );
}
