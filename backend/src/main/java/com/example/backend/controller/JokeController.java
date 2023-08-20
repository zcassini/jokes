package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Joke;
import com.example.backend.repository.JokeRepository;

@RestController
@RequestMapping("/api/jokes")
public class JokeController {

    @Autowired
    private JokeRepository jokeRepository;
    
    @GetMapping
    public List<Joke> getAllJokes() {
        return (List<Joke>) jokeRepository.findAll();
    }

    @PostMapping
    public void saveJoke(@RequestBody Joke joke) {
        jokeRepository.save(joke);
    }

    
}
