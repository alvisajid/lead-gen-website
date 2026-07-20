import { colors } from "./colors";
import { fonts } from "./typography";

export type Theme = {
  name: string;
  colors: typeof colors;
  fonts: typeof fonts;
  // optional places for tokens (spacing, radii) — extend as needed
};

export const defaultTheme: Theme = {
  name: "clinic-default",
  colors,
  fonts,
};

export default defaultTheme;
