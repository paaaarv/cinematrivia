require 'pry'
require 'uri'
require 'net/http'
require 'openssl'
require 'rest-client'
class MoviesController < ApplicationController

    def new
        movie = Movie.new
    end

    def create
        title = params["_json"]
        response = RestClient::Request.execute(method: :get, url: "https://imdb8.p.rapidapi.com/title/find?q="+ title, headers:{
            "x-rapidapi-key": "0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269",
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
        "accept": "application/json",
        "Content-Type": "application/json"
            })
        data = JSON.parse response
        movie = Movie.create(title: title, image: data["results"][0]["image"]["url"], year_released: data["results"][0]["year"], query: data["results"][0]["id"])
        movie.create_trivia(movie.query,movie.id)
        options = {include:[:trivia]
        }
        render json: MovieSerializer.new(movie,options )
    end

    def show
    end

    def index
        movies= Movie.all
        render json: MovieSerializer.new(movies)

    end

    private

    def movie_params
        params.require(:movie).permit(:title)
    end
end
