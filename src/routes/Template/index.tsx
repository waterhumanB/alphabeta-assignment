import { Outlet } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

import Header from '../../components/Header'
import { ReactComponent as ArrowUp } from '../../assets/imgs/arrow_up.svg'

import * as S from './style'

const Template = () => {
  const [ref, inView] = useInView()

  const homeRef = useRef<HTMLDivElement>(null)

  const scrollHandler = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header view={inView} />
      <S.TemplateMain ref={homeRef}>
        <div ref={ref} />
        <button className={inView ? 'on' : 'arrow'} onClick={scrollHandler}>
          <ArrowUp />
        </button>
        <Outlet />
      </S.TemplateMain>
    </>
  )
}

export default Template
