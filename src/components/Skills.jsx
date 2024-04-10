import React from "react"
import Skillbar from './Skillbar'
import { SectionTitle } from './StyledComponent'
const skillsData = [
  {
    name: 'Web3',
    level: 99,
  },
  {
    name: 'React.js',
    level: 99,
  },
  {
    name: 'Next.js',
    level: 99,
  },
  {
    name: 'Vue.js',
    level: 99,
  },
  {
    name: 'Nuxt.js',
    level: 80,
  },
  {
    name: 'Ethereum',
    level: 99,
  },
  {
    name: 'Solana',
    level: 99,
  },
  {
    name: 'Rust',
    level: 80,
  },
  {
    name: 'Solidity',
    level: 80,
  },
  {
    name: 'Figma',
    level: 100,
  }
]
export default function Skills() {
  return (
    <div id="skills" className="container mx-auto">
      <div className="max-w-[800px] mx-auto pt-20 lg:px-10">
        <SectionTitle>professional skills</SectionTitle>
        <p className="my-3 text-sm text-center font-semibold text-purple-800 dark:text-purple-500">Introducing my skills for DApp development.</p>
        {skillsData.map((item, key) => (
          <Skillbar
            name={item.name}
            level={item.level}
            key={key}
          />
        ))}
      </div>
    </div>
  )
}
