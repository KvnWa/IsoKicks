class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :brand
      t.string :title
      t.integer :price
      t.string :imageone
      t.string :imagetwo
      t.string :imagethree

      t.timestamps
    end
  end
end
