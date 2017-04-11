package com.bala.controller;

import javax.servlet.ServletConfig;

import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletConfigAware;

@Component
public class ServletConfigAwareBean implements ServletConfigAware {

	private ServletConfig servletConfig;

	public ServletConfig getServletConfig() {
		return servletConfig;
	}

	@Override
	public void setServletConfig(ServletConfig servletConfig) {
		this.servletConfig = servletConfig;		
	}
}