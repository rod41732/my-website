import React from 'react';
import {PostInFeed2} from '../components/post';
import Header from '../components/header';
import PageNav from '../components/pagenav';
import Layout from '../components/layout';
const defaultDate = new Date();

export default () => {
    return (
        <Layout>
            <Home timeline={[]}/>
        </Layout>
    )
}

function Home({ timeline }) {
    return (
        <div>        
            {/* <Image/> */}
            <Header title="All my blogs" subtitle="so many stories, wow"/>
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

