package com.bog.internshipmanagementbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Stage {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private int Num;
	 private String Id_prof;
	 private int Promo;
	 private int Annee;
	 private int Type;
	 private String Rapport;
	 private String Convention;
	 private String Fich_de_stage;
	 private String Fiche_evaluation;
	 private String Attestation;



}
