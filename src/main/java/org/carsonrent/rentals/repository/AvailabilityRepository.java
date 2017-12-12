package org.carsonrent.rentals.repository;

import org.carsonrent.rentals.domain.Availability;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Availability entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AvailabilityRepository extends JpaRepository<Availability,Long> {
    
}
