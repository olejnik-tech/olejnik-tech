package tech.olejnik.entity;

import lombok.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity @Data
public class User {

    @Id Long id;
    @Column String email;
    @Column String password_hash;
    String password;
}
