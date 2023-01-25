import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import { FC } from 'react'

type Props = {
  toggleColorMode(): void
  children: React.ReactNode
}

export const Themer: FC<Props> = (props) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        flexDirection: 'column',
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={props.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      {props.children}
    </Box>
  )
}
