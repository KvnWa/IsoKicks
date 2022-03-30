class CartItemsController < ApplicationController
    

    def create
        puts cart_item_params
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item

    end

    def index
        cart_items = CartItem.all
        render json: cart_items
        # cart_items = current_user.cart_items
        # render json: cart_items
    end

    def destroy
        cart_item = find_item
        cart_item.destroy
    end

    private

    def find_item
        CartItem.find(params[:id])
    end

    
    def cart_item_params
        params.permit(:user_id, :size, :sneaker_id)
    end
end
