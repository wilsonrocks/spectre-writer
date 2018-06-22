import React from 'react';
import './Editor.css';

const safeDecode = (text) => {
    try {
      return decodeURIComponent(text);
    } catch (_error) {
      return text;
    }
  }


class Editor extends React.Component {

    state = {
    }

    componentDidMount () {
        const text =  safeDecode(this.props.match.params.text || '');
        console.log(text);
        this.setState({text});
    }

    changeText = (event) => {
            this.setState({text:event.target.value}, function () {
                this.props.history.replace(encodeURIComponent(encodeURIComponent(this.state.text)));
            });

    }

    render () {
        return (
            <div className="editor">
                <textarea
                    onChange={this.changeText}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={this.state.text}>
                </textarea>
        </div>
        );
    }

}

export default Editor;