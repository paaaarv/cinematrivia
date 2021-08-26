require 'pry'
require 'uri'
require 'net/http'
require 'openssl'
require 'rest-client'
class Movie < ApplicationRecord
    has_many :trivia

    def create_trivia(query, id)
        response = RestClient::Request.execute(method: :get, url: 'https://imdb8.p.rapidapi.com/title/get-trivia?tconst='+query[7..-1], headers:{
            "x-rapidapi-key": "0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269",
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
        "accept": "application/json",
        "Content-Type": "application/json"
            })
        if response != "null"
            data = JSON.parse response
            data["spoilt"].map do |trivia|
                trivia= Trivium.new(info: trivia['text'],movie_id: id )
                trivia.save
        end
    end
    end

    def self.check(name, data)
        if data["message"]=="q must be provided"
            movie = nil
            return movie
        elsif self.find_by(title:name.titleize)
            movie=self.find_by(title:name.titleize)
            return movie
        elsif data["results"][0]["title"] == name.titleize
            movie = Movie.create(title: data["results"][0]["title"], image: data["results"][0]["image"]["url"], year_released: data["results"][0]["year"], query: data["results"][0]["id"])
            return movie
        else
            binding.pry
            movie=nil
            return movie
        end
    end
end
