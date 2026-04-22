import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Board from './Board'
const { Badge, Button, Card } = ReactBootstrap

export default function App() {
  const [name, setName] = React.useState('World')

  return (
    <div>
      <Board />
    </div>
  )
}
