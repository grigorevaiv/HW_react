import React from "react";
import {NavLink} from "react-router-dom";

export function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
            <NavLink className="nav-link" to="/addPost">Добавить запись</NavLink>
            <NavLink className="nav-link" to="/reg">Регистрация</NavLink>
        </nav>
    )
}