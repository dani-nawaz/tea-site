import React from 'react'
import { data } from './skillsData'

export const Skills = () => {
  return (
    <section className='skills clear-fix'>
      {data.map((card) => {
        const { image, id, title, text } = card
        return (
          <article className='skill' key={id}>
            <span class='skill-icon'>{image}</span>
            <h3 className='skill-title'>{title}</h3>
            <p className='skill-text'>{text}</p>
          </article>
        )
      })}
    </section>
  )
}
