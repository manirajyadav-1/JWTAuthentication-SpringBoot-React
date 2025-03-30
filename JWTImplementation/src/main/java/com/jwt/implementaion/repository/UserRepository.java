package com.jwt.implementaion.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jwt.implementaion.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
	Optional<User> findByEmail(String email);
}
