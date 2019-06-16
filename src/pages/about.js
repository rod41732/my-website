import React from 'react';
import Section from '../components/section';
import Cover from '../components/cover';
import Card from '../components/card';
import Layout from '../components/layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCogs, faInfo, faTrophy, faAward} from '@fortawesome/free-solid-svg-icons';
import Timeline from '../components/timeline';
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

export default () => {
    return (
        <Layout>
            <AboutMe/>
        </Layout>
    );
}

function AboutMe() {
    return (<div style={{
        paddingTop: '46px',
    }}>
        <Cover/>
        <Section
            child={
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque quos nisi ipsum corrupti animi debitis! Odit velit, autem numquam accusamus, corrupti id tempore iusto optio a sint laudantium quam!
                </div>
            }
            title="About myself"
            icon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <Section
            icon={<FontAwesomeIcon icon={faCogs}/>}
            title="My Projects"
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
        <Section fullwidth
            icon={<FontAwesomeIcon icon={faTrophy}/>}
            title="Competition"
            child={
                <Timeline items={items}/>
            }
        />
    </div>
    )
}