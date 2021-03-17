import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Button = {
  baseStyle: {
    fontWeight: 600,
    width: "100%",
    borderRadius: "0.8rem",
    lineHeight: "3rem",
  },
  sizes: {
    md: {
      fontSize: ["1.75rem", "2rem"],
      padding: "2.5rem 3.2rem",
    },
  },
  variants: {
    solid: {
      bg: "blue.light",
      color: "white",
      boxShadow: "0px 16px 28px -4px rgba(113, 87, 217, 0.24)",
      "&:hover": {
        bg: "blue.medium",
        boxShadow: "0px 16px 32px -4px rgba(113, 87, 217, 0.48)",
      },
      "&:disabled": {
        boxShadow: "none",
        bg: "gray.medium",
      },
      "&.chakra-button:hover[disabled]": {
        boxShadow: "none",
        bg: "gray.medium",
      },
    },
    error: {
      bg: "error",
      color: "white",
      boxShadow: "0px 16px 28px -4px rgba(245, 86, 86, 0.24)",
      "&:hover": {
        bg: "error",
        boxShadow: "0px 16px 32px -4px rgba(245, 86, 86, 0.48)",
      },
      "&:disabled": {
        boxShadow: "none",
        bg: "gray.medium",
      },
      "&.chakra-button:hover[disabled]": {
        boxShadow: "none",
        bg: "gray.medium",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

const Heading = {
  baseStyle: {
    fontFamily: "'Montserrat', sans-serif",
  },
};

const Link = {
  baseStyle: {
    "&:hover": {
      textDecoration: "none",
    },
  },
};

export default extendTheme({
  breakpoints: createBreakpoints({
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
  }),
  components: {
    Button,
    Heading,
    Link,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "62.5%",
        lineHeight: "tall",
        backgroundColor: props.theme.colors.gray.light,
        overflowX: "hidden",
        color: "black",
      },
      "*, *::before, &::after": {
        boxSizing: "border-box",
      },
      "span.chakra-alert__icon": {
        width: "1.5rem",
        height: "2.4rem",
      },
      "div.chakra-alert__title, div.chakra-alert__desc": {
        fontSize: "1.5rem",
        lineHeight: "2.5rem",
      },
    }),
  },
  colors: {
    background: "#ecf1f8",
    black: "#34334B",
    primary: "#FF3874",
    gray: {
      dark: "#949494",
      medium: "#D5D5D5",
      light: "#F6F7FB",
    },
    blue: {
      light: "#4580E6",
      medium: "#106BA3",
    },
    green: {
      light: "#9BBF30",
    },
    success: "#15B371",
    error: "#F55656",
    alert: "#F29D49",
  },
});
