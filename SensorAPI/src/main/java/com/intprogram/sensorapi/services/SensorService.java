package com.intprogram.sensorapi.services;

import com.intprogram.sensorapi.dao.SensorDao;
import com.intprogram.sensorapi.models.Sensor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SensorService {

    @Autowired
    private SensorDao dao;

    public void addSensor(Sensor sensor){
        dao.save(sensor);
    }

    public Sensor getSensorbyId(int id){
        return dao.findById(id).get();
    }

    public void deleteSensor(Sensor sensor){
        dao.deleteById(sensor.getId());

    }

    public List<Sensor> getAllSensors(){
        List<Sensor> sensors = new ArrayList<Sensor>();
        dao.findAll().forEach(sensor -> sensors.add(sensor));

        return sensors;
    }




}
