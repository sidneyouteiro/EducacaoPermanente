import React, { Fragment } from "react"
import { Link } from '../../../../node_modules/react-router-dom'
import { Redirect } from 'react-router-dom'

import { NavBar } from "../../navbar"
import CardRelatorio from "./CardRelatorio"

// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./relatorios.css"

const relatorios = () => {

	const user_type = localStorage.getItem("user_type")
   let redirectIfNotAuth = null
   if (user_type !== "adm") redirectIfNotAuth = <Redirect to="/" />

	return (
		<Fragment>
			{redirectIfNotAuth}
			<NavBar />
			<main>
				{/* <Link to="/turma">
					<ArrowBackIcon id="return-icon" />
				</Link> */}
				<div className="document__links">

					<Link to= {{
					pathname: "/relatorio",
					state: "relatoriocpfnome"
					}} className="link"> 
						<CardRelatorio title="CPF/Nome" />
					</Link>
					
					<Link to= {{
					pathname: "/relatorio",
					state: "relatoriocontato"
					}} className="link"> 
						<CardRelatorio title="Contato" />
					</Link>

					<Link to= {{
					pathname: "/relatorio",
					state: "relatoriofrequencia"
					}} className="link">
						<CardRelatorio title="Frequência" />
					</Link>
				</div>
			</main>
		</Fragment>
	)
}

/*
<Link to= {{
					pathname: "/relatorio",
					state: "relatoriofuncao"
					}} className="link">
						<CardRelatorio title="Função/Cargo" />
					</Link>

					<a href="#relatorio">
						<CardRelatorio title="Profissão" />
					</a>
					<a href="#relatorio">
						<CardRelatorio title="Superintendência" />
					</a>
					<a href="#relatorio">
						<CardRelatorio title="CAP" />
					</a>
					<a href="#relatorio">
						<CardRelatorio title="Unidade" />
					</a>


					


					<Link to= {{
					pathname: "/relatorio",
					state: "relatorioconcluintes"
					}} className="link">
						<CardRelatorio title="Concluintes" />
					</Link>

*/

export default relatorios
