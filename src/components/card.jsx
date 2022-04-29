import { useState } from 'react';
import { data, languages } from '../data/cards';
import style from './card.module.css';
import Fade from 'react-reveal/Fade';

const Card = () => {
  const cardContent = data;
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(cardContent[languages[index]].title);
  const [technologies, setTechnologies] = useState(cardContent[languages[index]].technologies);

  const updateData = () => {
    
    const next = index + 1 < languages.length ? index + 1 : 0
    setIndex(next)
    setTitle(cardContent[languages[index]].title)
    setTechnologies(cardContent[languages[index]].technologies)
    console.log(index)
    // setInterval(() => {
    //   const next = index + 1 < languages.length ? index + 1 : 0
    //   setIndex(next)
    //   setTitle(cardContent[languages[index]].title)
    //   setTechnologies(cardContent[languages[index]].technologies)
    //   console.log(index)
    // }, 2000);
  }

  return (
    <div className={style.container} onClick={updateData}>
      <div className={style.title}>I work with {title}</div>
      <div className={style.technologies}>
        {
          technologies.map((tech, id) => {
            return (
              <div className={style.techContainer} key={id}>
                <img src={tech.src} alt={tech.title} className={style.logo} />
                <span className={style.techTitle}>{tech.title}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card;
