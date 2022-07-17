import React from "react";
import { NavLink } from "react-router-dom";

export const AboutPage: React.FC = () => {
    return (
        <>
            <h1>Страница информатции</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque in molestias obcaecati excepturi iste amet nesciunt
                maiores officia temporibus quaerat!
            </p>
            <button className="waves-effect blue darken-1 btn-large">
                <NavLink to='/'>
                    Обраньно к списку дел
                </NavLink>
            </button>
        </>
    )
}