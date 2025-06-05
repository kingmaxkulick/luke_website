import { Box, Container, Typography, IconButton, Fade, Stack } from '@mui/material'
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/stockedit.mp4" type="video/mp4" />
      </Box>

      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h1" color="primary">
              LUKE PIERCE
            </Typography>
            <Typography variant="h2" color="primary">
              
            </Typography>
            <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
              WE CREATE POOP
            </Typography>
          </Stack>
        </Fade>
      </Container>

      <Box sx={{ position: 'fixed', bottom: 32, display: 'flex', gap: 3 }}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  )
}
