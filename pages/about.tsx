import {Typography} from '@mui/material'
import Container from '@mui/material/Container'
import type {NextPage} from 'next'
import {useRouter} from 'next/router'

const About: NextPage = () => {
  const router = useRouter()
  return (
    <Container maxWidth="lg" sx={{mb: 4, mt: 3}}>
      {/* <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
        <IconButton color="primary" onClick={router.back}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography variant="h5" sx={{fontWeight: 600, ml: 1}}>
          About us
        </Typography>
      </Box> */}
      <Typography
        variant="h6"
        paragraph
        align="center"
        sx={{fontWeight: 'bold'}}
      >
        About Us
      </Typography>
      <Typography paragraph variant="h6" align="justify">
        We believe in creativity and freedom. They set the trends. They shape
        the industry. As we went online and expanded into more learning areas,
        we stayed true to only working with the best. But we didn`t stop there.
        We want our product reflects how we perceived the world and surrounding.
        This is our main signature, as simple as that. Customized logo designed
        for the exact purpose to symbolize our identity and ideals.
      </Typography>

      {/* <Box sx={{textAlign: 'center', mt: 8}}>
        <Fab color="primary" onClick={router.back}>
          <Icon>arrow_back</Icon>
        </Fab>
      </Box> */}
    </Container>
  )
}

export default About
