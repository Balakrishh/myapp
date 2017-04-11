package com.bala.controller;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bala.dto.LoginForm;

//My login controller
@Controller
public class MainController {

	public static final String filePath = "/WEB-INF/classes/StudentService.zip";
	public static final int BUFFER_SIZE = 4096;
	
	@Autowired
	private ServletConfigAwareBean servletConfigAwareBean;
	
	@RequestMapping(value = "/download.do", method = RequestMethod.GET)
	public void FileDownloadController(HttpServletRequest request, HttpServletResponse response) throws IOException {

		InputStream is = servletConfigAwareBean.getServletConfig().getServletContext().getResourceAsStream(filePath);
		String mimeType = "application/octet-stream";
		response.setContentType(mimeType);
		String fileName = "StudentService.zip";
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + fileName +"\""));

        FileCopyUtils.copy(is, response.getOutputStream());
		
	}
	
	@RequestMapping(value = "/login.do", method = RequestMethod.POST)
	public void login(
			@ModelAttribute("resitrationForm") LoginForm loginForm,
			HttpSession session, HttpServletResponse response, ModelMap model)
			throws Exception {
		System.out.println("Hello from login controller");
		System.out.println(loginForm.getExampleInputEmail3());
		// Member member=userService.authenticateUser(username, password);
		if (loginForm.getExampleInputEmail3() != null) {
			session.setAttribute("MEMBER",
					loginForm.getExampleInputEmail3());
		} else {
			throw new Exception("Invalid username or password");
		}
		// return Utils.toJson("SUCCESS");
		response.sendRedirect("login.html");
	}
	@RequestMapping(value = "/logout.do", method = RequestMethod.POST)
	public void logout(
			HttpSession session, HttpServletResponse response, ModelMap model)
			throws Exception {
		System.out.println("Hello from logout controller");
		response.sendRedirect("logout.html");
	}
}
