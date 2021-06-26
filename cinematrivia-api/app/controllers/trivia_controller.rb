class TriviaController < ApplicationController


    def index
        url = URI("https://imdb8.p.rapidapi.com/title/get-trivia?tconst=tt0944947")
            http = Net::HTTP.new(url.host, url.port)
            http.use_ssl = true
            http.verify_mode = OpenSSL::SSL::VERIFY_NONE

            request = Net::HTTP::Get.new(url)
            request["x-rapidapi-key"] = '0ac3f5fb74msh43d4672e7cf7114p126195jsn8a05f0b35269'
            request["x-rapidapi-host"] = 'imdb8.p.rapidapi.com'

            response = http.request(request)
            binding.pry
            render json: response.read_body
    end
end
