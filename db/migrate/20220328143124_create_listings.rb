class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :size
      t.integer :sneaker_id

     
    end
  end
end
