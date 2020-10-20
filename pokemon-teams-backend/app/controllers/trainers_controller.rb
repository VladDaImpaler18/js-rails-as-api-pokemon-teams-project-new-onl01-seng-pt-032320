class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render json: TrainerSerializer.new(trainers).serializable_hash
    end
    
    def show
        trainer = Trainer.find_by(id: params[:id])
        render json: trainer, include: [:pokemons]
    end
end
