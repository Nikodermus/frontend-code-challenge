import React from 'react';
import './App.css';

const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

const App = () => <>
    <label htmlFor="maxCP" className="max-cp">
        <input type="checkbox" id="maxCP" />
        <small>
            Maximum Combat Points
        </small>
    </label>
    <input type="text" className="input" placeholder="Pokemon or type" />
    <div className="loader"></div>
    <ul className="suggestions">
        <li>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="" />
            <div className="info">
                <h1>
                    <span className="hl">Pika</span>chu</h1>
                <span className="type electric">Electric</span>
                <span className="type normal">Normal</span>
            </div>
        </li>
        <li>
            <img src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png" alt="" />
            <div className="info">
                <h1 className="no-results">
                    No results
                </h1>
            </div>
        </li>
    </ul>
</>;

export default App;
