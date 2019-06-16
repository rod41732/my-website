import Timeline from './components/timeline';
import React from 'react';
import {PostInFeed} from '../../components/post';
import {PostInFeed2} from '../../components/post.1';
import Header from './components/header';
import PageNav from './components/pagenav';

const defaultDate = new Date();

export default function Home({ timeline }) {
    return (
        <div style={{
            paddingTop: '46px',
        }}>        
            <Header/>
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
            <PageNav maxPage={5} currentPage={1}/>
            {/* <Footer/> */}
        </div>
    )
}

