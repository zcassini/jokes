package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.model.Joke;

public interface JokeRepository  extends CrudRepository<Joke, Long>{
    
}
