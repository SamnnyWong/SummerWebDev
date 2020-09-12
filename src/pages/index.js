import React from "react"
// import { Link } from "gatsby"

// import './index.css'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// const IndexPage = ({data}) => {
//   console.log(data)
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
//       {/*  <Image />*/}
//       {/*</div>*/}
//       {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
//       {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
//
//       <div>supp!!!</div>
//     </Layout>
//   )
// }
// export default IndexPage

const IndexPage = ({data}) => {
  console.log(data)
  return(

    <Layout>
      <SEO title="Home" />
      {/*<h1>Hi people</h1>*/}
      {/*<p>Welcome to your new Gatsby site.</p>*/}
      {/*<p>Now go build something great.</p>*/}


      <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id} className="article-box">
            <h3 className="title">{node.frontmatter.title}</h3>
            <p className="author">{node.frontmatter.author}</p>
            <p className="date">{node.frontmatter.date} {node.timeToRead} min read</p>
            <p className="excerpt">{node.excerpt}</p>
          </div>
        ))}
      </div>


      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*  <Image />*/}
      {/*</div>*/}
      {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
      {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}

      <div>supp!!!</div>
    </Layout>

  )
}
export default IndexPage



export const query = graphql`{
    allMarkdownRemark {
        totalCount
        edges {
            node {
                frontmatter {
                    title
                    date
                    author
                }
                excerpt
                timeToRead
            }
        }
    }
}

`
//
//
// export const  query = graphql`
//     query HomePageQuery{
//       allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//           totalCount
//           edges {
//               node {
//                   frontmatter {
//                       title
//                       date
//                       author
//                   }
//                   excerpt
//                   timeToRead
//               }
//           }
//       }
//     }
// `
