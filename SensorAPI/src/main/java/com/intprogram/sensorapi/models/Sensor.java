package com.intprogram.sensorapi.models;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;


@Entity
@NoArgsConstructor
@Table(name="sensor")
public class Sensor {

    @Id
    private int id;
    private String type;
    private String location;
    private double threshold; //30c 50c
    private String status;

    @OneToMany(mappedBy = "sensor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<SensorReading> readings;

    @OneToMany(mappedBy = "sensor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<SensorAlert> alerts;


    public Sensor(int id, String type, String location, double threshold, String status) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.threshold = threshold;
        this.status = status;
    }


    public int getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getLocation() {
        return location;
    }

    public double getThreshold() {
        return threshold;
    }

    public String getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return "Sensor{" +
                "id=" + id +
                ", type=" + type +
                ", location='" + location + '\'' +
                ", threshold=" + threshold +
                ", status=" + status +
                '}';
    }
}
