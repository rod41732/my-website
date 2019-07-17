import React from "react"
import Section from "../components/section"
import Cover from "../components/cover"
import Card from "../components/card"
import Layout from "../layouts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCogs, faInfo, faTrophy } from "@fortawesome/free-solid-svg-icons"
import Timeline from "../components/timeline"
import Transition from "../components/transition"
import _ from "lodash"
const items = [
  {
    title: "Project 1",
    body: "Project 1 description",
  },
  {
    title: "Project 2",
    body: "Project 2 link",
  },
  {
    title: "Contest 1",
    body: "TOI 12 ",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
  {
    title: "HelloWorld",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
  },
]

export default () => {
  return <AboutMe />
}

function AboutMe() {
  return (
    <div>
      <Cover />
      <Section title="About myself" icon={<FontAwesomeIcon icon={faInfo} />}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque
          quos nisi ipsum corrupti animi debitis! Odit velit, autem numquam
          accusamus, corrupti id tempore iusto optio a sint laudantium quam!
        </p>
      </Section>
      <Section icon={<FontAwesomeIcon icon={faCogs} />} title="My Projects">
        <div
          style={{
            display: "block",
          }}
        >
          {_.range(5).map(idx => (
            <Card
              key={idx}
              title={"lorem ipsum title"}
              body="Culpa veniam sunt aliquip voluptate reprehenderit 
                            incididunt occaecat anim. Laborum tempor sit elit irure 
                            aute sunt in Lorem eu ut voluptate. Reprehenderit quis
                             anim id anim adipisicing nulla. Non laboris enim dolor 
                             sunt non enim aute laboris aute aliquip duis pariatur 
                             officia. Duis anim eu non reprehenderit esse velit sunt
                              deserunt culpa commodo. Duis est dolore velit magna sit."
              footer={<div className="secondary-font">Read more ... </div>}
            />
          ))}
        </div>
      </Section>
      <Section
        fullwidth
        icon={<FontAwesomeIcon icon={faTrophy} />}
        title="Competition"
      >
        <Timeline items={items} />
      </Section>
    </div>
  )
}
