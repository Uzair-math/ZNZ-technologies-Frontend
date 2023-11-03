import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
 
 
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          borderRadius: "30px",
          gap: "16px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // Add your global styles for InputBase components here
          backgroundColor: "#FFF", // Set background color
          borderRadius: "30px", // Set border radius
          padding: "16px 24px", // Set padding
          border: "1px solid #F1F1F1",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          "&.Mui-focused": {
            borderColor: "#14B8A6", // Set the border color when focused
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline
          color: "#14B8A6", // Set link color
          position: "relative", // Required for absolute positioning of the underline
          cursor: "pointer",
          "&:before": {
            content: "''",
            position: "absolute",
            width: "100%", // Extend the underline across the link width
            borderBottom: "1.5px solid #14B8A6", // Customize the underline style
            bottom: -1, // Adjust the distance between text and underline
          },
        },
      },
    },
    // masonary style 
    MuiMasonry: {
      root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Set the initial number of columns
        gap: '16px', // Adjust the gap as needed
        padding: '16px', // Add padding as needed

        '@media (min-width: 600px)': {
          gridTemplateColumns: 'repeat(3, 1fr)', // Adjust for screens wider than 600px
        },

        '@media (min-width: 960px)': {
          gridTemplateColumns: 'repeat(4, 1fr)', // Adjust for screens wider than 960px
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#F9F9F9", // Set the background color for the body
    },
    primary: {
      main: "#14B8A6",
    },
    secondary: {
      main: "#FFF",
    },
    blackColor: {
      main: "#333333",
    },
    hearts:{
      blue:"#0EA6E9",
      pink:"#FF53BA",
      red:"#FF0000",
      yellow:"#FFCA41",
      black:"#000"
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#FF335C",
    },
  },
  typography: { 
    fontFamily: "Open Sans, sans-serif",

    h1: {
      fontSize: "40px",
      fontWeight: 700,
      fontStyle: "normal",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      color: "#333333",
      "@media (max-width:600px)": {
        fontSize: ".75rem",
      },
    },
    postCardTypo: {
      fontSize: "24px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "normal",
      color: "#FFFFFF",
      "@media (max-width:600px)": {
        fontSize: ".75rem",
      },
    },
    sub24: {
      fontSize: "24px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "43.2px",
      "@media (max-width:600px)": {
        fontSize: ".75rem",
      },
    },
    h3: {
      textTransform:"none",
      fontSize: "20px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".75rem",
      },
    },
    button20: {
      textTransform:"none",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "36px",
      "@media (max-width:600px)": {
        fontSize: ".75rem",
      },
    },
    h4: {
      color: "#868686",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    postUserTypo: {
      color: "#333333",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    h4Black: {
      color: "#868686",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    h5: {
      color: "#868686",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28.8px",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
    },
    storiesTitle: {
      color: " #868686",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: " normal",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
    },
    postSubHeader: {
      color: " #CACACA",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: " normal",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
    },

    h5ButtonTypo: {
      color: "#4B4B4B",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "normal",
      fontStyle: "normal",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
    },
    h5Black: {
      fontSize: "16px",
      color: "#333",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "36px",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
    },
    h6: {
      color: "#D4D4D4",
      fontSize: "14px",
      fontWeight: 700,
      fontStyle: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    h6Grey: {
      color: "#747474",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    addStoryTypo: {
      color: "#868686",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
    links: {
      color: "#14B8A6",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: ".25rem",
      },
    },
  },
  spacing: [0, 2, 5, 6.38, 8, 10, 12, 14, 15, 16, 18, 20, 24, 40, 100],
  borders: {
    primaryBorder: "1px solid #F1F1F1",
  },
});

export default theme;
