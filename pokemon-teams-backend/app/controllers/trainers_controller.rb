class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render json: TrainerSerializer.new(trainers).to_seralized_json
    end
    
    def show
        trainer = Trainer.find(params[:id])
        render json: TrainerSerializer.new(trainer).to_seralized_json
    end
end
