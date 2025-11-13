import { FormEvent, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setSubmitted(true)
  }

  return (
    <div className="container py-4">
      <h2>Contact</h2>
      {submitted && <Alert variant="success">Thanks, we'll get back to you!</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={e => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  )
}


