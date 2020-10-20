class PokemonSerializer
  include JSONAPI::Serializer
  attributes :species, :nickname#, :trainer_id

  set_type :pokemon
  set_id :trainer_id
  belongs_to :trainer

end
