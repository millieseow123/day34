package com.example.demo.models;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Registration {
    
    private String id;
    private String name;
    private String email;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public static Registration create(String json) {
        JsonReader reader = Json.createReader(new StringReader(json));
        JsonObject data = reader.readObject();

        final Registration reg = new Registration();
        reg.setName(data.getString("name"));
        reg.setName(data.getString("email"));

        //id optional, check if id in payload
        if (data.containsKey("id"))
            reg.setId(data.getString("id"));

        return reg;
    }

}
