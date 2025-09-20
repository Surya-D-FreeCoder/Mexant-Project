import React from 'react'
import Slider from './Slider'
import Listcards from './Listcards'
import Contact from './Contact'
import Test from './Test'
import Abouthome from './Abouthome'

export default function Home() {
  return (
    <div>
        <Slider/>
        <Listcards/>
        <Abouthome/>
        <Contact/>
        <Test/>
    </div>
  )
}
