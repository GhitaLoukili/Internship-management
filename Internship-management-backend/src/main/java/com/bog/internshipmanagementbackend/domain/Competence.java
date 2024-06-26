package com.bog.internshipmanagementbackend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Competence {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private String code;

	@Column(nullable = false)
	private String libelle;

	@Column(nullable = false)
	private String description;

	@OneToMany(mappedBy = "competence", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Exige> stages;
}
