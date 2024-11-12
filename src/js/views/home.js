import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext";
import CardPlanet from "../component/cardPlanets";

export const Home = () => {
	const {actions, store} = useContext(Context)
	useEffect(() => {
		actions.loadPeople()
		actions.loadPlanet()
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Star Wars API</h1>
			<h1>Personajes</h1>
			<div className="d-flex flex-row overflow-scroll">
			{
				store.people.map((item, index)=>{
					return (
						<Card key={index} name={item.name} uid={item.uid}/>
					)
				})
			}
			</div>
			<h1>Planetas</h1>
			<div className="d-flex flex-row overflow-scroll">
			{
				store.planets.map((item, index)=>{
					return (
						<CardPlanet key={index} name={item.name} uid={item.uid}/>
					)
				})
			}
			</div>
		</div>
	)
};
