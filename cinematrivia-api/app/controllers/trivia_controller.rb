class TriviaController < ApplicationController


    def index
        response = RestClient::Request.execute(method: :get, url: 'https://imdb8.p.rapidapi.com/title/get-trivia?tconst=tt0944947', headers:{
            "x-rapidapi-key": "0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
            })
        render json: response
    end
end
