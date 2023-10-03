import { PureComponent } from "react";

class InputStatefulComponent extends PureComponent{
    constructor() {
    super();
    this.state = {
      inputValuePrenom: '',
      inputValueNom: ''
    };}

handleInputChangePrenom = (event) => {
    this.setState({inputValuePrenom : event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1)})
}
handleInputChangeNom= (event) => {
    this.setState({inputValueNom : event.target.value.toUpperCase()})
}
    render() {
        return (
            <>
 <h1>Bienvenue </h1>
      <hr />
      <p>
        Prénom <input type="text" onInput={this.handleInputChangePrenom} />
      </p>
      <p>
        Nom
        <input type="text" onInput={this.handleInputChangeNom} />
      </p>

      <p>
        "Bonjour {this.state.inputValuePrenom} {this.state.inputValueNom}, bienvenue sur l'application !"
      </p>

            </>
        )
    }
}

export default InputStatefulComponent