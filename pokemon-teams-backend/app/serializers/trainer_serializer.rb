class TrainerSerializer
  include JSONAPI::Serializer
  attributes :name, :pokemons

  set_type :trainer
  has_many :pokemons
  
end
