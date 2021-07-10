package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SensorDao extends JpaRepository<Sensor,Integer> {


}
