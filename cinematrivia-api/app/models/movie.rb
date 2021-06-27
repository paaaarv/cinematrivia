require 'pry'
require 'uri'
require 'net/http'
require 'openssl'
require 'rest-client'
class Movie < ApplicationRecord
    has_many :trivias

    def create_trivia(query, id)
        response = RestClient::Request.execute(method: :get, url: 'https://imdb8.p.rapidapi.com/title/get-trivia?tconst='+query[7..-1], headers:{
            "x-rapidapi-key": "0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269",
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
        "accept": "application/json",
        "Content-Type": "application/json"
            })
            binding.pry
        data = JSON.parse response
        data["spoilt"].map do |trivia|
            trivia= Trivium.new(info: trivia['text'],movie_id: id )
            trivia.save
        end
    end
end
