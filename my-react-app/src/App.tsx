import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './pages/Home'
import About from './pages/About'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#98FB98',
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontStyle: 'italic',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    subtitle1: {
      fontSize: '1.2rem',
      letterSpacing: '0.2em',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#555',
            },
          },
        }}
      >
        <Box
          sx={{
            height: '100vh',
            position: 'relative',
          }}
        >
          <Home />
        </Box>
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          <About />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
