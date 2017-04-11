package com.bala.dto;

import java.io.Serializable;

public class Request<T> implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String token;
	private T value;

	public Request() {
		super();
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public T getValue() {
		return value;
	}

	public void setValue(T value) {
		this.value = value;
	}

}
