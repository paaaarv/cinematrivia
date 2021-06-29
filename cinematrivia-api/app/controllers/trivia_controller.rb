require 'pry'

class TriviaController < ApplicationController

    def new
        trivia = Trivia.new
    end

    def index
        trivia = Trivium.where(movie_id: params["movie_id"])
        render json: TriviumSerializer.new(trivia)
    end

    private

    def trivia_params
        params.require(:trivia).permit(:info, :movie_id)
    end
end
