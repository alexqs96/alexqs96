import React from 'react'

export default function EmailTemplate(body: {name: string, message: string}) {
  return (
    <div style={{border: "1px solid rgba(0,0,0,0.1)", padding: ".5rem 1.75rem", borderRadius: "1rem", fontWeight: 500}}>
    <p>{body.name}</p>
    <p>{body.message}</p>
    </div>
  )
}