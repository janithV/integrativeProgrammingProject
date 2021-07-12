package com.intprogram.sensorapi.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.intprogram.sensorapi.dao.SensorReadingDao;
import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.models.SensorReading;
import com.intprogram.sensorapi.services.SensorAlertService;
import com.intprogram.sensorapi.services.SensorReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/sensorreading")
public class SensorReadingController {

    @Autowired
    private SensorReadingService service;

    @Autowired
    private SensorAlertService alertService;

    @PostMapping("/addreading")
    private HttpStatus addReading(@RequestBody SensorReading reading){
           if(reading.getValue()>reading.getSensor().getThreshold()){
               SensorAlert alert = new SensorAlert(reading.getDate(),reading.getValue(),"Alert!",reading.getSensor());
               alertService.addReading(alert);
           }
            service.addReading(reading);
            return HttpStatus.OK;
    }

    @GetMapping("/getAllReadings")
    private List<SensorReading> getAllReadings(){

        return service.getAllReadings();
    }

    @GetMapping("/getAllReadings/{id}")
    private List<SensorReading> getAllReadingsById(@PathVariable int id){
        System.out.println("inside endpoint");
        return service.getAllReadingsById(id);
    }

    @GetMapping("/getAllTemps/{id}")
    private List<Double> getAllTemperature(@PathVariable int id){
        return service.getAllTemperatureById(id);
    }


}
