class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render json: TrainerSerializer.new(trainers).serializable_hash
    end
    
    def show
        trainer = Trainer.find(params[:id])
        render json: TrainerSerializer.new(trainer).serializable_hash
        end
end
