package com.intprogram.sensorapi.services;

import com.intprogram.sensorapi.dao.UserDao;
import com.intprogram.sensorapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserDao dao;

    public User getUserById(int id){
        return dao.findById(id).get();
    }


    public List<User> getAllUsers(){
        List<User> users=new ArrayList<User>();
        dao.findAll().forEach(user->users.add(user));
        return users;
    }

    public void save(User user){
        dao.save(user);
    }

}
