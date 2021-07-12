package com.intprogram.sensorapi.controllers;

import com.intprogram.sensorapi.models.Sensor;
import com.intprogram.sensorapi.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sensor")
public class SensorController {

    @Autowired
    private SensorService service;

    @PostMapping("/addsensor")
    private HttpStatus addSensor(@RequestBody Sensor sensor){
        service.addSensor(sensor);
        return HttpStatus.OK;
    }

    @GetMapping("/getallsensors")
    private List<Sensor> getAllsensors(){
        return service.getAllSensors();
    }


    @GetMapping("/getsensor/{id}")
    private Sensor getSensorById(@PathVariable int id){
        return service.getSensorbyId(id);
    }

    @DeleteMapping("/deletesensor")
    private HttpStatus deleteSensor(@RequestBody Sensor sensor){
        try {
            service.deleteSensor(sensor);
            return HttpStatus.OK;
        } catch (Exception e) {
           return HttpStatus.INTERNAL_SERVER_ERROR;
        }

    }


}
