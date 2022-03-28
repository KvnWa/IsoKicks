class SneakersController < ApplicationController

    def index
        sneakers = Sneaker.all 
        render json: sneakers
    end

    def show
        sneaker = Sneaker.find_by(params[:id])
        render json: sneaker
    end
end
