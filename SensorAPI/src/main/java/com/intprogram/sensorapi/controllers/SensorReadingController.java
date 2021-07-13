package com.intprogram.sensorapi.controllers;


import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.models.SensorReading;
import com.intprogram.sensorapi.services.EmailService;
import com.intprogram.sensorapi.services.SensorAlertService;
import com.intprogram.sensorapi.services.SensorReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sensorreading")
public class SensorReadingController {

    @Autowired
    private SensorReadingService service;

    @Autowired
    private SensorAlertService alertService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/addreading")
    private HttpStatus addReading(@RequestBody SensorReading reading) throws MessagingException, IOException {
        if (reading.getValue() > reading.getSensor().getThreshold()) {
            SensorAlert alert = new SensorAlert(reading.getDate(), reading.getValue(), "Alert! Value Exceeded than the threshold " + reading.getSensor().getThreshold() + " value recorded as:" + reading.getValue(), reading.getSensor());
            alertService.addReading(alert);
            emailService.sendmail(alert);
        }
        service.addReading(reading);
        return HttpStatus.OK;
    }

    @GetMapping("/getAllReadings")
    private List<SensorReading> getAllReadings() {

        return service.getAllReadings();
    }

    @GetMapping("/getAllReadings/{id}")
    private List<SensorReading> getAllReadingsById(@PathVariable int id) {
        System.out.println("inside endpoint");
        return service.getAllReadingsById(id);
    }

}
