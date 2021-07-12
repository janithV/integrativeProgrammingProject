package com.intprogram.sensorapi.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.intprogram.sensorapi.models.User;
import com.intprogram.sensorapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/login")
    private HttpStatus login(@RequestBody JsonNode payload){
        String email = payload.get("email").asText();
        String password= payload.get("password").asText();
        System.out.println("email :"+email +" password :"+ password);

        HttpStatus status= HttpStatus.NOT_FOUND;

        List<User> users=service.getAllUsers();
        for (User obj:users) {
            if (obj.getEmail().equals(email) && obj.getPassword().equals(password)){
               status=HttpStatus.OK;
               break;
            }
        }
        return status;
    }


    @PostMapping("/register")
    private HttpStatus register(@RequestBody User user){
        try {
            service.save(user);
            return HttpStatus.OK;

        } catch (Exception e) {
            System.out.println(e.toString());
            return HttpStatus.BAD_REQUEST;
        }
    }




}
