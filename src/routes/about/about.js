import React from 'react';
import Section from './components/section';
import Timeline from '../home/components/timeline'
import Cover from './components/cover';
import Card from './components/card';
const items = [
    {
    title: "Project 1",
    body: "Project 1 description",
},{
    title: "Project 2",
    body: "Project 2 link",
},{
    title: "Contest 1",
    body: "TOI 12 ",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
},{
    title: "HelloWorld",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quod a, deleniti laboriosam optio sit voluptates doloremque, architecto accusantium molestiae corporis fugit dolorum explicabo ullam vero dolor nesciunt temporibus minima.",
}];

export default function AboutMe() {
    return (<div>
        <Cover/>
        <Section
            child={
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque quos nisi ipsum corrupti animi debitis! Odit velit, autem numquam accusamus, corrupti id tempore iusto optio a sint laudantium quam!
                </div>
            }
            title="Projects"
            icon="🐹 "
        />
        <Section
            icon="🐹"
            title="Show case"
            child={
                <div style={{
                    display: "block",
                }}>
                    {/* TODO: Use another component to remove shadow */}
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                    <Card
                        title="Card title lorem ipsum dolor sit amet"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero"
                    />
                </div>
            }
        />
        {/* 
        <Project/>
        <Competetions/>
        <Skill/>
        <Experience/> */}
    </div>
    )
}