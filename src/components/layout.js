/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Row, Col, Typography } from "antd"
const { Header, Footer, Content } = Layout
const { Text, Title } = Typography

const LayoutComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Header style={{ background: "white" }}>
          <Row>
            <Col span={8} offset={8}>
              {/* <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ lineHeight: "64px", backgroundColor: "white" }}
              > */}
              <Title style={{ textAlign: "center", color: "black" }}>
                Dots and Boxes
              </Title>
              {/* </Menu> */}
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
        <Footer style={{ background: "white" }}>Footer</Footer>
      </Layout>
      {/* <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      {/* </div> */}
    </>
  )
}

// LayoutComponent.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default LayoutComponent
