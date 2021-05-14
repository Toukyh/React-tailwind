
import React from "react";
import Picture from "./components/Picture";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: "coucou",
        }
        console.log("constructeur appelé");

    }
    componentDidMount() {
        console.log("commponent monte");
        this.setState({ title: "Bonjour c'est Yahiko!" })
    }

    render() {
        console.log("render appelé");
        return <div>
            <h1 className="text-green-700 text-2xl">{this.state.title}</h1>
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <button
                className="bg-green-500 text-white rounded py-2 px-2 mx-auto"
                onClick={() => this.setState({ show: !this.state.show })}
            >
                Click
            </button>
            {
                this.state.show ? <Picture /> : null
            }
        </div>
    }
}

export default App;