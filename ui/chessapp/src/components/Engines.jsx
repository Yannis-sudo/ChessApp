import React, { Component } from 'react';
import "../style/engines.css"
import { Link } from 'react-router-dom';

class Engines extends Component {
    state = {}
    render() {
        return (
            <div className='full-engines-div'>
                <h1 className='play-engines-headline'>Play Chess Engines</h1>
                <div className='engines-div'>
                    <div className='yannis-engine-div engine'>
                        <h2>TheRook Engine</h2>
                        <div className='engine-config-div'>
                            <div className='fen-div'>
                                <label htmlFor="fen">FEN</label>
                                <input type="text" name="fen" id="fen" className='fen-input' value="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" />
                            </div>
                            <div className="play-with-div">
                                <Link to="/playengines">
                                    <button className='play-with play-with-white'>White</button>
                                </Link>
                                <button className='play-with play-with-black'>Black</button>
                            </div>
                        </div>
                    </div>
                    <div className='stockfish-div engine'>
                        <h2>Stockfish Engine</h2>
                        <div className='engine-config-div'>
                            <div className='fen-div'>
                                <label htmlFor="fen">FEN</label>
                                <input type="text" name="fen" id="fen" className='fen-input' value="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" />
                            </div>
                            <div className="play-with-div">
                                <button className='play-with play-with-white'>White</button>
                                <button className='play-with play-with-black'>Black</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Engines;