import React from "react";

class TextArea extends React.Component {
	render() {

    const {valorPreDef, handleChange} = this.props

    if (valorPreDef.length > 500) {
      alert('texto muito grande')
    }

		return(
      <div>
        <label htmlFor = 'textarea'> descreva resumidamente seus conhecimentos </label> 
        <br />
        <textarea cols = '45' rows = '10' id = 'textarea'
          value = {valorPreDef} onChange = {handleChange}
        >
        </textarea>
      </div>
    )
	}
}

export default TextArea