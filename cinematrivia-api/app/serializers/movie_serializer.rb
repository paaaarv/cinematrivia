require 'pry'


class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :query, :year_released, :image
end
