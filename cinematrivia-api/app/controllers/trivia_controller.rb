class TriviaController < ApplicationController

    def new
        trivia = Trivia.new
    end


    def create
        binding.pry
        response = RestClient::Request.execute(method: :get, url: 'https://imdb8.p.rapidapi.com/title/get-trivia?tconst=tt0944947', headers:{
            "x-rapidapi-key": "0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269",
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
        "accept": "application/json",
        "Content-Type": "application/json"
            })
            binding.pry
        data = JSON.parse response
        data["spoilt"].map do |trivia|
            binding.pry
        end

        binding.pry
        render json: data
    end
    def index
        
    end

    private

    def trivia_params
        params.require(:trivia).permit(:info, :movie_id)
    end
end
