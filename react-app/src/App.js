import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return( 
      <header>
        <h1><a href="/" onClick= {function(_event){
          _event.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    let tags = [];
    let con = this.props.data;
    let i = 0;
    while(i < con.length) {
      tags.push(<li key={con[i].id}><a href={con[i].id}>{con[i].title}</a></li>)
      i = i + 1;
    }
    return(
      <nav>
        <ol>
          {tags}
        
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    contents: [
      {id:1, title:'html',desc:'HTML is ...'},
      {id:2, title:'CSS',desc:'CSS is ...'},
    ],
    mode: 'read'
  }
  render(){
    let _aTitle, _aDesc = '';
    if(this.state.mode === 'welcome') {
      _aTitle = 'Welcome';
      _aDesc = 'Hello, React';
    }
    else if(this.state.mode === 'read') {
      _aTitle = 'HTML';
      _aDesc = 'HTML is ...';
    }
    return (
      <div className="App">
        <Subject title="Web" sub="World!!" onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Subject>
        {/* <header>
          <h1><a onClick={
            function(_event) {
              // this.state.mode = 'welcome';
              console.log(this);
              this.setState({mode: 'welcome'});
              _event.preventDefault();
            }.bind(this)
          } href="/">WEB</a></h1>
          World!
      </header>         */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_aTitle} desc={_aDesc}></Content>
      </div>
    );
  }
}

export default App;
