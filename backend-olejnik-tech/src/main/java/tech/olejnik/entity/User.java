package tech.olejnik.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity @Data
public class User {

    @Id Long id;
    @Column String email;
    @Column String password;
}
