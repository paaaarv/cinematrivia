class TriviumSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :movie
end
