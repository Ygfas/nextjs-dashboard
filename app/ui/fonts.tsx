import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Helps with performance
});

export const lusitana = Lusitana({
  weight: ["400", "700"], // You must specify weights for non-variable fonts
  subsets: ["latin"],
  display: "swap",
});
