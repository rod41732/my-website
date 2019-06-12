import Timeline from './components/timeline';
import React from 'react';
import {PostInFeed} from '../../components/post';
import {PostInFeed2} from '../../components/post.1';


const defaultDate = new Date();

export default function Home({ timeline }) {
    return (
        <div>
            <Timeline items={[{
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
            }]
            }/>
            <PostInFeed2 
                date={defaultDate} 
                description="Lorem descrpition" 
                title="lorem title" 
                tags={['JS', 'CSS', 'HTML']}
            />
            <PostInFeed2 
                date={defaultDate}
                description="Lorem descriptiomn"
                title="Lorem title"
                tags={['Java', 'Android', 'App']}
            />
            <PostInFeed2 
                date={defaultDate} 
                description="Lorem descrpition" 
                title="lorem title" 
                tags={['JS', 'CSS', 'HTML']}
            />
            <PostInFeed2 
                date={defaultDate}
                description="Lorem descriptiomn"
                title="Lorem title"
                tags={['Java', 'Android', 'App']}
            />
        </div>
    )
}

