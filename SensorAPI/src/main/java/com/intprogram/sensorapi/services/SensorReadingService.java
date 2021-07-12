package com.intprogram.sensorapi.services;

import com.intprogram.sensorapi.dao.SensorReadingDao;
import com.intprogram.sensorapi.models.SensorReading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SensorReadingService {

    @Autowired
    private SensorReadingDao dao;

    public void addReading(SensorReading reading){
        dao.save(reading);
    }

    public List<SensorReading> getAllReadings(){
        List<SensorReading> readings= new ArrayList<SensorReading>();
        dao.findAll().forEach(reading -> readings.add(reading));
        return readings;
    }

    public List<SensorReading> getAllReadingsById(int id){
        System.out.println("inside service");
        List<SensorReading> readings =dao.getReadingsById(id);
        System.out.println(readings);
        return readings;
    }

    public List<Double> getAllTemperatureById(int id){
        return dao.getTemperaturesById(id);
    }


}
