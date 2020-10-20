class TrainerSerializer
    
    def initialize(trainer_object)
        @trainer = trainer_object
    end

    def to_seralized_json
        options = {
         include: {
                trainer: { only: [:id, :name]}
                pokemon: { only: [:id, :species, :nickname, :trainer_id]}
                  },
         except: [:created_at, :updated_at]}
         binding.pry
        @trainer.to_json(options)
    end
    
end