import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Square from './Square'
const { Badge, Button, Card } = ReactBootstrap

export default function App() {
  const [name, setName] = React.useState('World')

  return (
    <div>
      <Square />
    </div>
  )
}
