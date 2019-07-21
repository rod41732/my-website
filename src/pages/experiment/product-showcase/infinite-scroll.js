import React from "react"
import ReactDOM from "react-dom"
import ScrollMagic from "scrollmagic"
import { List, Skeleton, Avatar } from "antd"
import "antd/dist/antd.css"
import "./style.css"
import "./infinite-scroll.css"
import Footer from "../../../components/footer"
const debug = {
  addIndicators: require("scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"),
}
const animation = {
  gsap: require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"),
}

class ShowcaseApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3, 4, 5],
      loading: false,
    }
  }

  componentDidMount() {
    this.controller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.Scene({
      triggerElement: "#load-trigger",
      triggerHook: 1,
    })
    scene.addIndicators().addTo(this.controller)
    scene.on("start", () => {
      this.setState({
        loading: true,
      })
      setTimeout(() => {
        this.setState({
          loading: false,
          data: [...this.state.data, 10, 20, 30, 40],
        })
      }, 400)
    })
  }

  render() {
    const data = this.state.data
    return (
      <div className="wrapper" id="sm-container">
        <div className="spacer-40">
          <h1>SOme prelude</h1>
          <p>
            Veniam aute velit duis adipisicing nulla. Nulla labore quis tempor
            officia. Do aute ea ex occaecat eiusmod elit. Qui reprehenderit
            dolor labore dolor ullamco commodo laboris tempor. Culpa nulla
            aliqua est officia aliqua nisi commodo est. Enim mollit culpa sint
            occaecat adipisicing reprehenderit cillum culpa exercitation labore.
            Nisi dolore adipisicing elit duis cillum ad nulla sint.
          </p>
        </div>
        <div className="centered">
          <List
            id="list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Skeleton avatar title={false} loading={false} active>
                  <List.Item.Meta
                    avatar={
                      <img
                        height="48px"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      ></img>
                    }
                    title={<a href="https://ant.design">Doge</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </Skeleton>
                <div>content</div>
              </List.Item>
            )}
          ></List>
          {
            this.state.loading ? (
              <div style={{
                padding: "8px",
                backgroundColor: "green",
              }}> Loading new items</div>
            ) : <></>
          }
        </div>
        <div className="spacer-20">
          <h1>Footer content</h1>
          <p>
            Sit laborum amet et nisi sunt deserunt eu magna officia ut Lorem
            sunt incididunt elit. Ex minim sit occaecat tempor esse magna sit
            in. Duis occaecat do magna laboris nostrud voluptate tempor amet
            aliqua eiusmod ea veniam eu. Consequat veniam exercitation et qui
            est dolore fugiat. Proident consectetur et qui reprehenderit sunt
            pariatur. Consectetur sit culpa nulla voluptate proident eiusmod. Ea
            esse dolore dolore elit sint commodo nostrud veniam consectetur qui
            aliquip proident. Excepteur id proident exercitation do.
          </p>
        </div>
        <Footer />
        <div
          style={{
            padding: "16px",
          }}
        >
          scroll down to load more
        </div>
        <div id="load-trigger"></div>
      </div>
    )
  }
}

export default ShowcaseApp
