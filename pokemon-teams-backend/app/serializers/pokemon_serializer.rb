class PokemonSerializer
  include JSONAPI::Serializer
  attributes :id, :species, :nickname

  #set_type :pokemon
  belongs_to :trainer

end
