package com.example.stage.domain;

import net.bytebuddy.dynamic.loading.ClassReloadingStrategy;

import javax.persistence.*;

@Entity
public class utilisateur {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String login;

    private String Password;

    private String Email;


}
