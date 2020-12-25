import React from 'react';
import ReactMarkdown from 'react-markdown'
import MarkdownRender from 'react-markdown'
import HomeBanner from '../component/HomeBanner.js'
import TestMd from '../article/test.md'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import guideGif from '../image/guide.gif'
import apkPath from '../res/apk/exchange_release.apk' 

// for markdown: https://github.com/remarkjs/react-markdown
import gfm from 'remark-gfm'

// for latex: https://github.com/harunurhan/react-latex-next
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

export default class CurrenciesExchangeRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { md: "" }
    }
    
    componentWillMount() {
        fetch(TestMd)
          .then((res) => res.text())
          .then((md) => {
            this.setState({ md })
          })
    }

    render() {
        return (
            <div>
                <HomeBanner/>
                <div style={{
                    position: 'absolute',
                    top: '200px',
                    left: '25%', 
                    marginRight: '20%'}}>
                        <div>
                            <h2 style={{marginLeft:'100px'}}>简汇 ~ 一个极简的当前汇率查找工具</h2>                            
                            <a style={{marginLeft:'450px'}} href={apkPath}>按这里下载</a>
                        </div>
                        <p style={{lineHeight: 3,}}>这是我参加 PayPay 面试，对方要求应该能在 2 ~ 3 小时内轻松完成的
                            coding challenge project。虽然我不认为这是考查面试者程序设计力合理作法，
                            但因为之前都在学习机器学习的知识、玩 Kaggle，所以当时就抱著估且一试的心态，把作品完成了。
                        </p>
                        <p style={{lineHeight: 3,}}> Coding challenge project 虽然完成了，但是如果不能让人使用，便
                            利人的生活，那代码也有点可怜。因此在提高项目的完成度以后，放到网上，希望它能让更多人的生活便利些。 :)
                        </p>
                        <img src={guideGif} alt="Girl in a jacket" width="300" height="600" />

                </div> 
        </div>     
        );}
}