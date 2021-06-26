class TriviaSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :movie
end
