package com.bog.internshipmanagementbackend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ProfesseurDto {
    private Long id;
    private String nom;
    private String prenom;
    private String adresse;
    private String email;
    private Date dateEmbauche;
    private Date dateDepart;
    private Long annee;
}
