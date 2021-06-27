class TriviaController < ApplicationController

    def new
        trivia = Trivia.new
    end

    def index

    end

    private

    def trivia_params
        params.require(:trivia).permit(:info, :movie_id)
    end
end
