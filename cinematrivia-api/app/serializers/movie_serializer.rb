require 'pry'


class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :query, :year_released, :image
  has_many :trivia
end
