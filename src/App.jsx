import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Game from './Board'
const { Badge, Button, Card } = ReactBootstrap

export default function App() {
  const [name, setName] = React.useState('World')

  return (
      <Game />
  )
}
