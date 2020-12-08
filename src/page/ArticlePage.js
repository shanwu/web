import React from 'react';
import ReactMarkdown from 'react-markdown'
import MarkdownRender from 'react-markdown'
import TestMd from '../article/test.md'
const gfm = require('remark-gfm')

export default class ArticlePage extends React.Component {
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
        let {md} = this.state

        return (
            <div style={{
                background:'transparent',
                marginLeft:'10%'
            }}>
                <MarkdownRender plugins={[gfm]}  children={md} />
            </div>
            );
    }
}