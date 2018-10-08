package bca.internshipsolutions.TwigNews.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TreeController {

	@RequestMapping()
	public ModelAndView index() {
		
		ModelAndView view = new ModelAndView("Index");
		
		return view;
	}
}
