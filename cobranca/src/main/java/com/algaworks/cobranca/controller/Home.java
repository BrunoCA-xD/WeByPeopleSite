package com.algaworks.cobranca.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/titulos")
public class Home {

	@RequestMapping("/novo")
	public String novo() {
		return "Home";
	}
	
	@RequestMapping("/QuemSomos")
	public String quemSomos() {
		return "QuemSomos";
	}
	@RequestMapping("/Orgs")
	public String organizacoes() {
		return "Orgs";
	}
	@RequestMapping("/Plat")
	public String plataforma() {
		return "WeByPeople";
	}
	
}
