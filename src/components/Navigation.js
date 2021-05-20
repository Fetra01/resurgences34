import React, { useState } from 'react';

const Navigation = () => {
    const [togglerButton, setTogglerButton] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Resurgences 34</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" onClick={(e) => setTogglerButton(!togglerButton)}><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto mg-2">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Actions</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contacts</a>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </nav>
    );
};

export default Navigation;