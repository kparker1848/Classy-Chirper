import React from 'react';
import { TiBrush, TiAt } from "react-icons/ti";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            newChirp: "",
            chirpFeed: []
        };
    };

    componentDidMount() {
        this.setState({
            chirpFeed: [...this.state.chirpFeed, 
                {
                    id: 1,
                    user: "@Mothm@n:",
                    chirp: "Getting lit tonight #porchlightparty"
                },
                {
                    id: 2,
                    user: "@NotBigfoot:",
                    chirp: "Taking a vacation in the mountains for a month, nobody bother me."
                },
                {
                    id: 3,
                    user: "@Call-Me-Nessie:",
                    chirp: "What a fun lake trip with the boys!"
                }]
        });
    };

    handleChirpToFeed = e => {
        e.preventDefault();
        this.setState({
            username: "",
            newChirp: "",
            chirpFeed: [...this.state.chirpFeed, {
                id: this.state.chirpFeed.length + 1,
                user: "@" + this.state.username + ":",
                chirp: this.state.newChirp
            }]
        });
    };

    render() {
        return (
            <>
                <h2 className="col-12 text-center mb-5">Welcome to Chirper</h2>
                <div className="d-flex flex-wrap justify-content-evenly container">
                    <div className="shadow p-3 mb-5 bg-body rounded align-self-start col-4">
                        <form>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><TiAt /></span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><TiBrush /></span>
                                <textarea className="form-control" placeholder="Your Thoughts..." aria-label="With textarea" value={this.state.newChirp} onChange={e => this.setState({ newChirp: e.target.value })}></textarea>
                            </div>
                            <button type="submit" onClick={e => this.handleChirpToFeed(e)} className="btn btn-primary">Chirp It</button>
                        </form>
                    </div>
                    <div className="shadow p-3 mb-5 bg-body rounded col-5">
                        <ul>
                            {this.state.chirpFeed.map((chirps) => (

                                <div key={chirps.id} className="card">
                                    <div className="card-body">
                                        <p className="card-title fw-bold">{chirps.user}</p>
                                        <p className="card-text">{chirps.chirp}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    };
};

export default App;