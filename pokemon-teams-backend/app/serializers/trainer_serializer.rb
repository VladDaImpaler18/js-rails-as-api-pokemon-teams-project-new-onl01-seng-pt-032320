class TrainerSerializer
  include JSONAPI::Serializer
  attributes :id, :name
  #set_type :trainer
  has_many :pokemons
  
end
