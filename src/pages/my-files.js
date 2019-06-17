import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            allFile{
                edges{
                    node {
                        relativePath
                        prettySize
                        extension
                        birthTime(fromNow: true)
                    }
                }
            }
        }
        `
    );
    console.log(data);
    return (
        <Layout>
            <div>
                <h1 className="title-font">My Files</h1>
                <table>
                    <thead>
                        <tr className="title-font">
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.allFile.edges.map(({node}, index) => (
                                <tr key={index}>
                                    <td>{node.relativePath}</td>
                                    <td>{node.prettySize}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthTime}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}