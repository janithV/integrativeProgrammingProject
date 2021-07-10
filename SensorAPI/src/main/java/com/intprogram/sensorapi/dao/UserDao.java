package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<User,Integer> {

}
