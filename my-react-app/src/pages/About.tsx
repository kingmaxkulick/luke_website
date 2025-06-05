import { Box, Container, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <Box
      ref={ref}
      sx={{
        height: '100vh',
        width: '100%',
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
          <Box
            sx={{
              flex: 1,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#ff3d00',
                fontSize: { xs: '4rem', md: '8rem' },
                lineHeight: 1,
                fontWeight: 900,
                mb: 4,
              }}
            >
              Who we
              <br />
              ARE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 3,
                maxWidth: '600px',
              }}
            >
              Think full service production company meets creative marketing agency. 
              We understand social and know how to make content for fans.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 4,
                maxWidth: '600px',
              }}
            >
              Headquartered in NYC but operating on a global scale, we have skills 
              and infrastructure that modern brands need to support successful social platforms.
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#ff3d00',
                },
              }}
            >
              Read More →
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <Box
              component="img"
              src="/team-photo.jpg"
              alt="Our Team"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
