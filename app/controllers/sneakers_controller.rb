class SneakersController < ApplicationController
    skip_before_action :authorize

    def index
        sneakers = Sneaker.all 
        render json: sneakers
    end

    def show
        sneaker = find_sneaker
        render json: sneaker
    end

    private

    def find_sneaker
        Sneaker.find(params[:id])
    end
end
