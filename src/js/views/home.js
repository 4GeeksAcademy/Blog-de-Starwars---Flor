import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext";
import CardPlanet from "../component/cardPlanets";
import CardVehicle from "../component/cardVehicles";


export const Home = () => {
	const {actions, store} = useContext(Context)
	useEffect(() => {
		actions.loadPeople()
		actions.loadPlanet()
		actions.loadVehicle()
	}, [])
	return (
		<div className="text-center" style={{"fontFamily": "Star Wars"}}>
			<h1 className="text-warning"><strong>STAR WARS API</strong></h1>
			<h1 className="text-warning">Personajes</h1>
			<div className="d-flex flex-row overflow-scroll">
			{
				store.people.map((item, index)=>{
					return (
						<Card key={index} name={item.name} uid={item.uid}/>
					)
				})
			}
			</div>
			<h1 className="text-warning">Planetas</h1>
			<div className="d-flex flex-row overflow-scroll">
			{
				store.planets.map((item, index)=>{
					return (
						<CardPlanet key={index} name={item.name} uid={item.uid}/>
					)
				})
			}
			</div>

			<h1 className="text-warning">Vehículos</h1>
			<div className="d-flex flex-row overflow-scroll">
			{
				store.vehicles.map((item, index)=>{
					return (
						<CardVehicle key={index} name={item.name} uid={item.uid}/>
					)
				})
			}
			</div>
		</div>
	)
};
