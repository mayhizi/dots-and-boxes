import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import Signinform from "../components/signinform"
import Dotsandboxes from "../components/dotsandboxes"
import LayoutComponent from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <LayoutComponent>
    <Signinform></Signinform>
    <Dotsandboxes></Dotsandboxes>
  </LayoutComponent>
)

export default IndexPage
