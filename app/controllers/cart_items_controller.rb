class CartItemsController < ApplicationController

    def create
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item
    end

    def index
        cart_items = current_user.cart_items
        render json: cart_items
    end

    def destroy
        cart_item = CartItem.find_by(id: params[:id])
        cart_item.destroy
    end

    private
    
    def cart_item_params
        params.require(:cart_item).permit(:user_id)
    end
end
