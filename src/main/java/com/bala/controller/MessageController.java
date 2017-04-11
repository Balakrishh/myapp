package com.bala.controller;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bala.dto.ContactUsForm;

@RestController
public class MessageController {

	@Autowired
	private JavaMailSender mailSender;

	private static final String replyTo = "balakrishna.05412@gmail.com";

	@RequestMapping(value = "/contactme", method = RequestMethod.POST, consumes={ MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_HTML_VALUE})
	public String contactUs(@RequestBody ContactUsForm form, HttpServletResponse response) throws MessagingException {
		response.addHeader("Access-Control-Allow-Origin", "*");
		System.out.println("In Message Controller");
		MimeMessage mail = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mail, true); 
				if (StringUtils.isEmpty(form.getEmail())
				|| StringUtils.isEmpty(form.getFname())
				|| StringUtils.isEmpty(form.getLname())
				|| StringUtils.isEmpty(form.getMessage())) {
			return	"Message Sent Failed, Try Again";
		} else {
			helper.setTo(replyTo);
			helper.setText(form.getEmail());
			helper.setSubject("Important - Reply back in 2 business days"
					+ form.getFname() + " " + form.getLname());
			helper.setText(form.getMessage()+"\n\n"+"Thanks"+"\n"+form.getFname()+" "+form.getLname()+"\n"+form.getEmail());
			mailSender.send(mail);
			return "Message Sent";
		}
	}
}
