package com.intprogram.sensorapi.models;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Table(name = "sensorreading")
public class SensorReading {

    @Id
    private int readingId;
    private Date date;
    private double value;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "sensor_id",nullable = false)
    private Sensor sensor;

    public SensorReading(int readingId, Date date, double value,Sensor sensor) {
        this.readingId = readingId;
        this.date = date;
        this.value = value;
        this.sensor=sensor;
    }

    public int getReadingId() {
        return readingId;
    }

    public Date getDate() {
        return date;
    }

    public double getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "SensorReading{" +
                "readingId=" + readingId +
                ", date=" + date +
                ", value=" + value +
                '}';
    }
}
