package com.intprogram.sensorapi.services;

import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@Service
public class EmailService {

    private List<User> users = new ArrayList<User>();

    @Autowired
    private UserService service;


    public void sendmail(SensorAlert alert) throws AddressException, MessagingException, IOException {

        users=service.getAllUsers();

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("janith.mitkln@gmail.com", "janith5017939");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("janith.mitkln@gmail.com", false));

        for (User user: users) {
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(user.getEmail()));
            msg.setSubject("Alert");
            msg.setContent(alert.getAlertMessage(), "text/html");
            msg.setSentDate(new Date());

            MimeBodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setContent(alert.getAlertMessage(), "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(messageBodyPart);
            msg.setContent(multipart);
            Transport.send(msg);

        }


    }


}
