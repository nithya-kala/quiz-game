import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PlayArea } from './components/PlayArea'
import { Themer } from './components/Themer'
import './App.css'

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode])

  return (
    <ThemeProvider theme={theme}>
      <Themer toggleColorMode={toggleColorMode}>
        <PlayArea />
      </Themer>
    </ThemeProvider>
  )
}
