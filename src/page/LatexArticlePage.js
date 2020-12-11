import React from 'react';
import ReactMarkdown from 'react-markdown'
import MarkdownRender from 'react-markdown'
import HomeBanner from '../component/HomeBanner.js'
import TestMd from '../article/test.md'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// for markdown: https://github.com/remarkjs/react-markdown
import gfm from 'remark-gfm'

// for latex: https://github.com/harunurhan/react-latex-next
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

export default class LatexArticlePage extends React.Component {
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
        const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |`

        return (
        
        <div>
                <HomeBanner/>
                <div style={{
                    position: 'absolute',
                    top: '200px',
                    left: '25%',
                }}>
                    <MarkdownRender style={{
                    }} plugins={[gfm]} ># LaTex cheat sheet(Based on KaTeX library)</MarkdownRender>
                    <MarkdownRender style={{
                    }} plugins={[gfm]} >## Basic math symbols
                    </MarkdownRender>
                <table style={{
                    border: "1px #ccc solid",
                    padding: "5px",
                    borderCollapse: "collapse"
                }}>
                    <tr style={{
                        backgroundColor: "#ccc",
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th > Index </th>
                        <th> Symbol </th>
                        <th> Symbol Name </th>
                        <th> Latex Syntax </th>
                        <th> Example </th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>1.</th>
                        <th><Latex>$\neq$</Latex></th>
                        <th>not equal sign</th>
                        <th>\neq</th>
                        <th><Latex>$ a \neq b $</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>2.</th>
                        <th><Latex>$\geq$
</Latex></th>
                        <th>greater than or equal to</th>
                        <th>\geq</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>3.</th>
                        <th><Latex>$\leq$</Latex></th>
                        <th>less than or equal to</th>
                        <th>\leq</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>4.</th>
                        <th><Latex>$\plusmn$</Latex></th>
                        <th>plus - minus</th>
                        <th>\plusmn</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>5.</th>
                        <th><Latex>$\mp$</Latex></th>
                        <th>minus - plus</th>
                        <th>\mp</th>
                        <th><Latex>$3 \mp 5 = -2 or 8$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>6.</th>
                        <th><Latex>$\div$</Latex></th>
                        <th>division sign / obelus</th>
                        <th>\div</th>
                        <th><Latex>$6 \div 2 = 3$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>7.</th>
                    <th><Latex>$\frac$</Latex></th>
                        <th>fraction / division</th>
                    <th>{`\\frac`}</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>8.</th>
                        <th><Latex>$a^b$</Latex></th>
                        <th>power</th>
                        <th>a^b</th>
                    <th><Latex>$2^2 = 4$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>9.</th>
                        <th><Latex>$\sqrt[3]2$</Latex></th>
                        <th>square root</th>
                    <th>\sqrt['n-th root']{'{expression}'}</th>
                    <th><Latex>$\sqrt[3]8 = 2$</Latex></th>
                    </tr>
                </table>
                    <MarkdownRender style={{
                    }} plugins={[gfm]} >## Algebra symbols
                    </MarkdownRender>
                <table style={{
                    border: "1px #ccc solid",
                    padding: "5px",
                    borderCollapse: "collapse"
                }}>
                    <tr style={{
                        backgroundColor: "#ccc",
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th > Index </th>
                        <th> Symbol </th>
                        <th> Symbol Name </th>
                        <th> Latex Syntax </th>
                        <th> Example </th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>1.</th>
                        <th><Latex>$\sum$</Latex></th>
                        <th>Sum</th>
                        <th>\sum_{"{i = 1}^{max}"}</th>
                        <th><Latex>$\sum$</Latex><Latex>$^m$</Latex><Latex>$_i$</Latex><Latex>$_=$</Latex><Latex>$_1$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>2.</th>
                        <th><Latex>$\equiv$
</Latex></th>
                        <th>equivalence</th>
                        <th>\equiv</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>3.</th>
                        <th><Latex>$\triangleq$</Latex></th>
                        <th>equal by definition</th>
                        <th>\triangleq</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>4.</th>
                        <th><Latex>$\coloneqq$</Latex></th>
                        <th>equal by definition</th>
                        <th>\coloneqq</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>5.</th>
                        <th><Latex>$\approx$</Latex></th>
                        <th>approximately equal</th>
                        <th>\approx</th>
                        <th><Latex>$sin(0.01)\approx0.01$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>6.</th>
                        <th><Latex>$\propto$</Latex></th>
                        <th>proportional to</th>
                        <th>\propto</th>
                        <th><Latex>y $\propto$ x when y = kx, k constant</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>7.</th>
                        <th><Latex>$\infty$</Latex></th>
                        <th>infinity symbol</th>
                        <th>\infty</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>8.</th>
                        <th><Latex>$\vert$</Latex></th>
                        <th>vertical bar</th>
                        <th>\vert</th>
                    <th><Latex>$\vert a \vert$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>9.</th>
                        <th><Latex>$\Delta$</Latex></th>
                        <th>delta</th>
                        <th>\Delta</th>
                    <th><Latex>$\Delta = t_1 - t_0$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>10.</th>
                        <th><Latex>$\Pi$</Latex></th>
                        <th>capital pi	</th>
                        <th>\Pi</th>
                    <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>11.</th>
                        <th><Latex>$\pi$</Latex></th>
                        <th>pi constant</th>
                        <th>\pi</th>
                    <th></th>
                    </tr>
                </table>
                <MarkdownRender style={{
                    }} plugins={[gfm]} >## Linear Algebra symbols
                    </MarkdownRender>
                <table style={{
                    border: "1px #ccc solid",
                    padding: "5px",
                    borderCollapse: "collapse"
                }}>
                    <tr style={{
                        backgroundColor: "#ccc",
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th > Index </th>
                        <th> Symbol </th>
                        <th> Symbol Name </th>
                        <th> Latex Syntax </th>
                        <th> Example </th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>1.</th>
                        <th><Latex>$\cdot$</Latex></th>
                        <th>dot</th>
                        <th>\dot</th>
                        <th><Latex>$ a \cdot b$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}> 
                        <th>2.</th>
                        <th><Latex>$\times$
</Latex></th>
                        <th>cross</th>
                        <th>\times</th>
                        <th><Latex>$a \times b$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>3.</th>
                        <th><Latex>$\otimes$</Latex></th>
                        <th>tensor product</th>
                        <th>\otimes</th>
                        <th><Latex>$A \otimes B$</Latex></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>4.</th>
                        <th><Latex>$\Vert$</Latex></th>
                        <th>double vertical bars</th>
                        <th>\Vert</th>
                        <th></th>
                    </tr>
                    <tr style={{
                    border: "1px #ccc solid",
                    padding: "5px"}}>
                        <th>5.</th>
                        <th><Latex>$\dag$</Latex></th>
                        <th>Hermitian conjugate(dagger)</th>
                        <th>\dag</th>
                        <th><Latex>$A^\dag$</Latex></th>
                    </tr>
                </table>
                <br/><br/><br/><br/><br/><br/>

                <p><b>TO BE CONTINUED...</b></p>

{/* <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter> */}
{/* 
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter> */}
                </div>
        </div>
        );}
}