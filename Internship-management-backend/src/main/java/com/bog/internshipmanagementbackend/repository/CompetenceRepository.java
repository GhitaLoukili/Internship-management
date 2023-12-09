package com.bog.internshipmanagementbackend.repository;

import com.bog.internshipmanagementbackend.domain.Competence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetenceRepository extends JpaRepository<Competence,String> {
}